import React from 'react'
// import "./Loading.scss"

interface ILoadingProps {
    fontSize: string
}

const Loading: React.FC<ILoadingProps> = ({ fontSize }) => {
    const [dots, setDots] = React.useState<string>("")

    const nextDots = (dots: string) => {
        const dotsCount = dots.length
        if (dotsCount === 0) {
            setDots(".")
        } else if (dotsCount === 1) {
            setDots("..")
        } else if (dotsCount === 2) {
            setDots("...")
        } else if (dotsCount === 3) {
            setDots("")
        }
    }

    React.useEffect(() => {
        const timeout = setTimeout(() => {
            nextDots(dots)
            console.log("interval");
            
        }, 400)
        return () => clearTimeout(timeout)
    }, [dots])

    return (
        <div className='loading' style={{ fontSize: fontSize }}>
            Loading{dots}
        </div>
    )
}
export default Loading