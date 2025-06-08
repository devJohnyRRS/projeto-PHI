import { StyleSheet } from 'react-native';
import theme from '../../assets/themes/THEMES';

const styles = StyleSheet.create({
  container: {
    padding: 8,
    borderRadius: 5,
    marginTop: 10,
    width: '100%',
  },
  text: {
    fontSize: 13,
    color: theme.colors.text,
  },
});

export default styles;
