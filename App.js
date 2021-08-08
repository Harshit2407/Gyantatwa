// React Native Navigation Drawer
// https://aboutreact.com/react-native-navigation-drawer/
import 'react-native-gesture-handler';

import * as React from 'react';
import {
  Button,
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from './screen/HomeScreen';
import Demonstration from './screen/DrawbleScreen/Demonstration';
import Dictionary from './screen/DrawbleScreen/Dictionary';
import Camera from './screen/DrawbleScreen/Camera';
import Gallery from './screen/DrawbleScreen/Gallery';
import Chapter from './screen/ChapterScreen/Chapter';
import mascot from './Drawble/mascot.gif';

import screen3 from './screen/screen3';
import screen2 from './screen/screen2';
import screen1 from './screen/screen1';
import calculator from './screen/DrawbleScreen/calculator';
import Notes from './screen/DrawbleScreen/Notes';
import OnlineClasses from './screen/DrawbleScreen/OnlineClasses';
import ChangeLanguage from './screen/DrawbleScreen/ChangeLanguage/ChangeLanguage';
import Content from './screen/ChapterScreen/Content';
import Questions from './screen/ChapterScreen/Questions';
import PoliticalScience from './screen/ChapterScreen/PoliticalScience';
import Quiz from './screen/ChapterScreen/Quiz';
import Geography from './screen/ChapterScreen/Geography';
import Sanskrit from './screen/ChapterScreen/Sanskrit';
import PDF from './screen/ChapterScreen/PDF';
import English from './screen/ChapterScreen/English';
import EnglishGrammar from './screen/ChapterScreen/EnglishGrammar';
import VideoHomeScreen from './screen/VideoPlayerScreen/VideoHomeScreen';
import VideoPlayer from './screen/VideoPlayerScreen/VideoPlayer';

import CustomSidebarMenu from './CustomSidebarMenu';
import languageselection from './languageselection';
import stringsoflanguages from './screen/DrawbleScreen/ChangeLanguage/LocalizedStrings';
import calculator2 from './calculator.svg'

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const NavigationDrawerStructure = (props)=> {
  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={()=> toggleDrawer()}>
        {/*Donute Button Image */}
        <Image
          source={{uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png'}}
          style={{
            width: 25,
            height: 25,
            marginLeft: 5
          }}
        />
      </TouchableOpacity>
    </View>
  );
}

function splashScreen({navigation}){
  setTimeout(()=>{
    navigation.replace('screen1');
  }, 5000);
  return (
    <View
      style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'#FFC278'}}>
        <Text
        style={{color:'#FFFFFF',fontSize:30,fontWeight:'bold',height:40,margin:12,fontFamily:'PermanentMarker-Regular'}}>
          GYANTATWA
        </Text>
      <Image
        source={require('./Drawble/mascot.gif')}
        style={{height:200,width:200}}
        />
    </View>
  )
}



function firstScreenStack({ navigation }) {
  return (
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            title: stringsoflanguages.SUBJECT, //Set Header Title
            headerLeft: ()=>
              <NavigationDrawerStructure
                navigationProps={navigation}
              />,
            headerStyle: {
              backgroundColor: '#FFC278', //Set Header color

            },
            headerTitleAlign:'center',
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
      </Stack.Navigator>
  );
}

function secondScreenStack({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerLeft: ()=>
          <NavigationDrawerStructure
            navigationProps={navigation}
          />,
        headerStyle: {
          backgroundColor: '#FFC278', //Set Header color
        },
        headerTitleAlign:'center',
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        }
      }}>
      <Stack.Screen
        name="Demonstration"
        component={Demonstration}
        options={{
          title: stringsoflanguages.DEMONSTRATION, //Set Header Title
          
        }}/>
    </Stack.Navigator>
  );
}

function thirdScreenStack({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerLeft: ()=>
          <NavigationDrawerStructure
            navigationProps={navigation}
          />,
        headerStyle: {
          backgroundColor: '#FFC278', //Set Header color
        },
        headerTitleAlign:'center',
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        }
      }}>
      <Stack.Screen
        name="Dictionary"
        component={Dictionary}
        options={{
          title: stringsoflanguages.DICTIONARY, //Set Header Title
          
        }}/>
    </Stack.Navigator>
  );
}

