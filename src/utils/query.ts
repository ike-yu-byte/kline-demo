export function getQuery(): Record<string, string | string[]> {
  // 获取当前URL中的查询字符串（包含问号）
  const queryString = window.location.search;

  // 如果没有查询字符串，返回空对象
  if (!queryString) {
    return {};
  }

  // 移除开头的问号
  const query = queryString.slice(1);

  // 分割成键值对数组
  const pairs = query.split("&");

  // 创建结果对象，类型为字符串或字符串数组的键值对
  const result: Record<string, string | string[]> = {};

  // 遍历处理每个键值对
  pairs.forEach((pair) => {
    // 处理可能存在的没有值的参数（如 ?name&age=20）
    if (!pair) return;

    // 分割键和值（使用decodeURIComponent解码特殊字符）
    const [key, value = ""] = pair.split("=").map(decodeURIComponent);

    // 如果键已经存在，将值转为数组
    if (Object.prototype.hasOwnProperty.call(result, key)) {
      const currentValue = result[key];
      // 如果当前不是数组，先转为数组
      if (typeof currentValue === "string") {
        result[key] = [currentValue, value];
      } else {
        currentValue.push(value);
      }
    } else {
      result[key] = value;
    }
  });

  return result;
}
