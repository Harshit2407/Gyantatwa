import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, Button} from 'react-native';
import third from './third.png';

const screen3 =({navigation})=>{
    return(
      <View
      style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'black'}}>
        <Text
        style={{color:'#a6a4a4',fontSize:30,fontWeight:'bold',borderWidth:1,textAlign:'center'}}>
            -Distance learning{"\n"} 
            -Online Classes{"\n"} -Pratice material and more.
        </Text>
        
        <Button
          title="Start"
          onPress={() =>navigation.navigate('languageselection')}
          >
        </Button>
      </View>
    );
}  
  export default screen3;
