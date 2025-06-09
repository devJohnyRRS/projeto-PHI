import { StyleSheet } from 'react-native';
import theme from '../../assets/themes/THEMES';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 230,
    backgroundColor: theme.colors.secondary,
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  icon: {
    width: 50,
    height: 50,
    alignSelf: 'flex-start',
  },
  profileRow: {
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    flexDirection: 'row',
  },
  searchContainer: {
    marginTop: 30,
    width: '100%',
    position: 'relative',
  },
  searchIcon: {
    position: 'absolute',
    right: 18,
    bottom: -12,
  },
});

export default styles;
