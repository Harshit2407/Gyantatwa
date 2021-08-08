import React, { Component } from 'react'
import { Alert } from 'react-native'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import { color } from 'react-native-elements/dist/helpers'
import RNFetchBlob from 'react-native-fetch-blob'

class Dictionary extends Component {

   
   path1 ="file:///storage/emulated/0/Download/educontent/"+"dictionary"+".csv"
   filedata=""
   state = {
      search: '',
      SearchOutput: ''
   }
   handleSearch = (text) => {
      this.setState({ search: text })
   }
   WordMeaning = (search , data) => {

     var line = data.split('\n');
     var temp = "";
      
     var  i = "";
    for ( i = 0; i < line.length - 1; i++) {
      var row = line[i].split(',')
      var keys = row[0]
      var values = row[1]

      var keys = keys.replace(/['"]+/g, '');
       //values = values.replace(/['"]+/g, '');
       
     if(keys == search)
     {
         temp = temp + '\n' +values;
         console.log(keys+" = "+values);
         this.setState({ SearchOutput: temp })
         console.log(this.state.SearchOutput);
     }
  }

   }

   render() {
  
   RNFetchBlob.fs.exists(this.path1)
.then((exist) => {
    console.log(`file ${exist ? '' : 'not'} exists`)
    if(exist == true)
    {
      RNFetchBlob.fs.readFile(this.path1, 'utf8')
      .then((data) => {
       this.filedata = data
      // console.log(this.filedata);
   
      })

    }
    else{
       Alert.alert('No data');
    }
})
      return (
         <View style = {styles.container}>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Search here"
               placeholderTextColor = "#FFC278"
               autoCapitalize = "none"
               onChangeText = {this.handleSearch}/>
            
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.WordMeaning(this.state.search , this.filedata)
               }>
               <Text style = {styles.submitButtonText}> Search </Text>
            </TouchableOpacity>
            <Text style = {styles.output} > {this.state.SearchOutput}</Text>
            <Text style = {styles.LastText}> Learning never exhausts the mind </Text>
         </View>
      )
   }
}
export default Dictionary

const styles = StyleSheet.create({
   container: {
      paddingTop: 23,
      backgroundColor:'#EE4B2B'
   },
   input: {
      margin: 16,
      height: 40,
      borderColor: '#FFC278',
      borderWidth: 2,
      backgroundColor: '#FFFFFF',
     // color:'#FFC278'
   },
   output: {
      fontSize: 22,
    margin: 15,
    marginLeft: 50,
    height: 400,
    width: 300,
    borderColor: '#FF7648',
    borderWidth: 2, 
    textAlign:'center',
    backgroundColor:'#FFFFFF'


 },
   submitButton: {
      backgroundColor: '#FFC278',
      padding: 10,
      margin: 15,
      marginLeft: 270,
      height: 40,
      width: 80,
      textAlign: 'center'
   },
   LastText: {
      color: 'white',
      padding: 10,
      margin: 15,
      //marginLeft: 270,
     // height: 40,
     // width: 80,
      textAlign: 'center',
      fontSize: 24
   },
   submitButtonText:{
      color: 'white',
   }
})