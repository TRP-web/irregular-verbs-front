import React from "react"
import Index from "../components/pages/Main/index"
import { userSlice } from "../store/reducers/user";
import { wrapper } from "../store/store";


export const getServerSideProps = wrapper.getServerSideProps((store) =>
  async ({ params }) => {
    // const {chengeLoad} = userSlice.actions
    // // we can set the initial state from here
    // // we are setting to false but you can run your custom logic here
    // // await store.dispatch(addToken("test token"))
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
    return <Index />
}

export default index