// manipulastion Node
// 1. .document.createElement()
// buat elemen baru -> rangkai -> letakan elemen baru

// 1 buat elemen p baru beserta text nya
const p3baru = document.createElement('p');
p3baru.style.color = 'red';
p3baru.style.backgroundColor = 'lightblue';
const textP3baru = document.createTextNode('ini adalah baru p3');
// 2 rangkai elemen baru
p3baru.appendChild(textP3baru);
// 3 seleksi tempat yang akan diletekan elemen baru
const sectionA = document.getElementById('a');
// 4 letakkan elemen baru yang tadi dibuat 
sectionA.appendChild(p3baru);





// 2. .document.createTextNode()
// 3. .node.appendChild()
// 4. .node.insertBefore()
// 5. .parentNode.removeChild()
// 6. .parentNode.replaceChild()