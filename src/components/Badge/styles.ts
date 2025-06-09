import { StyleSheet } from 'react-native';
import theme from '../../assets/themes/THEMES';

export const styles = StyleSheet.create({
  container: {
    width: 60,
    backgroundColor: theme.colors.lightGray,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
  },
  text: {
    fontSize: 10,
  },
});
