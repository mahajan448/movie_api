import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import { withStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
	root: {
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "space-around",
		overflow: "hidden",
		backgroundColor: theme.palette.background.paper
	},
	gridList: {
		width: 400,
		height: 450
	}
}));

class SearchMovie extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchMovie: "",
			resultMovies: [],
			movieStatus: false
		};
		// this.handleInputChange = this.handleInputChange.bind(this);
		// this.apiCall = this.apiCall.bind(this);
	}

	handleInputChange = event => {
		this.setState({
			[event.target.name]: event.target.value
		});
	};

	apiCall = e => {
		e.preventDefault();
		axios({
			method: "GET",
			url:
				"http://api.themoviedb.org/3/search/movie?api_key=d272326e467344029e68e3c4ff0b4059&language=en-US&query=" +
				this.state.searchMovie
		}).then(response => {
			console.log(response);
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
		console.log(this.state);
	};

	render() {
		const { classes } = this.props;
		return (
			<>
				<div className="app">
					<header className="app-header">
						<h1 className="app-title">BollyWood Movies...</h1>
					</header>
					<div className="div-search">
						<form
							name="SerchMovieForm"
							onSubmit={this.apiCall}
						>
							<TextField
								name="searchMovie"
								placeholder="Search for a movie"
								value={this.state.searchMovie}
								onChange={this.handleInputChange}
								hinttext="Movie Name"
							/>
							<input
								className="button"
								type="submit"
								value="Search"
							/>
						</form>
						<div className={classes.root}>
							<GridList
								cellHeight={160}
								className={classes.gridList}
								cols={3}
							>
								{this.state.resultMovies.length > 0 &&
									this.state.resultMovies.map(
										movie => {
											return (
												<GridListTile>
													<h1>
														{
															movie.title
														}
													</h1>
													<img
														src={
															"https://image.tmdb.org/t/p/w500/" +
															this
																.state
																.resultMovies
																.poster_path
														}
														alt="Not Available"
													/>
												</GridListTile>
											);
										}
									)}
							</GridList>
						</div>
					</div>
				</div>
			</>
		);
	}
}

// export default SearchMovie;
export default withStyles(useStyles)(SearchMovie);
