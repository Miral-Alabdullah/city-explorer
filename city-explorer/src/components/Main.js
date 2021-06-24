import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Weather from './Weather';
import Map from './Map';
import FormUser from './FormUser';
import CityInfo from './CityInfo';
import Movies from './Movies';
import axios from 'axios';


export class Main extends Component {

	constructor(props) {
		super(props)
		this.state = {
			cityName: '',
			weatherData: [],
			toShowTheCity: false,
			dataOfCities: {},
			lat: '',
			lon: '',
			arrayOfMovies: [],

		}
	}

	handleForm = (e) => {
		this.setState({
			cityName: e.target.value,
		})
	}

	handleSubmitting = async (e) => {
		e.preventDefault();
		try {
			await axios.get(`https://us1.locationiq.com/v1/search.php?key=pk.d36871f015649f915282f374cff76628&city=${this.state.cityName}&format=json`).then(locationResponse => {
				this.setState({
					dataOfCities: locationResponse.data[0],
					lat: locationResponse.data[0].lat,
					lon: locationResponse.data[0].lon,
				});
				axios.get(`${process.env.REACT_APP_URL}/weather?lat=${this.state.lat}&lon=${this.state.lon}`).then(weatherResponse => {
					this.setState({
						weatherData: weatherResponse.data,
						toShowTheCity: true
					})

				});
			});
			axios.get(`${process.env.REACT_APP_URL}/movies?city=${this.state.cityName}`).then(movieResponse => {
				console.log(movieResponse.data[0]);
				this.setState({
					arrayOfMovies: movieResponse.data[0],
					toShowTheCity: true
				})
			})
		}
		catch (error) {
			alert('Invalid city. Try Again!')
		};
	}

	render() {
		const mystyle = {
			color: "#fffbdf",
			backgroundColor: '#564a4a',
			padding: "10px",
			fontFamily: "Arial"
		};

		return (
			<>
				<Container className="justify-content-md-center">
					<Row className="text-center">
						<div style={mystyle}>
							<h1>City Explorer</h1>
						</div>
					</Row>
					<Row className="justify-content-md-center">
						<Col md="auto" >
							<div>
								<FormUser
									handleSubmitting={this.handleSubmitting}
									handleForm={this.handleForm}
								/>
							</div>
							<br></br>
							<br></br>
						</Col>
					</Row>
					<Row className="justify-content-md-center">
						<Col md="auto">{
							this.state.toShowTheCity &&
							<div>
								<Row>
									<Col>
										<div>
											<Map
												lon={this.state.dataOfCities.lon}
												lat={this.state.dataOfCities.lat}
											/>
											<dv>
												{
													this.state.arrayOfMovies.map((element) => (
														< Movies
															title={element.title}
															overview={element.overview}
															vote_average={element.vote_average}
															vote_count={element.vote_count}
															poster_path={element.poster_path}
															popularity={element.popularity}
															release_date={element.release_date}
														/>

													))},
											</dv>
										</div>
									</Col>
									<Col>
										<div>
											<div>
												<CityInfo
													cityName={this.state.cityName}
													lon={this.state.dataOfCities.lat}
													lat={this.state.dataOfCities.lon}
												/>
											</div>
											<Weather
												weatherData={this.state.weatherData}
											/>
										</div>
									</Col>
								</Row>
							</div>
						}</Col>
					</Row>
				</Container>
			</>
		)
	}


}










export default Main



