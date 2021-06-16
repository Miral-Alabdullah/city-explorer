import React, { Component } from 'react'

export class CityInfo extends Component {
	render() {
		return (
			<div>
				<h2 className="text-center">{this.props.cityName}</h2> <p>{this.props.lon}E {this.props.lat}N</p>
			</div>
		)
	}
}

export default CityInfo
