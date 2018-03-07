import React, {Component} from 'react';
import {FormGroup,ControlLabel,FormControl,Button,Panel} from 'react-bootstrap';
import emailjs from 'emailjs-com';
import Spinner from '../../../UI/Spinner/Spinner';

class ContactForm extends Component{
    state={
        mail:{
            name:null,
            email:null,
            number:null,
            message:null
        },
        isSending:false,
        isError:false,
        isSuccess:false     
    }
    getValidationState(controlId){
        const mail=this.state.mail;
        if(mail[controlId]===null)
            return null;
        if(mail[controlId].trim()==="")
            {return 'warning';}
        
        switch(controlId){
            case 'name':
            {
                return 'success';
            }
            case 'email':{
                return mail.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)?'success':'warning';
            }
            case 'number':{
                return mail.number.length===10? "success":"warning";
            }
            default:{
                return null;
            }
        }
    }

    handleInputChange=(event)=>{
        const controlId=event.target.id;
        let mail = {...this.state.mail,[controlId]:event.target.value}

        this.setState({mail})
    }
    handleInputFocus=(event)=>{
        const controlId=event.target.id;
        const mail = {...this.state.mail};
        if(mail[controlId]===null){
            mail[controlId]="";
            this.setState({mail});
        }
    }
    submittedHandler=(e)=>{        
        e.preventDefault();
        const mail= {...this.state.mail};

        if((mail.email&&mail.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i))
            ||(mail.number&&(mail.number.length>9&&mail.number.length<12)))
        {
            this.setState({isSending:true});
            
                try{
                    emailjs.init("user_ceT8GrIQxqxJpP9MYSeUr");
                    emailjs.send("outlook","oxyfera_contact_form",mail)
                        .then(response=>{
                                if (response){
                                    this.setState({isSending:false,isSuccess:true,isError:false});
                                    this.props.showAlert("success");
                                }
                                else
                                    this.handleMailSendError();
                });
                }
                catch(error){
                    this.handleMailSendError();
                    console.log(error);

                }
            }
        
        else {
            alert("Telefon numarası ya da Email adreslerinden en az biri geçerli olmalıdır");
        }
        

    }
    handleMailSendError=()=>{
        this.props.showAlert("danger");
        this.setState({isSending:false,isSuccess:false,isError:true});
    }

    render(){

        let panelBody = (
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
                    <ControlLabel>Mesajınız</ControlLabel>
                    <FormControl 
                        componentClass="textarea"
                        placeholder="Mesajınızı yazınız"
                        onFocus={this.handleInputFocus}
                        onChange={this.handleInputChange}/>       
                </FormGroup>
                <FormGroup>                    
                    <Button type="submit" bsStyle="primary" style={{float:"right",minWidth:"30%"}}>Gönder</Button>      
                </FormGroup>
                </Panel.Body>

        );
        if(this.state.isSending)
            panelBody= <Spinner />

        return (
            
            <form className="ContactForm" onSubmit={this.submittedHandler}>
            
            <Panel bsStyle="info">
                <Panel.Heading>
            <Panel.Title componentClass="h4">Bize Ulaşın:</Panel.Title>
            </Panel.Heading>
                    {panelBody}
                </Panel>
            </form> 
            
        );
    }
}


export default ContactForm;