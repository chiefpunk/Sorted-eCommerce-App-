import React, { Component } from 'react';
import { Text, View, StatusBar, ScrollView, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native';
import { Container, Header, List, ListItem, Left, Title, Right, Body, Icon, Button, Form, Picker } from 'native-base';

const ITEM_WIDTH = Dimensions.get("window").width;
const ITEM_HEIGHT = Dimensions.get("window").height;
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;
const scale = size => (Dimensions.get("window").width / guidelineBaseWidth) * size;
const moderateScale = (size, factor = 0.5) =>
    size + (scale(size) - size) * factor;

export default class BagsCardDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datasource: [
                {
                    food_type: 'WesternFood',
                    food_name: 'Chicken',
                    price: '28.00$'
                },
                {
                    food_type: 'WesternFood',
                    food_name: 'Chicken',
                    price: '18.00$'
                },
                {
                    food_type: 'WesternFood',
                    food_name: 'Chicken',
                    price: '18.00$'
                },
            ],
            selected: "key1"
        }
    }
    onValueChange(value: string) {
        this.setState({
            selected: value
        });
    }
    render() {
        const { navigation } = this.props;
        const image = navigation.getParam('image', 'No-Image');
        const name = navigation.getParam('name', 'No-name');
        const price = navigation.getParam('price', 'No-price');
        return (
            <Container>
                <StatusBar backgroundColor="#ff6347" barStyle="light-content" />
                <Header style={{ backgroundColor: '#85414d' }}>
                    <Left>
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                            <Icon name="arrow-back" type="MaterialIcons" style={{ color: "white" }} />
                        </TouchableOpacity>
                    </Left>
                    <Body>
                        <Title style={{ fontSize: 25 }}>Order in Details</Title>
                    </Body>
                    <Right>
                        <TouchableOpacity style={{ marginRight: 20 }} onPress={() => this.setState({ searchDialog: true })}>
                            <Icon name='search' type="FontAwesome" style={{ fontSize: moderateScale(21), color: 'white' }} />
                        </TouchableOpacity>
                    </Right>
                </Header>

                <ScrollView>
                    <View>
                        <Image source={image} style={{ height: ITEM_HEIGHT * 0.5, width: ITEM_WIDTH - 20, margin: 10 }} resizeMode={'stretch'} />
                    </View>
                    <List>

                        <ListItem>
                            <Text style={{ width: '100%', textAlign: 'right', fontWeight: 'bold', fontSize: 30 }}>{name}</Text>

                        </ListItem>

                        <ListItem>
                            <Text style={{ width: '50%', textAlign: 'right', fontWeight: 'bold', fontSize: 20 }}>Price</Text>
                            <Text style={{ width: '50%', textAlign: 'right', fontWeight: 'bold', fontSize: 20 }}>{price}</Text>
                        </ListItem>
                        
                        <ListItem style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Button block success style={{ width: '95%', backgroundColor: "#85414d" }} onPress={()=>this.props.navigation.navigate("Checkout")}>
                                <Text style={{ color: 'white', fontSize: moderateScale(14) }}>SECURE CHECKOUT</Text>
                            </Button>
                        </ListItem>
                    </List>
                </ScrollView>
            </Container >
        );
    }
}