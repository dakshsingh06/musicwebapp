import { Song } from "./Song";
export const Songs = ({ fun, allSongs }) => {
    console.log('******All Songs', allSongs);
    return (<>
        {allSongs.map((currentSong, index) => <Song fun={fun} key={index} song={currentSong} />)}
    </>);
}