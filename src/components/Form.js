import PropTypes from 'prop-types';

import { useState } from "react";

const Form = ({ saveLyricSearch }) => {

    const [ search, saveSearch ] = useState({
        artist: '',
        song: ''
    });
    const [ error, saveError ] = useState(false);

    const { artist, song } = search;

    // Function for every input for reading content
    const updateState = e => {
        saveSearch({
            ...search,
            [e.target.name]: e.target.value
        })
    }

    // Consult APIs
    const searchInfo = e => {
        e.preventDefault();

        if (artist.trim() === '' || song.trim() === '') {
            saveError(true);
            return;
        }
        saveError(false);

        // Pass data to principal component
        saveLyricSearch(search);

    }
    return (  
        <div className="bg-info">
            { error ? <p className="alert alert-danger text-center pd-2">All Fields Are Required</p> : null }
            <div className="container">
                <div className="row">
                    <form
                        onSubmit={searchInfo}
                        className="col card text-white bg-transparent mb-5 pt-5 pb-2"
                    >
                        <fieldset>
                            <legend className="text-center">Song Lyrics Search Engine</legend>

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Artist</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="artist"
                                            placeholder="Artist Name"
                                            onChange={updateState}
                                            value={artist}
                                        />
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Song</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="song"
                                            placeholder="Song Name"
                                            onChange={updateState}
                                            value={song}
                                        />
                                    </div>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary float-right"
                            >Search</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
        );
}

Form.propTypes = {
    saveLyricSearch: PropTypes.func.isRequired
}

export default Form;