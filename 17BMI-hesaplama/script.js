
document.getElementById('btn').addEventListener('click', () => {
    const height = parseInt(document.getElementById('height').value);
    const weight = parseInt(document.getElementById('weight').value);
    const result = document.getElementById('output');
        const bmi = (weight / ((height*height)/10000)).toFixed(1);
        if(bmi < 18.15){
            result.innerHTML = `Zayıf Statüsündesiniz BMI değeriniz: ${bmi}`;
        }else if(bmi >= 18.15 && bmi < 25){
            result.innerHTML =  `Sağlıklı Statüsündesiniz BMI değeriniz: ${bmi}`
        }else if(bmi >= 25 && bmi < 30){
            result.innerHTML =  `Kilolu Statüsündesiniz BMI değeriniz: ${bmi}`
        }else if(bmi >= 30 && bmi < 40){
            result.innerHTML =  `Şişman Statüsündesiniz BMI değeriniz: ${bmi}`
        }else if(bmi >= 40 && bmi < 60){
            result.innerHTML =  `Aşırı Şişman Statüsündesiniz BMI değeriniz: ${bmi}`
        }else{
            result.innerHTML =  `Acilen Kilo Vermelisiniz BMI değeriniz: ${bmi}`
        }
        });
        document.getElementById('reset').addEventListener("click", () => {   
            document.getElementById('output').innerHTML = ""
            document.getElementById('weight').value = ""
            document.getElementById('height').value = ""
        }) 
