import { Modal, Space } from "antd";
import Login from "./Login";

const LogInModal = ({ visible, onCancel }) => {
  return (
    <div>
      <Modal
        style={{ textAlign: "center" }}
        title={"Login"}
        width={500}
        visible={visible}
        onCancel={onCancel}
        footer={false}
        centered
        destroyOnClose
      >
        <Space direction="vertical">
          <Login />
        </Space>
      </Modal>
    </div>
  );
};

export default LogInModal;
