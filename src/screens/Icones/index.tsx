import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { CaretLeft, SlidersHorizontal, User } from 'phosphor-react-native'
import theme from '../../assets/themes/THEMES'
import LojaCard from '../../components/LojaCard'
import PerfilHeader from '../../components/PerfilHeader'
import { useTypedNavigation } from '../../hooks/useNavigate'
import { mockIconesLoja } from '../../Mocks/mockIconesLoja'

export default function Icones() {

    const navigation = useTypedNavigation();

    const handleGoBack = () => {
        navigation.goBack();
    }

    return (
        <ScrollView style={{ flex: 1, backgroundColor: theme.colors.background }}>

            <PerfilHeader />

            <View style={{ gap: 10, margin: 15, borderRadius: 5 }}>
                <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', backgroundColor: theme.colors.textLight, padding: 10 }}>

                    <View style={{ flexDirection: 'row', gap: 5 }}>
                        <TouchableOpacity onPress={handleGoBack} style={{ width: 24 }}>
                            <CaretLeft color={theme.colors.text} size={24} weight='bold' />
                        </TouchableOpacity>
                        <User weight='fill' color={theme.colors.primary} />
                        <Text style={{ color: theme.colors.text, fontSize: 16, fontWeight: 'bold' }}>
                            Ícones
                        </Text>
                    </View>

                    <TouchableOpacity style={{ width: 24 }} >
                        <SlidersHorizontal
                            color={theme.colors.text}
                            size={24}
                            weight='fill'
                        />
                    </TouchableOpacity>

                </View>

                {mockIconesLoja.map((artigo) => (
                    <LojaCard
                        item={artigo}
                        key={artigo.id}
                    />
                ))}
            </View>
        </ScrollView >
    )
}