import "../styles/globals.css";
import { storyblokInit, apiPlugin } from "@storyblok/react";

storyblokInit({
	accessToken: "Rgm6h2XFrwx62AKJcB6rKwtt",
	use: [apiPlugin],
});

function MyApp({ Component, pageProps }) {
	return <Component {...pageProps} />;
}

export default MyApp;
