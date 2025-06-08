import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import FotoPerfil from '../FotoPerfil'
import { BellSimple, BellSimpleRinging, MagnifyingGlass, ChatCircleText } from 'phosphor-react-native'
import theme from '../../assets/themes/THEMES'
import { useTypedNavigation } from '../../hooks/useNavigate'
import CustomImput from '../customInput/CustomInput'
import HeaderButtons from '../Buttons/HeaderButtons'

export default function PerfilHeader() {
    const icon = require("../../../assets/favicon.png");
    const profile = require("../../../assets/gustavo.png");

    const navigation = useTypedNavigation();

    const handleNavigatePerfil = () => {
        navigation.navigate("Perfil");
    };

    return(
        <>
            <View style={{
                width: '100%',
                height: 230,
                backgroundColor: theme.colors.secondary,
                borderBottomEndRadius: 25,
                borderBottomStartRadius: 25,
                padding: 24,
                gap: 10,
            }}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View>
                        <Image source={icon} style={{ width: 50, height: 50 }} />
                    <FotoPerfil name='Gustavo Souza' username='@GustavoSouza1304' image={profile} type='light' onPress={() => handleNavigatePerfil()} />
                </View>

                <HeaderButtons />
                </View>

                <View style={{ width: '100%', height: 40}}>
                    <CustomImput
                        placeholder="Pesquisar"
                        placeholderTextColor={theme.colors.gray}
                        keyboardType="default"
                        errorMessage="Preencha o campo"
                    />
                </View>
            </View>
        </>
    );
}
