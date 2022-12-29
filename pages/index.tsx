import React from "react"
import Index from "../components/pages/Main/Index"
import { userSlice } from "../store/reducers/user";
import { wrapper } from "../store/store";
import { getCookies } from 'cookies-next';

export const getServerSideProps = wrapper.getServerSideProps((store) =>
  async (params) => {
    const { chengeLoad, addToken, addUser } = userSlice.actions

    const token = getCookies(params).token || null
    const userData = getCookies(params).user || null
    if (token !== null && userData !== null) {
      store.dispatch(addToken(token))
      store.dispatch(chengeLoad(true))

      // const url = `${backUrl}${apiUrls.login}`
      // const res = await axios.post<IUser>(url, { token: token }, { headers: { token: token } })

      // const { _id, email, name, picture } = res.data
      // const userData: IUser = { _id, email, name, picture }
      store.dispatch(addUser(JSON.parse(userData)))
    }
    // console.log(token)

    // // we can set the initial state from here
    // // we are setting to false but you can run your custom logic here
    // // await store.dispatch(addUser("test data"))
    // console.log(store.getState());
    // console.log("test message");

    // await store.dispatch(chengeLoad(true))
    // // console.log(store, "testsfsd");

    // console.log("State on server", store.getState());

    return {
      props: {
      },
    };
  })

const index: React.FC = () => {
  // return <Index />
  return <div>test</div>
}

export default index