"use strict"
const UserStorage = require("../../models/UserStorage");
const User = require("../../models/User");

const output={
    home: (req, res)=>{
        res.render("home/index");
    },
    login2: (req, res)=>{
        res.render("home/login2");
    },
    logintest: (req, res)=>{
        res.render("home/logintest");
    },
    product:(req,res)=>{
        res.render("home/prdt.ejs");
    }
    
};
const process={
    login:async(req,res)=>{
        const user = new User(req.body);
        const response = await user.login();
        
        return res.json(response);
        
                
    },
    register:async(req,res)=>{
        const user = new User(req.body);
        const response = await user.register();
        return res.json(response);

    }

    
        
};
                
module.exports={
    output,
    process,
    
};