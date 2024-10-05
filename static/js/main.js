
var t=1
function downarror(list,items,t){
  var click=document.querySelector(list)


  
 var u=click.innerHTML.substring(click.innerHTML.indexOf("; ")+1,click.innerHTML.length)
click.addEventListener("click",()=>{
    if(t==1){
     click.innerHTML=` | ${u}`
      document.querySelector(items).style.opacity="1"
      document.querySelector(items).style.position="relative"
      document.querySelector(items).style.zIndex="10"
      
  t=0
  }
      else{
        click.innerHTML=`> ${u}`
          document.querySelector(items).style.opacity="0"
          document.querySelector(items).style.position="absolute"
          document.querySelector(items).style.zIndex="-1000"
     t=1
      }
      
  })
}




 
    downarror("#list1",".items1",1)
    downarror("#list2",".items2",1)
    downarror("#list3",".items3",1)
    downarror("#list4",".items4",1)
    downarror("#list5",".items5",1)
    downarror("#list6",".items6",1)
    downarror("#list7",".items7",1)
    downarror("#list8",".items8",1)

function downar(list,items){
      var click=document.querySelector(list)
    
   var u=click.innerHTML

   
 u=click.innerHTML.replaceAll("&gt; ","")
 u=u.replaceAll(" | ","")
      
      
      click.innerHTML=`> ${u}`
      document.querySelector(items).style.opacity="0"
      document.querySelector(items).style.position="absolute"
      document.querySelector(items).style.zIndex="-1000"
      
      downarror("#list1",".items1",1)
      downarror("#list2",".items2",1)
      downarror("#list3",".items3",1)
      downarror("#list4",".items4",1)
      downarror("#list5",".items5",1)
      downarror("#list6",".items6",1)
      downarror("#list7",".items7",1)
      downarror("#list8",".items8",1)
}




document.querySelector("body").addEventListener("keyup",(e)=>{
 if( e.ctrlKey && e.key==="/"){
    
    document.querySelector("#search").focus()
 }
})

var index=1
document.querySelector("#search").addEventListener("input",(e)=>{
   var search=e.target.value.toLowerCase()
  
var details=document.querySelectorAll("#field")
details.forEach((i)=>{
 
  var check =i.innerHTML.toLowerCase()
  
  if(i.innerHTML.includes("</span>")){
check=i.innerHTML.replace(" &gt; ","").toLowerCase()
check=check.substring(check.indexOf(">")+1,check.indexOf("</"))

}

 
  check.includes(search) && check[0]==search[0]?i.classList.remove("hide"):i.classList.add("hide")
 
if(search==""){
  document.querySelectorAll("#field").forEach((i)=>{
    i.classList.remove("hide")
    document.querySelectorAll("#it").forEach((e)=>{
      e.style.textDecoration="none"
      e.style.color="purple"
    })

  })
}


})

})
 
document.querySelector("#search").addEventListener("input",(e)=>{
  var search=e.target.value.toLowerCase()

  
take(search)

})

function start(){

   
   document.querySelectorAll(".icon i").forEach((e)=>{
    
     e.style.transform="translate(0,-50px)"
   e.style.opacity="0"
   })
   setTimeout(()=>{
      document.querySelectorAll(".icon i").forEach((e)=>{
        
        e.style.transform="translate(0,0px)"
      e.style.opacity="1"
      })
    },5000)
}



setInterval(()=>{
  start()
},40000)



document.querySelector("#google").addEventListener("click",()=>{
  // window.open("mailto:gmail.com")
  alert("Not yet social media account linked.")
})

document.querySelector("#youtube").addEventListener("click",()=>{
  // window.open("https://www.youtube.com/")
  alert("Not yet social media account linked.")
})
document.querySelector("#instragram").addEventListener("click",()=>{
  // window.open("https://www.instragram.com/accounts")
  alert("Not yet social media account linked.")
})

document.querySelector("#facebook").addEventListener("click",()=>{
  // window.open("https://developers.facebook.com/micro_site/url/?click_creative_path[0]=link&ums_creative_detail=link%26device_type%3Ddesktop&click_from_context_menu=true&country=IN&destination=https%3A%2F%2Fwww.facebook.com%2Fgroups%2Ffbdevelopers%2F&event_type=click&last_nav_impression_id=1JiBouxmFr3wllsye&max_percent_page_viewed=100&max_viewport_height_px=437&max_viewport_width_px=960&orig_http_referrer=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fdevelopment%2Fbuild-and-test%2Ftest-users%2F&orig_request_uri=https%3A%2F%2Fdevelopers.facebook.com%2Fajax%2Fdocs%2Fnav%2F%3Fpath1%3Ddevelopment%26path2%3Dbuild-and-test%26path3%3Dtest-users&region=apac&scrolled=true&session_id=0ZtdmLb4wwfyd4Q4c&site=developers&extra_data[create_type]=link&extra_data[create_type_detail]=&extra_data[creative_detail]=link%26device_type%3Ddesktop")
  alert("Not yet social media account linked.")
})

