import { StyleSheet } from 'react-native';
import theme from '../../assets/themes/THEMES';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: theme.colors.textLight,
  },
  header: {
    marginTop: 30,
    gap: 10,
    width: '100%',
  },
  goBackButton: {
    padding: 5,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  profileImageWrapper: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: 'hidden',
  },
  profileImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    borderRadius: 20,
  },
  publishButton: {
    backgroundColor: theme.colors.primary,
    width: 100,
  },
  inputWrapper: {
    marginTop: 20,
  },
  textInput: {
    fontSize: 18,
    color: theme.colors.text,
    paddingTop: 10,
    paddingBottom: 20,
    minHeight: 100,
    textAlignVertical: 'top',
  },
});
