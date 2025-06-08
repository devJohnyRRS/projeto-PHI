import { StyleSheet } from 'react-native';
import theme from '../../assets/themes/THEMES';

export const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    position: 'relative',
  },
  bannerContainer: {
    height: 160,
    borderRadius: 20,
    justifyContent: 'center',
  },
  bannerImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    opacity: 0.3,
    borderRadius: 20,
  },
  bannerContent: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 70,
  },
  textWrapper: {
    maxWidth: '100%',
  },
  title: {
    color: theme.colors.primary,
    fontSize: 20,
    fontWeight: 'bold',
  },
  description: {
    color: theme.colors.primary,
    fontSize: 16,
    fontWeight: '600',
    marginTop: 5,
  },
  navigationButtons: {
    position: 'absolute',
    top: 70,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 32,
  },
  arrowButton: {
    backgroundColor: theme.colors.primary,
    borderRadius: 20,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  indicatorRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
    marginTop: 8,
  },
});
