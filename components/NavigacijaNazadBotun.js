import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { HeaderBackButton } from '@react-navigation/elements'

//Prima props od headerLeft-a, od komponente headerOpcije
const NavigacijaNazadBotun = (props) => {
    //navigation objekt ovdje nije dostupan putem props, zato mu pristupamo preko HOOK useNavigation
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