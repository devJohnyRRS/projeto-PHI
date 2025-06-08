import { StyleSheet } from 'react-native';
import theme from '../../assets/themes/THEMES';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 5,
    alignContent: 'center',
    alignItems: 'center',
  },
  imageWrapper: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: 'hidden',
    padding: 2,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    borderRadius: 20,
  },
  textWrapper: {
    gap: 0,
  },
  textWrapperLight: {
    gap: 4,
  },
  nameText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  usernameText: {
    fontSize: 13,
  },
  textLight: {
    color: theme.colors.textLight,
  },
  textDark: {
    color: theme.colors.text,
  },
});
