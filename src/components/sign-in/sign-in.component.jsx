import React from "react";
import "./sign-in.style.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({ email: '', password: '' })
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className="sign-in">
                <h2>
                    I already hace an account
                </h2>
                <span>
                    Sign in with your email and password
                </span>

                <form onSubmit={this.handleSubmit} action="">
                    <FormInput label="email" handleChange={this.handleChange} name="email" type="email" value={this.state.email} required />


                    <FormInput label="password" handleChange={this.handleChange} name="password" type="password" value={this.state.password} required />


                    <CustomButton type="submit">
                        sign in
                    </CustomButton>

                    <CustomButton onClick={signInWithGoogle}>
                        sign in with google
                    </CustomButton>
                </form>
            </div>
        )
    }

}

export default SignIn;