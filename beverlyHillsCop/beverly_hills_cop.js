let currentImageIndex = 0;
let currentFlag = ''
function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none"; // モーダルを非表示にする
    const modalImage = document.getElementById("modalImage");
    modalImage.src = ""; // 画像のソースを空にして非表示にする
    const imageDescriptionMac = document.getElementById("imageDescription_penny");
    imageDescriptionMac.style.display = "none";
    const imageDescriptionLiyon = document.getElementById("imageDescription_accel");
    imageDescriptionLiyon.style.display = "none";
}

function openModal(imageSrc, flg) {
    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("modalImage");
    const imageDescriptionTobacco = document.getElementById("imageDescription_tobacco");
    currentFlag = flg;
    if (flg == 'tobacco') {
        imageDescriptionTobacco.style.display = "flex";
    }
    const imageDescriptionAccel = document.getElementById("imageDescription_accel");
    if (flg == 'accel') {
        imageDescriptionAccel.style.display = "flex";
    }
    modalImage.src = imageSrc; // モーダルに画像を表示
    modal.style.display = "flex"; // モーダルを表示する
    modalImage.style.width = "70%";
}
function changeImage(direction, flg) {
    const images = flg === 'tobacco' ? ["密輸たばこのトラックのあった路地.png", "密輸たばこのトラックのあった路地2.png"] : ["アクセル・フォーリーのデトロイトのアパート.png", "アクセル・フォーリーのデトロイトのアパート2.png"];
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