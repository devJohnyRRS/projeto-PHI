import React from 'react';
import { View, Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';

const screenWidth = Dimensions.get('window').width;

export default function YouTubeEmbed({ videoId }: { videoId: string }) {
    const embedUrl = `https://www.youtube.com/embed/${videoId}`;

    return (
        <View style={{ width: '100%', height: (screenWidth * 9) / 20 }}>
            <WebView
                source={{ uri: embedUrl }}
                allowsFullscreenVideo
                javaScriptEnabled
                domStorageEnabled
                style={{ flex: 1 }}
            />
        </View>
    );
}
