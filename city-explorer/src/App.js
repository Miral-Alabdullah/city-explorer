import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Weather from './components/Weather';
import Map from './components/Map';
import FormUser from './components/FormUser';
import axios from 'axios';

export class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			cityName: '',
			weatherData: '',
			toShowTheCity: false,
			dataOfCities: {},
			lat: '',
			lon: '',

		}
	}

	handleForm = (e) => {
		this.setState({
			cityName: e.target.value,
		})
		console.log(e.target.value);
		console.log(this.state.cityName);
	}

	handleSubmitting = async (e) => {
		e.preventDefault();
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
										</div>
									</Col>
									<Col>
										<div>
										<h2 className="text-center">{this.state.cityName}</h2>
											<Weather
												weatherData={this.state.weatherData}
												cityName={this.state.cityName}
												lon={this.state.dataOfCities.lat}
												lat={this.state.dataOfCities.lon}
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

export default App
