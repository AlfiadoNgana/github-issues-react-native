import React, { Component } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { withNavigation } from 'react-navigation';
import {
  View,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
  Text,
  FlatList,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import api from '~/services/api';
import RepositoriesHeader from '~/components/Headers/Repositories';
import styles from './styles';

export default class Repositories extends Component {
  constructor() {
    super();
    this.state = {
      repositoryInput: '',
      repositories: [],
      loading: false,
      error: '',
      refreshing: false,
      loadingList: true,
    };
  }

  componentDidMount() {
    this.loadRepositories();
  }

  loadRepositories = async () => {
    const repositories = JSON.parse(
      await AsyncStorage.getItem('@gitIssues:repositories')
    );
    this.setState({
      repositories: repositories || [],
      loadingList: false,
      refreshing: false,
    });
  };

  addRepository = async () => {
    const { repositoryInput, repositories, loadingList } = this.state;

    if (loadingList) return;

    this.setState({ loading: true });

    if (repositoryInput === '') {
      this.setState({ error: 'preencha o campo', loading: false });
      return;
    }

    if (
      repositories.find(repository => repository.full_name === repositoryInput)
    ) {
      this.setState({
        error: 'o repositorio ja foi adicionado',
        loading: false,
      });
      return;
    }

    try {
      const { data } = await api.get(`/repos/${repositoryInput}`);
      const reposData = {
        id: data.id,
        name: data.name,
        full_name: data.full_name,
        organization: data.owner.login,
        avatar: data.owner.avatar_url,
      };
      await AsyncStorage.setItem(
        '@gitIssues:repositories',
        JSON.stringify([...repositories, reposData])
      );
      this.setState({
        loading: false,
        error: '',
        repositories: [...repositories, reposData],
      });
    } catch (error) {
      this.setState({ error: 'repositorio inexistente' });
    } finally {
      this.setState({ loading: false });
    }
  };

  renderListItem = ({ item }) => (
    <TouchableOpacity style={styles.containerList} onPress={() => {}}>
      <Image style={styles.avatar} source={{ uri: item.avatar }} />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{item.organization}</Text>
        <Text style={styles.author}>{item.name}</Text>
      </View>
      <Icon name="chevron-right" size={16} style={styles.icon} />
    </TouchableOpacity>
  );

  renderList = () => {
    const { repositories, refreshing } = this.state;

    return !repositories.length ? (
      <Text style={styles.empty}>Nenhum Repositorio Adicionado</Text>
    ) : (
      <FlatList
        data={repositories}
        keyExtractor={item => String(item.id)}
        renderItem={this.renderListItem}
        onRefresh={this.loadRepositories}
        refreshing={refreshing}
        style={styles.listContainer}
      />
    );
  };

  render() {
    const { repositoryInput, loading, error, loadingList } = this.state;
    return (
      <View style={styles.container}>
        <RepositoriesHeader title="GitIssues" />
        <View style={styles.containerForm}>
          <View style={styles.form}>
            <View style={styles.inputContainer}>
              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Adicionar um novo repositorio"
                placeholderTextColor={styles.placeholder.color}
                style={styles.formInput}
                value={repositoryInput}
                onChangeText={text => this.setState({ repositoryInput: text })}
              />
              <TouchableOpacity onPress={this.addRepository}>
                {loading ? (
                  <ActivityIndicator size="small" color="#fff" />
                ) : (
                  <Icon name="plus" size={20} style={styles.formIcon} />
                )}
              </TouchableOpacity>
            </View>
          </View>
          {!!error && <Text style={styles.error}>{error}</Text>}
        </View>
        {loadingList ? (
          <ActivityIndicator size="large" style={styles.loading} />
        ) : (
          this.renderList()
        )}
      </View>
    );
  }
}
