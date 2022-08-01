import { Modal} from 'antd';
import Contact from './Contact';

const ContactModal = ({visible,onCancel}) => {
   

    return (
        <>
<Modal  title="Contact Us"
        centered
        visible={visible}
        onCancel={onCancel}
        width={500}
        footer={false}
          >

            <Contact />
</Modal>
        
        
        </>
    );
};

export default ContactModal;