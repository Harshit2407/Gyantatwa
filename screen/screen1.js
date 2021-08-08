/*import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, Button, ImageBackground} from 'react-native';
import pm from './pm.png';


const screen1 =({navigation})=>{
    return(
      <View
      style={{flex:1,backgroundColor:'black'}}>
        <Text
        style={{color:'#a6a4a4',fontSize:30,fontWeight:'bold',borderWidth:1,textAlign:'center'}}>
            Education makes life self-reliant.It inspires man to live with dignity in the society
        </Text>
        <Image
          source={pm}>
        </Image>

        <Button
        style={{height:500}}
        
          title="Next"
          onPress={() =>navigation.navigate('screen2')}
          >
        </Button>
      </View>
    );
}  
  export default screen1;
*/
import React, { Component } from 'react';
import { Button } from 'react-native';
import { Image, StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { color } from 'react-native-elements/dist/helpers';
import Icon from 'react-native-vector-icons/Ionicons';

const slides = [
  {
    key: 'one',
    title: 'Narendra Modi',
    text: 'Education makes life self-reliant.It inspires man to live with dignity in the society',
    image: require("./pm3.jpg")
  },
  {
    key: 'two',
    title: 'Trivendra Singh Rawat',
    text: 'Student can choose any field of learning , but serving the nation should be their ultimate goal in life',
    image: require("./cm2.jpg")
  },
  {
    key: 'three',
    title: 'ENJOY YOUR JOURNEY',
    //text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    image: require('./img4.jpg'),
    Next: 'Next'
  }
]

export default class screen1 extends Component {

  state = { showHomePage: false }

  _renderItem = ({ item }) => {
    return (
      <View style={{ flex: 1 }}>
        <Image
          source={item.image}
          style={{
            resizeMode: 'cover',
            height: '73%',
            width: '100%'
            
          }}
        />
        <Text
          style={{
            paddingTop: 25,
            paddingBottom: 10,
            fontSize: 23,
            fontWeight: 'bold',  
            color: '#21465B',
            alignSelf: 'center'
          }}>
          {item.title}
        </Text>
        <Text
          style={{
            textAlign: 'center', 
            color: '#b5b5b5',
            fontSize: 15,
            paddingHorizontal: 30
          }}>
          {item.text}
        </Text>
      </View>
    )
  }

  _renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Icon
          name="arrow-forward"
          color="rgba(255, 255, 255, .9)"
          size={24}
        />
        {/*<Text style={{color:'#21465B'}}>
          Next
        </Text>
      */}
      </View>
    );
  };
  _renderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
       {/*} <Text style={{color:'#21465B'}}
          onPress={()=> this.props.navigation.navigate('languageselection')}>
            Done

        </Text>
    */}
      <Icon
          name="checkmark-sharp"
          color="rgba(255, 255, 255, .9)"
          size={24}
          onPress={()=> this.props.navigation.navigate('languageselection')}
        />
      </View>
    );
  };

  render() {
    return (
      <AppIntroSlider
        renderItem={this._renderItem}
        data={slides}
        activeDotStyle={{
          backgroundColor: '#21465B',
          width: 25
        }}
        renderDoneButton={this._renderDoneButton}
        renderNextButton={this._renderNextButton}
      />
    )
  }
}

const styles =StyleSheet.create({

  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: '#21465B',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});