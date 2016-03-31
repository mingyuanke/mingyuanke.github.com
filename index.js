//time-picker
'use strict'
var timeElement = document.querySelector(".time-picker");
var time = new Date();
var today = time.getDate();
var tMonth = time.getMonth() + 1;
var tYear = time.getFullYear();
var totalDays = new Date(tYear, tMonth, 0).getDate();
var months = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];
var weeks = ['日', '一', '二', '三', '四', '五', '六'];
var fullWeeks=['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
var lastMonthDays = new Date(tYear, tMonth - 1, 0).getDate();
var firstDayWeek = new Date(tYear, tMonth - 1, 1).getDay();
var lastDayWeek = new Date(tYear, tMonth, 0).getDay();
var timeShow = document.createElement("div");
timeShow.setAttribute("class", "time-show");
var totalcell = firstDayWeek + totalDays + (6 - lastDayWeek);
timeShow.innerHTML = tYear + '年' + months[tMonth - 1]+today+'日，'+fullWeeks[time.getDay()];
timeElement.appendChild(timeShow);
var timeTable = document.createElement("table");
timeTable.setAttribute("class", "time-picker-table")
var tableHead = document.createElement("thead");
for (let i = 0; i < 7; i++) {
    let tdcell = document.createElement('td');
    tdcell.innerHTML = weeks[i];
    tableHead.appendChild(tdcell);
}
timeTable.appendChild(tableHead);
var tBody = document.createElement('tbody');
var days = 1;
for (let j = 0; j < totalcell; j++) {
    if (j % 7 === 0) {
        var trcell = document.createElement('tr');
        tBody.appendChild(trcell);
    }
    let tdcell = document.createElement('td');
    if (j < firstDayWeek) {
        tdcell.innerHTML = lastMonthDays - firstDayWeek + j + 1;
        tdcell.setAttribute("class", "last-month")
    }
    else if (days <= totalDays) {
        tdcell.innerHTML = days;
        tdcell.setAttribute("class", "current-month")
        tdcell.setAttribute("data-day", days);
        days++;
    }
    else {
        tdcell.innerHTML = j - totalDays - firstDayWeek + 1;
        tdcell.setAttribute("class", "next-month")
    }
    trcell.appendChild(tdcell);
}
timeTable.appendChild(tBody);
timeTable.querySelector('[data-day="' + today + '"]').setAttribute("class", "current-month today")
timeElement.appendChild(timeTable);