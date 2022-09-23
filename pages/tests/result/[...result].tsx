import { useRouter } from 'next/router'
import React from 'react'
import Result from '../../../components/pages/Tests/Result'
import { userSlice } from '../../../store/reducers/user'
import { wrapper } from '../../../store/store'
import { getCookies } from 'cookies-next';

export const getServerSideProps = wrapper.getServerSideProps((store) =>
    async (params) => {
        const { chengeLoad, addToken, addUser } = userSlice.actions

        const token = getCookies(params).token || null
        const userData = getCookies(params).user || null
        if (token !== null && userData !== null) {
            await store.dispatch(addToken(token))
            store.dispatch(chengeLoad(true))
            store.dispatch(addUser(JSON.parse(userData)))
        }
        return {
            props: {
            },
        };
    })
const result: React.FC = () => {


    return (
        <>
            <Result />
        </>
    )
}
export default result