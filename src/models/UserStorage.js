"use strict";

const db = require("../config/db");

class UserStorage{
     static #users ={
        id:["123","1234"],
        psword:["123","1234"],
        name:["1","2"],
    };
    static #getUsers(data,isAll,fields){
        const users = JSON.parse(data);
        if(isAll) return users;
        const newUsers = fields.reduce((newUsers, field)=>{
            if(users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
            
        },{});
        
        return newUsers;
    }
    static getUsers(isAll,...fields){
        // return fs.readFile("./src/databases/users.json")
        //     .then((data) => {
                
        //         return this.#getUsers(data,isAll,fields);
        //     })
        //     .catch(console.error);
        
        
        // const users = this.#users;
        // const newUsers = fields.reduce((newUsers, field)=>{
        //     if(users.hasOwnProperty(field)){
        //         newUsers[field] = users[field];
        //     }
        //     return newUsers;
            
        // },{});
        
        // return newUsers;
    }
    static getUserInfo(id){
        return new Promise((resolve,reject)=>{
            db.query("SELECT * FROM users WHERE id =?",[id],(err,data)=>{
                if(err) reject(err);
                resolve(data[0]);
                console.log(data[0]);
        });
        
        
    });
        //const users=this.#users;
        // return fs.readFile("./src/databases/users.json")
        //     .then((data) => {
                
        //         return this.#getUserInfo(data,id);
        //     })
        //     .catch(console.error);
        // }
    }
        
        // ,(err, data)=>{
        //     if(err) throw err;
        //     console.log(JSON.parse(data));
        //     const users = JSON.parse(data);
        //     const idx=users.id.indexOf(id);
        //     const usersKeys=Object.keys(users);
        //     const userInfo=usersKeys.reduce((newUser,info)=>{
        //         newUser[info]=users[info][idx];
        //         return newUser;
        //     },{})
        //     return userInfo;

        // });
    //     const idx=users.id.indexOf(id);
    //     const usersKeys=Object.keys(users);
    //     const userInfo=usersKeys.reduce((newUser,info)=>{
    //         newUser[info]=users[info][idx];
    //         return newUser;
    //     },{})
    // return userInfo;

    static #getUserInfo(data,id){
        const users = JSON.parse(data);
                const idx=users.id.indexOf(id);
                const usersKeys=Object.keys(users);
                const userInfo=usersKeys.reduce((newUser,info)=>{
                    newUser[info]=users[info][idx];
                    return newUser;
            },{});
            
            return userInfo;

    }
    static async save(userInfo){
        return new Promise((resolve,reject)=>{
            const query = "INSERT INTO users(id, name, psword) VALUES(?, ?, ?);";
            db.query(
                query,
                [userInfo.id,userInfo.name,userInfo.psword],
                (err)=>{
                if(err) reject(err);
                resolve({success:true});
                
        });
    });
        // const users = await this.getUsers(true);
    
        // if(users.id.includes(userInfo.id)){
        //     throw "이미존재하는 아이디입니다";
            
        // }
        // users.id.push(userInfo.id);
        //     users.name.push(userInfo.name);
        //     users.psword.push(userInfo.psword);
        //     fs.writeFile("./src/databases/users.json",JSON.stringify(users));
        //     return{success:true};
        
    }
}
module.exports=UserStorage;
