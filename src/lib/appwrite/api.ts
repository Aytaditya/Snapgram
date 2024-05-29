import { ID } from "appwrite";
import { account } from "./config"; //account utility we established earlier

type INewUser={
    name:string;
    username:string;
    email:string;
    password:string;

}

export async function createUserAccount(user:INewUser) {
    try {
        
        const newAccount=await account.create(
            ID.unique(),
            user.email,
            user.password,
            user.name,
            
        )
        return newAccount;

    } catch (error) {
        console.error(error);
        return error;
    }
}