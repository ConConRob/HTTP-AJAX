import React from 'react';
import styled from 'styled-components';
import { withRouter } from "react-router-dom";
const StyledFriendEditor = styled.form`
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
        const currentFriend = this.props.listOfFriends.find(friend=> friend.id.toString()===this.props.match.params.id);
        this.setCurrentFriend(currentFriend)
        this.setState({...currentFriend})
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
            <h2>Wow you must be a great friend considering you can't even get his info right.</h2>
                <input
                    required
                    onChange={(event)=>this.setName(event.target.value)}   
                    type="text" 
                    placeholder="Friend's Name" 
                    value={this.state.name}
                />
                <input 
                    required
                    onChange={(event)=>this.setAge(event.target.value)}
                    type="number" 
                    placeholder="Friend's Age" 
                    value={this.state.age}
                />
                <input
                    required
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