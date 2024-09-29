
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