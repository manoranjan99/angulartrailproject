export class profilemodel
{

    Firstname:string;
    Lastname:string;
    Gender:string;
    Phonenumber:string;
    Email:string;
    Password:string;


    constructor(firstname:string,lastname:string,gender:string,phonenumber:string,email:string,password:string){

        this.Firstname=firstname;
        this.Lastname=lastname;
        this.Gender=gender;
        this.Phonenumber=phonenumber;
        this.Email=email;
        this.Password=password;

    }

    get getfirstname():string
    {
        return this.Firstname;
    }

    get getlastname():string
    {
        return this.Lastname;
    }

    get getgender():string{

        return this.Gender;
    }

    get getphonenumber():string{

        return this.Phonenumber;
    }

    get getemail():string{

        return this.Email;
    }

    get getpassword():string{

        return this.Password;
    }



    setfirstname(firstname:string):void{

        this.Firstname=firstname;
    }

    setlastname(lastname:string):void{

        this.Lastname=lastname;
    }

    setgender(gender:string):void{

        this.Gender=gender;
    }

    setphonenumber(phonenumber:string):void{

        this.Phonenumber=phonenumber;
    }

    setemail(email:string):void{

        this.Email=email;
    }

    setpassword(password:string):void{

        this.Password=password;
    }

}