import { wrapper } from "../store/store";
import { GoogleOAuthProvider } from "@react-oauth/google";
import React from "react";
import "../Index.scss"
import Header from "../components/Layout/Header";

const App = ({ Component, pageProps }) => {
    return (
        <GoogleOAuthProvider clientId='297750495683-im2hja8uvhhopfjp3rl0g0plkdplvoqf.apps.googleusercontent.com'>
            <Header>
                <Component {...pageProps} />
            </Header>
        </GoogleOAuthProvider>
    )
}

export default wrapper.withRedux(App);