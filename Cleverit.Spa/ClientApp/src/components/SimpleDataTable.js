import React, {Component} from 'react'
import {Table} from 'reactstrap'
import ShowUserForm from './ShowUserForm'

const TableHeader =() => {
    return (
        <thead className='thead-dark'>
            <tr>
                <th>Id</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Usuario</th>
                <th colSpan='2'>Acciones</th>
            </tr>
    </thead>
    )
}

const TableBody = (props) => {
    let tableRows = <tr>
        <td colSpan='6' align='center'>
            <b><i>No hay productos definidos</i></b>
        </td>
    </tr>


    if (props.usersData && props.usersData.length  > 0) {
    tableRows = props.usersData.map((user, index) => {
        return (
            <tr key={user.id}>
                <th>{user.id}</th>
                <th>{user.name}</th>
                <th>{user.lastName}</th>
                <th>{user.username}</th>
                <th> 
                    <button color='danger' onClick={()=> props.removeUser(user.id)}
                        className='btn btn-primary'>
                        Eliminar
                    </button>                    
                </th>
                <th>
                    <div>
                        <ShowUserForm
                            isNew={false}
                            user={user}
                            updateUser={props.updateUser}/>
                    </div>
                </th>                
            </tr>            
        )
    }
        )
    }
    return (
        <tbody>{tableRows}</tbody>        
    )
}

class SimpleDataTable extends Component {
    render(){
        return (
            <Table striped style={{'margin-top':'20px'}}>
                <TableHeader/>
                <TableBody usersData={this.props.usersData}
                    removeUser={this.props.removeUser}
                    updateUser={this.props.updateUser}/>
            </Table>
        )
    }
}

export default SimpleDataTable
