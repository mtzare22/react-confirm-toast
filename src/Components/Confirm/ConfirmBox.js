import React from "react";
import "./ConfirmBox.css";
const ConfirmBox = ({method , action , callback}) => {
const doAction = () => {
    method(false);
    callback(action());
    var x = setInterval(() => {
        callback(0);
        clearInterval(x);
    },2000)
}    
  return (
    <>
    <div className="confirmContainer">
      <div className="confirmBox">
        <label>آیا مطمئن هستید ؟ </label>
        <div>
        <button className="yes" onClick={() => doAction()}>بله</button>
        <button className="no" onClick={() => method(false)}>خیر</button>
        </div>
      </div>
    </div>
  
    </>
  );
};

export default ConfirmBox;
