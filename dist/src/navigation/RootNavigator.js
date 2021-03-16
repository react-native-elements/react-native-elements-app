import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { ThemeContext } from "react-native-elements";
import DrawerNavigator from "./DrawerNavigator";
import Avatars from "../views/avatars";
import Cards from "../views/cards";
import Tiles from "../views/tiles";
import Buttons from "../views/buttons";
import Lists from "../views/lists";
import Lists2 from "../views/lists2";
import Inputs from "../views/inputs";
import Login from "../views/login";
import Pricing from "../views/pricing";
import Ratings from "../views/ratings";
import Settings from "../views/settings";
import Sliders from "../views/sliders";
import SocialIcons from "../views/social_icons";
import Fonts from "../views/fonts";
import BottomSheet from "../views/bottomsheet";
const Drawer = createDrawerNavigator();
function RootNavigator() {
    const { theme } = useContext(ThemeContext);
    return (<NavigationContainer theme={{ colors: { background: theme.colors.white } }}>
      <Drawer.Navigator drawerContent={DrawerNavigator} drawerContentOptions={{
            activeTintColor: theme.colors.secondary,
            activeBackgroundColor: "transparent",
            inactiveTintColor: theme.colors.grey0,
            inactiveBackgroundColor: "transparent",
            backgroundColor: theme.colors.grey4,
            labelStyle: {
                fontSize: 15,
                marginLeft: 0
            }
        }}>
        <Drawer.Screen name="Avatars" component={Avatars}/>
        <Drawer.Screen name="Buttons" component={Buttons}/>
        <Drawer.Screen name="Inputs" component={Inputs}/>
        <Drawer.Screen name="Lists" component={Lists}/>
        <Drawer.Screen name="Lists2" component={Lists2}/>
        <Drawer.Screen name="Cards" component={Cards}/>
        <Drawer.Screen name="Tiles" component={Tiles}/>
        <Drawer.Screen name="Pricing" component={Pricing}/>
        <Drawer.Screen name="Ratings" component={Ratings}/>
        <Drawer.Screen name="Login" component={Login}/>
        <Drawer.Screen name="Settings" component={Settings}/>
        <Drawer.Screen name="Slider" component={Sliders}/>
        <Drawer.Screen name="Social Icons" component={SocialIcons}/>
        <Drawer.Screen name="Fonts" component={Fonts}/>
        <Drawer.Screen name="BottomSheet" component={BottomSheet}/>
      </Drawer.Navigator>
    </NavigationContainer>);
}
export default RootNavigator;
