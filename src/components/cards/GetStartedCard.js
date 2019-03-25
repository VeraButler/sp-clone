import React from 'react';
import Card from 'react-bootstrap/Card';

const GetStartedCard = () => {
    return (
        <div style={{width: '100%', height:'100%'}}>
            <Card className='h-100' bg="light" style={{width: '90%'}}>
            <Card.Body>
                <Card.Title>Get Started</Card.Title>
                
                <Card.Link href="#">Add a Gallery</Card.Link>
                <Card.Text >Create your first gallery.</Card.Text>

                <Card.Link href="#">Upload Photos</Card.Link>
                <Card.Text >Add photos to a gallery.</Card.Text>

                <Card.Link href="#">Customize Watermakrs</Card.Link>
                <Card.Text >Create image or text based watermarks.</Card.Text>

                <Card.Link href="#">Set up Colors and Logos</Card.Link>
                <Card.Text >For galleries, mobile apps, emails, and invoices.</Card.Text>
            </Card.Body>
            </Card>
        </div>
    )
}

export default GetStartedCard;