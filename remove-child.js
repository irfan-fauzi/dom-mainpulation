// removeChild ada 2 hal, select parent, select elemen yang akan dihapus

// select parent 
const sectionA = document.getElementById('a');
// select elemen yang akan dihapus
const href = sectionA.querySelector('a');
// hapus elemen
sectionA.removeChild(href);