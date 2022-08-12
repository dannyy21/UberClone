import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/stack';
import MapScreen from '../screens/MapScreen';
import { useSelector } from 'react-redux';

const data = [
    {
        id:"123",
        title:"Get a Ride",
        image:"https://links.papareact.com/3pn",
        screen:"MapScreen"
    },
    {
        id:"456",
        title:"Order Food",
        image:"https://links.papareact.com/28w",
        screen:"EatsScreen"
    }
]

const NavOptions = (
    // { navigation }
    ) => {
    const navigation = useNavigation();
    const origin = useSelector(selectOrigin);
  return (
    <FlatList 
        data={data} 
        horizontal 
        keyExtractor={(item) => item.id} 
        renderItem={({item}) =>(
        <TouchableOpacity
            onPress={() => navigation.navigate(item.screen)}
            style={tw`p-2 pl-6 pb-10 pt-4 bg-gray-200 m-2 w-40`}
            disabled={!origin}
        >
            <View style={tw`${!origin && "opacity-20"}`}>
                <Image style={{ width:120, height:120,resizeMode:'contain' }} source={{ uri:item.image }}>

                </Image>
                <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
                <Icon
                    type='antdesign'
                    color='white'
                    name='arrowright'
                    style={tw`p-2 bg-black rounded-full w-10 mt-4`}
                />
            </View>
        </TouchableOpacity>
    )}></FlatList>
  )
}

export default NavOptions