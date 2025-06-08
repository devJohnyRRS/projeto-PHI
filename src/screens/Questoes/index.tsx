import React from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import PerfilHeader from '../../components/PerfilHeader'
import theme from '../../assets/themes/THEMES'
import { BookOpen, CaretLeft, SlidersHorizontal } from 'phosphor-react-native'
import QuestionPreview from '../../components/QuestionPreview'
import { useTypedNavigation } from '../../hooks/useNavigate'
import { mockQuestoes } from '../../Mocks/mockQuestoes'
import { styles } from './styles'

export default function Questoes() {
    const navigation = useTypedNavigation();

    const handleGoBack = () => {
        navigation.goBack();
    }

    return (
        <ScrollView style={styles.container}>

            <PerfilHeader />

            <View style={styles.content}>
                <View style={styles.headerBar}>

                    <View style={styles.headerLeft}>
                        <TouchableOpacity onPress={handleGoBack} style={styles.iconButton}>
                            <CaretLeft color={theme.colors.text} size={24} weight='bold' />
                        </TouchableOpacity>
                        <BookOpen weight='fill' color={theme.colors.primary} />
                        <Text style={styles.headerTitle}>
                            Questões
                        </Text>
                    </View>

                    <TouchableOpacity style={styles.iconButton}>
                        <SlidersHorizontal
                            color={theme.colors.text}
                            size={24}
                            weight='fill'
                        />
                    </TouchableOpacity>

                </View>

                <View style={styles.questionsList}>
                    {mockQuestoes.map((question, index) => (
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
        </ScrollView>
    )
}