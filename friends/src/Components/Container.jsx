import React from 'react';
import FriendsList from './FriendsList';
import NewFriendForm from './NewFriendForm';
const friends = ['connor','erik','roho','tim']

export default class Container extends React.Component{

    render(){
        return(
            <>
                <NewFriendForm />
                <FriendsList listOfFriends={friends} />
            </>
        )
    }
}