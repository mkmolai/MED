import React, {Component} from 'react';
import ListOne from './ListOne';


const formValid = formErrors =>{
    let valid = true;

    //const emailRegex = RegExp(/^[a-zA]/);

    Object.values(formErrors).forEach(val=>{val.length >0 && (valid=false);
});
    return valid;
};

class PatientForm extends Component{
    constructor(props){
        super(props);

        this.state={
            FirstName:null,
            Surname:null,
            DateofBirth: null,
            IDNumber:null,
            WhatsApp:null,
            Address:null,
            Paswword:null,
            
            formErrors:{
                firstname: "",
                surname: "",
                email: "",
                password: ""
            }
        }; 
    }

    handleSubmit = e =>{
        e.preventDefault();

        if(formValid(this.state.formErrors)){
            console.log(`
            --Submitting--
            `);
        }
        else {
            console.error("Form Invalid");
        }
    };

    handleChange = e =>{
        e.preventDefault();
        const {name, value} = e.target;
        let formErrors = this.state.formErrors;

        switch (name){
            case "firstname":
                formErrors.firstname = value.length <3 ?"minimum 3 characters required"
                :"";
                break;
            case "surname":
                formErrors.surname = value.length <3 ?"minimum 3 characters required"
                :"";
                break;
            case "email":
                formErrors.email = value.length <3 ?"minimum 3 characters required"
                :"";
                break;
            case "paswword":
                formErrors.paswword = value.length <3 ?"minimum 3 characters required"
                :"";
                break;
            default:
            break;
        }
        this.setState({formErrors,[name]:value},()=> console.log(this.state));
    }

    render(){
        const {formErrors} = this.state; //understand this line here
        return(
            <div>
            <div className="wrapper">
                <div className="form-wrapper">
                    <h1>Add New Patient</h1>
                    <form onSubmit={this.handleSubmit} noValidate>
                        <div className="firstname">
                            <label htmlFor="firstName">First Name:</label>
                            <input 
                             type="text"
                             className="" 
                             placeholder="First Name" 
                             name="firstname"
                             noValidate
                             onChange={this.handleChange}/> 
                            {formErrors.firstname.length> 0 && (
                                <span className="errorMessage">{formErrors.firstname}</span>
                            )}
                        </div>
                        <div className="surname">
                            <label htmlFor="surname">Surname:</label>
                            <input 
                             type="text"
                             className="" 
                             placeholder="Surname" 
                             name="surname"
                             noValidate
                             onChange={this.handleChange}/>  
                        </div>
                        <div className="dob">
                            <label htmlFor="dob">Date of Birth:</label>
                            <input 
                             type="text"
                             className="" 
                             placeholder="Date of Birth"
                             name="dob"
                             noValidate
                             onChange={this.handleChange}/>  
                        </div>
                        <div className="nationalId">
                            <label htmlFor="nationalId">ID Number:</label>
                            <input 
                             type="text"
                             className="" 
                             placeholder="ID number" 
                             name="nationalId"
                             noValidate
                             onChange={this.handleChange}/>  
                        </div>
                        <div className="email">
                            <label htmlFor="email">WhatsApp:</label>
                            <input 
                             type="text"
                             className="" 
                             placeholder="Email"
                             name="email"
                             noValidate
                             onChange={this.handleChange}/>  
                        </div>
                        <div className="Address">
                            <label htmlFor="Address">Address:</label>
                            <input 
                             type="text"
                             className="" 
                             placeholder="Address" 
                             name="address"
                             noValidate
                             onChange={this.handleChange}/>  
                        </div>
                        <div className="Password">
                            <label htmlFor="Password">Password:</label>
                            <input 
                             type="password"
                             className="" 
                             placeholder="Password" 
                             name="password"
                             noValidate
                             onChange={this.handleChange}/>  
                        </div>

                        <div className="registerPatient">
                            <button type="submit">Register Patient</button>
                            <small>That patient is already in our system</small>


                        </div>
                        
                    </form>
                </div>
                </div>
            </div>
        );
        };
}

export default PatientForm;