import 'tailwindcss/tailwind.css';
import '../styles/carousel.css';
import { wrapper } from "../store";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default wrapper.withRedux(MyApp);
