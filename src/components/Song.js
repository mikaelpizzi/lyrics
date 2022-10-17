import PropTypes from 'prop-types';

import { Fragment } from "react";

const Song = ({ lyrics }) => {

    if (lyrics.length === 0) return null;

    return (
        <Fragment>
            <h2>Song Lyrics</h2>
            <p className="letra">{lyrics}</p>
        </Fragment>
    );
}

Song.propTypes = {
    lyrics: PropTypes.string.isRequired
}

export default Song;