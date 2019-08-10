import React from 'react';

import CustomButton from '../custom-buttom/custom-button.component';
import FormInput from '../form-input/form-input.component';

import { signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';


class SignIn extends React.Component {
    constructor() {
        super()
        this.state = {
            email:'',
            password:'',
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({ email: '', password: ''})
    }

    handleChange = e => {
        const {value, name } = e.target;
        this.setState({ [name]: value})
    }


    render() {  
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit} >
                    <FormInput 
                        name="email"
                        type="email" 
                        label="email" 
                        value={this.state.email}
                        onChange={this.handleChange}
                        required
                    />
                    <FormInput 
                        name="password"    
                        type="password" 
                        label="password" 
                        onChange={this.handleChange}
                        value={this.state.password} 
                        required
                    />
                <div className="buttons">
                    <CustomButton type="submit">Sign in</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn >signInWithGoogle</CustomButton>
                </div>
                
                </form>
            </div>
        )
    }
}


export default SignIn;