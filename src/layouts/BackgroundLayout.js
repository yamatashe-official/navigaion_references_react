import { useDispatch } from "react-redux";
import Indicator from "../components/Indicator/indicator";
import style from "./BackgroundLayout.module.css";
import { updatePageStateActions } from "../state/PageState";
import { ClipLoader } from "react-spinners";

const BackgroundLayout = (props) => {
  const dispatch = useDispatch();

  function onClickRight() {
    dispatch(updatePageStateActions.updatePageToNext());
  }
  function onClickLeft() {
    dispatch(updatePageStateActions.updatePageToPrevious());
  }

  return (
    <div className={style.overall}>
      {props.children}
      {props.backgroundImage != null ? (
        <img src={props.backgroundImage} className={style.image} />
      ) : (
        <ClipLoader
          className={style.loader}
          color={"white"}
          loading={true}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      )}
      <span className={style.buttonLeft} onClick={onClickLeft} />
      <span className={style.buttonRight} onClick={onClickRight} />
      <Indicator />
    </div>
  );
};

export default BackgroundLayout;
