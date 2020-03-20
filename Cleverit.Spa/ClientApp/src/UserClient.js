const baseApiUrl = '../../api/user'

class UsersClient {
    static async getUsers() {
        let users = [];
        try {
            const response = await fetch(baseApiUrl);
            users = await response.json();
        }
        catch (error) {
            console.log("el error es"+error);
        }
        return users;
    }

    static async addUser(user) {
        let newUser = {};
        try {
            const response = await fetch(baseApiUrl, {
                method: 'post',
                headers: {
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(user)
            });
            newUser = await response.json();
        }
        catch (error) {
            console.log("el error es"+error);
        }
        return newUser;
    }

    static async updateUsers(user) {       
        try {
          await fetch(`${baseApiUrl}/${user.id}`, {
                method: 'put',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            });          
        }
        catch (error) {
            console.log("el error es"+error);
        }       
    }

    static async removeUser(id) {
        try {
            await fetch(`${baseApiUrl}/${id}`, {
                method: 'delete',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }
        catch (error) {
            console.log("el error es"+error);
        }
    }
}

export default UsersClient