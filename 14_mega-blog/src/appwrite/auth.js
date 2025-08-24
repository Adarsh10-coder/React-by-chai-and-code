import conf from '../conf.js';
import { Client, Account, ID } from "appwrite";

export class AuthService{
    client = new Client();
    Account;
    // we can also make Account same as client but we don't bcoz
    // when we make object(authService) then a client has to be created, 
    // then you should have proper account access in hand. When the object
    // is created, the constructor is a method that gets called automatically.

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
          this.account = new Account(this.client);  
    }

    async createAccount({email, password, name}){
        try{
           const userAccount = await this.account.create(ID.unique(), email, password, name); 
           // here at 1st field it is nessesary to take user ID

           if(userAccount){
              // call another method to login if userAccount is exist
              return this.login({email, password});
           }
           else{
              return userAccount;
           }

        }
        catch(error){
            throw error;
        }
    }

    async login({email, password}){
        try{
            return await this.account.createEmailSession(email, password);
        }
        catch(error){
            throw error;
        }
    }

    async getCurrentUser(){
        try{
            return await this.account.get();
        }
        catch(error){
            console.log("Appwrite serive :: getCurrentUser :: error", error);
            // here we done console log not throw bcoz we want to console log
            
        }

        return null;
        // we done this step bcoz if there any problem in try and catch then it will return null
    }

    async logout(){
         try{
            return await this.account.deleteSessions();
        }
        catch(error){
            console.log("Appwrite serive :: logout :: error", error);
        }
    }
}

const authService = new AuthService();

export default authService