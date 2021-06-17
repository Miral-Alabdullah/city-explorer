import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

export class Map extends Component {
	render() {
		return (
			<div class="shadow-lg mb-5 bg-body rounded">
				<Card>
					<Card.Img src={`https://maps.locationiq.com/v3/staticmap?key=pk.d36871f015649f915282f374cff76628&q&center=${this.props.lat},${this.props.lon}&zoom=15`}
						alt="Card image" class="rounded mx-auto d-block" width='100%' />
				</Card>
			</div>
		)
	}
}

export default Map
