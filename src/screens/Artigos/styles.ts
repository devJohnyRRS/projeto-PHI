import { StyleSheet } from 'react-native';
import theme from '../../assets/themes/THEMES';

export const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  container: {
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
  },
  iconWrapper: {
    width: 24,
  },
  headerText: {
    color: theme.colors.text,
    fontSize: 16,
    fontWeight: 'bold',
  },
  postTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  postDescription: {
    fontSize: 14,
    color: theme.colors.text,
  },
  readMore: {
    color: theme.colors.secondary,
    marginTop: 4,
  },
});
