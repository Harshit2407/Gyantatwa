import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, Button} from 'react-native';
import cm from './cm.png';

const screen2 =({navigation})=>{
    return(
      <View
      style={{flex:1,backgroundColor:'black'}}>
        <Text
        style={{color:'#a6a4a4',fontSize:30,fontWeight:'bold',borderWidth:1,textAlign:'center'}}>
            Student can choose any field of learning , but serving the nation should be their ultimate goalin life
        </Text>
        <Image
          source={cm}>

        </Image>
        <Button
          title="Next"
          onPress={() =>navigation.navigate('screen3')}
          >
        </Button>
      </View>
    );
  }  
  export default screen2;