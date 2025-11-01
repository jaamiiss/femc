<script>
    import { page } from '$app/stores';
    import { getLayoutConfig } from '$lib/config/challenge-layouts';
    import { onMount } from 'svelte';
    import { browser } from '$app/environment';
    import '../../app.css';
    
    $: slug = $page.params.slug;
    $: layoutConfig = getLayoutConfig(slug);
    $: fontFamily = layoutConfig.fontFamily || 'inherit';
    $: hasCustomFont = !!layoutConfig.fontFamily;
    $: isThreeColumn = slug === 'three-column-preview-card';
    
    // Set CSS variables on document root (Svelte-standard approach)
    function setCSSVariables() {
        if (!browser) return;
        const root = document.documentElement;
        root.style.setProperty('--attr-text-color', layoutConfig.attrColors.text);
        root.style.setProperty('--attr-link-color', layoutConfig.attrColors.link);
        root.style.setProperty('--attr-link-hover-color', layoutConfig.attrColors.linkHover);
        root.style.setProperty('--attr-font-family', fontFamily);
    }
    
    // Set variables when config changes (reactive statement)
    $: if (layoutConfig && browser) {
        setCSSVariables();
    }
    
    // Also set on mount to ensure they're applied
    onMount(() => {
        setCSSVariables();
    });
</script>

<svelte:head>
    <title>{layoutConfig.title}</title>
    {#if layoutConfig.fontImport}
        {@html `<link rel="stylesheet" href="${layoutConfig.fontImport}">`}
    {/if}
</svelte:head>

<div class="layout-wrapper" class:has-custom-font={hasCustomFont} class:three-column={isThreeColumn}>
    <slot />
</div>

<style>
    :global(.has-custom-font .container .attribution) {
        font-family: var(--attr-font-family);
    }
    
    @media (max-width: 1025px) {
        :global(.three-column .container .attribution) {
            position: relative;
        }
    }
</style>

