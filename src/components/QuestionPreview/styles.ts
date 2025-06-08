import { StyleSheet } from 'react-native';
import theme from '../../assets/themes/THEMES';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingVertical: 10,
    backgroundColor: theme.colors.textLight,
    gap: 5,
    borderRadius: 5,
  },
  textWrapper: {
    marginBottom: 5,
  },
  title: {
    fontSize: 13,
    color: theme.colors.text,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 12,
    color: theme.colors.text,
  },
});

export default styles;
