import React from 'react'
import { Linking, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import PerfilHeader from '../../components/PerfilHeader'
import theme from '../../assets/themes/THEMES'
import { CaretLeft, Newspaper, SlidersHorizontal } from 'phosphor-react-native'
import { useTypedNavigation } from '../../hooks/useNavigate'
import PostCard from '../../components/PostCard'
import { MediaPost } from '../../types/Posts'

const mockArtigos: MediaPost[] = [
    {
        id: 101,
        type: 'artigo',
        title: 'Revolução Industrial',
        description: 'Por Revolução Industrial, as ciências humanas compreendem como o período de grande desenvolvimento tecnológico que foi iniciado na Inglaterra a partir da segunda metade do século XVIII. Com o tempo, esse desenvolvimento espalhou-se para outras partes do mundo, como a Europa ocidental e os Estados Unidos. Assim, surgiu a indústria, e as transformações causadas por essa possibilitaram a consolidação do capitalismo. A economia, a nível mundial, sofreu grandes transformações. O processo de produção de mercadorias acelerou-se bastante, já que a produção manual foi substituída pela utilização da máquina. O resultado foi o estímulo à exploração dos recursos da natureza de maneira excessiva, uma vez que a capacidade produtiva aumentou. A Revolução Industrial também impactou as relações de trabalho, gerando uma reação dos trabalhadores, cada vez mais explorados no contexto industrial.',
        link: 'https://mundoeducacao.uol.com.br/historiageral/revolucao-industrial-2.htm',
        stats: {
            badge: ['História', 'Sociedade'],
            time: '2h atrás',
            content: 'Entenda como o avanço industrial modificou os padrões de vida e as relações de trabalho.',
            comments: 128,
            likes: 2043,
            dislikes: 12,
        },
    },
    {
        id: 102,
        type: 'artigo',
        title: 'Ética na Inteligência Artificial: OS DESAFIOS DO SÉCULO XXI',
        description: 'A inteligência artificial está se tornando uma força cada vez mais poderosa em nossas vidas, influenciando desde recomendações de filmes até decisões médicas e políticas. Com esse crescimento, surge uma questão crucial: como garantir que a IA seja utilizada de maneira ética e responsável? A ética na inteligência artificial abrange uma variedade de preocupações, desde a privacidade e a segurança até a imparcialidade e a transparência. Uma das principais preocupações éticas é o viés algorítmico, que pode resultar em discriminação injusta quando os sistemas de IA são treinados com conjuntos de dados enviesados. Isso levanta questões profundas sobre justiça social e igualdade de oportunidades.',
        link: 'https://www.dio.me/articles/etica-na-inteligencia-artificial-os-desafios-do-seculo-xxi',
        stats: {
            badge: ['Tecnologia', 'Ética'],
            time: '1 dia atrás',
            content: 'Os riscos e benefícios do uso de IA em contextos sensíveis como saúde, segurança e educação.',
            comments: 332,
            likes: 3201,
            dislikes: 45,
        },
    },
    {
        id: 103,
        type: 'artigo',
        title: 'Mudanças climáticas',
        description: 'As mudanças climáticas são, sem dúvidas, um dos maiores desafios da sociedade atual. Apesar de sempre usarmos o urso-polar como símbolo dessas mudanças, as alterações no clima estão longe de atingir apenas esses animais. Os impactos das mudanças climáticas são significativos e afetam desde a nossa saúde até a produção de alimentos. A seguir, você entenderá melhor o que são as mudanças climáticas e como elas afetam a nossa vida e a dos outros seres vivos do planeta.',
        link: 'https://brasilescola.uol.com.br/biologia/mudancas-climaticas.htm',
        stats: {
            badge: ['Meio ambiente', 'Atualidades'],
            time: '3 dias atrás',
            content: 'Conheça os principais fatores que contribuem para a mudança do clima e como combatê-los.',
            comments: 274,
            likes: 4102,
            dislikes: 22,
        },
    },
];

export default function Artigos() {

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
                        <Newspaper weight='fill' color={theme.colors.primary} />
                        <Text style={{ color: theme.colors.text, fontSize: 16, fontWeight: 'bold' }}>
                            Artigos
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

                {mockArtigos.map((artigo) => (
                    <PostCard key={artigo.id} post={artigo}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 4 }}>{artigo.title}</Text>

                        <View>
                            <Text numberOfLines={6} style={{ fontSize: 14, color: theme.colors.text }}>
                                {artigo.description}
                            </Text>

                            <TouchableOpacity onPress={() => Linking.openURL(artigo.link)}>
                                <Text style={{ color: theme.colors.secondary, marginTop: 4 }}>Ver mais...</Text>
                            </TouchableOpacity>
                        </View>
                    </PostCard>
                ))}
            </View>
        </ScrollView >
    )
}
