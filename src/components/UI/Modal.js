import ReactDOM from "react-dom";

import styles from "./Modal.module.css";

//========================================|
// Backdrop
//
function Backdrop(props) {
  return <div className={styles.backdrop}></div>;
}

//========================================|
// ModalWindow
//
function ModalWindow(props) {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
}

const portalElement = document.querySelector("#overlays");

export default function Modal(props) {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalWindow>{props.children}</ModalWindow>,
        portalElement
      )}
    </>
  );
}
