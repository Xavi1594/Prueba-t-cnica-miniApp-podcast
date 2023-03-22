import axios from 'axios';

export default function usePodcastService() {
  const getPodcasts = async () => {
    const url = 'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json';
    try {
      const response = await axios.get(url);
      return response.data.feed.entry;
    } catch (error) {
      console.error(error);
    }
  };

  return {
    getPodcasts
  };
}
