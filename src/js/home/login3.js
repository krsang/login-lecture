"use strict"



console.log("hellow");
const id = document.querySelector("#id"),
    psword= document.querySelector("#psword"),
    
    
    btnlog = document.querySelector("#btnlog");
    btnlog.addEventListener("click",btn3);
    function btn3(){
        const req={
            id:id.value,
            psword:psword.value,
            
        };
        console.log(req);
        console.log(JSON.stringify(req));
    
        fetch("/login.html",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body: JSON.stringify(req),
        })
        .then((res)=>res.json())
        .then((res)=>{
            if (res.success){
                location.href="/";
            }else{
                alert(res.msg);
            }
        })
        .catch((err)=>{
            console.error("로그인 중 에러 발생");
        });

        }
        
    
   