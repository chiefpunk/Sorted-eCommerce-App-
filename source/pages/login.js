import React, { Component } from "react";
import {Text,View,Image,StatusBar,Platform,ImageBackground,ActivityIndicator,AsyncStorage,TouchableOpacity,BackHandler,I18nManager,StyleSheet,Dimensions,Alert} from "react-native";
import {Container,Button,Icon,Right,Item,Input,Header,Left,Body,Title,Form} from "native-base";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import back_image from "./../assets/login_back.png";
import logo_image from "./../assets/logo.png";

const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;
const scale = size => (Dimensions.get("window").width / guidelineBaseWidth) * size;
const moderateScale = (size, factor = 0.5) =>
  size + (scale(size) - size) * factor;
const font_type = {
    FontLight: 'Helvetica',
    FontBold : 'Helvetica-Bold'
};
// END TO SETUP FONT-TYPE AND FONT-SIZE


export default class Login extends Component {
  constructor(){
    super();
    this.state = {
        username: '',
        password: '',
        loginURL: '',
        temp: '',
        loading: false,
        dataSource:[],
        user_token: '',
        user_info: {},
    }
  }
  _storeData = async () => {
    try {
        await AsyncStorage.setItem('user_token', this.state.user_token);
        await AsyncStorage.setItem('user_info', JSON.stringify(this.state.user_info));
        
    } catch (error) {
      // Error saving data
      Alert.alert("Writing Data Error");
    }
  };
  onClickLoginBtn = () => {
    this.setState({loading:true});
    var temp = "https://afandim.net/merchantapp/api/login?username="+this.state.username+"&password="+this.state.password+"&merchant_device_id=null&device_platform=Android&lang=en&api_key=2bf5c1669378eeda07ed05b3a8e574ef&app_version=2.5&device_platform=Android&json=true";
    fetch(temp)
    .then((response) => response.json())
    .then((responseJson) => {
        
        switch(responseJson.code){
            case 1:
            //    Alert.alert(responseJson.details['token']);
                this.setState({user_token : responseJson.details['token']});
                this.setState({user_info: responseJson.details['info']});
                this._storeData();
                // localStorage.setItem("user_token", responseJson.details['token']);
                // localStorage.setItem("user_info", JSON.stringify(responseJson.details['info']));
               this.props.navigation.navigate('Dashboard');
                break;
            case 2:
                Alert.alert("Alert",responseJson.msg);
                break;
        }
        this.setState({loading:false});
    })
    .catch((error) => {
    console.error(error);
    });
  }
  render() {

    // BEGIN TO SETUP STATUSBAR VIEW
    StatusBar.setBarStyle('light-content', true);
    if(Platform.OS === 'android') {
      StatusBar.setBackgroundColor('transparent',true);
      StatusBar.setTranslucent(true);
    }
    // END TO SETUP STATUSBAR VIEW

    return (
      <Container>
        {/* BEGIN TO SETUP IMAGE AS A BACKGROUND */}
        <ImageBackground style={styles.background_image} source={back_image}>

          {/* BEGIN TO SETUP HEADER VIEW */}
          <Header style={styles.header}>
            {/* BEGIN TO SETUP HEADER BODY VIEW */}
            <Body style={styles.body} />
						{/* END TO SETUP HEADER BODY VIEW */}

						{/* BEGIN TO SETUP HEADER RIGHT VIEW */}
            <Right style={styles.right} />
						{/* END TO SETUP HEADER RIGHT VIEW */}
				</Header>
				{/* END TO SETUP HEADER VIEW */}

          {/* BEGIN TO SETUP PROFILE VIEW */}
          <View style={styles.logo_sec}>
            
          </View>
          {/* END TO SETUP PROFILE VIEW */}
          {this.state.loading === true ? <ActivityIndicator size="large" color="#004946" /> :
          
          <Form style={styles.form}>
            {/* BEGIN TO MAKE EMAIL TEXT FIELD CONTAINER VIEW */}
            <Item rounded style={styles.input_style}>
              <Input
                placeholderTextColor="#ffffff"
                
                textAlign={I18nManager.isRTL ? "right" : "left"}
                placeholder="Enter Email"
                style={styles.input_main}
                value={this.state.username}
                onChangeText={(text) => this.setState({username: text})}
              />
            </Item>
            {/* END TO MAKE EMAIL TEXT FIELD CONTAINER VIEW */}

            {/* BEGIN TO MAKE PASSWORD TEXT FIELD CONTAINER VIEW */}
            <Item rounded style={[styles.input_style, { marginTop: 10 }]}>
              <Input
                placeholderTextColor="#ffffff"
                placeholder="Enter Password"
                secureTextEntry={true}
                textAlign={I18nManager.isRTL ? "right" : "left"}
                style={styles.input_main}
                value={this.state.password}
                onChangeText={(text) => this.setState({password: text})}
              />
            </Item>
            {/* END TO MAKE PASSWORD TEXT FIELD CONTAINER VIEW */}

            {/* BEGIN TO MAKE LOG IN BUTTON VIEW */}
            <TouchableOpacity info style={styles.sign_in_btn} onPress={this.onClickLoginBtn}>
              <Text autoCapitalize="words" style={styles.buttonget_started}>
                Log In
              </Text>
            </TouchableOpacity>
            {/* END TO MAKE LOG IN BUTTON VIEW */}

            {/* BEGIN TO MAKE FORGOT PASSWORD VIEW */}
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Forgot')}>
              <Text autoCapitalize="words" style={styles.button_get_text}>
                Forgot your password?
              </Text>
            </TouchableOpacity>
            {/* END TO MAKE FORGOT PASSWORD VIEW */}
          </Form>
          }
          {
            this.state.loading === true ? null :
          
          <View style={styles.bottom_view}>
            {/* BEGIN TO MAKE FACEBOOK BUTTON VIEW */}
            <TouchableOpacity style={styles.fb_button} onPress={() => this.props.navigation.navigate('Register')} >
              <View iconRight style={styles.fb_view}>
                <FontAwesome name="facebook" size={30} color="white" />
                <Text autoCapitalize="words" style={styles.fb_button_text}>
                  Log in with facebook
                </Text>
              </View>
            </TouchableOpacity>
            {/* END TO MAKE FACEBOOK BUTTON VIEW */}

            {/* BEGIN TO MAKE SIGNUP BUTTON VIEW */}
            <View style={styles.bottom_text}>
                <Text style={styles.bottom_text_01}>
                  Don't have an account?
                </Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Register')}>
                  <Text style={styles.bottom_text_02}> Sign up</Text>
                </TouchableOpacity>
            </View>
            {/* END TO MAKE SIGNUP BUTTON VIEW */}
          </View>
        }
        </ImageBackground>
        {/* END TO SETUP IMAGE AS A BACKGROUND */}

      </Container>
    );
  }
}

