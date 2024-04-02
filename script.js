
//for menu bar

let content = document.getElementById('content')

function menu(){
    content.classList.toggle('show');
}
//for focus

function focusView() {
    document.getElementById("middle").scrollIntoView({
        behavior: "smooth"
    });

}
