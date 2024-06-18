import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";

import Camera from "../assets/icons/camera1-f-svgrepo-com.svg";
import * as ImagePicker from "expo-image-picker";
import * as FS from "expo-file-system";
import axios from 'axios'
import NourishScanLogo from "../assets/NourishScanLogo_Color.png";
import notUploaded from "../assets/Misc/notUploaded.png";
import foodScanWhite from "../assets/icons/foodScanWhite.png";
import cameraScan from "../assets/icons/cameraScan.png";
import warning from "../assets/icons/Warning.png";
import { useNavigation } from "@react-navigation/native";
import {ip} from "../App"

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
export default function ScannerScreen(props) {
  // image uploader
  const [selectedImage, setSelectedImage] = useState(notUploaded);

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
    if (status !== "granted") {
      alert("Permission to access camera roll is required!");
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1
    });

    


    if (!result.cancelled) {
   
      uploadImage(result)
      setTimeout(() => {
        props.navigation.navigate("Entry");
      }, 800);

    }
  };

  const [foodRecognized, setFoodRecognized] = useState(null);

  const uploadImage = async (file) => {
    const url = ip.concat("predict/upload");
  
    const fileToUpload = file.assets[0];

    const base64Response = await fetch(fileToUpload.uri);
    const blob = await base64Response.blob();
    const reader = new FileReader();
    
    reader.readAsDataURL(blob);
    reader.onloadend = async () => {
        const base64data = reader.result;
        
        try {
            const response = await axios.post(url, { data: base64data }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            
        } catch (error) {

            setFoodRecognized(false)
          
        }
    };
};
  
    
    
  return (
    <View style={styles.container}>
      <Image source={NourishScanLogo} style={styles.logo} />
      <Text style={styles.textHeader}>Food Scanner</Text>
      <View style={{ width: "75%", marginTop: 15 }}>
        {foodRecognized === null && (
          <Text style={styles.caption}>
            Upload an image from your gallery or take an image with your camera
            to get started.
          </Text>
        )}

        {foodRecognized === false && (
          <View style={styles.toast}>
            <Image style={styles.toastImage} source={warning} />
            <Text style={styles.toastText}>
              <Text style={{ fontWeight: "bold" }}>Cannot recognize food!</Text>
              {"\n"}
              Please try again.
            </Text>
          </View>
        )}
      </View>
      <View style={{ marginTop: 20, alignItems: "center" }}>
        {/* upload image touchable */}
        <TouchableOpacity onPress={pickImage}>
          <Image source={selectedImage} style={styles.upload}></Image>
          {selectedImage !== notUploaded && (
            <Image source={foodScanWhite} style={styles.uploadOverlay} />
          )}
        </TouchableOpacity>

        {/* camera button */}
        <TouchableOpacity onPress={pickImage}>
          <View style={styles.cameraButton}>
            <Image source={cameraScan}></Image>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    flex: 2,
  },

  logo: {
    marginTop: 100,
    width: "11%",
    height: "5.8%",
  },

  cameraButton: {
    marginTop: 20,
    paddingHorizontal: "22%",
    height: "31.5%",

    backgroundColor: "#DAAF53",
    borderRadius: 25,

    elevation: 4,

    shadowColor: "#695323",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },

  upload: {
    width: 378,
    height: 341,

    borderRadius: 20,

    elevation: 4,

    shadowColor: "#695323",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },

  uploadOverlay: {
    position: "absolute",
    alignSelf: "center",
    marginTop: 118,
    opacity: 0.3,
  },

  textHeader: {
    fontWeight: "bold",
    fontSize: 40,
    paddingTop: 13,
  },

  caption: {
    textAlign: "center",
    color: "#544C4C",
    fontSize: 16,
  },

  toast: {
    marginTop: -10,
    padding: 10,

    borderRadius: 12,

    flexDirection: "row",
    backgroundColor: "#FFDFDA",

    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",

    elevation: 4,

    shadowColor: "#771F1E",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },

  toastText: {
    marginHorizontal: 5,
    color: "#D43E3C",
    fontSize: 18,
  },
});