// BEGIN TO MAKE STYLE
const styles = StyleSheet.create({
  background_image: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },
  header: {
    backgroundColor: 'rgba(0,0,0,0)',
    height: Dimensions.get('window').width * 0.15,
    borderBottomWidth: 0,
    ...Platform.select({
      ios: {},
      android: {
        marginTop: moderateScale(25)
      }
    }),
    elevation: 0
  },
  left: {
    flex: 0.5,
    backgroundColor: "transparent"
  },
  back_arrow: {
    width: 30,
    justifyContent: "center",
    alignItems: "center"
  },
  body: {
    flex: 3,
    alignItems: "center",
    backgroundColor: "transparent"
  },
  logo_sec: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width * 0.3,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  logo_style: {
    alignSelf: "center",
    width: Dimensions.get('window').width * 0.5,
    height: Dimensions.get('window').width * 0.4
  },
  form: {
    marginTop:35,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.35,
    backgroundColor: "rgba(255,255,255,0)",
    borderColor: "transparent",
    justifyContent: "center",
    alignSelf: "center"
  },
  input_style: {
    borderColor: "transparent",
    justifyContent: "center",
    alignSelf: "center",
    width: Dimensions.get('window').width * 0.8
  },
  input_main: {
    fontFamily: font_type.FontLight,
    color: 'white',
    justifyContent: "center",
    alignSelf: "center",
    paddingTop: 12,
    paddingBottom: 10,
    paddingLeft: 20,
    borderRadius: 40,
    width: Dimensions.get('window').width * 0.8,
    backgroundColor: "rgba(255,255,255,0.3)"
  },
  sign_in_btn: {
    backgroundColor: "#85414d",
    justifyContent: "center",
    alignSelf: "center",
    paddingTop: 12,
    paddingBottom: 12,
    borderRadius: 40,
    width: Dimensions.get('window').width * 0.8,
    marginTop: 35
  },
  buttonget_started: {
    alignSelf: "center",
    justifyContent: "center",
    fontFamily: font_type.FontBold,
    fontSize: moderateScale(15),
    color: 'white'
  },
  button_get_text: {
    alignSelf: "center",
    justifyContent: "center",
    fontFamily: font_type.FontBold,
    color: 'white',
    fontSize: moderateScale(17),
    marginTop: 25
  },
  bottom_view: {
    marginTop: 5
  },
  fb_button: {
    backgroundColor: "#3b5998",
    height: Dimensions.get('window').height * 0.07,
    width: Dimensions.get('window').width * 0.8,
    borderRadius: 40,
    marginLeft: 20,
    marginRight: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center"
  },
  fb_view: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center"
  },
  fb_button_text: {
    color: "#fff",
    fontSize: moderateScale(17),
    left: 10,
    fontFamily: font_type.FontLight,
    alignItems: "center",
    alignSelf: "center"
  },
  bottom_text: {
    width: "100%",
    height: 40,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 20,
    flexDirection: "row"
  },
  bottom_text_01: {
    fontSize: moderateScale(16),
    color: "#FFFFFF",
    fontFamily: font_type.FontLight
  },
  bottom_text_02: {
    fontSize: moderateScale(16),
    fontFamily: font_type.FontLight,
    color: "#3b5998"
  }
});
// END TO MAKE STYLE
