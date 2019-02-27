import React from 'react';
import FriendsList from './FriendsList';
import NewFriendForm from './NewFriendForm';
const friends = ['connor','erik','roho','tim']

export default class Container extends React.Component{
    state={
        listOfFriends: [],
    }
    setListOfFriends = (list) => {
        this.setState({listOfFriends: list});
    }
    componentDidMount(){
        fetch('http://localhost:5000/friends')
            .then(data => data.json())
            .then(this.setListOfFriends)
    }

    render(){
        return(
            <>
                <NewFriendForm />
                <FriendsList listOfFriends={this.state.listOfFriends} />
            </>
        )
    }
}