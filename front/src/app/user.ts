import { Role } from "./role";

export interface User {
    id: number;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    role: Role;
}
export const USER = [
    { id: 1, email: 'admin', password: 'admin', firstName: 'Admin', lastName: 'User', role: Role.Admin },
    { id: 2, email: 'user', password: 'user', firstName: 'Normal', lastName: 'User', role: Role.User }
];