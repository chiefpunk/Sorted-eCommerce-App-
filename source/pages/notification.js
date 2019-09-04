import React, {Component} from 'react';
import {Text, View, StatusBar,ScrollView,TouchableOpacity, StyleSheet,Dimensions} from 'react-native';
import {Container, Header, List, ListItem, Left, Right, Icon} from 'native-base';

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

export default class Notification extends Component{
    render(){
        return(
            <Container>
                <StatusBar backgroundColor="#ff6347" barStyle="light-content" />
                <Header hasTabs style={{backgroundColor:'#ff6347' }}>
                    <Left style={{flexDirection:'row'}}>
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>             
                            <Icon name='left' type="AntDesign" style={{paddingLeft:10, color:'white', fontSize:moderateScale(14)}}/>
                        </TouchableOpacity>
                        <Text style={{fontSize:moderateScale(14), marginLeft:12, color:'white'}}>Notifications</Text>
                    </Left>
                    <Right></Right>
                </Header>
                <ScrollView>
                    <List>
                        <ListItem>
                            <TouchableOpacity style={styles.item_style} onPress={() => this.props.navigation.navigate('Details')}>
                                <Text>Jul 10, 2019</Text>
                                <Text>20:13:49</Text>
                            </TouchableOpacity>
                        </ListItem>
                        <ListItem>
                            <TouchableOpacity style={styles.item_style} onPress={() => this.props.navigation.navigate('Details')}>
                                <Text>Jul 22, 2019</Text>
                                <Text>02:15:29</Text>
                            </TouchableOpacity>
                        </ListItem>
                        <ListItem>
                            <TouchableOpacity style={styles.item_style} onPress={() => this.props.navigation.navigate('Details')}>
                                <Text>Jul 24, 2019</Text>
                                <Text>10:13:49</Text>
                            </TouchableOpacity>
                        </ListItem>
                    </List>
                </ScrollView>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    item_style: {
        width:'100%'
    }
});