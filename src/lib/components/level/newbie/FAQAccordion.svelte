<script>
    import Attr from "../../shared/Attr.svelte";
    import { glbVars } from "../../../../stores";
    
    const faqs = [
        {
            id: 1,
            question: "What is Frontend Mentor, and how will it help me?",
            answer: "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building."
        },
        {
            id: 2,
            question: "Is Frontend Mentor free?",
            answer: "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels."
        },
        {
            id: 3,
            question: "Can I use Frontend Mentor projects in my portfolio?",
            answer: "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!"
        },
        {
            id: 4,
            question: "How can I get help if I'm stuck on a Frontend Mentor challenge?",
            answer: "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members."
        }
    ];
    
    let openItems = new Set([0]); // First item open by default
    
    function toggleItem(index) {
        if (openItems.has(index)) {
            openItems.delete(index);
        } else {
            openItems.add(index);
        }
        openItems = openItems; // Trigger reactivity
    }
    
    function handleKeydown(event, index) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            toggleItem(index);
        }
    }
    
    $: bgMobile = `${$glbVars.cdnUrl}faq-accordion/background-pattern-mobile.svg`;
    $: bgDesktop = `${$glbVars.cdnUrl}faq-accordion/background-pattern-desktop.svg`;
</script>

<section class="container" role="main" style="--bg-mobile: url('{bgMobile}'); --bg-desktop: url('{bgDesktop}');">
    <div class="accordion-card">
        <div class="header">
            <svg class="star-icon" width="40" height="41" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 40 41">
                <path fill="#AD28EB" d="M37.5 20.5a2.467 2.467 0 0 1-1.64 2.344l-9.913 3.604-3.603 9.911a2.5 2.5 0 0 1-4.688 0l-3.604-9.922-9.911-3.593a2.5 2.5 0 0 1 0-4.688l9.921-3.604 3.594-9.911a2.5 2.5 0 0 1 4.688 0l3.604 9.921 9.911 3.594A2.467 2.467 0 0 1 37.5 20.5Z"/>
            </svg>
            <h1>FAQs</h1>
        </div>
        
        <div class="faq-list">
            {#each faqs as faq, index}
                <div class="faq-item">
                    <button
                        class="faq-question"
                        class:open={openItems.has(index)}
                        on:click={() => toggleItem(index)}
                        on:keydown={(e) => handleKeydown(e, index)}
                        aria-expanded={openItems.has(index)}
                        aria-controls="faq-answer-{index}"
                        id="faq-question-{index}"
                    >
                        <span class="question-text">{faq.question}</span>
                        <span class="icon-wrapper" aria-hidden="true">
                            {#if openItems.has(index)}
                                <!-- Minus icon -->
                                <svg width="30" height="31" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 30 31">
                                    <path fill="#301534" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.2 12.2 0 0 0 15 3.312Zm4.688 13.124h-9.375a.938.938 0 0 1 0-1.875h9.374a.938.938 0 0 1 0 1.876Z"/>
                                </svg>
                            {:else}
                                <!-- Plus icon -->
                                <svg width="30" height="31" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 30 31">
                                    <path fill="#AD28EB" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.203 12.203 0 0 0 15 3.312Zm4.688 13.124h-3.75v3.75a.938.938 0 0 1-1.876 0v-3.75h-3.75a.938.938 0 0 1 0-1.875h3.75v-3.75a.938.938 0 0 1 1.876 0v3.75h3.75a.938.938 0 0 1 0 1.876Z"/>
                                </svg>
                            {/if}
                        </span>
                    </button>
                    <div
                        class="faq-answer"
                        class:open={openItems.has(index)}
                        id="faq-answer-{index}"
                        role="region"
                        aria-labelledby="faq-question-{index}"
                    >
                        <p>{faq.answer}</p>
                    </div>
                </div>
            {/each}
        </div>
    </div>
    <Attr/>
</section>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;600;700&display=swap');
    
    :root {
        /* Colors */
        --faq-color-white: hsl(0, 100%, 100%);
        --faq-color-purple-100: hsl(275, 100%, 97%);
        --faq-color-purple-600: hsl(292, 16%, 49%);
        --faq-color-purple-950: hsl(292, 42%, 14%);
        
        --faq-font-family: 'Work Sans', sans-serif;
    }
    
    .container {
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 24px;
        font-family: var(--faq-font-family);
        font-size: 16px;
        background-color: var(--faq-color-purple-100);
        background-image: var(--bg-mobile);
        background-repeat: no-repeat;
        background-position: top center;
        position: relative;
    }
    
    .accordion-card {
        background-color: var(--faq-color-white);
        border-radius: 16px;
        padding: 24px;
        max-width: 600px;
        width: 100%;
        box-shadow: 0 32px 56px 0 rgba(80, 0, 118, 0.10);
        margin-top: 80px;
    }
    
    .header {
        display: flex;
        align-items: center;
        gap: 24px;
        margin-bottom: 32px;
    }
    
    .star-icon {
        width: 40px;
        height: 41px;
        flex-shrink: 0;
    }
    
    .header h1 {
        font-size: 32px;
        font-weight: 700;
        color: var(--faq-color-purple-950);
        margin: 0;
        line-height: 1;
    }
    
    .faq-list {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    
    .faq-item {
        border-bottom: 1px solid var(--faq-color-purple-100);
        padding-bottom: 20px;
    }
    
    .faq-item:last-child {
        border-bottom: none;
        padding-bottom: 0;
    }
    
    .faq-question {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        background: none;
        border: none;
        padding: 0;
        cursor: pointer;
        text-align: left;
        font-family: var(--faq-font-family);
        font-size: 16px;
        font-weight: 600;
        color: var(--faq-color-purple-950);
        transition: color 0.2s ease;
    }
    
    .faq-question:hover {
        color: var(--faq-color-purple-600);
    }
    
    .faq-question:focus {
        outline: 2px solid var(--faq-color-purple-600);
        outline-offset: 4px;
        border-radius: 4px;
    }
    
    .question-text {
        flex: 1;
    }
    
    .icon-wrapper {
        flex-shrink: 0;
        width: 30px;
        height: 31px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: transform 0.2s ease;
    }
    
    .faq-question.open .icon-wrapper {
        transform: rotate(180deg);
    }
    
    .icon-wrapper svg {
        display: block;
    }
    
    .faq-answer {
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.3s ease, padding-top 0.3s ease;
        padding-top: 0;
    }
    
    .faq-answer.open {
        max-height: 500px;
        padding-top: 20px;
    }
    
    .faq-answer p {
        margin: 0;
        font-size: 14px;
        line-height: 1.5;
        color: var(--faq-color-purple-600);
        font-weight: 400;
    }
    
    @media (min-width: 768px) {
        .container {
            background-image: var(--bg-desktop);
            background-size: cover;
            padding: 40px 24px;
        }
        
        .accordion-card {
            padding: 40px;
            border-radius: 16px;
            margin-top: 0;
        }
        
        .header {
            margin-bottom: 40px;
        }
        
        .star-icon {
            width: 40px;
            height: 41px;
        }
        
        .header h1 {
            font-size: 56px;
        }
        
        .faq-question {
            font-size: 18px;
        }
        
        .faq-answer p {
            font-size: 16px;
        }
    }
</style>
