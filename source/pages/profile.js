import React, {Component} from 'react';
import {Text, View, TextInput, TouchableOpacity, StyleSheet, StatusBar, Dimensions} from 'react-native';
import {Container, Left, Right, Icon, Header} from 'native-base';

const {width: WIDTH} = Dimensions.get('window');
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;
const scale = size => (Dimensions.get("window").width / guidelineBaseWidth) * size;
const moderateScale = (size, factor = 0.5) =>
  size + (scale(size) - size) * factor;

export default class Profile extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    onChangeProfileHandle(){
        console.log('Changed');
    }
    render(){
        return (
            <Container>
                <StatusBar backgroundColor="#ff6347" barStyle="light-content" />
                <Header hasTabs style={{backgroundColor:'#85414d' }}>
                    <Left style={{flexDirection:'row'}}>
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>             
                            <Icon name='left' type="AntDesign" style={{paddingLeft:10, color:'white'}}/>
                        </TouchableOpacity>
                        <Text style={{fontSize:moderateScale(18), marginLeft:12, color:'white'}}>Change Profile</Text>
                    </Left>
                    <Right></Right>
                </Header>
                
                <View style={{alignItems:'center',justifyContent:'center', marginBottom:50}}>
                    <Icon name="account-settings" type="MaterialCommunityIcons" style={{fontSize:180, color:'gray'}}></Icon>
                </View>
                <View style={styles.view_style}>
                    <Text style={styles.label_style}>Username:</Text>
                    <TextInput style={styles.input_style} placeholder={'Type your Username'}/>
                </View>
                <View style={styles.view_style}>
                    <Text style={styles.label_style}>Password:</Text>
                    <TextInput style={styles.input_style} placeholder={'Type your Password'} secureTextEntry={true}/>
                </View>
                <View style={styles.view_style}>
                    <Text style={styles.label_style}>New Password:</Text>
                    <TextInput style={styles.input_style} placeholder={'Type your New Password'} secureTextEntry={true}/>
                </View>
                <View style={styles.view_style_1}>
                    <TouchableOpacity style={styles.button_style_1} onPress={this.onChangeProfileHandle.bind(this)}>
                        <Text style={styles.btn_label_style}>Confirm</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button_style_2} onPress={() => this.props.navigation.navigate('DashBoard')} >
                        <Text style={styles.btn_label_style}>Cancel</Text>
                    </TouchableOpacity>
                </View>
            </Container>
        );
    }
}

const styles = StyleSheet.create({

    label_style:{
        width:'30%',
        textAlign: 'right',
        fontSize: 20
    },
    input_style: {
        width: '60%',
        fontSize:20,
        borderColor:'gray',
        borderWidth:1,
        marginLeft:20,
        borderRadius:10,
    },
    view_style:{
        flexDirection: 'row',
        marginTop:20,
        alignItems:'center',
        justifyContent: 'center'
    },
    view_style_1:{
        flexDirection: 'row',
        marginTop:50,
        alignItems:'center',
        justifyContent: 'center'
    },
    button_style_1:{
        width:'40%',
        backgroundColor:'rgb(47,117,113)',
        textAlign:'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft:10,
        borderRadius:15,
        height:30,
    },
    button_style_2:{
        width:'40%',
        backgroundColor:'rgb(193,119,42)',
        textAlign:'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft:10,
        borderRadius:15,
        height:30,
    },
    btn_label_style: {
        fontSize:20,
        color: 'white'
    }

});