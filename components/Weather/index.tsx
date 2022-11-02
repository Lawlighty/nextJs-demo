import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { Weather } from "magic-design-react";
type weatherType = "sunny" | "cloudy" | "rainy" | "snowy" | "nighty";
const WeatherCmp = () => {
  const [wType, setWType] = useState<weatherType>("sunny");
  const getWeatherType = (weather: string) => {
    if (weather.includes("晴")) {
      setWType("sunny");
    } else if (weather.includes("风")) {
      setWType("cloudy");
    } else if (weather.includes("雨")) {
      setWType("rainy");
    } else if (weather.includes("雪")) {
      setWType("snowy");
    } else if (weather.includes("阴")) {
      setWType("rainy");
    }
  };
  const initWeather = (city: string) => {
    if (!city) return;
    AMap.plugin("AMap.Weather", function () {
      //创建天气查询实例
      var weather = new AMap.Weather();

      //执行实时天气信息查询
      weather.getLive(city, function (err, data) {
        console.log("执行实时天气信息查询", data);

        if (!err) {
          getWeatherType(data?.weather);
        }
      });
    });
  };
  const initCity = () => {
    AMap.plugin("AMap.Geolocation", function () {
      var geolocation = new AMap.Geolocation({
        // 是否使用高精度定位，默认：true
        enableHighAccuracy: true,
        // 设置定位超时时间，默认：无穷大
        timeout: 10000,
        // 定位按钮的停靠位置的偏移量
        offset: [10, 20],
        //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
        zoomToAccuracy: true,
        //  定位按钮的排放位置,  RB表示右下
        position: "RB",
      });

      //   geolocation.getCurrentPosition(function (status, result) {
      //     console.log(status, result);
      //     if (status == "complete") {
      //       onComplete(result);
      //     } else {
      //       onError(result);
      //     }
      //   });

      geolocation.getCityInfo(function (status, result) {
        console.log("getCityInfo", status);
        console.log("getCityInfo result", result);
        initWeather(result?.province ?? "");
      });
    });
  };
  useEffect(() => {
    initCity();
  }, []);
  return (
    <div className={styles["weather-wrapper"]}>
      <Weather type={wType} duration={1000} />
    </div>
  );
};
export default WeatherCmp;
