import { Modal} from 'antd';
import SignUp from './SignUp';

const SignModal = ({visible,onCancel}) => {
   

    return (
        <>
<Modal  title="Sign Up"
        centered
        visible={visible}
        onCancel={onCancel}
        width={500}
        footer={false}
          >

            <SignUp title="SignUp"/>
</Modal>
        
        
        </>
    );
};

export default SignModal;


































