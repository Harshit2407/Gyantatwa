// React Native Navigation Drawer
// https://aboutreact.com/react-native-navigation-drawer/
import React, { Component } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Button,
  View,
  Text,Image,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  ImageBackground
} from 'react-native';
import stringsoflanguages from './DrawbleScreen/ChangeLanguage/LocalizedStrings';
import Svg from 'react-native-svg';


export class HomeScreen extends Component {
  /*static navigationOptions=({navigation})=>{
    return{
      title:navigation.getParam('Title','Default Title'),
    };
  };

  componentDidMount(){
    var that = this;
    var heading='';
    if(this.props.navigation.state.params.JSON_Clicked_Item=='hi'){
      heading='Selected Language Hindi';
    }
    else if(
      this.props.navigation.state.params.JSON_Clicked_Item=='en'
    ){
      heading='Selected Language English';
    }
    that.props.navigation.setParams({
      Title:heading,
    })
  }
*/
  render(){
  return (
    <View style ={styles.container}>
      <View style={styles.box}>
      <ImageBackground style={{width:149,height:119,marginLeft:20}}
      source={require('./Group1.png')}>
        <TouchableOpacity
          onPress={()=> this.props.navigation.navigate('Chapter' , {subject : 'GK'})}>
              <Image style={{width:90,height:60,left:0,right:0}}
               source={require('../Drawble/icons/gkicon.png')}>
              </Image>
            <Text 
            style={{color:'#FFFFFF',fontWeight:'600',width:109,height:50,left:44,fontStyle:'normal',fontSize:16,lineHeight:24,fontFamily:'Poppins-Bold'}}>
              {stringsoflanguages.GENERAL_KNOWLEDGE}
            </Text>
        </TouchableOpacity>
        </ImageBackground>
      </View>
      <View style={styles.box}>
      <ImageBackground style={{width:149,height:119,marginLeft:20}}
      source={require('./Group2.png')}>
        <TouchableOpacity
          onPress={()=> this.props.navigation.navigate('Chapter' , {subject : 'Maths'})}>
            <Image style={{width:90,height:60}}
               source={require('../Drawble/icons/maths.png')}>
              </Image>
            <Text 
            style={{color:'#FFFFFF',fontWeight:'600',width:109,height:50,left:44,fontStyle:'normal',fontSize:16,lineHeight:24,fontFamily:'PermanentMarker-Regular'}}>
           {stringsoflanguages.MATHS}
            </Text>
        </TouchableOpacity>  
       </ImageBackground>  
      </View>
      <View style={styles.box}>
      <ImageBackground style={{width:149,height:119,marginLeft:20}}
      source={require('./Group2.png')}>
        <TouchableOpacity
          onPress={()=> this.props.navigation.navigate('Chapter' , {subject : 'Science'})}>
            <Image style={{width:90,height:60}}
               source={require('../Drawble/icons/science.png')}>
              </Image>
          <Text 
            style={{color:'#FFFFFF',fontWeight:'600',width:109,height:50,left:44,fontStyle:'normal',fontSize:16,lineHeight:24,fontFamily:'Poppins-Bold'}}>
           {stringsoflanguages.SCIENCE}
          </Text>
        </TouchableOpacity>   
        </ImageBackground>
      </View>
      <View style={styles.box}>
      <ImageBackground style={{width:149,height:119,marginLeft:20}}
      source={require('./Group1.png')}>
        <TouchableOpacity
          onPress={()=> this.props.navigation.navigate('Chapter' , {subject : 'Political Science'})}>
            <Image style={{width:90,height:60}}
               source={require('../Drawble/icons/social.png')}>
              </Image>
            <Text 
            style={{color:'#FFFFFF',fontWeight:'600',width:109,height:50,left:44,fontStyle:'normal',fontSize:16,lineHeight:24,fontFamily:'Poppins-Bold'}}>
           {stringsoflanguages.POLITICAL_SCIENCE}
          </Text>
        </TouchableOpacity> 
        </ImageBackground>
      </View>
      <View style={styles.box}>
      <ImageBackground style={{width:149,height:119,marginLeft:20}}
      source={require('./Group1.png')}>
        <TouchableOpacity
          onPress={()=> this.props.navigation.navigate('Chapter' , {subject : 'History'})}>
            <Image style={{width:90,height:60}}
               source={require('../Drawble/icons/history.png')}>
              </Image>
              <Text 
            style={{color:'#FFFFFF',fontWeight:'600',width:109,height:50,left:44,fontStyle:'normal',fontSize:16,lineHeight:24,fontFamily:'Poppins-Bold'}}>
                {stringsoflanguages.HISTORY}
          </Text>
        </TouchableOpacity> 
        </ImageBackground>
      </View>
      <View style={styles.box}>
      <ImageBackground style={{width:149,height:119,marginLeft:20}}
      source={require('./Group2.png')}>
       <TouchableOpacity
          onPress={()=> this.props.navigation.navigate('Chapter' , {subject : 'Geography'})}>
              <Image style={{width:90,height:60}}
               source={require('../Drawble/icons/geography.png')}>
              </Image>
              <Text style={{color:'#FFFFFF',fontWeight:'600',width:109,height:50,left:44,fontStyle:'normal',fontSize:16,lineHeight:24,fontFamily:'Poppins-Bold'}}>
                {stringsoflanguages.GEOGRPAHY}
              </Text>
        </TouchableOpacity>
        </ImageBackground>
      </View>
      <View style={styles.box}>
      <ImageBackground style={{width:149,height:119,marginLeft:20}}
      source={require('./Group2.png')}>
      <TouchableOpacity onPress={()=> this.props.navigation.navigate('Chapter' , {subject : 'Sanskrit'})}>
          <Image style={{width:90,height:60}}
               source={require('../Drawble/icons/sanskrit.png')}>
              </Image>
              <Text style={{color:'#FFFFFF',fontWeight:'600',width:109,height:50,left:44,fontStyle:'normal',fontSize:16,lineHeight:24,fontFamily:'Poppins-Bold'}}>
                {stringsoflanguages.SANSKRIT}
              </Text>
        </TouchableOpacity>
        </ImageBackground>
      </View>
      <View style={styles.box}>
      <ImageBackground style={{width:149,height:119,marginLeft:20}}
      source={require('./Group1.png')}>
        <TouchableOpacity onPress={()=> this.props.navigation.navigate('Chapter' , {subject : 'Hindi'})}>
        <Image style={{width:90,height:60}}
               source={require('../Drawble/icons/hindi.png')}>
              </Image>
              <Text style={{color:'#FFFFFF',fontWeight:'600',width:109,height:50,left:44,fontStyle:'normal',fontSize:16,lineHeight:24,fontFamily:'Poppins-Bold'}}>
                {stringsoflanguages.HINDI}
              </Text>
        </TouchableOpacity>
       </ImageBackground>
      </View>
      <View style={styles.box}>
      <ImageBackground style={{width:149,height:119,marginLeft:20}}
      source={require('./Group1.png')}>
       <TouchableOpacity
          onPress={()=> this.props.navigation.navigate('Chapter' , {subject : 'English'})}>
        <Image style={{width:90,height:60}}
               source={require('../Drawble/icons/english.png')}>
              </Image>
              <Text style={{color:'#FFFFFF',fontWeight:'600',width:109,height:50,left:44,fontStyle:'normal',fontSize:16,lineHeight:24,fontFamily:'Poppins-Bold'}}>
                {stringsoflanguages.ENGLISH}
              </Text>
        </TouchableOpacity>
        </ImageBackground>
      </View>
      <View style={styles.box}>
      <ImageBackground style={{width:149,height:119,marginLeft:20}}
      source={require('./Group2.png')}>
        <TouchableOpacity
          onPress={()=> this.props.navigation.navigate('Chapter' , {subject : 'EG'})}>
        <Image style={{width:90,height:60}}
               source={require('../Drawble/icons/englishg.png')}>
              </Image>
              <Text style={{color:'#FFFFFF',fontWeight:'600',width:109,height:50,left:44,fontStyle:'normal',fontSize:16,lineHeight:24,fontFamily:'Poppins-Bold'}}>
                {stringsoflanguages.ENGLISH_GRAMMAR}
              </Text>
        </TouchableOpacity>
        
        </ImageBackground>
      </View>
    </View>
  );
}
}
const styles =StyleSheet.create({
  container:{
    width: '100%',
    height:'85%',
    padding:5,
    flexDirection:'row',
    flexWrap:'wrap'
  },
  box:{
    width:'50%',
    height:'25%',
    padding:5
  },
  inner:{
    flex:1,
    backgroundColor:'#b54200',
    alignItems:'center',
    justifyContent:'center'
  }

});

export default HomeScreen;