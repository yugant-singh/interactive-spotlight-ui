addEventListener("mousemove", function(e){
   console.log(e.clientX,e.clientY)
   document.body.style.setProperty("--x", e.clientX+'px');
   document.body.style.setProperty("--y", e.clientY+'px');
})
window.addEventListener("click", () => {
  const video = document.querySelector("video");
  video.muted = false; 
  video.play();
});
