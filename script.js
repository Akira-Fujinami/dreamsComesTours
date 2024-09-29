
const tours = {
    "ハリウッドツアー": "tour1.txt",
    "ビバリーヒルズ": "tour2.txt",
    "サンタモニカ": "tour3.txt",
    "グリフィスパーク": "tour4.txt",
    "ユニバーサルスタジオ": "tour5.txt",
    "『ワイルド・スピード』ロケ地ツアー": "wildspeed.html",
    "『ターミネーター』ロケ地ツアー": "terminator.html"
};

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

// Google Mapsの初期化
function initMap() {
    // マップの中心を設定（例: ロサンゼルス）
    const losAngeles = { lat: 34.0522, lng: -118.2437 };

    // マップを作成
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 11, // 拡大するための数値を設定
        center: losAngeles,
    });


    // 固定ピンの位置を設定
    const markerPosition = { lat: 34.0522, lng: -118.2437 }; // ロサンゼルスの座標

    // マーカーを作成
    const marker = new google.maps.Marker({
        position: markerPosition,
        map: map,
        title: "ロサンゼルスのピン", // ピンのタイトル
        draggable: false, // ユーザーによる移動を無効にする
    });

    marker.addListener("click", function() {
        const videoContainer = document.getElementById("videoContainer");
        videoContainer.style.display = "block"; // 動画を表示
        const video = document.getElementById("video");
        video.play(); // 動画を再生
    });
    document.getElementById("closeButton").addEventListener("click", function() {
        const videoContainer = document.getElementById("videoContainer");
        videoContainer.style.display = "none"; // 動画コンテナを非表示
        const video = document.getElementById("video");
        video.pause(); // 動画を一時停止
        video.currentTime = 0; // 動画の再生位置をリセット
    });
}

// スクリプトの読み込みが終わったらinitMapを実行
window.initMap = initMap;

