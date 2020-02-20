import React, { Component } from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class SearchMovie extends Component{
   constructor(props){
     super(props);
      this.state = {
        searchmovie :"",
        resultMovies:[],
        movieStatus: false
      };
      this.handleInputChange = this.handleInputChange.bind(this);
      this.apiCall = this.apiCall.bind(this);
   }

   handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }


   apiCall = (e) => {
    e.preventDefault();
      axios({
        method:'POST',
        url:'https://api.themoviedb.org/3/search/movie?api_key=d272326e467344029e68e3c4ff0b4059&language=en-US&query='+this.state.searchmovie
      }).then(response =>  {
        console.log(response)
      	if (response.data.results) {
    	    this.setState({
    	      resultMovies: response.data.results,
            movieStatus: true
    	    });
    	  } else {
    	  	this.setState({
    	      resultMovies: null
    	    });
    	  }
      });
   }
   
  render(){
    return(
      <div>
        <div className ="div-search">
          <form name ="SerchMovieForm" onSubmit ={this.apiCall}>
            <TextField name ="SearchMovie" value={this.state.searchmovie} onChange={this.handleInputChange} label ="  Search for a movie.... "/>
            <Button variant="contained">search</Button>
          </form>
        </div>
        {this.state.movieStatus === true}
      </div>
    );
  }

}


export default SearchMovie;