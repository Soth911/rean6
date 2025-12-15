const name = localStorage.getItem("userName");

    
document.getElementById("welcomeText").textContent = "Hello, " + name + "!";
    
    
document.querySelectorAll("button[data-subject]").forEach(button => {
    button.addEventListener("click", () => {
        const subject = button.dataset.subject;
        window.location.href = `../inclass/inclass.html?subject=${subject}`;
    });
});
