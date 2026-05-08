export interface KnowledgeEntry {
  keywords: string[];
  response: string;
  category: string;
}

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

export const topicCategories = [
  { id: "ayurveda", label: "Ayurveda", emoji: "🌿", color: "bg-green-100 text-green-800" },
  { id: "yoga", label: "Yoga", emoji: "🧘", color: "bg-purple-100 text-purple-800" },
  { id: "philosophy", label: "Philosophy", emoji: "📿", color: "bg-amber-100 text-amber-800" },
  { id: "mathematics", label: "Mathematics", emoji: "🔢", color: "bg-blue-100 text-blue-800" },
  { id: "astronomy", label: "Astronomy", emoji: "🌟", color: "bg-indigo-100 text-indigo-800" },
  { id: "history", label: "History", emoji: "📜", color: "bg-red-100 text-red-800" },
];

export const knowledgeBase: KnowledgeEntry[] = [
  // === AYURVEDA ===
  {
    keywords: ["ayurveda", "what is ayurveda", "ayurvedic", "traditional medicine", "indian medicine"],
    category: "ayurveda",
    response: `## 🌿 Ayurveda

**Definition:** Ayurveda (meaning "Science of Life") is one of the world's oldest holistic healing systems, originating in India over 5,000 years ago.

**Explanation:** Ayurveda is based on the belief that health and wellness depend on a delicate balance between the mind, body, and spirit. Its main goal is to promote good health, not fight disease. It categorizes people into three body types called **Doshas** — Vata, Pitta, and Kapha — each representing different combinations of the five elements (earth, water, fire, air, space).

**Key Principles:**
- **Prevention** is better than cure
- Every individual is unique (*Prakriti*)
- Food is medicine
- Balance in daily routine (*Dinacharya*) is essential

**Example:** A person with a Pitta constitution might be advised to eat cooling foods like cucumber and mint, avoid excessive spicy food, and practice calming activities.

**Modern Relevance:** Ayurveda is widely recognized today for its approach to preventive healthcare, stress management, and natural remedies. Many modern wellness practices like oil pulling, turmeric lattes, and meditation have roots in Ayurveda.

> *This is general guidance. Consult a qualified Ayurvedic practitioner for personalized advice.*`
  },
  {
    keywords: ["dosha", "doshas", "vata", "pitta", "kapha", "body type", "prakriti", "constitution"],
    category: "ayurveda",
    response: `## 🌿 The Three Doshas

**Definition:** Doshas are the three fundamental bio-energies in Ayurveda that govern all physical and mental processes.

**The Three Doshas:**

### 💨 Vata (Air + Space)
- **Qualities:** Light, dry, cold, mobile, quick
- **Body type:** Thin, energetic, creative
- **When balanced:** Creative, flexible, lively
- **When imbalanced:** Anxiety, dry skin, insomnia, irregular digestion
- **Balance with:** Warm foods, routine, oil massage, grounding activities

### 🔥 Pitta (Fire + Water)
- **Qualities:** Hot, sharp, intense, light, acidic
- **Body type:** Medium build, strong metabolism
- **When balanced:** Intelligent, focused, ambitious
- **When imbalanced:** Anger, inflammation, heartburn, skin rashes
- **Balance with:** Cooling foods, avoiding excess heat, sweet and bitter tastes

### 🌍 Kapha (Earth + Water)
- **Qualities:** Heavy, slow, steady, soft, cold
- **Body type:** Sturdy build, calm nature
- **When balanced:** Loving, patient, grounded
- **When imbalanced:** Weight gain, lethargy, congestion, attachment
- **Balance with:** Light/warm foods, regular exercise, variety in routine

**Modern Relevance:** Understanding your Dosha helps personalize your diet, exercise, and lifestyle for optimal well-being. It's essentially ancient personalized medicine!

> *This is general guidance. Consult a professional for personalized health advice.*`
  },
  {
    keywords: ["diet", "food", "eating", "nutrition", "ayurvedic diet", "what to eat", "healthy eating"],
    category: "ayurveda",
    response: `## 🍽️ Ayurvedic Approach to Diet

**Definition:** In Ayurveda, food is considered the primary medicine. The right diet is one that suits your individual constitution (Dosha).

**Core Principles:**

1. **Eat according to your Dosha:**
   - *Vata:* Warm, moist, grounding foods (soups, stews, ghee, root vegetables)
   - *Pitta:* Cool, refreshing foods (salads, sweet fruits, coconut, mint)
   - *Kapha:* Light, warm, spicy foods (leafy greens, legumes, ginger, honey)

2. **The Six Tastes (*Shad Rasa*):**
   Every meal should ideally include all six tastes — Sweet, Sour, Salty, Pungent, Bitter, and Astringent.

3. **Mindful Eating:**
   - Eat in a calm environment
   - Chew food thoroughly
   - Don't eat when not hungry
   - Lunch should be the largest meal (when digestive fire *Agni* is strongest)

4. **Golden Rules:**
   - Drink warm water, not cold
   - Avoid incompatible food combinations (e.g., milk with sour fruits)
   - Include spices like turmeric, cumin, and ginger daily
   - Eat freshly prepared food whenever possible

**Modern Relevance:** Many modern nutritionists now echo Ayurvedic principles — eating seasonally, mindful eating, and personalizing diets based on body type.

> *This is general guidance. Consult a professional for personalized dietary advice.*`
  },

  // === YOGA ===
  {
    keywords: ["yoga", "what is yoga", "yoga practice", "yoga benefits"],
    category: "yoga",
    response: `## 🧘 Yoga

**Definition:** Yoga is an ancient Indian practice that unifies the body, mind, and spirit through physical postures (*asanas*), breathing techniques (*pranayama*), and meditation (*dhyana*).

**Explanation:** The word "Yoga" comes from Sanskrit *yuj*, meaning "to unite" or "to yoke." It was systematized by Sage **Patanjali** in the *Yoga Sutras* around 200 BCE. Yoga is not just exercise — it's a complete system for holistic well-being.

**The Eight Limbs of Yoga (Ashtanga):**
1. **Yama** — Ethical principles
2. **Niyama** — Self-discipline
3. **Asana** — Physical postures
4. **Pranayama** — Breath control
5. **Pratyahara** — Withdrawal of senses
6. **Dharana** — Concentration
7. **Dhyana** — Meditation
8. **Samadhi** — Enlightenment/Bliss

**Key Types of Yoga:**
- *Hatha Yoga* — Physical postures and breathing
- *Raja Yoga* — Meditation and mental discipline
- *Karma Yoga* — Path of selfless action
- *Bhakti Yoga* — Path of devotion
- *Jnana Yoga* — Path of knowledge

**Modern Relevance:** Yoga is practiced by over 300 million people worldwide. It's scientifically proven to reduce stress, improve flexibility, boost immunity, and enhance mental clarity.`
  },
  {
    keywords: ["pranayama", "breathing", "breath", "breathing exercise", "breath control", "breathing technique"],
    category: "yoga",
    response: `## 🌬️ Pranayama — The Science of Breath

**Definition:** Pranayama is the practice of breath regulation in yoga. *Prana* means life force, and *Ayama* means control or extension.

**Explanation:** Pranayama techniques control the flow of vital energy through the body, calming the mind and energizing the system.

**Key Techniques:**

### 1. 🌊 Anulom Vilom (Alternate Nostril Breathing)
- Close right nostril, inhale through left
- Close left nostril, exhale through right
- Repeat alternating
- **Benefits:** Balances nervous system, reduces anxiety

### 2. 🐝 Bhramari (Bee Breathing)
- Close ears with thumbs, eyes with fingers
- Inhale deeply, exhale with humming sound
- **Benefits:** Calms the mind, reduces anger, aids sleep

### 3. 🔥 Kapalabhati (Skull Shining Breath)
- Rapid, forceful exhales through nose
- Passive inhales
- **Benefits:** Energizes, clears sinuses, improves focus

### 4. 🧊 Sheetali (Cooling Breath)
- Roll tongue, inhale through mouth
- Exhale through nose
- **Benefits:** Cools body, reduces Pitta

**Practice Guide:**
- Start with 5 minutes daily
- Practice on an empty stomach
- Morning is the best time
- Sit in a comfortable position

**Modern Relevance:** Research shows pranayama activates the parasympathetic nervous system, reduces cortisol, and improves heart rate variability.

> *Start gently. If you feel dizzy, stop and breathe normally.*`
  },
  {
    keywords: ["surya namaskar", "sun salutation", "sun salutations"],
    category: "yoga",
    response: `## 🌅 Surya Namaskar — Sun Salutation

**Definition:** Surya Namaskar is a sequence of 12 powerful yoga poses performed in a flowing sequence, traditionally done at sunrise facing the sun.

**Explanation:** It's a complete exercise that works on the body, mind, and breath. Each pose stretches and strengthens different muscle groups while coordinating with breath.

**The 12 Steps:**
1. 🙏 **Pranamasana** — Prayer Pose (exhale)
2. 🌙 **Hasta Uttanasana** — Raised Arms (inhale)
3. 🙇 **Hastapadasana** — Standing Forward Bend (exhale)
4. 🏇 **Ashwa Sanchalanasana** — Equestrian Pose (inhale)
5. 🏔️ **Dandasana** — Stick/Plank Pose (hold)
6. 🐛 **Ashtanga Namaskara** — 8-Point Salute (exhale)
7. 🐍 **Bhujangasana** — Cobra Pose (inhale)
8. 🏔️ **Adho Mukha Svanasana** — Downward Dog (exhale)
9. 🏇 **Ashwa Sanchalanasana** — Equestrian Pose (inhale)
10. 🙇 **Hastapadasana** — Standing Forward Bend (exhale)
11. 🌙 **Hasta Uttanasana** — Raised Arms (inhale)
12. 🙏 **Pranamasana** — Prayer Pose (exhale)

**Benefits:**
- Full-body workout in minutes
- Improves flexibility and strength
- Boosts cardiovascular health
- Enhances digestion
- Calms the mind

**Tip:** Start with 2–3 rounds and gradually increase to 12. One complete set includes doing it on both sides.

**Modern Relevance:** Many fitness enthusiasts consider Surya Namaskar one of the most efficient exercises, burning approximately 13.9 calories per round!`
  },
  {
    keywords: ["stress", "anxiety", "worried", "tension", "nervous", "overwhelmed", "stressed", "anxious", "panic", "calm down", "relax"],
    category: "yoga",
    response: `## 🧘 Managing Stress — Ancient Wisdom for Modern Life

I understand you're feeling stressed. Let me share some time-tested practices from the Indian Knowledge System that can help.

**Immediate Relief Techniques:**

### 🌬️ 1. Box Breathing (4-4-4-4)
- Inhale for 4 counts
- Hold for 4 counts
- Exhale for 4 counts
- Hold for 4 counts
- Repeat 5 times

### 🐝 2. Bhramari Pranayama (Humming Bee)
- Close your eyes and ears
- Take a deep breath
- Exhale while humming like a bee
- Feel the vibration calm your mind
- Repeat 5–7 times

### 🧘 3. Simple Yoga Poses for Stress:
- **Balasana** (Child's Pose) — Surrender and release
- **Viparita Karani** (Legs Up the Wall) — Calms the nervous system
- **Shavasana** (Corpse Pose) — Deep relaxation

### 🌿 4. Ayurvedic Support:
- Drink warm milk with a pinch of nutmeg before bed
- Massage feet with warm sesame oil (*Abhyanga*)
- Include Ashwagandha (adaptogenic herb) in your routine

### 📿 5. Mental Practices:
- **Japa** (mantra repetition) — Try chanting "Om Shanti" slowly
- **Yoga Nidra** — Guided yogic sleep (20 min = 2 hrs of regular sleep)
- Practice **gratitude** — A core teaching in Indian philosophy

**Daily Anti-Stress Routine:**
- 🌅 Morning: 10 min Pranayama + 5 min Meditation
- 🌞 Afternoon: Mindful walking + herbal tea
- 🌙 Evening: Gentle yoga + warm oil massage + early sleep

> *Remember, it's okay to seek help. This is general guidance — consult a mental health professional if stress is persistent.*`
  },

  // === PHILOSOPHY ===
  {
    keywords: ["vedas", "veda", "rig veda", "rigveda", "samaveda", "yajurveda", "atharvaveda", "vedic"],
    category: "philosophy",
    response: `## 📜 The Vedas — Foundation of Indian Knowledge

**Definition:** The Vedas are the oldest scriptures of Hinduism and among the oldest texts in any Indo-European language, composed between 1500–500 BCE.

**The Four Vedas:**

### 1. 🔥 Rig Veda (Knowledge of Hymns)
- Oldest of all Vedas (~1500 BCE)
- Contains 1,028 hymns (*suktas*) dedicated to natural forces
- Explores the nature of existence, creation, and cosmic order

### 2. 🎵 Sama Veda (Knowledge of Melodies)
- Musical rendering of Rig Vedic hymns
- Foundation of Indian classical music
- Contains the earliest known musical notation system

### 3. 🙏 Yajur Veda (Knowledge of Rituals)
- Practical guide for performing sacred rituals
- Contains mantras and instructions
- Two versions: Shukla (White) and Krishna (Black)

### 4. 🌿 Atharva Veda (Knowledge of Daily Life)
- Deals with medicine, science, and practical living
- Contains early references to surgery, herbal remedies
- Includes hymns for healing and protection

**Structure of Each Veda:**
- *Samhitas* — Hymns and mantras
- *Brahmanas* — Ritual explanations
- *Aranyakas* — Philosophical discussions
- *Upanishads* — Spiritual and metaphysical knowledge

**Modern Relevance:** The Vedas contain early concepts of mathematics (geometry for altar construction), astronomy (calendar systems), ecology (reverence for nature), and philosophy that continue to influence global thought.`
  },
  {
    keywords: ["upanishad", "upanishads", "vedanta", "brahman", "atman", "self", "soul", "consciousness"],
    category: "philosophy",
    response: `## 📿 The Upanishads — Quest for Ultimate Truth

**Definition:** The Upanishads are philosophical texts that form the concluding part of the Vedas (hence called *Vedanta* — "end of the Vedas"). There are 108+ Upanishads, with 13 considered principal.

**Core Teachings:**

### 🌟 Brahman — The Ultimate Reality
- The infinite, unchanging reality that underlies all existence
- "All this is Brahman" (*Sarvam Khalvidam Brahma*)

### ✨ Atman — The Self
- The true self or soul within every being
- Identical to Brahman: **"Tat Tvam Asi"** (Thou Art That)

### 🔄 Key Concepts:
- **Maya** — The illusion that makes us see the world as separate from Brahman
- **Karma** — Actions and their consequences across lifetimes
- **Moksha** — Liberation from the cycle of birth and death
- **Samsara** — The cycle of rebirth

**Famous Mahavakyas (Great Sayings):**
1. *"Prajnanam Brahma"* — Consciousness is Brahman
2. *"Aham Brahmasmi"* — I am Brahman
3. *"Tat Tvam Asi"* — Thou Art That
4. *"Ayam Atma Brahma"* — This Self is Brahman

**Practical Wisdom:**
- Know yourself deeply — self-awareness is the path to peace
- Everything is interconnected
- True happiness comes from within, not external objects

**Modern Relevance:** The Upanishads influenced thinkers like Schopenhauer, Emerson, and even physicists like Schrödinger. Their insights on consciousness align with modern neuroscience research.`
  },
  {
    keywords: ["dharma", "duty", "righteousness", "moral", "ethics", "right action"],
    category: "philosophy",
    response: `## ⚖️ Dharma — The Cosmic Order

**Definition:** Dharma is one of the most important concepts in Indian philosophy. It means righteousness, duty, moral law, and cosmic order — essentially, "the right way to live."

**Explanation:** Dharma has multiple layers:

1. **Cosmic Dharma (*Rita*):** The natural order that governs the universe
2. **Social Dharma (*Samanya Dharma*):** Universal ethics — truthfulness, non-violence, compassion
3. **Personal Dharma (*Svadharma*):** Your individual duty based on your nature and role
4. **Situational Dharma (*Apaddharma*):** Right action that may vary by context

**Key Principles:**
- 🕊️ *Ahimsa* — Non-violence
- 🗣️ *Satya* — Truthfulness
- 🤝 *Asteya* — Non-stealing
- 🧘 *Dama* — Self-control
- 💝 *Daya* — Compassion

**From the Bhagavad Gita:**
> *"It is better to perform one's own Dharma imperfectly than to perform another's Dharma perfectly."* — Chapter 3, Verse 35

**Example:** A teacher's dharma is to educate with patience. A doctor's dharma is to heal. Each person has their unique contribution to make.

**Modern Relevance:** Dharma teaches us to find our purpose, act ethically, and contribute to society — principles that align with modern concepts of purpose-driven living and corporate social responsibility.`
  },
  {
    keywords: ["meditation", "dhyana", "meditate", "mindfulness", "concentration", "focus"],
    category: "yoga",
    response: `## 🧘‍♀️ Dhyana — The Art of Meditation

**Definition:** Dhyana (meditation) is the practice of focused awareness, forming the 7th limb of Patanjali's Ashtanga Yoga. It's the state of continuous, unbroken concentration.

**Types of Meditation in Indian Tradition:**

### 1. 📿 Mantra Meditation
- Repeat a sacred word/phrase (e.g., "Om", "So Hum")
- Calms the mind through rhythmic vibration
- Start with 5 minutes, build to 20

### 2. 🌬️ Breath Awareness (Anapanasati)
- Simply observe your natural breath
- Don't control it, just watch
- When mind wanders, gently return

### 3. 🕯️ Trataka (Candle Gazing)
- Gaze at a candle flame without blinking
- Then close eyes and visualize the flame
- Improves concentration and eye health

### 4. 💖 Loving-Kindness (Metta/Maitri)
- Send wishes of well-being to yourself, loved ones, and all beings
- Cultivates compassion and emotional balance

**How to Start:**
1. Choose a quiet, clean space
2. Sit comfortably (on floor or chair)
3. Close your eyes gently
4. Focus on breath or mantra
5. Start with just 5 minutes
6. Be consistent — same time, same place

**Benefits (Ancient + Modern Research):**
- Reduces stress hormones (cortisol)
- Improves attention span
- Enhances emotional regulation
- May slow aging at the cellular level
- Cultivates inner peace and clarity

**Modern Relevance:** Apps, corporate wellness programs, and even schools now incorporate meditation. What ancient sages taught thousands of years ago is now validated by neuroscience.`
  },

  // === MATHEMATICS ===
  {
    keywords: ["aryabhata", "aryabhatta", "mathematician", "astronomer", "ancient mathematician"],
    category: "mathematics",
    response: `## 🔢 Aryabhata — The Mathematical Genius

**Definition:** Aryabhata (476–550 CE) was one of the greatest mathematicians and astronomers of ancient India, and arguably one of the most brilliant minds in human history.

**Major Contributions:**

### 📐 Mathematics:
- **Place Value System:** Refined the decimal place-value system that we use globally today
- **Zero:** While not the inventor of zero itself, his place-value system paved the way for zero as a number
- **Pi (π):** Calculated π to be approximately 3.1416 — remarkably accurate!
- **Algebra:** Solved linear and quadratic equations
- **Trigonometry:** Defined sine (*jya*) and cosine, creating trigonometric tables

### 🌍 Astronomy:
- Correctly stated that **Earth rotates on its axis** (1000+ years before Copernicus!)
- Explained **lunar and solar eclipses** as shadows, rejecting mythological explanations
- Calculated Earth's circumference as 39,968 km (actual: 40,075 km — 99.7% accurate!)
- Estimated the length of a year as 365.358 days (very close to modern value)

**His Work:** His masterpiece **"Aryabhatiya"** (499 CE) covers:
- Arithmetic, algebra, trigonometry
- Planetary motion and time calculations
- Mathematical series and quadratic equations

**Legacy:**
- India's first satellite was named **Aryabhata** (1975)
- Influenced Islamic and European mathematics
- His number system traveled to Arabia and became "Arabic numerals"

**Modern Relevance:** Every time you use decimal numbers, trigonometry, or understand eclipses scientifically, you're building on Aryabhata's work!`
  },
  {
    keywords: ["zero", "shunya", "number zero", "invention of zero", "indian mathematics", "mathematics", "math", "ancient math", "indian math"],
    category: "mathematics",
    response: `## 🔢 Ancient Indian Mathematics

**Definition:** India has one of the richest mathematical traditions in history, contributing concepts that form the foundation of modern mathematics.

**Key Contributions:**

### 0️⃣ The Zero (Shunya)
- **Brahmagupta** (628 CE) first defined zero as a number and established rules for arithmetic with zero
- The concept of *Shunya* (emptiness/void) came from Indian philosophy
- This single invention revolutionized mathematics worldwide

### 🔟 Decimal Place-Value System
- Developed in India by the 5th century CE
- Traveled to Arabia → Europe → became global standard
- What we call "Arabic numerals" are actually Indian!

### 📐 Other Breakthroughs:
- **Baudhayana** (~800 BCE) — Discovered the Pythagorean theorem centuries before Pythagoras
- **Pingala** (~200 BCE) — Binary number system (used in computers today!)
- **Madhava of Sangamagrama** (~1340 CE) — Discovered infinite series for π and trigonometric functions (predating Newton/Leibniz by 250 years!)
- **Bhaskara II** (1114 CE) — Advanced work on calculus, algebra, and astronomy

### 📊 Notable Texts:
- *Sulba Sutras* — Geometry for altar construction
- *Aryabhatiya* — Comprehensive mathematical text
- *Lilavati* — Bhaskara II's accessible math book
- *Brahmasphutasiddhanta* — Brahmagupta's masterpiece

**Modern Relevance:** The decimal system, zero, binary numbers, trigonometry, and early calculus — the building blocks of modern computing, science, and engineering — all have roots in ancient India.`
  },

  // === ASTRONOMY ===
  {
    keywords: ["astronomy", "jyotish", "planets", "stars", "celestial", "planetary", "solar system", "ancient astronomy"],
    category: "astronomy",
    response: `## 🌟 Ancient Indian Astronomy

**Definition:** Indian astronomy (*Jyotish Shastra*) is one of the oldest astronomical traditions, with observations dating back to the Vedic period (~1500 BCE).

**Key Achievements:**

### 🌍 Earth & Solar System
- **Aryabhata** (5th century) — Earth rotates on its axis daily
- **Nilakantha Somayaji** (15th century) — Proposed a proto-heliocentric model where planets orbit the Sun
- Accurate calculations of planetary periods

### 🌑 Eclipses
- Correctly explained as shadow phenomena (not mythological)
- Could predict eclipses with remarkable accuracy
- Used sophisticated mathematical models

### 📅 Calendar & Time
- **Sidereal year** calculated with high precision
- Concept of *Yugas* (cosmic time cycles)
- The *Panchanga* (Indian almanac) is still used today
- Division of day into 60 *ghatikas* (24 minutes each)

### 🔭 Notable Astronomers:
- **Aryabhata** (476 CE) — Rotation, revolution, eclipses
- **Varahamihira** (505 CE) — Compiled *Pancha-Siddhantika*
- **Brahmagupta** (598 CE) — Gravity concept, lunar crescent
- **Bhaskara II** (1114 CE) — Advanced planetary calculations
- **Nilakantha** (1444 CE) — Semi-heliocentric model

### 📚 Key Texts:
- *Surya Siddhanta* — Comprehensive astronomical treatise
- *Aryabhatiya* — Mathematical astronomy
- *Pancha-Siddhantika* — Summary of five astronomical systems

**Modern Relevance:** India's space program (ISRO) carries forward this astronomical legacy. Many ancient observations helped establish calendars, navigation, and agricultural timing that are still relevant.`
  },

  // === HISTORICAL FIGURES ===
  {
    keywords: ["sushruta", "surgery", "surgeon", "ancient surgery", "plastic surgery", "father of surgery"],
    category: "history",
    response: `## 🏥 Sushruta — The Father of Surgery

**Definition:** Sushruta (c. 600 BCE) was an ancient Indian physician known as the "Father of Surgery" and the "Father of Plastic Surgery."

**His Masterwork — Sushruta Samhita:**
This comprehensive medical text describes:

### 🔪 Surgical Procedures:
- **Rhinoplasty** (nose reconstruction) — the world's first recorded plastic surgery
- **Cataract surgery** — using a curved needle technique
- **Cesarean section** procedures
- **Kidney stone removal**
- Over **300 surgical procedures** documented
- **120+ surgical instruments** described and illustrated

### 🧬 Medical Knowledge:
- Detailed **anatomy** — described bones, joints, muscles, blood vessels
- **Wound management** and healing
- **Anesthesia** — used wine and special herbs
- **Sterilization** — emphasized cleanliness in surgery
- Classification of **diseases** and their treatments

### 📚 Training Methods:
- Students practiced on **fruits, vegetables, and leather** before operating on patients
- Emphasized ethics and patient care
- Described the importance of **clinical observation**

**His Famous Quote:**
> *"A physician who is well versed in surgery is like a bird with two wings — only such a physician can fly to the heights of the healing arts."*

**Modern Relevance:** Sushruta's techniques influenced surgery worldwide. The "Indian method" of rhinoplasty was adopted in Europe in the 18th century. His emphasis on practice-based training is the foundation of modern surgical education.`
  },

  // === DAILY ROUTINE ===
  {
    keywords: ["daily routine", "routine", "dinacharya", "schedule", "morning routine", "daily schedule", "lifestyle"],
    category: "ayurveda",
    response: `## 🌅 Dinacharya — The Ayurvedic Daily Routine

**Definition:** Dinacharya means "daily routine" in Ayurveda. It's a set of practices designed to align your body with nature's rhythms.

**Recommended Daily Routine:**

### 🌅 Morning (Brahma Muhurta — ~5:30 AM)
1. **Wake up early** — ideally 45 min before sunrise
2. **Drink warm water** — with lemon or turmeric
3. **Oral hygiene** — tongue scraping + oil pulling (5 min with sesame/coconut oil)
4. **Evacuation** — regular bowel movement
5. **Abhyanga** — Self-massage with warm oil (even 5 min helps!)
6. **Exercise** — Yoga, Surya Namaskar, or walking (30 min)
7. **Pranayama** — Breathing exercises (10 min)
8. **Meditation** — Quiet sitting (10-15 min)
9. **Bath** — Warm water, refreshing
10. **Breakfast** — Light, warm, according to Dosha

### 🌞 Afternoon (Pitta Time — 10 AM–2 PM)
- **Lunch** should be the **largest meal** — digestive fire is strongest
- Eat mindfully, without distractions
- Take a short walk after lunch (not sleep!)
- Stay hydrated with warm water or herbal tea

### 🌙 Evening (Kapha → Vata Time)
- **Light dinner** by 7 PM (at least 2–3 hrs before bed)
- **Gentle walk** after dinner
- **Wind down** — reduce screen time
- **Warm milk** with nutmeg or turmeric
- **Foot massage** with warm oil
- **Sleep by 10 PM** — the body's natural repair cycle starts

**Key Principles:**
- 🔄 Consistency is more important than perfection
- 🍽️ Eat at regular times
- 😴 Prioritize quality sleep
- 🧘 Include some form of mindfulness daily

**Modern Relevance:** This routine aligns with circadian rhythm science — proving that ancient Ayurvedic practitioners understood biological clocks thousands of years ago!

> *Start with 2-3 practices and gradually build. Don't try to change everything at once!*`
  },

  // === BHAGAVAD GITA ===
  {
    keywords: ["gita", "bhagavad gita", "krishna", "arjuna", "geeta", "bhagwad"],
    category: "philosophy",
    response: `## 📖 The Bhagavad Gita — Song of the Divine

**Definition:** The Bhagavad Gita ("Song of God") is a 700-verse philosophical dialogue between Lord Krishna and warrior Arjuna, set in the epic Mahabharata.

**Context:** On the battlefield of Kurukshetra, Arjuna faces a moral crisis about fighting his own relatives. Krishna's teachings guide him through this dilemma.

**Core Teachings:**

### 1. 🎯 Karma Yoga — Path of Action
- *"You have the right to action, but never to its fruits"* (2.47)
- Do your duty without attachment to results
- Focus on effort, not outcome

### 2. 📿 Bhakti Yoga — Path of Devotion
- Surrender to a higher purpose with love
- Devotion purifies the heart and mind

### 3. 🧠 Jnana Yoga — Path of Knowledge
- Understand the true nature of self and reality
- Wisdom dispels ignorance

### 4. 🔄 Key Concepts:
- **The Soul is eternal** — "The soul cannot be cut, burned, or destroyed"
- **Equanimity** — Stay balanced in success and failure
- **Svadharma** — Follow your own nature and duty
- **Detachment** — Act without selfish desire

**Timeless Quotes:**
> *"Whenever righteousness declines and unrighteousness rises, I manifest Myself"* (4.7)

> *"The mind is the friend of the self, and the mind is the enemy of the self"* (6.5)

**Modern Relevance:** The Gita's teachings on action without attachment, emotional resilience, and finding purpose have influenced leaders worldwide — from Mahatma Gandhi to modern corporate leaders. It's essentially a guide to decision-making and inner strength.`
  },

  // === CATCH-ALL FOR GREETINGS ===
  {
    keywords: ["hello", "hi", "hey", "namaste", "good morning", "good evening", "good afternoon"],
    category: "general",
    response: `## 🙏 Namaste!

Welcome! I'm **Vidya**, your guide to the Indian Knowledge System.

I can help you explore:
- 🌿 **Ayurveda** — Health, diet, daily routines, Doshas
- 🧘 **Yoga** — Asanas, breathing, meditation
- 📿 **Philosophy** — Vedas, Upanishads, Dharma, Bhagavad Gita
- 🔢 **Mathematics** — Ancient Indian mathematical discoveries
- 🌟 **Astronomy** — Celestial knowledge from ancient India
- 📜 **History** — Great scholars like Sushruta, Aryabhata

**Try asking me:**
- "What are the three Doshas?"
- "How can yoga help with stress?"
- "Tell me about Aryabhata"
- "Suggest a daily routine"

What would you like to explore today? 😊`
  },

  // === SLEEP ===
  {
    keywords: ["sleep", "insomnia", "can't sleep", "sleeping", "sleep problems", "rest"],
    category: "ayurveda",
    response: `## 😴 Better Sleep — The Ayurvedic Way

**Definition:** In Ayurveda, sleep (*Nidra*) is one of the three pillars of health, along with food (*Ahara*) and lifestyle (*Vihara*).

**Why Sleep Matters:**
- The body repairs and detoxifies during sleep
- *Pitta time* (10 PM–2 AM) is crucial for internal cleansing
- Poor sleep disturbs all three Doshas

**Ayurvedic Sleep Tips:**

### 🌙 Evening Routine:
1. Eat light dinner by 7 PM
2. Take a gentle 10-minute walk
3. Reduce screen exposure after 8 PM
4. Practice **Bhramari Pranayama** (5 rounds)
5. Massage feet with warm **sesame oil**
6. Drink warm milk with nutmeg or ashwagandha

### 🛏️ Sleep Environment:
- Keep room cool and dark
- Use calming scents (lavender, sandalwood)
- Sleep on left side to aid digestion
- Aim for 10 PM bedtime

### 🌿 Herbal Support:
- **Ashwagandha** — Reduces stress, promotes deep sleep
- **Brahmi** — Calms the mind
- **Jatamansi** — Natural sedative
- **Nutmeg** — A pinch in warm milk

### 🧘 Relaxation Technique:
Try **Yoga Nidra** (Yogic Sleep):
- Lie in Shavasana
- Follow a guided body scan
- 20 minutes of Yoga Nidra = 2 hours of regular sleep

**Modern Relevance:** Sleep hygiene principles in modern medicine echo Ayurvedic practices — regular schedule, cool room, avoiding stimulants, and relaxation techniques.

> *If sleep problems persist, please consult a healthcare professional.*`
  },

  // === IMMUNITY ===
  {
    keywords: ["immunity", "immune", "immune system", "disease prevention", "prevention", "health", "healthy"],
    category: "ayurveda",
    response: `## 🛡️ Building Immunity — The Ayurvedic Approach

**Definition:** In Ayurveda, immunity is called *Vyadhikshamatva* (resistance to disease) and is closely linked to *Ojas* — the vital essence of all body tissues.

**The Three Types of Immunity in Ayurveda:**
1. **Sahaja** — Inherited immunity (genetic)
2. **Kalaja** — Seasonal/time-related immunity
3. **Yuktikrita** — Acquired through lifestyle and diet ✅

**Immunity-Boosting Practices:**

### 🌿 Diet:
- **Turmeric** (*Haldi*) — Anti-inflammatory powerhouse
- **Tulsi** (Holy Basil) — Natural immunomodulator
- **Amla** (Indian Gooseberry) — Highest natural source of Vitamin C
- **Ginger** — Boosts digestion and immunity
- **Ghee** — Nourishes Ojas
- **Honey** — Natural antimicrobial (never heat it!)

### 🍵 Golden Milk Recipe:
- Warm milk + ½ tsp turmeric + pinch of black pepper + ½ tsp ghee
- Drink before bed for immunity and sleep

### 🧘 Lifestyle:
- Regular yoga and pranayama
- Adequate sleep (7-8 hours)
- Manage stress through meditation
- Oil pulling with sesame oil
- Self-massage (*Abhyanga*) with warm oil

### 🌡️ Seasonal Care:
- Adjust diet and routine with seasons (*Ritucharya*)
- Spring: Lighter foods, more exercise
- Winter: Warming foods, more rest
- Summer: Cooling foods, moderate activity

**Modern Relevance:** Research supports many of these — turmeric's curcumin, tulsi's adaptogenic properties, and yoga's immune-boosting effects are all well-documented.

> *This is general wellness guidance. Consult a healthcare provider for specific health concerns.*`
  },
];

