import { View, Text, Image } from 'react-native'
import React from 'react'
import { Coins, BookmarkSimple, LockSimple } from 'phosphor-react-native'
import theme from '../../assets/themes/THEMES'
import { StoreItem } from '../../types/StoreItem'

interface LojaCardProps {
    item: StoreItem;
}

export default function LojaCard({ item }: LojaCardProps) {
    return (
        <View
            style={{
                backgroundColor: theme.colors.textLight,
                padding: 10,
                borderRadius: 5,
                flexDirection: 'row',
                gap: 15,
                justifyContent: 'space-between',
                alignItems: 'center',
            }}
        >

            <View style={{ maxWidth: 180, maxHeight: 120, overflow: 'hidden' }}>
                {item.blocked && (
                    <LockSimple style={{ position: 'absolute', right: 60, top: 35, zIndex: 99 }} weight='fill' size={50} />
                )}

                {item.type == 'moldura' && (
                    <View style={{ width: 120, height: 120, borderRadius: 60, borderColor: item.color, borderWidth: 4, marginHorizontal: 25, opacity: item.blocked ? 0.5 : 1 }} />
                )}

                {item.type == 'papel' && (
                    <Image source={item.image} style={{ width: 170, height: 120, borderRadius: 5, opacity: item.blocked ? 0.5 : 1 }} />
                )}
                {item.type == 'icone' && (
                    <Image source={item.image} style={{ width: 120, height: 120, borderRadius: 75, marginHorizontal: 25, opacity: item.blocked ? 0.5 : 1 }} />
                )}
                {/* <Image source={item.image} style={{ height: '100%', width: '100%', borderRadius: 75, opacity: item.blocked ? 0.5 : 1 }} /> */}
            </View>

            <View style={{ gap: 10, flex: 1 }}>
                <View>
                    <Text style={{ color: theme.colors.text, fontSize: 16, fontWeight: 'bold' }}>
                        {item.type == 'papel' && "Papel de parede"}
                        {item.type == 'moldura' && "Moldura"}
                        {item.type == 'icone' && "Ícone"}
                    </Text>
                    <Text style={{ fontSize: 13 }}>{item.title}</Text>
                    {item.blocked ? (
                        <Text style={{ color: theme.colors.gray, fontSize: 13 }}>Desbloquear: lvl.{item.level}</Text>
                    ) : (
                        <Text style={{ color: theme.colors.gray, fontSize: 13 }}>Desbloqueado</Text>
                    )}
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                        <Coins size={30} color={theme.colors.gold} />
                        <Text style={{ color: theme.colors.gold, fontWeight: 'bold' }}>-{item.price}</Text>
                    </View>

                    <BookmarkSimple size={30} weight="fill" color={theme.colors.gray} />
                </View>
            </View>
        </View>

    )
}