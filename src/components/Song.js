import { Fragment } from "react";

const Song = ({ lyrics }) => (
    <Fragment>
        <h2>Song Lyrics</h2>
        <p className="letra">{lyrics}</p>
    </Fragment>
);
 
export default Song;