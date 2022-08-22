import { GoogleLogin } from '@react-oauth/google';
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

    const registrationSuccess = (res: any) => {
        const url = `${backUrl}${apiUrls.login}`
        axios.post(url, { token: res.credential }, { headers: { token: res.credential } })
            .then(res => { setDecodInfo(res.data); console.log(res.data) })
    }

    const returnMassage = (decodInfo: IdecodGoogle | null): string => {
        if (decodInfo) {
            return "Continue"
        } else return "Continue without registration"
    }

    return (
        <>
            {
                show ?
                    <div className='registration'>
                        <div className="registration__inner">
                            <GoogleLogin
                                onSuccess={registrationSuccess}
                                onError={() => {
                                    console.log('Login Failed');
                                }}
                            />
                            {
                                decodInfo !== null ?
                                    <div>
                                        <span>Hellow {decodInfo.name} !</span>
                                        <div>Welcome to home XD</div>
                                    </div>

                                    : null
                            }
                            <button
                                onClick={() => setShow(!show)}
                            >{returnMassage(decodInfo)}</button>
                        </div>
                    </div>
                    : null
            }

        </>

    )
}
export default SingIn