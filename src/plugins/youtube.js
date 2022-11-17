import { firebaseConfig } from "./firebase";

const API_KEY = firebaseConfig.apiKey;

export const extractVideoId = (videoUrl) => {
  const url = videoUrl.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
  if (url.length < 3) {
    alert("Wrong URL");
  }
  // eslint-disable-next-line
  return url[2] !== undefined ? url[2].split(/[^0-9a-z_\-]/i)[0] : url[0];
};

export const extractVideoInfo = async (youtubeUrl) => {
  const youtubeID = extractVideoId(youtubeUrl);
  if (!youtubeID) return;

  const URL = `https://www.googleapis.com/youtube/v3/videos?id=${youtubeID}&key=${API_KEY}&part=snippet`;
  try {
    const result = await fetch(URL);
    const videoInfo = await result.json();

    if (!videoInfo.items.length) {
      return alert("No videos found");
    }
    return videoInfo.items[0];
  } catch {
    alert("There was some error with your URL, check is correct");
  }
};
