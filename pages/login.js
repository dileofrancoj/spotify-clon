import * as React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

import { spotifyAuthCall } from "../helpers";

export default function Login() {
  const router = useRouter();

  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [, setSpotifyTokenResponse] = React.useState(null);

  const authenticateUser = React.useCallback(
    async (code) => {
      try {
        const response = await spotifyAuthCall({
          code,
          grant_type: "authorization_code",
        });
        console.log("response", response);

        if (response?.access_token) {
          setSpotifyTokenResponse(response);
          setIsAuthenticated(true);
          // history.replace("/home");
        }
      } catch (error) {
        setSpotifyTokenResponse(null);
        setIsAuthenticated(false);
      }
    },
    [setSpotifyTokenResponse, setIsAuthenticated]
  );
  React.useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const spotifyCode = urlParams.get("code");
    if (spotifyCode || isAuthenticated) authenticateUser(spotifyCode);
  }, [authenticateUser, isAuthenticated, router.pathname]);

  async function redirect() {
    window.location.replace(SPOTIFY_URL);
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Login page</title>
        <meta name="description" content="Login page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <button onClick={redirect}>Login</button>
    </div>
  );
}
