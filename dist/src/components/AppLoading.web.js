var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { useEffect } from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10
    }
});
const emptyFunc = () => null;
const callbackHandler = (startAsync, successCb, errorCb) => {
    Promise.resolve(startAsync())
        .then(successCb)
        .catch(errorCb);
};
const AppLoading = props => {
    useEffect(() => {
        const { startAsync, onError, onFinish } = props;
        const successCb = onFinish || emptyFunc;
        const errorCb = onError || emptyFunc;
        console.log(props);
        return !startAsync
            ? successCb()
            : callbackHandler(startAsync, successCb, errorCb);
    }, [props]);
    const { startAsync, onError, onFinish, autoHideSplash } = props, others = __rest(props, ["startAsync", "onError", "onFinish", "autoHideSplash"]);
    return (<View style={styles.container}>
      <ActivityIndicator size={"large"} {...others}/>
    </View>);
};
export default AppLoading;
