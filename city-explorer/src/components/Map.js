import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

export class Map extends Component {
	render() {
		return (
			<div>
				<Card className="bg-dark text-white">
					<Card.Img src={`https://maps.locationiq.com/v3/staticmap?key=pk.d36871f015649f915282f374cff76628&q&center=${this.props.lat},${this.props.lon}&zoom=15`} alt="Card image" />
				</Card>
			</div>
		)
	}
}

export default Map
