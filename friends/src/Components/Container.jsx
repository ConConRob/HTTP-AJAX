import React from 'react';
import FriendsList from './FriendsList';
import NewFriendForm from './NewFriendForm';
import axios from 'axios';

const serverURL='http://localhost:5000/friends';

export default class Container extends React.Component{
    state={
        listOfFriends: [],
    }

    componentDidMount(){
        fetch(serverURL)
            .then(data => data.json())
            .then(this.setListOfFriends)
    }
    
    setListOfFriends = (list) => {
        this.setState({listOfFriends: list});
    }

    addFriend = (name, age, email) => {
        axios({
            method:'post',
            url: serverURL,
            data: {
                name,
                age,
                email
            }
        });
    }

    render(){
        return(
            <>
                <NewFriendForm addFriend={this.addFriend} />
                <FriendsList listOfFriends={this.state.listOfFriends} />
            </>
        )
    }
}