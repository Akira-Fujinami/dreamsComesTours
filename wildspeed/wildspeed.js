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
    const imageDescriptionTret = document.getElementById("imageDescription_tret");
    currentFlag = flg;
    if (flg == 'tret') {
        imageDescriptionTret.style.display = "flex";
    }
    const imageDescriptionDominiq = document.getElementById("imageDescription_dominiq");
    if (flg == 'dominiq') {
        imageDescriptionDominiq.style.display = "flex";
    }
    modalImage.src = imageSrc; // モーダルに画像を表示
    modal.style.display = "flex"; // モーダルを表示する
    modalImage.style.width = "70%";
}
function changeImage(direction, flg) {
    const images = flg === 'tret' ? ["トレトのマーケット.png"] : ["オコーナーとドミニクが立ち寄ったお店.png"];
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