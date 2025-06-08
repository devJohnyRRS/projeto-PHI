import { StyleSheet } from 'react-native';
import theme from '../../assets/themes/THEMES';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  headerContainer: {
    width: '100%',
    height: 180,
    backgroundColor: theme.colors.secondary,
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
    padding: 24,
    alignItems: 'center',
    gap: 10,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginTop: 30,
  },
  iconButton: {
    padding: 5,
  },
  profileImageContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    overflow: 'hidden',
    position: 'absolute',
    bottom: -60,
    left: 30,
  },
  profileImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  levelContainer: {
    position: 'absolute',
    left: 110,
    bottom: -60,
    flexDirection: 'row',
    alignItems: 'center',
  },
  levelCircle: {
    width: 40,
    height: 40,
    borderRadius: 40,
    padding: 5,
    borderColor: theme.colors.primary,
    borderWidth: 2,
    backgroundColor: theme.colors.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  levelText: {
    textAlign: 'center',
  },
  content: {
    marginHorizontal: 24,
    marginTop: 10,
    gap: 10,
    position: 'relative',
  },
  flagContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    alignSelf: 'flex-end',
  },
  flagImage: {
    width: 30,
    height: 20,
  },
  userInfo: {
    marginTop: 30,
    gap: 10,
  },
  userName: {
    gap: 5,
  },
  userNameText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  rating: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  ratingText: {
    fontSize: 13,
    color: theme.colors.gray,
  },
  followContainer: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  followGroup: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  followItem: {
    alignItems: 'center',
  },
  followTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  editButton: {
    backgroundColor: theme.colors.primary,
    borderRadius: 25,
    width: 50,
  },
  tagContainer: {
    backgroundColor: theme.colors.bronze,
    width: '100%',
    height: 50,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tagText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: theme.colors.textLight,
  },
  section: {
    borderBottomWidth: 3,
    borderColor: theme.colors.lightGray,
  },
  sectionContent: {
    marginVertical: 10,
    marginHorizontal: 24,
    gap: 10,
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  sectionText: {
    fontSize: 13,
    color: theme.colors.text,
  },
  emptyText: {
    fontSize: 13,
    color: theme.colors.gray,
  },
  trophiesContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  trophyItem: {
    width: 90,
    alignItems: 'center',
    justifyContent: 'center',
  },
  trophyIcon: {
    width: 50,
    height: 50,
  },
  trophyName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#b3bcc2',
    textAlign: 'center',
  },
  commentsHeader: {
    flexDirection: 'row',
    gap: 5,
  },
  viewButton: {
    width: 30,
    height: 20,
  },
  viewButtonText: {
    fontSize: 13,
    color: theme.colors.text,
    fontWeight: 'bold',
  },
  mySubjects: {
    gap: 10,
    margin: 15,
    borderRadius: 5,
  },
  subjectsHeader: {
    flexDirection: 'row',
    gap: 5,
  },
  subjectsContent: {
    gap: 10,
  },
  assuntoButton: {
    marginBottom: 5,
  },
  postContent: {
    fontSize: 16,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalContent: {
    backgroundColor: theme.colors.background,
    borderRadius: 10,
    padding: 20,
    gap: 10,
    width: '100%',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: theme.colors.text,
  },
  modalDescription: {
    fontSize: 14,
    color: theme.colors.gray,
  },
});
