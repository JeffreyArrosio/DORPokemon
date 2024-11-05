document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('musica')
    audio.muted = false;
    audio.play()
})

const aside = document.getElementById("aside2")

aside.addEventListener('click', () =>{
    console.log("click");
    const enlace = document.getElementById("ad")
    enlace.click()
})