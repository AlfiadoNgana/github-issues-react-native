import React from 'react';
import PropTypes from 'prop-types';

import { View, Text } from 'react-native';

import styles from './styles';

const RepositoriesHeader = ({ title }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

RepositoriesHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default RepositoriesHeader;
