const API = "/recipes";


// LOAD RECIPES
async function loadRecipes() {

    const res = await fetch(API);

    const recipes = await res.json();

    const recipeList = document.getElementById("recipeList");

    recipeList.innerHTML = "";

    recipes.forEach(recipe => {

        recipeList.innerHTML += `

        <div class="recipe">

            <h3>${recipe.title}</h3>

            <p>${recipe.ingredients.join(", ")}</p>

            <p>${recipe.instructions}</p>

            <button onclick="deleteRecipe('${recipe._id}')">
                Delete
            </button>

        </div>
        `;
    });
}


// CREATE
async function addRecipe() {

    const title = document.getElementById("title").value;

    const ingredients =
        document.getElementById("ingredients")
        .value
        .split(",");

    const instructions =
        document.getElementById("instructions").value;

    await fetch(API, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title,
            ingredients,
            instructions
        })
    });

    loadRecipes();
}


// DELETE
async function deleteRecipe(id) {

    await fetch(`${API}/${id}`, {
        method: "DELETE"
    });

    loadRecipes();
}


loadRecipes();