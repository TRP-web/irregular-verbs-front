import Document, { Head, Html, Main, NextScript } from "next/document";
import React from "react";
import { Provider } from "react-redux";
import { setupStore } from "../store/store";

export default class AppDocument extends Document {
    render() {
        return (
            <Html>
                <Head>

                </Head>
                <body>
                    {/* <Provider store={setupStore()}> */}
                        <Main />
                    {/* </Provider> */}
                    <NextScript />

                </body>
            </Html>
        )
    }
}