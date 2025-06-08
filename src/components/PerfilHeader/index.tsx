import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import FotoPerfil from '../FotoPerfil';
import { BellSimple, BellSimpleRinging, MagnifyingGlass } from 'phosphor-react-native';
import theme from '../../assets/themes/THEMES';
import { useTypedNavigation } from '../../hooks/useNavigate';
import DrawerNotificacao from '../DrawerNotificacao';
import { useNotifications } from '../../context/NotificacaoContext';
import CustomImput from '../customInput/CustomInput';
import styles from './styles';

export default function PerfilHeader() {
    const icon = require("../../../assets/favicon.png");
    const profile = require("../../../assets/gustavo.png");

    const navigation = useTypedNavigation();
    const [drawerVisible, setDrawerVisible] = useState(false);

    const { hasNewNotifications } = useNotifications();

    const toggleDrawer = () => setDrawerVisible(prev => !prev);

    const handleNavigate = () => {
        navigation.navigate("Perfil");
    };

    return (
        <>
            <View style={styles.container}>
                <Image source={icon} style={styles.icon} />

                <View style={styles.profileRow}>
                    <FotoPerfil
                        name='Gustavo Souza'
                        username='@GustavoSouza1304'
                        image={profile}
                        type='light'
                        onPress={handleNavigate}
                    />
                    <TouchableOpacity onPress={toggleDrawer}>
                        {hasNewNotifications ? (
                            <BellSimpleRinging color={theme.colors.textLight} weight='fill' />
                        ) : (
                            <BellSimple color={theme.colors.textLight} weight='fill' />
                        )}
                    </TouchableOpacity>
                </View>

                <View style={styles.searchContainer}>
                    <CustomImput
                        placeholder="Pesquisar"
                        placeholderTextColor={theme.colors.gray}
                        keyboardType="default"
                        errorMessage="Preencha o campo"
                    />
                    <MagnifyingGlass
                        color={theme.colors.lightGray}
                        size={24}
                        style={styles.searchIcon}
                    />
                </View>
            </View>

            <DrawerNotificacao visible={drawerVisible} onClose={() => setDrawerVisible(false)} />
        </>
    );
}
