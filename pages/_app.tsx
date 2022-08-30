import { Provider } from "react-redux";
import { setupStore } from "../store/store";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import React from "react";
import "../index.scss"

const App = ({ Component, pageProps }) => {
    return (
        <Provider store={setupStore()}>
            <GoogleOAuthProvider clientId='297750495683-im2hja8uvhhopfjp3rl0g0plkdplvoqf.apps.googleusercontent.com'>
                <Component {...pageProps} />
            </GoogleOAuthProvider>
        </Provider>
    )
}

export default App