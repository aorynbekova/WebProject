import { getMaxListeners } from 'cluster';

export interface User{
    id: number;
    username: string;
    email: string;
    password: string;
}

export const USER =[
{
    id:1,
    username: 'user',
    email: 'user@getMaxListeners.com',
    password: 'user'
}
]