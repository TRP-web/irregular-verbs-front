import { Provider } from "react-redux";
import { setupStore, wrapper } from "../store/store";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import React from "react";
import "../index.scss"
import Header from "../components/Layout/Header";

const App = ({ Component, pageProps }) => {
    return (
        // <Provider store={setupStore()}>
        <GoogleOAuthProvider clientId='297750495683-im2hja8uvhhopfjp3rl0g0plkdplvoqf.apps.googleusercontent.com'>
            <Header>
                <Component {...pageProps} />
            </Header>
        </GoogleOAuthProvider>
        /* </Provider> */
    )
}

export default wrapper.withRedux(App);