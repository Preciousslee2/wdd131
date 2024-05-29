document.addEventListener('DOMContentLoaded',function(){
    //set footer currentyear
    document.getElementById('2024').textContent=new Date().getFullYear();
    
    //set footer last modified date
    document.getElementById("lastModified").textContent=document.lastModified;
})