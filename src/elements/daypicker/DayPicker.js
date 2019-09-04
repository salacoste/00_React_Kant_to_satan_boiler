import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types'
import * as Bootstrap from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

import 'react-day-picker/lib/style.css'
import {DayPicker as DayPickerC} from 'react-day-picker'
import DayPickerInput from 'react-day-picker/DayPickerInput'
// import 'react-day-picker/lib/style.css';
import { formatDate, parseDate } from 'react-day-picker/moment';
import moment from 'moment';
import './style.css'

import CSSTransition from 'react-addons-css-transition-group'
 


let {Navbar, Nav, Button, NavDropdown, Row, Container, NavItem, Col} = Bootstrap




export class Calendar extends PureComponent {
static propTypes = {
    // value: PropTypes.function.isRequired
    articleDates: PropTypes.array
}
static defaultProps = {

}

constructor(props) {
    super(props)
    this.handleFromChange = this.handleFromChange.bind(this);
    this.handleToChange = this.handleToChange.bind(this);
    this.state = {
      from: undefined,
      to: undefined,
      isEmpty: true
    }
  }

  componentDidMount() {
    
  }


  showFromMonth() {
    const { from, to } = this.state;
    if (!from) {
      return;
    }
    if (moment(to).diff(moment(from), 'months') < 2) {
      this.to.getDayPicker().showMonth(from);
    }
  }

  handleFromChange(from) {
    // Change the from date and focus the "to" input field
    this.setState({ from });
  }

  handleToChange(to) {
    this.setState({ to }, this.showFromMonth);
  }


  render() {
    const { from, to } = this.state;
    const modifiers = { start: from, end: to };
    console.log('www', from, to)

    return (
<Fragment>
    <Container>
        <Row>
            <Col>
            <CSSTransition transitionName="Calendar" 
              transitionEnterTimeout={300}
              transitionLeaveTimeout={300}
            >              
                    {this.state.isEmpty &&  <p>Выберите промежуток дат</p>}
                    {(this.state.from && this.state.to && <p>{('From ' + formatDate(this.state.from, 'DD.MM.YYYY') + ' to ' + formatDate(this.state.to, 'DD.MM.YYYY'))}</p>)}
            </CSSTransition>
            </Col>
        </Row>
    </Container>
    <Container>
        <Row>
            <Col>
                <div className="InputFromTo">
                    <DayPickerInput
                    inputProps={{className: 'form-control'}}
                    value={from}
                    placeholder="From"
                    format="DD.MM.YYYY"
                    keepFocus = {false}
                    formatDate={formatDate}
                    parseDate={parseDate}
                    dayPickerProps={{
                        selectedDays: [from, { from, to }],
                        disabledDays: { after: to },
                        toMonth: to,
                        modifiers,
                        numberOfMonths: 2,
                        onDayClick: () => this.to.getInput().focus(),
                      }}
                    onDayChange={this.handleFromChange}
                    />{' '}
                    —{' '}
                    <span className="InputFromTo-to">
                    <DayPickerInput
                        inputProps={{className: 'form-control'}}
                        ref={el => (this.to = el)}
                        value={to}
                        placeholder="To"
                        format="DD.MM.YYYY"
                        formatDate={formatDate}
                        parseDate={parseDate}
                        dayPickerProps={{
                            selectedDays: [from, { from, to }],
                            disabledDays: { before: from },
                            modifiers,
                            month: from,
                            fromMonth: from,
                            numberOfMonths: 2,
                          }}
                        onDayChange={this.handleToChange}
                    />
                    </span>
                </div>
            </Col>
        </Row>
    </Container>
</Fragment>
    )
}
}
