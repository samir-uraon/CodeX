var page = document.createElement("div")
document.querySelector(".containers").appendChild(page)

function create(t) {
  var w = document.createElement(t)
  return w
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
  tes3.className="fa-solid fa-copy"
  add(te4, tes3)


  var tes4 = create("span")
  tes4.className = "copyok"
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

var click4 = (a) => {
  document.querySelector(a).style.top = "120px"
  document.querySelector(a).style.opacity = "1"
  setTimeout(() => {
      document.querySelector(a).style.top = "32px"
      document.querySelector(a).style.opacity = "0"
  }, 1500)
}


function box(a, b, t) {
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
  add(te2, te3)

  var te5 = create("img")
  te5.setAttribute("src", b)
  te5.classList.add("main")
  add(te2, te5)
  add(page, te2)
}

function copypre(b) {
  var w = document.createElement("pre")
  w.innerHTML = b
  var data = w.innerText
  navigator.clipboard.writeText(data)
}


function copytextarea(b) {
  var w = document.createElement("textarea")
  w.innerHTML = b
  var data = w.value
  navigator.clipboard.writeText(data)
}

function createT(t, te) {

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
  var q = createT("h1", "Basic Structure")
  q.classList.add("h1")
  add(page, q)
  var qw = createT("p", "C and C++ has most similar syntax.")
  qw.classList.add("p1")
  var qwt = createT("font", "Like this...")
  qwt.style.color = "red"
  add(qw, qwt)
  add(page, qw)
  var ew=boxcopypre("cbasic",csyn,"C Language")
  ew.addEventListener("click",()=>{
    click4(".cbasic .copyok")})
    ew.addEventListener("click",()=>{
           copytextarea(csyn)})

  var ew2=boxcopypre("cppbasic",cppsyn,"C++ Language")
  ew2.addEventListener("click",()=>{
    click4(".cppbasic .copyok")})
    ew2.addEventListener("click",()=>{
           copytextarea(cppsyn)})

var ou=createT("p","How to C and C++ language compile?")
ou.classList.add("p1")
ou.style.position="relative"
ou.style.top="-250px"
ou.style.color="orange"
add(page,ou)


var ou2=createT("p","Compilar at first convert C or C++ code into Machine Language,then the exe file run our system and execute our programm.")
ou2.classList.add("p1")
ou2.style.position="relative"
ou2.style.left="10px"
ou2.style.width="600px"
ou2.style.top="-250px"
ou2.style.color="blue"
add(page,ou2)

var ou3=createT("p","Now we see how to print any number or string in those languages.")
ou3.classList.add("p1")
ou3.style.position="relative"

ou3.style.width="600px"
ou3.style.top="-250px"
add(page,ou3)

var ew21=boxcopypre("cbasic2",c2,"first.c")
ew21.addEventListener("click",()=>{
  click4(".cbasic2 .copyok")})
  ew21.addEventListener("click",()=>{
         copytextarea(c2)})

var ew2=boxcopypre("cppbasic2",cpp2,"first.c++")
ew2.addEventListener("click",()=>{
  click4(".cppbasic2 .copyok")})
  ew2.addEventListener("click",()=>{
         copytextarea(cpp2)})

var uy=createT("p","At First you open your code editer and create a file with .c or .c++ extension.")
uy.classList.add("p1")
uy.style.marginTop="-74px"
add(page,uy)

var uy1=createT("p","Then copy the code and run your first programm.")
uy1.classList.add("p1")
add(page,uy1)

var uy2=createT("p","If you Do not have any Code Editer,")
var ury=createT("font","Check it Out------>")
ury.style.color="orange"
add(uy2,ury)
uy2.classList.add("p1")

var tre1 = createT("a", "VsCode Installation process")
tre1.href = "https://youtu.be/cu_ykIfBprI?si=zbmFXtJCOy0N2ze9"
tre1.setAttribute("target", "__blank")
tre1.style.color="purple"

add(uy2,tre1)
add(page,uy2)

box("cimg","../static/pics/cimage.png","C Language")

box("cppimg","../static/pics/cppimage.png","C++ Language")

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

var csyn=`#include&lt;stdio.h&gt;
int main(){

// code write area

return 0;
}
`
var cppsyn=`#include&lt;stdio.h&gt;
using namespace std;
int main(){

// code write area

return 0;
}
`

var cpp2=`#include&lt;stdio.h&gt;
using namespace std;
int main(){

cout<&lt;hello world<&ltendl;

string sa="samiruraon";
int a=10

cout<&ltsa<&lt"\\n";
cout<&lta<&ltendl;

return 0;
}
`
var c2=`#include&lt;stdio.h&gt;
using namespace std;
int main(){

printf("hello world\\n"); 

//or printf("%s","hello world\\n")

char sa[]="samiruraon\\n"; 

//char type array  used like a  string in C .

printf("%s\\n",sa);

int a=20;
printf("%d\\n",a);

return 0;
}
`

















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
carr = ["example for c", "example for c++"]
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
carr4 = ["conic",
  "stdlib","built your own module"
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
  if (search.search("e") == 0 || carr.includes(search)) {

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
  if (search.search("i") == 0 || carr2.includes(search)) {

    oneshort(".folder4")
  }
  if (search.search("s") == 0 || carr2.includes(search)) {

    oneshort(".folder4")
  }
  if (search.search("a") == 0 || tarr3.includes(search)) {

    oneshort(".folder5")
  }
  if (search.search("c") == 0 || tarr3.includes(search)) {

    oneshort(".folder5")
  }
  if (search.search("l") == 0 || tarr3.includes(search)) {

    oneshort(".folder5")
  }
  if (search.search("e") == 0 || tarr3.includes(search)) {

    oneshort(".folder5")
  }
  if (search.search(
    "class & ") == 0 || carr3.includes(search)) {

    oneshort(".folder6")
  }
  if (search.search(
    "c") == 0 || carr3.includes(search)) {

    oneshort(".folder6")
  }
  if (search.search("s") == 0 || tarr4.includes(search)) {

    oneshort(".folder7")
  }
  if (search.search("c") == 0 || tarr4.includes(search)) {

    oneshort(".folder7")
  }
  if (search.search("p") == 0 || carr4.includes(search)) {

    oneshort(".folder8")
  }
  if (search.search("pr") == 0 || carr4.includes(search)) {

    oneshort(".folder8")
  }
  if (search.search("bu") == 0 || carr4.includes(search)) {

    oneshort(".folder8")
  }
}


