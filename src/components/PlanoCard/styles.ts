import { StyleSheet } from 'react-native';
import theme from '../../assets/themes/THEMES';

const styles = StyleSheet.create({
  card: {
    flex: 1,
    padding: 15,
    borderRadius: 10,
    borderColor: '#f0f0f0',
    alignItems: 'center',
    width: '30%',
    height: 125,
  },
  title: {
    fontSize: 13,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 13,
    marginTop: 5,
  },
  recommendedBox: {
    marginTop: 10,
    paddingHorizontal: 5,
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
