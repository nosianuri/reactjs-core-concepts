import logo from './logo.svg';
import './App.css';

const number = 5555;
const singers = [
          {name: 'Dr. Mahfuz', job: 'Singer'},
          {name: 'Eva Rahman', job: 'singer2'},
          {name: 'Agun', job: 'Sopno'},
          {name: 'Shuvro', job: 'Pathor'}
        ]

const singerStyle = {
  color: 'purple',
  backgroundColor: 'white'
}

function App() {
  const nayoks = ['Rubel', 'BappaRaz', 'Kuber', 'Jashim', 'Salman Sah', 'Riyaz', 'Anwar'];
  return (
    <div className="App">
      {
        nayoks.map(nayok => <li>Name: {nayok}</li>)
      }
      {
        nayoks.map(nayok => <Person name={nayok}></Person>)
      }

      {
        singers.map(singer => <Person name={singer.name}></Person>)
      }

      {/* {<Person name={nayoks[0]} nayika="Sathi"></Person>
      <Person name={nayoks[1]} nayika="Dipika"></Person>
      <Person name={nayoks[2]} nayika="Kopila"></Person>} */}
      
      <h5>New component. YAY</h5>
      <p id="totocompany">rock mama React mama.</p>
      <Friend movie="Shingham" phone="01777"></Friend>
      <Friend phone="016999"></Friend>
      
      </div>
  );
}

function Person(props){
  return (
    <div className='person'>
    <h1>{props.name}</h1>
    <p> {props.nayika}</p>
  </div>
  )
  
}

function Friend(props){
  console.log(props);
  return ( 
    <div className='container'>
      <h3>Name: {props.movie}</h3>
      <p>phone: {props.phone}</p>
    </div>
  )
}

export default App;
