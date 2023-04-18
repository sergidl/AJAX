let t= document.getElementById("get")

let r=await fetch("https://jsonplaceholder.typicode.com/posts")


t.innerHTML+=r