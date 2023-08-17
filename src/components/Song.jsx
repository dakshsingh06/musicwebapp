import { useState } from "react";

export const Song = ({ fun, song }) => {
    console.log(song);
    const [playerFlag, setPlayerFlag] = useState(false);
    const showPlayer = () => {
        fun(true, song);
    }
    return (<div className="row">
        <div className="col-4">
            <img src={song.artworkUrl100} width="150px" class="object-fit-contain border rounded border border-5" /><br /><br />
        </div>
        <div className="col-4 font-monospace">
            {song.artistName} {song.trackName}
        </div>
        <div className="col-4">
            <button onClick={showPlayer} className="btn btn-warning  btn btn-outline-dark font-monospace">
                PLAY
            </button>
        </div>

    </div>)
}