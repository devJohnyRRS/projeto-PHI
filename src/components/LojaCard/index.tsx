import { View, Text, Image } from 'react-native';
import React from 'react';
import { Coins, BookmarkSimple, LockSimple } from 'phosphor-react-native';
import theme from '../../assets/themes/THEMES';
import { StoreItem } from '../../types/StoreItem';
import styles from './styles';

interface LojaCardProps {
    item: StoreItem;
}

export default function LojaCard({ item }: LojaCardProps) {
    return (
        <View style={styles.card}>
            <View style={styles.imageContainer}>
                {item.blocked && (
                    <LockSimple style={styles.lockIcon} weight='fill' size={50} />
                )}

                {item.type === 'moldura' && (
                    <View
                        style={[
                            styles.moldura,
                            {
                                borderColor: item.color,
                                opacity: item.blocked ? 0.5 : 1,
                            },
                        ]}
                    />
                )}

                {item.type === 'papel' && (
                    <Image
                        source={item.image}
                        style={[
                            styles.papel,
                            { opacity: item.blocked ? 0.5 : 1 },
                        ]}
                    />
                )}

                {item.type === 'icone' && (
                    <Image
                        source={item.image}
                        style={[
                            styles.icone,
                            { opacity: item.blocked ? 0.5 : 1 },
                        ]}
                    />
                )}
            </View>

            <View style={styles.infoContainer}>
                <View>
                    <Text style={styles.itemType}>
                        {item.type === 'papel' && 'Papel de parede'}
                        {item.type === 'moldura' && 'Moldura'}
                        {item.type === 'icone' && 'Ícone'}
                    </Text>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.levelText}>
                        {item.blocked
                            ? `Desbloquear: lvl.${item.level}`
                            : 'Desbloqueado'}
                    </Text>
                </View>

                <View style={styles.bottomRow}>
                    <View style={styles.priceContainer}>
                        <Coins size={30} color={theme.colors.gold} />
                        <Text style={styles.price}>-{item.price}</Text>
                    </View>

                    <BookmarkSimple size={30} weight="fill" color={theme.colors.gray} />
                </View>
            </View>
        </View>
    );
}
