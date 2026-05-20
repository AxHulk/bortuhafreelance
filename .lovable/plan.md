## Что сделать

Добавить файл `public/.htaccess` с правилами SPA-fallback для Apache (хостинг рег.ру Host-0). Vite автоматически копирует всё из `public/` в корень `dist/` при сборке, поэтому после следующего деплоя файл окажется на хостинге рядом с `index.html`.

## Содержимое `public/.htaccess`

```apache
# SPA fallback для React Router (BrowserRouter)
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /

  # Реальные файлы и папки отдаём как есть
  # (assets, sitemap.xml, robots.txt, favicon и т.д.)
  RewriteCond %{REQUEST_FILENAME} -f [OR]
  RewriteCond %{REQUEST_FILENAME} -d
  RewriteRule ^ - [L]

  # Всё остальное — на index.html, роутинг разрулит React
  RewriteRule ^ index.html [L]
</IfModule>

# Корректные MIME-типы (на всякий случай)
<IfModule mod_mime.c>
  AddType application/javascript          .js .mjs
  AddType text/css                        .css
  AddType image/svg+xml                   .svg
  AddType application/json                .json
  AddType application/manifest+json       .webmanifest
  AddType image/webp                      .webp
  AddType image/avif                      .avif
  AddType font/woff2                      .woff2
</IfModule>

# Сжатие
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/css application/javascript application/json image/svg+xml
</IfModule>

# Кэширование статики (хэшируется Vite — можно агрессивно)
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType text/html                 "access plus 0 seconds"
  ExpiresByType text/css                  "access plus 1 year"
  ExpiresByType application/javascript    "access plus 1 year"
  ExpiresByType image/jpeg                "access plus 1 year"
  ExpiresByType image/png                 "access plus 1 year"
  ExpiresByType image/webp                "access plus 1 year"
  ExpiresByType image/svg+xml             "access plus 1 month"
  ExpiresByType font/woff2                "access plus 1 year"
</IfModule>
```

## Важные нюансы

- Роутер пока остаётся `HashRouter` — не трогаем. Это отдельный шаг: сначала вы заливаете сборку с `.htaccess`, проверяете, что `/portfolio` и F5 работают, и только потом я переключаю на `BrowserRouter` отдельным запросом.
- Vite копирует `public/` как есть, включая dot-файлы (`.htaccess`). Никаких изменений в `vite.config.ts` не нужно.
- Если ваш GitHub Actions деплой использует `actions/checkout` + загружает `dist/` — `.htaccess` поедет. Если деплоится только содержимое `dist/`, тоже всё ок.

## Проверка после деплоя

1. Открыть `https://designfursa.ru/portfolio` напрямую — должна открыться страница портфолио (а не 404).
2. Перейти в любой раздел и нажать F5 — страница перезагружается без ошибки.
3. Только после успешной проверки — отдельным запросом переключаем `HashRouter` → `BrowserRouter`.
