import React, { useRef, useState } from 'react';
import {
    View,
    Text,
    Image,
    FlatList,
    Dimensions,
    ViewToken,
    TouchableOpacity,
    Linking,
} from 'react-native';
import { CaretLeft, CaretRight, Circle } from 'phosphor-react-native';
import theme from '../../assets/themes/THEMES';
import CustomButton from '../customButton/CustomButton';
import { Banner } from '../../types/Banner';
import { styles } from './styles';

const screenWidth = Dimensions.get('window').width;
const horizontalMargin = 30;
const itemWidth = screenWidth - horizontalMargin;

interface CarroselProps {
    banners?: Banner[];
}

export default function Carrosel({ banners = [] }: CarroselProps) {
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
        <View style={styles.wrapper}>
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
                    <TouchableOpacity
                        style={[styles.bannerContainer, { width: itemWidth }]}
                        onPress={() => Linking.openURL(item.link)}
                    >
                        <Image
                            source={item.image}
                            style={styles.bannerImage}
                        />

                        <View style={styles.bannerContent}>
                            <View style={styles.textWrapper}>
                                <Text style={styles.title}>
                                    {item.title}
                                </Text>
                                <Text
                                    numberOfLines={2}
                                    ellipsizeMode="tail"
                                    style={styles.description}
                                >
                                    {item.description}
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                )}
            />

            <View style={styles.navigationButtons}>
                <CustomButton onPress={handlePrev} style={styles.arrowButton}>
                    <CaretLeft color={theme.colors.textLight} size={20} weight='bold' />
                </CustomButton>
                <CustomButton onPress={handleNext} style={styles.arrowButton}>
                    <CaretRight color={theme.colors.textLight} size={20} weight='bold' />
                </CustomButton>
            </View>

            <View style={styles.indicatorRow}>
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
