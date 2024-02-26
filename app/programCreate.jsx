import { StatusBar } from "expo-status-bar";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image, Text, View } from "react-native";
import ImageSlider from "../components/ImageSlider"
import { TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function programCreate() {

  const router = useRouter();

  return (
    
    <SafeAreaView   className="flex-1 bg-white flex space-y-5" edges={["top"]} 
    ScreenOptions={{
      headerShown:false
    }}>
     <StatusBar style="dark"/>
        {/* Punch line + avatar */}
<View className="flex-1 flex justify-end my-8">
  
<TouchableOpacity
          onPress={()=> router.push('programCreate')}
          style={{ height: hp(5.5), width: wp(80) }}
            className=" bg-red-600 flex items-center justify-center mx-auto rounded-xl ">
            <Text style={{ fontSize: hp(1.7) }} className="text-white font-bold tracking-widest">
              Create Program
            </Text>
          </TouchableOpacity>

</View>

    

    </SafeAreaView>
  
  );
}

