import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import React from 'react'
import { IUser } from '../../model/User';
import { useAppDispatch, useAppSelector } from '../../store/hooks/redux';
import { userSlice } from '../../store/reducers/user';
import { apiUrls, backUrl } from '../../urls/urls';
import { setCookie } from 'cookies-next';
const SingIn: React.FC = () => {
    const { user, token, load } = useAppSelector(state => state.userReducer)
    const dispatch = useAppDispatch()
    const { addUser, chengeLoad, addToken } = userSlice.actions
    setCookie("test", "test cookie", { maxAge: 1000 * 60 * 60 * 24 })

    const registrationSuccess = (res: any) => {
        const token = res.credential
        const url = `${backUrl}${apiUrls.login}`
        axios.post<IUser>(url, { token: token }, { headers: { token: token } })
            .then(res => {
                const { _id, email, name, picture } = res.data
                const userData: IUser = { _id, email, name, picture }
                setCookie("token", token, { maxAge: 1000 * 60 * 60 * 24 })
                setCookie("user", userData, { maxAge: 1000 * 60 * 60 * 24 })
                console.log("set cookie")
                dispatch(addToken(token))
                dispatch(addUser(userData))
                dispatch(chengeLoad(true))
            })
    }


    return (
        <>
            {
                !load ?
                    <div className={"registration"}>
                        <div className="registration__inner">
                            <h2>Login/Registration</h2>
                            <p> <strong>Click</strong> on the button at the bottom for login or registration in application</p>
                            {/* <div className="registration__google-inner">
                                <GoogleLogin
                                    onSuccess={registrationSuccess}
                                    onError={() => {
                                        console.log('Login Failed');
                                    }}
                                    size={'large'}
                                    theme={'filled_blue'}
                                    type={'standard'}
                                    width={"540px"}
                                    useOneTap
                                />

                            </div> */}

                        </div>
                    </div>
                    : null
            }

        </>

    )
}



export default SingIn