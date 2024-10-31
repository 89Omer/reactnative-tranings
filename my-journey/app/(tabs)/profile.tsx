import { View, StyleSheet, Text } from 'react-native';
import ImageViewer from '@/components/ImageViewer';
import { Image } from 'expo-image'; 
import Button from '@/components/ImageButton';
import { SafeAreaView } from 'react-native-safe-area-context';
import InputField from '@/components/InputField';
import { useNavigation } from '@react-navigation/native';


/* @tutinfo Import the image from the "assets/images/" directory. Since this picture is a static resource, you have to reference it using <CODE>require</CODE>. */
const PlaceholderImage = require('../../assets/images/background-image.jpeg');


export default function Profile() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1 }}>
    <View style={styles.container}>
      <Text style={[styles.title, { color: '#fff', fontSize: 24 }]}>My Profile</Text>

      <View style={styles.imageContainer}>
        
        <ImageViewer imgSource={PlaceholderImage} ></ImageViewer>
      </View>
      <View style={styles.footerContainer}>
        <Button theme1="primary" label="Choose a photo" />
        <Button theme2="secondary" label="Use this photo" />
     
      </View>
    </View>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    /* @tutinfo Modify container styles to remove <CODE>justifyContent</CODE> property. */
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
  },
   /* @tutinfo Add styles for the image. */
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 16,
    alignContent: 'flex-end'
    // other title styles
  },
});
