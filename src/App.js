import React, { Component } from 'react';
 import Cardlist from './Cardlist';
 import Scroll from './scroll';
 import Search from './search';
 import './app.css';

 class App extends Component {
     constructor(){
         super();
         this.state={
             robots: [],
             searchfield: ''
         }
     }
     onSearchchange = (event) => {
         this.setState({searchfield: event.target.value})
     }
     componentDidMount(){
         fetch('https://jsonplaceholder.typicode.com/users')
         .then(response => response.json())
         .then(user => this.setState({robots:user}));
     }

     render(){ 
        const filteredRobots = this.state.robots.filter(
            robots =>{
                return (
                   ((robots.name.toLowerCase()) + " "+(robots.username.toLowerCase())+ " "+robots.email.toLowerCase()).includes(this.state.searchfield.toLowerCase())
                );
                    }
                    ); 
                    if(this.state.robots.length===0){
                        return (
                            <div className='tc'>
                          <h1>Loading...</h1>  
                          </div>
                        );
                    }else{
        return(
         <div className="tc">
             <h1>Robofriends</h1>
             <Search searchchange={this.onSearchchange} />
             <Scroll>
         <Cardlist robots={filteredRobots} />
         </Scroll>
         </div>
     );
        }
     }
 }

 export default App;