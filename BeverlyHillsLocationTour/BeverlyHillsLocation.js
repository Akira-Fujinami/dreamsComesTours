let currentImageIndex = 0;
let currentFlag = ''
function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none"; // モーダルを非表示にする
    const modalImage = document.getElementById("modalImage");
    modalImage.src = ""; // 画像のソースを空にして非表示にする
    const imageDescriptionWest = document.getElementById("imageDescription_west");
    imageDescriptionWest.style.display = "none";
    const imageDescriptionBeach = document.getElementById("imageDescription_beach");
    imageDescriptionBeach.style.display = "none";
}

function openModal(imageSrc, flg) {
    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("modalImage");
    const imageDescriptionWest = document.getElementById("imageDescription_west");
    currentFlag = flg;
    if (flg == 'west') {
        imageDescriptionWest.style.display = "flex";
    }
    const imageDescriptionBeach = document.getElementById("imageDescription_beach");
    if (flg == 'beach') {
        imageDescriptionBeach.style.display = "flex";
    }
    modalImage.src = imageSrc; // モーダルに画像を表示
    modal.style.display = "flex"; // モーダルを表示する
    modalImage.style.width = "40%";
}

function changeImage(direction, flg) {
    let images;

    // flgの値に応じて画像リストを設定
    if (flg === 'west') {
        images = ["ウエストビバリーヒルズ高校1.png", "ウエストビバリーヒルズ高校2.png"];
    } else if (flg === 'beach') {
        images = ["ビーチハウス.png"];
    } else if (flg === 'enniss') {
        images = ["エニスハウス.png"];
    } else {
        console.error("Invalid flag value");
        return;
    }

    // インデックスを変更
    currentImageIndex += direction;

    // インデックスを範囲内に制限
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    } else if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }

    // モーダルに新しい画像を表示
    const modalImage = document.getElementById("modalImage");
    modalImage.src = images[currentImageIndex];
}
