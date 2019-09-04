import React, { Component } from "react";
import {Text,View,Image,StatusBar,Platform,ImageBackground,Dimensions,TouchableOpacity,BackHandler,I18nManager,StyleSheet,Alert} from "react-native";
import {Container,Button,Icon,Right,Item,Input,Header,Footer,Left,Body,Title,Content,Form,Label} from "native-base";
import FontAwesome from "react-native-vector-icons/FontAwesome";


//GUIDELINE SIZES ARE BASED ON STANDARD ~5" SCREEN

// BEGIN TO SETUP FONT-TYPE AND FONT-SIZE
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

export default class Login3 extends Component {

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
        <ImageBackground style={styles.image_background} source={require("./../assets/login_back.png")}>

              	{/* BEGIN TO SETUP HEADER VIEW */}
                <Header style={styles.header}>

                  {/* BEGIN TO SETUP HEADER LEFT VIEW */}
                  <Left style={styles.left}>
                    <TouchableOpacity style={styles.back_arrow} onPress={() => this.props.navigation.goBack()} >
                      <FontAwesome name={I18nManager.isRTL ? "angle-right" : "angle-left"} size={30} color="#ffffff" />
                    </TouchableOpacity>
                  </Left>
      						{/* END TO SETUP HEADER LEFT VIEW */}

      						{/* BEGIN TO SETUP HEADER BODY VIEW */}
                  <Body style={styles.body}>
                    <Text style={styles.text_title}>Forgot Password</Text>
                  </Body>
      						{/* END TO SETUP HEADER BODY VIEW */}

      						{/* BEGIN TO SETUP HEADER RIGHT VIEW */}
                  <Right style={styles.right} />
      						{/* END TO SETUP HEADER RIGHT VIEW */}

              </Header>
      				{/* END TO SETUP HEADER VIEW */}

        </ImageBackground>
        {/* END TO SETUP IMAGE AS A BACKGROUND */}


        {/* BEGIN TO MAKE MAIN CONTAINER VIEW */}
        <Content style={styles.content}>
          <Form style={styles.form}>
            	{/* BEGIN TO MAKE EMAIL TEXT FIELD CONTAINER VIEW */}
            <Item>
              <Input
                keyboardType="email-address"
                placeholder="Enter Email"
                textAlign={I18nManager.isRTL ? "right" : "left"}
                placeholderTextColor="#b7b7b7"
                style={styles.input1}
              />
            </Item>
          	{/* END TO MAKE EMAIL TEXT FIELD CONTAINER VIEW */}

            {/* BEGIN TO MAKE PASSWORD TEXT FIELD CONTAINER VIEW */}
            <Item>
              <Input
                placeholder="Enter Password"
                textAlign={I18nManager.isRTL ? "right" : "left"}
                secureTextEntry={true}
                placeholderTextColor="#b7b7b7"
                style={styles.input1}
              />
            </Item>
            {/* END TO MAKE PASSWORD TEXT FIELD CONTAINER VIEW */}
            
            {/* BEGIN TO MAKE PASSWORD TEXT FIELD CONTAINER VIEW */}
            <Item>
              <Input
                placeholder="Confirm Password"
                textAlign={I18nManager.isRTL ? "right" : "left"}
                secureTextEntry={true}
                placeholderTextColor="#b7b7b7"
                style={styles.input1}
              />
            </Item>
            {/* END TO MAKE PASSWORD TEXT FIELD CONTAINER VIEW */}
          </Form>
        </Content>
        {/* END TO MAKE MAIN CONTAINER VIEW */}

        <Footer>
          {/* BEGIN TO MAKE LOG IN BUTTON VIEW */}
          <TouchableOpacity style={styles.btn_sec} onPress={() => this.props.navigation.navigate('Login')} >
              <Text autoCapitalize="words" style={styles.button_text}>
                Update & Log In
              </Text>
          </TouchableOpacity>
          {/* END TO MAKE LOG IN BUTTON VIEW */}
        </Footer>
      </Container>
    );
  }
}

// BEGIN TO MAKE STYLE
const styles = StyleSheet.create({
  image_background: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.3,
    zIndex: 111
  },
  header: {
    backgroundColor: 'rgba(0,0,0,0)',
    height: 50,
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
    justifyContent: "center",
    alignItems: "center",
    width: 30
  },
  body: {
    flex: 3,
    alignItems: "center",
    backgroundColor: "transparent"
  },
  text_title: {
    color: 'white',
    fontSize: moderateScale(20),
    alignSelf: "center",
    fontFamily: font_type.FontBold
  },
  right: {
    flex: 0.5
  },
  content: {
    backgroundColor: "transparent"
  },
  user_profile_sec: {
    width: Dimensions.get('window').width,
    justifyContent: "center",
    alignItems: "center",
    marginTop: -50,
    zIndex: 1111
  },
  profile: {
    borderWidth: 3,
    borderColor: 'white',
    borderRadius: Dimensions.get('window').width * 0.14,
    width: Dimensions.get('window').width * 0.28,
    height: Dimensions.get('window').width * 0.28
  },
  form: {
    marginTop: moderateScale(20),
    width: Dimensions.get('window').width * 0.9,
    alignItems: "center"
  },
  input1: {
    fontFamily: font_type.FontLight
  },
  forgot_label: {
    fontFamily: font_type.FontLight,
    fontSize: moderateScale(12)
  },
  forgot_label_bg: {
    justifyContent: "center",
    alignSelf: "flex-end",
    marginBottom: 15
  },
  btn_sec: {
    width: Dimensions.get('window').width,
    justifyContent: "center",
    backgroundColor: "#ff6347"
  },
  button_text: {
    alignSelf: "center",
    fontFamily: font_type.FontBold,
    color: 'white',
    fontSize: moderateScale(17)
  }
});
// END TO MAKE STYLE
