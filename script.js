function bukaUndangan() {
    const cover = document.getElementById("cover");
    const content = document.getElementById("content");
    const music = document.getElementById("bgMusic");

    // 🔊 play music
    if (music) {
        music.play();
        localStorage.setItem("musicState", "play");
    }

    // 🎬 animasi keluar
    cover.classList.add("fade-out");

    setTimeout(() => {
        cover.style.display = "none";
        content.style.display = "block";

        document.querySelector(".hero").scrollIntoView({
            behavior: "smooth"
        });
    }, 700);
}