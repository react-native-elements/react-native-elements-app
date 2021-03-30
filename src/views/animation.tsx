import React, { useState } from 'react'
import { View, Animated, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'



const animation = () => {

    const value = useState(new Animated.ValueXY({ x:0, y: 0 }))[0]
    const opacity = useState(new Animated.Value(0))[0]
    const move = useState(new Animated.Value(0))[0]

    const moveForward = () => {
        Animated.timing(value, {
            toValue: { x: 100, y: 0},
            duration: 1000,
            useNativeDriver: true
        }).start()
    }

    const moveBackward = () => {
        Animated.timing(value, {
            toValue: { x: 0, y: 0},
            duration: 1000,
            useNativeDriver: true
        }).start()
    }

    const fadeIn = () => {
        Animated.timing(opacity, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true
        }).start()
    }

    const fadeOut = () => {
        Animated.timing(opacity, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: true
        }).start()
    }

    const translate = () => {
        Animated.spring(move, {
            toValue: 100,
            //duration: 1000,
            useNativeDriver: true,
        }).start()
    }
    

    return (
        <SafeAreaView style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Animated.View style={value.getLayout()}>
                <View style ={{
                    width: 100,
                    height: 100,
                    borderRadius: 50,
                    backgroundColor: 'red',
                    marginTop: 30,
                }}>

                </View>
            </Animated.View>
            <TouchableOpacity onPress={moveForward}>
                <Text style={{color: 'white'}}>
                    Move Forward
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={moveBackward}>
                <Text style={{color: 'white'}}>
                    Move Backward
                </Text>
            </TouchableOpacity>


            <Animated.View style ={{
                    width: 100,
                    height: 100,
                    opacity,
                    borderRadius: 50,
                    backgroundColor: 'yellow',
                    marginTop: 30,
                }}/>
            <TouchableOpacity onPress={fadeIn}>
                <Text style={{color: 'white'}}>
                    Fade In
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={fadeOut}>
                <Text style={{color: 'white'}}>
                    Fade Out
                </Text>
            </TouchableOpacity>


            <Animated.View style ={
                {
                    width: 100,
                    height: 100,
                    transform: [{ translateX: move }],
                    borderRadius: 50,
                    backgroundColor: 'green',
                    marginTop: 30,
                }
                    }/>
            <TouchableOpacity onPress={translate}>
                <Text style={{color: 'white'}}>
                    Translate
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default animation
