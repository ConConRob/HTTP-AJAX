import React from 'react';
import styled from 'styled-components'
import {Link} from 'react-router-dom';
const StyledFriendsList = styled.ul`
    color: green;
    span{
     padding: 10px;   
    }
    li{
        display: flex;
        align-items: baseline;
    }
    button{
        margin-left: 30px;
    }
    .friend-name{
        width: 100px;
    }
    .friend-age{
        width: 60px;
    }
    .friend-email{
        width: 200px;
    }
`

export default function FriendsList({listOfFriends, deleteFriend}){
    return(
        <StyledFriendsList>
            {
                listOfFriends.map(friend => 
                    <li key={friend.id} >
                        <span className="friend-name">{friend.name}</span>
                        <span className="friend-age">{friend.age}</span>
                        <span className="friend-email">{friend.email}</span>
                        <Link to={`/friends/edit/${friend.id}`}>Edit</Link>
                        <button 
                            onClick={()=>deleteFriend(friend.id)}
                        >
                        Delete
                        </button>
                    </li>)
            }
        </StyledFriendsList>
    )
}