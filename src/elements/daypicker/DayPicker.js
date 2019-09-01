import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types'
import * as Bootstrap from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

import 'react-day-picker/lib/style.css'
import {DayPicker as DayPickerC} from 'react-day-picker'

let {Navbar, Nav, Button, NavDropdown, Row, Container, NavItem} = Bootstrap




export class DayPicker extends PureComponent {
static propTypes = {
    // value: PropTypes.function.isRequired
}
static defaultProps = {

}

render() {
    return (
        <Fragment>
            <DayPickerC/>
        </Fragment>
    )
}


}