import { Component } from 'react';
declare type LoginScreen2State = {
    selectedCategory: any;
    isLoading: boolean;
    isEmailValid: any;
    isPasswordValid: any;
    email: string;
    password: string;
    isConfirmationValid: boolean;
    passwordConfirmation: string;
};
export default class LoginScreen2 extends Component<{}, LoginScreen2State> {
    emailInput: any;
    passwordInput: any;
    confirmationInput: any;
    constructor(props: any);
    selectCategory(selectedCategory: any): void;
    validateEmail(email: any): boolean;
    login(): void;
    signUp(): void;
    render(): JSX.Element;
}
export {};
