import React from "react";
import "./Toast.css";
const Toast = ({type="error"}) => {
  return (
    <div className={'toastContainer ' + type}>
        <>
        {type === "success" ? <div className="toast">اطلاعات با موفقیت حذف شد</div> : ''}
        </>
        <>
        {type === "error" ? <div className="toast">خطا در حذف اطلاعات</div> : ''}
        </>
    </div>
  );
};

export default Toast;
