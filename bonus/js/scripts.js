const app = new Vue({
    el: '#main-content',
    data: {
        name: 'Vue Hello App',
        containerClass: 'container flex',
        titolo: 'Vue Hello App',
        imageSrc: 'https://picsum.photos/',
        imageHeight: '300',
        imageWidth: '500',
        imageAlt: 'Immagine casuale da LoremPicsum',
    },
    methods: {
        toUpperCase(text) {
            return text.toUpperCase();
        },
        clickModifyImgDimensions() {
            imgWidth = parseInt(document.getElementById('image-width').value);
            imgHeight = parseInt(document.getElementById('image-height').value);
            if (!isNaN(imgWidth)) {
                this.imageWidth = imgWidth;
            }
            if (!isNaN(imgHeight)) {
                this.imageHeight = imgHeight;
            }
        }
    }
});