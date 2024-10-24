
const tours = {
    "ハリウッドツアー": "tour1.txt",
    "ビバリーヒルズ": "tour2.txt",
    "サンタモニカ": "tour3.txt",
    "グリフィスパーク": "tour4.txt",
    "ユニバーサルスタジオ": "tour5.txt",
    "『ワイルド・スピード』ロケ地ツアー": "wildspeed.html",
    "『ターミネーター』ロケ地ツアー": "terminator.html"
};
let currentImageIndex = 0;
document.getElementById('search-input').addEventListener('input', function() {
    const input = this.value.toLowerCase();
    const autocompleteList = document.getElementById('autocomplete-list');
    autocompleteList.innerHTML = ''; // 既存の候補をクリア

    if (!input) return;

    for (const [tour, filename] of Object.entries(tours)) {
        if (tour.toLowerCase().includes(input)) {
            const suggestion = document.createElement('div');
            suggestion.innerText = tour;
            suggestion.addEventListener('click', function() {
                document.getElementById('search-input').value = tour;
                autocompleteList.innerHTML = ''; // 選択したら候補を消す
            });
            autocompleteList.appendChild(suggestion);
        }
    }
});
document.querySelector('.search-box button').addEventListener('click', function() {
    const tourName = document.getElementById('search-input').value.toLowerCase();
    const matchedTour = Object.keys(tours).find(tour => tour.toLowerCase().includes(tourName));

    if (matchedTour) {
        openTourDetails(tours[matchedTour]); // 一致するツアーのファイルを開く
    } else {
        alert("該当するツアーが見つかりません。");
    }
});
// ツアー詳細を読み込む関数
function openTourDetails(filename) {
    // 新しいタブでファイルを開く
    const filePath = `${filename}`; // ファイルのパスを設定（XAMPPのパスに合わせて変更）
    window.open(filePath, '_blank');
}
setTimeout(function() {
    const currentBackground = document.getElementById('background-image');
    const newBackground = document.getElementById('new-background');

    currentBackground.style.opacity = 0; // 現在の背景をフェードアウト
    newBackground.style.opacity = 1; // 新しい背景をフェードイン
}, 3000);

