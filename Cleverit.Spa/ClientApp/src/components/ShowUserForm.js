import React, {Component, Fragment} from 'react'
import {Button, Modal, ModalHeader, ModalBody} from 'reactstrap'
import UserForm from './UserForm'


class ShowUserForm extends Component{
    // estado que indica si modal esta abierto o cerrado
    state={
        isOpen: false
    }

    // sera pasado como props al form
    toggleModal = () => {
        this.setState(previousState => ({
        isOpen: !previousState.isOpen
    }))
    
    }

    //renderizar un boton junto un componente modal
    render(){
        let button ='';
        let title ='Editar datos del usuario';
        
        if(this.props.isNew){
            title = 'Agregar un nuevo usuario'
            button = <Button color='success' onClick={this.toggleModal}
            style ={{ minWidth:'90px'}}>Agregar</Button> 
        }else{
            button = <Button color='warning' onClick={this.toggleModal}
            style ={{ minWidth:'90px'}}>Editar</Button>
        }
        return <Fragment>
            {button}
            <Modal isOpen={this.state.isOpen}
                toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal}>
                    {title}
                </ModalHeader>
                <ModalBody>
                    <UserForm
                    addUser={this.props.addUser}
                    updateUser={this.props.updateUser}
                    toggle={this.toggleModal}
                    user ={this.props.user}/>
                </ModalBody>
            </Modal>
        </Fragment>
    
    }
        
}

export default ShowUserForm



