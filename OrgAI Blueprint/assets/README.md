# 素材

本目录存放正文和 PPT 使用的图片与图表源文件。

| 目录 | 用途 |
|---|---|
| `images/` | 导出后的图片（PNG、SVG 等），供正文和 PPT 引用 |
| `diagrams/` | 图表源文件，例如技术全景图、矩阵、流程图的可编辑源文件 |

## 规则

- 图表源文件优先使用 Mermaid，或其他可编辑、可版本管理的格式；不只提交无法修改的截图。
- 导出图片与源文件同名，便于对照，例如 `diagrams/tech-map.mmd` 对应 `images/tech-map.svg`。
- 文件命名使用小写英文加连字符，与 [STYLE_GUIDE.md](../STYLE_GUIDE.md) 第 7 节一致。
- 第三方图片须注明来源与授权方式，并登记到 [references/sources.md](../references/sources.md)；授权不明的图片不得使用。
- 图中数字须与正文一致并有来源。

> TODO：首批图表待制作。
