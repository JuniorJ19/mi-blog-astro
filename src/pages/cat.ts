async function getCatImage() {
    const res = await fetch("https://api.thecatapi.com/v1/images/search");
    const data = await res.json();
    const catImageUrl = data[0].url;
    return catImageUrl;
}

export const setupCatImageButton = async () => {
    const button = document.getElementById("cat-image-button");
    const catImage = document.getElementById("cat-image") as HTMLImageElement;
    
    if (button && catImage) {
        button.addEventListener("click", async () => {
            const imageUrl = await getCatImage();
            catImage.src = imageUrl;
        });
    }
}