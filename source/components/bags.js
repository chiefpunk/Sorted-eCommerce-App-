import React, {Component} from 'react';
import {Text, View, StyleSheet, Alert,AsyncStorage, ActivityIndicator,TouchableOpacity,Image,FlatList,Dimensions} from 'react-native';
import {List, ListItem, Icon, Left, Body, Right,Thumbnail} from 'native-base';
import { TextInput,  } from 'react-native-gesture-handler';
import BagsCard from './bagsCard';
const ITEM_WIDTH = Dimensions.get("window").width;
const ITEM_HEIGHT = Dimensions.get("window").height;
const feed_list = [
    {
        image: require('../assets/homeserviceItem.jpg'),
        name: "1999.Asterio",
        price: "AUD 200",
    },
    {
        image: require('../assets/shopItem.jpg'),
        name: "1999.Asterio",
        price: "AUD 200",
    },
    {
        image: require('../assets/homeserviceItem.jpg'),
        name: "1999.Asterio",
        price: "AUD 200",
    },
    {
        image: require('../assets/homeserviceItem.jpg'),
        name: "1999.Asterio",
        price: "AUD 200",
    },
    {
        image: require('../assets/shopItem.jpg'),
        name: "1999.Asterio",
        price: "AUD 200",
    },
    {
        image: require('../assets/homeserviceItem.jpg'),
        name: "1999.Asterio",
        price: "AUD 200",
    },
    {
        image: require('../assets/shopItem.jpg'),
        name: "1999.Asterio",
        price: "AUD 200",
    },
    {
        image: require('../assets/homeserviceItem.jpg'),
        name: "1999.Asterio",
        price: "AUD 200",
    }
];
export default class Bags extends Component{
    constructor(props){
        super(props);
        this.state = {
            offer_data : [],
            loading:false,
            // temp: '',
        }
    }
    render(){
        return (
            <FlatList
                numColumns={1}
                data={feed_list}
                renderItem={({ item }) => {
                    return <BagsCard navigation={this.props.navigation} itemWidth={(ITEM_WIDTH - (20 * 1)) / 1} itemHeight={(ITEM_HEIGHT - 250) / 2} name={item.name} price={item.price} image={item.image} resizeMode="scratech" />
                }}
                keyExtractor={
                    (index) => { return index }
                }
            ></FlatList>
        );
    }
}
