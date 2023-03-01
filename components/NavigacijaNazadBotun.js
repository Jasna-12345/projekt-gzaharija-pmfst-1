import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { HeaderBackButton } from '@react-navigation/elements'

//Prima props od headerLeft-a, a to nam je 
const NavigacijaNazadBotun = (props) => {
    const navigation=useNavigation();

    //Jesmo li na početku ekrana TabPretraziArtikle, ako jesmo vrati null, a ako nismo možemo ići natrag
    if(!props.canGoBack) return null;

    //Inače, koristimo botun za natrag, ne prikazuje se Back, na pritisak, vraćamo se na prethodni ekran 
    return (
        <HeaderBackButton 
        labelVisible={false}
        onPress={()=>navigation.goBack()}
        />
    )
}

export default NavigacijaNazadBotun

const styles = StyleSheet.create({})