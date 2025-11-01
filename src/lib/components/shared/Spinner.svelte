<script>
    export let size = 40;
    export let color = "#667eea";
</script>

<div class="spinner" style="width: {size}px; height: {size}px; border-top-color: {color};">
    <div class="spinner-inner"></div>
</div>

<style>
    .spinner {
        display: inline-block;
        border: 3px solid rgba(0, 0, 0, 0.1);
        border-radius: 50%;
        border-top-color: #667eea;
        animation: spin 0.8s linear infinite;
    }
    
    .spinner-inner {
        width: 100%;
        height: 100%;
        border: 3px solid transparent;
        border-top-color: currentColor;
        border-radius: 50%;
        animation: spin 0.6s linear infinite reverse;
        opacity: 0.5;
    }
    
    @keyframes spin {
        to {
            transform: rotate(360deg);
        }
    }
</style>

