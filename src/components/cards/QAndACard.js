import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import faker from 'faker';

// faker items
var technics = faker.image.technics();


const QAndACard = () => {
    return(
        <div style={{width: '100%', height:'100%'}}>
        <Card className='h-100' bg="light" style={{width: '90%'}}>
        <Card.Body className='text-center'>
            <Card.Img 
            className='align-self-center' 
            variant="top" src={technics} 
            style={{width:'50%', padding:'10% 0 10% 0'}}/>
            <Card.Title className='align-self-center'>Q &amp; A: Commercial Photography</Card.Title>
            <Card.Text>We answer your Q's about clients, contracts, and going commercial!</Card.Text>
            <Button className='align-self-center' style={{width: '50%'}}>Go Commercial</Button>
        </Card.Body>
        </Card>
        </div>

    )
}

export default QAndACard;