document.querySelector("#github").addEventListener("click",()=>{
  // window.open("https://www.github.com/accounts")
  alert("Not yet social media account linked.")
})

var o=1
function change(){
  if(o==1){
 var v=document.createElement("input")
  v.setAttribute("type","button")
  v.setAttribute("value","submit")
  v.classList.add("position")
  v.setAttribute("onclick","dear()")
  document.querySelector(".box").appendChild(v)}
  
  
}

document.querySelector("#question").addEventListener("focusout",()=>{
  if(document.querySelector("#question").value==""){

  document.querySelector(".box").removeChild(document.querySelector(".box").children[1])
  o=1
}else{
  o=0
}
})

function random_function(eve){
  var bool=true
  if(eve.keyCode==13){
    bool=false
  }
  return bool;
}
document.querySelector("#fifth").addEventListener("click",()=>{
          document.querySelector("#fifth").style.textDecoration="underline"
           document.querySelector("#first").style.textDecoration="none"
           document.querySelector("#second").style.textDecoration="none"
           document.querySelector("#forth").style.textDecoration="none"
           document.querySelector("#third").style.textDecoration="none"
          })
          document.querySelector("#forth").addEventListener("click",()=>{
            document.querySelector("#forth").style.textDecoration="underline"
            document.querySelector("#first").style.textDecoration="none"
            document.querySelector("#second").style.textDecoration="none"
            document.querySelector("#fifth").style.textDecoration="none"
            document.querySelector("#third").style.textDecoration="none"
            })
            document.querySelector("#first").addEventListener("click",()=>{
              document.querySelector("#fifth").style.textDecoration="none"
           document.querySelector("#first").style.textDecoration="underline"
           document.querySelector("#second").style.textDecoration="none"
           document.querySelector("#forth").style.textDecoration="none"
           document.querySelector("#third").style.textDecoration="none"
              })
              document.querySelector("#second").addEventListener("click",()=>{
                document.querySelector("#fifth").style.textDecoration="none"
             document.querySelector("#first").style.textDecoration="none"
             document.querySelector("#second").style.textDecoration="underline"
             document.querySelector("#forth").style.textDecoration="none"
             document.querySelector("#third").style.textDecoration="none"
                })

                document.querySelector("#third").addEventListener("click",()=>{
                document.querySelector("#third").style.textDecoration="underline"
           document.querySelector("#first").style.textDecoration="none"
           document.querySelector("#second").style.textDecoration="none"
           document.querySelector("#forth").style.textDecoration="none"
           
          })



document.querySelectorAll("#field").forEach((e)=>{
  e.addEventListener("click",()=>{
    
      // console.log(!e.className.includes("folder"));
      if(e.innerHTML[0]!="<"){
    document.querySelectorAll("#it").forEach((e)=>{
      e.style.textDecoration="none"
      e.style.color="purple"
    })
   }
  })
})

var tcol="black"
var tcol2="blue"
document.querySelectorAll("#field").forEach((e)=>{
  if(e.innerHTML[0]=="<"){
e.addEventListener("click",()=>{
  
    // if(!e.className.includes("folder")){
    //   // console.log(!e.className.includes("folder"));
      
    document.querySelectorAll("#field").forEach((e)=>{
      e.style.textDecoration="none"
      e.style.color=tcol

    })
    
    e.style.textDecoration="underline"
    e.style.color=tcol2
  
  })
}else{
  e.addEventListener("click",()=>{
    
    document.querySelectorAll("#field").forEach((e)=>{
      e.style.textDecoration="none"
      e.style.color=tcol
       
     
      downar("#list1",".items1")
      downar("#list2",".items2")
      downar("#list3",".items3")
      downar("#list4",".items4")
      downar("#list5",".items5")
      downar("#list6",".items6")
      downar("#list7",".items7")
      downar("#list8",".items8")   
    })

    e.style.textDecoration="underline"
    e.style.color=tcol2
  
  })
}
})


document.querySelectorAll("#it").forEach((e)=>{
  e.addEventListener("click",()=>{
    // if(!e.className.includes("folder")){
    //   // console.log(!e.className.includes("folder"));
      
    document.querySelectorAll("#it").forEach((e)=>{
      e.style.textDecoration="none"
      e.style.color="purple"
    })
   
    e.style.textDecoration="underline"
    e.style.color="green"
    document.querySelectorAll("#field").forEach((e)=>{
    
      e.style.textDecoration="none"
      e.style.color=tcol
    })
 
  })
})




function dear(){
    document.querySelector("#question").value=document.querySelector("#question").value.replaceAll(',','')
    document.querySelector("#question").value=""

}




