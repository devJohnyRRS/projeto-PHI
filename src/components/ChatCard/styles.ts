import { StyleSheet } from 'react-native';
import theme from '../../assets/themes/THEMES';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.textLight,
    width: '100%',
    marginBottom: 20,
    padding: 10,
    borderRadius: 5,
    flexDirection: 'column',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  time: {
    fontSize: 10,
    textAlign: 'right',
  },
  contentWrapper: {
    marginTop: 10,
    gap: 10,
  },
  content: {
    fontSize: 16,
  },
  footer: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  emptyRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
});
