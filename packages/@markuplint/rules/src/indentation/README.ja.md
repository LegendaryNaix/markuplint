# インデント (`indentation`)

インデントが統一されていないと警告します。

**🔧 自動補正可能**

## ルールの詳細

👎 間違ったコード例

<!-- prettier-ignore-start -->
```html
<div>
  <span>lorem</span>
	ipsam
   </div>
```
<!-- prettier-ignore-end -->

<!-- prettier-ignore-start -->
👍 正しいコード例

<!-- prettier-ignore-start -->
```html
<div>
	<span>lorem</span>
	ipsam
</div>
```
<!-- prettier-ignore-end -->

### 設定値

型: `"tab" | number`

| 設定値  | デフォルト | 解説                                         |
| ------- | ---------- | -------------------------------------------- |
| `"tab"` |            | タブ文字に統一します。                       |
| [数値]  | `2`        | 指定した数値の幅のスペース文字（正の整数）。 |

### デフォルトの警告レベル

`warning`
