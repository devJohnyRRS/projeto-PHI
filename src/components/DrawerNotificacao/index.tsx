import React, { useEffect, useRef } from 'react';
import {
    Animated,
    StyleSheet,
    View,
    Pressable,
    Dimensions,
    Text,
    ScrollView,
    TouchableOpacity,
    Modal
} from 'react-native';
import theme from '../../assets/themes/THEMES';
import { Circle, X } from 'phosphor-react-native';
import { useNotifications } from '../../context/NotificacaoContext';
import SideDrawer from '../../components/SideDrawer';
import { Portal } from 'react-native-paper';
import CustomButton from '../../components/customButton/CustomButton';
import { styles } from './styles';

const { width, height } = Dimensions.get('screen');
const drawerWidth = width * 0.6;

interface DrawerNotificacaoProps {
    visible: boolean;
    onClose: () => void;
};

interface Notification {
    id: string;
    name: string;
    visualized: boolean;
}

export default function DrawerNotificacao({ visible, onClose }: DrawerNotificacaoProps) {

    const { notifications, setNotifications } = useNotifications();

    const translateX = useRef(new Animated.Value(drawerWidth)).current;

    const [shouldRender, setShouldRender] = React.useState(visible);

    const [selectedNotification, setSelectedNotification] = React.useState<Notification | null>(null);

    const handleSeenNotifications = () => {
        setNotifications(prev =>
            prev.map(n => ({ ...n, visualized: true }))
        );
    };

    const handleOpenNotification = (notificationId: string) => {
        setNotifications(prev =>
            prev.map(n =>
                n.id === notificationId ? { ...n, visualized: true } : n
            )
        );

        const selected = notifications.find(n => n.id === notificationId);
        if (selected) {
            setSelectedNotification({ ...selected, visualized: true });
        }
    };

    useEffect(() => {
        if (visible) setShouldRender(true);
        Animated.timing(translateX, {
            toValue: visible ? 0 : drawerWidth,
            duration: 250,
            useNativeDriver: true,
        }).start(() => {
            if (!visible) setShouldRender(false);
        });
    }, [visible]);

    if (!shouldRender) return null;

    return (
        <Portal>
            <SideDrawer visible={visible} onClose={onClose} title="Notificações">
                <TouchableOpacity onPress={handleSeenNotifications} style={styles.lerTodas}>
                    <Text style={styles.lerTodasText}>Ler todas</Text>
                </TouchableOpacity>

                <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent}>
                    {notifications.map((notification) => (
                        <TouchableOpacity
                            key={notification.id}
                            onPress={() => handleOpenNotification(notification.id)}
                            style={styles.notificationItem}
                        >
                            <Text
                                style={[
                                    styles.notificationText,
                                    notification.visualized ? styles.normalText : styles.boldText
                                ]}
                                numberOfLines={1}
                                ellipsizeMode="tail"
                            >
                                {notification.name}
                            </Text>
                            {!notification.visualized && (
                                <Circle color={theme.colors.primary} weight="fill" size={12} />
                            )}
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </SideDrawer>

            <Modal
                visible={!!selectedNotification}
                transparent
                animationType="fade"
                onRequestClose={() => setSelectedNotification(null)}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContent}>

                        <View style={styles.modalHeader}>
                            <Text style={styles.modalTitle}>Notificação</Text>
                            <Pressable
                                style={styles.modalCloseButton}
                                hitSlop={10}
                                onPress={() => setSelectedNotification(null)}
                            >
                                <X size={20} color={theme.colors.gray} />
                            </Pressable>
                        </View>

                        <Text style={styles.modalText}>
                            {selectedNotification?.name}
                        </Text>

                        <CustomButton
                            title='Ver'
                            onPress={() => console.log('apertou')}
                            style={styles.modalButton}
                        />

                    </View>
                </View>
            </Modal>
        </Portal>
    );
}