function initMap() {
    // マップの中心を設定（例: ロサンゼルス）
    const losAngeles = { lat: 34.0522, lng: -118.2437 };

    // マップを作成
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10, // 拡大するための数値を設定
        center: losAngeles,
    });

    // ドジャースタジアムの位置を設定
    const dodgersStadiumPosition = { lat: 34.0739, lng: -118.2406 }; // ドジャースタジアムの座標

    // ドジャースタジアムのマーカーを作成
    const dodgersMarker = new google.maps.Marker({
        position: dodgersStadiumPosition,
        map: map,
        title: "ドジャースタジアム", // ピンのタイトル
        draggable: false, // ユーザーによる移動を無効にする
    });

    // InfoWindowを作成
    const infoWindow = new google.maps.InfoWindow({
        content: `
            <div style="text-align: center;">
                <strong>ドジャーススタジアムのギフトショップ</strong><br>
                <img src="ドジャースタジアムのギフトショップ.png" alt="ドジャーススタジアムのギフトショップ" style="width: 200px; height: auto; border-radius: 5px;"><br>
            </div>
        `,
    });

    // ドジャースタジアムのマーカーにクリックリスナーを追加
    dodgersMarker.addListener("click", function() {
        infoWindow.open(map, dodgersMarker); // マップ上にInfoWindowを表示
        const videoContainer = document.getElementById("videoContainer");
        videoContainer.style.display = "block"; // 動画を表示
        const video = document.getElementById("video");
        video.play(); // 動画を再生
    });

    // 大谷翔平の壁画の位置を設定
    const otaniMuralsPosition = { lat: 34.0406, lng: -118.2567 };// ここを壁画の実際の座標に変更

    // 大谷翔平の壁画のマーカーを作成
    const otaniMarker = new google.maps.Marker({
        position: otaniMuralsPosition,
        map: map,
        title: "大谷翔平の壁画", // ピンのタイトル
        draggable: false, // ユーザーによる移動を無効にする
    });

    // InfoWindowを作成
    const otaniInfoWindow = new google.maps.InfoWindow({
        content: `
            <div style="text-align: center;">
                <strong>大谷翔平の壁画</strong><br>
                <img src="大谷翔平.png" alt="大谷翔平の壁画" style="width: 200px; height: auto; border-radius: 5px;"><br>
            </div>
        `,
    });

    // 大谷翔平の壁画のマーカーにクリックリスナーを追加
    otaniMarker.addListener("click", function() {
        otaniInfoWindow.open(map, otaniMarker); // マップ上にInfoWindowを表示
    });

    // 3232 Manhattan Aveの位置を設定
    const manhattanAvePosition = { lat: 33.8651, lng: -118.4004 }; // 3232 Manhattan Aveの座標

    // 3232 Manhattan Aveのマーカーを作成
    const manhattanAveMarker = new google.maps.Marker({
        position: manhattanAvePosition,
        map: map,
        title: "3232 Manhattan Ave", // ピンのタイトル
        draggable: false, // ユーザーによる移動を無効にする
    });

    // InfoWindowを作成
    const manhattanAveInfoWindow = new google.maps.InfoWindow({
        content: `
            <div style="text-align: center;">
                <strong>ハモサビーチの酒屋さんの大谷壁画</strong><br>
                <img src="ハモサビーチにある大谷翔平の壁画.png" alt="3232 Manhattan Ave" style="width: 200px; height: auto; border-radius: 5px;"><br>
                ロサンゼルス空港の南にあるハモサビーチの酒屋さんの<br>壁画に描かれた大谷翔平選手とムーキー・ベッツ選手の壁画。
            </div>
        `,
    });

    // 3232 Manhattan Aveのマーカーにクリックリスナーを追加
    manhattanAveMarker.addListener("click", function() {
        manhattanAveInfoWindow.open(map, manhattanAveMarker); // InfoWindowを開く
    });


    const firstStreetPosition = { lat: 34.0450, lng: -118.2440 }; // 328 1st Stの座標

    // 328 1st Stのマーカーを作成
    const firstStreetMarker = new google.maps.Marker({
        position: firstStreetPosition,
        map: map,
        title: "328 1st St", // ピンのタイトル
        draggable: false, // ユーザーによる移動を無効にする
    });

    // InfoWindowを作成
    const firstStreetInfoWindow = new google.maps.InfoWindow({
        content: `
            <div style="text-align: center;">
                <strong>リトル東京の大谷翔平の壁画</strong><br>
                <img src="リトル東京の大谷翔平の壁画.png" alt="リトル東京の大谷翔平の壁画" style="width: 200px; height: auto; border-radius: 5px;"><br>
            </div>
        `,
    });

    // 328 1st Stのマーカーにクリックリスナーを追加
    firstStreetMarker.addListener("click", function() {
        firstStreetInfoWindow.open(map, firstStreetMarker); // InfoWindowを開く
    });

    const cityHallPosition = { lat: 34.0522, lng: -118.2437 }; // 市役所の座標
    // ロサンゼルス市役所のマーカーを作成
    const cityHallMarker = new google.maps.Marker({
        position: cityHallPosition,
        map: map,
        title: "ロサンゼルス市役所",
        draggable: false,
    });

    // ロサンゼルス市役所のInfoWindowを作成
    const cityHallInfoWindow = new google.maps.InfoWindow({
        content: `
            <div style="text-align: center;">
                <strong>ロサンゼルス市役所</strong><br>
                <img src="ロサンゼルス市役所.png" alt="ロサンゼルス市役所" style="width: 200px; height: auto; border-radius: 5px;"><br>
                5月17日が大谷翔平選手の日に制定されたロサンゼルス市役所。
            </div>
        `,
    });
    // ロサンゼルス市役所のマーカーにクリックリスナーを追加
    cityHallMarker.addListener("click", function() {
        cityHallInfoWindow.open(map, cityHallMarker); // InfoWindowを開く
    });
}
// スクリプトの読み込みが終わったらinitMapを実行
window.initMap = initMap;

function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none"; // モーダルを非表示にする
    const modalImage = document.getElementById("modalImage");
    modalImage.src = ""; // 画像のソースを空にして非表示にする
}

function openModal(imageSrc) {
    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("modalImage");
    modalImage.src = imageSrc; // モーダルに画像を表示
    modal.style.display = "flex"; // モーダルを表示する
    modalImage.style.width = "70%";
}
function changeImage(direction) {
    const images = ["マクフライ家.png", "マクフライ家2.png"];
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