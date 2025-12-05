document.getElementById("logo").addEventListener("click",function(event){
    event.preventDefault();
    window.location.href="../rean/rean.html";
});

const name = localStorage.getItem("userName");

    
document.getElementById("welcomeText").textContent = "Hello, " + name + "!";
    