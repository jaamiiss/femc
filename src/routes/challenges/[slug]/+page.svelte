<script>
    import { page } from '$app/stores';
    import { onMount } from 'svelte';
    
    // Get data from load function (+page.js validates and provides challenge)
    $: slug = $page.params.slug;
    $: challenge = $page.data?.challenge;
    
    let Component = null;
    let loadError = null;
    
    // Load component immediately on mount - no spinner
    onMount(async () => {
        if (challenge && slug) {
            try {
                const { importComponent } = await import('$lib/config/challenge-routes');
                const module = await importComponent(slug, challenge.level);
                Component = module.default;
            } catch (err) {
                console.error(`Failed to load component for ${slug}:`, err);
                loadError = err instanceof Error ? err.message : String(err);
            }
        }
    });
</script>

{#if loadError}
    <div class="error">
        <p>Error loading challenge: {loadError}</p>
        <a href="/challenges">Back to Challenges</a>
    </div>
{:else if Component && challenge}
    <svelte:component this={Component} />
{/if}

<style>
    .error {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
        font-size: 1.25rem;
        gap: 16px;
        color: #dc2626;
    }
    
    .error a {
        color: #3b82f6;
        text-decoration: underline;
    }
</style>

