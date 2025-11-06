// --- Efek Bintang & Bintang Jatuh (versi perbaikan bentuk tail diagonal ke kanan-bawah) ---
document.addEventListener("DOMContentLoaded", () => {
  const hero = document.querySelector(".hero");

  // Buat 100 bintang kecil acak
  for (let i = 0; i < 100; i++) {
    const star = document.createElement("div");
    star.classList.add("star");
    star.style.top = Math.random() * 100 + "%";
    star.style.left = Math.random() * 100 + "%";
    star.style.animationDelay = Math.random() * 3 + "s";
    hero.appendChild(star);
  }

  // Efek bintang jatuh acak (tail sekarang miring ke kanan bawah)
  setInterval(() => {
    const shootingStar = document.createElement("div");
    shootingStar.classList.add("shooting-star");

    // posisi awal (top acak agar tidak selalu muncul dari titik yg sama)
    shootingStar.style.top = Math.random() * 25 + "%"; // 0% - 25% dari atas
    shootingStar.style.left = Math.random() * 80 + "%"; // berikan variasi horizontal

    // durasi bervariasi agar natural
    const duration = 1.2 + Math.random() * 1.8; // antara ~1.2s sampai ~3s
    shootingStar.style.animationDuration = duration + "s";

    hero.appendChild(shootingStar);

    // Hapus setelah animasi selesai (sedikit buffer)
    setTimeout(() => {
      shootingStar.remove();
    }, (duration * 1000) + 500);
  }, 2200); // setiap ~2.2 detik muncul satu
});


function toggleSkill(id) {
  const skillBox = document.getElementById(id);
  const isVisible = skillBox.style.display === "block";
  
  // Tutup semua skill list dulu
  document.querySelectorAll(".skill-list").forEach(list => list.style.display = "none");

  // Buka yang diklik
  if (!isVisible) {
    skillBox.style.display = "block";
  }
}
