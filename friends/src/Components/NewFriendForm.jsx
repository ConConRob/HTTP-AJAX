import React from 'react';
import styled from 'styled-components';

const StyledNewFriendForm = styled.form`
`

export default class NewFriendForm extends React.Component{
    state={
        nameInput:'',
    }

    setNameInput = (event) => {
        this.setState({nameInput: event.value})
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
    }

    render(){
        return (
            <StyledNewFriendForm onSubmit={this.handleSubmit} >
                <input 
                    onChange={this.setNameInput} 
                    type="text" 
                    placeholder="Friends Name" 
                    value={this.state.nameInput}
                />
                <button type="submit">ADD NEW FRIEND!</button> 
            </StyledNewFriendForm>
        )
    }
}