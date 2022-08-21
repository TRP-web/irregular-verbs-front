import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import React from 'react'
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
        // const decodeResult: IdecodGoogle = jwtDecode(res.credential)
        axios.post("http://localhost:22008/user/registration", { token: res.credential })
            .then(res => setDecodInfo(res.data))
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