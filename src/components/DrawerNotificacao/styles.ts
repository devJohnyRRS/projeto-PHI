import { StyleSheet } from 'react-native';
import theme from '../../assets/themes/THEMES';

export const styles = StyleSheet.create({
  lerTodas: {
    paddingBottom: 5,
  },
  lerTodasText: {
    color: theme.colors.gray,
    fontSize: 13,
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 15,
  },
  notificationItem: {
    backgroundColor: theme.colors.background,
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  notificationText: {
    color: theme.colors.text,
    flexShrink: 1,
    flex: 1,
    marginRight: 8,
  },
  boldText: {
    fontWeight: 'bold',
  },
  normalText: {
    fontWeight: 'normal',
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
  modalCloseButton: {
    padding: 8,
  },
  modalText: {
    fontSize: 15,
    color: theme.colors.text,
  },
  modalButton: {
    backgroundColor: theme.colors.primary,
    width: 80,
    alignSelf: 'flex-end',
    marginBottom: 8,
  },
});
