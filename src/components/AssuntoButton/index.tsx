import { PencilSimple } from 'phosphor-react-native'
import React from 'react'
import theme from '../../assets/themes/THEMES'
import CustomButton from '../customButton/CustomButton'
import { Text } from 'react-native'

export default function AssuntoButton({ style }: any) {
    return (
        <CustomButton
            onPress={() => console.log('ver mais')}
            style={{
                ...style,
                backgroundColor: theme.colors.primary,
                borderRadius: 10,
                flexDirection: 'row',
                gap: 5,
                width: 170,
            }}
        >
            <PencilSimple color={theme.colors.textLight} size={20} weight='fill' />
            <Text style={{ color: theme.colors.textLight, fontSize: 16, fontWeight: 'bold' }}>
                Criar assunto
            </Text>
        </CustomButton>
    )
}
