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

function bs() {
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
                if (e.innerHTML == "DateTime") {

                    pc()
                    document.querySelector(".intro").classList.remove("introadd")
                } if (e.innerHTML == "Time") {

                    pc()
                    document.querySelector(".intro").classList.remove("introadd")
                } if (e.innerHTML == "Projects") {

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


function oneshort(target) {
    document.querySelector(target).classList.remove("hide")
    document.querySelector(target).classList.remove("hide")
    document.querySelector(target).classList.remove("hide")
    document.querySelector(target).classList.remove("hide")
    document.querySelector(target).classList.remove("hide")
    document.querySelector(target).classList.remove("hide")
    document.querySelector(target).classList.remove("hide")
    document.querySelector(target).classList.remove("hide")
  }

  
tarr = ["normal function", "function expression", "example"]
carr = ["import", "example"]
tarr2 = ["do-while loop",
  "for loop", "while loop"]
carr2 = ["project1",
  "project2"]
tarr3 = ["switch",
  "if-else", "example"]
carr3 = ["arithmetic operaters",
  "comparision operaters"
  , "logical operaters","conditional operaters",
  "Example"]

tarr4 = ["Class & Objects",
  "Class Inheritance"
]
carr4 = ["datetime module",
  " time baseModule",
  "math module","built your own module"
]
function take(search) {

  if (search.search("n") == 0 || tarr.includes(search)) {

    oneshort(".folder1")
  }
  if (search.search("f") == 0 || tarr.includes(search)) {

    oneshort(".folder1")
  }
  if (search.search("e") == 0 || tarr.includes(search)) {

    oneshort(".folder1")
  }
  if (search.search("e") == 0 || carr.includes(search)) {

    oneshort(".folder2")
  }
  if (search.search("i") == 0 || carr.includes(search)) {

    oneshort(".folder2")
  }
  if (search.search("f") == 0 || tarr2.includes(search)) {

    oneshort(".folder3")
  }
  if (search.search("d") == 0 || tarr2.includes(search)) {

    oneshort(".folder3")
  }
  if (search.search("w") == 0 || tarr2.includes(search)) {

    oneshort(".folder3")
  }
  if (search.search("e") == 0 || tarr2.includes(search)) {

    oneshort(".folder3")
  }
  if (search.search("p") == 0 || carr2.includes(search)) {

    oneshort(".folder8")
  }
  if (search.search("pr") == 0 || carr2.includes(search)) {

    oneshort(".folder8")
  }
  if (search.search("s") == 0 || tarr3.includes(search)) {

    oneshort(".folder4")
  }
  if (search.search("i") == 0 || tarr3.includes(search)) {

    oneshort(".folder4")
  }
  if (search.search("e") == 0 || tarr3.includes(search)) {

    oneshort(".folder4")
  }
  if (search.search("e") == 0 || carr3.includes(search)) {

    oneshort(".folder5")
  }
  if (search.search(
    "a") == 0 || carr3.includes(search)) {

    oneshort(".folder5")
  }
  if (search.search(
    "con") == 0 || carr3.includes(search)) {

    oneshort(".folder5")
  }
  if (search.search("e") == 0 || carr3.includes(search)) {

    oneshort(".folder5")
  }
  if (search.search(
    "c") == 0 || carr3.includes(search)) {

    oneshort(".folder5")
  }
  if (search.search(
    "l") == 0 || carr3.includes(search)) {

    oneshort(".folder6")
  }
  if (search.search("d") == 0 || carr4.includes(search)) {

    oneshort(".folder7")
  }
  if (search.search("m") == 0 || carr4.includes(search)) {

    oneshort(".folder7")
  }
  if (search.search("t") == 0 || carr4.includes(search)) {

    oneshort(".folder7")
  }
  if (search.search("p") == 0 || tarr4.includes(search)) {

    oneshort(".folder8")
  }
  if (search.search("pr") == 0 || tarr4.includes(search)) {

    oneshort(".folder8")
  }
  if (search.search("bu") == 0 || carr4.includes(search)) {

    oneshort(".folder7")
  }
}