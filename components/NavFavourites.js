import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-web'
import { Icon } from 'react-native-elements/dist/icons/Icon'
import tw from 'tailwind-react-native-classnames'
const data = [
    {
        id:"123",
        title:"home",
        image:"Home",
        screen:"Code Street, London, UK"
    },
    {
        id:"456",
        title:"briefcase",
        image:"Work",
        screen:"London Eye, London, UK"
    }
]

const NavFavourites = () => {
  return (
   <FlatList
    data={data}
    keyExtractor={(item) => item.id}
    itemSeparatorComponent={()=> <View style={[tw`bg-gray-200`, {height:0.5}]}></View>}
    renderItem={({item:{location, destination, icon}})=>(
        <TouchableOpacity>
            <Icon
                style={tw`mr-4 rounded-full bg-gray-300 p-3`}
                name={icon}
                type="ionicon"
                color="white"
                size={18}
            />
            <View>
                <Text style={tw`font-semibold text-lg`}>{location}</Text>
                <Text style={tw`text-gray-500`}>{destination}</Text>
            </View>
        </TouchableOpacity>
    )}
   >

   </FlatList>
  )
}

export default NavFavourites

const styles = StyleSheet.create({})