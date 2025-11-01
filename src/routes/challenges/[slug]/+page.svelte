<script>
    import { page } from '$app/stores';
    
    // Get data from load function (+page.js validates and provides challenge)
    $: slug = $page.params.slug;
    $: challenge = $page.data?.challenge;
    $: componentModule = $page.data?.componentModule;
    
    // Component is now loaded server-side via +page.js
    $: Component = componentModule?.default || null;
</script>

{#if Component && challenge}
    <svelte:component this={Component} />
{:else}
    <div class="loading">
        <p>Loading challenge...</p>
    </div>
{/if}

<style>
    .loading {
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
        font-size: 1rem;
        color: hsl(224, 30%, 27%);
    }
</style>

