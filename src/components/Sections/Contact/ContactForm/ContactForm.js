import React, {Component} from 'react';
import {FormGroup,ControlLabel,FormControl,Button,Form,PageHeader,Panel} from 'react-bootstrap';
import './ContactForm.css';

class ContactForm extends Component{
    state={
        name:null,
        email:null,
        number:null,
        message:null
    }
    getValidationState(controlId){
        if(this.state[controlId]===null)
            return null;
        if(this.state[controlId].trim()==="")
            {return 'warning';}
        
        switch(controlId){
            case 'name':
            {
                console.log("Name validated");
                return 'success';
            }
            case 'email':{
                return this.state.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)?'success':'warning';
            }
            default:{
                return null;
            }
        }
    }
    handleInputChange=(event)=>{
        const controlId=event.target.id;
        this.setState({[controlId]:event.target.value})
    }
    handleInputFocus=(event)=>{
        const controlId=event.target.id;
        if(this.state[controlId]===null){
            this.setState({[controlId]:""})
        }
    }

    render(){
        return (
            <form className="ContactForm">
            <Panel bsStyle="info">
                <Panel.Heading>
            <Panel.Title componentClass="h4">Bize Ulaşın:</Panel.Title>
            </Panel.Heading>
            <Panel.Body>
                <FormGroup 
                    controlId="name"
                    validationState={this.getValidationState('name')}
                    >
                    <ControlLabel>Ad Soyad</ControlLabel>
                    <FormControl 
                    type="text"
                    placeholder="Ad ve soyadınızı giriniz"
                    onChange={this.handleInputChange}
                    onFocus={this.handleInputFocus}/>       
                </FormGroup>
                <FormGroup 
                    controlId="email"
                    validationState={this.getValidationState('email')}
                    >
                    <ControlLabel>E-mail</ControlLabel>
                    <FormControl 
                    type="email"
                    placeholder="E-mail adresinizi giriniz"
                    onChange={this.handleInputChange}
                    onFocus={this.handleInputFocus}/>       
                </FormGroup>
                <FormGroup 
                    controlId="number"
                    validationState={this.getValidationState('number')}>
                    <ControlLabel>Tel No</ControlLabel>
                    <FormControl
                    type="number"
                    placeholder="Telefon numaranızı giriniz"
                    onFocus={this.handleInputFocus}
                    onChange={this.handleInputChange}/>       
                </FormGroup>
                <FormGroup 
                    validationState={this.getValidationState('message')}
                    controlId="message">
                    <ControlLabel>Ad Soyad</ControlLabel>
                    <FormControl 
                        componentClass="textarea"
                        placeholder="Mesajınızı yazınız"
                        onFocus={this.handleInputFocus}
                        onChange={this.handleInputChange}/>       
                </FormGroup>
                <FormGroup>
                    <Button bsStyle="primary" style={{float:"right",minWidth:"30%"}}>Gönder</Button>      
                </FormGroup>
                </Panel.Body>
                </Panel>
            </form> 
            
        );
    }
}


export default ContactForm;