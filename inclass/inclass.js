document.getElementById("logo").addEventListener("click",function(event){
    event.preventDefault();
    window.location.href="../rean/rean.html";
});

const name = localStorage.getItem("userName");

    
document.getElementById("welcomeText").textContent = "Hello, " + name + "!";

const params = new URLSearchParams(window.location.search);
const subject = params.get("subject");

if (subject) {
    document.getElementById("classTitle").textContent = `${subject} 12A`;
}
    