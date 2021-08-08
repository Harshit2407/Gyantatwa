import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text,TouchableOpacity} from 'react-native';
import Sample from './Sample.mp4';
import Video from 'react-native-video';
import Sample2 from './sample2.mp4';
import data from './VideoFile.json';


/*const Videos = [
  { 
    title:"First Video",
    Videourl: require('./Sample.mp4'),
  },
  {
    title:"Second Video",
    Videourl: require('./sample2.mp4'),
  },
];*/


const VideoHomeScreen = (props) =>{

  const subject = props.route.params.subject
    const chapter = props.route.params.chapter

    var videos = data;

    if(subject == 'Maths' && chapter == '1')
    {
       videos = data.english;
    }
    else if(subject == 'Maths' && chapter == '2')
    {
      videos = data.maths;
    }
  
  return (
    <View>
            <FlatList
            data={videos}
              renderItem={
                ({item}) => 
                <View
                  style={{
                  flex: 1,
                  flexDirection:'column',
                  margin: 8,
                  
                  
                }}>
                    <Text>{item.name}</Text>
                    </View>}
                    keyExtractor={(item, index) => index.toString()}
                    >

          </FlatList>
        
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  item1: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
export default VideoHomeScreen;