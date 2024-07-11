// https://www.youtube.com/watch?v=qQXXI5QFUfw
// https://youtu.be/qQXXI5QFUfw
// https://youtu.be/qQXXI5QFUfw?si=lAZtp28yhvY4KOYd

searchThumb.addEventListener("click", () => {
  let vidLink = document.querySelector(".inputBox input").value;
  // console.log(vidLink);
  
  if (vidLink == "") {
    alert("Enter a valid link");
    return false;
    
  } else{
    let vidID = '';
    if (vidLink.includes('youtube.com')){
      vidID = vidLink.replace("https://www.youtube.com/watch?v=", "");
    } else if(vidLink.includes('youtu.be')){
      vidID = vidLink.replace('https://youtu.be/', '');
      vidID = vidID.substring(0,11);
    } 

    if(vidID.length != 11){
      alert("Enter a valid link");
      return false;
    }
    // console.log(vidID);
    
    let imgLink = 'https://i.ytimg.com/vi/' + vidID + '/maxresdefault.jpg';
    // console.log(imgLink);
    
    let img = document.getElementById("finalThumb");
    img.src = imgLink;
    
    let downloadThumb = document.getElementById("downloadThumb");
    downloadThumb.style.setProperty("display", "flex");
    downloadThumb.href = imgLink;
    window.scrollBy(0, 580);

  }
})