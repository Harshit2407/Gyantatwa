import React, { Component } from 'react';
import { View, Image, FlatList, PermissionsAndroid, Platform,TouchableOpacity } from 'react-native';
import CameraRoll from "@react-native-community/cameraroll";

export default class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
        data:''
    };
  }

  async componentDidMount(){
    if (Platform.OS === 'android') {
        const result = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
          {
            title: 'Permission Explanation',
            message: 'ReactNativeForYou would like to access your photos!',
          },
        );
        if (result !== 'granted') {
          console.log('Access to pictures was denied');
          return;
        }
      }

      CameraRoll.getPhotos({
        first: 50,
        assetType: 'Photos',
      })
      .then(res => {
        this.setState({ data: res.edges });
      })
      .catch((error) => {
         console.log(error);
      });
    
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'black'}}>
        <FlatList
        data={this.state.data}
        numColumns={2}
        renderItem={({ item }) => <Image
           style={{
            width: 180, height: 200 ,justifyContent:'space-between',margin:'2%'
             
            // resizeMode='contain'
           }}
           source={{ uri: item.node.image.uri }}
         />}
         keyExtractor={(item, index) => index.toString()}
      />
      </View>
    );
  }
}
