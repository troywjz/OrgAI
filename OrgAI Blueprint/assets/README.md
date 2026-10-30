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
- 图中引用的事实数字须与正文一致并有来源；虚构的试验或算例数据须清楚标注为示意。

## 已使用素材

- [决策者版封面概念图](orgai-executive-cover-v1.png)：使用内置 imagegen 生成，作为概念插画，不表示真实组织或事件。用于 `slides/orgai-executive-review-v1.pptx` 封面。
- [AI 技术矩形树图交互试验](ai-treemap-prototype.html)：离线浏览器版，可修改五个板块及技术模块的名称、评分与说明，调整权重、增删模块，并导入或导出 JSON。所用分值全部为虚构示意。移动或分享时须同时保留 [示意数据](ai-treemap-demo-data.js) 和 [布局计算](ai-treemap-layout.js) 两个同目录文件；页面不自动保存修改，请导出 JSON 留存。

生成提示词：

> Use case: productivity-visual. Asset: cover background for a sophisticated Chinese executive presentation about enterprise and public-organization AI. Create a refined abstract visual of a real-world organization connected to an information network: translucent architectural layers, subtle luminous paths and nodes, suggestion of knowledge turning into practical decisions. Wide 16:9 landscape composition with the left half mostly deep midnight navy negative space for editable title text; concentrate the elegant visual elements on the right. Clean, premium editorial style, dark navy with restrained cyan and warm pale gold accents, professional, not sci-fi, no human figures, no logo, no words, no letters, no numbers, no charts, no watermark. Do not imply this is an actual organization or photographic record.
