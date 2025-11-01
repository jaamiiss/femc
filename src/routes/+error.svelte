<script>
    import { page } from '$app/stores';
    
    $: status = $page.status || 404;
    $: message = status === 404 
        ? "Page Not Found" 
        : status === 500 
        ? "Internal Server Error" 
        : `Error ${status}`;
</script>

<section class="error-container">
    <div class="error-content">
        <h1 class="error-code">{status}</h1>
        <h2 class="error-title">{message}</h2>
        <p class="error-description">
            {#if status === 404}
                The page you're looking for doesn't exist or has been moved.
            {:else}
                Something went wrong. Please try again later.
            {/if}
        </p>
        <div class="error-actions">
            <a href="/" class="btn-primary">Go Home</a>
            <a href="/challenges" class="btn-secondary">View Challenges</a>
        </div>
    </div>
</section>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700&display=swap');

    .error-container {
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 24px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        font-family: 'Outfit', sans-serif;
    }

    .error-content {
        text-align: center;
        background: white;
        border-radius: 16px;
        padding: 60px 40px;
        max-width: 600px;
        width: 100%;
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    }

    .error-code {
        font-size: 120px;
        font-weight: 700;
        line-height: 1;
        margin: 0 0 16px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }

    .error-title {
        font-size: 32px;
        font-weight: 700;
        color: #111827;
        margin: 0 0 16px;
    }

    .error-description {
        font-size: 18px;
        color: #6b7280;
        line-height: 1.6;
        margin: 0 0 32px;
    }

    .error-actions {
        display: flex;
        gap: 16px;
        justify-content: center;
        flex-wrap: wrap;
    }

    .btn-primary,
    .btn-secondary {
        padding: 12px 24px;
        border-radius: 8px;
        font-size: 16px;
        font-weight: 600;
        text-decoration: none;
        transition: all 0.2s ease;
        font-family: 'Outfit', sans-serif;
    }

    .btn-primary {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
    }

    .btn-primary:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
    }

    .btn-secondary {
        background: white;
        color: #667eea;
        border: 2px solid #667eea;
    }

    .btn-secondary:hover {
        background: #667eea;
        color: white;
        transform: translateY(-2px);
    }

    @media (max-width: 480px) {
        .error-content {
            padding: 40px 24px;
        }

        .error-code {
            font-size: 80px;
        }

        .error-title {
            font-size: 24px;
        }

        .error-actions {
            flex-direction: column;
        }

        .btn-primary,
        .btn-secondary {
            width: 100%;
        }
    }
</style>

