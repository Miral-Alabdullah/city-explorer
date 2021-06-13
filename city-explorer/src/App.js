import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
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
						<Col md="auto" ><div>
							<Form onSubmit={this.handleSubmitting}>
								<Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
									<Form.Label column sm={15} className="text-center" style={{fontSize: "30px"}}>
										City Name
										<Form.Control type="text" placeholder="City Name" onChange={this.handleForm} />
									</Form.Label>
								</Form.Group>
								<Form.Group as={Row} className="mb-3">
									<Col className="d-grid gap-2">
										<Button type="submit" value="Get city" variant="outline-secondary" size="lg">Explore!</Button>
									</Col>
								</Form.Group>
							</Form>
						</div></Col>
					</Row>
					<Row className="justify-content-md-center">
						<Col md="auto">{
							this.state.toShowTheCity &&
							<div>
								<Card className="bg-dark text-white">
									<Card.Img src={`https://maps.locationiq.com/v3/staticmap?key=pk.d36871f015649f915282f374cff76628&q&center=${this.state.dataOfCities.lat},${this.state.dataOfCities.lon}&zoom=15`} alt="Card image" />
									<Card.ImgOverlay>
										<Card.Title style={{color: "#f55c47"}}>{this.state.cityName}</Card.Title>
										<Card.Text style={{color: "#f55c47"}}>{this.state.dataOfCities.display_name}</Card.Text>
									</Card.ImgOverlay>
								</Card>
							</div>
						}</Col>
					</Row>
				</Container>
			</>
		)
	}
}

export default App
