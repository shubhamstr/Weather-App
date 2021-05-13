const submitBtn = document.getElementById("submitBtn");
const cityName = document.getElementById("cityName");
const city = document.getElementById("city");

const temp = document.getElementById("temp");
const status = document.getElementById("status");
const data_hide = document.getElementsByClassName("data_hide");

const getInfo = async (e) => {
    e.preventDefault();
    // alert("hi");
    let cityVal = cityName.value;
    if (cityVal == - "") {
        city.innerText = "Please Write the name before search";
    } else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=53e026615dee8ba0f9291a3216e2c095`;
            const res = await fetch(url);
            const data = await res.json();
            const arr = [data];
            console.log(data);

            city.innerText = `${arr[0].name},${arr[0].sys.country}`
            temp.innerHTML = arr[0].main.temp + "<sup>0</sup>C"
            // status.innerText = arr[0].weather[0].main


            const tempstatus = arr[0].weather[0].main;
            if (tempstatus == "Sunny") {
                status.innerHTML = '   <i class="fas fa-sun" style="color:#eccc68"></i>';
            } else if (tempstatus == "Clouds") {
                status.innerHTML = '   <i class="fas fa-cloud" style="color:#f1f2f6"></i>';
            } else if (tempstatus == "Rainy") {
                status.innerHTML = '   <i class="fas fa-cloud-rain" style="color:#a4b0be"></i>';
            }

        } catch {
            city.innerText = "Please Write the city name properly";
        }
    }
}
submitBtn.addEventListener('click', getInfo);