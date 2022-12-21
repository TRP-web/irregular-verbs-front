import Image from 'next/image'
import React from 'react'

interface IAudioOfWordProps {
    word: string
    style?: React.CSSProperties
}

const playAudio = (word: string,) => {
    const audioObj = new Audio(`https://wooordhunt.ru/data/sound/sow/us/${word}.mp3`)
    audioObj.play()
}

const AudioOfWord: React.FC<IAudioOfWordProps> = ({ word, style }) => {

    return (
        <div className='audio-word' onClick={(e) => {e.preventDefault(); playAudio(word)}} style={style}>
            <Image
                src={"/img/audio2.svg"}
                layout={"fill"}
                objectFit={"contain"}
            />

        </div>
    )
}
export default AudioOfWord