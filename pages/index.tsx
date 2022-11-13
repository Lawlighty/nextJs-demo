import type { NextPage } from "next";
import styles from "./index.module.scss";
import cName from "classnames";
import { useContext, useEffect, useRef, useState } from "react";
import { ThemeContext } from "@/stores/theme";
import { Pagination, BackTop } from "@douyinfe/semi-ui";
import axios from "axios";
import { LOCALDOMAIN } from "@/utils";
import { IArticleIntro } from "./api/articleIntro";
import { UserAgentContext } from "@/stores/userAgent";
import { Environment } from "@/constants/enum";
import Naruto from "@/components/Naruto";
import Weather from "@/components/Weather";
import Rellax from "rellax";
import Avatar from "@/components/Avatar";
import HomePageHero from "@/components/HomePageHero";
import { Col, Row } from "@douyinfe/semi-ui";
import Introduce from "@/components/Introduce";
import LawTimeLine from "@/components/LawTimeLine";

interface IProps {
  title: string;
  description: string;
  list: {
    label: string;
    info: string;
    link: string;
  }[];
}
const Home: NextPage<IProps & any> = ({
  title,
  description,
  articles,
  isSupportWebp,
}) => {
  const mainRef = useRef<HTMLDivElement>(null);
  const { theme } = useContext(ThemeContext);
  const [content, setContent] = useState(articles);

  const { userAgent } = useContext(UserAgentContext);
  const rellaxRef = useRef();

  useEffect(() => {
    new Rellax(".animate", {
      // <---- Via class name
      speed: -10,
      center: false,
      // wrapper: null,
      round: true,
      vertical: true,
      horizontal: false,
    });

    new Rellax(rellaxRef.current, {
      // <---- Via useRef element
      speed: -10,
      center: false,
      // wrapper: null,
      round: true,
      vertical: true,
      horizontal: false,
    });

    const onscrollWindow = (): void => {
      if (userAgent === Environment.mobile) {
        return;
      }
      let mapDom = document.getElementById("ruins-map");
      if (!mapDom) {
        return;
      }
      let mapY = mapDom.getBoundingClientRect().top;
      if (mapY <= 400) {
        mapDom.classList.add("ani-show");
      }
    };
    onscrollWindow();
    document &&
      document
        .getElementById("__next")
        .addEventListener("scroll", onscrollWindow);
    return (): void => {
      document &&
        document
          .getElementById("__next")
          .removeEventListener("scroll", onscrollWindow);
    };
  }, []);

  useEffect(() => {
    mainRef.current?.classList.remove(styles.withAnimation);
    window.requestAnimationFrame(() => {
      mainRef.current?.classList.add(styles.withAnimation);
    });
  }, [theme]);
  return (
    <>
      <div>
        <HomePageHero></HomePageHero>
      </div>
      <div className={styles.container}>
        <main
          className={cName([styles.main, styles.withAnimation])}
          ref={mainRef}
        >
          <Row
            type="flex"
            justify="center"
            align="middle"
            style={{ width: "100%" }}
          >
            <Col className={styles.introduce} xs={24} lg={12}>
              <Avatar></Avatar>
              {/* <h1 className={styles.title}>{title}</h1>
              <p className={styles.description}>{description}</p> */}
            </Col>
            <Col className={styles.introduce} xs={24} lg={12}>
              <Introduce></Introduce>
            </Col>
          </Row>
          {/* <div
            className={cName({
              [styles.header]: true,
              [styles.headerWebp]: isSupportWebp,
            })}
          ></div> */}
          <div className={styles.grid}>
            {content?.list?.map((item, index) => {
              return (
                <div
                  key={index}
                  className={styles.card}
                  onClick={(): void => {
                    window.open(
                      item.link,
                      "blank",
                      "noopener=yes,noreferrer=yes"
                    );
                  }}
                >
                  <h2>{item.label} &rarr;</h2>
                  <p>{item.info}</p>
                </div>
              );
            })}
          </div>
          {/* <div className={styles.paginationArea}>
            <Pagination
              total={content?.total}
              pageSize={6}
              onPageChange={(pageNo) => {
                console.log("onPageChange", pageNo);

                axios
                  .post(`${LOCALDOMAIN}/api/articleIntro`, {
                    pageNo: pageNo,
                    pageSize: 6,
                  })
                  .then(({ data }) => {
                    setContent({
                      list: data.list.map((item: IArticleIntro) => {
                        return {
                          label: item.label,
                          info: item.info,
                          link: `${LOCALDOMAIN}/article/${item.articleId}`,
                        };
                      }),
                      total: data.total,
                    });
                  });
              }}
            />
          </div> */}

          <LawTimeLine></LawTimeLine>

          {/* // ! pc */}
          {userAgent !== Environment.mobile && (
            <div id="ruins-map" className="ruins-map">
              <div className="map"></div>
            </div>
          )}
          <div className={styles.Naruto}>
            <Naruto />
          </div>
          <Weather></Weather>
        </main>
      </div>
    </>
  );
};

Home.getInitialProps = async (context) => {
  const { data: homeData } = await axios.get(`${LOCALDOMAIN}/api/home`);
  const { data: articleData } = await axios.post(
    `${LOCALDOMAIN}/api/articleIntro`,
    {
      pageNo: 1,
      pageSize: 6,
    }
  );

  return {
    title: homeData.title,
    description: homeData.description,
    articles: {
      list: articleData.list.map((item: IArticleIntro) => {
        return {
          label: item.label,
          info: item.info,
          link: `${LOCALDOMAIN}/article/${item.articleId}`,
        };
      }),
      total: articleData.total,
    },
  };
};

export default Home;
