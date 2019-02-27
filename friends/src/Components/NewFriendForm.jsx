import React from 'react';
import styled from 'styled-components';

const StyledNewFriendForm = styled.form`
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
    
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addFriend(this.state.nameInput, this.state.ageInput, this.state.emailInput)
    }

    render(){
        return (
            <StyledNewFriendForm onSubmit={this.handleSubmit} >
                <input 
                    onChange={this.setNameInput} 
                    type="text" 
                    placeholder="Friend's Name" 
                    value={this.state.nameInput}
                />
                <input 
                    onChange={this.setAgeInput} 
                    type="number" 
                    placeholder="Friend's Age" 
                    value={this.state.ageInput}
                />
                <input 
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