function fourthScreenStack({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerLeft: ()=>
          <NavigationDrawerStructure
            navigationProps={navigation}
          />,
        headerStyle: {
          backgroundColor: '#FFC278', //Set Header color
        },
        headerTitleAlign:'center',
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        }
      }}>
      <Stack.Screen
        name="Camera"
        component={Camera}
        options={{
          title: stringsoflanguages.CAMERA, //Set Header Title
          
        }}/>
    </Stack.Navigator>
  );
}


function fifthScreenStack({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerLeft: ()=>
          <NavigationDrawerStructure
            navigationProps={navigation}
          />,
        headerStyle: {
          backgroundColor: '#FFC278', //Set Header color
        },
        headerTitleAlign:'center',
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        }
      }}>
      <Stack.Screen
        name="Gallery"
        component={Gallery}
        options={{
          title: stringsoflanguages.GALLERY, //Set Header Title
          
        }}/>
    </Stack.Navigator>
  );
}

function sixthScreenStack({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerLeft: ()=>
          <NavigationDrawerStructure
            navigationProps={navigation}
          />,
        headerStyle: {
          backgroundColor: '#FFC278', //Set Header color
        },
        headerTitleAlign:'center',
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        }
      }}>
      <Stack.Screen
        name="calculator"
        component={calculator}
        options={{
          title: stringsoflanguages.CALCULATOR, //Set Header Title
          
        }}/>
    </Stack.Navigator>
  );
}

function seventhScreenStack({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerLeft: ()=>
          <NavigationDrawerStructure
            navigationProps={navigation}
          />,
        headerStyle: {
          backgroundColor: '#FFC278', //Set Header color
        },
        headerTitleAlign:'center',
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        }
      }}>
      <Stack.Screen
        name="Notes"
        component={Notes}
        options={{
          title: stringsoflanguages.NOTES, //Set Header Title
          
        }}/>
    </Stack.Navigator>
  );
}


function eighthScreenStack({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerLeft: ()=>
          <NavigationDrawerStructure
            navigationProps={navigation}
          />,
        headerStyle: {
          backgroundColor: '#FFC278', //Set Header color
        },
        headerTitleAlign:'center',
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        }
      }}>
      <Stack.Screen
        name="OnlineClasses"
        component={OnlineClasses}
        options={{
          title: stringsoflanguages.ONLINE_CLASSES, //Set Header Title
          
        }}/>
    </Stack.Navigator>
  );
}


function ninthScreenStack({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerLeft: ()=>
          <NavigationDrawerStructure
            navigationProps={navigation}
          />,
        headerStyle: {
          backgroundColor: '#FFC278', //Set Header color
        },
        headerTitleAlign:'center',
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        }
      }}>
      <Stack.Screen
        name="ChangeLanguage"

        component={ChangeLanguage}
        options={{
          headerShown:false
          
        }}/>
    </Stack.Navigator>
  );
}


