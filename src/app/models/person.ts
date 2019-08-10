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
        { id: 1112, name: 'Mr.Abdul-Allah Salem Shantouf', description: 'Lorem imds id for date', age: 45, img: 'personImage.png' },
        { id: 1113, name: 'Mr.Abdul-Allah Salem Shantouf', description: 'Lorem imds id for date', age: 15, img: 'personImage.png' },
        { id: 1114, name: 'Mr.Abdul-Allah Salem Shantouf', description: 'Lorem imds id for date', age: 25, img: 'personImage.png' },
        { id: 1115, name: 'Mr.Abdul-Allah Salem Shantouf', description: 'Lorem imds id for date', age: 65, img: 'personImage.png' },
        { id: 1116, name: 'Mr.Abdul-Allah Salem Shantouf', description: 'Lorem imds id for date', age: 22, img: 'personImage.png' },
        { id: 1117, name: 'Mr.Abdul-Allah Salem Shantouf', description: 'Lorem imds id for date', age: 62, img: 'personImage.png' },
        { id: 1117, name: 'Mr.Abdul-Allah Salem Shantouf', description: 'Lorem imds id for date', age: 62, img: 'personImage.png' },
        { id: 1117, name: 'Mr.Abdul-Allah Salem Shantouf', description: 'Lorem imds id for date', age: 62, img: 'personImage.png' },
        { id: 1117, name: 'Mr.Abdul-Allah Salem Shantouf', description: 'Lorem imds id for date', age: 62, img: 'personImage.png' },
        { id: 1117, name: 'Mr.Abdul-Allah Salem Shantouf', description: 'Lorem imds id for date', age: 62, img: 'personImage.png' },
        { id: 1117, name: 'Mr.Abdul-Allah Salem Shantouf', description: 'Lorem imds id for date', age: 62, img: 'personImage.png' },
        { id: 1117, name: 'Mr.Abdul-Allah Salem Shantouf', description: 'Lorem imds id for date', age: 62, img: 'personImage.png' },
        { id: 1117, name: 'Mr.Abdul-Allah Salem Shantouf', description: 'Lorem imds id for date', age: 62, img: 'personImage.png' },
        { id: 1117, name: 'Mr.Abdul-Allah Salem Shantouf', description: 'Lorem imds id for date', age: 62, img: 'personImage.png' },
        { id: 1117, name: 'Mr.Abdul-Allah Salem Shantouf', description: 'Lorem imds id for date', age: 62, img: 'personImage.png' },
        { id: 1117, name: 'Mr.Abdul-Allah Salem Shantouf', description: 'Lorem imds id for date', age: 62, img: 'personImage.png' },
        { id: 1117, name: 'Mr.Abdul-Allah Salem Shantouf', description: 'Lorem imds id for date', age: 62, img: 'personImage.png' },
        { id: 1117, name: 'Mr.Abdul-Allah Salem Shantouf', description: 'Lorem imds id for date', age: 62, img: 'personImage.png' },
        { id: 1117, name: 'Mr.Abdul-Allah Salem Shantouf', description: 'Lorem imds id for date', age: 62, img: 'personImage.png' },
        { id: 1117, name: 'Mr.Abdul-Allah Salem Shantouf', description: 'Lorem imds id for date', age: 62, img: 'personImage.png' },
        { id: 1117, name: 'Mr.Abdul-Allah Salem Shantouf', description: 'Lorem imds id for date', age: 62, img: 'personImage.png' },
        { id: 1117, name: 'Mr.Abdul-Allah Salem Shantouf', description: 'Lorem imds id for date', age: 62, img: 'personImage.png' },
        { id: 1117, name: 'Mr.Abdul-Allah Salem Shantouf', description: 'Lorem imds id for date', age: 62, img: 'personImage.png' },
        { id: 1117, name: 'Mr.Abdul-Allah Salem Shantouf', description: 'Lorem imds id for date', age: 62, img: 'personImage.png' },
        { id: 1117, name: 'Mr.Abdul-Allah Salem Shantouf', description: 'Lorem imds id for date', age: 62, img: 'personImage.png' },
        { id: 1117, name: 'Mr.Abdul-Allah Salem Shantouf', description: 'Lorem imds id for date', age: 62, img: 'personImage.png' },
        { id: 1117, name: 'Mr.Abdul-Allah Salem Shantouf', description: 'Lorem imds id for date', age: 62, img: 'personImage.png' },
        { id: 1117, name: 'Mr.Abdul-Allah Salem Shantouf', description: 'Lorem imds id for date', age: 62, img: 'personImage.png' },
        { id: 1117, name: 'Mr.Abdul-Allah Salem Shantouf', description: 'Lorem imds id for date', age: 62, img: 'personImage.png' },
        { id: 1117, name: 'Mr.Abdul-Allah Salem Shantouf', description: 'Lorem imds id for date', age: 62, img: 'personImage.png' },
        { id: 1117, name: 'Mr.Abdul-Allah Salem Shantouf', description: 'Lorem imds id for date', age: 62, img: 'personImage.png' },
        { id: 1117, name: 'Mr.Abdul-Allah Salem Shantouf', description: 'Lorem imds id for date', age: 62, img: 'personImage.png' },
        { id: 1117, name: 'Mr.Abdul-Allah Salem Shantouf', description: 'Lorem imds id for date', age: 62, img: 'personImage.png' },
        { id: 1117, name: 'Mr.Abdul-Allah Salem Shantouf', description: 'Lorem imds id for date', age: 62, img: 'personImage.png' },
        { id: 1117, name: 'Mr.Abdul-Allah Salem Shantouf', description: 'Lorem imds id for date', age: 62, img: 'personImage.png' },
        { id: 1117, name: 'Mr.Abdul-Allah Salem Shantouf', description: 'Lorem imds id for date', age: 62, img: 'personImage.png' },
        { id: 1117, name: 'Mr.Abdul-Allah Salem Shantouf', description: 'Lorem imds id for date', age: 62, img: 'personImage.png' },
        { id: 1117, name: 'Mr.Abdul-Allah Salem Shantouf', description: 'Lorem imds id for date', age: 62, img: 'personImage.png' },
        { id: 1117, name: 'Mr.Abdul-Allah Salem Shantouf', description: 'Lorem imds id for date', age: 62, img: 'personImage.png' },
        { id: 1117, name: 'Mr.Abdul-Allah Salem Shantouf', description: 'Lorem imds id for date', age: 62, img: 'personImage.png' },
        { id: 1117, name: 'Mr.Abdul-Allah Salem Shantouf', description: 'Lorem imds id for date', age: 62, img: 'personImage.png' },
        { id: 1117, name: 'Mr.Abdul-Allah Salem Shantouf', description: 'Lorem imds id for date', age: 62, img: 'personImage.png' },
        { id: 1117, name: 'Mr.Abdul-Allah Salem Shantouf', description: 'Lorem imds id for date', age: 62, img: 'personImage.png' },
        { id: 1117, name: 'Mr.Abdul-Allah Salem Shantouf', description: 'Lorem imds id for date', age: 62, img: 'personImage.png' },
        { id: 1117, name: 'Mr.Abdul-Allah Salem Shantouf', description: 'Lorem imds id for date', age: 62, img: 'personImage.png' },
        { id: 1117, name: 'Mr.Abdul-Allah Salem Shantouf', description: 'Lorem imds id for date', age: 62, img: 'personImage.png' },
        { id: 1117, name: 'Mr.Abdul-Allah Salem Shantouf', description: 'Lorem imds id for date', age: 62, img: 'personImage.png' },
        { id: 1117, name: 'Mr.Abdul-Allah Salem Shantouf', description: 'Lorem imds id for date', age: 62, img: 'personImage.png' },
        { id: 1117, name: 'Mr.Abdul-Allah Salem Shantouf', description: 'Lorem imds id for date', age: 62, img: 'personImage.png' },
        { id: 1117, name: 'Mr.Abdul-Allah Salem Shantouf', description: 'Lorem imds id for date', age: 62, img: 'personImage.png' },
        { id: 1117, name: 'Mr.Abdul-Allah Salem Shantouf', description: 'Lorem imds id for date', age: 62, img: 'personImage.png' },
        { id: 1117, name: 'Mr.Abdul-Allah Salem Shantouf', description: 'Lorem imds id for date', age: 62, img: 'personImage.png' },
        { id: 1117, name: 'Mr.Abdul-Allah Salem Shantouf', description: 'Lorem imds id for date', age: 62, img: 'personImage.png' },
        { id: 1117, name: 'Mr.Abdul-Allah Salem Shantouf', description: 'Lorem imds id for date', age: 62, img: 'personImage.png' },
        { id: 1117, name: 'Mr.Abdul-Allah Salem Shantouf', description: 'Lorem imds id for date', age: 62, img: 'personImage.png' },
        { id: 1117, name: 'Mr.Abdul-Allah Salem Shantouf', description: 'Lorem imds id for date', age: 62, img: 'personImage.png' },
        { id: 1117, name: 'Mr.Abdul-Allah Salem Shantouf', description: 'Lorem imds id for date', age: 62, img: 'personImage.png' },
        { id: 1117, name: 'Mr.Abdul-Allah Salem Shantouf', description: 'Lorem imds id for date', age: 62, img: 'personImage.png' },
        { id: 1117, name: 'Mr.Abdul-Allah Salem Shantouf', description: 'Lorem imds id for date', age: 62, img: 'personImage.png' },
        { id: 1117, name: 'Mr.Abdul-Allah Salem Shantouf', description: 'Lorem imds id for date', age: 62, img: 'personImage.png' },
        { id: 1117, name: 'Mr.Abdul-Allah Salem Shantouf', description: 'Lorem imds id for date', age: 62, img: 'personImage.png' },
    ]
};