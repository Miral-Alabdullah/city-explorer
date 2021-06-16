import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';

export class Weather extends Component {

	render() {
		return (
			<>
				{
					this.props.weatherData.map(Obj => {
						return (
							<>
								<Table striped bordered hover>
									<thead  className="text-center">
										<tr>
											<th>Longitude</th>
											<th>Latitude</th>
											<th>Description</th>
											<th>Date</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>{this.props.lon}</td>
											<td>{this.props.lat}</td>
											<td>{Obj.description}</td>
											<td>{Obj.date}</td>
										</tr>
									</tbody>
								</Table>
							</>
						)
					}
					)
				}
			</>)
	}
}

export default Weather