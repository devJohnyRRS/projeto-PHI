import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import FotoPerfil from '../FotoPerfil'
import { BellSimple, BellSimpleRinging, MagnifyingGlass, ChatCircleText } from 'phosphor-react-native'
import theme from '../../assets/themes/THEMES'
import { useTypedNavigation } from '../../hooks/useNavigate'
import DrawerNotificacao from '../../screens/DrawerNotificacao'
import { useNotifications } from '../../context/NotificacaoContext';



export default function HeaderButtons({style}: any){

        const navigation = useTypedNavigation();
        const [drawerVisible, setDrawerVisible] = useState(false);
        const { hasNewNotifications } = useNotifications();
        const toggleDrawer = () => setDrawerVisible(prev => !prev);

        const handleNavigateChat = () => {
            navigation.navigate("Chat");
        };


    return(
        <>
        <View style={{flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
        <View> 
                    <TouchableOpacity onPress={toggleDrawer}>
                        {hasNewNotifications ? (
                            <BellSimpleRinging color={theme.colors.textLight} weight='fill' />
                        ) : (
                            <BellSimple color={theme.colors.textLight} weight='fill' />
                        )}
                    </TouchableOpacity>
        </View>
        <View>
                    <TouchableOpacity onPress={handleNavigateChat}>
                        <ChatCircleText color={theme.colors.textLight} weight='fill'/>
                    </TouchableOpacity>
                </View>
                </View>

            <DrawerNotificacao visible={drawerVisible} onClose={() => setDrawerVisible(false)} />
        </>
    );
}