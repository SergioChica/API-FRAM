export class ClientsEntity {
    constructor(
        public id: string,
        public name: string,
        public email: string,
        public password: string,
        public img?: string,
    ){}
}