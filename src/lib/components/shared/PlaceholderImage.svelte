<script>
    export let src;
    export let alt = "";
    export let width = "100%";
    export let height = "auto";
    export let className = "";
    
    let imageLoaded = false;
    let imageError = false;
    
    // Validate and normalize the src URL
    $: validSrc = src && src.trim() && !src.endsWith('/') ? src.trim() : null;
    
    function handleLoad() {
        imageLoaded = true;
        imageError = false;
    }
    
    function handleError() {
        imageError = true;
        imageLoaded = false;
    }
</script>

<div class="placeholder-container" class:loaded={imageLoaded} style="width: {width}; height: {height};">
    {#if !imageLoaded || imageError}
        <div class="placeholder-content">
            <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="120" height="120" rx="8" fill="#f3f4f6"/>
                <rect x="45" y="45" width="30" height="30" rx="4" fill="#d1d5db" opacity="0.5"/>
                <path d="M45 55L55 65L75 45" stroke="#9ca3af" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" opacity="0.5"/>
            </svg>
            <span class="placeholder-text">Coming Soon</span>
        </div>
    {/if}
    {#if validSrc}
        <img 
            src={validSrc} 
            alt={alt}
            on:load={handleLoad}
            on:error={handleError}
            class="placeholder-img {className}"
            style="display: {imageLoaded && !imageError ? 'block' : 'none'}; width: 100%; height: 100%; object-fit: cover;"
        />
    {:else}
        <!-- Invalid or empty src, show placeholder -->
    {/if}
</div>

<style>
    .placeholder-container {
        position: relative;
        background: #f3f4f6;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
    }
    
    .placeholder-content {
        position: absolute;
        inset: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 16px;
        padding: 24px;
    }
    
    .placeholder-text {
        font-size: 0.875rem;
        font-weight: 600;
        color: #9ca3af;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }
    
    .placeholder-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    
    .placeholder-container.loaded .placeholder-content {
        display: none;
    }
</style>

