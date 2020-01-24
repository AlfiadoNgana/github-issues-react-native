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
    padding: metrics.basePadding,
  },
  loading: {
    marginTop: metrics.baseMargin * 2,
  },
  placeholder: {
    color: colors.regular,
  },
});

export default styles;
