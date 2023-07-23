import style from "./indicator.module.css";
import { useSelector } from "react-redux";
export default function Indicator(props) {
  const pageState = useSelector((state) => state.pageState);

  const indicators = () => {
    let indicators = [];
    for (let i = 0; i < 5; i++) {
      indicators.push(
        <span
          key={i}
          className={
            pageState.page === i ? style.indicatorSelected : style.indicator
          }
        />
      );
    }
    return indicators;
  };
  return <div className={style.overall}>{indicators()}</div>;
}
