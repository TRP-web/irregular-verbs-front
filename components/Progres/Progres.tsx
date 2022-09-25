import React from 'react'

interface IProgresProp {
    stage: number,
    all: number,
}

const Progres: React.FC<IProgresProp> = ({ stage, all }) => {

    return (
        <>
            <div className="test__progres" style={{
                width: `${(stage + 1) / all * 100}%`
            }}>
                {stage + 1}/{all}
            </div>
        </>
    )
}
export default Progres