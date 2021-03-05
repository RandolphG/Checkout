import React, {Component} from 'react';
import {Container} from 'react-bootstrap';
import Subtotal from './components/Subtotal/Subtotal'
import PickupSavings from './components/PickupSavings/PickupSavings'
import TaxesFees from "./components/TaxesFees/TaxesFees";
import EstimatedTotal from "./components/EstimatedTotal/EstimatedTotal";
import ItemDetails from "./components/ItemDetails/ItemDetails";
import PromoCode from "./components/PromoCode/PromoCode";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            promoCode: '',
            total: 250,
            PickupSavings: -2.78,
            taxes: 0,
            EstimatedTotal: 0,
            disablePromoButton: false,
            quantity: 10, style: {},
        };
    }

    componentDidMount() {
        this.setState({
                          taxes: (this.state.total + this.state.PickupSavings) * 0.0875,
                      }, function() {
            this.setState({
                              EstimatedTotal:
                                  this.state.total +
                                  this.state.PickupSavings +
                                  this.state.taxes,
                          })
        })
    }

    handleChange(e) {
        this.setState(
            {promoCode: e.target.value})
        console.log(`typed ${this.state.promoCode}`)
    }

    giveDiscountHandler() {
        console.log(`total ${this.state.total} \nPickupSavings ${this.state.PickupSavings} \ntaxes ${this.state.taxes.toFixed(2)} `)
        if(this.state.promoCode === 'DISCOUNT') {
            this.setState({
                              EstimatedTotal: this.state.EstimatedTotal * 0.9,
                          }, function() {
                this.setState({
                                  disablePromoButton: true,
                              })
            })
        }
    }

    render() {
        return (
            <div className="Container">
                <Container className={'purchase-card'}>
                    <Subtotal price={this.state.total.toFixed(2)}/>
                    <PickupSavings price={this.state.PickupSavings}/>
                    <TaxesFees taxes={this.state.taxes.toFixed(2)}/>
                    <hr/>
                    <EstimatedTotal price={this.state.EstimatedTotal.toFixed(2)}/>
                    <ItemDetails price={this.state.EstimatedTotal.toFixed(2)} quantity={this.state.quantity}/>
                    <PromoCode giveDiscount={(e) => this.giveDiscountHandler(e)}
                               isDisabled={this.state.disablePromoButton}
                               promoCode={this.state.promoCode}
                               handleChange={this.handleChange.bind(this)}/>
                </Container>
            </div>
        );
    }

}

export default App;
