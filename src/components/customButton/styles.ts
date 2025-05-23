import { StyleSheet } from 'react-native';
import theme from '../../assets/themes/THEMES';

export const styles = StyleSheet.create({
  buttonContainer: {
    width: 300,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.blue,
  },
  text: {
    fontFamily: theme.fonts.medium,
    color: theme.colors.textLight,
    fontSize: 16,
  },
});
