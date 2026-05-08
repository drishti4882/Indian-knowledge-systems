export interface KnowledgeEntry {
  keywords: string[];
  response: string;
  responseHi?: string;
  category: string;
}

export type Language = 'en' | 'hi';

export const dailyTips = [
  "🌿 **Today's Tip:** Start your morning with a glass of warm water and a pinch of turmeric to aid digestion and boost immunity.",
  "🧘 **Today's Tip:** Practice 5 minutes of deep breathing (Pranayama) before bed to improve sleep quality.",
  "🌅 **Today's Tip:** The ancient practice of *Surya Namaskar* (Sun Salutation) combines 12 yoga poses for a complete body workout.",
  "🍵 **Today's Tip:** According to Ayurveda, drinking warm water throughout the day helps balance all three Doshas.",
  "📿 **Today's Tip:** Chanting 'Om' for just 2 minutes can reduce cortisol levels and calm the mind — a practice backed by modern neuroscience.",
  "🌺 **Today's Tip:** Triphala, a blend of three fruits (Amalaki, Bibhitaki, Haritaki), is one of Ayurveda's most versatile remedies for digestive health.",
  "🧠 **Today's Tip:** The concept of *Swadhyaya* (self-study) from Yoga Sutras encourages daily self-reflection for personal growth.",
  "🌙 **Today's Tip:** Ayurveda recommends going to bed by 10 PM, as the Pitta period (10 PM–2 AM) is when the body naturally detoxifies.",
];

export const dailyTipsHi = [
  "🌿 **आज का सुझाव:** सुबह एक गिलास गर्म पानी में एक चुटकी हल्दी मिलाकर पीएं — यह पाचन में सहायता करता है और प्रतिरक्षा बढ़ाता है।",
  "🧘 **आज का सुझाव:** रात को सोने से पहले 5 मिनट गहरी सांस (प्राणायाम) का अभ्यास करें — नींद की गुणवत्ता में सुधार होगा।",
  "🌅 **आज का सुझाव:** सूर्य नमस्कार 12 योग आसनों का संयोजन है जो पूरे शरीर की कसरत कराता है।",
  "🍵 **आज का सुझाव:** आयुर्वेद के अनुसार, दिन भर गर्म पानी पीना तीनों दोषों को संतुलित करने में मदद करता है।",
  "📿 **आज का सुझाव:** सिर्फ 2 मिनट 'ॐ' का जाप करने से कोर्टिसोल का स्तर कम होता है और मन शांत होता है।",
  "🌺 **आज का सुझाव:** त्रिफला (आंवला, बहेड़ा, हरड़) आयुर्वेद की सबसे बहुमुखी औषधि है — पाचन स्वास्थ्य के लिए उत्तम।",
  "🧠 **आज का सुझाव:** योग सूत्रों की *स्वाध्याय* (आत्म-अध्ययन) की अवधारणा दैनिक आत्म-चिंतन को प्रोत्साहित करती है।",
  "🌙 **आज का सुझाव:** आयुर्वेद रात 10 बजे तक सो जाने की सलाह देता है, क्योंकि पित्त काल (10 PM–2 AM) में शरीर स्वाभाविक रूप से विषहरण करता है।",
];

export const suggestedQuestions = [
  "What is Ayurveda?",
  "Tell me about the three Doshas",
  "How can Yoga help with stress?",
  "What is Pranayama?",
  "Who was Aryabhata?",
  "Explain the concept of Dharma",
  "What is Surya Namaskar?",
  "Tell me about ancient Indian mathematics",
  "What are the Vedas?",
  "Suggest a daily routine based on Ayurveda",
  "Who was Sushruta?",
  "What is meditation in Indian tradition?",
];

export const suggestedQuestionsHi = [
  "आयुर्वेद क्या है?",
  "तीन दोषों के बारे में बताएं",
  "योग तनाव में कैसे मदद करता है?",
  "प्राणायाम क्या है?",
  "आर्यभट्ट कौन थे?",
  "धर्म की अवधारणा समझाएं",
  "सूर्य नमस्कार क्या है?",
  "प्राचीन भारतीय गणित के बारे में बताएं",
  "वेद क्या हैं?",
  "आयुर्वेद पर आधारित दैनिक दिनचर्या बताएं",
  "सुश्रुत कौन थे?",
  "भारतीय परंपरा में ध्यान क्या है?",
];

