import { View, Text, Image } from 'react-native'
import React from 'react'
import FotoPerfil from '../FotoPerfil'
import { BellSimple, MagnifyingGlass } from 'phosphor-react-native'
import CustomImput from '../customInput/CustomImput'
import theme from '../../assets/themes/THEMES'
import { useTypedNavigation } from '../../hooks/useNavigate'

export default function PerfilHeader() {
    const icon = require("../../../assets/favicon.png");
    const profile = require("../../../assets/gustavo.png");

    const navigation = useTypedNavigation();

    const handleNavigation = () => {
        navigation.navigate("Perfil");
    }

    return (
        <View style={{
            width: '100%',
            height: 230,
            backgroundColor: theme.colors.secondary,
            borderBottomEndRadius: 20,
            borderBottomStartRadius: 20,
            padding: 24,
            justifyContent: 'center',
            alignItems: 'center',
            gap: 10,
        }}>
            <Image source={icon} style={{ width: 50, height: 50, alignSelf: 'flex-start' }} />

            <View style={{ justifyContent: 'space-between', alignItems: 'center', width: '100%', flexDirection: 'row', }}>
                <FotoPerfil name='Gustavo Souza' username='@GustavoSouza1304' image={profile} type='light' onPress={handleNavigation} />
                <BellSimple color={theme.colors.textLight} weight='fill' />
            </View>

            <View style={{
                width: '100%',
                position: 'relative',
            }}>

                <CustomImput
                    placeholder="Pesquisar"
                    placeholderTextColor={theme.colors.gray}


                    keyboardType="email-address"

                    errorMessage="Preencha o email" />

                <MagnifyingGlass
                    color={theme.colors.lightGray}
                    size={24}

                    style={{
                        position: 'absolute',
                        right: 18,
                        top: 11,

                    }}
                />
            </View>
        </View>
    )
}