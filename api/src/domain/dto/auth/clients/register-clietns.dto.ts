import { Validators } from '../../../../config'

export class RegisterClientDto {
    private constructor(
        
        public name: string,
        public email: string,
        public address: string,
        public password: string,
    ){}

        static create( object: {[ key: string]: any;}): [ string?, RegisterClientDto?] {

            const { name, email, password, address } = object;

            if ( !name ) return [ 'Missing name' ];
            if ( !email ) return [ 'Missing email' ];
            if ( !address ) return [ 'Missing address' ];
            if ( !Validators.email.test( email ) ) return [ 'Email is not valid '];
            if ( !password ) return [ 'Missing password' ];
            if ( password.length < 6 ) return [ 'Password too short ' ];
            
            return [
                undefined,
                new RegisterClientDto(name, email, address , password)
            ];
        }
}