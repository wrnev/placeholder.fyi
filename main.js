// Shorthands referencing to the link
let hyperlink = document.getElementById("hyperlink");

// Replaced enable js link now that js is enabled, showing the repo in the link preview
hyperlink.setAttribute("href","https://github.com/wrnev/placeholder.fyi");

function linkClicked(event) {
    // Comment when the victim on the rickroll
    console.log("Haha, you clicked!");

    // Changes the lable and direction of the link to the rickroll before the interface can show it
    hyperlink.setAttribute("href","https://youtu.be/dQw4w9WgXcQ");

    // Sets the link to be normal after this interaction
    setTimeout(function() {
        hyperlink.innerHTML = "Okay, heres the real repository";
        hyperlink.setAttribute("href","https://github.com/wrnev/placeholder.fyi");
        hyperlink.setAttribute("id","");
    }, 200); 
  }