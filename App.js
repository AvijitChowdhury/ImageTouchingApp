import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Alert, Button, Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';



export default function App() {
  // let x=1;
  // console.log('avijt');
  const handlePress =()=>{
    console.log('test pressed...');
  }
  const [touchCount,setTouchCount]=useState(0);
  const handleImagePressed=()=>{
    setTouchCount(touchCount+1);
  }
  const handleRefresh= ()=>{
    setTouchCount(0);
  }
  return (
    <View style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress} style={{paddingBottom:10,fontSize:20}}>Hello Avijit! Welcome to this App. </Text>
      <StatusBar style="auto" />
      <TouchableOpacity onPress={handleImagePressed}>
        <Image 
          accessibilityLabel='none'
          source={{
            width:200,
            height:300,
            uri:'https://i.picsum.photos/id/0/5616/3744.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ'}}
          ></Image>
          </TouchableOpacity>
          <Text style={styles.imageStyle}>Image touched {touchCount} times</Text>
          <Button
            onPress={()=>{handleRefresh();
            Alert.alert('Feedback','Are you enjoying this app,if yes press ok otherwise no.',[
              {text:'Yes'},
              {text:'No'}
            ])}}
            title="Click Me to Refresh"
            color="#f194ff"
            
          />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:Platform.OS=='android'?StatusBar.currentHeight:0 ,
  },
  imageStyle:{
    fontSize:20,
    paddingTop:20,
    paddingBottom:10,
  }
});
