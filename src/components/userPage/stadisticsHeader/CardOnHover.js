import React from 'react';
import { 
    Card,
    Description,
    NumberHeader,
    HoverTag
 } from './StadisticsHeader.elements';
 import ReactHover, { Trigger, Hover } from 'react-hover';
 import PropTypes from 'prop-types';

 const optionsCursorTrueWithMargin = {
    followCursor: true,
    shiftX: 20,
    shiftY: 0,
  }

class CardOnHover extends React.Component{

    render() {
        return(
    <ReactHover options={optionsCursorTrueWithMargin}>
        <Trigger type="trigger">
                <Card>
                    <NumberHeader>{this.props.number}</NumberHeader>
                    <Description>{this.props.description}
                    </Description>
                </Card>
        </Trigger>
        <Hover type="hover">
            <HoverTag> {this.props.hoverDescription}</HoverTag>
        </Hover>
    </ReactHover>
        )
    }
}

ReactHover.propTypes = {
    options: PropTypes.object.isRequired
}


export default CardOnHover
