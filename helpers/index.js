import { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI, TOKEN_HEADERS, TOKEN_URL } from "../constants/credentials";
import apiCall from "./api";

const commonParams = {
  redirect_uri: REDIRECT_URI,
  client_id: CLIENT_ID,
  client_secret: CLIENT_SECRET,
};

export const spotifyAuthCall = async (requiredParams) => {
  try {
    const params = {
      ...requiredParams,
      ...commonParams,
    };

    const searchParams = Object.keys(params)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(params[key])
      )
      .join("&");

    const spotifyCall = await apiCall({
      method: "POST",
      url: TOKEN_URL,
      body: searchParams,
      headers: TOKEN_HEADERS,
    });

    return await spotifyCall.json();
  } catch (error) {
    console.log(error);
  }
};