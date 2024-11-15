let currentImageIndex = 0;
let currentFlag = ''
function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none"; // モーダルを非表示にする
    const modalImage = document.getElementById("modalImage");
    modalImage.src = ""; // 画像のソースを空にして非表示にする
    const imageDescriptionMojave = document.getElementById("imageDescription_mojave");
    imageDescriptionMojave.style.display = "none";
    const imageDescriptionPinacl = document.getElementById("imageDescription_pinacl");
    imageDescriptionPinacl.style.display = "none";
}

function openModal(imageSrc, flg) {
    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("modalImage");
    const imageDescriptionMojave = document.getElementById("imageDescription_mojave");
    currentFlag = flg;
    if (flg == 'mojave') {
        imageDescriptionMojave.style.display = "flex";
    }
    const imageDescriptionPinacl = document.getElementById("imageDescription_pinacl");
    if (flg == 'pinacl') {
        imageDescriptionPinacl.style.display = "flex";
    }
    modalImage.src = imageSrc; // モーダルに画像を表示
    modal.style.display = "flex"; // モーダルを表示する
    modalImage.style.width = "70%";
}
function changeImage(direction, flg) {
    const images = flg === 'mojave' ? ["モハベ宇宙港.png"] : ["トローナ・ピナクル.png"];
    currentImageIndex += direction; // インデックスを変更

    // インデックスを範囲内に制限
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1; // 最後の画像に戻る
    } else if (currentImageIndex >= images.length) {
        currentImageIndex = 0; // 最初の画像に戻る
    }

    // モーダルに新しい画像を表示
    const modalImage = document.getElementById("modalImage");
    modalImage.src = images[currentImageIndex];
}