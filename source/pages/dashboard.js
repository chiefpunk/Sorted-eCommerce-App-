import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Dimensions, TextInput, StatusBar, Alert, Image, ScrollView } from 'react-native';
import {
  Container, Header,
  Icon, Form, Left, Right, Button, List, ListItem, Drawer, Tab, TabHeading, Tabs
} from 'native-base';
import Dialog, { DialogContent } from 'react-native-popup-dialog';
import { Badge } from 'react-native-elements';
import BottomNavigation, { ShiftingTab } from 'react-native-material-bottom-navigation';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from './../components/home';
import Bags from './../components/bags';
import Booking from '../components/home';
import CancelOffer from './../components/cancel';
import PendingOffer from './../components/pending';
import Settings from './settings';

const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;
const scale = size => (Dimensions.get("window").width / guidelineBaseWidth) * size;
const moderateScale = (size, factor = 0.5) =>
  size + (scale(size) - size) * factor;
const { width: WIDTH } = Dimensions.get('window');
const font_type = {
  FontLight: 'Helvetica',
  FontBold: 'Helvetica-Bold'
};

export default class DashBoard extends Component {
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
    <Icon style={{ fontSize: moderateScale(24), color: '#000000' }} name={tab.icon} type={tab.type} />
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
  constructor(props) {
    super(props);
    this.state = {
      searchDialog: false,
      activeTab: this.tabs[0].key,
      username: '',
      user_type: '',
    };

  }
  _sidebar() {
    return (
      <View style={styles.img_container}>
        <View style={styles.list_profile_container}>
          {/* BEGIN TO SETUP PROFILEIMAGE AND ADDRESS VIEW */}
          <View style={styles.profile_img}>
            <Image source={require('./../assets/sorted_logo.png')} style={styles.profile_img} />
            
          </View>
          {/* END TO SETUP PROFILEIMAGE AND ADDRESS  VIEW */}
          <View style={styles.scroll_bg}>
            <ScrollView style={styles.menu_list_bg}>
              {/* BEGIN TO SETUP HOME VIEW */}
              <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => this.props.navigation.navigate('DashBoard')}>
                <Icon name="home" type="FontAwesome" style={styles.listitemicon} />
                <Text style={styles.menu_list_item}>Home</Text>
              </TouchableOpacity>
              {/* END TO SETUP HOME VIEW */}

              {/* BEGIN TO SETUP ARTICLES VIEW */}
              
              {/* END TO SETUP ARTICLES VIEW */}

              {/* BEGIN TO SETUP MESSAGE VIEW */}
              <TouchableOpacity style={styles.menu_list_item_bg} onPress={() => this.props.navigation.navigate('Settings')}>
                <Icon name="settings" type="MaterialCommunityIcons" style={styles.listitemicon} />
                <Text style={styles.menu_list_item}>Settings</Text>
              </TouchableOpacity>
              {/* END TO SETUP MESSAGE VIEW */}

              {/* BEGIN TO SETUP ACTIVITY VIEW */}
              <TouchableOpacity style={styles.menu_list_item_bg} onPress={() => this.props.navigation.navigate('Profile')}>
                <Icon name="account" type="MaterialCommunityIcons" style={styles.listitemicon} />
                <Text style={styles.menu_list_item}>Profile</Text>
              </TouchableOpacity>
              {/* END TO SETUP ACTIVITY VIEW */}

            </ScrollView>
          </View>
        </View>
        {/* BEGIN TO SETUP LOGOUT VIEW */}
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
          <View style={styles.bottom_view_bg}>
            <Icon name="logout" type="AntDesign" style={styles.logout_image} />
            <Text style={[styles.menu_list_item, { paddingTop: (Dimensions.get("window").height * 0.01) }]}>Logout</Text>
          </View>
        </TouchableOpacity>
        {/* END TO SETUP LOGOUT VIEW */}
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
    return (
      <Container>
        <StatusBar backgroundColor="#ff6347" barStyle="light-content" />
        <Drawer ref={(ref) => { this.drawer = ref; }} content={this.drawerContent()} onClose={() => this.closeDrawer()} >
          <Header hasTabs style={{ backgroundColor: '#85414d' }}>
            <Left>
              <Form style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={() => this.openDrawer()}>
                  <Icon name='menu' style={styles.header_icon_style} />
                </TouchableOpacity>
                <Text style={styles.header_label_style}>{this.state.activeTab.toUpperCase()}</Text>
              </Form>
            </Left>
            <Right>
              <TouchableOpacity style={{ marginRight: 20 }} onPress={() => this.setState({ searchDialog: true })}>
                <Icon name='search' type="FontAwesome5" style={{ fontSize: moderateScale(21), color: 'white' }} />
              </TouchableOpacity>
              <TouchableOpacity style={{ marginRight: 20, flexDirection: 'row' }} onPress={() => this.props.navigation.navigate('Notifications')}>
                <Icon name='bell-outline' type="MaterialCommunityIcons" style={{ fontSize: moderateScale(25), color: 'white' }} />
                <Badge status="success" value="3" />
              </TouchableOpacity>
            </Right>
          </Header>
          <View style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
              {this.state.activeTab === 'home' ? <Home navigation={this.props.navigation}/> : null}
              {this.state.activeTab === 'setting' ? <Settings /> : null}
              {this.state.activeTab === 'bag' ? <Bags navigation={this.props.navigation}/> : null}

            </View>
            <BottomNavigation
              tabs={this.tabs}
              activeTab={this.state.activeTab}
              onTabPress={newTab => this.setState({ activeTab: newTab.key })}
              renderTab={this.renderTab}
              onTabPress={this.handleTabPress}
              useLayoutAnimation
            />
          </View>
        </Drawer>
        <Dialog
          visible={this.state.searchDialog}
          onTouchOutside={() => {
            this.setState({ searchDialog: false });
          }}
        >
          <DialogContent style={{ width: WIDTH - 55 }}>
            <Text style={{ fontSize: moderateScale(20), textAlign: 'center' }}>Search Order</Text>
            <TextInput placeholder="Enter Order No or Customer name" style={{ fontSize: moderateScale(20), paddingLeft: 15 }}></TextInput>
            <Button success style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ color: 'white', fontSize: moderateScale(20), textAlign: 'center' }}>Search</Text>
            </Button>
          </DialogContent>
        </Dialog>

