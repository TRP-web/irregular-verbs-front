import { useRouter } from 'next/router'
import React from 'react'

interface IResultObj {
    correct: number
    mistakes: number
}

const Result: React.FC = () => {
    const router = useRouter()
    const result = router.query.result
    const [resultObj, setResultObj] = React.useState<IResultObj>({ correct: 1, mistakes: 1 })
    const [count, setCount] = React.useState<number>(1)

    React.useEffect(() => {
        if (result !== undefined) {
            setResultObj({
                correct: Number(result[0]),
                mistakes: Number(result[1])
            })
            setCount(Number(result[0]) + Number(result[1]))
        }
    }, [])

    const getPercentage = (count: number, number: number): number => {
        const result = Math.round(number / count * 100)
        return result
    }

    return (
        <>
            <h1 className='test__result-title'>Test is complete !</h1>
            <div className="test__charges">
                <div
                    className="test__charge-correct"
                    style={{
                        width: `${getPercentage(count, resultObj.correct)}%`,
                        borderTopRightRadius: resultObj.mistakes < 1 ?
                            "5px" : "none",
                        borderBottomRightRadius: resultObj.mistakes < 1 ?
                            "5px" : "none"

                    }}
                >
                    {`${getPercentage(count, resultObj.correct)}%`}
                </div>
                {
                    resultObj.mistakes > 0 ?
                        <div
                            className="test__charge-mistakes"
                            style={{
                                width: `${getPercentage(count, resultObj.mistakes)}%`
                            }}

                        >
                            {`${getPercentage(count, resultObj.mistakes)}%`}
                        </div>
                        : null
                }

            </div>
        </>
    )
}
export default Result