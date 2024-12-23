function updateSchedule() {
    const selectedCourse = document.getElementById("courseSelector").value;
    const scheduleContent = document.getElementById("scheduleContent");
    const scheduleData = document.querySelector(`#scheduleData [data-course="${selectedCourse}"]`);

    // スケジュール内容をクリア
    scheduleContent.innerHTML = "";

    // 選択されたコースのスケジュールを挿入
    scheduleData.querySelectorAll("div").forEach(item => {
        const time = item.getAttribute("data-time");
        const place = item.getAttribute("data-place");
        const details = item.getAttribute("data-details");

        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${time}</td>
            <td>${place}</td>
            <td>${details}</td>
        `;
        scheduleContent.appendChild(row);
    });
}

// 初期値として8時間コースを表示
document.addEventListener("DOMContentLoaded", updateSchedule);