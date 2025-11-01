<script>
    import Attr from "../../shared/Attr.svelte";
    import { glbVars } from "../../../../stores";
    
    const recipe = {
        title: "Simple Omelette Recipe",
        description: "An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.",
        image: `${$glbVars.cdnUrl}recipe-page/image-omelette.jpeg`,
        prepTime: {
            total: "Approximately 10 minutes",
            preparation: "5 minutes",
            cooking: "5 minutes"
        },
        ingredients: [
            "2-3 large eggs",
            "Salt, to taste",
            "Pepper, to taste",
            "1 tablespoon of butter or oil",
            "Optional fillings: cheese, diced vegetables, cooked meats, herbs"
        ],
        instructions: [
            {
                step: "Beat the eggs",
                description: "In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture."
            },
            {
                step: "Heat the pan",
                description: "Place a non-stick frying pan over medium heat and add butter or oil."
            },
            {
                step: "Cook the omelette",
                description: "Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface."
            },
            {
                step: "Add fillings (optional)",
                description: "When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette."
            },
            {
                step: "Fold and serve",
                description: "As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate."
            },
            {
                step: "Enjoy",
                description: "Serve hot, with additional salt and pepper if needed."
            }
        ],
        nutrition: {
            description: "The table below shows nutritional values per serving without the additional fillings.",
            values: [
                { label: "Calories", value: "277kcal" },
                { label: "Carbs", value: "0g" },
                { label: "Protein", value: "20g" },
                { label: "Fat", value: "22g" }
            ]
        }
    };
</script>

