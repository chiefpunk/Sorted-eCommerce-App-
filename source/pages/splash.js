import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Image,
    StatusBar,
    Alert
} from 'react-native';


const SCREEN_DELAY = 2000;

export default class Splash extends Component{
    performTimeConsumingTask = async() => {
        return new Promise((resolve) =>
            setTimeout(() => { resolve('OnBoardIn') } , SCREEN_DELAY)
        )
    }

    async componentDidMount() {
        // Preload data from an external API
        // Preload data using AsyncStorage
        const data = await this.performTimeConsumingTask();

        if (data !== null) {
        //    Alert.alert('TTT');
           this.props.navigation.navigate('Login');
        }
    }
    render(){
        return(
            <View style={styles.container}>
                <StatusBar backgroundColor="#004946" barStyle="light-content" />
                <Image source={require('./../assets/splash_screen.jpg')} style = {styles.logo}  resizeMode={'stretch'}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo:{
        alignItems: 'center',
        width: "100%",
        height: "100%",
    }
});
