import { makeRe } from 'minimatch';

export interface IPersonDetail {
    id: number;
    name: string;
    description: string;
    age: number;
    img: any;
}
export interface IPersonList {
    data: IPersonDetail[];
}

export const persons: IPersonList = {
    data: [
        { id: 1, name: 'Mr.Abdul-Allah Salem Shantouf', description: 'Lorem imds id for date', age: 45, img: 'personImage.png' },
        { id: 2, name: 'Mr.Abdul-Allah Salem Shantouf', description: 'Lorem imds id for date', age: 15, img: 'personImage.png' },
        { id: 3, name: 'Mr.Abdul-Allah Salem Shantouf', description: 'Lorem imds id for date', age: 25, img: 'personImage.png' },
        { id: 4, name: 'Mr.Abdul-Allah Salem Shantouf', description: 'Lorem imds id for date', age: 65, img: 'personImage.png' },
        { id: 5, name: 'Mr.Abdul-Allah Salem Shantouf', description: 'Lorem imds id for date', age: 22, img: 'personImage.png' },
        { id: 6, name: 'Mr.Abdul-Allah Salem Shantouf', description: 'Lorem imds id for date', age: 62, img: 'personImage.png' },
        { id: 7, name: 'Mr.Abdul-Allah Salem Shantouf', description: 'Lorem imds id for date', age: 62, img: 'personImage.png' },
        { id: 8, name: 'Mr.Abdul-Allah Salem Shantouf', description: 'Lorem imds id for date', age: 62, img: 'personImage.png' },
        { id: 9, name: 'Mr.Abdul-Allah Salem Shantouf', description: 'Lorem imds id for date', age: 62, img: 'personImage.png' },
        { id: 10, name: 'Mr.Abdul-Allah Salem Shantouf', description: 'Lorem imds id for date', age: 62, img: 'personImage.png' },
        { id: 11, name: 'Mr.Abdul-Allah Salem Shantouf', description: 'Lorem imds id for date', age: 62, img: 'personImage.png' },
        { id: 12, name: 'Mr.Abdul-Allah Salem Shantouf', description: 'Lorem imds id for date', age: 62, img: 'personImage.png' },
        { id: 13, name: 'Mr.Abdul-Allah Salem Shantouf', description: 'Lorem imds id for date', age: 62, img: 'personImage.png' },
        { id: 14, name: 'Mr.Abdul-Allah Salem Shantouf', description: 'Lorem imds id for date', age: 62, img: 'personImage.png' },
        { id: 15, name: 'Mr.Abdul-Allah Salem Shantouf', description: 'Lorem imds id for date', age: 62, img: 'personImage.png' },
        { id: 16, name: 'Mr.Abdul-Allah Salem Shantouf', description: 'Lorem imds id for date', age: 62, img: 'personImage.png' },
        { id: 17, name: 'Mr.Abdul-Allah Salem Shantouf', description: 'Lorem imds id for date', age: 62, img: 'personImage.png' },
        { id: 18, name: 'Mr.Abdul-Allah Salem Shantouf', description: 'Lorem imds id for date', age: 62, img: 'personImage.png' },
        { id: 19, name: 'Mr.Abdul-Allah Salem Shantouf', description: 'Lorem imds id for date', age: 62, img: 'personImage.png' },
        { id: 20, name: 'Mr.Abdul-Allah Salem Shantouf', description: 'Lorem imds id for date', age: 62, img: 'personImage.png' },
        { id: 21, name: 'Mr.Abdul-Allah Salem Shantouf', description: 'Lorem imds id for date', age: 62, img: 'personImage.png' },
        { id: 22, name: 'Mr.Abdul-Allah Salem Shantouf', description: 'Lorem imds id for date', age: 62, img: 'personImage.png' },
        { id: 23, name: 'Mr.Abdul-Allah Salem Shantouf', description: 'Lorem imds id for date', age: 62, img: 'personImage.png' },
        { id: 24, name: 'Mr.Abdul-Allah Salem Shantouf', description: 'Lorem imds id for date', age: 62, img: 'personImage.png' },
        { id: 25, name: 'Mr.Abdul-Allah Salem Shantouf', description: 'Lorem imds id for date', age: 62, img: 'personImage.png' },
        { id: 26, name: 'Mr.Abdul-Allah Salem Shantouf', description: 'Lorem imds id for date', age: 62, img: 'personImage.png' },
        { id: 27, name: 'Mr.Abdul-Allah Salem Shantouf', description: 'Lorem imds id for date', age: 62, img: 'personImage.png' },
        { id: 28, name: 'Mr.Abdul-Allah Salem Shantouf', description: 'Lorem imds id for date', age: 62, img: 'personImage.png' },
        { id: 29, name: 'Mr.Abdul-Allah Salem Shantouf', description: 'Lorem imds id for date', age: 62, img: 'personImage.png' },
        { id: 30, name: 'Mr.Abdul-Allah Salem Shantouf', description: 'Lorem imds id for date', age: 62, img: 'personImage.png' },
        { id: 31, name: 'Mr.Abdul-Allah Salem Shantouf', description: 'Lorem imds id for date', age: 62, img: 'personImage.png' },
        { id: 32, name: 'Mr.Abdul-Allah Salem Shantouf', description: 'Lorem imds id for date', age: 62, img: 'personImage.png' },
        { id: 33, name: 'Mr.Abdul-Allah Salem Shantouf', description: 'Lorem imds id for date', age: 62, img: 'personImage.png' },
        { id: 34, name: 'Mr.Abdul-Allah Salem Shantouf', description: 'Lorem imds id for date', age: 62, img: 'personImage.png' },
        { id: 35, name: 'Mr.Abdul-Allah Salem Shantouf', description: 'Lorem imds id for date', age: 62, img: 'personImage.png' },
        { id: 36, name: 'Mr.Abdul-Allah Salem Shantouf', description: 'Lorem imds id for date', age: 62, img: 'personImage.png' },
        { id: 37, name: 'Mr.Abdul-Allah Salem Shantouf', description: 'Lorem imds id for date', age: 62, img: 'personImage.png' },
        { id: 38, name: 'Mr.Abdul-Allah Salem Shantouf', description: 'Lorem imds id for date', age: 62, img: 'personImage.png' },
        { id: 39, name: 'Mr.Abdul-Allah Salem Shantouf', description: 'Lorem imds id for date', age: 62, img: 'personImage.png' },
        { id: 40, name: 'Mr.Abdul-Allah Salem Shantouf', description: 'Lorem imds id for date', age: 62, img: 'personImage.png' },
        { id: 41, name: 'Mr.Abdul-Allah Salem Shantouf', description: 'Lorem imds id for date', age: 62, img: 'personImage.png' },
        { id: 42, name: 'Mr.Abdul-Allah Salem Shantouf', description: 'Lorem imds id for date', age: 62, img: 'personImage.png' },
        { id: 43, name: 'Mr.Abdul-Allah Salem Shantouf', description: 'Lorem imds id for date', age: 62, img: 'personImage.png' },
        { id: 44, name: 'Mr.Abdul-Allah Salem Shantouf', description: 'Lorem imds id for date', age: 62, img: 'personImage.png' },
        { id: 45, name: 'Mr.Abdul-Allah Salem Shantouf', description: 'Lorem imds id for date', age: 62, img: 'personImage.png' },
        { id: 46, name: 'Mr.Abdul-Allah Salem Shantouf', description: 'Lorem imds id for date', age: 62, img: 'personImage.png' },
        { id: 47, name: 'Mr.Abdul-Allah Salem Shantouf', description: 'Lorem imds id for date', age: 62, img: 'personImage.png' },
        { id: 48, name: 'Mr.Abdul-Allah Salem Shantouf', description: 'Lorem imds id for date', age: 62, img: 'personImage.png' },
        { id: 49, name: 'Mr.Abdul-Allah Salem Shantouf', description: 'Lorem imds id for date', age: 62, img: 'personImage.png' },
        { id: 50, name: 'Mr.Abdul-Allah Salem Shantouf', description: 'Lorem imds id for date', age: 62, img: 'personImage.png' },
        { id: 51, name: 'Mr.Abdul-Allah Salem Shantouf', description: 'Lorem imds id for date', age: 62, img: 'personImage.png' },
        { id: 52, name: 'Mr.Abdul-Allah Salem Shantouf', description: 'Lorem imds id for date', age: 62, img: 'personImage.png' },
        { id: 53, name: 'Mr.Abdul-Allah Salem Shantouf', description: 'Lorem imds id for date', age: 62, img: 'personImage.png' },
        { id: 54, name: 'Mr.Abdul-Allah Salem Shantouf', description: 'Lorem imds id for date', age: 62, img: 'personImage.png' },
        { id: 55, name: 'Mr.Abdul-Allah Salem Shantouf', description: 'Lorem imds id for date', age: 62, img: 'personImage.png' },
        { id: 56, name: 'Mr.Abdul-Allah Salem Shantouf', description: 'Lorem imds id for date', age: 62, img: 'personImage.png' },
        { id: 57, name: 'Mr.Abdul-Allah Salem Shantouf', description: 'Lorem imds id for date', age: 62, img: 'personImage.png' },
        { id: 58, name: 'Mr.Abdul-Allah Salem Shantouf', description: 'Lorem imds id for date', age: 62, img: 'personImage.png' },
        { id: 59, name: 'Mr.Abdul-Allah Salem Shantouf', description: 'Lorem imds id for date', age: 62, img: 'personImage.png' },
        { id: 60, name: 'Mr.Abdul-Allah Salem Shantouf', description: 'Lorem imds id for date', age: 62, img: 'personImage.png' }
    ]
};