import { useState, useCallback } from "react";
import styles from "./Report.module.css";
import User from "../User/User";
import { UsersList } from "../../redux/users-reducer";
import { ShowModalProvider } from "../../utils/context/ShowModalProvider";
import { debounce } from "lodash";

interface Props {
  usersData: UsersList;
  updateUsersData: (name: string) => void;
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

  const onChangeInputText = (name: string) => {
    setInputText(name);
    debounceUpdateUsersData(name);
  };

  const debounceUpdateUsersData = useCallback(
    debounce(props.updateUsersData, 250),
    []
  );

  return (
    <div className={styles.reportWrapper}>
      <div className={styles.searchArea}>
        <input
          className={styles.searchInput}
          type="text"
          value={inputText}
          onChange={(e) => onChangeInputText(e.currentTarget.value)}
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
