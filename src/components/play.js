import React, {useState} from "react"
import useSound from "use-sound"

import lofiMP3 from "../../static/lofi.mp3"
import llama from "../../static/llama.webp"
import Music from "../../static/music.svg"

export default function Play() {
  const [play] = useSound(lofiMP3)
  const [playing, setPlaying] = useState(false)

  return (
    <>
      <img
        src={llama}
        alt="Walking llama GIF"
        style={{
          display: playing ? "block" : "none",
          margin: "0 auto 1rem auto",
        }}
      />
      <button
        onClick={() => {
          if (!playing) {
            play()
            setPlaying(true)
          }
        }}
        style={{
          borderRadius: "1rem",
          padding: "1rem",
          margin: "auto",
          display: "block",
        }}
      >
        <img
          src={Music}
          width="80"
          style={{ marginBottom: "0" }}
          alt="Musical notes icon"
        />
      </button>
    </>
  )
}
