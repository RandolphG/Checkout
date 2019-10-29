import React, {Component} from "react";
import {Button, Collapse, Card, Form, Col, FormGroup, FormControl, FormLabel} from "react-bootstrap";

class PromoCode extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            value: '',
            style: {
                button: {
                    marginTop: 10,
                },
                collapse: {
                    marginTop: 10,
                },
                applyButton: {
                    marginBottom: 10,
                },
            },
        }
    }

    render() {
        return (
            <div>
                <Button style={this.state.style.button}
                        className={'promo-code-button'}
                        bsStyle={'link'}
                        onClick={() => this.setState({open: !this.state.open})}>
                    {this.state.open === false ? `Apply ` : `Hide `}
                    promo code
                    {this.state.open === false ? ` +` : ` -`}
                </Button>
                <Collapse style={this.state.style.collapse} in={this.state.open}>
                    <Card>
                        <Col md={12}>
                            <Form>
                                <FormGroup controlId={'formInLineName'}>
                                    <FormLabel>Promo Code</FormLabel>
                                    <FormControl type={'text'}
                                                 placeholder={'Enter promo code'}
                                                 value={this.props.promoCode}
                                                 onChange={this.props.handleChange}/>
                                </FormGroup>
                                <Button style={this.state.style.applyButton} block
                                        bsStyle={'success'}
                                        className={'btn-round'}
                                        disabled={this.props.isDisabled}
                                        onClick={this.props.giveDiscount}>Apply</Button>
                            </Form>
                        </Col>
                    </Card>
                </Collapse>
            </div>
        )
    }

}

export default PromoCode;