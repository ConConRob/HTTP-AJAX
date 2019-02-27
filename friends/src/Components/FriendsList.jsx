import React from 'react';
import styled from 'styled-components'

const StyledFriendsList = styled.ul`
color: green;
`

export default function FriendsList({listOfFriends}){
    return(
        <StyledFriendsList>
            {
                listOfFriends.map(friend => <li>{friend}</li>)
            }
        </StyledFriendsList>
    )
}