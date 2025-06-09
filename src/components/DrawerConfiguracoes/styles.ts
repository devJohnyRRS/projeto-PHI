import { StyleSheet } from 'react-native';
import theme from '../../assets/themes/THEMES';

export const styles = StyleSheet.create({
  title: {
    color: theme.colors.text,
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 10,
  },
  container: {
    gap: 10,
  },
  boldText: {
    color: theme.colors.text,
    fontWeight: 'bold',
  },
  indentedText: {
    color: theme.colors.text,
    marginLeft: 10,
  },
  redBoldText: {
    color: 'red',
    fontWeight: 'bold',
  },
});
