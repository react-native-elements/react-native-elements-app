var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import React, { useState, useReducer, useEffect } from "react";
import { ThemeProvider } from "react-native-elements";
import { useColorScheme } from "react-native-appearance";
import RootNavigator from "./src/navigation/RootNavigator";
import AppLoading from "./src/components/AppLoading";
import { cacheImages, cacheFonts } from "./src/helpers/AssetsCaching";
import vectorFonts from "./src/helpers/vector-fonts";
import { ThemeReducer, initialState, ThemeReducerContext } from "./src/helpers/ThemeReducer";
export default () => {
    const [ThemeState, dispatch] = useReducer(ThemeReducer, initialState);
    const colorScheme = useColorScheme();
    useEffect(() => {
        if (colorScheme === "dark") {
            dispatch({ type: "set-theme", payload: "dark" });
        }
    }, [colorScheme]);
    const [isReady, setIsReady] = useState(false);
    const loadAssetsAsync = () => __awaiter(void 0, void 0, void 0, function* () {
        const imageAssets = cacheImages([
            require("./assets/images/bg_screen1.jpg"),
            require("./assets/images/bg_screen2.jpg"),
            require("./assets/images/bg_screen3.jpg"),
            require("./assets/images/bg_screen4.jpg"),
            require("./assets/images/user-cool.png"),
            require("./assets/images/user-hp.png"),
            require("./assets/images/user-student.png"),
            require("./assets/images/avatar1.jpg")
        ]);
        const fontAssets = cacheFonts([
            ...vectorFonts,
            { georgia: require("./assets/fonts/Georgia.ttf") },
            { regular: require("./assets/fonts/Montserrat-Regular.ttf") },
            { light: require("./assets/fonts/Montserrat-Light.ttf") },
            { bold: require("./assets/fonts/Montserrat-Bold.ttf") },
            { UbuntuLight: require("./assets/fonts/Ubuntu-Light.ttf") },
            { UbuntuBold: require("./assets/fonts/Ubuntu-Bold.ttf") },
            { UbuntuLightItalic: require("./assets/fonts/Ubuntu-Light-Italic.ttf") }
        ]);
        yield Promise.all([...imageAssets, ...fontAssets]);
    });
    if (!isReady) {
        return (<AppLoading startAsync={loadAssetsAsync} onFinish={() => {
                setIsReady(true);
            }} onError={console.warn}/>);
    }
    return (<ThemeReducerContext.Provider value={{ ThemeState, dispatch }}>
      <ThemeProvider useDark={ThemeState.themeMode === "dark" ? true : false}>
        <RootNavigator />
      </ThemeProvider>
    </ThemeReducerContext.Provider>);
};
