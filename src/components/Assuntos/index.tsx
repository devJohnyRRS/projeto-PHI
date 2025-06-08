import { Text } from 'react-native-gesture-handler';
import PostCard from '../PostCard';
import { View } from 'react-native';
// import { mockPostsAssuntos } from '../../Mocks/mockPostsAssuntos';
import { mockPostsAssuntosPopulares } from '../../Mocks/mockPostsAssuntosPopulares';
// import { useEffect, useState } from 'react';
// import { Post } from '../../types/Post';
import api from '../../api';

export default function Assuntos() {

    // const [posts, setPosts] = useState([]);

    // useEffect(() => {

    //     fetchPosts();
    // }, []);

    // const fetchPosts = async () => {
    //     try {
    //         const response = await api.get('/assuntos');
    //         setPosts(response.data);
    //     } catch (error) {
    //         console.error('Error fetching posts:', error);
    //     }
    // };

    return (
        <View style={{ gap: 10 }}>
            {/* {posts.map(post => ( */}
            {mockPostsAssuntosPopulares.map(post => (
                <PostCard key={post.id} post={post}>
                    <Text style={{ fontSize: 16 }}>{post.stats.content}</Text>
                </PostCard>
            ))}
        </View>
    );
}