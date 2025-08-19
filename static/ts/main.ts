// main ts listener file
import * as gallery from "./gallery.js"

document.addEventListener('DOMContentLoaded', async() => {
    await gallery.createGallery();
});
