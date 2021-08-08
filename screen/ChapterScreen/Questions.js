import React, { useState } from 'react'
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  Dimensions
} from 'react-native';

import FlipCard from 'react-native-flip-card'
import { COLORS, SIZES } from './constants';
import RNFetchBlob from 'react-native-fetch-blob'
import data from './data/QuestionData.json'

const Questions = () => {

 /*var  path1 ="file:///storage/emulated/0/Download/educontent/en/sample.txt"
  var filedata=""
  RNFetchBlob.fs.readFile(path1, 'utf8')
      .then((data) => {
       filedata = data
       console.log(filedata);
   
      })
      const txtToJSON = require("txt-file-to-json");
      const dataInJSON = txtToJSON({ data: filedata });
      console.log(dataInJSON);
 // const subject = props.route.params.subject
  //const chapter = props.route.params.chapter*/
  var allQuestions = data.english;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)

  /*if(subject == 'Geography' && chapter == '1')
    {
        allQuestions = data.geo;
    }
    if(subject == 'Maths' && chapter == '1')
    {
        allQuestions = data.geo;
    }*/

  const Forward = () => 
  {
    if(currentQuestionIndex < allQuestions.length - 1)
    {
    setCurrentQuestionIndex(currentQuestionIndex+1);
    console.log(currentQuestionIndex);
    }
  }
  const Backward = () => 
  {
    if(currentQuestionIndex < allQuestions.length && currentQuestionIndex >= 1 )
    {
    setCurrentQuestionIndex(currentQuestionIndex-1);
    console.log(currentQuestionIndex);
    }
  }

  const renderNextButton = () => {
        return (
            <TouchableOpacity
            onPress={()=> Forward()}
            style={{
                marginBottom: -70, width: Dimensions.get('window').width - 270, backgroundColor: COLORS.accent, padding: 20, borderRadius: 5, marginLeft: 250
            }}>
                <Text style={{fontSize: 20, color: COLORS.white, textAlign: 'center'}}>Next</Text>
            </TouchableOpacity>
        )
}

const renderPrevButton = () => {
  return (
      <TouchableOpacity
      onPress={()=> Backward()}
      style={{
          marginBottom: 70, width: Dimensions.get('window').width - 270, backgroundColor: COLORS.accent, padding: 20, borderRadius: 5, marginLeft: 50
      }}>
          <Text style={{fontSize: 20, color: COLORS.white, textAlign: 'center'}}>Previous</Text>
      </TouchableOpacity>
  )
}

  return (
  <View style={styles.container}>
    <View style={{backgroundColor: COLORS.background}}>
    <FlipCard 
    style={styles.cardContainer} 
  friction={6}
  perspective={1000}
  flipHorizontal={true}
  flipVertical={false}
  flip={false}
  clickable={true}
  onFlipEnd={(isFlipEnd)=>{console.log('isFlipEnd', isFlipEnd)}}
>
  
  {/* Face Side */}
  <View style={[styles.card, styles.card1 , ]}>
    <Text style={styles.label}>{allQuestions[currentQuestionIndex].question}</Text>
  </View>
  {/* Back Side */}
  <View style={[styles.card, styles.card2]}>
    <Text style={styles.label}>{allQuestions[currentQuestionIndex].options}</Text>
  </View>
</FlipCard>
{renderNextButton()}
{renderPrevButton()}
{/* Background Image */}
<Image
    source={require('./assets/images/DottedBG.png')}
    style={{
        width: SIZES.width,
        height: 130,
        zIndex: -1,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        opacity: 0.5
    }}
    resizeMode={'contain'}
    />
    </View>
</View>
   
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  cardContainer: {
    width: 420,
    height: 470,
  },
  card: {
    marginTop: 60,
    marginLeft: 50,
    width: 320,
    height: 470,
    backgroundColor: '#FE474C',
    borderRadius: 5,
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.5,
  },
  card1: {
    backgroundColor: '#1E90FF'+40,
  },
  card2: {
    backgroundColor: '#1E90FF'+40,
  },
  label: {
   // lineHeight: 470,
   marginTop: 100,
    textAlign: 'center',
    fontSize: 25,
    fontFamily: 'System',
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});


export default Questions;