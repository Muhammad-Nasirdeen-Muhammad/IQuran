const audios = document.querySelectorAll("#audio")
const progressBars = document.querySelectorAll("#progressBar")
const playPauseBtns = document.querySelectorAll("#playPauseBtn")
const container = document.querySelector(".container")
const time = document.querySelector(".time")
let audio = Array.from(audios)
let progressBar = Array.from(progressBars)
let playPauseBtn = Array.from(playPauseBtns)
let surahName = ["Al Fatiha", "Al-Baqarah", "Al-Imran", "An-Nisa", "Al-Ma'idah", "Al-An'am", "Al-Araf", "Al-Anfal", "Al-Taubah", "Yunus", "Hud", "Yusuf", "Al Ra'd", "Ibrahim", "AL-Hijr", "Al-Nahl", "Al-Isra", "Al-Kahf", "Maryam", "Ta-Ha", "Al-Anbiya", "Al-Hajj", "Al-Mu'minum", "An-Nur", "Al-Furqan", "Ash-Shu'ara", "Al-Naml", "Al-Qasas", "Al-Ankabut", "Ar-Rum", "Luqman", "Al-Sajdah", "Al-Ahzab", "Saba", "Fatr", "Ya-Sin", "As-Saffaat", "Saad", "Az-Zumar", "Ghafir", "Fusilat", "Ash-Shura", "Az-Zhukruv", "Ad-Dukhan", "Al-Jathiyah", "Al-Ahqaf", "Muhammad", "Al-Fath", "Al-Hujuraat", "Qaf", "Adh-Dhariyat", "At-Tur", "An-Najm", "Qamar", "Ar-Rahman", "Al-Waqi'ah", "Al-Hadid", "Al-Mujadilah", "Al-Hashr", "Al-Mumtahinah", "As-Saff", "Al-Jumu'ah", "Al-Munafiqun", "At-Taghabun", "At-Talaaq", "At-Tahrim", "Al-Mulk", "Al-Qalam", "Al-Haqqah", "Al-Ma'arij", "Nuh", "Al-jinn", "Al-Muzammil", "Al-Muddathir", "Al-Qiyamah", "Al-Insan", "Al-Mursalat", "An-Naba", "An-Nazi'aat", "Abasa", "At-Takwir", "Al-Infitaar", "Al-Mutaffifin", "Al-Inshiqaq", "Al-Burooj", "At-Tariq", "Al-A'la", "Al-Ghaashiyah", "Al-Fajr", "Al-Balad", "Ash-Shams", "Al-Lail", "Ad-Duha", "Ash-Sharh", "At-Tin", "Al-Alaq", "Al-Qadr", "Al-Bayyinah", "Az-Zalzalah", "Al-Aadiyaat", "Al-Qari'ah", "At-takaathur", "Al-Asr", "Al-Humazah", "Al-Fil", "Al-Quraish", "Al-Maa'oon", "Al-Kauthar", "Al-Kafiroon", "An-Nasr", "Al-Masad", "Al-Ikhlaas", "Al-Falaq", "An-Nas"]
console.log(surahName)

document.addEventListener("DOMContentLoaded", () => {
   // container.innerHTML = ""
    surahName.forEach((el, ind) => {
        let AudioHTMLCode = `
        <div class="audio">
        <div class="poster">
            <img src="MechaMinds.jpg" alt="Surah">
        </div>
        <div class="name">
            <h3>${surahName[ind]}</h3>
        </div>
        <div class="control">
            <button id="playPauseBtn">Play</button>
            <input type="range" id="progressBar" value="0" min="0" max="100">
            <p>00:00</p>
            <audio id="audio" src="1.mp3"></audio>
        </div>
    </div>
        `
        setInterval(() => {container.innerHTML += AudioHTMLCode}, 2000)
     })
})

playPauseBtn.forEach((el, ind) => {
   
    el.addEventListener("click", () => {
        ball = el.parentElement
        elProgressBar = ball.querySelector("#progressBar")
        elAudio = ball.querySelector("audio")
        console.log(el)
        
        elProgressBar.max = Math.floor(elAudio.duration)

        elAudio.addEventListener("timeupdate", () => {
            elProgressBar.value = Math.floor(elAudio.currentTime)
            let min = Math.floor(elAudio.currentTime / 60)
            let secs = Math.floor(elAudio.currentTime % 60)
            let AudioLength
            if(min < 10){
                if(secs < 10){
                    AudioLength = `0${min}:0${secs}`
                }
                else{
                    AudioLength = `0${min}:${secs}`
                }
            }
            else{
                if(secs < 10){
                    AudioLength = `${min}:0${secs}`
                }
                else{
                    AudioLength = `${min}:${secs}`
                }
            }
            time.innerHTML = AudioLength
            if(elAudio.ended){
                elProgressBar.value = "0"
                elAudio.currentTime = "0"
                el.textContent = "Play"
            }
        })


        elProgressBar.addEventListener("input", (e) => {
            elAudio.currentTime = e.target.value
        })


        if(elAudio.paused){
            elAudio.play()
            el.textContent = "Pause"           
            console.log(el.textContent)
        }
        else{
            elAudio.pause()
            el.textContent = "Play"
            audio.forEach(elAud => {
                 elAud.pause()
             })
        }

    })
    //console.log("Expected!!")
})