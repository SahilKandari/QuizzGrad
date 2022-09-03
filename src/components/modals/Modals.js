import "./Modals.css";
import Modal from "../UI/modal/Modal";
import Card from "../UI/card/Card";
import { useDispatch } from "react-redux";
import { modalActions } from "../../store/modal-slice";
import { useSelector } from "react-redux";
export const CorrectModal = () => {
  const dispatch = useDispatch();

  return (
    <Modal onClick={() => dispatch(modalActions.close())}>
      <Card className=" row correctModal">
        <div className="col-7 ">
          <h4>Correct Answer</h4>{" "}
        </div>
        <div className="row">
          <button
            type="button"
            onClick={() => dispatch(modalActions.close())}
            className=" col-3 btn "
          >
            Thanks
          </button>
        </div>
      </Card>
    </Modal>
  );
};
export const WrongModal = () => {
  const dispatch = useDispatch();
  return (
    <Modal onClick={() => dispatch(modalActions.close())}>
      <Card className=" row correctModal wrongModal">
        <div className="col-7 ">
          <h4>Wrong Answer</h4>{" "}
        </div>
        <div className="row">
          <button
            type="button"
            onClick={() => dispatch(modalActions.close())}
            className=" col-3 btn "
          >
            Thanks
          </button>
        </div>
      </Card>
    </Modal>
  );
};
export const SubmitModal = () => {
  const dispatch = useDispatch();
  const score = useSelector((state) => state.test.score);
  return (
    <Modal onClick={() => dispatch(modalActions.close())}>
      <Card className=" row correctModal submitModal">
        <div className="col-7 ">
          <h4>Score {score}</h4>{" "}
        </div>
        <div className="row">
          <button
            type="button"
            onClick={() => dispatch(modalActions.close())}
            className=" col-3 btn "
          >
            Thanks
          </button>
        </div>
      </Card>
    </Modal>
  );
};
