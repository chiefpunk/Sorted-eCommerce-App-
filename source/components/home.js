import React, { Component } from 'react';
import { Text, View, StyleSheet, ActivityIndicator, AsyncStorage, Alert, Dimensions, TouchableOpacity, Image } from 'react-native';
import { List, ListItem, Icon, Left, Body, Right, Grid } from 'native-base';
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            offer_data: [],
            loading: false,
        }
    }
    render() {
        return (
            <View>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Shop')}>
                    <Image source={require('./../assets/shop.png')} style={styles.image_style} resizeMode={'stretch'} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Homeservice')}>
                    <Image  source={require('./../assets/home_service.png')} style={styles.image_style} resizeMode={'stretch'} />
                </TouchableOpacity>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    image_style: {
        width: screenWidth,
        height: (screenHeight-130) / 2
    },
});