export const knowledgeBase: KnowledgeEntry[] = [
  // AYURVEDA
  {
    keywords: ["ayurveda", "what is ayurveda", "ayurvedic", "traditional medicine", "indian medicine", "आयुर्वेद", "आयुर्वेदिक"],
    category: "ayurveda",
    response: `## 🌿 Ayurveda

**Definition:** Ayurveda (meaning "Science of Life") is one of the world's oldest holistic healing systems, originating in India over 5,000 years ago.

**Explanation:** Ayurveda is based on the belief that health and wellness depend on a delicate balance between the mind, body, and spirit. Its main goal is to promote good health, not fight disease. It categorizes people into three body types called **Doshas** — Vata, Pitta, and Kapha.

**Key Principles:**
- **Prevention** is better than cure
- Every individual is unique (*Prakriti*)
- Food is medicine
- Balance in daily routine (*Dinacharya*) is essential

**Modern Relevance:** Ayurveda is widely recognized today for its approach to preventive healthcare, stress management, and natural remedies.

> *This is general guidance. Consult a qualified Ayurvedic practitioner for personalized advice.*`,
    responseHi: `## 🌿 आयुर्वेद

**परिभाषा:** आयुर्वेद (अर्थात् "जीवन का विज्ञान") विश्व की सबसे प्राचीन समग्र चिकित्सा पद्धतियों में से एक है, जिसकी उत्पत्ति भारत में 5,000 से अधिक वर्ष पहले हुई।

**व्याख्या:** आयुर्वेद इस विश्वास पर आधारित है कि स्वास्थ्य और कल्याण मन, शरीर और आत्मा के बीच संतुलन पर निर्भर करता है। यह लोगों को तीन शरीर प्रकारों में वर्गीकृत करता है — **दोष** — वात, पित्त और कफ।

**मुख्य सिद्धांत:**
- **रोकथाम** इलाज से बेहतर है
- हर व्यक्ति अद्वितीय है (*प्रकृति*)
- भोजन ही औषधि है

> *यह सामान्य मार्गदर्शन है। व्यक्तिगत सलाह के लिए योग्य आयुर्वेदिक चिकित्सक से परामर्श करें।*`
  },
  {
    keywords: ["dosha", "doshas", "vata", "pitta", "kapha", "body type", "prakriti", "constitution", "दोष", "वात", "पित्त", "कफ"],
    category: "ayurveda",
    response: `## 🌿 The Three Doshas

**Definition:** Doshas are the three fundamental bio-energies in Ayurveda that govern all physical and mental processes.

### 💨 Vata (Air + Space)
- **Qualities:** Light, dry, cold, mobile
- **Body type:** Thin, energetic, creative
- **Balance with:** Warm foods, routine, oil massage

### 🔥 Pitta (Fire + Water)
- **Qualities:** Hot, sharp, intense
- **Body type:** Medium build, strong metabolism
- **Balance with:** Cooling foods, avoiding excess heat

### 🌍 Kapha (Earth + Water)
- **Qualities:** Heavy, slow, steady
- **Body type:** Sturdy build, calm nature
- **Balance with:** Light/warm foods, regular exercise

> *This is general guidance. Consult a professional for personalized advice.*`,
    responseHi: `## 🌿 तीन दोष

**परिभाषा:** दोष आयुर्वेद में तीन मूलभूत जैव-ऊर्जाएं हैं।

### 💨 वात (वायु + आकाश)
- **गुण:** हल्का, सूखा, ठंडा
- **संतुलन:** गर्म भोजन, नियमित दिनचर्या, तेल मालिश

### 🔥 पित्त (अग्नि + जल)
- **गुण:** गर्म, तीक्ष्ण, तीव्र
- **संतुलन:** ठंडे भोजन, अधिक गर्मी से बचें

### 🌍 कफ (पृथ्वी + जल)
- **गुण:** भारी, धीमा, स्थिर
- **संतुलन:** हल्के/गर्म भोजन, नियमित व्यायाम

> *यह सामान्य मार्गदर्शन है।*`
  },
  // YOGA
  {
    keywords: ["yoga", "what is yoga", "yoga practice", "yoga benefits", "योग"],
    category: "yoga",
    response: `## 🧘 Yoga

**Definition:** Yoga is an ancient Indian practice that unifies the body, mind, and spirit through physical postures (*asanas*), breathing techniques (*pranayama*), and meditation (*dhyana*).

**The Eight Limbs of Yoga (Ashtanga):**
1. **Yama** — Ethical principles
2. **Niyama** — Self-discipline
3. **Asana** — Physical postures
4. **Pranayama** — Breath control
5. **Pratyahara** — Withdrawal of senses
6. **Dharana** — Concentration
7. **Dhyana** — Meditation
8. **Samadhi** — Enlightenment

**Key Types of Yoga:**
- *Hatha Yoga* — Physical postures and breathing
- *Raja Yoga* — Meditation and mental discipline
- *Karma Yoga* — Path of selfless action
- *Bhakti Yoga* — Path of devotion
- *Jnana Yoga* — Path of knowledge

**Modern Relevance:** Yoga is practiced by over 300 million people worldwide. It's scientifically proven to reduce stress and improve flexibility.`,
    responseHi: `## 🧘 योग

**परिभाषा:** योग एक प्राचीन भारतीय अभ्यास है जो आसनों, प्राणायाम और ध्यान के माध्यम से शरीर, मन और आत्मा को एकीकृत करता है।

**योग के आठ अंग (अष्टांग):**
1. **यम** — नैतिक सिद्धांत
2. **नियम** — आत्म-अनुशासन
3. **आसन** — शारीरिक मुद्राएं
4. **प्राणायाम** — श्वास नियंत्रण
5. **प्रत्याहार** — इंद्रिय प्रत्याहार
6. **धारणा** — एकाग्रता
7. **ध्यान** — ध्यान
8. **समाधि** — आत्मज्ञान

**आधुनिक प्रासंगिकता:** दुनिया भर में 300 मिलियन से अधिक लोग योग का अभ्यास करते हैं।`
  },
  {
    keywords: ["pranayama", "breathing", "breath", "breathing exercise", "प्राणायाम", "सांस", "श्वास"],
    category: "yoga",
    response: `## 🌬️ Pranayama — The Science of Breath

**Definition:** Pranayama is the practice of breath regulation in yoga. *Prana* means life force, and *Ayama* means control.

**Key Techniques:**

### 1. 🌊 Anulom Vilom (Alternate Nostril Breathing)
- Close right nostril, inhale through left
- Close left, exhale through right
- **Benefits:** Balances nervous system, reduces anxiety

### 2. 🐝 Bhramari (Bee Breathing)
- Close ears, inhale deeply, exhale with humming
- **Benefits:** Calms the mind, aids sleep

### 3. 🔥 Kapalabhati (Skull Shining Breath)
- Rapid, forceful exhales
- **Benefits:** Energizes, clears sinuses

**Practice Guide:**
- Start with 5 minutes daily
- Practice on an empty stomach
- Morning is the best time

> *Start gently. If you feel dizzy, stop and breathe normally.*`,
    responseHi: `## 🌬️ प्राणायाम — श्वास का विज्ञान

**परिभाषा:** प्राणायाम योग में श्वास नियमन का अभ्यास है।

**प्रमुख तकनीकें:**

### 1. 🌊 अनुलोम विलोम
- दायीं नासिका बंद, बायीं से सांस लें
- **लाभ:** तंत्रिका तंत्र संतुलित करता है

### 2. 🐝 भ्रामरी
- कान बंद करें, भिनभिनाहट के साथ छोड़ें
- **लाभ:** मन शांत करता है

### 3. 🔥 कपालभाति
- तेज, बलपूर्वक सांस छोड़ें
- **लाभ:** ऊर्जा देता है

> *धीरे-धीरे शुरू करें।*`
  },
  {
    keywords: ["stress", "anxiety", "worried", "tension", "stressed", "तनाव", "चिंता", "घबराहट"],
    category: "yoga",
    response: `## 🧘 Managing Stress — Ancient Wisdom

**Immediate Relief Techniques:**

### 🌬️ 1. Box Breathing (4-4-4-4)
- Inhale 4 counts, Hold 4, Exhale 4, Hold 4
- Repeat 5 times

### 🐝 2. Bhramari Pranayama
- Close eyes and ears
- Exhale while humming like a bee
- Repeat 5–7 times

### 🧘 3. Yoga Poses for Stress:
- **Balasana** (Child's Pose)
- **Viparita Karani** (Legs Up the Wall)
- **Shavasana** (Corpse Pose)

### 🌿 4. Ayurvedic Support:
- Warm milk with nutmeg before bed
- Massage feet with warm sesame oil
- Include Ashwagandha in your routine

> *Remember, it's okay to seek help. Consult a professional if stress persists.*`,
    responseHi: `## 🧘 तनाव प्रबंधन — प्राचीन ज्ञान

**तुरंत राहत तकनीकें:**

### 🌬️ 1. बॉक्स ब्रीदिंग (4-4-4-4)
- 4 गिनती सांस लें, 4 रोकें, 4 छोड़ें, 4 रोकें
- 5 बार दोहराएं

### 🐝 2. भ्रामरी प्राणायाम
- आंखें और कान बंद करें
- भिनभिनाते हुए छोड़ें

### 🧘 3. तनाव के लिए योग:
- **बालासन** (बच्चे की मुद्रा)
- **शवासन** (शव मुद्रा)

### 🌿 4. आयुर्वेदिक सहायता:
- सोने से पहले जायफल वाला गर्म दूध
- गर्म तिल के तेल से पैरों की मालिश

> *मदद मांगना ठीक है। लगातार तनाव के लिए विशेषज्ञ से परामर्श करें।*`
  },
  {
    keywords: ["surya namaskar", "sun salutation", "सूर्य नमस्कार"],
    category: "yoga",
    response: `## 🌅 Surya Namaskar — Sun Salutation

**Definition:** A sequence of 12 yoga poses performed in a flowing sequence.

**The 12 Steps:**
1. 🙏 Pranamasana — Prayer Pose
2. 🌙 Hasta Uttanasana — Raised Arms
3. 🙇 Hastapadasana — Forward Bend
4. 🏇 Ashwa Sanchalanasana — Equestrian Pose
5. 🏔️ Dandasana — Plank Pose
6. 🐛 Ashtanga Namaskara — 8-Point Salute
7. 🐍 Bhujangasana — Cobra Pose
8. 🏔️ Adho Mukha Svanasana — Downward Dog
9. 🏇 Ashwa Sanchalanasana — Equestrian Pose
10. 🙇 Hastapadasana — Forward Bend
11. 🌙 Hasta Uttanasana — Raised Arms
12. 🙏 Pranamasana — Prayer Pose

**Benefits:** Full-body workout, improves flexibility, boosts cardiovascular health.

**Tip:** Start with 2–3 rounds and gradually increase to 12.`,
    responseHi: `## 🌅 सूर्य नमस्कार

**परिभाषा:** 12 योग आसनों का एक क्रम।

**12 चरण:**
1. 🙏 प्रणामासन
2. 🌙 हस्त उत्तानासन
3. 🙇 हस्तपादासन
4. 🏇 अश्व संचालनासन
5. 🏔️ दंडासन
6. 🐛 अष्टांग नमस्कार
7. 🐍 भुजंगासन
8. 🏔️ अधो मुख श्वानासन
9. 🏇 अश्व संचालनासन
10. 🙇 हस्तपादासन
11. 🌙 हस्त उत्तानासन
12. 🙏 प्रणामासन

**लाभ:** पूरे शरीर की कसरत, लचीलापन बढ़ाता है।

**सुझाव:** 2-3 राउंड से शुरू करें।`
  },
  // PHILOSOPHY
  {
    keywords: ["vedas", "veda", "rig veda", "samaveda", "yajurveda", "atharvaveda", "वेद", "ऋग्वेद"],
    category: "philosophy",
    response: `## 📜 The Vedas — Foundation of Indian Knowledge

**Definition:** The Vedas are the oldest scriptures of Hinduism, composed between 1500–500 BCE.

**The Four Vedas:**

### 1. 🔥 Rig Veda
- Oldest of all Vedas (~1500 BCE)
- Contains 1,028 hymns

### 2. 🎵 Sama Veda
- Musical rendering of Rig Vedic hymns
- Foundation of Indian classical music

### 3. 🙏 Yajur Veda
- Practical guide for rituals
- Contains mantras and instructions

### 4. 🌿 Atharva Veda
- Deals with medicine and daily life
- Contains early references to surgery

**Structure:** Samhitas → Brahmanas → Aranyakas → Upanishads`,
    responseHi: `## 📜 वेद — भारतीय ज्ञान की नींव

**परिभाषा:** वेद हिंदू धर्म के सबसे प्राचीन ग्रंथ हैं।

**चार वेद:**

### 1. 🔥 ऋग्वेद
- सबसे प्राचीन वेद
- 1,028 सूक्त

### 2. 🎵 सामवेद
- संगीतमय प्रस्तुतिकरण
- भारतीय शास्त्रीय संगीत की नींव

### 3. 🙏 यजुर्वेद
- अनुष्ठानों का मार्गदर्शक

### 4. 🌿 अथर्ववेद
- चिकित्सा और दैनिक जीवन

**संरचना:** संहिता → ब्राह्मण → आरण्यक → उपनिषद`
  },
  {
    keywords: ["dharma", "duty", "righteousness", "धर्म", "कर्तव्य"],
    category: "philosophy",
    response: `## ⚖️ Dharma — The Cosmic Order

**Definition:** Dharma means righteousness, duty, moral law, and cosmic order.

**Types of Dharma:**
1. **Cosmic Dharma (*Rita*):** Natural order
2. **Social Dharma:** Universal ethics — truthfulness, non-violence
3. **Personal Dharma (*Svadharma*):** Your individual duty
4. **Situational Dharma:** Right action by context

**Key Principles:**
- 🕊️ *Ahimsa* — Non-violence
- 🗣️ *Satya* — Truthfulness
- 🤝 *Asteya* — Non-stealing
- 💝 *Daya* — Compassion

**From Bhagavad Gita:**
> *"It is better to perform one's own Dharma imperfectly than another's perfectly."*`,
    responseHi: `## ⚖️ धर्म — ब्रह्मांडीय व्यवस्था

**परिभाषा:** धर्म का अर्थ है — सदाचार, कर्तव्य, नैतिक नियम।

**धर्म के प्रकार:**
1. **ब्रह्मांडीय धर्म (*ऋत*):** प्रकृति का क्रम
2. **सामाजिक धर्म:** सार्वभौमिक नैतिकता
3. **व्यक्तिगत धर्म (*स्वधर्म*):** व्यक्तिगत कर्तव्य

**मूल सिद्धांत:**
- 🕊️ *अहिंसा*
- 🗣️ *सत्य*
- 🤝 *अस्तेय*
- 💝 *दया*

**भगवद गीता से:**
> *"अपने धर्म को अपूर्ण रूप से करना दूसरे के धर्म से बेहतर है।"*`
  },
  {
    keywords: ["gita", "bhagavad gita", "krishna", "arjuna", "गीता", "भगवद गीता", "कृष्ण"],
    category: "philosophy",
    response: `## 📖 The Bhagavad Gita

**Definition:** A 700-verse dialogue between Lord Krishna and Arjuna.

**Core Teachings:**

### 1. 🎯 Karma Yoga
- *"You have the right to action, but never to its fruits"*
- Do your duty without attachment

### 2. 📿 Bhakti Yoga
- Surrender with love to a higher purpose

### 3. 🧠 Jnana Yoga
- Understand the true nature of self

**Key Concepts:**
- The Soul is eternal
- Stay balanced in success and failure
- Follow your own nature (*Svadharma*)

**Timeless Quote:**
> *"Whenever righteousness declines, I manifest Myself"* (4.7)`,
    responseHi: `## 📖 भगवद गीता

**परिभाषा:** भगवान कृष्ण और अर्जुन के बीच 700 श्लोकों का संवाद।

**मूल शिक्षाएं:**

### 1. 🎯 कर्म योग
- *"कर्म पर अधिकार है, फल पर नहीं"*

### 2. 📿 भक्ति योग
- प्रेम से समर्पण

### 3. 🧠 ज्ञान योग
- आत्मा की प्रकृति समझो

**कालजयी उद्धरण:**
> *"जब धर्म का पतन होता है, मैं प्रकट होता हूँ"* (4.7)`
  },
  {
    keywords: ["meditation", "dhyana", "meditate", "ध्यान", "मेडिटेशन"],
    category: "yoga",
    response: `## 🧘‍♀️ Dhyana — Meditation

**Types of Meditation:**

### 1. 📿 Mantra Meditation
- Repeat "Om" or "So Hum"
- Start with 5 minutes

### 2. 🌬️ Breath Awareness
- Simply observe your natural breath
- When mind wanders, gently return

### 3. 🕯️ Trataka (Candle Gazing)
- Gaze at a candle flame without blinking
- Improves concentration

**How to Start:**
1. Choose a quiet space
2. Sit comfortably
3. Close your eyes
4. Focus on breath or mantra
5. Start with 5 minutes
6. Be consistent`,
    responseHi: `## 🧘‍♀️ ध्यान

**ध्यान के प्रकार:**

### 1. 📿 मंत्र ध्यान
- "ॐ" या "सो हम" दोहराएं
- 5 मिनट से शुरू करें

### 2. 🌬️ श्वास जागरूकता
- प्राकृतिक सांस का निरीक्षण करें

### 3. 🕯️ त्राटक
- दीपक की लौ देखें

**कैसे शुरू करें:**
1. शांत स्थान चुनें
2. आराम से बैठें
3. आंखें बंद करें
4. 5 मिनट से शुरू करें
5. नियमित रहें`
  },
  // MATHEMATICS
  {
    keywords: ["aryabhata", "aryabhatta", "mathematician", "आर्यभट्ट", "गणितज्ञ"],
    category: "mathematics",
    response: `## 🔢 Aryabhata — Mathematical Genius

**Definition:** Aryabhata (476–550 CE) was one of the greatest mathematicians of ancient India.

**Contributions:**

### 📐 Mathematics:
- Refined the decimal place-value system
- Calculated π ≈ 3.1416
- Solved linear and quadratic equations
- Defined sine and cosine

### 🌍 Astronomy:
- Earth rotates on its axis (1000+ years before Copernicus!)
- Explained eclipses as shadows
- Calculated Earth's circumference: 39,968 km (99.7% accurate!)

**Legacy:** India's first satellite was named **Aryabhata** (1975).`,
    responseHi: `## 🔢 आर्यभट्ट — गणितीय प्रतिभा

**परिभाषा:** आर्यभट्ट (476-550 ई.) प्राचीन भारत के महान गणितज्ञ थे।

**योगदान:**

### 📐 गणित:
- दशमलव प्रणाली को परिष्कृत किया
- π ≈ 3.1416 गणना की
- ज्या (sine) की परिभाषा दी

### 🌍 खगोल विज्ञान:
- पृथ्वी अपनी धुरी पर घूमती है (कोपरनिकस से 1000+ वर्ष पहले!)
- ग्रहणों को छाया के रूप में समझाया

**विरासत:** भारत का पहला उपग्रह **आर्यभट्ट** (1975) उनके नाम पर है।`
  },
  {
    keywords: ["zero", "shunya", "mathematics", "math", "शून्य", "गणित"],
    category: "mathematics",
    response: `## 🔢 Ancient Indian Mathematics

**Key Contributions:**

### 0️⃣ The Zero (Shunya)
- **Brahmagupta** (628 CE) first defined zero as a number
- Revolutionized mathematics worldwide

### 🔟 Decimal Place-Value System
- Developed in India by the 5th century CE
- What we call "Arabic numerals" are actually Indian!

### 📐 Other Breakthroughs:
- **Baudhayana** (~800 BCE) — Pythagorean theorem before Pythagoras
- **Pingala** (~200 BCE) — Binary number system
- **Madhava** (~1340 CE) — Infinite series (250 years before Newton!)

**Modern Relevance:** The decimal system, zero, binary numbers — all have roots in ancient India.`,
    responseHi: `## 🔢 प्राचीन भारतीय गणित

**प्रमुख योगदान:**

### 0️⃣ शून्य (Zero)
- **ब्रह्मगुप्त** (628 ई.) ने शून्य को संख्या के रूप में परिभाषित किया

### 🔟 दशमलव प्रणाली
- 5वीं शताब्दी में भारत में विकसित
- "अरबी अंक" वास्तव में भारतीय हैं!

### 📐 अन्य सफलताएं:
- **बौधायन** — पाइथागोरस प्रमेय
- **पिंगल** — द्विआधारी प्रणाली
- **माधव** — अनंत श्रेणी (न्यूटन से 250 वर्ष पहले!)`
  },
  // HISTORY
  {
    keywords: ["sushruta", "surgery", "surgeon", "सुश्रुत", "शल्य चिकित्सा"],
    category: "history",
    response: `## 🏥 Sushruta — Father of Surgery

**Definition:** Sushruta (c. 600 BCE) is known as the "Father of Surgery."

**His Masterwork — Sushruta Samhita:**

### 🔪 Surgical Procedures:
- **Rhinoplasty** — world's first plastic surgery
- **Cataract surgery**
- **Cesarean section**
- **300+ surgical procedures** documented
- **120+ surgical instruments** described

### 🧬 Medical Knowledge:
- Detailed anatomy
- Wound management
- Anesthesia using wine and herbs

**Training:** Students practiced on fruits, vegetables, and leather before operating.

**Quote:** *"A physician well versed in surgery is like a bird with two wings."*`,
    responseHi: `## 🏥 सुश्रुत — शल्य चिकित्सा के जनक

**परिभाषा:** सुश्रुत (लगभग 600 ई.पू.) "शल्य चिकित्सा के जनक" हैं।

**सुश्रुत संहिता:**

### 🔪 शल्य प्रक्रियाएं:
- **राइनोप्लास्टी** — पहली प्लास्टिक सर्जरी
- **मोतियाबिंद शल्य चिकित्सा**
- **300+ शल्य प्रक्रियाएं** दर्ज
- **120+ शल्य उपकरण** वर्णित

**प्रशिक्षण:** छात्रों ने फलों और सब्जियों पर अभ्यास किया।

**कथन:** *"शल्य चिकित्सा में निपुण चिकित्सक दो पंखों वाले पक्षी के समान है।"*`
  },
  // DAILY ROUTINE
  {
    keywords: ["daily routine", "routine", "dinacharya", "schedule", "दिनचर्या", "दैनिक"],
    category: "ayurveda",
    response: `## 🌅 Dinacharya — Ayurvedic Daily Routine

### 🌅 Morning (~5:30 AM)
1. Wake up early
2. Drink warm water with lemon
3. Tongue scraping + oil pulling
4. Yoga/Surya Namaskar (30 min)
5. Pranayama (10 min)
6. Meditation (10-15 min)
7. Light, warm breakfast

### 🌞 Afternoon (10 AM–2 PM)
- Lunch should be the **largest meal**
- Short walk after eating
- Stay hydrated

### 🌙 Evening
- Light dinner by 7 PM
- Gentle walk
- Warm milk with nutmeg
- Foot massage with warm oil
- **Sleep by 10 PM**

> *Start with 2-3 practices and gradually build!*`,
    responseHi: `## 🌅 दिनचर्या — आयुर्वेदिक दैनिक दिनचर्या

### 🌅 सुबह (~5:30 बजे)
1. जल्दी उठें
2. नींबू के साथ गर्म पानी
3. जिह्वा खरोंचना + तेल खींचना
4. योग/सूर्य नमस्कार (30 मिनट)
5. प्राणायाम (10 मिनट)
6. ध्यान (10-15 मिनट)
7. हल्का, गर्म नाश्ता

### 🌞 दोपहर
- दोपहर का भोजन **सबसे बड़ा**
- भोजन के बाद सैर

### 🌙 शाम
- 7 बजे तक हल्का भोजन
- जायफल वाला गर्म दूध
- पैरों की मालिश
- **रात 10 बजे सो जाएं**

> *2-3 अभ्यासों से शुरू करें!*`
  },
  // GREETINGS
  {
    keywords: ["hello", "hi", "hey", "namaste", "good morning", "नमस्ते", "हैलो"],
    category: "general",
    response: `## 🙏 Namaste!

Welcome! I'm **Vidya**, your guide to the Indian Knowledge System.

I can help you explore:
- 🌿 **Ayurveda** — Health, diet, Doshas
- 🧘 **Yoga** — Asanas, breathing, meditation
- 📿 **Philosophy** — Vedas, Dharma, Bhagavad Gita
- 🔢 **Mathematics** — Aryabhata, Zero
- 📜 **History** — Sushruta, ancient scholars

**Try asking:**
- "What are the three Doshas?"
- "How can yoga help with stress?"
- "Who was Aryabhata?"

What would you like to explore? 😊`,
    responseHi: `## 🙏 नमस्ते!

स्वागत है! मैं **विद्या** हूँ, भारतीय ज्ञान प्रणाली की मार्गदर्शक।

मैं मदद कर सकती हूँ:
- 🌿 **आयुर्वेद** — स्वास्थ्य, आहार, दोष
- 🧘 **योग** — आसन, प्राणायाम, ध्यान
- 📿 **दर्शन** — वेद, धर्म, भगवद गीता
- 🔢 **गणित** — आर्यभट्ट, शून्य
- 📜 **इतिहास** — सुश्रुत, प्राचीन विद्वान

**पूछें:**
- "तीन दोष क्या हैं?"
- "योग तनाव में कैसे मदद करता है?"

आप क्या जानना चाहेंगे? 😊`
  },
  // SLEEP
  {
    keywords: ["sleep", "insomnia", "sleeping", "नींद", "अनिद्रा"],
    category: "ayurveda",
    response: `## 😴 Better Sleep — Ayurvedic Way

### 🌙 Evening Routine:
1. Light dinner by 7 PM
2. Gentle 10-minute walk
3. Reduce screens after 8 PM
4. **Bhramari Pranayama** (5 rounds)
5. Foot massage with **sesame oil**
6. Warm milk with nutmeg

### 🛏️ Sleep Environment:
- Keep room cool and dark
- Use calming scents (lavender, sandalwood)
- Aim for 10 PM bedtime

### 🌿 Herbal Support:
- **Ashwagandha** — Reduces stress
- **Brahmi** — Calms the mind
- **Nutmeg** — A pinch in warm milk

### 🧘 Yoga Nidra:
20 minutes = 2 hours of regular sleep!

> *If sleep problems persist, consult a professional.*`,
    responseHi: `## 😴 बेहतर नींद — आयुर्वेदिक तरीका

### 🌙 शाम की दिनचर्या:
1. शाम 7 बजे तक हल्का भोजन
2. हल्की सैर
3. 8 बजे के बाद स्क्रीन कम करें
4. **भ्रामरी प्राणायाम** (5 बार)
5. **तिल के तेल** से पैरों की मालिश
6. जायफल वाला गर्म दूध

### 🌿 हर्बल सहायता:
- **अश्वगंधा** — तनाव कम करता है
- **ब्राह्मी** — मन शांत करता है

### 🧘 योग निद्रा:
20 मिनट = 2 घंटे की सामान्य नींद!

> *नींद की समस्या बनी रहे तो चिकित्सक से परामर्श करें।*`
  },
  // IMMUNITY
  {
    keywords: ["immunity", "immune", "health", "प्रतिरक्षा", "स्वास्थ्य"],
    category: "ayurveda",
    response: `## 🛡️ Building Immunity — Ayurvedic Approach

### 🌿 Diet:
- **Turmeric** — Anti-inflammatory
- **Tulsi** (Holy Basil) — Immunomodulator
- **Amla** — Vitamin C rich
- **Ginger** — Boosts digestion
- **Ghee** — Nourishes Ojas
- **Honey** — Antimicrobial (don't heat!)

### 🍵 Golden Milk Recipe:
Warm milk + ½ tsp turmeric + pinch of black pepper + ½ tsp ghee

### 🧘 Lifestyle:
- Regular yoga and pranayama
- 7-8 hours sleep
- Manage stress through meditation
- Self-massage (*Abhyanga*) with warm oil

> *This is general guidance. Consult a professional for specific concerns.*`,
    responseHi: `## 🛡️ प्रतिरक्षा — आयुर्वेदिक दृष्टिकोण

### 🌿 आहार:
- **हल्दी** — सूजन-रोधी
- **तुलसी** — प्रतिरक्षा नियंत्रक
- **आंवला** — विटामिन C
- **अदरक** — पाचन बढ़ाता है
- **घी** — ओजस का पोषण
- **शहद** — रोगाणुरोधी (गर्म न करें!)

### 🍵 गोल्डन मिल्क:
गर्म दूध + ½ चम्मच हल्दी + काली मिर्च + ½ चम्मच घी

### 🧘 जीवनशैली:
- नियमित योग और प्राणायाम
- 7-8 घंटे नींद
- ध्यान से तनाव प्रबंधन

> *यह सामान्य मार्गदर्शन है।*`
  },
];

