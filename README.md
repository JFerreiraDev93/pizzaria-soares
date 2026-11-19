# Pizzaria Soares · site

Site de uma página para a Pizzaria Soares (Cabeça Santa, Penafiel). HTML, CSS e JavaScript simples, sem build nem dependências.

## Estrutura

```
index.html          página principal (SEO, dados estruturados, todas as secções)
css/style.css       estilos (cores e tipos no :root)
js/main.js          ementa, horário "aberto agora", menu no telemóvel, carrossel, mapa
img/                fotos (jpg + webp) e imagem de partilha og.jpg
fonts/              fontes alojadas localmente (sem pedidos ao Google)
privacidade.html    política de privacidade
404.html            página de erro
```

## Alterações comuns

- **Preços e pratos:** objeto `MENU` no início de `js/main.js`.
- **Horário:** três sítios, mantenha-os iguais: a lista `#hours` em `index.html`, o objeto `HOURS` em `js/main.js` (minutos desde a meia-noite) e o bloco `openingHoursSpecification` no `<head>`.
- **Fotos:** substitua os ficheiros em `img/` mantendo o nome (jpg e webp).

## Por preencher

- Média e número de avaliações Google (procurar `TODO` em `index.html`).
- NIF / denominação social no rodapé.
- Se usarem um domínio próprio, troque `https://jferreiradev93.github.io/pizzaria-soares/` em `index.html`, `robots.txt` e `sitemap.xml`, e o prefixo `/pizzaria-soares/` em `404.html`.

## Testar localmente

```
python3 -m http.server 8000
```
e abrir http://localhost:8000.
