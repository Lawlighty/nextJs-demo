import { Environment } from "@/constants/enum";
import { UserAgentContext } from "@/stores/userAgent";
import { Card, Avatar } from "@douyinfe/semi-ui";
import classnames from "classnames";
import { useContext } from "react";
import styles from "./styles.module.scss";
interface IBookmarkProps {
  alignRight?: boolean;
  url: string;
  title: string;
  img?: string;
  desc?: string;
}
const { Meta } = Card;
const Bookmark = (props: IBookmarkProps) => {
  const {
    alignRight = false,
    url = "",
    title = "",
    img = "",
    desc = "",
  } = props;

  const { userAgent } = useContext(UserAgentContext);
  return (
    <div
      className={classnames({
        [styles["left"]]: !alignRight,
        [styles["right"]]: userAgent !== Environment.mobile && alignRight,
      })}
      onClick={(): void => {
        window.open(url, "blank", "noopener=yes,noreferrer=yes");
      }}
    >
      <Card
        shadows="hover"
        style={{ maxWidth: 360 }}
        bodyStyle={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Meta
          title={title}
          avatar={
            //   "https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/card-meta-avatar-docs-demo.jpg"
            <Avatar alt="Card meta img" size="default" src={img || "/RC.png"} />
          }
          description={desc}
        />
        {/* <Popover
          position="top"
          showArrow
          content={<article style={{ padding: 6 }}>这是一个 Card</article>}
        >
          <IconInfoCircle style={{ color: "var(--semi-color-primary)" }} />
        </Popover> */}
      </Card>
    </div>
  );
};
export default Bookmark;
