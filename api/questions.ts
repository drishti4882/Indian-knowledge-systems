import type { VercelRequest, VercelResponse } from '@vercel/node';
import { suggestedQuestions, suggestedQuestionsHi, type Language } from './_lib/knowledge';

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
    const { lang = 'en', count = '6', shuffle = 'true', type = 'suggested' } = req.query;
    const language: Language = lang === 'hi' ? 'hi' : 'en';
    const numCount = Math.min(parseInt(count as string) || 6, 12);
    const shouldShuffle = shuffle !== 'false';

    const allQuestions = language === 'hi' ? suggestedQuestionsHi : suggestedQuestions;

    if (type === 'all') {
      return res.status(200).json({ questions: allQuestions, count: allQuestions.length });
    }

    if (type === 'categories') {
      const categories = language === 'hi' 
        ? {
            ayurveda: ['आयुर्वेद क्या है?', 'तीन दोषों के बारे में बताएं', 'दैनिक दिनचर्या बताएं'],
            yoga: ['योग क्या है?', 'प्राणायाम समझाएं', 'सूर्य नमस्कार के चरण'],
            philosophy: ['वेद क्या हैं?', 'धर्म क्या है?', 'भगवद गीता के बारे में बताएं'],
            mathematics: ['आर्यभट्ट कौन थे?', 'शून्य की कहानी'],
            history: ['सुश्रुत कौन थे?'],
          }
        : {
            ayurveda: ['What is Ayurveda?', 'Tell me about the three Doshas', 'Daily routine (Dinacharya)'],
            yoga: ['What is Yoga?', 'Explain Pranayama', 'Surya Namaskar steps'],
            philosophy: ['What are the Vedas?', 'What is Dharma?', 'Tell me about Bhagavad Gita'],
            mathematics: ['Who was Aryabhata?', 'Story of Zero'],
            history: ['Who was Sushruta?'],
          };
      return res.status(200).json({ categories });
    }

    // Default: suggested questions
    let questions: string[];
    if (shouldShuffle) {
      const shuffled = [...allQuestions].sort(() => Math.random() - 0.5);
      questions = shuffled.slice(0, numCount);
    } else {
      questions = allQuestions.slice(0, numCount);
    }

    return res.status(200).json({ questions });

  } catch (error) {
    console.error('Questions error:', error);
    return res.status(500).json({ error: 'An error occurred' });
  }
}
