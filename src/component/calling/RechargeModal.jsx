/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Modal } from "antd";

const App = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="right-div flex flex-col">
        <button
          type="button"
          className="mt-24 mr-4 border-green-500 text-green-500 hover:text-white hover:bg-green-500 border-solid border rounded-lg px-6 py-1"
          onClick={showModal}
        >
          Call
        </button>
      </div>
      <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>
          Minimum balance of 5 minutes (INR {props.astro.callpermin * 5}) is
          required to start call with {props.astro.name}
        </p>
      </Modal>
    </>
  );
};
export default App;
