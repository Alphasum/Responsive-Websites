document.addEventListener('DOMContentLoaded', () => {
    const videoBtn = document.getElementById('video')
    const videooverlayMenu = document.getElementById('videooverlay')

    const toggleMenu = () => {
        videooverlayMenu.classList.toggle('hidden')
        videoBtn.classList.toggle('toggle-btn')
    }

    videoBtn.addEventListener('click', toggleMenu)
    videooverlayMenu.addEventListener('click', toggleMenu)
})


const videomenu = () => {
    const videolink = document.getElementById('videolink').innerText
    console.log(videolink)
    const iframevideo = document.getElementById('iframevideo')
    iframevideo.setAttribute('src', videolink)
}