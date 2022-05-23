import { throwToolbarMixedModesError } from "@angular/material/toolbar";

export class User{
    firstName:string = '';
    lastName:string = '';
    birthDate: any;
    street:string = '';
    zipcode: any;
    city: string = '';
    email:string = '';

    constructor(obj?:any){
        this.firstName = obj ? obj.firstName : '';
        this.lastName = obj ? obj.lastName : '';
        this.birthDate = obj ? obj.birthDate : '';
        this.street = obj ? obj.street : '';
        this.zipcode = obj ? obj.zipcode : '';
        this.city = obj ? obj.city : '';
        this.email = obj ? obj.email : '';
    }

    public toJSON(){
        return{
            firstName : this.firstName,
            lastName : this.lastName,
            birthDate : this.birthDate,
            street : this.street,
            zipcode : this.zipcode,
            city : this.city,
            email: this.email
        }
    }
}