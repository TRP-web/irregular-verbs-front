import { GoogleLogin, googleLogout, useGoogleOneTapLogin } from '@react-oauth/google';
import axios from 'axios';
import React from 'react'
import { IUser } from '../../model/User';
import { useAppDispatch, useAppSelector } from '../../store/hooks/redux';
import { userSlice } from '../../store/reducers/user';
import { apiUrls, backUrl } from '../../urls/urls';
import "./SingIn.scss"

const SingIn: React.FC = () => {
    const { load, user, token } = useAppSelector(state => state.userReducer)
    const dispatch = useAppDispatch()
    const { addUser, chengeLoad, addToken } = userSlice.actions

    console.log(user, token);

    // useGoogleOneTapLogin({
    //     onSuccess: credentialResponse => {
    //         console.log(credentialResponse);
    //     },

    // })
    const registrationSuccess = (res: any) => {
        const token = res.credential
        const url = `${backUrl}${apiUrls.login}`
        axios.post<IUser>(url, { token: token }, { headers: { token: token } })
            .then(res => {
                const { _id, email, name, picture } = res.data
                const userData: IUser = { _id, email, name, picture }
                dispatch(addToken(token))
                dispatch(addUser(userData))
                dispatch(chengeLoad(true))
            })
    }

    return (
        <>
            {
                !load ?
                    <div className='registration'>
                        <div className="registration__inner">
                            <h2>Login/Registration</h2>
                            <p> <strong>Click</strong> on the button at the bottom for login or registration in application</p>
                            <div className="registration__google-inner">
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

                            </div>

                        </div>
                    </div>
                    : null
            }

        </>

    )
}
export default SingIn