// Find best response
export function findBestResponse(query: string, language: Language = 'en'): { response: string; category: string } | null {
  const lowerQuery = query.toLowerCase().trim();

  let bestMatch: KnowledgeEntry | null = null;
  let bestScore = 0;

  for (const entry of knowledgeBase) {
    let score = 0;
    for (const keyword of entry.keywords) {
      if (lowerQuery.includes(keyword.toLowerCase())) {
        score += keyword.length;
      }
      if (lowerQuery === keyword.toLowerCase()) {
        score += 50;
      }
    }
    if (score > bestScore) {
      bestScore = score;
      bestMatch = entry;
    }
  }

  if (bestMatch && bestScore > 0) {
    const response = language === 'hi' && bestMatch.responseHi 
      ? bestMatch.responseHi 
      : bestMatch.response;
    return { response, category: bestMatch.category };
  }

  return null;
}

export function getDefaultResponse(query: string, language: Language = 'en'): string {
  if (language === 'hi') {
    return `## 🤔 हम्म, मुझे इसके बारे में सोचने दें...

**"${query}"** के लिए विशिष्ट उत्तर नहीं है, लेकिन मैं इन विषयों में मदद कर सकती हूँ:

- 🌿 **आयुर्वेद** — दोष, आहार, दिनचर्या
- 🧘 **योग** — आसन, प्राणायाम, ध्यान
- 📿 **दर्शन** — वेद, धर्म, गीता
- 🔢 **गणित** — शून्य, आर्यभट्ट

अपना प्रश्न दोबारा लिखें! 🙏`;
  }

  return `## 🤔 Hmm, let me think about that...

I don't have a specific answer for **"${query}"**, but I can help with:

- 🌿 **Ayurveda** — Doshas, diet, daily routines
- 🧘 **Yoga** — Asanas, pranayama, meditation
- 📿 **Philosophy** — Vedas, Dharma, Bhagavad Gita
- 🔢 **Mathematics** — Zero, Aryabhata

Try rephrasing your question! 🙏`;
}

export function getRandomTip(language: Language = 'en'): string {
  const tips = language === 'hi' ? dailyTipsHi : dailyTips;
  return tips[Math.floor(Math.random() * tips.length)];
}

export function getDailyTip(language: Language = 'en'): { tip: string; index: number } {
  const tips = language === 'hi' ? dailyTipsHi : dailyTips;
  const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000);
  const index = dayOfYear % tips.length;
  return { tip: tips[index], index };
}
