import React, { Component } from 'react'
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.components'
import CustomButton from '../custom-button/custom-button.component';
import {auth, signInWithGoogle } from '../../firebase/firebase.utils';

export class SignIn extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             email:'',
             password:""
        }
    }
    
    handleChange = event =>{
      const {value , name }= event.target;
      this.setState({ [name] : value });
    }

    handleSubmit =async event =>{
      event.preventDefault();

      const {email,password} =this.state;
      try{
          await auth.signInWithEmailAndPassword(email,password);
          this.setState({ email:'',  password:"" });          
      }catch(err){
          console.log(err);
      }
    }
    
    render() {
        return (
            <div className="sign-in">
               <h2>I already have an account</h2> 
               <span>Sign in with your email and password</span>

               <form onSubmit={this.handleSubmit}>
                   <FormInput type="email" 
                   name="email" 
                   label="Email"
                   handleChange={this.handleChange}
                   value={this.state.email} required/>

                   <FormInput type="password"
                    name="password"
                    label="Password"
                    handleChange={this.handleChange}
                    value={this.state.password} required />

                <div className='buttons'>
                   <CustomButton type="submit"> Sign In </CustomButton>
                   <CustomButton onClick={signInWithGoogle} isGoogleSignIn >{' '}Sign In with Google{' '}</CustomButton>
                </div>
               </form>
            </div>
        )
    }
}

export default SignIn
