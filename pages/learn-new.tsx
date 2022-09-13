import React from 'react'
import LearnNew from '../components/pages/LearnNew/LearnNew'
import { userSlice } from '../store/reducers/user'
import { wrapper } from '../store/store'
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

const LearnNewPage: React.FC = () => {
    return <LearnNew />
}
export default LearnNewPage