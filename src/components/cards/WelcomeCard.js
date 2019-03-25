import React from 'react';
import Card from 'react-bootstrap/Card';
import faker from 'faker';

// faker items
var cats = faker.image.cats();

const WelcomeCard = () =>{
    return (
        <div style={{width: '100%', height:'100%'}}>
            <Card className='h-100' bg="light" style={{ width: '90%' }}>
            <Card.Body>
                <Card.Title>Welcome to Shoot Proof</Card.Title>
                <Card.Img variant="top" src={cats} />
                <Card.Text>
                Watch this video for a quick tour of your new ShootProof account!
                </Card.Text>
            </Card.Body>
            </Card>
        </div>
    )
}

export default WelcomeCard;