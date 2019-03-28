import React from 'react';
import {Row, Col, Card, Table} from 'react-materialize';
import './Card.css';

const eventCard = (props) => {
    console.log("props of eventcard")
    console.log(props)
        return (

            <Row>
                <Col m={6} s={12}>
                    <Card
                        className="ticket"
                        title={props.name}
                    >
                        <Table>
                            <thead>
                            <tr>
                                <th>Location</th>
                                <th>Date</th>
                                <th>Remaining Tickets</th>
                                <th>Price</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>{props.location}</td>
                                <td>{props.date.slice(0, 10)}</td>
                                <td>{props.numOfAvailableTickets}</td>
                                <td>{props.price} Ft</td>
                            </tr>
                            </tbody>
                        </Table>
                    </Card>
                </Col>
            </Row>
        );
}

export default eventCard;
