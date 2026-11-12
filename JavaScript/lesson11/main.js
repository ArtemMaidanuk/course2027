// -взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти.
// Інгредієнти повинні бути списком під час відображення.

fetch('https://dummyjson.com/recipes')
    .then(res => res.json())
    .then(value => {
        let {recipes} = value;
        let recipesBlock = document.getElementById('container');
        for (const recipe of recipes) {
            let recipeBlock = document.createElement('div')
            recipeBlock.classList.add('recipe');
            let name = document.createElement('h2')
            name.innerText = recipe.name;
            let image = document.createElement('img');
            image.src = recipe.image;
            let caloriesPerServing = document.createElement('p');
            caloriesPerServing.innerText = `CaloriesPerServing - ${recipe.caloriesPerServing}`;
            let cookTimeMinutes = document.createElement('p');
            cookTimeMinutes.innerText =`CookTimeMinutes -  ${recipe.cookTimeMinutes}`;
            let cuisine = document.createElement('p')
            cuisine.innerText = `Cuisine - ${recipe.cuisine}`;
            let difficulty = document.createElement('p')
            difficulty.innerText = `Difficulty - ${recipe.difficulty}`;
            let ingredientsTitle = document.createElement('h3');
            ingredientsTitle.innerText = 'Ingredients';
            let ul = document.createElement('ul');

            for (const ingredients of recipe.ingredients) {
                let li = document.createElement('li');
                li.innerText = ingredients;
                ul.appendChild(li);
            }

            let instructionsTitle = document.createElement('h3');
            instructionsTitle.innerText = 'Instructions';

            let ol = document.createElement('ol');
            for (const instructions of recipe.instructions) {
                let liInstructions = document.createElement('li');
                liInstructions.innerText = instructions;
                ol.appendChild(liInstructions);
            }
            recipeBlock.append(name, image, caloriesPerServing, cookTimeMinutes,
                cuisine, difficulty, ingredientsTitle,  ul, instructionsTitle, ol);
            recipesBlock.appendChild(recipeBlock);
        }
    });
