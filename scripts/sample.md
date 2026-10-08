# Release notes

A **fast**, terminal-native document viewer, with `inline code`
and a [link](https://termdoc.app).

## Formats

- Markdown, plain text, logs, data files and source code
- Detection for HTML, PDF and the Office family
  - and the Office/ZIP family
- PDF and EPUB are on the roadmap

| Format | Status | Milestone |
| ------ | :----: | --------- |
| Markdown | ready | M0 |
| HTML | detected | M3 |
| PDF | pending | M3 |

```rust
fn main() {
    println!("hello");
}
```

> Streaming by default: a 488 MB log costs 1.4 MB of memory.
