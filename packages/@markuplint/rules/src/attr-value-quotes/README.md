---
title: attr-value-quotes
---

# Attribute quotes (`attr-value-quotes`)

Warns if the attribute value is not **quoted**.

## Rule Details

👎 Examples of **incorrect** code for this rule

<!-- prettier-ignore-start -->
```html
<div data-attr=value></div>
<div data-attr='value'></div>
```
<!-- prettier-ignore-end -->

`{ attr-value-quotes: ['warning', 'single'] }`

<!-- prettier-ignore-start -->
```html
<div data-attr=value></div>
<div data-attr="value"></div>
```
<!-- prettier-ignore-end -->

👍 Examples of **correct** code for this rule

<!-- prettier-ignore-start -->
```html
<div data-attr="value"></div>
```
<!-- prettier-ignore-end -->

`{ attr-value-quotes: ['warning', 'single'] }`

<!-- prettier-ignore-start -->
```html
<div data-attr='value'></div>
```
<!-- prettier-ignore-end -->

### Options

| value      | default | description                                                          |
| ---------- | ------- | -------------------------------------------------------------------- |
| `"double"` | ✓       | Warns if the attribute value is not quoted on double quotation mark. |
| `"single"` |         | Warns if the attribute value is not quoted on single quotation mark. |

### Default notification level

`warning`
