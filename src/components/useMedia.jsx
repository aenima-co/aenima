import React from "react";
import { useEffect, useState } from "react";

const useMedia = (media) => {
  const [match, setMatch] = useState(() => {
    return window.matchMedia(media).matches;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia(media);

    const changeMatch = () => {
      setMatch(mediaQuery.matches);
    };

    mediaQuery.addEventListener("change", changeMatch);

    return () => {
      mediaQuery.removeEventListener("change", changeMatch);
    };
  }, [media]);

  return match;
};

export default useMedia;
