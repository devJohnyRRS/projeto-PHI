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
  title: {
    color: theme.colors.text,
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  navigationIconsContainer: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 10,
  },
  navigationIcon: {
    flex: 1,
    alignItems: 'center',
  },
  iconBackground: {
    backgroundColor: theme.colors.textLight,
    padding: 8,
    borderRadius: 10,
    marginBottom: 4,
  },
  iconLabel: {
    color: theme.colors.text,
    fontSize: 16,
    textAlign: 'center',
  },
  popularesSection: {
    gap: 10,
  },
  popularesHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    marginBottom: 5,
  },
  popularesTitle: {
    color: theme.colors.text,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
