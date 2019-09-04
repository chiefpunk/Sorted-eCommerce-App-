import React, {Component} from 'react';
import {Text, View,TouchableOpacity,StatusBar,StyleSheet, ScrollView, Dimensions } from 'react-native';
import {Container, Icon, Header, Left, Right,List, ListItem, Switch,Badge} from 'native-base';

const {width: WIDTH} = Dimensions.get('window');
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;
const scale = size => (Dimensions.get("window").width / guidelineBaseWidth) * size;
const moderateScale = (size, factor = 0.5) =>
  size + (scale(size) - size) * factor;
const font_type = {
    FontLight: 'Helvetica',
    FontBold : 'Helvetica-Bold'
};

export default class Settings extends Component{
    constructor(props){
        super(props);
        this.state = {
            notification:   false,
            font_hide:      false,
            font_disable:   false,
            close_store:    true,
            show_time:      false,
            disable_order:  false,
            enable_voucher: false,
            deliver_time:   false,
            enable_tip:     false,
            disable_booking:false,
            booking_same:   false,
        }
    }
    render(){
        return(
            <Container>
                <StatusBar backgroundColor="#ff6347" barStyle="light-content" />
                <Header hasTabs style={{backgroundColor:'#eb9da8' }}>
                    <Left style={{flexDirection:'row'}}>
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>             
                            <Icon name='left' type="AntDesign" style={{paddingLeft:10, color:'white'}}/>
                        </TouchableOpacity>
                        <Text style={{fontSize:moderateScale(18), marginLeft:12, color:'white'}}>Settings</Text>
                    </Left>
                    <Right></Right>
                </Header>
                <ScrollView>
                <List>
                        <ListItem><Text style={styles.item_label}>Software Version</Text></ListItem>
                        <ListItem><Text style={styles.item_value}>3.0</Text></ListItem>
                        <ListItem><Text style={styles.item_label}>Device id</Text></ListItem>
                        <ListItem><Text style={styles.item_value}>device_5555</Text></ListItem>
                        <ListItem><Text style={styles.item_label}>Notifications</Text></ListItem>
                        <ListItem>
                            <Left>
                                <Text style={styles.item_value}>Enable Notifications</Text>
                            </Left>
                            <Right>
                                <Switch
                                    onValueChange = {()=>this.setState({notification: !this.state.notification})}
                                    value = {this.state.notification}/>
                            </Right>
                        </ListItem>
                        <ListItem><Text style={styles.item_label}>Others</Text></ListItem>
                        <ListItem>
                            <Left>
                                <Text style={styles.item_value}>Select your language</Text>
                            </Left>
                            <Right>
                                <TouchableOpacity>
                                    <Icon type="AntDesign" name="right" style={{fontSize:20}}></Icon>
                                </TouchableOpacity>
                            </Right>
                        </ListItem>
                        <ListItem><Text style={styles.item_label}>Font Settings</Text></ListItem>
                        <ListItem>
                            <Left>
                                <Text style={styles.item_value}>Hide</Text>
                            </Left>
                            <Right>
                                <Switch
                                    onValueChange = {()=>this.setState({font_hide: !this.state.font_hide})}
                                    value = {this.state.font_hide}/>
                            </Right>
                        </ListItem>
                        <ListItem>
                            <Left>
                                <Text style={styles.item_value}>Disable</Text>
                            </Left>
                            <Right>
                                <Switch
                                    onValueChange = {()=>this.setState({font_disable: !this.state.font_disable})}
                                    value = {this.state.font_disable}/>
                            </Right>
                        </ListItem>
                        <ListItem><Text style={styles.item_label}>Merchant Settings</Text></ListItem>
                        <ListItem>
                            <Left>
                                <Text style={styles.item_value}>Merchant Close Store</Text>
                            </Left>
                            <Right>
                                <Switch
                                    onValueChange = {()=>this.setState({close_store: !this.state.close_store})}
                                    value = {this.state.close_store}/>
                            </Right>
                        </ListItem>
                        <ListItem>
                            <Left>
                                <Text style={styles.item_value}>Show Time</Text>
                            </Left>
                            <Right>
                                <Switch
                                    onValueChange = {()=>this.setState({show_time: !this.state.show_time})}
                                    value = {this.state.show_time}/>
                            </Right>
                        </ListItem>
                        <ListItem>
                            <Left>
                                <Text style={styles.item_value}>Disable Order</Text>
                            </Left>
                            <Right>
                                <Switch
                                    onValueChange = {()=>this.setState({disable_order: !this.state.disable_order})}
                                    value = {this.state.disable_order}/>
                            </Right>
                        </ListItem>
                        <ListItem><Text style={styles.item_label}>Voucher</Text></ListItem>
                        <ListItem>
                            <Left>
                                <Text style={styles.item_value}>Enable Voucher</Text>
                            </Left>
                            <Right>
                                <Switch
                                    onValueChange = {()=>this.setState({enable_voucher: !this.state.enable_voucher})}
                                    value = {this.state.enable_voucher}/>
                            </Right>
                        </ListItem>
                        <ListItem>
                            <Left>
                                <Text style={styles.item_value}>Make Delivery in Time</Text>
                            </Left>
                            <Right>
                                <Switch
                                    onValueChange = {()=>this.setState({deliver_time: !this.state.deliver_time})}
                                    value = {this.state.deliver_time}/>
                            </Right>
                        </ListItem>
                        <ListItem><Text style={styles.item_label}>Tips</Text></ListItem>
                        <ListItem>
                            <Left>
                                <Text style={styles.item_value}>Enable Tip</Text>
                            </Left>
                            <Right>
                                <Switch
                                    onValueChange = {()=>this.setState({enable_tip: !this.state.enable_tip})}
                                    value = {this.state.enable_tip}/>
                            </Right>
                        </ListItem>
                        <ListItem><Text style={styles.item_label}>Booking</Text></ListItem>
                        <ListItem>
                            <Left>
                                <Text style={styles.item_value}>Disable Booking</Text>
                            </Left>
                            <Right>
                                <Switch
                                    onValueChange = {()=>this.setState({disable_booking: !this.state.disable_booking})}
                                    value = {this.state.disable_booking}/>
                            </Right>
                        </ListItem>
                        <ListItem>
                            <Left>
                                <Text style={styles.item_value}>Accept Booking Same day</Text>
                            </Left>
                            <Right>
                                <Switch
                                    onValueChange = {()=>this.setState({booking_same: !this.state.booking_same})}
                                    value = {this.state.booking_same}/>
                            </Right>
                        </ListItem>
                    </List>
                </ScrollView>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    item_label:{
        fontSize:15,
        color:'gray',
    },
    item_value:{
        fontSize:18,
        color:'black',
    }
});