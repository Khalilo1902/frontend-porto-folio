export interface IUser{
    _id:string,
    firstName:string,
    lastName:string,
    email:string,
    password:string,
    confirmPassword:string,
    isAdmin:boolean,
    verifyAccount:boolean
}

export type TUser = Partial<IUser>