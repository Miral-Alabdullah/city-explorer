import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'

export class Movies extends Component {
	render() {
		return (
			<div>
				<Card style={{ width: '18rem' }}>
					<Card.Img variant="top" src={this.props.poster_path}/>
					<Card.Body>
						<Card.Title>{this.props.title}</Card.Title>
						<Card.Text>{this.props.overview}</Card.Text>
						<Card.Text>Votes Range: {this.props.vote_average}</Card.Text>
						<Card.Text>Votes Vount: {this.props.vote_count}</Card.Text>
						<Card.Text>Popularity: {this.props.popularity}</Card.Text>
						<Card.Text>Release Date: {this.props.release_date}</Card.Text>
					</Card.Body>
				</Card>

			</div>
		)
	}
}

export default Movies
