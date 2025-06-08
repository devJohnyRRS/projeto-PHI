import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { CaretLeft, SlidersHorizontal, User } from 'phosphor-react-native'
import theme from '../../assets/themes/THEMES'
import LojaCard from '../../components/LojaCard'
import PerfilHeader from '../../components/PerfilHeader'
import { useTypedNavigation } from '../../hooks/useNavigate'
import { mockIconesLoja } from '../../Mocks/mockIconesLoja'
import { styles } from './styles'

export default function Icones() {
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
                        <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
                            <CaretLeft color={theme.colors.text} size={24} weight='bold' />
                        </TouchableOpacity>
                        <User weight='fill' color={theme.colors.primary} />
                        <Text style={styles.title}>Ícones</Text>
                    </View>

                    <TouchableOpacity style={styles.filterButton}>
                        <SlidersHorizontal color={theme.colors.text} size={24} weight='fill' />
                    </TouchableOpacity>
                </View>

                {mockIconesLoja.map((artigo) => (
                    <LojaCard
                        item={artigo}
                        key={artigo.id}
                    />
                ))}
            </View>
        </ScrollView>
    )
}