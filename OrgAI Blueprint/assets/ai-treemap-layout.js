/* 布局与评分逻辑：可由离线网页和 PowerPoint 生成脚本共同使用。 */
(function (root) {
  'use strict';

  function getWeights(data) {
    const heat = Number(data.weights?.heat);
    const value = Number(data.weights?.value);
    const total = heat + value;
    if (!Number.isFinite(heat) || !Number.isFinite(value) || heat < 0 || value < 0 || total <= 0) {
      throw new Error('权重必须是非负数，且总和大于零。');
    }
    return { heat: heat / total, value: value / total };
  }

  function score(item, weights) {
    return Number(item.heat) * weights.heat + Number(item.value) * weights.value;
  }

  // 逐行选择接近正方形的布局；每个矩形的几何面积严格按输入权重计算。
  function squarify(items, x, y, width, height) {
    const remaining = items
      .filter(item => Number.isFinite(item.weight) && item.weight > 0)
      .map((item, index) => ({ ...item, order: index }))
      .sort((a, b) => b.weight - a.weight || a.order - b.order);
    const total = remaining.reduce((sum, item) => sum + item.weight, 0);
    if (!total || width <= 0 || height <= 0) return [];
    for (const item of remaining) item.area = item.weight * width * height / total;
    const output = [];
    let row = [];

    function worst(entries, side) {
      if (!entries.length || side <= 0) return Infinity;
      const sum = entries.reduce((s, item) => s + item.area, 0);
      const min = Math.min(...entries.map(item => item.area));
      const max = Math.max(...entries.map(item => item.area));
      return Math.max(side * side * max / (sum * sum), sum * sum / (side * side * min));
    }

    function place(entries) {
      const area = entries.reduce((sum, item) => sum + item.area, 0);
      if (width >= height) {
        const rowWidth = area / height;
        let nextY = y;
        for (const item of entries) {
          const itemHeight = item.area / rowWidth;
          output.push({ item: item.item, x, y: nextY, width: rowWidth, height: itemHeight });
          nextY += itemHeight;
        }
        x += rowWidth;
        width -= rowWidth;
      } else {
        const rowHeight = area / width;
        let nextX = x;
        for (const item of entries) {
          const itemWidth = item.area / rowHeight;
          output.push({ item: item.item, x: nextX, y, width: itemWidth, height: rowHeight });
          nextX += itemWidth;
        }
        y += rowHeight;
        height -= rowHeight;
      }
    }

    while (remaining.length) {
      const next = remaining[0];
      const side = Math.min(width, height);
      if (!row.length || worst([...row, next], side) <= worst(row, side)) {
        row.push(remaining.shift());
      } else {
        place(row);
        row = [];
      }
    }
    if (row.length) place(row);
    return output;
  }

  function layout(data, width, height) {
    const weights = getWeights(data);
    const groups = data.categories;
    const total = groups.reduce((sum, group) => sum + score(group, weights), 0);
    if (!total) return [];
    return squarify(groups.map(group => ({ item: group, weight: score(group, weights) })), 0, 0, width, height)
      .map(groupRect => {
        const group = groupRect.item;
        const groupScore = score(group, weights);
        const groupShare = groupScore / total;
        const childTotal = group.children.reduce((sum, child) => sum + score(child, weights), 0);
        const children = childTotal ? squarify(
          group.children.map(child => ({ item: child, weight: score(child, weights) })),
          0, 0, groupRect.width, groupRect.height
        ).map(childRect => ({
          ...childRect,
          score: score(childRect.item, weights),
          parentShare: score(childRect.item, weights) / childTotal,
          totalShare: groupShare * score(childRect.item, weights) / childTotal
        })) : [];
        return { ...groupRect, score: groupScore, totalShare: groupShare, children };
      });
  }

  root.OrgAITreemapLayout = { getWeights, score, squarify, layout };
})(globalThis);
