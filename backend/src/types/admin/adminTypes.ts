


export interface AdminSignUpInterface {
    
    fullName : string;
    email : string;
    password : string;
    confirmPassword : string;
    gender : string
}

export interface AdminLoginInterface {
    email : string;
    password : string
}

export interface AdminJwtPayloadInterface {
    adminId : Number;
    iat : number
}

