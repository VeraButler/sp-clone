import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import faker from 'faker';

// faker items
var business = faker.image.business();

const EasyGetPaidCard = () => {
    return(
        <div style={{width: '100%', height:'100%'}}>
        <Card className='h-100' bg="light" style={{width: '90%'}}>
        <Card.Body className='text-center'>
            <Card.Img 
                className='align-self-center' 
                variant="top" 
                src={business} 
                style={{width:'50%', padding:'10% 0 10% 0'}}/>
            <Card.Title className='align-self-center'>The Easy Way to Get Paid</Card.Title>
            <Card.Text >Here's why clients love ShootProof Invoices - &amp; you will too!</Card.Text>
            <Button className='align-self-center' style={{width: '50%'}}>Fall in Love</Button>
        </Card.Body>
        </Card>
        </div>

    )
}

export default EasyGetPaidCard;