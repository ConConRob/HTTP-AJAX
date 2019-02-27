import React from 'react';
import styled from 'styled-components'

const StyledFriendsList = styled.ul`
    color: green;
    span{
     padding: 10px;   
    }
`

export default function FriendsList({listOfFriends}){
    return(
        <StyledFriendsList>
            {
                listOfFriends.map(friend => 
                    <li key={friend.id} >
                        <span>{friend.name}</span>
                        <span>{friend.age}</span>
                        <span>{friend.email}</span>
                    </li>)
            }
        </StyledFriendsList>
    )
}