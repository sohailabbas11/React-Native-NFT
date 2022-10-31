import { useState } from 'react'
import React from 'react'
import { View, Text, SafeAreaView, FlatList } from 'react-native'

import { COLORS, NFTData } from '../constants'
import { NFTCard, HomeHeader, FocusStatusBar } from '../Components'

const Home = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FocusStatusBar background={COLORS.primary}></FocusStatusBar>
            <View style={{ flex: 1 }}>
                <View style={{ zIndex: 0 }}>
                    <FlatList
                        data={NFTData}
                        renderItem={({ item }) => < NFTCard data={item} />}
                        keyExtractor={(item) => item.id}
                        showsHorizontalScrollIndicator={false}
                        ListHeaderComponent={<HomeHeader />}
                    />
                </View>
                <View style={{
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    right: 0,
                    left: 0,
                    zIndex: -1,
                }}>
                    <View style={{ height: 300, backgroundColor: COLORS.primary }} />
                    <View style={{ flex: 1, backgroundColor: COLORS.white }} />
                </View>
            </View>
        </SafeAreaView >
    )
}

export default Home