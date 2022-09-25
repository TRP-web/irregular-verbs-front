import Image from 'next/image'
import RemoteImage from "next/future/image"
import Link from 'next/link'
import React from 'react'
import { useAppDispatch, useAppSelector } from '../../store/hooks/redux'
import SingIn from '../SingIn/SingIng'
import { userSlice } from '../../store/reducers/user'

interface IHeaderProps {
    children: JSX.Element
}

const Header: React.FC<IHeaderProps> = ({ children }) => {
    const picture = useAppSelector(state => state.userReducer.user.picture)
    const load = useAppSelector(state => state.userReducer.load)
    const dispatch = useAppDispatch()
    const logOut = () => {
        dispatch(userSlice.actions.chengeLoad(false))
    }

    return (
        <>
            <SingIn />
            <header className='header'>
                <div className="header__inner">
                    <nav className="menu">
                        <ul>
                            <li className="menu__list">
                                <Link href={"/"}>
                                    <a>Words</a>
                                </Link>
                            </li>
                        </ul>
                        <ul>
                            <li className="menu__list">
                                <Link href={"/learn-new"}>
                                    <a>Learn new</a>
                                </Link>
                            </li>
                        </ul>
                        <ul>
                            <li className="menu__list">
                                <Link href={"/tests"}>
                                    <a>Tests</a>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="logo">
                        {/* <img src={window.location.origin + "/img/logos.svg"} alt="logo" /> */}
                        <Image
                            src={"/img/logos.svg"}
                            width={"150px"}
                            height={"60px"}
                        />
                    </div>
                    <div className="profil__inner">
                        {
                            load ?
                                <button onClick={logOut}>Log Out</button>
                                : null
                        }
                        <div className="profil">

                            <RemoteImage src={
                                picture !== null ? picture : `/img/Profil.svg`
                            }
                                width={50}
                                height={50}
                                alt="icon"
                            />
                        </div>
                    </div>

                </div>
            </header>
            {children}
        </>

    )
}
export default Header