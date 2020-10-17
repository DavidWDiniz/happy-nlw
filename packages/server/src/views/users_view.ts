import User from "../models/User";

export default {
    render(users: User) {
        return {
            id: users.id,
            name: users.name,
            email: users.email,
            admin: users.admin,
        };
    },

    renderMany(users: User[]) {
        return users.map(user => this.render(user));
    }
};
