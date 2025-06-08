import { StyleSheet, Dimensions } from 'react-native';
import theme from '../../assets/themes/THEMES';

const { width, height } = Dimensions.get('screen');
export const drawerWidth = width * 0.6;

const styles = StyleSheet.create({
  overlayContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 999,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  drawer: {
    position: 'absolute',
    right: 0,
    height: height,
    width: drawerWidth,
    backgroundColor: theme.colors.textLight,
    padding: 24,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    color: theme.colors.text,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
