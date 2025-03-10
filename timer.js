// 设置开服时间（格式：年/月/日 时:分:秒）
const serverStartTime = "2024/12/23 00:00:00"; // 你可以在这里调整开服时间

// 将开服时间转换为时间戳
const startTime = new Date(serverStartTime).getTime();

// 获取页面上的计时器元素
const timerElement = document.getElementById("timer");

// 定义一个函数来更新计时器的显示
function updateTimer() {
    // 获取当前时间的时间戳
    const currentTime = new Date().getTime();

    // 计算经过的时间（单位：毫秒）
    const elapsedTime = currentTime - startTime;

    // 将经过的时间转换为年、月、日、小时、分钟和秒
    const years = Math.floor(elapsedTime / (1000 * 60 * 60 * 24 * 365));
    const months = Math.floor((elapsedTime % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
    const days = Math.floor((elapsedTime % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((elapsedTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);

    // 格式化时间显示
    const formattedTime = `${years}年 ${months}月 ${days}天 ${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
    timerElement.textContent = formattedTime;
}

// 补零函数
function pad(number) {
    return number < 10 ? "0" + number : number;
}

// 每秒更新一次计时器
setInterval(updateTimer, 1000);

// 初始化计时器
updateTimer();
