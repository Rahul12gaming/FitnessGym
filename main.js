function move()
{
    document.getElementById("upp").addEventListener("click",()=>{
        window.scrollTo(0,0)
    })
}
   function toogleBar()
   {
        document.getElementById("sidebar").classList.toggle("active");
   }




window.addEventListener('scroll',()=>
{
    if(window.scrollY>0)
    {
        console.log("scroll");
        document.getElementById("navlist").classList.add("sticky");
    }
    else
    {
        document.getElementById("navlist").classList.remove("sticky");
    }
    //const navbar=document.getElementById('navbar').classList.toggle('sticky',window.screenY > 0)
   
});