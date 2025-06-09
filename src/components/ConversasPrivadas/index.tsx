import { ScrollView } from 'react-native-gesture-handler';
import ChatCard from '../ChatCard';
import { View } from 'react-native';
import theme from '../../assets/themes/THEMES';

const profileImage = require('../../../assets/icon.png');

const mockChat = [
    {
        id: 1,
        name: 'PHI',
        username: '@PHIOficial',
        profileImage: profileImage,
        time: '30min atrás',
        content: 'Ei',
    },
    {
        id: 2,
        name: 'PHI',
        username: '@PHIOficial',
        profileImage: profileImage,
        time: '25min atrás',
        content: 'Bom dia rapaz',
    },
];

export default function ConversasPrivadas() {
    return (
        <View>
            {mockChat.map((chat) => (
                <ChatCard key={chat.id} chat={chat} />
            ))}
        </View>
    );
}