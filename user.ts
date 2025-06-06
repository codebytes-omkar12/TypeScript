type UserName={
    name?:string;
    id?:number;
}

type newUser=UserName & {
    email?:string;
}

const pratham:newUser ={
     
}

//both the above codes do the same thing

type  UserName1={
    name:string;
    id:number;
    email:string;
}

const newUser:Partial<UserName1>={

}