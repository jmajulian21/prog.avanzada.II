import React, { Component } from 'react';

class Error extends React.Component{
    render(){
        console.log(this.props);
        // this.props.history.push("/home")
        return(
            <div>
                <h1>HTTP 404 Not Found</h1>
            </div>
        )
    }
}

export default Error;