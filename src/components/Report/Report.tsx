import { useState } from "react";
import styles from "./Report.module.css";
import User from "../User/User";
import { UsersDataState } from "../../redux/users-reducer";
import { ShowModalProvider } from "../../utils/context/ShowModalProvider";

interface Props {
  usersData: UsersDataState;
  getUsersData: (name: string) => void;
}

function formatPhoneNumber(phone: string) {
  var cleaned = ("" + phone).replace(/\D/g, "");
  var match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{2})(\d{2})$/);
  if (match) {
    var intlCode = match[1] ? "+1 " : "";
    return [
      intlCode,
      "(",
      match[2],
      ") ",
      match[3],
      "-",
      match[4],
      "-",
      match[5],
    ].join("");
  }
  return null;
}

const Report: React.FC<Props> = (props) => {
  let [inputText, setInputText] = useState("");

  const onChangeInputText = (e: { currentTarget: HTMLInputElement }) => {
    setInputText(e.currentTarget.value);
    props.getUsersData(e.currentTarget.value);
  };

  return (
    <div className={styles.reportWrapper}>
      <div className={styles.searchArea}>
        <input
          className={styles.searchInput}
          type="text"
          value={inputText}
          onChange={onChangeInputText}
        />
      </div>
      <div className={styles.usersList}>
        {props.usersData.map((user) => {
          user.phone = formatPhoneNumber(user.phone) || user.phone;
          return (
            <ShowModalProvider>
              <User key={user.name} userData={user} />
            </ShowModalProvider>
          );
        })}
      </div>
    </div>
  );
};

export default Report;
