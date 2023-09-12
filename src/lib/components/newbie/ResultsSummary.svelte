<script>
	import Attr from "../Attr.svelte";

    let overallScore = 76;
    let classification = "Great";
    const iconSrc = "https://ik.imagekit.io/ivw8jbdbt/FEMC";

    const data = [{
        "category": "Reaction",
        "score": 80,
        "icon": "/icon-reaction.svg"
    },
    {
        "category": "Memory",
        "score": 92,
        "icon": "/icon-memory.svg"
    },
    {
        "category": "Verbal",
        "score": 61,
        "icon": "/icon-verbal.svg"
    },
    {
        "category": "Visual",
        "score": 72,
        "icon": "/icon-visual.svg"
    }]
</script>
<section class="container" role="main">
    <div class="results-summary">
        <div class="results grid-flow" data-spacing="large">
            <h1 class="title">Your Result</h1>
            <p class="overall-score">
                <span>{overallScore}</span> of 100
            </p>
            <div class="grid-flow">
                <p class="rank">{classification}</p>
                <p class="description">You scored higher than 65% of the people who have taken these tests.</p>
            </div>
        </div>
        <div class="summary grid-flow" data-spacing="large">
            <h2 class="title">Summary</h2>
            <div class="grid-flow">
                {#each data as item (item.category)}
                    <div class="summary-item {item.category.toLowerCase()}">
                        <div class="flex-group">
                            <span class="icon">
                                <img src={iconSrc + '/' + item.icon} alt={item.category} />
                            </span>
                            <p class="item-title">{item.category}</p>
                        </div>
                        <p class="score"><span>{item.score}</span> / 100</p>
                    </div>
                {/each}
            </div>
            <button class="btn">Continue</button>
        </div>
    </div>
    <Attr/>
</section>
<style>
@import url('https://fonts.googleapis.com/css2?family=Hanken+Grotesk:ital,wght@0,700;0,800;1,500&display=swap');

:root {
    /* Primary */
    --rs-color-light-red: hsl(0, 100%, 67%);
    --rs-color-orangey-yellow: hsl(39, 100%, 56%);
    --rs-color-green-teal: hsl(166, 100%, 37%);
    --rs-color-cobalt-blue: hsl(234, 85%, 45%);

    --rs-bg-color-light-red: hsla(0, 100%, 67%, 6%);
    --rs-bg-color-orangey-yellow: hsla(39, 100%, 56%, 6%);
    --rs-bg-color-green-teal: hsla(166, 100%, 37%, 6%);
    --rs-bg-color-cobalt-blue: hsla(234, 85%, 45%, 6%);
 
    /* Gradients 
        bg */
    --rs-color-light-slate-blue: hsl(252, 100%, 67%);
    --rs-color-light-royal-blue: hsl(241, 81%, 54%);
    
    /* circle */
    --rs-color-violet-blue: hsla(256, 72%, 46%, 1);
    --rs-color-persian-blue: hsla(241, 72%, 46%, 0);    
    
    /* Neutral */
    --rs-color-white: hsl(0, 0%, 100%);
    --rs-color-pale-blue: hsl(221, 100%, 96%);
    --rs-color-light-lavender: hsl(241, 100%, 89%);
    --rs-color-dark-gray-blue: hsl(224, 30%, 27%);

    /* opacity */
    --rs-color-w-70p: hsla( 0, 0%, 100%, .7);
    --rs-color-dgb-50p: hsla(224, 30%, 27%, 0.5);
    --rs-color-dgb-20p: hsla(224, 30%, 27%, 0.2);
}

.container {
    font-family: 'Hanken Grotesk', sans-serif;
	min-height: 100vh;
    display: grid;
    place-items: center;
}

img {
    display: block;
    max-width: 100%;
}

.flex-group {
    display: flex;
    align-items: center;
    gap: .5rem;
    flex-wrap: wrap;
}

.grid-flow {
    display: grid;
    align-content: start;
    gap: 1rem;
}

.grid-flow[data-spacing="large"] {
  gap: 2rem;
}

.results-summary {
    border-radius: 20px;
    max-width: 46rem;
    display: grid;
}

.results {
    color: var(--rs-color-w-70p);
    text-align: center;
    background: linear-gradient(var(--rs-color-light-slate-blue),
    var(--rs-color-light-royal-blue));
    border-radius: 20px;
    padding: 2.5rem calc(2.5rem * 1.8);
}

.overall-score {
    display: grid;
    place-content: center;
    width: 12rem;
    margin-inline: auto;
    background: linear-gradient(var(--rs-color-violet-blue),
    var(--rs-color-persian-blue));
    aspect-ratio: 1/1;
    border-radius: 50%;
}

.overall-score span {
    display: block;
    font-size: 60px;
    font-weight: 800;
    line-height: 1;
    margin-bottom: 5px;
    color: var( --rs-color-white);
}

.rank {
    color: var(--rs-color-white);
    font-size: 24px;
    font-weight: 700;;
}

.title {
    font-size: 1.5rem;
    font-weight: 700;
}

.summary {
    padding: 2.5rem;
}

.summary-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    border-radius: .5rem;
}

.reaction {
    color: var(--rs-color-light-red);
    background-color: var(--rs-bg-color-light-red);
}

.memory {
    color: var(--rs-color-orangey-yellow);
    background-color: var(--rs-bg-color-orangey-yellow);
}

.verbal {
    color: var(--rs-color-green-teal);
    background-color: var(--rs-bg-color-green-teal);
}

.visual {
    color: var(--rs-color-cobalt-blue);
    background-color: var(--rs-bg-color-cobalt-blue);
} 

.score {
    color: var(--rs-color-dgb-50p);
    font-weight: 800;
}

.score span {
    color: var(--rs-color-dark-gray-blue);
}

.btn {
    padding: 1rem 2rem;
    border: 0;
    font-weight: 700;
    border-radius: 100vw;
    cursor: pointer;
    line-height: 1;
    color: var( --rs-color-white);
    border-radius: 9999px;
    background-color: var(--rs-color-dark-gray-blue);
}

.btn:hover {
    background: linear-gradient(var(--rs-color-light-slate-blue), 
    var(--rs-color-light-royal-blue));
}

@media (min-width: 600px) {
    .results-summary {
        grid-template-columns: 1fr 1fr;
        border-radius: 2rem;
        box-shadow: .5rem 1rem 3rem 
        var(--rs-color-dgb-20p);
        overflow: hidden;
        margin-inline: 1rem;
    }
}
</style>