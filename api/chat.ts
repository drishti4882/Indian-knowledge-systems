import type { VercelRequest, VercelResponse } from '@vercel/node';
import { findBestResponse, getDefaultResponse, getRandomTip, type Language } from './_lib/knowledge';

function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { message, language = 'en' } = req.body;

    // Validate input
    if (!message || typeof message !== 'string') {
      return res.status(400).json({ error: 'Message is required' });
    }

    const trimmedMessage = message.trim();
    if (trimmedMessage.length === 0) {
      return res.status(400).json({ error: 'Message cannot be empty' });
    }

    if (trimmedMessage.length > 1000) {
      return res.status(400).json({ error: 'Message is too long (max 1000 characters)' });
    }

    const lang: Language = language === 'hi' ? 'hi' : 'en';

    // Find best response
    const result = findBestResponse(trimmedMessage, lang);

    let responseContent: string;
    let category: string | undefined;

    if (result) {
      responseContent = result.response;
      category = result.category;
    } else {
      responseContent = getDefaultResponse(trimmedMessage, lang);
      category = undefined;
    }

    // Add daily tip occasionally (30% chance)
    let tip: string | undefined;
    if (result && Math.random() < 0.3) {
      tip = getRandomTip(lang);
      responseContent += `\n\n---\n\n${tip}`;
    }

    return res.status(200).json({
      id: generateId(),
      message: responseContent,
      category,
      timestamp: new Date().toISOString(),
      tip,
    });

  } catch (error) {
    console.error('Chat error:', error);
    return res.status(500).json({ error: 'An error occurred' });
  }
}
