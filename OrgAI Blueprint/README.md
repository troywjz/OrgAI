# OrgAI Blueprint：组织 AI 应用全景与应用策划

帮助企业与组织的管理决策者回答三个问题：AI 能为我们做什么，应该先做什么，怎么做成并证明做成了。

先读 [全景与内容策划](BLUEPRINT_PLAN.md) 了解适用对象、章节结构、选型流程和交付计划；首批材料从[审阅入口](docs/00-overview/04-review-pack-v1.md)进入，实际进度见 [建设路线图](ROADMAP.md)。

适用对象以企业为主，同时覆盖政府机关、事业单位、公共服务机构和非营利组织。凡是不同组织类型存在明显差异的地方（预算机制、采购流程、数据合规、考核方式），文档会单独说明。

## 内容结构

| 章节 | 回答的问题 | 主要读者 |
|---|---|---|
| [00 总览](docs/00-overview/README.md) | 这套蓝图怎么读，各角色先看哪里 | 所有人 |
| [01 AI 技术全景](docs/01-tech-landscape/README.md) | 有哪些技术、分别适合什么问题、为什么选这个不选那个 | 决策者、IT 负责人 |
| [02 AI 应用全景](docs/02-application-landscape/README.md) | AI 在组织里落成哪几类应用形态 | 决策者、业务负责人 |
| [03 组织应用场景](docs/03-org-scenarios/README.md) | 按职能、行业、组织类型，哪些场景值得做 | 业务负责人 |
| [04 实施与部署](docs/04-implementation/README.md) | 从立项到上线的路径，云、私有化、混合怎么选 | IT 负责人、项目经理 |
| [05 案例](docs/05-cases/README.md) | 别人做成了什么、踩了什么坑 | 所有人 |
| [06 效果评估](docs/06-evaluation/README.md) | 怎么衡量 ROI 和业务效果，用什么工具 | 决策者、财务、项目经理 |
| [07 组织转型](docs/07-transformation/README.md) | 人、流程、组织结构如何随 AI 调整 | 决策者、HR |
| [08 治理与合规](docs/08-governance/README.md) | 风险、安全、合规、伦理如何管控 | 决策者、法务、IT 负责人 |

## 目录说明

```
OrgAI Blueprint/
├── README.md          本文件
├── BLUEPRINT_PLAN.md  全景与内容策划
├── STYLE_GUIDE.md     写作规范（所有内容必须遵守）
├── ROADMAP.md         建设路线图与进度
├── GLOSSARY.md        术语表（全项目统一用词）
├── docs/              正文，按章节分目录
├── templates/         技术卡、场景卡、案例卡、评估表等模板
├── slides/            PPT 规划、大纲与成品
├── assets/            图片与图表源文件
└── references/        参考资料与来源登记
```

## 呈现形式

正文以 Markdown 编写，作为单一事实来源。Word 文档和 PPT 都从 Markdown 正文派生，避免多份内容不一致。PPT 规划见 [slides/README.md](slides/README.md)。

## 贡献

动笔前先读 [STYLE_GUIDE.md](STYLE_GUIDE.md)。新增技术、场景或案例时，从 [templates/](templates/) 复制对应模板。引用数据必须登记到 [references/sources.md](references/sources.md)。
