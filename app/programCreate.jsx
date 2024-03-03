import { StatusBar } from "expo-status-bar";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image, Text, View } from "react-native";
import ImageSlider from "../components/ImageSlider"
import { TouchableOpacity, Touchable } from "react-native";
import { useRouter } from "expo-router";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TextInput } from "react-native";
export default function programCreate() {

  const router = useRouter();

  return (

    <SafeAreaView className="flex-1 bg-white flex space-y-5" edges={["top"]}
      ScreenOptions={{
        headerShown: false
      }}>
      <StatusBar style="dark" />
      {/* Punch line + avatar */}

      <View className=" flex-row  mx-4 space-x-24  ">
        <TouchableOpacity onPress={() => router.back('home')}>
          <Ionicons name="close-outline" size={30} color="black" />
        </TouchableOpacity>
        <Text style={{ fontSize: hp(2.5) }} className="font-bold  flex items-center justify-center">New Program</Text>
      </View>
      <View >
        <Text style={{ fontSize: hp(2.1), padding: 10 }} className="mx-4  my-2 font-bold">Name</Text>
        <TextInput
          style={{ height: hp(7), width: wp(90), fontSize: hp(2.1), padding: (12) }}
          className=" flex self-center bg-neutral-100 rounded-xl gap-1 "
          placeholder="Name your program"
        />
      </View>
      <View className="mx-4">
        <Text style={{ fontSize: hp(2.5) }} className=" my-3 font-bold "> Workout days</Text>
        <View className="flex-row gap-3 ">
          <TouchableOpacity
            style={{ height: hp(4), width: wp(15.7) }}
            className=" bg-neutral-100 flex items-center justify-center  rounded-xl ">
            <Text style={{ fontSize: hp(1.7) }} className="text-black font-bold tracking-widest">
              Sun
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ height: hp(4), width: wp(15.7) }}
            className=" bg-neutral-100 flex items-center justify-center  rounded-xl ">
            <Text style={{ fontSize: hp(1.7) }} className="text-black font-bold tracking-widest">
              Mon
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ height: hp(4), width: wp(15.7) }}
            className=" bg-neutral-100 flex items-center justify-center  rounded-xl ">
            <Text style={{ fontSize: hp(1.7) }} className="text-black font-bold tracking-widest">
              Tue
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ height: hp(4), width: wp(15.7) }}
            className=" bg-neutral-100 flex items-center justify-center  rounded-xl ">
            <Text style={{ fontSize: hp(1.7) }} className="text-black font-bold tracking-widest">
              Wed
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ height: hp(4), width: wp(15.7) }}
            className=" bg-neutral-100 flex items-center justify-center  rounded-xl my-2">
            <Text style={{ fontSize: hp(1.7) }} className="text-black font-bold tracking-widest">
              Thu
            </Text>
          </TouchableOpacity>
        </View>
        {/*ATENCAO AUI..........................................*/ }
        <View className="flex-row gap-3 ">

          <TouchableOpacity
            style={{ height: hp(4), width: wp(15.7) }}
            className=" bg-neutral-100 flex items-center justify-center  rounded-xl ">
            <Text style={{ fontSize: hp(1.7) }} className="text-black font-bold tracking-widest">
              Fri
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ height: hp(4), width: wp(15.7) }}
            className=" bg-neutral-100 flex items-center justify-center  rounded-xl ">
            <Text style={{ fontSize: hp(1.7) }} className="text-black font-bold tracking-widest">
              Sat
            </Text>
          </TouchableOpacity>
        </View>
        {/*...................................................*/ }
      </View>
    {/*TYPE OF PROGRAM SECTION*/ }
      <View className="mx-4">
      <Text style={{ fontSize: hp(2.5) }} className=" my-3 font-bold "> Type of program</Text>
      <View className=" flex-row gap-3">

      <TouchableOpacity
            style={{ height: hp(4), width: wp(33) }}
            className=" bg-neutral-100 flex items-center justify-center  rounded-xl ">
            <Text style={{ fontSize: hp(1.7) }} className="text-black font-bold tracking-widest">
              Muscle Building
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ height: hp(4), width: wp(33) }}
            className=" bg-neutral-100 flex items-center justify-center  rounded-xl ">
            <Text style={{ fontSize: hp(1.7) }} className="text-black font-bold tracking-widest">
              Power Building
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ height: hp(4), width: wp(18) }}
            className=" bg-neutral-100 flex items-center justify-center my-2 rounded-xl ">
            <Text style={{ fontSize: hp(1.7) }} className="text-black font-bold tracking-widest">
              Cardio
            </Text>
          </TouchableOpacity>
      </View>
      <View className="flex-row gap-3">
      <TouchableOpacity
            style={{ height: hp(4), width: wp(26) }}
            className=" bg-neutral-100 flex items-center justify-center  rounded-xl ">
            <Text style={{ fontSize: hp(1.7) }} className="text-black font-bold tracking-widest">
              Calisthenics
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ height: hp(4), width: wp(15) }}
            className=" bg-neutral-100 flex items-center justify-center  rounded-xl ">
            <Text style={{ fontSize: hp(1.7) }} className="text-black font-bold tracking-widest">
              Others
            </Text>
          </TouchableOpacity>

      </View>
      </View>

<View className="mx-4">

<TextInput
          style={{ height: hp(24), width: wp(90), fontSize: hp(2.1), padding: (12) }}
          className=" flex self-center bg-neutral-100 rounded-xl  "
          multiline={true}
          textAlignVertical={'top'}
        
          placeholder="Add notes..."
        />


</View>

      <View className="flex-1 flex justify-end my-8">
        <TouchableOpacity
          style={{ height: hp(5.5), width: wp(80) }}
          className=" bg-neutral-600 flex items-center justify-center mx-auto rounded-xl ">
          <Text style={{ fontSize: hp(1.7) }} className="text-white font-bold tracking-widest">
            Save
          </Text>
        </TouchableOpacity>
      </View>



    </SafeAreaView>

  );
}

