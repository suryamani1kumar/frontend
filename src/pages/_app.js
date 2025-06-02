import Layout from "@/components/layout/Layout";
import "@/styles/globals.css";
import { Provider } from "react-redux";
import store from "@/redux/store";
import TrackingPixel from "@/components/trackingpixel/TrackingPixel";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <TrackingPixel />
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
