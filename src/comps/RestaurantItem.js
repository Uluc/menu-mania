import React from 'react';
import {Card, Button, ListGroup} from 'react-bootstrap';


const RestaurantItem = () => {
  return (
    <div className="restaurant-item p-3">

        <Card style={{ width: '25rem' }}>

        <Card.Header className="text-center">08:00 - 19:00 </Card.Header>
        
        <Card.Img variant="top" src="https://i.imgur.com/A8eQsll.jpg/" alt="Card image cap"/>

        <Card.Body>
        
            <Card.Title className = "text-center mb-3 mt-2">Restaurant Name</Card.Title>
            
            <Card.Subtitle className="mb-2 text-muted text-center">Restaurant Cusine</Card.Subtitle>
            
            <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
            </Card.Text>

            <Button variant="primary" size="lg" block>Menu</Button>

        </Card.Body>
        </Card>
            

    </div>
  )
}

export default RestaurantItem;