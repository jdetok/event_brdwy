// display the images in /img/jpg as a gallery display
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export function createGallery() {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch('../img/jpg/images.json');
        const images = yield res.json();
        const container = document.getElementById('gallery'); // MAKE HTML ELEMENT
        if (!container)
            return;
        images.forEach(file => {
            const img = document.createElement('img');
            img.src = `../img/jpg/${file}`;
            img.alt = `failed to create image element: ${file}`;
            img.className = 'gallery-img';
            container.appendChild(img);
        });
    });
}
