// display the images in /img/jpg as a gallery display

export async function createGallery() {
    const res = await fetch('../img/jpg/images.json');
    const images: string[] = await res.json();

    const container = document.getElementById('gallery'); // MAKE HTML ELEMENT
    if (!container) return;

    images.forEach(file => {
        const img = document.createElement('img');
        img.src = `../img/jpg/${file}`;
        img.alt = `failed to create image element: ${file}`;
        img.className = 'gallery-img';
        container.appendChild(img);
    });
}