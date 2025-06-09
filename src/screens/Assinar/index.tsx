import { useState } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import theme from '../../assets/themes/THEMES';
import CustomButton from '../../components/customButton/CustomButton';
import PlanoCard from '../../components/PlanoCard';
import BadgeBeneficio from '../../components/BadgeBeneficio';
import { styles } from './styles';

export default function Assinar() {
    const icon = require("../../../assets/favicon.png");
    const backgroundImage = require("../../../assets/premium-background.jpeg");

    const [selectedPlan, setSelectedPlan] = useState('Trimestral');

    return (
        <ScrollView style={styles.scrollView}>
            <View>
                <Image source={backgroundImage} style={styles.backgroundImage} />
                <Image source={icon} style={styles.icon} />
            </View>

            <Text style={styles.title}>Conheça o Phi! premium!!</Text>

            {/* Benefícios */}
            <View style={styles.benefitsContainer}>
                <Text style={styles.sectionTitle}>Benefícios Exclusivos</Text>
                <View style={styles.benefitsList}>
                    <BadgeBeneficio text="💰 Triplo de moedas ao resolver questões" />
                    <BadgeBeneficio text="🛍️ Todos os itens da loja desbloqueados" />
                    <BadgeBeneficio text="✍️ 1 correção de redação por semana (em breve)" />
                </View>
            </View>

            {/* Planos de Assinatura */}
            <View style={styles.plansContainer}>
                <Text style={styles.sectionTitle}>Escolha seu plano</Text>
                <View style={styles.planCardsWrapper}>
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

            <CustomButton
                title="Assinar Agora"
                onPress={() => { }}
                style={styles.subscribeButton}
            />
        </ScrollView>
    );
}
