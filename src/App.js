import { React, useState } from "react";
import Toast from "./Components/Toast/Toast";
import ConfirmBox from "./Components/Confirm/ConfirmBox";
import "./App.css";
function App() {
  const [ShowConfirm, SetShowConfirm] = useState(false);
  const [ShowToast, SetShowToast] = useState(0);
  const [text, settext] = useState(0);
  const [toastType, settoastType] = useState("success");
  const doDelete = () => {
    if (text === "1") {
      settoastType("success");
      return true;
    } else {
      settoastType("error");
      return false;
    }
  };
  return (
    <>
      <input
        type="text"
        value={text}
        onChange={(e) => settext(e.target.value)}
      />
      {ShowConfirm ? (
        <ConfirmBox
          method={SetShowConfirm}
          action={doDelete}
          callback={SetShowToast}
        />
      ) : (
        ""
      )}
      <div className="App">
        <p>در صورتیکه ورودی عدد 1 باشد نتیجه متفاوت خواهد بود</p>
        <button onClick={() => SetShowConfirm(true)}>حذف اطلاعات</button>
      </div>
      {ShowToast ? <Toast type={toastType} /> : '' }
      {ShowToast === false ? <Toast type={toastType} /> : '' }
    </>
  );
}

export default App;
