import React from "react";
import "./modal.scss";

function Modal({ setModal, currentData, modalData}) {
  return (
    <div className="modalBackground">
        
        <div className="modalContainer">
        <div className="close">
            <span onClick={()=>{
                setModal(false);
                currentData({});
            }}>
                X
            </span>
        </div>
            <div className="image"><img src={modalData?.thumbnail?.large}/></div>
            <div className="data-container">
                <div className="title">
                    {modalData?.title}
                </div >
                    <div className="content">
                        {modalData?.content}
                    </div>
                    <div className="author-data">
                        <div >
                            <img src={modalData?.author?.avatar}/>
                        </div>
                        <div className="name">
                            {modalData?.author?.name} - {modalData?.author?.role}
                        </div>
                    </div>
            </div>
        </div>
    </div>
  );
}

export default Modal;