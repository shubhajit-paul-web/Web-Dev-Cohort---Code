const imageView = document.querySelector(".image-view img");
const images = document.querySelectorAll(".img img");

images.forEach(function(img) {
    img.addEventListener("click", function() {
        imageView.src = img.src;
        console.log(img.src);
        
    });
    
});