export function findBestResponse(query: string): { response: string; category: string } | null {
  const lowerQuery = query.toLowerCase().trim();
  
  // Score each knowledge entry based on keyword matches
  let bestMatch: KnowledgeEntry | null = null;
  let bestScore = 0;

  for (const entry of knowledgeBase) {
    let score = 0;
    for (const keyword of entry.keywords) {
      if (lowerQuery.includes(keyword.toLowerCase())) {
        // Longer keyword matches are worth more
        score += keyword.length;
      }
      // Exact match bonus
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
    return { response: bestMatch.response, category: bestMatch.category };
  }

  return null;
}

export function getDefaultResponse(query: string): string {
  return `## 🤔 Hmm, let me think about that...

I appreciate your curiosity! While I may not have a specific answer for **"${query}"** right now, here are some topics I can help you explore:

- 🌿 **Ayurveda** — Ask about Doshas, diet, daily routines, immunity, or sleep
- 🧘 **Yoga** — Ask about asanas, pranayama, meditation, or stress relief
- 📿 **Philosophy** — Ask about Vedas, Upanishads, Dharma, or the Bhagavad Gita
- 🔢 **Mathematics** — Ask about zero, Aryabhata, or ancient Indian math
- 🌟 **Astronomy** — Ask about ancient Indian astronomical discoveries
- 📜 **History** — Ask about Sushruta, ancient scholars, or historical texts

**Try rephrasing your question** or pick one of the topics above! I'm here to help you discover the wisdom of Indian Knowledge Systems. 🙏`;
}
