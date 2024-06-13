// script.js
const apiKey = '你的API密钥';

async function getWeather() {
    const city = document.getElementById('city').value;
    if (!city) {
        alert('请输入城市名称');
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=zh_cn`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === 200) {
            displayWeather(data);
        } else {
            alert('未找到该城市的天气信息');
        }
    } catch (error) {
        alert('无法获取天气信息');
    }
}

function displayWeather(data) {
    const weatherResult = document.getElementById('weather-result');
    const { name, main, weather } = data;
    weatherResult.innerHTML = `
        <h2>${name}</h2>
        <p>温度: ${main.temp} °C</p>
        <p>天气: ${weather[0].description}</p>
    `;
}
