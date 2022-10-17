import { Fragment, useEffect, useState } from "react";
import Form from "./components/Form";
import axios from "axios";

function App() {

  // Define state
  const [ lyricsearch, saveLyricSearch ] = useState({});
  const [ lyrics, saveLyrics ] = useState('');

  useEffect(() => {
    if (Object.keys(lyricsearch).length === 0) return;

    const consultLyricsApi = async () => {
      const { artist, song } = lyricsearch;
      const url = `https://api.lyrics.ovh/v1/${artist}/${song}`;

      const result = await axios(url);

      saveLyrics(result.data.lyrics);
    }
    consultLyricsApi();

  }, [lyricsearch]);
  return (
    <Fragment>
      <Form 
        saveLyricSearch={saveLyricSearch}
      />
    </Fragment>
    
  );
}

export default App;
