import { StyleSheet } from 'react-native';
import theme from '../../assets/themes/THEMES';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  contentWrapper: {
    gap: 10,
    margin: 15,
    borderRadius: 5,
  },
  heading: {
    color: theme.colors.text,
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  navigationRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 20,
  },
  navButton: {
    flex: 1,
    alignItems: 'center',
  },
  navIconBackground: {
    backgroundColor: theme.colors.textLight,
    padding: 8,
    borderRadius: 10,
  },
  navLabel: {
    color: theme.colors.text,
    fontSize: 16,
    marginTop: 4,
  },
  popularesWrapper: {
    gap: 10,
  },
  popularesHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    marginBottom: 10,
  },
  popularesTitle: {
    color: theme.colors.text,
    fontSize: 16,
    fontWeight: 'bold',
  },
  postTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  postDescription: {
    fontSize: 14,
    color: theme.colors.text,
  },
  linkText: {
    color: theme.colors.secondary,
    marginTop: 4,
  },
  audioContainer: {
    gap: 10,
    alignItems: 'center',
  },
  postImage: {
    width: '100%',
    height: 200,
    borderRadius: 5,
  },
  sliderWrapper: {
    width: '100%',
    paddingHorizontal: 20,
  },
  slider: {
    width: '100%',
    height: 40,
  },
  timeWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 200,
  },
});
