import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export class FormUser extends Component {
	render() {
		return (
			<div>
				<Form onSubmit={this.props.handleSubmitting}>
					<Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
						<Form.Label column sm={15} className="text-center" style={{ fontSize: "30px" }}>
							City Name
							<Form.Control type="text" placeholder="City Name" onChange={this.props.handleForm} />
						</Form.Label>
					</Form.Group>
					<Form.Group as={Row} className="mb-3">
						<Col className="d-grid gap-2">
							<Button type="submit" value="Get city" variant="outline-secondary" size="lg">Explore!</Button>
						</Col>
					</Form.Group>
				</Form>
			</div>
		)
	}
}

export default FormUser
