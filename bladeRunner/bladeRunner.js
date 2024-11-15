let currentImageIndex = 0;
let currentFlag = ''
function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none"; // モーダルを非表示にする
    const modalImage = document.getElementById("modalImage");
    modalImage.src = ""; // 画像のソースを空にして非表示にする
    const imageDescriptionBlad = document.getElementById("imageDescription_blad");
    imageDescriptionBlad.style.display = "none";
    const imageDescriptionUnion = document.getElementById("imageDescription_union");
    imageDescriptionUnion.style.display = "none";
}

function openModal(imageSrc, flg) {
    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("modalImage");
    const imageDescriptionBlad = document.getElementById("imageDescription_blad");
    currentFlag = flg;
    if (flg == 'blad') {
        imageDescriptionBlad.style.display = "flex";
    }
    const imageDescriptionUnion = document.getElementById("imageDescription_union");
    if (flg == 'union') {
        imageDescriptionUnion.style.display = "flex";
    }
    const imageDescriptionEnniss = document.getElementById("imageDescription_enniss");
    if (flg == 'enniss') {
        imageDescriptionEnniss.style.display = "flex";
    }
    modalImage.src = imageSrc; // モーダルに画像を表示
    modal.style.display = "flex"; // モーダルを表示する
    modalImage.style.width = "40%";
}
function changeImage(direction, flg) {
    let images;

    // flgの値に応じて画像リストを設定
    if (flg === 'blad') {
        images = ["ブラッドベリー・ビルディング1.png", "ブラッドベリー・ビルディング2.png", "ブラッドベリー・ビルディング3.png"];
    } else if (flg === 'union') {
        images = ["ユニオンステーション.png"];
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
