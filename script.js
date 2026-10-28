
const music = document.getElementById("backgroundMusic");
const musicButton = document.getElementById("musicButton");

async function startMusic() {
  if (!music || !musicButton) {
    console.error("Hindi makita ang audio element o music button.");
    return;
  }

  try {
    music.volume = 0.7;
    await music.play();
    musicButton.textContent = "♫ Music: ON";
  } catch (error) {
    console.error("Hindi mapatugtog ang music:", error);
    musicButton.textContent = "♫ Tap to Play";
  }
}

function showPage(pageId) {
  document.querySelectorAll(".page").forEach((page) => {
    page.classList.remove("active");
  });

  const target = document.getElementById(pageId);

  if (target) {
    target.classList.add("active");
  }

  window.scrollTo({
    top: 0,
    behavior: "auto"
  });
}

async function openLetter() {
  showPage("letter");
  await startMusic();
}

async function toggleMusic() {
  if (!music) return;

  if (music.paused) {
    await startMusic();
  } else {
    music.pause();
  }
}

music.addEventListener("play", () => {
  musicButton.textContent = "♫ Music: ON";
});

music.addEventListener("pause", () => {
  musicButton.textContent = "♫ Tap to Play";
});

music.addEventListener("error", () => {
  console.error(
    "Hindi makita o mabasa ang lifetime.mp3. Tingnan ang file name at location."
  );
  musicButton.textContent = "♫ Music Error";
});
