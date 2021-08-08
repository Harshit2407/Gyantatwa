
import React,{Component} from 'react';
import {
  Button,
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import stringsoflanguages from './LocalizedStrings'

export class ChangeLanguage extends Component{
 /* return (
    /*<SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16 }}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <TouchableOpacity
            onPress={()=>navigation.navigate('languageselection')}>

          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginBottom: 16
            }}>
           {stringsoflanguages.CHANGE_LANGUAGE}
          </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );*/
  constructor(props){
    super(props);
    const lang=[
        {shortform:'hi',longform:'Hindi'}, 
        {shortform:'en',longform:'English'}
    ];
    global.lang=lang;
}      

settext(value){    
    stringsoflanguages.setLanguage(value);
   this.props.navigation.navigate('HomeScreen',{JSON_Clicked_Item:value,});
}
render(){
    return(
       <View style={styles.MainContainer}>
            <View style={{marginTop:60}}>
                <Text style={styles.textHeading}>
                    Please Select Preferred Language
                </Text>
            </View>
            <ScrollView style={{marginTop:30,width:'80%'}}>
                {global.lang.map((item,key)=>(
                    <View style={styles.elementContainer} key={key}>
                        <Text
                        ref={item.shortform}
                        onPress={()=>this.settext(item.shortform)}>
                            {item.longform}
                        </Text>
                    </View>
                ))}
            </ScrollView>
        </View>

    );
}
}
const styles=StyleSheet.create({
  MainContainer:{
      flex:1,
      backgroundColor:'white',
      alignItems:'center'
  },
  textHeading:{
      color:'#191919',
      fontSize:30,
      textAlign:'center'
  },
  elementContainer:{
      width:'100%',
      marginTop:30,
      alignItems:'center'
  },
  img:{
      width:64,
      height:64,
      marginTop:30
  }
});  

export default ChangeLanguage;