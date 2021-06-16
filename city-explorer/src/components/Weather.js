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
											<th>Description</th>
											<th>Date</th>
										</tr>
									</thead>
									<tbody>
										<tr>
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