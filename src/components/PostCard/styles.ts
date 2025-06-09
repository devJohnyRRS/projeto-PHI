import { StyleSheet } from 'react-native';
import theme from '../../assets/themes/THEMES';

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.textLight,
    width: '100%',
    padding: 10,
    borderRadius: 5,
    flexDirection: 'column',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  typeInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  typeText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: theme.colors.text,
  },
  badgeRow: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  time: {
    fontSize: 10,
    textAlign: 'right',
    marginTop: 5,
  },
  body: {
    marginTop: 5,
    gap: 10,
  },
  footer: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconText: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  iconGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  footerText: {
    fontSize: 16,
    color: theme.colors.gray,
  },
});

export default styles;
