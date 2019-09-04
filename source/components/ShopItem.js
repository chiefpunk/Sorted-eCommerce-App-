import React, { Component } from 'react';
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { Text, View, StyleSheet, Alert, AsyncStorage, TextInput, ActivityIndicator, Animated, TouchableOpacity, Dimensions, Image, StatusBar, FlatList } from 'react-native';
import Details from '../pages/details';
import { LearnMoreLinks } from 'react-native/Libraries/NewAppScreen';
export default class ShopItem extends Component {
    state = {
        animatePress: new Animated.Value(1)
    }
    animateIn() {
        Animated.timing(this.state.animatePress, {
            toValue: 0.8,
            duration: 200

        }).start()

    }
    animateOut() {
        Animated.timing(this.state.animatePress, {
            toValue: 1,
            duration: 200

        }).start()

    }
    goDetailPage() {
        alert("asdfasdf");
        return <Details></Details>
    }
    render() {
        const { itemWidth } = this.props
        const { itemHeight } = this.props
        return (
            <TouchableWithoutFeedback
                onPressIn={() => this.animateIn()}
                onPressOut={() => this.animateOut()}

            >
                <Animated.View style={{

                    transform: [
                        {
                            scale: this.state.animatePress
                        }
                    ]
                }}>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Details',{image:this.props.image,name:this.props.name,price:this.props.price})}>
                        <Image style={{ width: itemWidth, height: itemHeight, margin: 10 }} source={this.props.image} resizeMode={'stretch'}></Image>
                    </TouchableOpacity>
                    <View style={{ backgroundColor: 'rgba(235,157,168,0.7)', alignItems: 'center', maring: 10 }}>
                        <Text style={{ fontSize: 25 }}>{this.props.name}</Text>
                        <Text style={{ fontSize: 20 }}>{this.props.price}</Text>
                    </View>

                </Animated.View>

            </TouchableWithoutFeedback>
        )
    }
}