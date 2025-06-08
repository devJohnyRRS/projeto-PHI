import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { CaretLeft, SlidersHorizontal, Sticker } from 'phosphor-react-native';
import theme from '../../assets/themes/THEMES';
import LojaCard from '../../components/LojaCard';
import PerfilHeader from '../../components/PerfilHeader';
import { useTypedNavigation } from '../../hooks/useNavigate';
import { mockPapeisLoja } from '../../Mocks/mockPapeisLoja';
import { styles } from './styles';

export default function PapeisDeParede() {
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
                        <Sticker weight='fill' color={theme.colors.primary} />
                        <Text style={styles.title}>
                            Pápeis de Parede
                        </Text>
                    </View>

                    <TouchableOpacity style={styles.filterButton} >
                        <SlidersHorizontal
                            color={theme.colors.text}
                            size={24}
                            weight='fill'
                        />
                    </TouchableOpacity>
                </View>

                {mockPapeisLoja.map((artigo) => (
                    <LojaCard
                        item={artigo}
                        key={artigo.id}
                    />
                ))}
            </View>
        </ScrollView >
    )
}