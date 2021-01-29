import React from 'react';
import { Text, View,StyleSheet, TouchableOpacity,Image } from 'react-native';
import * as Permissions from 'expo-permissions';
export default class scanScreen extends React.Component{
    constructor(){
        super();
        this.state={
            cameraPermission:null,
            scanned:false,
            scannedData:'',
            buttonState:'normal'
        }
    }
    getCameraPermission=async()=>{
        const{status}=await Permissions.askAsync(Permissions.CAMERA)
        this.setState({
            cameraPermission:status==="granted",
            ButtonState:'clicked',
            scanned:false
        })
    }
    handleBarCodeScanner(){
        const {ButtonState}=this.state
        if(ButtonState==="clicked"){
            this.setState({
                scanned:true,
                buttonState:"clicked"
            })
            }else if(ButtonState==="normal"){
                this.setState({
                    scanned:true,
                    buttonState:"normal"
                })  
            }
    }
    render(){
        return(
            <View style={styles.container}>
                <View><Image
                source={require("../assets/scanner.jpg")}
                style={{width:100,height:100,margin:20}}
                />
                </View>
                <TouchableOpacity
                onPress={this.getCameraPermission}
                style={styles.scanButton}
                title="Bar Code Scaner">
                    <Text style={styles.buttonText}>Scan QR Code</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    },
    text:{
      fontSize:40,
      color:'blue',
      fontStyle:'italic'
    },scanButton:{
        backgroundColor:"red",
        width:100,
        borderWidth:1.5,
        borderLeftWidth:0
    },
    buttonText:{
        flex:1,
        fontSize:20,
        textAlign:'center',
        margin:10,
    }
})