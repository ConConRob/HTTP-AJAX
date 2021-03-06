import React from 'react';
import FriendsList from './FriendsList';
import NewFriendForm from './NewFriendForm';
import {Route} from 'react-router-dom';
import FriendEditer from './FriendEditor'
import axios from 'axios';

const serverURL='http://localhost:5000/friends';

export default class Container extends React.Component{
    state={
        listOfFriends: [],
    }
    setListOfFriends = (list) => {
        this.setState({listOfFriends: list});
    }

    componentDidMount(){
        fetch(serverURL)
            .then(data => data.json())
            .then(this.setListOfFriends)
            .catch(error=> console.log(error));
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
        })
        .then(res => this.setListOfFriends(res.data))
        .catch(error=>console.log(error));
    }

    editFriend = (name, age, email, id) => {
        axios({
            method:'put',
            url:`${serverURL}/${id}`,
            data: {
                name,
                age,
                email
            }
        })
        .then(res => this.setListOfFriends(res.data))
        .catch(error=>console.log(error));     
    }

    deleteFriend = (id) =>{
        axios({
            method:'delete',
            url:`${serverURL}/${id}`,
        })
        .then(res=> this.setListOfFriends(res.data))
        .catch(error=>console.log(error));
    }

    render(){
        return(
            <>  
                <Route exact path='/friends/'
                    render={()=> <FriendsList 
                        listOfFriends={this.state.listOfFriends}
                        deleteFriend={this.deleteFriend} 
                    />
                    }
                />
                <Route path='/friends/add'
                    render={()=> <NewFriendForm 
                        addFriend={this.addFriend} />
                    }
                />
                <Route 
                    path='/friends/edit/:id' 
                    render={(props) => <FriendEditer
                            {...props}
                            editFriend={this.editFriend} 
                            listOfFriends={this.state.listOfFriends}
                        />
                    }
                />
            </>
        )
    }
}