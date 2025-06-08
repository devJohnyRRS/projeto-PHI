import { useState } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import theme from '../../assets/themes/THEMES';
import CustomButton from '../../components/customButton/CustomButton';
import PlanoCard from '../../components/PlanoCard';
import BadgeBeneficio from '../../components/BadgeBeneficio';

export default function Assinar() {

    const icon = require("../../../assets/favicon.png");
    const backgroundImage = require("../../../assets/premium-background.jpeg");

    const [selectedPlan, setSelectedPlan] = useState('Trimestral');

    return (
        <ScrollView style={{ flex: 1, backgroundColor: theme.colors.textLight }}>
            <View>
                <Image source={backgroundImage} style={{ width: '100%', height: 250, resizeMode: 'cover', opacity: 0.6 }} />
                <Image source={icon} style={{ position: 'absolute', width: 50, height: 50, alignSelf: 'flex-start', top: 30, left: 20 }} />
            </View>

            <Text style={{ fontSize: 25, fontWeight: 'bold', textAlign: 'center', marginTop: 10, color: theme.colors.gold }}>Conheça o Phi! premium!!</Text>
            {/* Benefícios */}
            <View style={{ padding: 20 }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' }}>
                    Benefícios Exclusivos
                </Text>
                <View style={{ gap: 10 }}>
                    <BadgeBeneficio text="💰 Triplo de moedas ao resolver questões" />
                    <BadgeBeneficio text="🛍️ Todos os itens da loja desbloqueados" />
                    <BadgeBeneficio text="✍️ 1 correção de redação por semana (em breve)" />
                </View>
            </View>

            {/* Planos de Assinatura */}
            <View style={{ paddingHorizontal: 20 }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' }}>
                    Escolha seu plano
                </Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', gap: 10 }}>
                    <PlanoCard
                        title="Mensal"
                        price="R$ 19,90"
                        recommended={false}
                        selected={selectedPlan === 'Mensal'}
                        onPress={() => setSelectedPlan('Mensal')}
                    />
                    <PlanoCard
                        title="Trimestral"
                        price="R$ 49,90"
                        recommended={true}
                        selected={selectedPlan === 'Trimestral'}
                        onPress={() => setSelectedPlan('Trimestral')}
                    />
                    <PlanoCard
                        title="Anual"
                        price="R$ 179,90"
                        recommended={false}
                        selected={selectedPlan === 'Anual'}
                        onPress={() => setSelectedPlan('Anual')}
                    />
                </View>

            </View>

            <CustomButton title='Assinar Agora' onPress={() => { }} style={{ backgroundColor: theme.colors.gold, alignSelf: 'center', marginVertical: 20 }} />
        </ScrollView>
    );
}

