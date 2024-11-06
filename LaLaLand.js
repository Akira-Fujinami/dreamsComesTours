let currentImageIndex = 0;
let currentFlag = ''
function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none"; // モーダルを非表示にする
    const modalImage = document.getElementById("modalImage");
    modalImage.src = ""; // 画像のソースを空にして非表示にする
    const imageDescriptionMac = document.getElementById("imageDescription_angel");
    imageDescriptionMac.style.display = "none";
    const imageDescriptionLiyon = document.getElementById("imageDescription_grand");
    imageDescriptionLiyon.style.display = "none";
}

function openModal(imageSrc, flg) {
    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("modalImage");
    const imageDescriptionAngel = document.getElementById("imageDescription_angel");
    currentFlag = flg;
    if (flg == 'angel') {
        imageDescriptionAngel.style.display = "flex";
    }
    const imageDescriptionGrand = document.getElementById("imageDescription_grand");
    if (flg == 'grand') {
        imageDescriptionGrand.style.display = "flex";
    }
    modalImage.src = imageSrc; // モーダルに画像を表示
    modal.style.display = "flex"; // モーダルを表示する
    modalImage.style.width = "70%";
}