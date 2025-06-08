import { StyleSheet } from 'react-native';
import theme from '../../assets/themes/THEMES';

export const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: theme.colors.textLight,
  },
  backgroundImage: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
    opacity: 0.6,
  },
  icon: {
    position: 'absolute',
    width: 50,
    height: 50,
    alignSelf: 'flex-start',
    top: 30,
    left: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    color: theme.colors.gold,
  },
  benefitsContainer: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  benefitsList: {
    gap: 10,
  },
  plansContainer: {
    paddingHorizontal: 20,
  },
  planCardsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  subscribeButton: {
    backgroundColor: theme.colors.gold,
    alignSelf: 'center',
    marginVertical: 20,
  },
});
