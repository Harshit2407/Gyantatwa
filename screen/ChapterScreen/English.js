import React, { Component } from 'react';
import { View, Text ,TouchableOpacity,StyleSheet,FlatList,item, Alert} 
from 'react-native';


export class English extends Component {
onclick_item(item) {
  let id = item.id
  if(id == '1')
  {
    Alert.alert('welcome' , 'chapter 1', [{text : 'ok'}]);
  }
  else if(id == '2')
  {
    Alert.alert('welcome' , 'chapter 2', [{text : 'ok'}]);
  }
  else if(id == '3')
  {
    Alert.alert('welcome' , 'chapter 3', [{text : 'ok'}]);
  }

  }

  render() {
    return (
      <View>
         <FlatList
            data={[
              {name: 'Chapter 1: A Tale of Two Birds', id: '1'},
              {name: 'Chapter 2: The Friendly Mongoose', id: '2'},
              {name: 'Chapter 3: The Shepherd Treasure', id: '3'},
              {name: 'Chapter 4: The Old-Clock Shop', id: '4'},
              {name: 'Chapter 5: Tansen', id: '5'},
              {name: 'Chapter 6: The Monkey and the Crocodile', id: '6'},
              {name: 'Chapter 7: The Wonder Called Sleep', id: '7'},
              {name: 'Chapter 8: A Pact with the Sun', id: '8'},
              {name: 'Chapter 9: What Happened to the Reptiles', id: '9'},
              {name: 'Chapter 10: A Strange Wrestling Match', id: '10'},
              {name: 'Chapter 11: Who Did Patricks Homework?', id: '11'},
              {name: 'Chapter 12: A House, A Home', id: '12'},
              {name: 'Chapter 13: How the Dog Found Himself a New Master! & The Kite', id: '13'},
              {name: 'Chapter 14: Taros Reward & The Quarrel', id: '14'},
                 ]}
              renderItem={
                ({item}) => 
                    <TouchableOpacity 
                       onPress={() => this.onclick_item(item)} 
                    >
                     <Text style={styles.item}>{item.name}</Text>
                    </TouchableOpacity>}
                    >

          </FlatList>
      </View>
     )
    }
  }

  export default English

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 10,
      paddingHorizontal: 10
    },
    item: {
      marginTop: 14,
      padding: 10,
      backgroundColor: 'pink',
      fontSize: 24
    }
  });