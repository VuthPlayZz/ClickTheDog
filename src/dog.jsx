import React, {useState} from "react"
import dogImage from './assets/dog-twerking.png'
import dogImageClicked from './assets/dog-twerkingclicked.png'
import soundEff from './assets/sound.mp3'

function dog() {
    const [imageSrc, setImageSrc] = useState(dogImage);
    const [count, setCount] = useState(0)
    
    function handleClickImage() {
        setImageSrc(dogImageClicked)
        setCount(c => c + 1)

        let audio = new Audio(soundEff)
        audio.volume = 0.2
        audio.play()

        setTimeout(() => {
            setImageSrc(dogImage);
          }, 200);
    }

    function handleReset() {
        setCount(0)
    }

    return(
        <div className="container">
            <h1>Click the Dog</h1>
            <img src={imageSrc} onClick={handleClickImage} className="dogTwerking"/>
            <h2>{count}</h2>
            <button className="resetBtn" onClick={handleReset}>Reset</button>
        </div>
    )
}

export default dog