import React from 'react'
import { IActiveList } from '../../../model/activeList'

interface IMenuElemProps {
    name: IActiveList
    active: IActiveList
    setActiveList: (active: IActiveList) => void
    children: string
}

const MenuElem: React.FC<IMenuElemProps> = ({ name, active, setActiveList, children }) => {

    const clickElemHandler = (name: IActiveList) => {
        setActiveList(name)
    }

    return (
        <>
            <li
                className={`learn-new__elem ${name === active ? "active" : ""}`}
                onClick={() => clickElemHandler(name)}
            >
                {children}
            </li>
        </>
    )
}
export default MenuElem