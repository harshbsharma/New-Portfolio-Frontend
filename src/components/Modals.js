import React, { useState } from 'react';
import { Button, Modal } from 'antd';

const Modals = () => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState('Content of the modal');

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setModalText('The modal will be closed after two seconds');
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal} 
      className="flex cursor-pointer bg-transparent 
                 items-start justify-start text-left text-5xl
                text-dimgray-100 font-work-sans">
       <div className="rounded-2xl box-border w-[269px] flex flex-col py-6 px-10 items-center 
                      justify-center border-[4px] border-solid border-dimgray-100 
                      hover:bg-dimgray-100 hover:border hover:rounded-lg
                       hover:text-white transition-colors delay-10">
        <div className="flex flex-row items-center justify-start">
          <div className="relative leading-[150%] font-semibold">
            Contact Me
          </div> 
          
        </div>
      </div>
      </Button>
      <Modal
        title="Title"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <p>{modalText}</p>
      </Modal>
    </>
  );
};

export default Modals;