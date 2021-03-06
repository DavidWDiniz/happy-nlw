import React, {createContext, useCallback, useContext, useState} from "react";

import api from "../services/api";

interface User {
    id: string;
    name: string;
    email: string;
}

interface AuthState {
    token: string;
    user: User;
}

interface SignInCredentials {
    email: string;
    password: string;
}

interface AuthContextData {
    user: User;
    signIn(credentials: SignInCredentials): Promise<void>;
    signOut(): void;
}

const Auth = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({children}) => {
    const [data, setData] = useState<AuthState>(() => {
        const token = localStorage.getItem("@Happy:token");
        const user = localStorage.getItem("@Happy:user");

        if (token && user) {
            api.defaults.headers.authorization = `Bearer ${token}`;
            return {token, user: JSON.parse(user)};
        }

        return {} as AuthState;
    });

    const signIn = useCallback(async ({email, password}) => {
        const response = await api.post("login", {
            email,
            password
        });
        const {token, user} = response.data;
        localStorage.setItem("@Happy:token", token);
        localStorage.setItem("@Happy:user", JSON.stringify(user));

        api.defaults.headers.authorization = `Bearer ${token}`;

        setData({token, user});
    }, []);

    const signOut = useCallback(() => {
        localStorage.removeItem("@Happy:token");
        localStorage.removeItem("@Happy:user");
        setData({} as AuthState);
    }, []);

    return (
        <Auth.Provider value={{user: data.user, signIn, signOut}}>
            {children}
        </Auth.Provider>
    );
}

export function useAuth(): AuthContextData {
    const context = useContext(Auth);

    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}
