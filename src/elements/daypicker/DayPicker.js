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

  componentDidUpdate(prevProps) {
    console.log('DidUpdate', this.props.articleDates)
    if (this.props.articleDates !== prevProps.articleDates && this.props.articleDates.length > 0) {
      this.articleDates = this.props.articleDates.reduce((acc, date)=> {
        acc.push(new Date(date.getFullYear(), date.getMonth(), date.getDay(), 12, 0, 0, 0))
        return acc
      }, [])
      console.log('000', this.articleDates)
    }
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
    if (this.state.from && this.state.to) {
      this.props.filterArticle({from: from})
      this.setState({from, isEmpty: false})
    } else {
      this.props.filterArticle({from: from, to: this.state.to})
      this.setState({from})
    }
  }

  handleToChange(to) {
    this.props.filterArticle({to: to, from: this.state.from})
    this.setState({ to, isEmpty: false }, this.showFromMonth);
  }


  render() {
    const { from, to } = this.state;
    const modifiers = 
    { start: from, end: to, today: new Date(),
      commentDate: (day)=> {
      day.setHours(12,0,0,0);
      
    for (let date of this.articleDates) {
    if (date.getTime() === day.getTime() ) {
      return true
    }
    }
    return false
  }
  }
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
                    //placeholder="From"
                    placeholder={`${formatDate(new Date(), 'DD.MM.YYYY', 'RU')}`}
                    format="DD.MM.YYYY"
                    keepFocus = {false}
                    formatDate={formatDate}
                    parseDate={parseDate}
                    dayPickerProps={{
                        selectedDays: [from, { from, to }],
                        disabledDays: { after: to },
                        initialMonth: new Date(2016, 5),
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
