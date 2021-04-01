import './App.css';
import React from 'react'
import Header from './components/header/Header'
import Form from './components/form/Form'
import People from './components/people/People'

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      title: 'React Props!!',
      people: [],
    }
  }

  changeTitle = (string) =>{
    this.setState({
      title: string,
    })
  }

  updatePeople = (data)=>{
    this.setState({
      people: data,
    })
  }

  render(){
    return (
      <div className="App">

          <Header changeTitle={this.changeTitle} title={this.state.title}/>
          <Form updatePeople={this.updatePeople}/>
          <People data={this.state.people} />
      </div>
    );

  }
  
}

export default App;
