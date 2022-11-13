import { Timeline, Spin } from "@douyinfe/semi-ui";
import Bookmark from "../Bookmark";

const LawTimeLine = () => {
  const DATASOURCE = [
    {
      time: "2021-10",
      extra: "个人博客",
      content: (
        <Bookmark
          url="https://blog.lawlighty.top/"
          title="Lawlighty 的 最新日志"
          desc="喜欢kiyo,但是没有kiyo酱?~"
        ></Bookmark>
      ),
      type: "success",
    },
    {
      time: "2022-08",
      extra: "组件库",
      content: (
        <Bookmark
          alignRight
          url="https://lawlighty.github.io/LawDesign/"
          title="LawDesign"
          img="https://gw.alipayobjects.com/zos/bmw-prod/d60657df-0822-4631-9d7c-e7a869c2f21c/k79dmz3q_w126_h126.png"
          desc="基于 NES.css 的 React 组件库"
        ></Bookmark>
      ),
      type: "success",
    },
    // {
    //   time: "2019-05-14 18:34",
    //   extra: "节点辅助说明信息",
    // dot: <IconAlertTriangle />,
    //   content: "第三个节点内容",
    //   type: "warning",
    //   color: "pink",
    // },
    {
      // <Spin size="small" />
      time: "2022-11",
      extra: "在线简历",
      content: (
        <Bookmark url="" title="基于 Electron 的 在线简历模板"></Bookmark>
      ),
      dot: <Spin size="small" />,
    },
  ];
  return (
    <>
      <Timeline mode="alternate" dataSource={DATASOURCE} />
    </>
  );
};
export default LawTimeLine;
