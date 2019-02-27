import React from 'react';
import styled from 'styled-components';
import { withRouter } from "react-router-dom";
const StyledFriendEditor = styled.form`

`

export class FriendEditor extends React.Component{
    constructor(props){
        super(props);
        this.id= props.match.params.id;
        this.state={
            currentFriend: null,
            name: '',
            age: null,
            email: '',
        }
    }

    componentDidMount(){
        this.setCurrentFriend(
            this.props.listOfFriends.find(friend=> 
                friend.id.toString()===this.props.match.params.id
            )
        )
    }
    componentDidUpdate(){
        const currentFriend = this.props.listOfFriends.find(friend=> friend.id.toString()===this.props.match.params.id);
        if(this.state.currentFriend !== currentFriend){
            this.setCurrentFriend(currentFriend);
            this.setState({...currentFriend})
        }
    }

    setCurrentFriend=(friend)=>{
        this.setState({currentFriend: friend})
    }

    setName=(name)=>{
        this.setState({name})
    }

    setAge = (age) =>{
        this.setState({age})
    }

    setEmail= (email) =>{
        this.setState({email})
    }

    handleFormSubmit = (event) =>{
        event.preventDefault();
        this.props.editFriend(this.state.name, this.state.age, this.state.email, this.state.currentFriend.id)
        this.props.history.push("/friends");
    }
    render() {
        if(!this.state.currentFriend){
            return null
        }
        return(
            <StyledFriendEditor onSubmit={this.handleFormSubmit}>
                <input
                    onChange={(event)=>this.setName(event.target.value)}   
                    type="text" 
                    placeholder="Friend's Name" 
                    value={this.state.name}
                />
                <input 
                    onChange={(event)=>this.setAge(event.target.value)}
                    type="number" 
                    placeholder="Friend's Age" 
                    value={this.state.age}
                />
                <input
                    onChange={(event)=>this.setEmail(event.target.value)} 
                    type="email" 
                    placeholder="Friend's Email" 
                    value={this.state.email}
                />
                <button type="submit">EDIT FRIEND!</button> 
            </StyledFriendEditor>
        )
    }

}

export default withRouter(FriendEditor);