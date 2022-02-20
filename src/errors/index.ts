import { IError } from '../types/errors';
import { cardError, icons } from '../utils/define';
import { formatStyle } from '../utils/formatStyle';

function drawError({ message, code, ...queryInfos }: IError) {
  const { width, height } = cardError || {};
  const { bgColor, borderColor } = queryInfos || {};

  return `
    <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" fill="none">
      ${formatStyle(queryInfos)}
      <rect x="0.5" y="0.5" height="99%" width="99%" rx="5" fill="${bgColor}" stroke="${borderColor}"/>
      <text x="25" y="45" class="alert">Um problema foi encontrado!</text>
      <text x="25" y="55" class="description">  
        <tspan x="25" dy="18">${icons['star']} aqui - ${message}</tspan>
        <tspan x="25" dy="18" fill="#858585">Error: ${code}</tspan>
      </text>
    </svg>
    `;
}

export default drawError;
