import { stripSummaryForJitNameSuffix } from '@angular/compiler/src/aot/util';

export interface Category{
    id: number;
    name: string;
}

export const CATEGORIES =[
    {
        id: 4,
        name: 'Watches'
    },
    {
        id: 1,
        name: 'Braslets'
    },
    {
        id: 2,
        name: 'Rings'
    },{
        id: 3,
        name: 'Glasses'
    }
];