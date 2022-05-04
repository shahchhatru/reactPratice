import React from 'react';
//import {useState} from 'react';

class User extends React.Component{
    render(){
        console.warn('Renderer Method');
        return(
            <div>
                <h1>User {this.props.name}</h1>
            </div>
        )
    }
}

export default User;