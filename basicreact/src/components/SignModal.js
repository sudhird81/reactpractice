import { Modal} from 'antd';
import React, { useState } from 'react';
import SignUp from './SignUp';

const SignModal = ({modal2Visible,onCancel}) => {
   

    return (
        <>
<Modal  title="Sign Up"
        centered
        visible={modal2Visible}
        onCancel={onCancel}
          >

            <SignUp title="SignUp"/>
</Modal>
        
        
        </>
    );
};

export default SignModal;


































