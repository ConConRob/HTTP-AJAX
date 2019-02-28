import React from 'react';
import styled from 'styled-components';

const StyledNewFriendForm = styled.form`
    padding-top: 30vh;
    display:flex;
    align-items: center;
    flex-direction: column;
    height: 30vh;
    justify-content:space-around;
    input{
        width:300px;
        padding: 6px;
        &:focus{
            background: lightsalmon;
            outline: none;
            font-size: 18px;
        }
    }
    button{
        width:300px;
        padding: 6px;
        margin:0;
        border:0;
        &:hover{
            background: lightsalmon;
            cursor: pointer;
        }
    }
`

export default class NewFriendForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            nameInput:'',
            ageInput: '',
            emailInput:'',
        }
    }


    setNameInput = (event) => {
        this.setState({nameInput: event.target.value})
    }
    setAgeInput = (event) => {
        this.setState({ageInput: event.target.value})
    }
    setEmailInput = (event) => {
        this.setState({emailInput: event.target.value})
    }
    resetState = () => {
        this.setState({
            nameInput:'',
            ageInput: '',
            emailInput:'',
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addFriend(this.state.nameInput, this.state.ageInput, this.state.emailInput)
        this.resetState();
    }

    render(){
        return (
            <StyledNewFriendForm onSubmit={this.handleSubmit} >
                <h2>Who are we kidding? You don't have any friends.</h2>
                <input
                    required 
                    onChange={this.setNameInput} 
                    type="text" 
                    placeholder="Friend's Name" 
                    value={this.state.nameInput}
                />
                <input
                    required  
                    onChange={this.setAgeInput} 
                    type="number" 
                    placeholder="Friend's Age" 
                    value={this.state.ageInput}
                />
                <input
                    required  
                    onChange={this.setEmailInput} 
                    type="email" 
                    placeholder="Friend's Email" 
                    value={this.state.emailInput}
                />
                <button type="submit">ADD NEW FRIEND!</button> 
            </StyledNewFriendForm>
        )
    }
}