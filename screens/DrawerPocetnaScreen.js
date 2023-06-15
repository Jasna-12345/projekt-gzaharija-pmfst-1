import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { View, Text } from "react-native";
import NaruciArtikalScreen from "./NaruciArtikalScreen";
import OtvoriPoslovnicuScreen from "./OtvoriPoslovnicuScreen";
import PocetnaScreen from "./PocetnaScreen";
import TabPretraziArtikle from "./TabPretraziArtikle";
import { headerOpcije } from "../components/headerOpcije";

const Tab = createBottomTabNavigator();

const DrawerPocetnaScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "TabPocetna") {
            iconName = focused ? "ios-information-circle" : "ios-information-circle-outline";
          } else if (route.name === "TabNaruciArtikal") {
            iconName = focused ? "ios-list" : "ios-list-outline";
          } else if (route.name === "TabOtvoriPoslovnicu") {
            iconName = focused ? "ios-home" : "ios-home-outline";
          } else if (route.name === "TabPrikaziArtikle") {
            iconName = focused ? "ios-eye" : "ios-eye-outline";
          }

          return <Ionicons name={iconName} size={20} color={color} />;
        },
        tabBarActiveTintColor: "purple",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="TabPocetna" component={PocetnaScreen} options={{ ...headerOpcije, title: "Početna" }} />
      <Tab.Screen name="TabNaruciArtikal" component={NaruciArtikalScreen} options={{ ...headerOpcije, title: "Naruči Artikal" }} />
      <Tab.Screen name="TabOtvoriPoslovnicu" component={OtvoriPoslovnicuScreen} options={{ ...headerOpcije, title: "Otvori Poslovnicu" }} />
      <Tab.Screen name="TabPrikaziArtikle" component={TabPretraziArtikle} options={{ headerShown: false, title: "Prikaži artikle" }} />
    </Tab.Navigator>
  );
};

export default DrawerPocetnaScreen;
