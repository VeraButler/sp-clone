import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import EasyGetPaidCard from './cards/EasyGetPaidCard';
import GetStartedCard from './cards/GetStartedCard';
import NotificationsCard from './cards/NotificationsCard';
import QAndACard from './cards/QAndACard';
import SellAndGetPaidCard from './cards/SellAndGetPaidCard';
import WelcomeCard from './cards/WelcomeCard';



class Dashboard extends React.Component {
    render() {
        return(
            <div>
                <Container fluid={true}>
                    <Row style={{padding:'20px 0 20px 0'}}>
                        <Col>
                        <WelcomeCard />
                        </Col>
                        <Col>
                        <GetStartedCard />
                        </Col>
                        <Col>
                        <SellAndGetPaidCard />
                        </Col>
                        <Col>
                        <NotificationsCard />
                        </Col>
                    </Row>
                    <Row style={{padding:'20px 0 20px 0'}}>
                        <Col>
                        <EasyGetPaidCard />
                        </Col>
                        <Col>
                        <QAndACard />
                        </Col>
                        <Col></Col>
                        <Col></Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Dashboard;