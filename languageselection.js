import React,{Component} from 'react';
import { View,Text,ScrollView,Image,StyleSheet,TouchableOpacity} from 'react-native';
import stringsoflanguages from './screen/DrawbleScreen/ChangeLanguage/LocalizedStrings'
import language from './language.png';

export class languageselection extends Component{
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
                    <Image style={styles.img}
                    source={language}>
                    </Image>
                </View>
                <ScrollView style={{marginTop:30,width:'80%'}}>
                    {global.lang.map((item,key)=>(
                        <View style={styles.elementContainer} key={key}>
                            <TouchableOpacity>
                            <Text
                            style={{fontFamily:'PermanentMarker-Regular'}}
                            ref={item.shortform}
                            onPress={()=>this.settext(item.shortform)}>
                                {item.longform}
                            </Text>
                            </TouchableOpacity>
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
        textAlign:'center',
        fontFamily:'PermanentMarker-Regular'
    },
    elementContainer:{
        width:'100%',
        marginTop:30,
        alignItems:'center'
    },
    img:{
        width:64,
        height:64,
        marginTop:30,
      // justifyContent:'center',

    }
});

export default languageselection;