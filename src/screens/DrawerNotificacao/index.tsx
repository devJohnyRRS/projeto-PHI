// components/DrawerNotificacao.tsx
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
import { Portal } from 'react-native-paper';
import theme from '../../assets/themes/THEMES';
import { Circle, X } from 'phosphor-react-native';
import CustomButton from '../../components/customButton/CustomButton';
import { useNotifications } from '../../context/NotificacaoContext';

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
            <View style={styles.overlayContainer}>
                <Pressable style={styles.overlay} onPress={onClose} />

                <Animated.View style={[styles.drawer, { transform: [{ translateX }] }]}>
                    <View style={{ flex: 1, marginTop: 24 }}>
                        <Text style={{ color: theme.colors.text, fontSize: 16, fontWeight: 'bold' }}>
                            Notificações
                        </Text>

                        <TouchableOpacity onPress={handleSeenNotifications}>
                            <Text style={{ color: theme.colors.gray, fontSize: 13, marginBottom: 12 }}>
                                Ler todas
                            </Text>
                        </TouchableOpacity>

                        <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingBottom: 40 }}>
                            {notifications.map((notification) => (
                                <TouchableOpacity
                                    key={notification.id}
                                    onPress={() => handleOpenNotification(notification.id)}
                                    style={{
                                        backgroundColor: theme.colors.background,
                                        padding: 10,
                                        borderRadius: 5,
                                        marginBottom: 10,
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                    }}
                                >
                                    <Text
                                        style={{
                                            color: theme.colors.text,
                                            fontWeight: notification.visualized ? 'normal' : 'bold',
                                            flexShrink: 1,
                                            flex: 1,
                                            marginRight: 8,
                                        }}
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

                    </View>
                </Animated.View>

            </View>

            <Modal
                visible={!!selectedNotification}
                transparent
                animationType="fade"
                onRequestClose={() => setSelectedNotification(null)}
            >
                <View style={{
                    flex: 1,
                    backgroundColor: 'rgba(0,0,0,0.4)',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 20
                }}>
                    <View style={{
                        backgroundColor: theme.colors.background,
                        borderRadius: 10,
                        padding: 20,
                        gap: 10,
                        width: '100%',
                    }}>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>

                            <Text style={{ fontSize: 16, fontWeight: 'bold', color: theme.colors.text }}>
                                Notificação
                            </Text>
                            <Pressable
                                style={{ padding: 8 }}
                                hitSlop={10}
                                onPress={() => setSelectedNotification(null)}
                            >
                                <X size={20} color={theme.colors.gray} />
                            </Pressable>
                        </View>

                        <Text style={{ fontSize: 15, color: theme.colors.text }}>
                            {selectedNotification?.name}
                        </Text>

                        <CustomButton title='Ver' onPress={() => console.log('apertou')} style={{ backgroundColor: theme.colors.primary, width: 80, alignSelf: 'flex-end', marginBottom: 8 }} />

                    </View>
                </View>
            </Modal>
        </Portal>
    );
}

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

});
