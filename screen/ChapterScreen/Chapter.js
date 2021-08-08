import React, { Component , useState } from 'react';
import {StyleSheet, View, Text, Image, Button, ImageBackground , FlatList , TouchableOpacity , Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import data from './ChaptersData.json';


export default class GeneralKnowledge extends React.Component {

  componentDidMount() { this.props.navigation.setOptions({ title: this.props.route.params.subject, }) }
  /*constructor(props) {
    super(props);

    this.state = { 
      dataSource: [], // store an object of json data
    };
  }*/

  /*componentDidMount() {
    this.setState({
      dataSource: data.info
    });
  }*/
   name = data ; 
  
  /*onclick_item(item) {
    let id = item.id
    if(id == '1')
    {
      Alert.alert('welcome' , 'chapter 1', [{text : 'ok'}]);
    }
    else if(id == '2')
    {
      Alert.alert('welcome' , 'chapter 2', [{text : 'ok'}]);
    }
  }*/

 display(subject)
 {
  if(subject == 'GK')
  {
    Alert.alert('welcome' , subject, [{text : 'ok'}]);   
   
  }
  else if(subject == 'Maths')
  {
    this.name = data.maths
   
  }
  else if(subject == 'Science')
  {
    
    this.name = data.sci
  }
  else if(subject == 'Political Science')
  {
    
    this.name = data.pol
   
  }
  else if(subject == 'History')
  {
   
    this.name = data.his
   
  }
  else if(subject == 'Geography')
  {
    
    this.name = data.geo
   
  }
  else if(subject == 'Sanskrit')
  {
    
    this.name = data.sans
   
  }
  else if(subject == 'Hindi')
  {
    
    this.name = data.hin
   
  }
  else if(subject == 'English')
  {
    
    this.name = data.english
   
  }
  else if(subject == 'EG')
  {
    
    this.name = data.eng_grammar
  }
 }
 RenderText(item)
 {
   if(item.id % 2 == 0)
   {
    return <Text style={styles.EvenItem}>{item.name}</Text>

   }
   else
   {
    return <Text style={styles.OddItem}>{item.name}</Text>
   }
 }

  render(){

    const {subject} = this.props.route.params
    
    return(
      <View>
            {this.display(subject)}
            <FlatList
            data={this.name}
              renderItem={
                ({item}) => 
                <View
                  style={{
                  flex: 1,
                  flexDirection:'column',
                  margin: 8,
                  
                  
                }}>
                    <TouchableOpacity 
                       onPress={() => this.props.navigation.navigate('Content' , {subject : subject , chapter : item.name})} 
                    >
                      {this.RenderText(item)}
                    {/* <Text style={styles.EvenItem}>{item.name}</Text>*/}
                    </TouchableOpacity>
                    </View>}
                    numColumns={2}
                    keyExtractor={(item, index) => index.toString()}
                    >

          </FlatList>
        
      </View>
    );
}  
}
  

  const styles = StyleSheet.create({
    container: {
      
      paddingTop: 5,
      paddingHorizontal: 5,
      flex:1,
      justifyContent: 'center',

      
    },
    EvenItem: {
      marginTop: 10,
      marginLeft:20,
      marginRight:4,
      backgroundColor: '#FF7648',
      fontSize: 15,
      color:"#FFFFFF",
      textAlign:'center',
      height: 119,
      width:149,
      borderRadius:20,
      fontWeight:'600',
      fontFamily:'Poppins-Bold',
      alignContent:"center",
      alignItems:"center",
      fontStyle:"normal"
    },
    OddItem: {
      marginTop: 10,
      marginLeft:20,
      marginRight:4,
      backgroundColor: '#CCCCFF',
      fontSize: 15,
      color:"#FFFFFF",
      textAlign:'center',
      height: 119,
      width:149,
      borderRadius:20,
      fontWeight:'600',
      fontFamily:'Poppins-Bold',
      alignContent:"center",
      alignItems:"center",
      fontStyle:"normal"
    }
  });