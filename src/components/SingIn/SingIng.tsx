import { GoogleLogin, googleLogout, useGoogleOneTapLogin } from '@react-oauth/google';
import axios from 'axios';
import React from 'react'
import { apiUrls, backUrl } from '../../urls/urls';
import "./SingIn.scss"

const SingIn: React.FC = () => {
    interface IdecodGoogle {
        name: string
        email: string
        picture: string
    }
    const [decodInfo, setDecodInfo] = React.useState<IdecodGoogle | null>(null)
    const [show, setShow] = React.useState<boolean>(true)

    React.useEffect(() => {

    }, [])
    // useGoogleOneTapLogin({
    //     onSuccess: credentialResponse => {
    //         console.log(credentialResponse);
    //     },

    // })
    const registrationSuccess = (res: any) => {
        const url = `${backUrl}${apiUrls.login}`
        axios.post(url, { token: res.credential }, { headers: { token: res.credential } })
            .then(res => { setDecodInfo(res.data); console.log(res.data) })
    }

    return (
        <>
            {
                show ?
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