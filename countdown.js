// 设置倒计时的目标时间
const targetDate = new Date("2026-1-1 00:00:00").getTime();

// 更新倒计时的函数
function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    // 计算天、小时、分钟和秒
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // 将结果显示在页面上
    document.getElementById("countdown").innerHTML = `${days}天 ${hours}小时 ${minutes}分钟 ${seconds}秒`;

    // 如果倒计时结束，显示提示信息
    if (distance < 0) {
        clearInterval(timer);
        document.getElementById("countdown").innerHTML = "服务器已开放";
    }
}

// 每秒更新一次倒计时
const timer = setInterval(updateCountdown, 1000);