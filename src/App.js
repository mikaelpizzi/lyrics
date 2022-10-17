import { Fragment, useEffect, useState } from "react";
import Form from "./components/Form";
import axios from "axios";
import Song from "./components/Song";

function App() {

  // Define state
  const [ lyricsearch, saveLyricSearch ] = useState({});
  const [ lyrics, saveLyrics ] = useState('');
  const [ info, saveInfo ] = useState({});

  useEffect(() => {
    if (Object.keys(lyricsearch).length === 0) return;

    const consultLyricsApi = async () => {
      const { artist, song } = lyricsearch;
      const url = `https://api.lyrics.ovh/v1/${artist}/${song}`;
      const url2 = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${artist}`;

      const [ lyrics, info ] = await Promise.all([
        axios(url),
        axios(url2)
      ])
      saveLyrics(lyrics.data.lyrics);
      saveInfo(info.data.artist[0]);
    }
    consultLyricsApi();

  }, [lyricsearch]);
  return (
    <Fragment>
      <Form 
        saveLyricSearch={saveLyricSearch}
      />

      <div className="container mt-5">
        <div className="row">
            <div className="col-md-6">

            </div>
            <div className="col-md-6">
              <Song
                lyrics={lyrics}
              />
            </div>
        </div>
      </div>
    </Fragment>
    
  );
}

export default App;
