import type { VercelRequest, VercelResponse } from '@vercel/node';
import { getDailyTip, getRandomTip, dailyTips, dailyTipsHi, type Language } from './_lib/knowledge';

export default function handler(req: VercelRequest, res: VercelResponse) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { lang = 'en', type = 'daily' } = req.query;
    const language: Language = lang === 'hi' ? 'hi' : 'en';

    if (type === 'random') {
      const tip = getRandomTip(language);
      return res.status(200).json({ tip });
    }

    if (type === 'all') {
      const tips = language === 'hi' ? dailyTipsHi : dailyTips;
      return res.status(200).json({ tips, count: tips.length });
    }

    // Default: daily tip
    const { tip, index } = getDailyTip(language);
    return res.status(200).json({ tip, index });

  } catch (error) {
    console.error('Tips error:', error);
    return res.status(500).json({ error: 'An error occurred' });
  }
}