var page=document.querySelector(".content")
var e=0
document.querySelector("#queen").addEventListener("click",()=>{
if(e==1){
  document.querySelector(".card2").style.opacity="0"  
  document.querySelector(".card2").style.transform="scale(0.01)" 
 
    
  e=0
 } else{

 e=1
document.querySelector(".card2").style.opacity="1"  
document.querySelector(".card2").style.transform="scale(1)" 
 } 
})


document.querySelector(".card2 button").addEventListener("click",()=>{
  document.querySelector(".card2").style.opacity="0"  
  document.querySelector(".card2").style.transform="scale(0.01)"
  e=0
 })





document.querySelector("#queen").addEventListener("click",()=>{
  heart()
})
let heart=()=>{
  document.querySelector("#queen").style.animation="none"
  document.querySelector(".fa-inbox").style.animation="none"
  document.querySelector("#queen").style.backgroundColor= "#273956"
  document.querySelector("#queen").style.color="aliceblue"
  document.querySelector("#queen").style.border="2px solid white";
 
  document.querySelector("#queen").style.transform="scale(1.1)";
}

document.querySelector(".card img").src="./static/pics/pic.jpg"
document.querySelector(".link button").classList.add("stop")
var yt=0
function log(){
if(yt==0){
document.querySelector(".card").style.opacity="1"
document.querySelector(".card").style.transform="scale(1)"
yt=1
}
else{
  document.querySelector(".card").style.opacity="0"
document.querySelector(".card").style.transform="scale(0.01)"
yt=0
}
}
document.querySelector("#logout").addEventListener("click",()=>{
 var wq= confirm("Are you sure?")
 if(wq){

  window.close();
 }
})
document.querySelector(".button").addEventListener("click",()=>{
 
  
  
 })
 document.querySelector("#close").addEventListener("click",()=>{
 document.querySelector(".card").style.opacity="0"

  document.querySelector(".card").style.transform="scale(0.01)"
 yt=0
})


document.querySelector("#che").addEventListener("click",()=>{
  if( document.querySelector("#che").checked){
      localStorage.setItem("dark","ok")
      document.querySelectorAll(".intro p").forEach((i)=>{
        i.style.color="cyan"
      })
       document.querySelector("nav").style.background="linear-gradient(to right top,#52b8fe,#6154fe)"
        document.querySelector(".toggle h3").style.color="white"
        document.querySelector(".containers").classList.add("conback")
         document.body.style.backgroundColor="rgb(13, 25, 48)"
         document.querySelector(".label").style.backgroundColor="cornflowerblue"
          document.querySelector(".logo span").style.color="white"
         document.querySelector("input[type='checkbox']").setAttribute("checked","true")
         document.querySelector(".search").style.background="rgba(43, 55, 88,0.2)"
         tcol="white"
         tcol2="white"
          document.querySelectorAll(".search #field").forEach((i)=>{
            i.style.color="white"
      })
}
  else{
      localStorage.removeItem("dark")
      document.querySelector(".containers").classList.remove("conback")
      document.querySelectorAll(".intro p").forEach((i)=>{
        i.style.color="rgb(53, 10, 68)"
      })
      tcol="black"
      tcol2="white"
      document.querySelectorAll(".search #field").forEach((i)=>{
        i.style.color="black"
  })
   document.querySelector("nav").style.background="rgb(134, 134, 230)"
      document.querySelector(".toggle h3").style.color="black"
      document.body.style.backgroundColor="rgb(235, 235, 236)"
      document.querySelector(".label").style.backgroundColor="rgb(80,76,76)"
      document.querySelector(".logo span").style.color="black"
   document.querySelector(".search").style.background="rgb(230, 217, 203)"
window.location.reload()
  }
})


if(localStorage.getItem("dark")=="ok"){
document.querySelectorAll(".intro p").forEach((i)=>{
  i.style.color="cyan"
})
 document.querySelector("nav").style.background="linear-gradient(to right top,#52b8fe,#6154fe)"
  document.querySelector(".toggle h3").style.color="white"
  document.querySelector(".containers").classList.add("conback")
   document.body.style.backgroundColor="rgb(13, 25, 48)"
   document.querySelector(".label").style.backgroundColor="cornflowerblue"
    document.querySelector(".logo span").style.color="white"
   document.querySelector("input[type='checkbox']").setAttribute("checked","true")
   document.querySelector(".search").style.background="rgba(43, 55, 88,0.2)"
   tcol="white"
   tcol2="white"
    document.querySelectorAll(".search #field").forEach((i)=>{
      i.style.color="white"
})
}
var lockeys=Object.keys(localStorage)
lockeys.forEach((i)=>{
if(i!="dark"){
  localStorage.removeItem(i)
}
  
})