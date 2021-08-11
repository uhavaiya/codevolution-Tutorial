import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';  
import ClassClick from './components/ClassClick';         
import EventBind from './components/EventBind';
import ParentComponents from './components/ParentComponents';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyles.css'
import styles from './appStyle.module.css'
import Form from './components/Form'

class App extends Component {
  render() {
    return (
      
      <div className="App">
        <Form />
        {/* <Inline /> */}
        {/* <h1 className='error'>Error</h1> */}
        {/* <h1 className={styles.sucess}>Success</h1> */}
        {/* <Stylesheet primary={true} /> */}
        {/* <NameList /> */}
        {/* <UserGreeting /> */}
        {/* <ParentComponents /> */}
        {/* <FunctionClick /> */}
        {/* <ClassClick /> */}
        {/* <EventBind /> */}
        {/* <Counter /> */}
        {/* <Message /> */}
        {/* <Greet name='Bruce' heroName="barman">
        <p>This is children props</p>
      </Greet>

      <Greet name='Clark' heroName="batman">
        <button>Action</button>
      </Greet>
      <Greet name='Diana' heroName="boreman" />
 
      <Welcome name='Bruce' heroName="barman" />
      <Welcome name='Clark' heroName="batman"/>
      <Welcome name='Diana' heroName="boreman"/>
      <Hello /> */}
      {/* <Greet name='Diana' heroName="boreman" /> */}
      {/* <Welcome name='Bruce' heroName="batman"/> */}

      </div>
    )
  }

}

export default App;

