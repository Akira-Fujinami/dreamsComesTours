let currentImageIndex = 0;
let currentFlag = ''
function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none"; // モーダルを非表示にする
    const modalImage = document.getElementById("modalImage");
    modalImage.src = ""; // 画像のソースを空にして非表示にする
    const imageDescriptionMac = document.getElementById("imageDescription_mac");
    imageDescriptionMac.style.display = "none";
    const imageDescriptionLiyon = document.getElementById("imageDescription_liyon");
    imageDescriptionLiyon.style.display = "none";
    const imageDescriptionBattle = document.getElementById("imageDescription_battle");
    imageDescriptionBattle.style.display = "none";
    const imageDescriptionSkate = document.getElementById("imageDescription_skate");
    imageDescriptionSkate.style.display = "none";
    const imageDescriptionDoc = document.getElementById("imageDescription_doc");
    imageDescriptionDoc.style.display = "none";
    const imageDescriptionHill = document.getElementById("imageDescription_hill");
    imageDescriptionHill.style.display = "none";
    const imageDescriptionTwin = document.getElementById("imageDescription_twin");
    imageDescriptionTwin.style.display = "none";
    const imageDescriptionParty = document.getElementById("imageDescription_party");
    imageDescriptionParty.style.display = "none";
}

function openModal(imageSrc, flg) {
    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("modalImage");
    const imageDescriptionMac = document.getElementById("imageDescription_mac");
    currentFlag = flg;
    if (flg == 'mac') {
        imageDescriptionMac.style.display = "flex";
    }
    const imageDescriptionLiyon = document.getElementById("imageDescription_liyon");
    if (flg == 'liyon') {
        imageDescriptionLiyon.style.display = "flex";
    }
    const imageDescriptionBattle = document.getElementById("imageDescription_battle");
    if (flg == 'battle') {
        imageDescriptionBattle.style.display = "flex";
    }
    const imageDescriptionSkate = document.getElementById("imageDescription_skate");
    if (flg == 'skate') {
        imageDescriptionSkate.style.display = "flex";
    }
    const imageDescriptionDoc = document.getElementById("imageDescription_doc");
    if (flg == 'doc') {
        imageDescriptionDoc.style.display = "flex";
    }
    const imageDescriptionHill = document.getElementById("imageDescription_hill");
    if (flg == 'hill') {
        imageDescriptionHill.style.display = "flex";
    }
    const imageDescriptionTwin = document.getElementById("imageDescription_twin");
    if (flg == 'twin') {
        imageDescriptionTwin.style.display = "flex";
    }
    const imageDescriptionParty = document.getElementById("imageDescription_party");
    if (flg == 'party') {
        imageDescriptionParty.style.display = "flex";
    }
    modalImage.src = imageSrc; // モーダルに画像を表示
    modal.style.display = "flex"; // モーダルを表示する
    modalImage.style.width = "40%";
}
function changeImage(direction, flg) {
    let images;

    // flgの値に応じて画像リストを設定
    if (flg === 'mac') {
        images = ["マクフライ家.png", "マクフライ家2.png"];
    } else if (flg === 'liyon') {
        images = ["リヨン団地.png"];
    } else if (flg === 'battle') {
        images = ["バトル・オブ・ザ・バンドのオーディション会場.png", "バトル・オブ・ザ・バンドのオーディション会場2.png"];
    } else if (flg === 'skate') {
        images = ["オープニングでマーティが出てきたシーン.png", "オープニングでマーティが出てきたシーン2.png"];
    } else if (flg === 'doc') {
        images = ["ドクの家の内装のシーンが撮られた家.png", "ドクの家の内装のシーンが撮られた家2.png"];
    } else if (flg === 'hill') {
        images = ["ヒルバレー高校.png", "ヒルバレー高校2.png", "ヒルバレー高校3.png", "ヒルバレー高校4.png"];
    } else if (flg === 'twin') {
        images = ["ツインパインモール.png"];
    } else if (flg === 'party') {
        images = ["魅惑の深海パーティが撮影された所.png", "魅惑の深海パーティが撮影された所2.png", "魅惑の深海パーティが撮影された所3.png", "魅惑の深海パーティが撮影された所4.png"];
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
