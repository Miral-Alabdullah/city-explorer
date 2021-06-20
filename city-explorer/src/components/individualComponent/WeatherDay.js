import React, { Component } from 'react'

export class WeatherDay extends Component {



	render() {
		return (
			<>
				{
					this.props.weatherData.map((Obj, index) => {
						console.log(Obj, index);
						return (
							<>
							<thead><th  className="text-center">Day {index + 1}</th></thead>
								<tbody>
									<tr class="table-danger">
										<td>{Obj.description}</td>
										<td>{Obj.date}</td>
									</tr>
								</tbody>
							</>
						)
					}
					)
				}
			</>
		)
	}
}

export default WeatherDay
