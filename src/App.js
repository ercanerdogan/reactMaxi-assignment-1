import React, {Component} from 'react';

import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component{

state={
  username:"cool_erci"
}

userNameChangeHandler =(event)=>{
  this.setState({username:event.target.value});

}

render()
{
    return (
      <div className="App">
        <UserInput 
          changed={this.userNameChangeHandler}
          currentName={this.state.username} 
        />

        <UserOutput userName={this.state.username}/>
        <UserOutput userName={this.state.username}/>
        <UserOutput userName={this.state.username}/>

        <UserOutput userName="Ercan"/>
      </div>
    );
  }
}

export default App;
