import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
        <Script id="theme-script" strategy="beforeInteractive">
          {`const item = localStorage.getItem('theme') || 'light';
          localStorage.setItem('theme', item);
          document.getElementsByTagName('html')[0].dataset.theme = item;`}
        </Script>

        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <Script
          id="_AMapSecurityConfig-script"
          type="text/javascript"
          strategy="beforeInteractive"
        >
          {`window._AMapSecurityConfig={securityJsCode:"eb23bf406c94cad993f7d2ae7aefdfac"}`}
        </Script>
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        {/* <Script
          id="_AMapSecurityConfig-loader"
          src="https://webapi.amap.com/loader.js"
        ></Script> */}
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <Script
          id="_AMapSecurityConfig-amap"
          strategy="beforeInteractive"
          type="text/javascript"
          src="https://webapi.amap.com/maps?v=2.0&key=e1ca3beff25366be0d8726a7d46d118d"
        ></Script>
      </body>
    </Html>
  );
}
