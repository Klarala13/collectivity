import React, { Component } from 'react';


class Profile extends Component{
  
  render() {
      return(
        <Container>
        <Row>
        
          <Col xs={6} md={4}>
            <Image src="holder.js/171x180" roundedCircle />
          </Col>
          <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
        </Row>
      </Container>
      )
  }
}

export default Profile;