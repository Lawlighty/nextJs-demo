import type { AppProps, AppContext } from "next/app";
import App from "next/app";
import { Layout, ILayoutProps } from "@/components/layout";
import Head from "next/head";
import axios from "axios";
import { getIsMobile, LOCALDOMAIN, getIsSupportWebp } from "@/utils";
import { ThemeContextProvider } from "@/stores/theme";
import "./global.scss";
import { UserAgentProvider } from "@/stores/userAgent";
export interface IComponentProps {
  isMobile?: boolean;
  isSupportWebp?: boolean;
}

const MyApp = (
  data: AppProps & ILayoutProps & { isMobile: boolean; isSupportWebp: boolean }
) => {
  const {
    Component,
    pageProps,
    navbarData,
    footerData,
    isMobile,
    isSupportWebp,
  } = data;

  return (
    <div>
      <Head>
        <title>{`Lawlighty 的 个人站点~(${
          isMobile ? "移动端" : "pc端"
        })`}</title>
        <meta
          name="description"
          content={`Lawlighty 的 个人站点~(${isMobile ? "移动端" : "pc端"})`}
        />
        <link rel="icon" href="/l.svg.ico" />
      </Head>
      <ThemeContextProvider>
        <UserAgentProvider>
          <Layout navbarData={navbarData} footerData={footerData}>
            <Component
              {...pageProps}
              isMobile={isMobile}
              isSupportWebp={isSupportWebp}
            />
          </Layout>
        </UserAgentProvider>
      </ThemeContextProvider>
    </div>
  );
};

MyApp.getInitialProps = async (context: AppContext) => {
  const pageProps = await App.getInitialProps(context);
  const { data = {} } = await axios.get(`${LOCALDOMAIN}/api/layout`);

  return {
    ...pageProps,
    ...data,
    isMobile: getIsMobile(context),
    isSupportWebp: getIsSupportWebp(context),
  };
};

export default MyApp;
