const mealBtn=document.getElementById('meal-btn');
const MainMeal=document.getElementById('meal');
const inputText=document.getElementById('input-text');


// js listner 
mealBtn.addEventListener('click',getMealMenu);


function getMealMenu(){
    let inputTextShow = inputText.value.trim() ;
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${inputTextShow}`)
    .then(res=> res.json())
    .then(data => {
        let html='';
        if(data.meals) {
            data.meals.forEach(meal=> {
                html += `
                <div class="meal-content">
                    <div class="meal-img">
                        <img src="${meal.strMealThumb}" alt="">
                    </div>
                    <div class="meal-title">
                        <h3>${meal.strMeal}</h3>
                    </div>
                </div>
                `
            })
        }else {
            html="Recepie Didn't find";
            MainMeal.classList.add('NotFound');

        }

        MainMeal.innerHTML=html;
    })
   

}