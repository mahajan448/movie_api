import React,{ Component } from 'react';
import axios from 'axios';

class PopularMovie extends Component {
  constructor(props){
    super(props);
    this.state = {
      popularmovie :'',
      movieStatus: false
    };
    this.apiCall = this.apiCall.bind(this);
 }

 apiCall = () => {
    axios({
      method:'GET',
      url:'https://api.themoviedb.org/3/discover/movie?api_key=d272326e467344029e68e3c4ff0b4059&language=en-US&sort_by=popularity.desc'
    }).then(response =>  {
      console.log(response)
      if (response.data.results) {
        this.setState({
          PopularMovies: response.data.results,
          movieStatus: true
        });
      } else {
        this.setState({
          PopularMovies: null
        });
      }
    });
 }

 render() {
   return(
      <div>
           <h3>All Popular Movies....</h3>
      </div>
   );
 }
}

export default PopularMovie;