<main class="container">
    <article class="recipe-card">
        <img 
            src={recipe.image}
            alt={recipe.title}
            class="recipe-image"
            on:error={(e) => {
                const img = e.currentTarget;
                if (img instanceof HTMLImageElement) {
                    img.style.display = 'none';
                }
            }}
        />
        
        <div class="recipe-content">
            <header class="recipe-header">
                <h1 class="recipe-title">{recipe.title}</h1>
                <p class="recipe-description">{recipe.description}</p>
            </header>
            
            <div class="prep-time">
                <h2 class="prep-time-title">Preparation time</h2>
                <ul class="prep-time-list">
                    <li><strong>Total:</strong> {recipe.prepTime.total}</li>
                    <li><strong>Preparation:</strong> {recipe.prepTime.preparation}</li>
                    <li><strong>Cooking:</strong> {recipe.prepTime.cooking}</li>
                </ul>
            </div>
            
            <section class="ingredients">
                <h2 class="section-title">Ingredients</h2>
                <ul class="ingredients-list">
                    {#each recipe.ingredients as ingredient}
                        <li>{ingredient}</li>
                    {/each}
                </ul>
            </section>
            
            <hr class="divider" />
            
            <section class="instructions">
                <h2 class="section-title">Instructions</h2>
                <ol class="instructions-list">
                    {#each recipe.instructions as instruction}
                        <li>
                            <strong>{instruction.step}:</strong> {instruction.description}
                        </li>
                    {/each}
                </ol>
            </section>
            
            <hr class="divider" />
            
            <section class="nutrition">
                <h2 class="section-title">Nutrition</h2>
                <p class="nutrition-description">{recipe.nutrition.description}</p>
                <table class="nutrition-table">
                    {#each recipe.nutrition.values as item, index}
                        <tr>
                            <td class="nutrition-label">{item.label}</td>
                            <td class="nutrition-value">{item.value}</td>
                        </tr>
                    {/each}
                </table>
            </section>
        </div>
    </article>
    <Attr/>
</main>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Young+Serif&family=Outfit:wght@400;600;700&display=swap');
    
    :root {
        /* Colors */
        --recipe-color-white: hsl(0, 0%, 100%);
        --recipe-color-stone-100: hsl(30, 54%, 90%);
        --recipe-color-stone-150: hsl(30, 18%, 87%);
        --recipe-color-stone-600: hsl(30, 10%, 34%);
        --recipe-color-stone-900: hsl(24, 5%, 18%);
        --recipe-color-brown-800: hsl(14, 45%, 36%);
        --recipe-color-rose-800: hsl(332, 51%, 32%);
        --recipe-color-rose-50: hsl(330, 100%, 98%);
        
        /* Fonts */
        --recipe-font-heading: 'Young Serif', serif;
        --recipe-font-body: 'Outfit', sans-serif;
    }
    
    .container {
        min-height: 100vh;
        padding: 0 0 60px;
        font-family: var(--recipe-font-body);
        font-size: 16px;
        background-color: var(--recipe-color-stone-150);
        color: var(--recipe-color-stone-900);
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
    }
    
    .recipe-card {
        background-color: var(--recipe-color-white);
        max-width: 736px;
        width: 100%;
        margin: 0;
    }
    
    .recipe-image {
        width: 100%;
        height: auto;
        display: block;
        object-fit: cover;
    }
    
    .recipe-content {
        padding: 40px;
    }
    
    .recipe-header {
        margin-bottom: 32px;
    }
    
    .recipe-title {
        font-family: var(--recipe-font-heading);
        font-size: 36px;
        font-weight: 400;
        color: var(--recipe-color-stone-900);
        margin: 0 0 24px;
        line-height: 1.1;
    }
    
    .recipe-description {
        font-size: 16px;
        line-height: 1.5;
        color: var(--recipe-color-stone-600);
        margin: 0;
    }
    
    .prep-time {
        background-color: var(--recipe-color-rose-50);
        border-radius: 12px;
        padding: 24px;
        margin-bottom: 32px;
    }
    
    .prep-time-title {
        font-family: var(--recipe-font-body);
        font-size: 20px;
        font-weight: 600;
        color: var(--recipe-color-rose-800);
        margin: 0 0 16px;
    }
    
    .prep-time-list {
        margin: 0;
        padding-left: 24px;
        list-style: none;
    }
    
    .prep-time-list li {
        padding-left: 16px;
        margin-bottom: 8px;
        position: relative;
        line-height: 1.6;
        color: var(--recipe-color-stone-600);
    }
    
    .prep-time-list li::before {
        content: "•";
        color: var(--recipe-color-rose-800);
        font-weight: bold;
        position: absolute;
        left: 0;
    }
    
    .prep-time-list li:last-child {
        margin-bottom: 0;
    }
    
    .prep-time-list strong {
        color: var(--recipe-color-stone-900);
        font-weight: 600;
    }
    
    .section-title {
        font-family: var(--recipe-font-heading);
        font-size: 28px;
        font-weight: 400;
        color: var(--recipe-color-brown-800);
        margin: 0 0 24px;
        line-height: 1.2;
    }
    
    .ingredients {
        margin-bottom: 32px;
    }
    
    .ingredients-list {
        margin: 0;
        padding-left: 24px;
        list-style: none;
    }
    
    .ingredients-list li {
        padding-left: 16px;
        margin-bottom: 8px;
        position: relative;
        line-height: 1.6;
        color: var(--recipe-color-stone-600);
    }
    
    .ingredients-list li::before {
        content: "•";
        color: var(--recipe-color-brown-800);
        font-weight: bold;
        position: absolute;
        left: 0;
    }
    
    .ingredients-list li:last-child {
        margin-bottom: 0;
    }
    
    .instructions {
        margin-bottom: 32px;
    }
    
    .instructions-list {
        margin: 0;
        padding-left: 24px;
        counter-reset: step-counter;
        list-style: none;
    }
    
    .instructions-list li {
        padding-left: 32px;
        margin-bottom: 12px;
        position: relative;
        line-height: 1.6;
        color: var(--recipe-color-stone-600);
        counter-increment: step-counter;
    }
    
    .instructions-list li::before {
        content: counter(step-counter) ".";
        color: var(--recipe-color-brown-800);
        font-weight: 700;
        position: absolute;
        left: 0;
    }
    
    .instructions-list li strong {
        color: var(--recipe-color-stone-900);
        font-weight: 700;
    }
    
    .instructions-list li:last-child {
        margin-bottom: 0;
    }
    
    .divider {
        border: none;
        border-top: 1px solid var(--recipe-color-stone-150);
        margin: 32px 0;
    }
    
    .nutrition {
        margin-bottom: 0;
    }
    
    .nutrition-description {
        font-size: 16px;
        line-height: 1.6;
        color: var(--recipe-color-stone-600);
        margin: 0 0 24px;
    }
    
    .nutrition-table {
        width: 100%;
        border-collapse: collapse;
    }
    
    .nutrition-table tr {
        border-bottom: 1px solid var(--recipe-color-stone-150);
    }
    
    .nutrition-table tr:last-child {
        border-bottom: none;
    }
    
    .nutrition-label {
        padding: 12px 0 12px 32px;
        font-size: 16px;
        line-height: 1.6;
        color: var(--recipe-color-stone-600);
    }
    
    .nutrition-value {
        padding: 12px 0;
        font-weight: 700;
        color: var(--recipe-color-brown-800);
        font-size: 16px;
    }
    
    @media (min-width: 768px) {
        .container {
            padding: 120px 24px 80px;
        }
        
        .recipe-card {
            border-radius: 24px;
            overflow: hidden;
        }
        
        .recipe-image {
            border-radius: 12px;
            margin: 40px 40px 0;
            width: calc(100% - 80px);
        }
        
        .recipe-content {
            padding: 40px;
        }
        
        .recipe-title {
            font-size: 40px;
        }
    }
</style>

