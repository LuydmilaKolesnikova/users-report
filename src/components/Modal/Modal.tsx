import styles from "./Modal.module.css";
import { UserInfo } from "../../redux/users-reducer";
import close from "../../images/close.svg";
import ShowModalContext, {
  ShowModalContextType,
} from "../../utils/context/ShowModalProvider";
import { useContext } from "react";

interface Props {
  userData: UserInfo;
}

const hireDateToSpecialFormat = (hire_date: string) => {
  const date = new Date(hire_date);
  return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
};

const Modal: React.FC<Props> = (props) => {
  const { setShowModal } = useContext(ShowModalContext) as ShowModalContextType;

  const dateDMY = hireDateToSpecialFormat(props.userData.hire_date);

  return (
    <div className={styles.wrapper} onClick={() => setShowModal(false)}>
      <div className={styles.modal}>
        <div className={styles.top}>
          <div className={styles.title}>{props.userData.name}</div>
          <img
            className={styles.closeIcon}
            src={close}
            alt=""
            onClick={() => setShowModal(false)}
          ></img>
        </div>
        <div className={styles.infoBlock}>
          <div className={styles.infoItem}>
            <div className={styles.caption}>Телефон:</div>
            <div className={styles.text}>{props.userData.phone}</div>
          </div>
          <div className={styles.infoItem}>
            <div className={styles.caption}>Почта:</div>
            <div className={styles.text}>{props.userData.email}</div>
          </div>
          <div className={styles.infoItem}>
            <div className={styles.caption}>Дата приема:</div>
            <div className={styles.text}>{dateDMY}</div>
          </div>
          <div className={styles.infoItem}>
            <div className={styles.caption}>Должность:</div>
            <div className={styles.text}>{props.userData.position_name}</div>
          </div>
          <div className={styles.infoItem}>
            <div className={styles.caption}>Подразделение:</div>
            <div className={styles.text}>{props.userData.department}</div>
          </div>
        </div>
        <div className={styles.extraInfoBlock}>
          <div className={styles.extraInfoTitle}>Дополнительная информация</div>
          <p className={styles.extraInfoText}>
            Разработчики используют текст в качестве заполнителя макта страницы.
            Разработчики используют текст в качестве заполнителя макта страницы.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
