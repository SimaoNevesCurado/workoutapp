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
<View className="flex-row justify-between items-center mx-5 my-0">
  <View className="space-y-2">
    
  <Image
source={require("../assets/images/profile.png")}
style={{height: hp(15), width: hp(15)}}
className="rounded-full"
>
</Image>

<Text style={{fontSize: hp(3)}}className="font-bold tracking-wider text-gray-950 ">
  Welcome back, <Text className="text-red-600">Simão</Text>
</Text>
<Text
            style={{ fontSize: hp(1.8) }}
            className="font-bold tracking-wider text-neutral-400 my-3"
          >
            Its a great day to get moving!
          </Text>
  </View>

</View>
{/* Programs showcase */}
<View >
        <Text
          style={{ fontSize: hp(2.6) }}
          className="mx-5  my-3 font-bold tracking-wider text-gray-950 font-example"
        >
          Your Programs
        </Text>
    
     
      
       
      </View>
      {/* Todays workout */}
      <View>
        <Text style={{ fontSize: hp(2.6) }} className="mx-5 my-1 font-bold">
          Todays Workout
        </Text>
      </View>
      <View >
        <TouchableOpacity className="flex-row "  onPress={() => router.push("programCreate")}>
        <Image
          source={require("../assets/images/slide2.jpg")}
          style={{ height: hp(12), width: hp(12) }}
          className="rounded-xl mx-5"
        ></Image>
        <View>
          <Text style={{ fontSize: hp(1.9) }} className="font-bold my-1 text-gray-950">
            Program: Push/Pull/Legs
          </Text>
          <Text className="font-bold text-neutral-400">Pull Day </Text>
        </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  
  );
}

