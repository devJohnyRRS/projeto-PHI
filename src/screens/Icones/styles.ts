import { StyleSheet } from 'react-native';
import theme from '../../assets/themes/THEMES';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  content: {
    gap: 10,
    margin: 15,
    borderRadius: 5,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: theme.colors.textLight,
    padding: 10,
  },
  headerLeft: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  backButton: {
    width: 24,
  },
  title: {
    color: theme.colors.text,
    fontSize: 16,
    fontWeight: 'bold',
  },
  filterButton: {
    width: 24,
  },
});
