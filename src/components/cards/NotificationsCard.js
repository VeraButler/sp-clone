import React from 'react';
import Card from 'react-bootstrap/Card';

const NotificationsCard = () => {
    return (
        <div style={{width: '100%', height:'100%'}}>
        <Card className='h-100' bg="light" style={{width: '90%'}} >
        <Card.Body>
            <Card.Title>Notifications</Card.Title>
            <Card.Text className='text-center'>No Notifications</Card.Text>
        </Card.Body>
        </Card>
        </div>
    )
}

export default NotificationsCard;

