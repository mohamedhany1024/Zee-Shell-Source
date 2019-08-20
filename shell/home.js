function power() {
    let bg = document.getElementById("menu");
    let power = document.getElementById("powerMenu");
    if (power.style.display === "none") {
        power.style.display = "block";
        power.classList.toggle("powerOption--activated");
        
    } else {
        power.style.display = "none";
        
    }
}