import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import {GooglePlacesAutocomplete} from "react-native-google-places-autocomplete";
import {GOOGLE_MAPS_APIKEY} from '@env'
import { useDispatch } from 'react-redux';
import { UseNavigation } from "@react-navigation/native"
import { setDestination } from '../slices/navSlice';
import RideOptionsCard from './RideOptionsCard';
import NavFavourites from './NavFavourites';
import { TouchableOpacity } from 'react-native-web';
import { Icon } from 'react-native-elements';


const NavigateCard = () => {
    const dispatch = useDispatch();
    const navigation= UseNavigation();
  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <Text style={tw`text-center py-5 text-xl`}>Good Morning</Text>
      <View style={`border-t border-gray-200 flex-shrink`}>
            <GooglePlacesAutocomplete 
                placeholder='Where to?'
                styles={toInputBoxStyles}
                fetchDetails={true}
                returnKeyType={"Search"}
                minLength={2}
                onPress={(data, details = null)=>{
                    dispatch(
                        setDestination({
                            location: details.geometry.location,
                            description: data.description
                        })
                    );
                        navigation.navigate('RideOptionsCard')
                }}
                enablePoweredByContainer={false}
                nearbyPlacesAPI="GooglePlacesSearch"
                debounce={400}
                query={{
                    key: GOOGLE_MAPS_APIKEY,
                    language:'en'
                }}
            ></GooglePlacesAutocomplete>
            <NavFavourites/>
      </View>
      <View style={tw`flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100`}>
        <TouchableOpacity 
            onPress={() => navigation.navigate("RideOptionsCard")}
        style={tw`flex flex-row jutify-between bg-black w-24 px-4 py-3 rounded-full`}>
            <Icon name="car" type="font-awesome" color="white" size={16}></Icon>
            <Text style={tw`text-white text-center`}>Rides</Text>
        </TouchableOpacity>
        <TouchableOpacity style={tw`flex flex-row justify-between w-24 px-4 py-3 rounded-full`}>
            <Icon name="fast-food-outline" type="ionicon" color="black" size={16}></Icon>
            <Text style={tw`text-white text-center`}>Eats</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default NavigateCard

const toInputBoxStyles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        paddingTop:20,
        flex:0,

    }
})