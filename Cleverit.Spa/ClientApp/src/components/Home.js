import React, { Component } from 'react'
import SimpleDataTable from './SimpleDataTable'
import ShowUserForm from './ShowUserForm'
import UsersClient from '../UserClient'

class Home extends Component {
    // contendra propiedades
    state = {
        users: []
    }

    //Operaciones CRUD
    async componentDidMount() {
        const usersData = await UsersClient.getUsers();
        this.setState({ users: usersData});
    }

    // equivalente
    //componentDidMount() {
    //    UsersClient.getUsers()
    //        .then(users => 
    //            this.setState({
    //                users: usersData
    //            }))
    //}

    

    //agregar un producto nuevo
    addUser = user => {
        UsersClient.addUser({
            name: user.name,
            lastName: user.lastName,
            username: user.username
        })
            //cuando regrese
            .then(newUser => this.setState(previous => ({
                users: [...previous.users, newUser]
            })))       
    }

    //modificar creando una copia del arreglo en la propiedad
    updateUser = user => {
        UsersClient.updateUsers({
            id: user.id,
            name: user.name,
            lastName: parseFloat(user.lastName),
            username: parseInt(user.username)
        })
            .then(() => {
                const newUsers = this.state.users.slice();
                const index = newUsers.findIndex(p => p.id === user.id);
                newUsers[index] = user;
                this.setState({ users: newUsers })
            });
    }

    // Filter devuelve los datos bajo la condicción definida
    // En este caso muestra todos los que tienen un id distinto
    removeUser = userId => {
        UsersClient.removeUser(userId)
            .then(() => {
                const newUsers =
                    this.state.users.filter((user, i) => {
                        return userId !== user.id
                    })
                this.setState({
                    users: newUsers
                })
            })       
    }
    render() {
        return (
            <div className='container'>
                <SimpleDataTable
                    usersData={this.state.users}
                    removeUser={this.removeUser}
                    updateUser={this.updateUser} />
                <ShowUserForm isNew={true}
                    addUser={this.addUser} />
            </div>
        )
    }
}

export default Home

