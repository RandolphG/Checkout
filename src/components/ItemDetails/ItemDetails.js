import React, {Component} from "react";
import {MediaBody, Button, Card, Collapse, Media, Row, Col} from "react-bootstrap";

class ItemDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        }
        this.style = {
            margin: (0, 0, 0, 10),
        }
    }

    render() {
        return (
            <div>
                <Button onClick={() => this.setState({open: !this.state.open})}
                        className={'item-details-button'}
                        bsStyle={'link'}>
                    <em>item details</em>
                    {this.state.open === false ? ' +' : ` -`}
                </Button>
                <Collapse style={this.style} in={this.state.open}>
                    <div>
                        <Card>
                            <Media>
                                <img width={100}
                                     height={100}
                                     alt={'thumbnail'}
                                     src={'https://images-na.ssl-images-amazon.com/images/I/61fEpBysnmL._SL1280_.jpg'}/>
                                <Media.Body>
                                    <p style={{fontSize: 13}}>Essential mouse for your everyday needs</p>
                                    <Row>
                                        <Col md={6}>
                                            {/*normal price*/}
                                            <strong>{`$${this.props.price}`}</strong><br/>
                                            {/*striked out price*/}
                                            <strong className={'price-strike'}>{`$${this.props.price}`}</strong>
                                        </Col>
                                        <Col md={6}>
                                            Qty:{this.props.quantity}
                                        </Col>
                                    </Row>
                                </Media.Body>
                            </Media>
                        </Card>
                    </div>
                </Collapse>
            </div>
        )
    }
}

export default ItemDetails;