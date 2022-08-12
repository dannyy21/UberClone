import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import Map from '../components/Map'
import MapView from 'react-native-maps';
import {createStackNavigator} from '@react-navigation/stack'
import NavigateCard from '../components/NavigateCard';
import RideOptionsCard from '../components/RideOptionsCard';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements/';
import {useNavigation} from '@react-navigation/native';
const MapScreen = () => {
    const Stack = createNavigator();
  return (
    <View>
       <TouchableOpacity 
       onPress={()=> navigation.navigate("HomeScreen")}
       style={tw`absolute top-16 left-8 bg-gray-100 z-50 p-3 rounded-full shadow-lg`}>
          <Icon name="menu"></Icon>
       </TouchableOpacity>
      <View style={tw`h-1/2`}>
        <Map/>
      </View>
      <View style={tw`h-1/2`}>
        <Stack.Navigator>
            <Stack.Screen
                name="NavigateCard"
                components={NavigateCard}
                options={{ 
                    headerShown:false
                 }}
            ></Stack.Screen>
            <Stack.Screen
                name="RideOptionsCard"
                components={RideOptionsCard}
                options={{ 
                    headerShown:false
                 }}
            ></Stack.Screen>
        </Stack.Navigator>
      </View>
      <View></View>
    </View>
  )
}

export default MapScreen

const styles = StyleSheet.create({})