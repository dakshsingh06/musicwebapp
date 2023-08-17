import { useRef } from "react";

export const Search = ({ fun }) => {
    const artist = useRef();
    return (
        <>
            <label class="text-primary"> Artist Name -:</label><br />
            <input ref={artist} type='text' className="form-control text-center" placeholder="Search Artist Name Here..." />
            <br />
            <button className="btn btn-warning  btn-lg btn btn-outline-dark" onClick={() => {
                fun(artist.current.value);
            }}>Search</button>
            <br />
            <br />
            <h3 className="text-center fw-bold font-monospace fst-italic fs-2"> Songs -:</h3><br />
        </>
    );
}