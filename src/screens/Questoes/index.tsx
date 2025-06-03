import React from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import PerfilHeader from '../../components/PerfilHeader'
import theme from '../../assets/themes/THEMES'
import { BookOpen, CaretLeft, SlidersHorizontal } from 'phosphor-react-native'
import QuestionPreview from '../../components/QuestionPreview'
import { useTypedNavigation } from '../../hooks/useNavigate'

const mockQuestions = [
    {
        color: theme.colors.lightBlue,
        code: "H12004",
        title: "Brasil Nova República",
        description:
            "O Plano Real surgiu como uma forma de estabilizar o sistema monetário e cambial brasileiro. Após um período de transição com a Unidade de Referência de Valor, o Real foi lançado em julho de 1994, no governo do presidente Itamar Franco. Qual foi o impacto imediato desta medida?",
    },
    {
        color: 'pink',
        code: "M22015",
        title: "Função Quadrática",
        description:
            "Considere a função f(x) = ax² + bx + c. Sabendo que os coeficientes a, b e c são reais e que o gráfico intercepta o eixo x nos pontos -2 e 3, qual é o valor da soma das raízes da equação?",
    },
    {
        color: 'rgb(200, 255, 208)',
        code: "B33001",
        title: "Genética Mendeliana",
        description:
            "Mendel cruzou ervilhas de sementes amarelas puras com ervilhas de sementes verdes puras. Na F1, todas as sementes eram amarelas. Na F2, observou uma proporção de 3:1 entre amarelas e verdes. Qual é o genótipo dos indivíduos da F1?",
    },
    {
        color: 'rgb(200, 255, 208)',
        code: "B33001",
        title: "Genética Mendeliana",
        description:
            "Mendel cruzou ervilhas de sementes amarelas puras com ervilhas de sementes verdes puras. Na F1, todas as sementes eram amarelas. Na F2, observou uma proporção de 3:1 entre amarelas e verdes. Qual é o genótipo dos indivíduos da F1?",
    },
]

export default function Questoes() {

    const navigation = useTypedNavigation();

    const handleGoBack = () => {
        navigation.goBack();
    }

    return (
        <ScrollView style={{ flex: 1, backgroundColor: theme.colors.background }}>

            <PerfilHeader />

            <View style={{ gap: 10, marginBottom: 50 }}>
                <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', backgroundColor: theme.colors.textLight, padding: 10 }}>

                    <View style={{ flexDirection: 'row', gap: 5 }}>
                        <TouchableOpacity onPress={handleGoBack} style={{ width: 24 }}>
                            <CaretLeft color={theme.colors.text} size={24} />
                        </TouchableOpacity>
                        <BookOpen weight='fill' color={theme.colors.primary} />
                        <Text style={{ color: theme.colors.text, fontSize: 16, fontWeight: 'bold' }}>
                            Questões
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

                <View style={{ gap: 10 }}>

                    {mockQuestions.map((question, index) => (
                        <QuestionPreview
                            key={index}
                            color={question.color}
                            code={question.code}
                            title={question.title}
                            description={question.description}
                        />
                    ))}

                </View>
            </View>
        </ScrollView >
    )
}
