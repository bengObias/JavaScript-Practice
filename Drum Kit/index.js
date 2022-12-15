window.addEventListener('keydown', function(e){
    const letter = document.querySelector(`audio[key="${e.key}"]`);
    const keyContainer = document.querySelector(`p[key="${e.key}"]`);
    if(!letter) return;
    letter.currentTime = 0;  //rewind to start
    letter.play();

   

    
    keyContainer.classList.add('animation');
    this.setTimeout(()=>{keyContainer.classList.remove('animation')},1000);
    // keyContainer.classList.remove('animation');
});  