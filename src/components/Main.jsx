import { useState } from "react"

export default function Main() {
    const [meme, setMeme] = useState({topText: "One does not simply", bottomText: "Walk into Mordor", imageUrl: "http://i.imgflip.com/1bij.jpg"})

    function handleChange(event) {
        const {value, name} = event.currentTarget
        setMeme(prev => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <main>
            <div className="form">
                <label>Top Text
                    <input
                        type="text"
                        placeholder={meme.topText}
                        name="topText"
                        onChange={handleChange}
                    />
                </label>

                <label>Bottom Text
                    <input
                        type="text"
                        placeholder={meme.bottomText}
                        name="bottomText"
                        onChange={handleChange}
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