# termdoc.app

Source for [termdoc.app](https://termdoc.app), the site for
[termdoc](https://github.com/marturojt/termdoc). Built with
[Next.js](https://nextjs.org/), deployed on Vercel.

Sibling to [dapctl.com](https://dapctl.com): same structure, same monospace
discipline, different phosphor. dapctl is a green CRT; this one is amber.

## Local dev

```sh
npm install
npm run dev   # http://localhost:3000
```

## The demo blocks are real

The terminal output on the page is not a mock-up. `scripts/gen-demo.py` runs the
actual `termdoc` binary over `scripts/sample.md` and translates the ANSI it emits
into spans, so the page shows exactly what a terminal shows. Regenerate it
whenever the renderer's colours, glyphs or wrapping change:

```sh
npm run demo                                          # termdoc from PATH
TERMDOC=../termdoc/target/release/termdoc npm run demo # or a local build
```

It writes `app/demo.ts`, which is committed — the site builds on Vercel without
needing Rust. The script exits with an error rather than guessing if termdoc ever
emits a style it does not know how to map.
