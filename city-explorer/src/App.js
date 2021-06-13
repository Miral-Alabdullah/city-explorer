import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import axios from 'axios';

export class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			cityName: '',
			toShowTheCity: false,
			dataOfCities: {}
		}
	}

	handleForm = (e) => {
		this.setState({
			cityName: e.target.value,
		})
		console.log(this.state.cityName);
	}

	handleSubmitting = async (e) => {
		e.preventDefault();
		const axiosResponse = await axios.get(`https://us1.locationiq.com/v1/search.php?key=pk.d36871f015649f915282f374cff76628&city=${this.state.cityName}&format=json`);
		this.setState({
			toShowTheCity: true,
			dataOfCities: axiosResponse.data[0]
		})
		console.log(axiosResponse);
	}

	render() {
		return (
			<div>
				<Form onSubmit={this.handleSubmitting}>
					<Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
						<Form.Label column sm={2}>
							City Name
						</Form.Label>
						<Col sm={10}>
							<Form.Control type="text" placeholder="City Name" onChange={this.handleForm} />
						</Col>
					</Form.Group>
					<Form.Group as={Row} className="mb-3">
						<Col sm={{ span: 10, offset: 2 }}>
							<Button type="submit" value="Get city">Explore!</Button>
						</Col>
					</Form.Group>
				</Form>

				{
					this.state.toShowTheCity &&
					<div>
						<p>{this.state.dataOfCities.display_name}</p>
						<img src={`https://maps.locationiq.com/v3/staticmap?key=pk.d36871f015649f915282f374cff76628&q&center=${this.state.dataOfCities.lat},${this.state.dataOfCities.lon}&zoom=15`} alt='' />
					</div>
				}

			</div>
		)
	}
}

export default App
