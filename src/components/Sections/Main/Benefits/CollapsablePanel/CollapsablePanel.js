import React, {Component} from 'react';
import {Col,Panel} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import './CollapsablePanel.css';

class CollapsablePanel extends Component {
    state={
        expanded:false
    }
    toggledHandler = ()=> {
        this.setState({expanded:!this.state.expanded});
    }

    render(){
        return (
            <Col sm={6} xs={12} className="Benefit">
            <Panel expanded={this.state.expanded} onToggle={this.toggledHandler}>
              <Panel.Heading >
                <Panel.Title style={{display:"inline-block"}}>{this.props.benefit.bold}</Panel.Title>
                    <Panel.Toggle componentClass="a" style={{float:"right",display:"inline-block"}}>
                        <FontAwesome className="PanelToggleIcon" name={this.state.expanded?"minus":"plus"} />
                    </Panel.Toggle>
              </Panel.Heading>
              <Panel.Collapse>
                <Panel.Body>
                <FontAwesome className="Benefit-Icon" size="5x" name={this.props.benefit.iconName} />
                <p className="Benefit-Text">{this.props.benefit.text}</p>
                </Panel.Body>
              </Panel.Collapse>
            </Panel>            
            </Col>
        );
    }
}

export default CollapsablePanel;