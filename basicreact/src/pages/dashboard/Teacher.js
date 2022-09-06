// import { Layout } from 'antd';
// import React from 'react';
// const { Header, Sider, Content } = Layout;

// const Teacher = () => (
//   <>
   

//     <Layout >
//       <Sider style={{height:"750px" ,backgroundColor:"White"}}>Sider</Sider>
//       <Layout>
//         <Header>Header</Header>
//         <Content>Teacher Login</Content>
        
//       </Layout>
//     </Layout>
//   </>
// );

// export default Teacher;

// import React, { Component } from 'react';
// import { CKEditor } from '@ckeditor/ckeditor5-react';
// import "@ckeditor/ckeditor5-theme-lark";
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// class Teacher extends Component {

//     render() {
//         return (

//             <div className="App">
//                 <h2>Using CKEditor 5 build in React</h2>
//                 <CKEditor
//                     editor={ ClassicEditor }

                    
//                     data="<p>Welcome  CKEditor 5!</p>"
//                     onReady={ editor => {
//                         // You can store the "editor" and use when it is needed.
//                         console.log( 'Editor is ready to use!', editor );
//                     } }
//                     onChange={ ( event, editor ) => {
//                         const data = editor.getData();
//                         console.log( { event, editor, data } );
//                     } }
//                     onBlur={ ( event, editor ) => {
//                         console.log( 'Blur.', editor );
//                     } }
//                     onFocus={ ( event, editor ) => {
//                         console.log( 'Focus.', editor );
//                     } }
//                 />
//             </div>
//         );
//     }
// }

// export default Teacher;


























