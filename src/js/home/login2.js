"use strict"



console.log("hellow res");
const id = document.querySelector("#id"),
    psword= document.querySelector("#psword"),
    name2=document.querySelector("#name"),
    
    
    registerBtn = document.querySelector("button");
    registerBtn.addEventListener("click",btn3);
    function btn3(){
        if(!id.value) return alert("아이디를 입력해주세요");
        if(!psword.value)return alert("비밀번호를 입력해주세요");
        if(!name2.value)return alert("이름을입력해주세요");
        const req={
            id:id.value,
            psword:psword.value,
            name:name2.value,
            
        };
        
        
    
        fetch("/form.html",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body: JSON.stringify(req),
        })
        .then((res)=>res.json())
        .then((res)=>{
            if (res.success){
                location.href="/login.html";
            }else{
                alert(res.msg);
            }
        })
        .catch((err)=>{
            console.error("로그인 중 에러 발생");
        });

        }
        
    
   

