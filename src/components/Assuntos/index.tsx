import { Text } from 'react-native-gesture-handler';
import PostCard from '../PostCard';
import { View } from 'react-native';
import { mockPostsAssuntos } from '../../Mocks/mockPostsAssuntos';
import { mockPostsAssuntosPopulares } from '../../Mocks/mockPostsAssuntosPopulares';

export default function Assuntos() {
    return (
        <View style={{ gap: 10 }}>
            {mockPostsAssuntosPopulares.map(post => (
                <PostCard key={post.id} post={post}>
                    <Text style={{ fontSize: 16 }}>{post.stats.content}</Text>
                </PostCard>
            ))}
        </View>
    );
}