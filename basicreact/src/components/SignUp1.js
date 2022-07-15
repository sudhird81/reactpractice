import React, { useState } from "react";
import { Form, Col, Row, Input } from 'antd';
import Test from "./Test";
const SignUp1 = () => {
    const [name, setName] = useState("");
    // const [errorName, setErrorName] = useState("")
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    // const [allEntry,setAllEntry]=useState([]);
    const [showData, setshowData] = useState(false)

    const enterName = (e) => {
        setName(e.target.value)
    }

    const enterEmail = (e) => {
        setEmail(e.target.value)
    }

    const enterPhone = (e) => {
        setPhone(e.target.value)

    }

    const enterPassword = (e) => {
        setPassword(e.target.value)
    }





    const submitForm = (e) => {
        e.preventDefault();
       

        setshowData(true)


        // const newEntry={email:email,password:password,fullname:name,phoneno:phone};
        // setAllEntry([newEntry]); 
        // setName("");
        // setEmail("");
        // setPassword("");
        // setPhone("");
    }
    return (
        <>

            <Row gutter={[8, 8]}>
                <Col span={8} />
                <Col span={8}>

                    <Form action="" className="inputstyle">
                    <Form.Item 
                            label="Full Name"
                            name="fullname"
                            rules={[
                                {
                                    required: true,
                                    message: 'Your Name cannot be empty!',
                                },
                            ]}
                        >
                            <Input  type="text" placeholder="Enter your Name" name="fullname" id="fullname" autoComplete="off" value={name} onChange={enterName} />
                        </Form.Item>

                        


                        <Form.Item 
                            label="Email"
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: 'Your phone number cannot be empty!',
                                },
                            ]}
                        >
                            <Input type="text" placeholder="Enter your Email" name="email" id="email" autoComplete="off" value={email} onChange={enterEmail} />
                        </Form.Item>
                            
                        


                        <Form.Item 
                            label="Phone Number"
                            name="phoneno"
                            rules={[
                                {
                                    required: true,
                                    message: 'Your phone number cannot be empty!',
                                },
                            ]}
                        >
                            <Input type="number" placeholder="Enter your phone number" name="phoneno" id="phoneno" autoComplete="off" value={phone} onChange={enterPhone} />
                        </Form.Item>




                        <Form.Item 
                            label="Password"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Your password cannot be empty!',
                                },
                            ]}
                        >
                            <Input type="password" placeholder="Enter your password" name="password" id="password" autoComplete="off" value={password} onChange={enterPassword} />

                        </Form.Item>







                        <Form.Item>
                            <button onClick={submitForm}>Sign Up</button>

                        </Form.Item>
                       
                    </Form>
                    {showData ? <><p>Full name : {name}</p>
                            <p>Email : {email}</p>
                            <p>Phone : {phone}</p>
                            <p>Password :{password}</p>
                        </> : ""}
                </Col>
                <Col span={8} />
            </Row>


            {/* <div>
            {
                allEntry.map((curElem)=>{
                    return(<div>
                        <p> Full Name : {curElem.fullname}</p>
                    <p>Email : {curElem.email}</p>
                    <p>Phone Number : {curElem.phoneno}</p>
                    <p>Password : {curElem.password}</p>
                    
                    
                    
                    </div>)
                })
            }
        </div> */}

        <Row>
      <Col span={12} offset={6}>
      {/* <Test /> */}
      </Col>
    </Row>



        </>
    )
}
export default SignUp1;






