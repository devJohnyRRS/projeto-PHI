import { View, Text, Image } from 'react-native'
import React from 'react'
import theme from '../../assets/themes/THEMES'

export default function Perfil() {
    const profile = require("../../../assets/gustavo.png");
    return (
        <View>
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
            </View >
            <View style={{ margin: 24, gap: 10 }}>

                <View>
                    <Image source={profile} style={{ width: 50, height: 50, alignSelf: 'flex-start' }} />
                </View>
            </View>
        </View>
    )
}