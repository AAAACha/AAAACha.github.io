let currentFoodIndex = 0;
const foodList = ['麻辣烫', '麻辣拌', '拉面', '炒拉条', '黄焖鸡', '黄焖酥肉', '凉皮',
     '凉面', '饸络', '盖浇饭','汉堡','炸鸡','泡面','烩面','砂锅','饺子','刀削面'];
let resultElement = document.getElementById('result');
let decideButton = document.getElementById('decideButton');
let intervalId;

decideButton.addEventListener('click', function () {
    let randomDisplay = setInterval(function () {
        if (currentFoodIndex >= foodList.length) {
            currentFoodIndex = 0;
        }
        resultElement.textContent = `今天吃：${foodList[currentFoodIndex]}`;
        currentFoodIndex++;
    }, 1);

    setTimeout(function () {
        clearInterval(randomDisplay);
        let finalIndex = Math.floor(Math.random() * foodList.length);
        resultElement.textContent = `今天吃：${foodList[finalIndex]}`;
    }, 3000);
});