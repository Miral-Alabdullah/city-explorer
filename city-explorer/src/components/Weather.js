import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';

export class Weather extends Component {

	render() {
		return (
			<div class="shadow-lg mb-5 bg-body rounded">
				<Table class="table-secondary">
					<thead className="text-center">
						<tr class="table-secondary">
							<th>Description</th>
							<th>Date</th>
						</tr>
					</thead>
					{
						this.props.weatherData.map(Obj => {
							return (
								<>
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
				</Table>

			</div>)
	}
}

export default Weather