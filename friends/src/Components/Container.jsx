import React from 'react';
import FriendsList from './FriendsList';

const friends = ['connor','erik','roho','tim']

export default class Container extends React.Component{

    render(){
        return(
            <FriendsList listOfFriends={friends} />
        )
    }
}