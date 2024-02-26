
import { StatusBar } from "expo-status-bar";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image, Text, View } from "react-native";
import ImageSlider from "../../components/ImageSlider"
import { TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function programs() {

  const router = useRouter();

  return (

    <SafeAreaView className="flex-1 bg-white flex space-y-5" edges={["top"]}>
      <StatusBar style="dark" />
      {/* Punch line + avatar */}
      <View className="flex-row justify-between mx-5 items-center  ">
        <View className="space-y-2">
          <Text style={{ fontSize: hp(3) }} className="font-bold tracking-wider text-gray-950 ">
            All your programs
          </Text>
        </View>
      </View>
      {/* Programs showcase */}

      <TouchableOpacity className="flex-row "  onPress={() => router.push("programCreate")}>
        <Image
          source={require("../../assets/images/slide1.jpg")}
          style={{ height: hp(11), width: hp(11) }}
          className="rounded-xl mx-5"
        ></Image>
        <View  className=" my-3">
          <Text style={{ fontSize: hp(1.9) }} className="font-bold my-1 text-gray-950">
            Upper/Lower
          </Text>
          <Text className="font-bold text-neutral-400">4 Days • 6 Weeks</Text>
         
        </View>
        </TouchableOpacity>

        <TouchableOpacity className="flex-row "  onPress={() => router.push("programCreate")}>
        <Image
          source={require("../../assets/images/slide2.jpg")}
          style={{ height: hp(11), width: hp(11) }}
          className="rounded-xl mx-5"
        ></Image>
        <View  className=" my-3">
          <Text style={{ fontSize: hp(1.9) }} className="font-bold my-1 text-gray-950">
            Push/Pull/Legs
          </Text>
          <Text className="font-bold text-neutral-400">6 Days • 4 Weeks</Text>
         
        </View>
        </TouchableOpacity>

        <TouchableOpacity className="flex-row "  onPress={() => router.push("programCreate")}>
        <Image
          source={require("../../assets/images/slide3.jpg")}
          style={{ height: hp(11), width: hp(11) }}
          className="rounded-xl mx-5"
        ></Image>
        <View  className=" my-3">
          <Text style={{ fontSize: hp(1.9) }} className="font-bold my-1 text-gray-950">
            FullBody
          </Text>
          <Text className="font-bold text-neutral-400">3 Days • 3 Weeks</Text>
         
        </View>
        </TouchableOpacity>
        <View className="flex-1 flex justify-end my-3">

        <TouchableOpacity
          onPress={()=> router.push('programCreate')}
          style={{ height: hp(5.5), width: wp(80) }}
            className=" bg-gray-300 flex items-center justify-center mx-auto rounded-xl ">
            <Text style={{ fontSize: hp(1.7) }} className="text-white font-bold tracking-widest">
              Create Program
            </Text>
          </TouchableOpacity>

        </View>

     
    </SafeAreaView>

  );
}

