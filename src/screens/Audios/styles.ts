import { StyleSheet } from 'react-native';
import theme from '../../assets/themes/THEMES';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  contentWrapper: {
    gap: 10,
    marginBottom: 15,
    marginHorizontal: 15,
    marginTop: 15,
    borderRadius: 5,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: theme.colors.textLight,
    padding: 10,
  },
  headerLeft: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  iconButton: {
    width: 24,
  },
  title: {
    color: theme.colors.text,
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 4,
  },
  postTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
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
