var page = document.createElement("div")
document.querySelector(".containers").appendChild(page)


function create(t, te) {
    page = document.createElement("div")
    document.querySelector(".containers").appendChild(page)
    var w = document.createElement(t)
    var t = document.createTextNode(te)
    w.appendChild(t)
    return w
}
function add(f1, f2) {
    f1.appendChild(f2)
}

function bs(a) {
    var q = create("h1", "Basic Structure")
    q.classList.add("h1")
    add(page, q)
}
var t = 0
function pc() {

    if (t == 1) {

        for (var i = page.childNodes.length - 1; i >= 0; i--) {
            page.removeChild(page.childNodes[i])
        }

    }
    t = 1
}






















document.querySelectorAll("#it").forEach((w) => {
    w.addEventListener("click", () => {
        document.querySelector(".intro").classList.add("introadd")
        if (w.innerHTML != "Introduction") {
            pc()
            document.querySelector(".intro").classList.remove("introadd")

        } else {
            pc()
            document.querySelector(".intro").classList.remove("introadd")


        }
    })
})


document.querySelectorAll("#field").forEach((e) => {
    e.addEventListener("click", () => {
        if (!e.className.includes("folder")) {
            if (e.innerHTML != "Introduction") {
                document.querySelector(".intro").classList.add("introadd")

                if (e.innerHTML == "Basic Structure") {

                    pc()
                    bs()
                }
                if (e.innerHTML == "Functions") {

                    pc()
                    document.querySelector(".intro").classList.remove("introadd")
                }
                if (e.innerHTML == " connecter") {

                    pc()
                    document.querySelector(".intro").classList.remove("introadd")
                }


                if (e.innerHTML == "Data Types") {

                    pc()
                    document.querySelector(".intro").classList.remove("introadd")
                }
                if (e.innerHTML == "Type Casting") {

                    pc()
                    document.querySelector(".intro").classList.remove("introadd")
                }


                if (e.innerHTML == "String Methods") {

                    pc()
                    document.querySelector(".intro").classList.remove("introadd")
                }
                if (e.innerHTML == "Try-Catch Box") {

                    pc()
                    document.querySelector(".intro").classList.remove("introadd")
                }
                if (e.innerHTML == "SetInterval") {

                    pc()
                    document.querySelector(".intro").classList.remove("introadd")
                } if (e.innerHTML == "SetTimeout") {

                    pc()
                    document.querySelector(".intro").classList.remove("introadd")
                } if (e.innerHTML == "User Input") {

                    pc()
                    document.querySelector(".intro").classList.remove("introadd")
                }
            } else {
                pc()
                document.querySelector(".intro").classList.remove("introadd")

            }
        }
    })
})