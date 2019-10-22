import React, { Component } from 'react';
import { Text, View, StyleSheet, Alert, AsyncStorage, TextInput, ActivityIndicator, Animated, TouchableOpacity, Dimensions, Image, StatusBar, FlatList } from 'react-native';
import { List, ListItem, Icon, Left, Body, Right, Header, Form, Drawer, Container, Content, Separator, Title, Item, Button } from 'native-base';
import BottomNavigation, { ShiftingTab } from 'react-native-material-bottom-navigation';

import ShopItem from '../components/ShopItem';

const guidelineBaseWidth = 350;
const scale = size => (Dimensions.get("window").width / guidelineBaseWidth) * size;
const moderateScale = (size, factor = 0.5) =>
    size + (scale(size) - size) * factor;
const ITEM_WIDTH = Dimensions.get("window").width;
const ITEM_HEIGHT = Dimensions.get("window").height;
const feed_list = [
    {
        image: require('../assets/shopItem.jpg'),
        name: "1999.Asterio",
        price: "AUD 200",
    },
    {
        image: require('../assets/shopItem.jpg'),
        name: "1999.Asterio",
        price: "AUD 200",
    },
    {
        image: require('../assets/shopItem.jpg'),
        name: "1999.Asterio",
        price: "AUD 200",
    },
    {
        image: require('../assets/shopItem.jpg'),
        name: "1999.Asterio",
        price: "AUD 200",
    },
    {
        image: require('../assets/shopItem.jpg'),
        name: "1999.Asterio",
        price: "AUD 200",
    },
    {
        image: require('../assets/shopItem.jpg'),
        name: "1999.Asterio",
        price: "AUD 200",
    },
    {
        image: require('../assets/shopItem.jpg'),
        name: "1999.Asterio",
        price: "AUD 200",
    },
    {
        image: require('../assets/shopItem.jpg'),
        name: "1999.Asterio",
        price: "AUD 200",
    }
];
export default class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            offer_data: [],
            user_token: '',
            user_info: {},
            loading: false,
            columns:2,
            activeTab: this.tabs[0].key,
            // temp: '',
        }
    }
    tabs = [

        {
            key: 'home',
            label: 'HOME',
            barColor: '#b76e79',
            pressColor: 'rgba(255, 255, 255, 0.16)',
            icon: 'home',
            type: 'Entypo',
        },
        {
            key: 'bag',
            label: 'BAG',
            barColor: '#b76e79',
            pressColor: 'rgba(255, 255, 255, 0.16)',
            icon: 'shopping-bag',
            type: 'Entypo',
        },
        {
            key: 'setting',
            label: 'SETTING',
            barColor: '#b76e79',
            pressColor: 'rgba(255, 255, 255, 0.16)',
            icon: 'setting',
            type: 'AntDesign',
        }

    ]
    renderIcon = tab => ({ isActive }) => (
        //    <Icon style={{fontSize:24, color:tab.key === this.state.activeTab ? 'black':'white' }} name={tab.icon} type={tab.type}/> 
        <Icon style={{ fontSize: moderateScale(24), color: '#00227b' }} name={tab.icon} type={tab.type} />
    )
    renderTab = ({ tab, isActive }) => (
        <ShiftingTab
            isActive={isActive}
            //   showBadge={tab.key === 'movies-tv'}
            //   renderBadge={() => <Badge>2</Badge>}
            key={tab.key}
            label={tab.label}
            renderIcon={this.renderIcon(tab)}
        />
    )
    handleTabPress = (newTab, oldTab) => {
        this.setState({ activeTab: newTab.key })
    }

    _sidebar() {
        return (
            <View style={styles.img_container}>
                <View style={styles.profile_img}>
                    <Image source={require('./../assets/sorted_logo.png')} style={styles.profile_img} />
                </View>
                <View>
                    <List>
                        <ListItem >
                            <Left>
                                <Text style={styles.sidebar_header}>Filter</Text>
                            </Left>
                            <Right>
                                <Icon name="filter" type="FontAwesome" style={styles.sidebar_icon}></Icon>
                            </Right>
                        </ListItem>
                        <ListItem onPress={() => alert('abc')}>
                            <Left>
                                <Text style={styles.sidebar_normal}>Designers</Text>
                            </Left>
                            <Right>
                                <Icon name="doubleright" type="AntDesign" style={styles.sidebar_normal_icon}></Icon>
                            </Right>
                        </ListItem>
                        <ListItem onPress={() => alert('abc')}>
                            <Left>
                                <Text style={styles.sidebar_normal}>Categories</Text>
                            </Left>
                            <Right>
                                <Icon name="doubleright" type="AntDesign" style={styles.sidebar_normal_icon}></Icon>
                            </Right>
                        </ListItem>
                        <ListItem onPress={() => alert('abc')}>
                            <Left>
                                <Text style={styles.sidebar_normal}>Color</Text>
                            </Left>
                            <Right>
                                <Icon name="doubleright" type="AntDesign" style={styles.sidebar_normal_icon}></Icon>
                            </Right>
                        </ListItem>

                        <ListItem >
                            <Left>
                                <Text style={styles.sidebar_header}>Sort</Text>
                            </Left>
                            <Right>
                                <Icon name="sort-variant" type="MaterialCommunityIcons" style={styles.sidebar_icon}></Icon>
                            </Right>
                        </ListItem>
                        <ListItem onPress={() => alert('abc')}>
                            <Left>
                                <Text style={styles.sidebar_normal}>Popularity</Text>
                            </Left>
                            <Right>
                                <Icon name="doubleright" type="AntDesign" style={styles.sidebar_normal_icon}></Icon>
                            </Right>
                        </ListItem>
                        <ListItem onPress={() => alert('abc')}>
                            <Left>
                                <Text style={styles.sidebar_normal}>New Arrival</Text>
                            </Left>
                            <Right>
                                <Icon name="doubleright" type="AntDesign" style={styles.sidebar_normal_icon}></Icon>
                            </Right>
                        </ListItem>
                        <ListItem onPress={() => alert('abc')}>
                            <Left>
                                <Text style={styles.sidebar_normal}>Price:High to Low</Text>
                            </Left>
                            <Right>
                                <Icon name="doubleright" type="AntDesign" style={styles.sidebar_normal_icon}></Icon>
                            </Right>
                        </ListItem>
                        <ListItem onPress={() => alert('abc')}>
                            <Left>
                                <Text style={styles.sidebar_normal}>Price:Low to High</Text>
                            </Left>
                            <Right>
                                <Icon name="doubleright" type="AntDesign" style={styles.sidebar_normal_icon}></Icon>
                            </Right>
                        </ListItem>
                    </List>
                </View>
            </View>



        );
    }
    drawerContent = () => {
        return (
            <TouchableOpacity style={{ backgroundColor: 'white', flex: 1 }} onPress={() => this.closeDrawer()} activeOpacity={1} >
                {this._sidebar()}
            </TouchableOpacity>

        );
    };

    closeDrawer() {
        this.drawer._root.close()
    };
    openDrawer() {
        this.drawer._root.open()
    };
    render() {
        const {columns} = this.state
        return (
            <Drawer ref={(ref) => { this.drawer = ref; }} content={this.drawerContent()} onClose={() => this.closeDrawer()} >
                <Header style={{ backgroundColor: '#85414d' }}>
                    <Left>
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                            <Icon name="arrow-back" type="MaterialIcons" style={{color:"white"}}/>
                        </TouchableOpacity>
                    </Left>
                    <Body>
                        <Title style={{ fontSize: 25 }}>Shop</Title>
                    </Body>
                    <Right>
                        <TouchableOpacity onPress={() => this.openDrawer()}>
                            <Icon name='menu' style={styles.header_icon_style} />
                        </TouchableOpacity>
                    </Right>
                </Header>
                <View style={styles.container}>
                    <FlatList
                        numColumns={columns}
                        data={feed_list}
                        renderItem={({ item }) => {
                            return <ShopItem navigation={this.props.navigation} itemWidth={(ITEM_WIDTH - (20 * columns)) / columns} itemHeight={(ITEM_HEIGHT - 250) / 2} name={item.name} price={item.price} image={item.image} resizeMode="scratech" />
                        }}
                        keyExtractor={
                            (index) => { return index }
                        }
                    ></FlatList>
                </View>
            </Drawer >
        );
    }
}

const styles = StyleSheet.create({
    header_icon_style: {
        paddingLeft: 10,
        color: 'white',

    },
    container:{
        flex:1,
        flexDirection:'column',
        backgroundColor: '#F5FCFF',
    },
    img_container: {
        height: (Dimensions.get("window").height),

        backgroundColor: '#ffffff'
    },
    profile_data_bg: {
        flexDirection: 'row',
        marginTop: (Dimensions.get("window").height * 0.1),
        alignItems: 'center',
        marginLeft: (Dimensions.get("window").width * 0.1),
        backgroundColor: 'rgba(0,0,0,0)'
    },
    profile_img: {
        width: (Dimensions.get("window").width) * 0.8,
        height: (Dimensions.get("window").height) * 0.25,
        marginTop: 10,
        resizeMode: 'stretch'
    },
    sidebar_header: {
        fontSize: 30,
        marginTop: 20,
        color: "#85414d"
    },
    sidebar_normal: {
        fontSize: 20
    },
    sidebar_icon: {
        fontSize: 35,
        color: "#85414d"
    },
    sidebar_normal_icon: {
        fontSize: 30,
        color: "#000"
    }
});