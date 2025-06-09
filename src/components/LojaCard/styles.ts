import { StyleSheet } from 'react-native';
import theme from '../../assets/themes/THEMES';

export default StyleSheet.create({
  card: {
    backgroundColor: theme.colors.textLight,
    padding: 10,
    borderRadius: 5,
    flexDirection: 'row',
    gap: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imageContainer: {
    maxWidth: 180,
    maxHeight: 120,
    overflow: 'hidden',
  },
  lockIcon: {
    position: 'absolute',
    right: 60,
    top: 35,
    zIndex: 99,
  },
  moldura: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 4,
    marginHorizontal: 25,
  },
  papel: {
    width: 170,
    height: 120,
    borderRadius: 5,
  },
  icone: {
    width: 120,
    height: 120,
    borderRadius: 75,
    marginHorizontal: 25,
  },
  infoContainer: {
    gap: 10,
    flex: 1,
  },
  itemType: {
    color: theme.colors.text,
    fontSize: 16,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 13,
  },
  levelText: {
    color: theme.colors.gray,
    fontSize: 13,
  },
  bottomRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  price: {
    color: theme.colors.gold,
    fontWeight: 'bold',
  },
});
