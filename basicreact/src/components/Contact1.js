import React from 'react';


class Contact1 extends React.Component{
    constructor(){
        super();
        this.state={
            employeeData : []
        }
    }
    handlesubmit =(e) =>{

        e.preventDefault();
        let employeeData = this.state.employeeData;
        let name = this.refs.txtName.value;
        let email = this.refs.txtEmail.value;

        let newEmployee = {

            "name": name,
            "email":email
          
        }
        employeeData.push(newEmployee);

        this.setState({
            employeeData : employeeData
        })
        this.refs.myform.reset();
    }

    render() {
        let employeeData = this.state.employeeData;
        return (
        <div>
        
        <form ref="myform">
              
          <label className="my2">Name:  </label>
          <input type="text" className="my3" ref="txtName" placeholder="Enter the name" required ></input><br></br><br></br>

          <label className="my2">Email:  </label>
          <input type="text" className="my3" ref="txtEmail" placeholder="Enter the email" required ></input><br></br><br></br>

          <button onClick={e => this.handlesubmit(e)}>Submit</button>
            
        </form>
        <table>
            <div>
                <td>Name</td>
                <td>Email</td>
            </div>
            {
                employeeData.map( (data,i) =>
                
                    <tr key={i}>
                        <td>{data.name}</td>
                        <td>{data.email}</td>

                    </tr>
                )

            }

        </table>
                
      </div>
        );
    }
}

export default Contact1;
