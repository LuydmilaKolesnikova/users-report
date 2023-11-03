import styles from "./User.module.css";
import classnames from "classnames";
import phone from "../../images/phone.svg";
import email from "../../images/email.svg";
import Modal from "../Modal/Modal";
import { UserInfo } from "../../redux/users-reducer";
import ShowModalContext, {
  ShowModalContextType,
} from "../../utils/context/ShowModalProvider";
import { useContext } from "react";

interface Props {
  userData: UserInfo;
}

const User: React.FC<Props> = (props) => {
  const { showModal, setShowModal } = useContext(
    ShowModalContext
  ) as ShowModalContextType;

  return (
    <>
      <div className={styles.item} onClick={() => setShowModal(true)}>
        <h2 className={styles.name}>{props.userData.name}</h2>
        <div className={styles.info}>
          <div className={classnames(styles.infoItem, styles.phone)}>
            <img className={styles.phoneIcon} src={phone} alt=""></img>
            <span>{props.userData.phone}</span>
          </div>
          <div className={classnames(styles.infoItem, styles.email)}>
            <img className={styles.emailIcon} src={email} alt=""></img>
            <span>{props.userData.email}</span>
          </div>
        </div>
      </div>
      {showModal && <Modal userData={props.userData} />}
    </>
  );
};

export default User;
