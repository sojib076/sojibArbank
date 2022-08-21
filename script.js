document.getElementById("submit").addEventListener('click',()=>{
    const input = document.getElementById("input");
    const inputValue = input.value;
    const password = document.getElementById("password");
    const passwordValue = password.value;
    if (inputValue ==='a' && passwordValue ==='a'){
        location.href = "inside.html";
    }else{
        alert("Login Failed");
    }
 
});

