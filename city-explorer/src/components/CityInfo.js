import React, { Component } from 'react'

export class CityInfo extends Component {

	
	render() {
		let lonRounded = this.props.lon;
		lonRounded = Number(Math.round(lonRounded * 100) / 100);

		let latRounded = this.props.lon;
		latRounded = Number(Math.round(latRounded * 100) / 100)

		return (
			<div>
				<h2 className="text-center">{this.props.cityName}</h2> <p className="text-center">{lonRounded}E {latRounded}N</p>
			</div>
		)
	}
}
export default CityInfo
