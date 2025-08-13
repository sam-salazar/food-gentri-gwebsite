// add buttons that take the user to different sections
// or hide and show said sections

document.getElementById("about_us").addEventListener("click", toggleInfo);

function toggleInfo() {
    const text = document.getElementById("about_content");

    if (text.style.display === "none") {
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
}