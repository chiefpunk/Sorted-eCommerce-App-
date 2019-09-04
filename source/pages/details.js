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

export default class Details extends Component {
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
                            <Icon name='search' type="FontAwesome5" style={{ fontSize: moderateScale(21), color: 'white' }} />
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
                        <ListItem>
                            <Text style={{ width: '50%', textAlign: 'right', fontWeight: 'bold', fontSize: 20 }}>Size</Text>

                            <Picker
                                mode="dropdown"
                                iosHeader="Select your Size"
                                iosIcon={<Icon name="arrow-down" />}
                                style={{ width: 200 }}
                                selectedValue={this.state.selected}
                                onValueChange={this.onValueChange.bind(this)}
                            >
                                <Picker.Item label="Large" value="key0" />
                                <Picker.Item label="Medium" value="key1" />
                                <Picker.Item label="Small" value="key2" />
                                
                            </Picker>

                        </ListItem>
                        <ListItem style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Button block success style={{ width: '95%', backgroundColor: "#85414d" }}>
                                <Text style={{ color: 'white', fontSize: moderateScale(14) }}>ADD TO BAG</Text>
                            </Button>
                        </ListItem>
                    </List>
                </ScrollView>
            </Container >
        );
    }
}