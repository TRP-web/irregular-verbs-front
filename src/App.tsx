import React from 'react';
import './App.scss';
import axios from 'axios';
import { ITranslateData, ITranslations } from './model/translator';
import { Routes, Route, useLocation } from "react-router-dom";
import Header from './components/Layout/Header';
import Main from './pages/Main/Main';
import SingIn from './components/SingIn/SingIng';
const App: React.FC = () => {
  // const [dataTranslate, setDataTranslate] = React.useState<ITranslations>({ text: "", to: "en" })
  // const [data, setData] = React.useState<string>("")

  // React.useEffect(() => {
  //   setDataTranslate({ text: "...", to: "" })
  //   const timeout = setTimeout(() => {
  //     if (data !== "") {
  //       axios.post<ITranslateData[]>(
  //         'https://microsoft-translator-text.p.rapidapi.com/translate',
  //         [{ Text: data }],
  //         {
  //           headers: {
  //             'content-type': 'application/json',
  //             'X-RapidAPI-Key': '846c6cf217msh3099166c655ad2ep164a92jsnf8c34006d19c',
  //             'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com'
  //           },
  //           params: {
  //             'to': 'ru',
  //             'api-version': '3.0',
  //             profanityAction: 'NoAction',
  //             textType: 'plain'
  //           }
  //         }
  //       ).then(res => setDataTranslate(res.data[0].translations[0]))
  //     }
  //   }, 1500)
  //   return () => clearTimeout(timeout)
  // }, [data])


  // const options = {
  //   method: 'POST',
  //   url: 'https://microsoft-translator-text.p.rapidapi.com/translate',
  //   params: {
  //     'to': 'de',
  //     'api-version': '3.0',
  //     profanityAction: 'NoAction',
  //     textType: 'plain'
  //   },
  //   headers: {
  //     'content-type': 'application/json',
  //     'X-RapidAPI-Key': '846c6cf217msh3099166c655ad2ep164a92jsnf8c34006d19c',
  //     'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com'
  //   },
  //   data: '[{"Text":"I would really like to drive your car around the block a few times."}]'
  // };

  // axios.request(options).then(function (response) {
  //   console.log(response.data);
  // }).catch(function (error) {
  //   console.error(error);
  // });

  return (
    <div className="App">
      <SingIn />
      <Header />
      <Main />



      {/* <input
        type="text"
        value={data}
        onChange={e => setData(e.target.value)}
      />
      <strong className="translaite">
        {dataTranslate.text}
      </strong> */}
    </div>
  );
}

export default App;
