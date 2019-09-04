import React, { Component } from 'react';
import { Text, View, StyleSheet, Alert, AsyncStorage, TextInput, ActivityIndicator, Animated, TouchableOpacity, Dimensions, Image, StatusBar, FlatList } from 'react-native';
import { List, Button, Icon, Left, Body, Right, Header, Form, Drawer, Container, Content, Separator, Title } from 'native-base';
import BottomNavigation, { ShiftingTab } from 'react-native-material-bottom-navigation';
import Dialog, { DialogContent } from 'react-native-popup-dialog';
import ShopItem from '../components/ShopItem';

const guidelineBaseWidth = 350;
const scale = size => (Dimensions.get("window").width / guidelineBaseWidth) * size;
const moderateScale = (size, factor = 0.5) =>
    size + (scale(size) - size) * factor;
const ITEM_WIDTH = Dimensions.get("window").width;
const ITEM_HEIGHT = Dimensions.get("window").height;
const feed_list = [
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
        image: require('../assets/homeserviceItem.jpg'),
        name: "1999.Asterio",
        price: "AUD 200",
    },
    {
        image: require('../assets/homeserviceItem.jpg'),
        name: "1999.Asterio",
        price: "AUD 200",
    }
];
export default class Homeservice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            offer_data: [],
            user_token: '',
            user_info: {},
            loading: false,
            searchDialog: false,
            columns: 1,
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
    render() {
        const { columns } = this.state
        return (
            <Container>
                <Header style={{ backgroundColor: '#85414d' }}>
                    <Left>
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                            <Icon name="arrow-back" type="MaterialIcons" style={{ color: "white" }} />
                        </TouchableOpacity>
                    </Left>
                    <Body>
                        <Title style={{ fontSize: 25 }}>Home Service</Title>
                    </Body>
                    <Right>
                        <TouchableOpacity style={{ marginRight: 20 }} onPress={() => this.setState({ searchDialog: true })}>
                            <Icon name='search' type="FontAwesome5" style={{ fontSize: moderateScale(21), color: 'white' }} />
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
                    <Dialog
                        visible={this.state.searchDialog}
                        onTouchOutside={() => {
                            this.setState({ searchDialog: false });
                        }}
                    >
                        <DialogContent style={{ width: ITEM_WIDTH - 55 }}>
                            <Text style={{ fontSize: moderateScale(20), textAlign: 'center' }}>Search Order</Text>
                            <TextInput placeholder="Enter Order No or Customer name" style={{ fontSize: moderateScale(20), paddingLeft: 15 }}></TextInput>
                            <Button success style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ color: 'white', fontSize: moderateScale(20), textAlign: 'center' }}>Search</Text>
                            </Button>
                        </DialogContent>
                    </Dialog>
                </View>
            </Container>


        );
    }
}

const styles = StyleSheet.create({
    header_icon_style: {
        paddingLeft: 10,
        color: 'white',

    },
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#F5FCFF',
    },
    img_container: {
        height: (Dimensions.get("window").height),

        backgroundColor: '#eb9da8'
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