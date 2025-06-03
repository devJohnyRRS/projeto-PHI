import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import FotoPerfil from '../FotoPerfil'
import { BellSimple, BellSimpleRinging, MagnifyingGlass } from 'phosphor-react-native'
import theme from '../../assets/themes/THEMES'
import { useTypedNavigation } from '../../hooks/useNavigate'
import DrawerNotificacao from '../../screens/DrawerNotificacao'
import { useNotifications } from '../../context/NotificacaoContext';
import CustomImput from '../customInput/CustomInput'

export default function PerfilHeader() {
    const icon = require("../../../assets/favicon.png");
    const profile = require("../../../assets/default-profile.jpg");

    const navigation = useTypedNavigation();
    const [drawerVisible, setDrawerVisible] = useState(false);

    const { hasNewNotifications } = useNotifications();

    const toggleDrawer = () => setDrawerVisible(prev => !prev);

    const handleNavigate = () => {
        navigation.navigate("Perfil");
    };

    return (
        <>
            <View style={{
                width: '100%',
                height: 230,
                backgroundColor: theme.colors.secondary,
                borderBottomEndRadius: 25,
                borderBottomStartRadius: 25,
                padding: 24,
                justifyContent: 'center',
                alignItems: 'center',
                gap: 10,
            }}>
                <Image source={icon} style={{ width: 50, height: 50, alignSelf: 'flex-start' }} />

                <View style={{ justifyContent: 'space-between', alignItems: 'center', width: '100%', flexDirection: 'row', }}>
                    <FotoPerfil name='Gustavo Souza' username='@GustavoSouza1304' image={profile} type='light' onPress={() => handleNavigate()} />
                    <TouchableOpacity onPress={toggleDrawer}>
                        {hasNewNotifications ? (
                            <BellSimpleRinging color={theme.colors.textLight} weight='fill' />
                        ) : (
                            <BellSimple color={theme.colors.textLight} weight='fill' />
                        )}
                    </TouchableOpacity>
                </View>

                <View style={{ width: '100%', position: 'relative' }}>
                    <CustomImput
                        placeholder="Pesquisar"
                        placeholderTextColor={theme.colors.gray}
                        keyboardType="default"
                        errorMessage="Preencha o campo"
                    />
                    <MagnifyingGlass
                        color={theme.colors.lightGray}
                        size={24}
                        style={{ position: 'absolute', right: 18, top: 11 }}
                    />
                </View>
            </View>

            <DrawerNotificacao visible={drawerVisible} onClose={() => setDrawerVisible(false)} />
        </>
    );
}
