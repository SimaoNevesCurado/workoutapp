import { StatusBar } from "expo-status-bar";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image, ScrollView, Text, View } from "react-native";
import ImageSlider from "../components/ImageSlider"
import { TouchableOpacity, Touchable } from "react-native";
import { useRouter } from "expo-router";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TextInput } from "react-native";
import EvilIcons from 'react-native-vector-icons/EvilIcons';
export default function programPage() {

  const router = useRouter();

  return (

    <SafeAreaView className="flex-1 bg-white flex space-y-5" edges={["top"]}
      ScreenOptions={{
        headerShown: false
      }}>
      <StatusBar style="dark" />
      {/* Punch line + avatar */}

      <View className=" flex-row  mx-3 space-x-24  ">
        <TouchableOpacity onPress={() => router.back('home')}>
          <Ionicons name="close-outline" size={30} color="black" />
        </TouchableOpacity>
        <Text style={{ fontSize: hp(2.5) }} className="font-bold  flex items-center justify-center">Upper / Lower</Text>
        <TouchableOpacity onPress={() => router.push('programCreate')}>
        <EvilIcons name="pencil" size={30} color="black" />
        </TouchableOpacity>
      </View>

      <ScrollView>
      <View className="mx-4">
 

      <View className="  flex-row gap-3">
        <View
          style={{ height: hp(10), width: wp(43.2) }}
          className=" border-2 border-neutral-100 flex items-center justify-center  rounded-xl ">
          <Text style={{ fontSize: hp(2.7) }} className="text-gray-900 font-bold tracking-widest">
            5
          </Text>
          <Text style={{ fontSize: hp(1.7) }} className="text-gray-300 font-bold tracking-widest">
            Days/Workouts
          </Text>
        </View>
        <View
          style={{ height: hp(10), width: wp(43.2) }}
          className=" border-2 border-neutral-100 flex items-center justify-center rounded-xl  ">
          <Text style={{ fontSize: hp(2.7) }} className="text-gray-900 font-bold tracking-widest">
            2
          </Text>
          <Text style={{ fontSize: hp(1.7) }} className="text-gray-300 font-bold tracking-widest">
            Days/Rest
          </Text>
        </View>
      </View>
      <View>

      </View>
      <View
          style={{ height: hp(10), width: wp(90),padding: (10) }}
          className=" border-2 border-neutral-100 flex items-center justify-center rounded-xl my-2 ">
          
          <Text style={{ fontSize: hp(2.7) }} className="text-gray-900 font-bold tracking-widest">
            Muscle Building
          </Text>
          <Text style={{ fontSize: hp(1.7) }} className="text-gray-300 font-bold tracking-widest">
            Main Focus
          </Text>
        </View>

      </View>
      
    <View className="mx-5">
    <Text style={{ fontSize: hp(2.5) }} className="font-bold my-1"> Week's Schedule</Text>

    
    <TouchableOpacity   onPress={() => router.push("programPage")}>
        
        <View className="flex-row justify-between my-2">
          <View className="flex-col"> 
          <Text style={{ fontSize: hp(1.9) }} className="font-bold my-1 text-gray-950">
            Monday
          </Text>
          <Text className="font-bold text-neutral-400">Upper Body • 120 min</Text>     
          </View>
       
          <Ionicons className="align-middle" name="arrow-forward-circle-outline" size={30} color="black"></Ionicons>
          
        </View>
        </TouchableOpacity>

        <TouchableOpacity   onPress={() => router.push("programPage")}>
        
        <View className="flex-row justify-between my-2">
          <View className="flex-col"> 
          <Text style={{ fontSize: hp(1.9) }} className="font-bold my-1 text-gray-950">
            Tuesday
          </Text>
          <Text className="font-bold text-neutral-400">Lower Body • 120 min</Text>     
          </View>
       
          <Ionicons className="align-middle" name="arrow-forward-circle-outline" size={30} color="black"></Ionicons>
          
        </View>
        </TouchableOpacity>

       
        <TouchableOpacity   onPress={() => router.push("programPage")}>
        
        <View className="flex-row justify-between my-2">
          <View className="flex-col"> 
          <Text style={{ fontSize: hp(1.9) }} className="font-bold my-1 text-gray-950">
           Thursday
          </Text>
          <Text className="font-bold text-neutral-400">Upper Body • 120 min</Text>     
          </View>
       
          <Ionicons className="align-middle" name="arrow-forward-circle-outline" size={30} color="black"></Ionicons>
          
        </View>
        </TouchableOpacity>

        <TouchableOpacity   onPress={() => router.push("programPage")}>
        
        <View className="flex-row justify-between my-2">
          <View className="flex-col"> 
          <Text style={{ fontSize: hp(1.9) }} className="font-bold my-1 text-gray-950">
            Friday
          </Text>
          <Text className="font-bold text-neutral-400">Lower Body • 120 min</Text>     
          </View>
       
          <Ionicons className="align-middle" name="arrow-forward-circle-outline" size={30} color="black"></Ionicons>
          
        </View>
        </TouchableOpacity>
        <TouchableOpacity   onPress={() => router.push("programPage")}>
        
        <View className="flex-row justify-between my-2">
          <View className="flex-col"> 
          <Text style={{ fontSize: hp(1.9) }} className="font-bold my-1 text-gray-950">
            Saturday
          </Text>
          <Text className="font-bold text-neutral-400">Arms/Weekpoints • 120 min</Text>     
          </View>
       
          <Ionicons className="align-middle" name="arrow-forward-circle-outline" size={30} color="black"></Ionicons>
          
        </View>
        </TouchableOpacity>
        <TouchableOpacity   onPress={() => router.push("programPage")}>
        
        <View className="flex-row justify-between my-2">
          <View className="flex-col"> 
          <Text style={{ fontSize: hp(1.9) }} className="font-bold my-1 text-gray-950">
            Saturday
          </Text>
          <Text className="font-bold text-neutral-400">Arms/Weekpoints • 120 min</Text>     
          </View>
       
          <Ionicons className="align-middle" name="arrow-forward-circle-outline" size={30} color="black"></Ionicons>
          
        </View>
        </TouchableOpacity>
        <TouchableOpacity   onPress={() => router.push("programPage")}>
        
        <View className="flex-row justify-between my-2">
          <View className="flex-col"> 
          <Text style={{ fontSize: hp(1.9) }} className="font-bold my-1 text-gray-950">
            Saturday
          </Text>
          <Text className="font-bold text-neutral-400">Arms/Weekpoints • 120 min</Text>     
          </View>
       
          <Ionicons className="align-middle" name="arrow-forward-circle-outline" size={30} color="black"></Ionicons>
          
        </View>
        </TouchableOpacity>
        <TouchableOpacity   onPress={() => router.push("programPage")}>
        
        <View className="flex-row justify-between my-2">
          <View className="flex-col"> 
          <Text style={{ fontSize: hp(1.9) }} className="font-bold my-1 text-gray-950">
            Saturday
          </Text>
          <Text className="font-bold text-neutral-400">Arms/Weekpoints • 120 min</Text>     
          </View>
       
          <Ionicons className="align-middle" name="arrow-forward-circle-outline" size={30} color="black"></Ionicons>
          
        </View>
        </TouchableOpacity>
        <TouchableOpacity   onPress={() => router.push("programPage")}>
        
        <View className="flex-row justify-between my-2">
          <View className="flex-col"> 
          <Text style={{ fontSize: hp(1.9) }} className="font-bold my-1 text-gray-950">
            Saturday
          </Text>
          <Text className="font-bold text-neutral-400">Arms/Weekpoints • 120 min</Text>     
          </View>
       
          <Ionicons className="align-middle" name="arrow-forward-circle-outline" size={30} color="black"></Ionicons>
          
        </View>
        </TouchableOpacity>

    </View>
     




    </ScrollView>
    </SafeAreaView>

  );
}