<script>
    import Attr from "../../shared/Attr.svelte";
    import { glbVars } from "../../../../stores";
    
    let selectedRating = null;
    let submitted = false;
    
    const ratings = [1, 2, 3, 4, 5];
    
    function selectRating(rating) {
        selectedRating = rating;
    }
    
    function handleSubmit() {
        if (selectedRating !== null) {
            submitted = true;
        }
    }
    
    function resetRating() {
        selectedRating = null;
        submitted = false;
    }
</script>

<main class="container">
    {#if !submitted}
        <div class="rating-card">
            <div class="icon-wrapper">
                <svg width="17" height="16" xmlns="http://www.w3.org/2000/svg">
                    <path d="m9.067.43 1.99 4.031c.112.228.33.386.58.422l4.45.647a.772.772 0 0 1 .427 1.316l-3.22 3.138a.773.773 0 0 0-.217.683l.76 4.431a.772.772 0 0 1-1.12.813l-3.98-2.092a.773.773 0 0 0-.684 0l-3.98 2.092a.772.772 0 0 1-1.119-.813l.76-4.431a.77.77 0 0 0-.217-.683L.233 6.866A.772.772 0 0 1 .661 5.55l4.449-.647a.772.772 0 0 0 .58-.422L7.68.43a.774.774 0 0 1 1.387 0Z" fill="currentColor"/>
                </svg>
            </div>
            
            <h1>How did we do?</h1>
            <p>
                Please let us know how we did with your support request. All feedback is appreciated 
                to help us improve our offering!
            </p>
            
            <div class="ratings">
                {#each ratings as rating}
                    <button
                        type="button"
                        class="rating-btn"
                        class:selected={selectedRating === rating}
                        on:click={() => selectRating(rating)}
                        aria-pressed={selectedRating === rating}
                    >
                        {rating}
                    </button>
                {/each}
            </div>
            
            <button
                type="button"
                class="submit-btn"
                on:click={handleSubmit}
                disabled={selectedRating === null}
            >
                Submit
            </button>
        </div>
    {:else}
        <div class="thank-you-card">
            <div class="illustration">
                <img 
                    src="{$glbVars.cdnUrl}illustration-thank-you.svg" 
                    alt="Thank you illustration" 
                    on:error={(e) => {
                        const img = e.currentTarget;
                        if (img instanceof HTMLImageElement) {
                            img.style.display = 'none';
                        }
                    }}
                />
                <div class="rating-display">
                    You selected {selectedRating} out of 5
                </div>
            </div>
            
            <h1>Thank you!</h1>
            <p>
                We appreciate you taking the time to give a rating. If you ever need more support, 
                don't hesitate to get in touch!
            </p>
        </div>
    {/if}
    <Attr/>
</main>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Overpass:wght@400;700&display=swap');
    
    :root {
        /* Primary */
        --ir-color-orange: hsl(25, 97%, 53%);
        
        /* Neutral */
        --ir-color-white: hsl(0, 0%, 100%);
        --ir-color-light-grey: hsl(217, 12%, 63%);
        --ir-color-medium-grey: hsl(216, 12%, 54%);
        --ir-color-dark-blue: hsl(213, 19%, 18%);
        --ir-color-very-dark-blue: hsl(216, 12%, 8%);
        
        --ir-font-fam: 'Overpass', sans-serif;
    }
    
    .container {
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 24px;
        font-family: var(--ir-font-fam);
        background: var(--ir-color-very-dark-blue);
    }
    
    .rating-card,
    .thank-you-card {
        background: radial-gradient(circle at top, var(--ir-color-dark-blue), hsl(216, 12%, 8%));
        border-radius: 24px;
        padding: 32px 24px;
        max-width: 412px;
        width: 100%;
        text-align: center;
    }
    
    .icon-wrapper {
        width: 48px;
        height: 48px;
        background: var(--ir-color-dark-blue);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 24px;
        color: var(--ir-color-orange);
    }
    
    .icon-wrapper svg {
        width: 17px;
        height: 16px;
    }
    
    h1 {
        font-size: 1.5rem;
        font-weight: 700;
        color: var(--ir-color-white);
        margin: 0 0 16px;
    }
    
    .rating-card p,
    .thank-you-card p {
        font-size: 0.9375rem;
        line-height: 1.6;
        color: var(--ir-color-light-grey);
        margin: 0 0 24px;
    }
    
    .ratings {
        display: flex;
        justify-content: space-between;
        gap: 16px;
        margin-bottom: 24px;
    }
    
    .rating-btn {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        border: none;
        background: var(--ir-color-dark-blue);
        color: var(--ir-color-medium-grey);
        font-size: 1rem;
        font-weight: 700;
        font-family: var(--ir-font-fam);
        cursor: pointer;
        transition: all 0.2s ease;
    }
    
    .rating-btn:hover {
        background: var(--ir-color-medium-grey);
        color: var(--ir-color-white);
    }
    
    .rating-btn.selected {
        background: var(--ir-color-orange);
        color: var(--ir-color-white);
    }
    
    .rating-btn:focus {
        outline: 2px solid var(--ir-color-orange);
        outline-offset: 2px;
    }
    
    .submit-btn {
        width: 100%;
        padding: 14px;
        background: var(--ir-color-orange);
        color: var(--ir-color-white);
        border: none;
        border-radius: 24px;
        font-size: 0.9375rem;
        font-weight: 700;
        font-family: var(--ir-font-fam);
        text-transform: uppercase;
        letter-spacing: 2px;
        cursor: pointer;
        transition: all 0.2s ease;
    }
    
    .submit-btn:hover:not(:disabled) {
        background: var(--ir-color-white);
        color: var(--ir-color-orange);
    }
    
    .submit-btn:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
    
    .submit-btn:active:not(:disabled) {
        transform: translateY(1px);
    }
    
    /* Thank you card */
    .illustration {
        margin-bottom: 24px;
    }
    
    .illustration img {
        width: 162px;
        height: auto;
        margin-bottom: 24px;
    }
    
    .rating-display {
        display: inline-block;
        padding: 8px 20px;
        background: var(--ir-color-dark-blue);
        border-radius: 24px;
        color: var(--ir-color-orange);
        font-size: 0.9375rem;
        margin: 0 auto 24px;
    }
    
    .thank-you-card h1 {
        font-size: 1.75rem;
        margin-bottom: 12px;
    }
    
    @media (min-width: 768px) {
        .rating-card,
        .thank-you-card {
            padding: 40px 32px;
        }
        
        .icon-wrapper {
            width: 56px;
            height: 56px;
            margin-bottom: 32px;
        }
        
        h1 {
            font-size: 1.75rem;
            margin-bottom: 16px;
        }
        
        .rating-card p,
        .thank-you-card p {
            font-size: 1rem;
            margin-bottom: 32px;
        }
        
        .rating-btn {
            width: 56px;
            height: 56px;
            font-size: 1.0625rem;
        }
        
        .thank-you-card h1 {
            font-size: 2rem;
        }
    }
</style>

