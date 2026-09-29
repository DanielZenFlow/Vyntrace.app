# Vyntrace.app

The public site for Vyntrace: a home page and the privacy policy Google asks for.
Plain HTML, CSS and one small script. No build step, no dependencies.

    index.html      home page (English, 中文, Dansk)
    privacy.html    privacy policy
    style.css       the phone app's palette: cream, ink, moss; Figtree and Fraunces
    site.js         language switch and the year in the footer
    assets/         mark, app icon, five plants, the two fonts with their OFL texts

## Look at it

    node -e "require('http').createServer((q,r)=>{const f=require('fs'),p=require('path');let u=q.url.split('?')[0];if(u.endsWith('/'))u+='index.html';const fp=p.join(process.cwd(),u);f.readFile(fp,(e,d)=>{if(e){r.writeHead(404);return r.end('no')}const t={'.html':'text/html','.css':'text/css','.js':'text/javascript','.png':'image/png','.webp':'image/webp','.ttf':'font/ttf','.woff2':'font/woff2'}[p.extname(fp)]||'application/octet-stream';r.writeHead(200,{'content-type':t});r.end(d)})}).listen(8080)"

then open http://localhost:8080.

Fonts: Figtree and Fraunces, SIL Open Font License (texts in `assets/fonts`).
