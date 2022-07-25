export const CLIENT_ID = "f8af0a806a98469c96f63f9a9d7086dd";
export const REDIRECT_URI = "http://localhost:3000/login";
export const CLIENT_SECRET = "client_secret";
export const TOKEN_URL = "https://accounts.spotify.com/api/token";
export const TOKEN_HEADERS = {
  "Content-type": "application/x-www-form-urlencoded",
};

export const SPOTIFY_URL = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${REDIRECT_URI}&scope=user-read-private`;
