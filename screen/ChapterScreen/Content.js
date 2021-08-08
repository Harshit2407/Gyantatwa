import React, { Component } from 'react';
import { ImageBackground } from 'react-native';
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native'

export class Content extends Component{

   componentDidMount() { this.props.navigation.setOptions({ title: this.props.route.params.chapter, }) }

  render(){
   const {subject , chapter} = this.props.route.params
   return (
      <View>
         <ImageBackground style={{width:390,height:430}}
            source={require('../img2.jpg')}>
   </ImageBackground>
         <View style={styles.container}>
            <View style={styles.box}>
               <View style={{position:'absolute',width:149,height:119,left:28,borderRadius:16}}>
         <TouchableOpacity
         onPress={() => this.props.navigation.navigate('PDF' , {subject : subject , chapter : chapter})} >
            <Text style={{borderRadius:16,padding:15,color:'#FFFFFF',fontWeight:'600',width:109,height:65,left:20,fontStyle:'normal',fontSize:16,lineHeight:24,fontFamily:'Poppins-Bold',backgroundColor: '#8F98FF',textAlign:'center'}}>
               PDF
            </Text>
         </TouchableOpacity>
         </View>
         </View>
         <View style={styles.box}>
         <View style={{position:'absolute',width:149,height:119,left:28,borderRadius:16}}>
         <TouchableOpacity
         onPress={() => this.props.navigation.navigate('VideoHomeScreen', {subject : subject , chapter : chapter})}>
            <Text style = {{borderRadius:16,padding:15,color:'#FFFFFF',fontWeight:'600',width:109,height:65,left:20,fontStyle:'normal',fontSize:16,lineHeight:24,fontFamily:'Poppins-Bold',backgroundColor: '#4DC591',textAlign:"center"}}>
               Videos
            </Text>
         </TouchableOpacity>
         </View>
         </View>
         <View style={styles.box}>
         <View style={{position:'absolute',width:149,height:119,left:28,borderRadius:16}}>
         <TouchableOpacity
         onPress={() => this.props.navigation.navigate('Quiz', {subject : subject , chapter : chapter})} >
            <Text style = {{ borderRadius:16, padding:15, color:'#FFFFFF',fontWeight:'600',width:109,height:65,left:20,fontStyle:'normal',fontSize:16,lineHeight:24,fontFamily:'Poppins-Bold',backgroundColor: '#FFC278',textAlign:"center"}}>
               MCQ
            </Text>
         </TouchableOpacity>
         </View>
         </View>
         <View style={styles.box}>
         <View style={{position:'absolute',width:149,height:119,left:28,borderRadius:16}}>
         <TouchableOpacity
         onPress={() => this.props.navigation.navigate('Questions')} >
            <Text style = {{borderRadius:16, padding:15,color:'#FFFFFF',fontWeight:'600',width:109,height:65,left:20,fontStyle:'normal',fontSize:16,lineHeight:24,fontFamily:'Poppins-Bold',backgroundColor: '#FF7648',textAlign:"center"}}>
               Question
            </Text>
         </TouchableOpacity>
         </View>
         </View>
         </View>
      </View>
   )
}
}
export default Content;

const styles = StyleSheet.create ({
   container: {
      width: '100%',
      height:'40%',
      padding:10,
     flexDirection:'row',
     flexWrap:'wrap',
     backgroundColor:"white"
     
   },
   box:{
      width:'50%',
      height:'45%',
    },
   text: {
      borderRadius:16,
      padding:15,
      color:'#FFFFFF',fontWeight:'600',width:109,height:65,left:20,fontStyle:'normal',fontSize:16,lineHeight:24,fontFamily:'Poppins-Bold',
      backgroundColor: '#FF7648',
       
   }
})