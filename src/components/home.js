import React, { Component } from 'react';
// import logo from './images/logo.jpeg';
import SearchMovie from './search-movie';
import PopularMovie from './popular_movie';


class Home extends Component {
  render() {
    return (
     <div>
        <div>
         {/* <img src={logo} className="app-logo" alt="logo" /> */}
          <h1 className="App-Title" >HollyWood Movies</h1>
        </div>
          <div>
           <SearchMovie />
          </div> 
          <div>
            <PopularMovie/>
          </div>  
     </div>
    );
  }
}

export default Home;