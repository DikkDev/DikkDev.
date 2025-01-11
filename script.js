// Mengatur tampilan konten berdasarkan button yang dipilih
function showContent(contentId) {
    const contents = document.querySelectorAll('.content');
    
    contents.forEach(content => {
        // Jika konten yang sudah ada tidak sama dengan yang dipilih, beri kelas hide
        if (content.id !== contentId) {
            content.classList.remove('active');
            content.classList.add('hide'); // Konten menghilang ke atas
        }
    });

    const content = document.getElementById(contentId);
    content.classList.remove('hide'); // Hapus kelas hide jika ada
    content.classList.add('active'); // Tampilkan konten yang dipilih
}

// Mengatur agar klik di luar konten untuk menutup
window.addEventListener('click', (event) => {
    const isContentArea = event.target.closest('.content, .links');
    if (!isContentArea) {
        const contents = document.querySelectorAll('.content');
        contents.forEach(content => {
            content.classList.remove('active');
            content.classList.add('hide'); // Konten menghilang dengan animasi
        });
    }
});