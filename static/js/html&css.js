var page = document.createElement("div")
document.querySelector(".containers").appendChild(page)


function createT(t, te) {
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

function copytextarea(b) {
    var w = document.createElement("textarea")
    w.innerHTML = b
    var data = w.value
    navigator.clipboard.writeText(data)
}

function copypre(b) {
    var w = document.createElement("pre")
    w.innerHTML = b
    var data = w.innerText
    navigator.clipboard.writeText(data)
}

function boxcopy(a, b) {
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

    var tes3 = create("i")
    tes3.id = "copy"
    tes3.className = "fa-solid fa-copy"
    add(te4, tes3)


    var tes4 = create("span")
    tes4.className = "copyok"
    tes4.innerHTML = "copied!"
    add(te3, tes4)

    add(te2, te3)
    var te5 = create("img")
    te5.setAttribute("src", b)
    te5.classList.add("main")
    add(te2, te5)
    add(page, te2)
    return tes3
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

function editer() {
    var te2 = create("div")
    te2.classList.add("text")
    te2.className = "editer"
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
    var tes3 = create("ul")
    var e = "HTMLEditer"
    for (var i = 0; i < 10; i++) {
        var li = create("li")
        li.setAttribute("type", "none")
        li.innerHTML = e[i]
        add(tes3, li)
    }
    tes3.classList.add("editertext")
    add(te4, tes3)

    add(te2, te3)
    var te5 = create("textarea")

    te5.classList.add("main")
    add(te2, te5)
    add(page, te2)
}


function run(b) {
    var te2 = create("div")
    te2.classList.add("text")
    te2.className = "runner"
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
    var te = document.querySelector(".editer textarea").value
    var w = te.substring(te.indexOf("<title>"), te.indexOf("</title>")).replace("<title>", "")

    var tesr = createT("p", w)
    tesr.className = "title"
    add(te4, tesr)
    var tes3 = create("button")
    tes3.innerHTML = "RUN"
    tes3.classList.add("editerbutton")
    add(te4, tes3)

    add(te2, te3)
    var te5 = create("body")
    te5.innerHTML = b
    te5.classList.add("main")
    add(te2, te5)
    add(page, te2)
    return { tesr, te5 }
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

    var q1 = createT("p", "HTML is a skeleton of webpage , CSS is skin of this skeleton and JS is Brain of skeleton.")
    q1.classList.add("p1")
    add(page, q1)

    var q2 = createT("p", "HTML(Hyper Text Markup Language) is a combination of Tags.")
    q2.classList.add("p1")
    add(page, q2)
    var te = document.createElement("font")
    te.style.color = "rgb(255, 100,20)"
    te.appendChild(document.createTextNode("The basic structure of HTML like this : "))
    q2.appendChild(te)
    var tes2 = boxcopy("basichtml", "../static/pics/basichtml.png")
    tes2.addEventListener("click", () => {
        click4(".copyok")
    })
    tes2.addEventListener("click", () => {
        copytextarea(basic)
    })


    var dy = createT("p", "We write all elements or tags of webpage under html tag.  HTML and html are same, like as HEAD , head are same.")
    dy.classList.add("p1")
    add(page, dy)


    box("basic2", "../static/pics/basic2.png")

    var wqr = createT("h1", "First Webpage")
    wqr.classList.add("h12")
    add(page, wqr)

    var ter = boxcopypre("basic3", basic3, "first.html")
    ter.addEventListener("click", () => {
        click4(".copyok1")
    })

    ter.addEventListener("click", () => {
        copypre(basic3)
    })



    var q12 = createT("p", "First You create a file with .html extension in your code editer like notepad,vscode then write or copy this code  and save.")
    q12.classList.add("p2")
    add(page, q12)

    var q13 = createT("p", "After that open the file in your browser.")
    q13.classList.add("p2")
    add(page, q13)
    var wq = createT("h2", "OUTPUT : ")
    wq.style.color = "#01a9fd"
    add(page, wq)

    box("output", "../static/pics/basic3.png")

    var tre1 = createT("a", "VsCode Installation process")
    tre1.href = "https://youtu.be/cu_ykIfBprI?si=zbmFXtJCOy0N2ze9"
    tre1.setAttribute("target", "__blank")
    tre1.style.position = "relative"
    tre1.style.top = "-20px"
    tre1.style.left = "460px"
    tre1.style.fontSize = "16px"
    tre1.style.color = "purple"
    add(page, tre1)


}

function tip() {
    var qw1 = createT("h1", "Try it yourself")
    qw1.classList.add("h1")
    add(page, qw1)

    editer()
    document.querySelector(".editer textarea").innerHTML = `
 <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
hello world
</body>
</html>`
    var a = run(document.querySelector(".editer textarea").value)


    document.querySelector(".editerbutton").onclick = () => {
        compiler(a.tesr, a.te5)
    }
}


function basicpro() {
    var twe = createT("h1", "Project 1")
    twe.classList.add("h1")
    add(page, twe)
    var tte = createT("p", "At First you Create a html file with .html extension and a css file with .css extension in same folder.")
    tte.classList.add("p1")
    add(page, tte)
    var wqe = createT("p", "The final view of our project Like this :)")
    wqe.classList.add("p1")
    wqe.style.color = "rgb(10,25,200)"
    add(page, wqe)
    box("basicimg1", "../static/pics/bascicprofirst.png")
    var tteq = createT("p", "Now i create card.html and card.css")
    tteq.classList.add("p1")
    add(page, tteq)
    var tes2 = boxcopypre("basicp1", basicprohtml, "card.html")

    tes2.addEventListener("click", () => {
        click4(".basicp1 .copyok1")
    })
    tes2.addEventListener("click", () => {
        copytextarea(basicprohtml)
    })
    var wqo = createT("p", "Download Requirements Images --> ")
    wqo.classList.add("p1")
    var qwe = createT("a", "back.jpeg")
    qwe.style.color = "blue"
    qwe.setAttribute("download", "back.jpeg")
    qwe.setAttribute("href", "../static/pics/back.jpeg")
    add(wqo, qwe)
    add(page, wqo)
    var wqo1 = createT("p", "After that the image move to working directory/folder. ")
    wqo1.classList.add("p1")
    wqo1.style.color = "brown"
    add(page, wqo1)
    var tes4 = boxcopypre("basicpc1", basicprocss, "card.css")

    tes4.addEventListener("click", () => {
        click4(".basicpc1 .copyok1")
    })
    tes4.addEventListener("click", () => {
        copytextarea(basicprocss)
    })





}





function compiler(a, b) {
    b.innerHTML = document.querySelector(".editer textarea").value
    var te = document.querySelector(".editer textarea").value
    var w = te.substring(te.indexOf("<title>"), te.indexOf("</title>")).replace("<title>", "")
    a.innerHTML = w
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











const basic = `&lt;!DOCTYPE html&gt;
    &lt;html lang=&quot;en&quot;&gt;
    &lt;head&gt;
        &lt;meta charset=&quot;UTF-8&quot;&gt;
        &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
        &lt;title&gt;Document&lt;/title&gt;
    &lt;/head&gt;
    &lt;body&gt;
        
    &lt;/body&gt;
    &lt;/html&gt;`


const basic3 = `
&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
&lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot;&gt;
    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
    &lt;title&gt;Document&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    Normal Text
    &lt;h1&gt;Heading Text H1&lt;/h1&gt;
    &lt;p align=&quot;center&quot;&gt;This is center text&lt;/p&gt;
    &lt;p&gt;&lt;b&gt;&lt;u&gt;This text containe paragraph tag,bold tag,underline tag&lt;/u&gt;&lt;/b&gt;&lt;/p&gt;
    &lt;font color=&quot;green&quot;&gt;This text use font tag&lt;/font&gt;
    &lt;br&gt;
    &lt;font face=&quot;monospace&quot;&gt;This Text also use font tag&lt;/font&gt;
&lt;/body&gt;
&lt;/html&gt;`


var first = `
&lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot;&gt;
    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
    &lt;title&gt;Document&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;Heading Text H1&lt;/h1&gt;
&lt;/body&gt;
&lt;/html&gt;`


var basicprohtml = `&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
&lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot;&gt;
    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
    &lt;title&gt;Document&lt;/title&gt;
    &lt;link rel=&quot;stylesheet&quot; href=&quot;basic.css&quot;&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;div class=&quot;card4&quot;&gt;
        &lt;div class=&quot;center&quot;&gt;
            &lt;div class=&quot;head&quot;&gt;
                &lt;h2&gt;Credit&lt;/h2&gt;
                &lt;h1&gt;visa&lt;/h1&gt;
            &lt;/div&gt;
            &lt;div class=&quot;bot&quot;&gt;
                &lt;h2&gt;samir uraon&lt;/h2&gt;
                &lt;p&gt;2376-5602-1938-3848&lt;/p&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;`

var basicprocss = `@import url(&#039;https://fonts.googleapis.com/css2?family=Maven+Pro:wght@400..900&display=swap&#039;);
*{
        padding: 0;
        margin: 0;
}
.card4{
     width: 100vw;
        height: 100vh;
        background-color: rgb(192, 200, 200);
        
/* display: grid;
place-items: center; */
display: flex;
justify-content: center;
align-items: center;
    }
.center{
width: 300px;
height: 150px;
background:linear-gradient(to right top,#52b6fe,#6154fe);
border-radius: 16px;
box-shadow: 4px 7px 50px rgba(43, 42, 42, 0.445),5px 8px 23px rgba(85, 83, 83, 0.329);
/* box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
        0 6.7px 5.3px rgba(0, 0, 0, 0.048),
        0 12.5px 10px rgba(0, 0, 0, 0.06),
        0 22.3px 17.9px rgba(0, 0, 0, 0.072),
        0 41.8px 33.4px rgba(0, 0, 0, 0.086),
        0 100px 80px rgba(0,0,0,0.12); */

padding: 30px;
position: relative;
}
.center .head{
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
color: #fff;
}
.center .head h2{
font-size:14px;
letter-spacing: 2px;
font-weight: 300;
z-index: 4;
}
.center .head h1{
font-size:30px;
text-align: right;
text-transform: uppercase;
z-index: 4;
}
.center .bot{
position: absolute;
bottom: 20px;
}
.center .bot h2{
font-size: 16px;
font-weight: 300;
text-transform: capitalize;
color: #dfe6e9;
margin-bottom: 8px;
letter-spacing: 4px;
z-index: 2;
}
.center .bot p{
color: #fff;
z-index: 2;
}
.center::before{
content: &quot;&quot;;
position: absolute;
width: 100%;
height: 100%;
top: 0%;
left:0%;
border-radius: 16px;
/* background: linear-gradient(90deg, rgb(85, 85, 214) , rgb(83, 160, 232) ); */
clip-path: polygon(0 0, 100% 0, 100% 20%, 100% 99%, 85% 63%, 61% 46%, 46% 20%);
background-image:url(&quot;back.jpeg&quot;) ;
/* background-size: cover; */
background-size: 40%,40%;
background-repeat: repeat;
z-index: 1;
opacity: 0.3;
}
   `














document.querySelectorAll("#it").forEach((w) => {
    w.addEventListener("click", () => {
        document.querySelector(".intro").classList.add("introadd")
        if (w.innerHTML == "Pure HTML &amp; css Project") {

            pc()
            basicpro()
        } else {
            document.querySelector(".intro").classList.remove("introadd")
            pc()

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
                if (e.innerHTML == "Server") {

                    pc()
                    document.querySelector(".intro").classList.remove("introadd")
                }
                if (e.innerHTML == "DataBase") {

                    pc()
                    document.querySelector(".intro").classList.remove("introadd")
                }


                if (e.innerHTML == "HTML Editer") {

                    pc()
                    tip()
                }
                if (e.innerHTML == "Id and Class") {

                    pc()
                    document.querySelector(".intro").classList.remove("introadd")
                }
                if (e.innerHTML == "Import Icons") {
                    pc()
                    document.querySelector(".intro").classList.remove("introadd")
                }
                if (e.innerHTML == "Import Fonts") {
                    pc()
                    document.querySelector(".intro").classList.remove("introadd")
                }
                if (e.innerHTML == "Hosting") {
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

tarr = ["br", "hr", "img", "i"]
carr = ["html&css", "html&cjs"]
tarr2 = ["Attributes of Font tag",
    "Attributes of P tag"]
carr2 = ["Email Validation",
    "Multiple-Pages-ADD",
    "Signup & Login System"]
tarr3 = ["Basic",
    "Moderate"]
carr3 = ["Pure HTML Project"
    , "Pure HTML & css Project",
    "Pure HTML & JS Project",
    "HTML,CSS & JS Project"]
tarr4 = ["Basic"
    , "Example"]
carr4 = ["Basic",
    "Moderate",
    "Location Object",
    "History Object"]
function take(search) {

    if (search.search("b") == 0 || tarr.includes(search)) {

        oneshort(".folder1")
    }
    if (search.search("h") == 0 || tarr.includes(search)) {

        oneshort(".folder1")
    }
    if (search.search("i") == 0 || tarr.includes(search)) {

        oneshort(".folder1")
    }
    if (search.search("im") == 0 || tarr.includes(search)) {

        oneshort(".folder1")
    }
    if (search.search("ht") == 0 || carr.includes(search)) {

        oneshort(".folder2")
    }
    if (search.search("ht") == 0 || carr.includes(search)) {

        oneshort(".folder2")
    }
    if (search.search("attributes of f") == 0 || tarr2.includes(search)) {

        oneshort(".folder3")
    }
    if (search.search("attributes of p") == 0 || tarr2.includes(search)) {

        oneshort(".folder3")
    }
    if (search.search("b") == 0 || tarr2.includes(search)) {

        oneshort(".folder4")
    }
    if (search.search("m") == 0 || tarr2.includes(search)) {

        oneshort(".folder4")
    }
    if (search.search("e") == 0 || carr2.includes(search)) {

        oneshort(".folder5")
    }
    if (search.search("mu") == 0 || carr2.includes(search)) {

        oneshort(".folder5")
    }
    if (search.search("s") == 0 || carr2.includes(search)) {

        oneshort(".folder5")
    }
    if (search.search("p") == 0 || carr3.includes(search)) {

        oneshort(".folder6")
    }
    if (search.search(
        "pure html & c") == 0 || carr3.includes(search)) {

        oneshort(".folder6")
    }
    if (search.search(
        "pure html,css & js p") == 0 || carr3.includes(search)) {

        oneshort(".folder6")
    }
    if (search.search("basic") == 0 || carr4.includes(search)) {

        oneshort(".folder8")
    }
    if (search.search("mode") == 0 || carr4.includes(search)) {

        oneshort(".folder8")
    }
    if (search.search("l") == 0 || carr4.includes(search)) {

        oneshort(".folder8")
    }
    if (search.search("h") == 0 || carr4.includes(search)) {

        oneshort(".folder8")
    }
}