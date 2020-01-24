import React, { Component } from 'react';

import { View, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import RepositoriesHeader from '~/components/Headers/Repositories';
import styles from './styles';

export default class Repositories extends Component {
  constructor() {
    super();
    this.state = {
      repositories: [],
      repositoryInput: '',
    };
  }

  render() {
    const { repositoryInput } = this.state;
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
                onChange={text => this.setState({ repositoryInput: text })}
              />
              <TouchableOpacity onPress={() => {}}>
                <Icon name="plus" size={20} style={styles.formIcon} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