      </Container>
    );
  }
}

const styles = StyleSheet.create({
  tabheading: {
    backgroundColor: '#2f7571',
    flexDirection: "column",
    color: 'white',
  },
  listitemtext: {
    fontSize: moderateScale(18),
    marginLeft: 20
  },
  listitemicon: {
    fontSize: moderateScale(23),
    marginLeft: 20
  },
  header_label_style: {
    fontSize: moderateScale(14),
    marginLeft: 12,
    color: 'white',

  },
  header_icon_style: {
    paddingLeft: 10,
    color: 'white',
    fontSize: moderateScale(20)
  },
  listitemstyle: { flexDirection: 'row' },
  menuItem: { color: 'white' },






  menu_list_item: {
    marginLeft: (Dimensions.get("window").width * 0.03),
    color: "#2d324f",
    fontSize: moderateScale(18),
    fontFamily: font_type.FontLight,
  },
  menu_icon: {
    width: (Dimensions.get("window").width * 0.06),
    height: (Dimensions.get("window").width * 0.06),
    resizeMode: 'contain'
  },
  img_container: {
    height: (Dimensions.get("window").height),
    backgroundColor: '#ffffff'
  },
  list_profile_container: {
    height: (Dimensions.get("window").height * 0.85),
    backgroundColor: '#ffffff'
  },
  profile_data_bg: {
    flexDirection: 'row',
    marginTop: (Dimensions.get("window").height * 0.1),
    
    marginLeft: (Dimensions.get("window").width * 0.1),
    backgroundColor: 'rgba(0,0,0,0)'
  },
  profile_img: {
    width: (Dimensions.get("window").width) * 0.8,
    height: (Dimensions.get("window").width) * 0.4,
    resizeMode: 'stretch'
  },
  name_txt: {
    fontSize: moderateScale(15),
    fontFamily: font_type.FontBold,
    color: "#2d324f"
  },
  address_txt: {
    fontSize: moderateScale(12),
    fontFamily: font_type.FontLight,
    color: "#919cae",
    textAlign: 'left'
  },
  nameaddress_txt: {
    flexDirection: 'column',
    marginLeft: (Dimensions.get("window").width * 0.03)
  },
  menu_list_bg: {
    marginTop: (Dimensions.get("window").height * 0.1),
    marginLeft: (Dimensions.get("window").width * 0.12),
    backgroundColor: 'rgba(0,0,0,0)'
  },
  menu_list_item_bg: {
    flexDirection: 'row',
    marginTop: (Dimensions.get("window").height * 0.04),
    alignItems: 'center'
  },
  bottom_view_bg: {
    flexDirection: 'row',
    height: (Dimensions.get("window").height * 0.15),
    backgroundColor: 'rgba(0,0,0,0)',
    paddingLeft: (Dimensions.get("window").width * 0.12),
    paddingTop: (Dimensions.get("window").width * 0.04),
  },
  logout_image: {
    width: (Dimensions.get("window").width * 0.06),
    height: (Dimensions.get("window").height * 0.05),
    resizeMode: 'contain'
  },
  scroll_bg: {
    height: (Dimensions.get("window").height * 0.65),
    backgroundColor: 'rgba(0,0,0,0)'
  },
  row_count_text: {
    color: 'white',
    fontSize: moderateScale(12),
    backgroundColor: 'rgba(0,0,0,0)',
    textAlign: 'center',
    fontFamily: font_type.FontLight,
    paddingLeft: (Dimensions.get("window").height * 0.015),
    paddingRight: (Dimensions.get("window").height * 0.015),
  },
  row_count_bg: {
    backgroundColor: '#00bff3',
    borderRadius: 20,
    marginLeft: (Dimensions.get("window").height * 0.025),
    justifyContent: 'center',
    alignItems: 'center',
    height: (Dimensions.get("window").height) * 0.028
  },
});