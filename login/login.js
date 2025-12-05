document.querySelector("button").addEventListener("click",function(event){
    event.preventDefault();

    const school = document.getElementById("school").value;
    const name = document.getElementById("name").value.trim();
    const id = document.getElementById("numID").value.trim();

    if(!school){
        alert("Please select your school");
        return;
    }
    if(!name){
        alert("Please enter your name");
        return;
    }
    if(!id){
        alert("Please enter your ID");
        return;
    }

    localStorage.setItem("userName", name);

    window.location.href="../rean/rean.html";

});