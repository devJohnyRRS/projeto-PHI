import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { CaretLeft, Circle, SlidersHorizontal } from 'phosphor-react-native'
import theme from '../../assets/themes/THEMES'
import PerfilHeader from '../../components/PerfilHeader'
import { useTypedNavigation } from '../../hooks/useNavigate'
import { mockMoldurasLoja } from '../../Mocks/mockMoldurasLoja'
import LojaCard from '../../components/LojaCard'
import { styles } from './styles'

export default function Molduras() {
    const navigation = useTypedNavigation();

    const handleGoBack = () => {
        navigation.goBack();
    }

    return (
        <ScrollView style={styles.container}>
            <PerfilHeader />

            <View style={styles.content}>
                <View style={styles.header}>
                    <View style={styles.headerLeft}>
                        <TouchableOpacity onPress={handleGoBack} style={styles.goBackButton}>
                            <CaretLeft color={theme.colors.text} size={24} weight='bold' />
                        </TouchableOpacity>
                        <Circle weight='bold' color={theme.colors.primary} />
                        <Text style={styles.title}>Molduras</Text>
                    </View>

                    <TouchableOpacity style={styles.filterButton}>
                        <SlidersHorizontal
                            color={theme.colors.text}
                            size={24}
                            weight='fill'
                        />
                    </TouchableOpacity>
                </View>

                {mockMoldurasLoja.map((artigo) => (
                    <LojaCard
                        item={artigo}
                        key={artigo.id}
                    />
                ))}
            </View>
        </ScrollView>
    )
}