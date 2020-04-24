import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import './index.css'
import DisplayInfo from './components/DisplayInfo';
class App extends Component {

  constructor() {
    super()
    this.state = {
      string: '',
      users: [],

    }
  }
  componentDidMount() {



  }

  handleChange = (e) => {

    this.setState({

      string: e.target.value
    })


  }

  handleSend = (e) => {


    if (this.state.string !== "") {
      axios
        .get("https://api.github.com/search/users?q=" + this.state.string)
        .then((response) => {
          console.log("data", response.data.items);
          this.setState({
            users: response.data.items,

          });
        })
        .catch((error) => {

        });
    }

  }
  render() {

    const { users } = this.state
    return (
      <div >
        <div className="content">
          <input onChange={this.handleChange} type="text" ></input>
          <button onClick={this.handleSend}>FIND</button>

        </div >
        <div className="contentinfo">
          {users.map((item, index) => {
            return (<DisplayInfo img={item.avatar_url} val={item.login} />)
          })}
        </div>


      </div>
    )
  }
}

export default App;
