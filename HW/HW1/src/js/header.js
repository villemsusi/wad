function showDropdown() {
    console.log("element clicked")
    let dropdown = document.getElementById("dropdown-content")
    console.log(dropdown.style.display)
    if (dropdown.style.display === "none") {
        dropdown.style.display = "block"
    }
    else {
        dropdown.style.display = "none"
    }
}
