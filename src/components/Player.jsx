export const Player = ({ fun, song }) => {
    return (
        <div>
            
            <button onClick={()=>
            {
              fun(false,null);
            }} className="btn btn-warning btn-lg btn btn-outline-dark">Back to Songs</button><br /><br />
            <p className="text-warning bg-dark emphasis text-center">
            <img src={song.artworkUrl100} width="200px" class="object-fit-contain border rounded border border-5" />
            <br /><br />
                {song?.artistName} {song?.trackName}
            </p>
            <br />
            <br />
            <audio controls>
                <source src={song?.previewUrl} type="audio/mp4" />
            </audio>
        </div>)
}