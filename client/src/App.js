import React from 'react';
import './App.css';
import PlayerList from './components/PlayerList';


class App extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        data:[],
      };
    }
   
  componentDidMount(){
    fetch('http://localhost:5000/api/players').then(resp => {
      return resp.json();
    }).then(fetchdata => {
      this.setState({data: [fetchdata]});
    }).catch(err => console.log(err));
  }
  componentDidUpdate(){
    console.log(this.state.data);
    // return <PlayerList data={this.state.data} />
  }
  
  render(){
    
  return (
    <div className="App">
      <PlayerList data={this.state.data}/>
    </div>
  );
  }
}

export default App;
