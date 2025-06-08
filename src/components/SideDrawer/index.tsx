import React, { useEffect, useRef, ReactNode } from 'react';
import {
    Animated,
    View,
    Pressable,
    Dimensions,
    Text,
} from 'react-native';
import { Portal } from 'react-native-paper';
import { X } from 'phosphor-react-native';

import styles, { drawerWidth } from './styles';
import theme from '../../assets/themes/THEMES';

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
