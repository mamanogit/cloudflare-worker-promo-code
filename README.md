# Cloudflare Worker Promo Code

Este é um Worker do Cloudflare que redireciona solicitações para o domínio `shadow-illusion.com` com um cabeçalho `User-Agent` modificado.

## Como usar

1. Instale o Wrangler CLI: `npm install -g wrangler`.
2. Configure o arquivo `wrangler.toml` com seu `account_id`.
3. Implante o Worker: `wrangler publish`.