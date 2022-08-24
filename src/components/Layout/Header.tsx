import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useAppSelector } from '../../store/hooks/redux'
const Header: React.FC = () => {

    const picture = useAppSelector(state => state.userReducer.user.picture)
    const load = useAppSelector(state => state.userReducer.load)

    return (
        <header className='header'>
            <div className="header__inner">
                <nav className="menu">
                    <ul>
                        <li className="menu__list">
                            <NavLink to={"/"}>Words</NavLink>
                        </li>
                    </ul>
                    <ul>
                        <li className="menu__list">
                            <NavLink to={"learn-new"}>Learn New</NavLink>
                        </li>
                    </ul>
                    <ul>
                        <li className="menu__list">
                            <NavLink to={"/tests"}>Tests</NavLink>
                        </li>
                    </ul>
                </nav>
                <div className="logo">
                    <img src={window.location.origin + "/img/logos.svg"} alt="logo" />
                </div>
                <div className="profil">
                    <img src={
                        load ? picture : `${window.location.origin}/img/Profil.svg`
                    } alt="icon" />
                </div>
            </div>
        </header>
    )
}
export default Header