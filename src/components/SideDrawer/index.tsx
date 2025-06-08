// components/SideDrawer.tsx
import React, { useEffect, useRef, ReactNode } from 'react';
import {
    Animated,
    StyleSheet,
    View,
    Pressable,
    Dimensions,
    Text,
} from 'react-native';
import { Portal } from 'react-native-paper';
import theme from '../../assets/themes/THEMES';
import { X } from 'phosphor-react-native';

const { width, height } = Dimensions.get('screen');
const drawerWidth = width * 0.6;

interface SideDrawerProps {
    visible: boolean;
    onClose: () => void;
    title?: string;
    children: ReactNode;
}

export default function SideDrawer({ visible, onClose, title, children }: SideDrawerProps) {
    const translateX = useRef(new Animated.Value(drawerWidth)).current;
    const [shouldRender, setShouldRender] = React.useState(visible);

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
                    {title && (
                        <View style={styles.header}>
                            <Text style={styles.title}>{title}</Text>
                            <Pressable onPress={onClose} hitSlop={10} style={{ padding: 8 }}>
                                <X size={20} color={theme.colors.gray} />
                            </Pressable>
                        </View>
                    )}

                    <View style={{ flex: 1 }}>{children}</View>
                </Animated.View>
            </View>
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
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    title: {
        color: theme.colors.text,
        fontSize: 16,
        fontWeight: 'bold',
    },
});
