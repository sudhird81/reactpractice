// import React from 'react'
// import { Button, Form, Select } from 'antd'
// import { useState } from 'react'
// const Droping = () => {
//     const [section, setSection] = useState("")
//     const handleSave = () => {
//         console.log(section, "hjdfgdhjs")
//     }
//     return (
//         <>
//             <Form>
//                 <Select placeholder="Select a section " onChange=
//                     {(e) => {
//                         console.log("I am get hit" + e.target?.value)
//                         setSection({ value: e.target.value });
//                     }}>

//                     <Select.Option value="section A">Section A</Select.Option>
//                     <Select.Option value="section B">Section B</Select.Option>
//                     <Select.Option value="section C">Section C</Select.Option>

//                 </Select>
//                 <Form.Item name="gender" label="Gender" requiredMark="optional">
//                     <Select placeholder="Select your gender" onChange={(event) => {
//                         setSection({ value: event.target.value });
//                         console.log(event.target.value, "jhdgfrehgui")
//                     }}  >
//                         <Select.Option value="male" onChange={(event) => {
//                             setSection({ value: event.target.value });
//                             console.log(event.target.value, "jhdgfrehgui")
//                         }}>Male</Select.Option>
//                         <Select.Option value="female" onChange={(e) => {
//                             setSection({ value: e.target.value });
//                             console.log(e.target.value, "jhdgfrehgui")
//                         }}>Female</Select.Option>
//                     </Select>
//                 </Form.Item>

//                 <Button onClick={handleSave}>SAVE</Button>
//             </Form>
//         </>
//     )
// }

// export default Droping;



// import React from 'react'
// // import { Button, Form, Select } from 'antd'
// import { useState } from 'react'
// const Droping = (props) => {
//     const [selectedClient, setSelectedClient] = useState([]);

//     function handleSelectChange(event) {
//         setSelectedClient(event.target.value);
//     }

//     return (
//         <select value={selectedClient} onChange={handleSelectChange}>
//             <option value="one">One</option>
//             <option value="two">Two</option>
//             <option value="three">Three</option>
//         </select>
//     )
// }
// export default Droping;












// import { Select } from 'antd';
// import React from 'react';
// const { Option } = Select;
// const Droping = () => {
//     const handleChange = (value) => {
//         console.log(value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
//     };
//     return (
//         <>
//             <Select
//                 labelInValue
//                 defaultValue={{
//                     value: 'lucy',
//                     label: 'Lucy (101)',
//                 }}
//                 style={{
//                     width: 180,
//                 }}
//                 onChange={handleChange}
//             >
//                 <Option value="jack">Jack (100)</Option>
//                 <Option value="lucy">Lucy (101)</Option>
//             </Select>

//         </>
//     )
// }

// export default Droping;




// import { useState } from 'react';

// const Droping = () => {
//     const [message, setMessage] = useState('');
//     const [error, setError] = useState(null);

//     function isValidEmail(email) {
//         return /\S+@\S+\.\S+/.test(email);
//     }

//     const handleChange = event => {
//         if (!isValidEmail(event.target.value)) {
//             setError('Email is invalid');
//         } else {
//             setError(null);
//         }

//         setMessage(event.target.value);
//     };

//     return (
//         <div>
//             <input
//                 id="message"
//                 name="message"
//                 value={message}
//                 onChange={handleChange}
//             />

//             {error && <h2 style={{ color: 'red' }}>{error}</h2>}
//         </div>
//     );
// }
// export default Droping;








