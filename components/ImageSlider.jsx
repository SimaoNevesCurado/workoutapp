import { View, Text, Touchable  } from 'react-native'
import React from 'react'

import Carousel,{ParallaxImage}  from 'react-native-snap-carousel';
import { sliderImages } from '../constants/sliderImages'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { TouchableOpacity } from 'react-native';

export default function ImageSlider() {
  return (
    
    <Carousel
    data={sliderImages}
    loop={true}
    renderItem ={ItemCard}
    hasParallaxImages={true}
    sliderWidth={wp(100)}
    firstItem={0}
 
    itemWidth={wp(100)-70}
    slideStyle={ {display:'flex',alignItems:'center'}}
    />
  )
}
const ItemCard =({item,index},parallaxProps)=>{
  return(

    <View style={{width:wp(100)-70,height: hp(25)}}>

 
      <ParallaxImage
      source={item}
      containerStyle={{borderRadius:30,flex:1}}
      style={{resizeMode:'contain'}}
      parallaxFactor={1}
      {...parallaxProps}/>
   
    </View>
  
  )

}