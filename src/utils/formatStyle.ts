import { QueryInfos } from '../types/queryInfos';

function formatStyle(query: QueryInfos) {
  const { fontColor } = query || {};

  const styleCard = `
  <style>
    .defaultText {
        fill: ${fontColor};
    }
    .icon {
        display: block;
    }
    .alert { 
        font: 600 16px 'Segoe UI', Ubuntu, Sans-Serif; fill: ${fontColor} 
    }
    .description { 
        font: 600 12px 'Segoe UI', Ubuntu, Sans-Serif; fill: #252525 
    }
  </style>
`;

  return styleCard;
}

export { formatStyle };
