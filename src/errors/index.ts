import { IError } from '../types/errors';
import { cardInfos } from '../utils/define';

function drawError({ message, code, ...queryInfos }: IError) {
  const { width, height } = cardInfos || {};
  const { fontColor, bgColor, borderColor } = queryInfos || {};

  return `
    <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" fill="none">
      <style>
        .alert { font: 600 16px 'Segoe UI', Ubuntu, Sans-Serif; fill: ${fontColor} }
        .description { font: 600 12px 'Segoe UI', Ubuntu, Sans-Serif; fill: #252525 }
      </style>
      <rect x="0.5" y="0.5" height="99%" width="99%" rx="5" fill="${bgColor}" stroke="${borderColor}"/>
      <text x="25" y="45" class="alert">Um problema foi encontrado!</text>
      <text x="25" y="55" class="description">
        <tspan x="25" dy="18">${message}</tspan>
        <tspan x="25" dy="18" fill="#858585">Error: ${code}</tspan>
      </text>
    </svg>
    `;
}

export default drawError;
