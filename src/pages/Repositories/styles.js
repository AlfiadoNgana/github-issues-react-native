import { StyleSheet } from 'react-native';

import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lighter,
  },
  empty: {
    color: colors.dark,
    marginTop: metrics.baseMargin * 2,
    textAlign: 'center',
  },
  error: {
    color: colors.danger,
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: metrics.basePadding,
    textAlign: 'center',
  },
  containerForm: {
    padding: metrics.basePadding,
  },
  form: {
    borderBottomColor: colors.light,
    borderBottomWidth: 1,
    paddingBottom: metrics.basePadding,
  },
  formIcon: {
    color: colors.dark,
  },
  formInput: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    color: colors.dark,
    fontSize: 14,
    marginRight: metrics.baseMargin,
    padding: metrics.basePadding / 2,
  },
  inputContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  listContainer: {
    paddingLeft: metrics.basePadding,
    marginLeft: metrics.basePadding,
  },
  loading: {
    marginTop: metrics.baseMargin * 2,
  },
  placeholder: {
    color: colors.regular,
  },
  author: {
    color: colors.regular,
    fontSize: 14,
  },
  avatar: {
    width: 50,
    height: 50,
  },
  containerList: {
    alignItems: 'center',
    borderRadius: metrics.baseRadius,
    backgroundColor: colors.white,
    flexDirection: 'row',
    marginBottom: metrics.baseMargin,
    padding: metrics.basePadding,
  },
  icon: {
    color: colors.light,
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: metrics.baseMargin,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 3,
  },
});

export default styles;
