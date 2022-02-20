import { QueryInfos } from '../types/queryInfos';

function DrawCard(query: QueryInfos) {
  return `
    <svg xmlns="http://www.w3.org/2000/svg" width="495" height="195" viewBox="0 0 495 195" fill="none">
      <style>
      .defaultText {
        fill: ${query.fontColor || 'white'};
      }
      </style>
      <rect
          x="0.5"
          y="0.5"
          rx="5"
          height="99%"
          stroke="${query.borderColor || 'white'}"
          width="99%"
          fill="${query.bgColor || 'white'}"
          stroke-opacity="1"
        />
      <text class="defaultText" y="35">${query.username}</text>
      </svg>
  `;
}

export default DrawCard;
