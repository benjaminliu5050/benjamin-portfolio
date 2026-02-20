import React from 'react'

export default function Spotify() {
  return (
    <iframe
      src="https://open.spotify.com/"
      title="Spotify"
      className="h-full w-full bg-ub-cool-grey"
    />
  );
}

export const displaySpotify = () => {
  <Spotify />;
};
