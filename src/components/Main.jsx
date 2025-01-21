import { useState, useEffect } from "react"

export default function Main() {
    const [meme, setMeme] = useState({topText: "One does not simply", bottomText: "Walk into Mordor", imageUrl: "http://i.imgflip.com/1bij.jpg"})

    function handleChange(event) {
        const {value, name} = event.currentTarget
        setMeme(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const [allMemes, setAllMemes] = useState([])
    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

    function getMeme() {
        randNum = Math.floor(Math.random() * allMemes.length)
        setMeme(prev => ({
            ...prev,
            imageUrl: allMemes[randNum].url
        }))
    }

    return (
        <main>
            <div className="form">
                <label>Top Text
                    <input
                        type="text"
                        placeholder=""
                        name="topText"
                        onChange={handleChange}
                        value={meme.topText}
                    />
                </label>

                <label>Bottom Text
                    <input
                        type="text"
                        placeholder=""
                        name="bottomText"
                        onChange={handleChange}
                        value={meme.bottomText}
                    />
                </label>
                <button>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={meme.imageUrl} />
                <span className="top">{meme.topText}</span>
                <span className="bottom">{meme.bottomText}</span>
            </div>
        </main>
    )
}