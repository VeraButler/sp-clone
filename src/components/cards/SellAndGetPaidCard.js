import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import faker from 'faker';

// faker items 
var business = faker.image.business();

const SellAndGetPaidCard = () => {
    return(
        <div style={{width: '100%', height:'100%'}}>
        <Card 
                className='h-100' 
                bg="light" 
                style={{width: '90%'}}>
            <Card.Body className='text-center'>
                <Card.Img 
                    className='align-self-center' 
                    variant="top" src={business} 
                    style={{width:'50%', padding:'10% 0 10% 0'}}/>

                <Card.Title className='align-self-center'>Sell and Get Paid</Card.Title>
                <Card.Text>Walk through how to setup your account so you can accept payments.</Card.Text>

                <Button 
                    className='align-self-center' 
                    style={{width: '50%'}}>Get Started
                </Button>
                <br />
                <Card.Link text="grey">No thanks</Card.Link>
        </Card.Body>
        </Card>
        </div>

    )
}

export default SellAndGetPaidCard;