import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Login() {
  var client_id = "f8af0a806a98469c96f63f9a9d7086dd";
  var redirect_uri = "http://localhost:3000/callback";

  const spotifyUrl = `https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=code&redirect_uri=${redirect_uri}&scope=user-read-private`;

  async function redirect() {
    window.location.href = spotifyUrl;
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
