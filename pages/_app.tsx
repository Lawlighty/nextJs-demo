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
  console.log("data==>", data);

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
  // const pageProps = await App.getInitialProps(context);
  const cData = {
    pageProps: {
      title: "Hello Lawlighty's SSR!",
      description: "A Demoe for SSR",
      articles: {
        list: [
          {
            label: "框架通识之 MVC MVVM",
            info: "框架通识之 MVC MVVM",
            link: "https://blog.lawlighty.top/detailed/618f1a8cfcce5b89ea303d39",
          },
          {
            label: "权限验证",
            info: "权限验证",
            link: "https://blog.lawlighty.top/detailed/62ff2e5bc76e5ef0989a7780",
          },
          {
            label: "从Unis框架中看React/Vue",
            info: "从Unis框架中看React/Vue",
            link: "https://blog.lawlighty.top/detailed/626900f3c76e5ef0989a6c11",
          },
          {
            label: "前端框架",
            info: "前端框架漫谈",
            link: "http://127.0.0.1:3000/article/4",
          },
          {
            label: "React Diff算法 核心理念",
            info: "React Diff算法 核心理念",
            link: "https://blog.lawlighty.top/detailed/625ccf97c76e5ef0989a6aa5",
          },
          {
            label: "日期时间处理问题",
            info: "日期时间处理问题",
            link: "https://blog.lawlighty.top/detailed/62d76f74c76e5ef0989a7481",
          },
        ],
        total: 7,
      },
    },
    navbarData: {},
    footerData: {
      title: "Lawlighty's WebSite",
      linkList: [
        {
          title: "技术栈",
          list: [
            {
              label: "react",
              link: "",
            },
            {
              label: "typescript",
              link: "",
            },
            {
              label: "ssr",
              link: "",
            },
            {
              label: "nodejs",
              link: "",
            },
          ],
        },
        {
          title: "了解更多",
          list: [
            {
              label: "掘金",
              link: "https://juejin.cn/user/545799370726270",
            },
            {
              label: "博客",
              link: "https://blog.lawlighty.top/",
            },
            {
              label: "知乎",
              link: "",
            },
            {
              label: "github",
              link: "https://github.com/Lawlighty",
            },
          ],
        },
        {
          title: "联系我",
          list: [
            {
              label: "QQ",
              link: "978170580",
            },
            {
              label: "WeChat",
              link: "lyxlissa",
            },
          ],
        },
      ],
      qrCode: {
        image:
          "https://lawlighty-blog.oss-cn-hangzhou.aliyuncs.com/articles/wx-lawlighty.jpg",
        text: "WeChat",
      },
      copyRight: "Copyright © 2022 lawlighty. 保留所有权利",
      siteNumber: "浙ICP备2021032851号",
      publicNumber: "浙公网安备 2021032851号",
    },
  };
  // const { data = {} } = await axios.get(`${LOCALDOMAIN}/api/layout`);
  // console.log("data", data);

  return {
    // ...pageProps,
    ...cData,
    isMobile: getIsMobile(context),
    isSupportWebp: getIsSupportWebp(context),
  };
};

export default MyApp;
