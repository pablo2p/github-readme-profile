import { QueryInfos } from '../types/queryInfos';
import { card } from '../utils/define';
import { formatStyle } from '../utils/formatStyle';

function DrawCard(query: QueryInfos) {
  const { width, height } = card || {};

  try {
  } catch (e) {}

  return `
    <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" fill="none">
      ${formatStyle(query)}
      <rect
          x="0.5"
          y="0.5"
          rx="5"
          height="99%"
          stroke="${query.borderColor}"
          width="99%"
          fill="${query.bgColor}"
          stroke-opacity="1"
        />
      <text class="defaultText" y="35">${query.username}</text>
      </svg>
  `;
}

export default DrawCard;
