/* 仅用于布局和编辑试验：全部评分为虚构示意，不是统计或建议。 */
globalThis.ORG_AI_TREEMAP_DEMO = {
  "meta": {
    "title": "AI 技术及组织应用支撑",
    "status": "试验版 · 评分为示意，非行业统计",
    "description": "一级为全景，二级为五个应用视角板块，三级为技术模块。"
  },
  "weights": { "heat": 0.4, "value": 0.6 },
  "categories": [
    {
      "id": "data", "name": "数据与知识", "heat": 4, "value": 5,
      "description": "准备可用数据，组织资料并为回答提供可核查的依据。",
      "children": [
        { "id": "data-governance", "name": "数据治理", "heat": 3, "value": 5, "description": "明确数据来源、质量、权限和责任，让数据可被安全使用。" },
        { "id": "labeling", "name": "清洗与标注", "heat": 3, "value": 4, "description": "整理原始数据并标记答案，为训练和评估准备样本。" },
        { "id": "document", "name": "文档解析", "heat": 4, "value": 4, "description": "识别文件中的文字、结构与字段，减少人工逐项整理。" },
        { "id": "vector-search", "name": "向量与混合检索", "heat": 4, "value": 4, "description": "按语义和关键词查找相关资料，适用于表述多样的知识查询。" },
        { "id": "knowledge-graph", "name": "知识图谱", "heat": 3, "value": 3, "description": "把实体及其关系组织成可查询的结构，适合关系追踪。" },
        { "id": "rag", "name": "RAG", "heat": 5, "value": 5, "description": "先检索授权资料，再结合资料生成回答；仍需检查引用和权限。" }
      ]
    },
    {
      "id": "model", "name": "模型与训练", "heat": 5, "value": 5,
      "description": "选择和训练模型，使其具备预测、理解或生成能力。",
      "children": [
        { "id": "traditional-ml", "name": "传统机器学习", "heat": 3, "value": 5, "description": "从历史样本中学习规律，适合部分分类、预测和排序任务。" },
        { "id": "llm", "name": "大语言模型", "heat": 5, "value": 5, "description": "根据上下文生成语言，可辅助问答、摘要和内容起草。" },
        { "id": "multimodal", "name": "多模态模型", "heat": 5, "value": 4, "description": "结合文字、图像或语音等信息，处理跨模态任务。" },
        { "id": "pretraining", "name": "预训练", "heat": 3, "value": 3, "description": "在大量数据上训练通用能力，投入与数据要求通常较高。" },
        { "id": "fine-tuning", "name": "领域微调", "heat": 4, "value": 4, "description": "用任务样例继续训练模型，调整特定行为或表达方式。" },
        { "id": "alignment", "name": "偏好对齐", "heat": 3, "value": 3, "description": "依据偏好或反馈调整模型行为，不能替代系统权限控制。" },
        { "id": "distillation", "name": "模型蒸馏", "heat": 3, "value": 4, "description": "用较大模型的行为指导较小模型学习，需测试任务质量。" }
      ]
    },
    {
      "id": "deployment", "name": "模型部署与推理", "heat": 4, "value": 5,
      "description": "在合适环境运行模型，并权衡数据控制、成本和响应。",
      "children": [
        { "id": "private-deploy", "name": "私有化部署", "heat": 4, "value": 5, "description": "在组织控制的环境中运行系统，实际数据流仍需核查。" },
        { "id": "cloud-api", "name": "云端 API", "heat": 4, "value": 4, "description": "通过服务接口调用模型，可减少自建运维但需审查服务条款。" },
        { "id": "quantization", "name": "量化压缩", "heat": 4, "value": 4, "description": "降低部分计算精度以减少资源需求，实际效果和速度需实测。" },
        { "id": "inference", "name": "推理加速", "heat": 4, "value": 4, "description": "优化模型运行过程，以改善单位任务成本或响应时间。" },
        { "id": "routing", "name": "路由与缓存", "heat": 3, "value": 4, "description": "根据任务选择模型或复用结果，减少不必要的计算。" },
        { "id": "edge", "name": "边缘部署", "heat": 3, "value": 3, "description": "在接近数据产生位置的设备上运行模型，受设备资源约束。" }
      ]
    },
    {
      "id": "agent", "name": "智能体与应用", "heat": 5, "value": 4,
      "description": "把模型接入任务和工具，帮助人员执行或组织多步骤工作。",
      "children": [
        { "id": "prompt", "name": "提示工程", "heat": 4, "value": 4, "description": "通过指令和上下文交代任务，不直接改变模型参数。" },
        { "id": "workflow", "name": "工作流编排", "heat": 4, "value": 5, "description": "把检索、判断、审核和系统操作组织为受控流程。" },
        { "id": "tools", "name": "工具调用", "heat": 4, "value": 4, "description": "让模型请求受控工具或接口，操作权限由系统约束。" },
        { "id": "agent-task", "name": "智能体", "heat": 5, "value": 4, "description": "根据目标和环境选择步骤并使用工具，需限制权限与动作。" },
        { "id": "multi-agent", "name": "多智能体", "heat": 5, "value": 2, "description": "多个智能体分工协作，额外复杂度需要与单体方案比较。" },
        { "id": "embodied", "name": "具身智能", "heat": 4, "value": 2, "description": "让系统感知环境并控制实体设备，适用性取决于任务和现场条件。" }
      ]
    },
    {
      "id": "evaluation", "name": "评估与治理", "heat": 4, "value": 5,
      "description": "验证效果并控制风险，保证业务负责人能够判断和纠错。",
      "children": [
        { "id": "benchmarks", "name": "模型基准评测", "heat": 4, "value": 3, "description": "在统一数据上比较模型能力，不能替代组织任务验证。" },
        { "id": "task-eval", "name": "应用效果评估", "heat": 4, "value": 5, "description": "比较任务质量、时间、成本和风险，判断实际业务价值。" },
        { "id": "security", "name": "安全防护", "heat": 4, "value": 5, "description": "识别并控制恶意输入、越权调用和不安全输出。" },
        { "id": "privacy", "name": "数据隐私与权限", "heat": 4, "value": 5, "description": "按用途和身份控制资料访问与处理范围。" },
        { "id": "monitoring", "name": "监控与审计", "heat": 3, "value": 5, "description": "记录版本、行为和异常，以便追溯、纠错与持续监测。" },
        { "id": "human-review", "name": "人工监督", "heat": 3, "value": 5, "description": "在适当环节安排复核和升级，明确谁对最终决定负责。" }
      ]
    }
  ]
};
