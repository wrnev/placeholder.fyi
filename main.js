// Shorthands referencing to the link
let hyperlink = document.getElementById("hyperlink");

// Replaced enable js link now that js is enabled
hyperlink.setAttribute("href","https://youtu.be/dQw4w9WgXcQ");

function linkClicked(event) {
    // Comment when the victim on the rickroll
    console.log("Haha, you clicked!");

    // Changes the lable and direction of the link to the actual repository
    hyperlink.innerHTML = "okay, here's the real repository"
    hyperlink.setAttribute("href","https://github.com/wrnev/placeholder.fyi");
  }