document.addEventListener('copy', function(e) {
    e.preventDefault(); // Mencegah salinan
});

document.addEventListener('selectstart', function(e) {
    e.preventDefault(); // Mencegah pemilihan teks
});
