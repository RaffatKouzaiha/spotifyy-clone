import { playState, playingTrackState } from "@/atoms/playerAtom";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import SpotifyPlayer from "react-spotify-web-playback";

<SpotifyPlayer
  token="BQAI_7RWPJuqdZxS-I8XzhkUi9RKr8Q8UUNaJAHwWlpIq6..."
  uris={["spotify:artist:6HQYnRM4OzToCYPpVBInuU"]}
/>;

function Player({ accessToken, trackUri }) {
  const [play, setPlay] = useRecoilState(playState);
  const [playingTrack, setPlayingTrack] = useRecoilState(playingTrackState);

  useEffect(() => {
    if (trackUri) {
      setPlay(true);
    }
  }, [trackUri]);

  if (!accessToken) return null;

  return (
    <SpotifyPlayer
      styles={{
        activeColor: "#fff",
        bgColor: "#181818",
        color: "#fff",
        loaderColor: "#fff",
        sliderColor: "#1cb954",
        trackArtistColor: "#ccc",
        trackNameColor: "#fff",
        height: "70px",
        sliderTrackColor: "#535353",
        sliderTrackBorderRadius: "4px",
        sliderHandleColor: "#fff",
        errorColor: "#fff",
      }}
      token={accessToken}
      showSaveIcon
      callback={(state) => {
        setPlay(state.isPlaying);
      }}
      play={play}
      uris={trackUri ? [trackUri] : []}
      magnifySliderOnHover={true}
      autoPlay={true}
    />
  );
}

export default Player;
