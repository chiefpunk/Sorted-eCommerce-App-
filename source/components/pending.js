import React, {Component} from 'react';
import {Text, View, StyleSheet, ActivityIndicator, AsyncStorage, Alert} from 'react-native';
import {List, ListItem, Icon, Left, Body, Right} from 'native-base';

export default class Pending extends Component{
    constructor(props){
        super(props);
        this.state = {
            offer_data : [],
            loading: false,
        }
    }
    _retrieveData = async () => {
        try {
          const token = await AsyncStorage.getItem('user_token');
          let info = await AsyncStorage.getItem('user_info');

          if (token !== null) {
            // We have data!!
            this.setState({user_token:token});
            this.setState({user_info: JSON.parse(info)});
            var temp="https://afandim.net/merchantapp/api/GetPendingOrders?token="+this.state.user_token+"&user_type="+this.state.user_info['user_type']+"&mtid="+this.state.user_info['merchant_id']+"&lang=en&api_key=2bf5c1669378eeda07ed05b3a8e574ef&app_version=2.5&token="+this.state.user_token+"&user_type="+this.state.user_info['user_type']+"&mtid="+this.state.user_info['merchant_id']+"&device_platform=Android&json=true";
            this.setState({loading:true});
            fetch(temp)
            .then((response) => response.json())
            .then((responseJson) => {
                switch(responseJson.code){
                    case 1:
                        this.setState({offer_data: responseJson.details});
                        break;
                    case 2:
                        break;
                }
                this.setState({loading:false});
            }).catch((error) => {
                console.error(error);
            });
          }
        } catch (error) {
          // Error retrieving data
          Alert.alert("Loading Data is Failed.");
        }
    };
    componentDidMount(){
       this._retrieveData();
    }
    render(){
        return (
            <List>
                {
                    this.state.loading === true ? <ActivityIndicator size="large" color="#004946"/> : 
                       this.state.offer_data.length === 0 ? <List><ListItem style={{alignItems:'center', justifyContent:'center'}}><Text>No Results...</Text></ListItem></List> :
                    this.state.offer_data.map((offer, idx) => (
                        <ListItem avatar>
                            <Left style={{width:60}}>
                                {offer.type === 'book' ? <Icon name="cart-plus" type="FontAwesome" style={{fontSize:50, width:55}}/> : <Icon name="car" type="FontAwesome5" style={{fontSize:50, width:55}}/>}
                            </Left>
                            <Body>
                                <Text style={{fontWeight:'bold', fontSize:15}}>{offer.user}</Text>
                                <View style={{flexDirection:'row'}}>
                                    <Left>
                                        <Text note>{offer.order}</Text> 
                                    </Left>
                                    <Right style={{marginRight:20}}>
                                        <Text note style={{fontWeight:'bold'}}>{offer.price} {offer.currency}</Text> 
                                    </Right>
                                </View>
                                
                                <Text note>{offer.date}</Text> 
                                <View style={{flexDirection:'row'}}>
                                    <Left>
                                        <Text style={{backgroundColor:'rgb(255,202,83)', width:80, textAlign:'center', color:'white'}}>{offer.status}</Text>
                                    </Left>
                                    <Right>
                                    </Right>
                                </View>
                                
                                
                            </Body>
                        </ListItem>
                    ))
                }
            </List>
        );
    }
}

const styles = StyleSheet.create({

});