import React, {Component} from 'react'
import {Button, Form, FormGroup, Input, Label} from 'reactstrap'

class UserForm extends Component {
    state = {
        id:0,
        name: '',
        lastName:'',
        username:''
    }

    //cuando el componente ya se monto
    componentDidMount(){
        //quiere modificar los datos de un producto
        if(this.props.user)
        this.setState({
            id: this.props.user.id,
            name: this.props.user.name,
            lastName: this.props.user.lastName,
            username: this.props.user.username
        })}


        //con esto detectamos los cambios que haya hecho el usuario
        onChange = e => {
            this.setState({
                [e.target.name] :e.target.value
            })
        }

        //capturar producto nuevo
        onSubmitNew = e => {
            e.preventDefault();
            this.props.addUser(this.state);
            this.props.toggle();
        }

        //capturar cuando es una edicion
        onSubmitUpdate = e => {
            e.preventDefault();
            this.props.updateUser(this.state);
            this.props.toggle();
        }

        render(){
            return(
                <Form onSubmit={this.props.user ? 
                    this.onSubmitUpdate : this.onSubmitNew}>
                        <FormGroup>
                            <Label for='id'>Id: </Label>
                            <Input type='text' name='id' readOnly
                                onChange={this.onChange}
                                value={this.state.id}/>        
                        </FormGroup>
                        <FormGroup>
                            <Label for='name'>Nombre: </Label>
                            <Input type='text' name='name' 
                                onChange={this.onChange}
                                value={this.state.name}/>        
                        </FormGroup>
                        <FormGroup>
                            <Label for='lastName'>Apellido </Label>
                            <Input type='text' name='lastName' 
                                onChange={this.onChange}
                                value={this.state.lastName}/>        
                        </FormGroup>
                        <FormGroup>
                            <Label for='username'>Usuario: </Label>
                            <Input type='text' name='username' 
                                onChange={this.onChange}
                                value={this.state.username}/>        
                        </FormGroup>
                        <Button>
                            {this.props.user ? 'Guardar' : 'Crear'}
                        </Button>
                    </Form>            
            )
        }    

    }


export default UserForm