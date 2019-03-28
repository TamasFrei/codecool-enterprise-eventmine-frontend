import React, {Component} from 'react';
import {Route, Redirect, Switch, withRouter} from 'react-router-dom';
import Events from "../Events/Events";
import ImageSlider from '../../components/ImageSlider/ImageSlider';
import {Row, Col} from 'react-materialize';
import Navbar from '../../components/Navbar/Navbar';
import Search from '../../components/Search/Search';
import Event from '../../components/Event/Event';
import SearchResults from "../SearchResults/SearchResults";
import axios from "axios";

class EventMine extends Component {

    render() {
        return (

            <div className="EventMine">
                <Row>
                    <Col>
                        <Navbar/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                <ImageSlider />
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <Search />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Route path="/search/results" component={SearchResults}/>

                    </Col>
                </Row>

                <Row>
                    <Col s={7}>
                            <Route exact path="/"  component={Events}/>
                            <Route path={"/events/:id"}  component={Event}/>
                    </Col>
                    <Col s={5}>
                        <p>some other content</p>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default withRouter(EventMine);


{/**/}