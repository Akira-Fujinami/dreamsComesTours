let currentImageIndex = 0;
let currentFlag = ''
function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none"; // モーダルを非表示にする
    const modalImage = document.getElementById("modalImage");
    modalImage.src = ""; // 画像のソースを空にして非表示にする
    const imageDescriptionRobert = document.getElementById("imageDescription_robert");
    imageDescriptionRobert.style.display = "none";
    const imageDescriptionGarage = document.getElementById("imageDescription_garage");
    imageDescriptionGarage.style.display = "none";
}

function openModal(imageSrc, flg) {
    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("modalImage");
    const imageDescriptionRobert = document.getElementById("imageDescription_robert");
    currentFlag = flg;
    if (flg == 'robert') {
        imageDescriptionRobert.style.display = "flex";
    }
    const imageDescriptionGarage = document.getElementById("imageDescription_garage");
    if (flg == 'garage') {
        imageDescriptionGarage.style.display = "flex";
    }
    modalImage.src = imageSrc; // モーダルに画像を表示
    modal.style.display = "flex"; // モーダルを表示する
    modalImage.style.width = "70%";
}