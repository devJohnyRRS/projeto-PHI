import React, { useRef, useState } from 'react';
import {
    View,
    Text,
    Image,
    FlatList,
    Dimensions,
    ViewToken,
} from 'react-native';
import { CaretLeft, CaretRight, Circle } from 'phosphor-react-native';
import theme from '../../assets/themes/THEMES';
import CustomButton from '../customButton/CustomButton';

const screenWidth = Dimensions.get('window').width;
const horizontalMargin = 48; // 24 + 24 de margin do container na Home
const itemWidth = screenWidth - horizontalMargin;

const banners = [
    {
        id: '1',
        title: 'Prepare-se para o ENEM!',
        description: 'Estude com foco e disciplina para alcançar seus objetivos.',
        image: require('../../../assets/enem.webp'),
    },
    {
        id: '2',
        title: 'Descubra novas oportunidades!',
        description: 'Participe de eventos e workshops da sua área.',
        image: require('../../../assets/enem.webp'),
    },
    {
        id: '3',
        title: 'Aprendizado contínuo',
        description: 'Explore novos cursos e materiais para seu crescimento.',
        image: require('../../../assets/enem.webp'),
    },
];

export default function Carrosel() {
    const [activeIndex, setActiveIndex] = useState(0);
    const flatListRef = useRef<FlatList>(null);

    const handleNext = () => {
        try {
            if (activeIndex < banners.length - 1) {
                flatListRef.current?.scrollToIndex({ index: activeIndex + 1, animated: true });
            }
        } catch (err) {
            console.warn('Erro ao ir para o próximo slide:', err);
        }
    };

    const handlePrev = () => {
        try {
            if (activeIndex > 0) {
                flatListRef.current?.scrollToIndex({ index: activeIndex - 1, animated: true });
            }
        } catch (err) {
            console.warn('Erro ao ir para o slide anterior:', err);
        }
    };

    const onViewableItemsChanged = useRef(({ viewableItems }: { viewableItems: ViewToken[] }) => {
        if (viewableItems.length > 0) {
            setActiveIndex(viewableItems[0].index ?? 0);
        }
    }).current;

    return (
        <View style={{ width: '100%', position: 'relative' }}>
            {/* FlatList com banners */}
            <FlatList
                data={banners}
                ref={flatListRef}
                keyExtractor={(item) => item.id}
                horizontal
                pagingEnabled
                initialScrollIndex={0}
                showsHorizontalScrollIndicator={false}
                onViewableItemsChanged={onViewableItemsChanged}
                viewabilityConfig={{ viewAreaCoveragePercentThreshold: 50 }}
                decelerationRate="fast"
                snapToInterval={itemWidth}
                snapToAlignment="start"
                getItemLayout={(_, index) => ({
                    length: itemWidth,
                    offset: itemWidth * index,
                    index,
                })}
                contentContainerStyle={{}}
                renderItem={({ item }) => (
                    <View
                        style={{
                            width: itemWidth,
                            height: 160,
                            borderRadius: 20,
                            justifyContent: 'center',
                        }}
                    >
                        <Image
                            source={item.image}
                            style={{
                                position: 'absolute',
                                width: '100%',
                                height: '100%',
                                resizeMode: 'cover',
                                opacity: 0.3,
                                borderRadius: 20,
                            }}
                        />

                        <View
                            style={{
                                flexDirection: 'row',
                                width: '100%',
                                justifyContent: 'center',
                                alignItems: 'center',
                                paddingHorizontal: 70,
                            }}
                        >
                            <View style={{ maxWidth: '100%' }}>
                                <Text style={{ color: theme.colors.primary, fontSize: 20, fontWeight: 'bold' }}>
                                    {item.title}
                                </Text>
                                <Text
                                    numberOfLines={2}
                                    ellipsizeMode="tail"
                                    style={{
                                        color: theme.colors.primary,
                                        fontSize: 16,
                                        fontWeight: '600',
                                        marginTop: 5,
                                    }}
                                >
                                    {item.description}
                                </Text>
                            </View>
                        </View>
                    </View>
                )}
            />

            {/* Botões fixos no centro da altura da FlatList */}
            <View
                pointerEvents="box-none"
                style={{
                    position: 'absolute',
                    top: 70, // metade da altura da FlatList (160 / 2)
                    left: 0,
                    right: 0,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingHorizontal: 32,
                }}
            >
                <CustomButton
                    onPress={handlePrev}
                    style={{
                        backgroundColor: theme.colors.primary,
                        borderRadius: 20,
                        width: 30,
                        height: 30,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <CaretLeft color={theme.colors.textLight} size={20} />
                </CustomButton>

                <CustomButton
                    onPress={handleNext}
                    style={{
                        backgroundColor: theme.colors.primary,
                        borderRadius: 20,
                        width: 30,
                        height: 30,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <CaretRight color={theme.colors.textLight} size={20} />
                </CustomButton>
            </View>

            {/* Indicadores de página */}
            <View
                style={{
                    width: '100%',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    gap: 8,
                    marginTop: 8,
                }}
            >
                {banners.map((_, index) => (
                    <Circle
                        key={index}
                        weight="fill"
                        color={index === activeIndex ? theme.colors.primary : theme.colors.lightGray}
                        size={14}
                    />
                ))}
            </View>
        </View>
    );
}