function Draw(){
  return(
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: '#FFC278',
        itemStyle: { marginVertical: 5 },
      }}
      drawerContent={(props) => <CustomSidebarMenu {...props} />}>
      <Drawer.Screen
        name="HomeScreen"
        options={{drawerIcon: ({}) => (
          <Image
            source={require('./Drawble/subjects.png')}
            style={{height:35,width:35}}
          />
        ), 
        drawerLabel: stringsoflanguages.SUBJECT }}
        component={firstScreenStack} />
      <Drawer.Screen
        name="Demonstration"
        options={{ drawerIcon: ({}) => (
          <Image
            source={require('./Drawble/demo2.png')}
            style={{height:35,width:35}}
          />
        ), 
        drawerLabel: stringsoflanguages.DEMONSTRATION }}
        component={secondScreenStack} />
      <Drawer.Screen
        name="Dictionary"
        options={{drawerIcon: ({}) => (
          <Image
            source={require('./Drawble/dictionary2.png')}
            style={{height:35,width:35}}
          />
        ),  
        drawerLabel: stringsoflanguages.DICTIONARY }}
        component={thirdScreenStack} />
      <Drawer.Screen
        name="Camera"
        options={{drawerIcon: ({}) => (
          <Image
            source={require('./Drawble/camera2.png')}
            style={{height:35,width:35}}
          />
        ), 
        drawerLabel: stringsoflanguages.CAMERA }}
        component={fourthScreenStack} />    
        <Drawer.Screen
        name="Gallery"
        options={{ drawerIcon: ({}) => (
          <Image
            source={require('./Drawble/gallery2.png')}
            style={{height:35,width:35}}
          />
        ), 
        drawerLabel: stringsoflanguages.GALLERY }}
        component={fifthScreenStack} /> 
        <Drawer.Screen
        name="calculator"
         options={{ drawerIcon: ({}) => (
          <Image
            source={require('./Drawble/calculator2.png')}
            style={{height:35,width:35}}
          />
          
          
        ),
          drawerLabel: stringsoflanguages.CALCULATOR }}
        component={sixthScreenStack} />
        <Drawer.Screen
        name="Notes"
        options={{drawerIcon: ({}) => (
          <Image
            source={require('./Drawble/note2.png')}
            style={{height:35,width:35}}
          />
        ), 
          drawerLabel: stringsoflanguages.NOTES }}
        component={seventhScreenStack} />
        <Drawer.Screen
        name="OnlineClasses"
        options={{drawerIcon: ({}) => (
          <Image
            source={require('./Drawble/online2.png')}
            style={{height:35,width:35}}
          />
        ),  
        drawerLabel: stringsoflanguages.ONLINE_CLASSES }}
        component={eighthScreenStack} />
        <Drawer.Screen
        name="ChangeLanguage"
        options={{drawerIcon: ({}) => (
          <Image
            source={require('./Drawble/translate2.png')}
            style={{height:35,width:35}}
          />
        ),  
        drawerLabel: stringsoflanguages.CHANGE_LANGUAGE }}
        component={ninthScreenStack} />    
    </Drawer.Navigator> 
     
  );
}


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="splash_Screen" component={splashScreen}
        options={{
          headerShown:false,
        }}
        />
        <Stack.Screen name ="screen1" component={screen1}
        options={{
          headerShown:false,
        }}/>
        <Stack.Screen name ="screen2" component={screen2}
        options={{
          headerShown:false,
        }}/>
        <Stack.Screen name ="screen3" component={screen3}
        options={{
          headerShown:false,
        }}/>
        <Stack.Screen name ="languageselection" component={languageselection}
        options={{
          headerShown:false,
        }}/>
        
        <Stack.Screen name ="HomeScreen" component={Draw}
        options={{
          headerShown:false,
        }}
        />
        <Stack.Screen name ="Chapter" component={Chapter}
        options={{headerStyle:{backgroundColor:'#FFC278'},
        headerTitleAlign:'center',
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        }}}
        />
        <Stack.Screen name ="Content" component={Content}
        options={{headerStyle:{backgroundColor:'#FFC278'},
        headerTitleAlign:'center',
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        }}}
        />
        <Stack.Screen name ="Questions" component={Questions}
         options={{headerStyle:{backgroundColor:'#FFC278'},
         headerTitleAlign:'center',
         headerTintColor: '#fff', //Set Header text color
         headerTitleStyle: {
           fontWeight: 'bold', //Set Header text style
         }}}
        />
        <Stack.Screen name ="PoliticalScience" component={PoliticalScience}
        />
        <Stack.Screen name ="Quiz" component={Quiz}
         options={{headerStyle:{backgroundColor:'#FFC278'},
         headerTitleAlign:'center',
         headerTintColor: '#fff', //Set Header text color
         headerTitleStyle: {
           fontWeight: 'bold', //Set Header text style
         }}}
        />
        <Stack.Screen name ="Geography" component={Geography}
        />
        <Stack.Screen name ="Sanskrit" component={Sanskrit}
        />
        <Stack.Screen name ="PDF" component={PDF}
         options={{headerStyle:{backgroundColor:'#FFC278'},
         headerTitleAlign:'center',
         headerTintColor: '#fff', //Set Header text color
         headerTitleStyle: {
           fontWeight: 'bold', //Set Header text style
         }}}
        />
        <Stack.Screen name ="English" component={English}
        />
        <Stack.Screen name ="EnglishGrammar" component={EnglishGrammar}
        />
        <Stack.Screen name ="VideoHomeScreen" component={VideoHomeScreen}
         options={{headerStyle:{backgroundColor:'#FFC278'},
         headerTitleAlign:'center',
         headerTintColor: '#fff', //Set Header text color
         headerTitleStyle: {
           fontWeight: 'bold', //Set Header text style
         }}}
        />
        <Stack.Screen name ="VideoPlayer" component={VideoPlayer}
        />



      </Stack.Navigator>  
      
    </NavigationContainer>
  );
}

export default App;