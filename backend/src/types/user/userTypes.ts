


export interface UserSignUpInterface {
    
    fullName : string;
    email : string;
    password : string;
    confirmPassword : string;
    gender : string
}

export interface UserLoginInterface {
    email : string;
    password : string
}

export interface JwtPayloadInterface {
    userId : Number;
    iat : number
}

