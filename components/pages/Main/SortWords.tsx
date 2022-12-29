import { setCookie, getCookie } from 'cookies-next'
import Image from 'next/image'
import React from 'react'
import { IVisibleWord } from '../../../model/visibleWord'
import ListWords from './ListWords'

export const VisualContext = React.createContext({ word: true, translated: true, v2: true, v3: true })

const SortWords: React.FC = () => {
    const [visebleWord, setVisebleWord] = React.useState<IVisibleWord>(
        { word: true, translated: true, v2: true, v3: true }
    )

    const visebleChangeHandler = (value: keyof IVisibleWord) => {
        const result = visebleWord
        result[value] = !visebleWord[value]
        setVisebleWord({ ...result })
        setCookie("visebleWord", result)
        console.log(getCookie("visebleWord"))
    }
    React.useEffect(() => {
        const cookie: any = getCookie("visebleWord")
        const visebleCookieObj = JSON.parse(cookie)
        setVisebleWord(visebleCookieObj)
    }, [])
    return (
        <div className='verbs__inner'>
            <div className="verbs__filter">

                <span className="verbs__type">
                    № word <div
                        className="verbs__eye"
                        onClick={() => visebleChangeHandler("word")}
                    >
                        {
                            visebleWord.word
                                ? <Image src={"/img/open-eye.svg"} layout={"fill"} objectFit={"contain"} />
                                : <Image src={"/img/close-eye.svg"} layout={"fill"} objectFit={"contain"} />
                        }
                    </div>
                </span>
                <span className="verbs__type">
                    V2 <div
                        className="verbs__eye"
                        onClick={() => visebleChangeHandler("v2")}
                    >
                        {
                            visebleWord.v2
                                ? <Image src={"/img/open-eye.svg"} layout={"fill"} objectFit={"contain"} />
                                : <Image src={"/img/close-eye.svg"} layout={"fill"} objectFit={"contain"} />
                        }
                    </div>
                </span>
                <span className="verbs__type">
                    V3 <div
                        className="verbs__eye"
                        onClick={() => visebleChangeHandler("v3")}
                    >
                        {
                            visebleWord.v3
                                ? <Image src={"/img/open-eye.svg"} layout={"fill"} objectFit={"contain"} />
                                : <Image src={"/img/close-eye.svg"} layout={"fill"} objectFit={"contain"} />
                        }
                    </div>
                </span>
                {/* <span className="verbs__type">
                    translated <div
                        className="verbs__eye"
                        onClick={() => visebleChangeHandler("translated")}
                    >
                        {
                            visebleWord.translated
                                ? <Image src={"/img/open-eye.svg"} layout={"fill"} objectFit={"contain"} />
                                : <Image src={"/img/close-eye.svg"} layout={"fill"} objectFit={"contain"} />
                        }
                    </div>
                </span> */}
                <div className="verbs__typet">
                </div>
            </div>
            {/* ..... */}
            {/* <VisualContext.Provider value={visebleWord}>
                <ListWords />
            </VisualContext.Provider> */}
        </div>
    )
}
export default SortWords