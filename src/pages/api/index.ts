import { NextApiRequest, NextApiResponse } from 'next';
import DrawCard from '../../components/DrawCard';
import drawError from '../../errors';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { username, bgColor, borderColor, fontColor } = req.query || {};
  // Drawing the page as an svg
  res.setHeader('Content-Type', 'image/svg+xml');

  const queryInfos = Object.assign({
    username,
    bgColor: bgColor || 'white',
    borderColor: borderColor || '#e4e2e2',
    fontColor: fontColor || 'black',
  });

  if (!username)
    return res.send(
      drawError({
        message: 'Github inválido',
        code: 1,
        ...queryInfos,
      })
    );

  const cacheFinishInSevenDays = 60 * 60 * 24 * 7;

  // Cache Page
  res.setHeader('Cache-Control', `public, max-age=${cacheFinishInSevenDays}`);

  // Draw Card
  res.send(DrawCard(queryInfos));
}
