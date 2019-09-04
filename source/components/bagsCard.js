import React, { Component } from 'react';
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { Text, View, StyleSheet, Alert, AsyncStorage, TextInput, ActivityIndicator, Animated, TouchableOpacity, Dimensions, Image, StatusBar, FlatList } from 'react-native';
import {List, ListItem, Icon, Left, Body, Right,Thumbnail} from 'native-base';
import BagsCardDetail from '../pages/bagsCardDetail';
import { LearnMoreLinks } from 'react-native/Libraries/NewAppScreen';
export default class BagsCard extends Component {
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
        alert("asdfasdf");
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
                    
                    <List >
                    
                            <ListItem avatar onPress={()=>{this.props.navigation.navigate('BagCardDetail',{image:this.props.image,name:this.props.name,price:this.props.price})}}>
                                <Left>
                                    <Thumbnail source = {this.props.image} />
                                </Left>
                                <Body>
                                    <Text>{this.props.name}</Text>
                                </Body>
                                <Right>
                                    <Text>{this.props.price}</Text>
                                </Right>
                                
                                        
                            </ListItem>
                    
                    </List>
                    

                </Animated.View>

            </TouchableWithoutFeedback>
        )
    }
}