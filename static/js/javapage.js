var page = document.createElement("div")
document.querySelector(".containers").appendChild(page)


function createT(t, te) {
    page = document.createElement("div")
    document.querySelector(".containers").appendChild(page)
    var w = document.createElement(t)
    var t = document.createTextNode(te)
    w.appendChild(t)
    return w
}
function create(t) {
  var w = document.createElement(t)
  return w
}
function add(f1, f2) {
    f1.appendChild(f2)
}
function boxcopypre(a, b, t) {
  var te2 = create("div")
  te2.classList.add("text")
  te2.className = a
  var te3 = create("div")
  te3.classList.add("head2")
  var te4 = create("ul")
  te4.classList.add("ul")
  add(te3, te4)
  for (var i = 0; i < 3; i++) {
      var li = create("li")
      li.setAttribute("type", "dot")
      li.className = `one${i + 1}`
      add(te4, li)
  }
  var tesr = createT("p", t)
  tesr.className = "title"
  add(te4, tesr)
  var tes3 = create("i")
  tes3.id = "copy"
  tes3.className = "fa-solid fa-copy"
  add(te4, tes3)


  var tes4 = create("span")
  tes4.className = "copyok1"
  tes4.innerHTML = "copied!"
  add(te3, tes4)

  add(te2, te3)
  var te5 = create("pre")
  te5.style.color = "black"
  te5.innerHTML = b
  te5.classList.add("main1")
  add(te2, te5)
  add(page, te2)
  return tes3
}
function box(a, b) {
  var te2 = create("div")
  te2.classList.add("text")
  te2.className = a
  var te3 = create("div")
  te3.classList.add("head2")
  var te4 = create("ul")
  te4.classList.add("ul")
  add(te3, te4)
  for (var i = 0; i < 3; i++) {
      var li = create("li")
      li.setAttribute("type", "dot")
      li.className = `one${i + 1}`
      add(te4, li)
  }
  add(te2, te3)
  var te5 = create("img")
  te5.setAttribute("src", b)
  te5.classList.add("main")
  add(te2, te5)
  add(page, te2)
}
function copytextarea(b) {
  var w = document.createElement("textarea")
  w.innerHTML = b
  var data = w.value
  navigator.clipboard.writeText(data)
}
var click4 = (a) => {
  document.querySelector(a).style.top = "12px"
  document.querySelector(a).style.opacity = "1"
  setTimeout(() => {
      document.querySelector(a).style.top = "-47px"
      document.querySelector(a).style.opacity = "0"
  }, 1500)
}


function bs() {
    var q = createT("h1", "Basic Structure")
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
               if (e.innerHTML == "User Input") {

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
    , "logical operaters",
    "Example"]
  
  tarr4 = ["Class & Objects",
    "Class Inheritance"
  ]
  carr4 = ["datetime module",
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