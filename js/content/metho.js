// Module 1.1.7 — Méthodologie de travail universitaire
export default {
  id: 'metho', code: '1.1.7', em: '🧭', color: '#b7791f', prof: 'BEN MOSTAFA Souad',
  name: { fr: 'Méthodologie de travail universitaire', ar: 'منهجية العمل الجامعي', en: 'University study skills' },
  intro: { fr: "Apprendre à apprendre : organiser son temps, prendre des notes, mémoriser, faire une recherche documentaire, citer ses sources et rédiger un rapport ou un exposé.", ar: 'نتعلمو كيفاش نتعلمو: تنظيم الوقت، أخذ الملاحظات، الحفظ، البحث الوثائقي، ذكر المصادر وكتابة تقرير ولا عرض.', en: 'Learning how to learn: managing time, taking notes, memorising, researching, citing sources and writing reports or talks.' },
  chapters: [
    { id: 'met1', t: { fr: 'Organiser son temps et réviser efficacement', ar: 'تنظيم الوقت والمراجعة بفعالية', en: 'Managing time and revising effectively' },
      sum: { fr: 'Planning, matrice d’Eisenhower, Pomodoro, répétition espacée, préparation des examens', ar: 'التخطيط، مصفوفة أيزنهاور، بومودورو، التكرار المتباعد، التحضير للامتحانات', en: 'Planning, Eisenhower matrix, Pomodoro, spaced repetition, exam preparation' },
      body: {
        fr: `<h3>1. Le passage du lycée à l'université</h3>
<p>À l'EST, tu es plus <b>autonome</b> : beaucoup de cours magistraux (CM), des travaux dirigés (TD), des travaux pratiques (TP), des devoirs surveillés (DS) le samedi et moins de contrôle quotidien. Le travail personnel devient décisif : on compte en général <b>1 h de travail personnel pour 1 h de cours</b>.</p>
<h3>2. Planifier sa semaine</h3>
<ul><li>Noter dans un agenda (papier ou application) les cours, les DS, les dates de remise des travaux.</li><li>Bloquer des <b>créneaux fixes</b> de travail personnel (ex. lundi 10 h–12 h : révision de comptabilité).</li><li>Revoir chaque cours <b>le jour même</b> (10–20 minutes) : c'est le meilleur moment pour fixer l'information.</li><li>Garder du temps pour le sommeil, le sport et la famille : un cerveau reposé apprend mieux.</li></ul>
<h3>3. Prioriser : la matrice d'Eisenhower</h3>
{{fig:eisenhower}}
<p>On classe les tâches selon deux critères : <b>urgent</b> et <b>important</b>. La plupart des progrès viennent du cadran 2 (important mais pas urgent) : si on le néglige, tout devient urgent au dernier moment.</p>
<h3>4. Se concentrer : la technique Pomodoro</h3>
{{fig:pomodoro}}
<p>Travailler <b>25 minutes</b> sans aucune distraction (téléphone en mode avion, notifications coupées), puis faire <b>5 minutes</b> de pause. Après 4 « pomodoros », prendre une pause plus longue (15–30 min).</p>
<h3>5. Mémoriser durablement</h3>
<ul><li><b>Courbe de l'oubli</b> (Ebbinghaus) : sans révision, on oublie une grande partie d'un cours en quelques jours.</li><li><b>Répétition espacée</b> : revoir à J+1, J+3, J+7, J+14, J+30 (c'est ce que fait la rubrique « Révision » de cette application avec le système de Leitner).</li><li><b>Rappel actif</b> : se poser des questions, refaire les exercices sans regarder la correction, expliquer le cours à quelqu'un. Relire passivement est beaucoup moins efficace.</li><li><b>Fiches de révision</b> : définitions, formules, schémas, exemples-types.</li></ul>
<h3>6. Préparer un DS ou un examen</h3>
<ol><li>Commencer <b>2 à 3 semaines avant</b> ; faire la liste des chapitres.</li><li>Refaire les TD et les anciens sujets en temps limité.</li><li>Noter ses erreurs et les retravailler (rubrique « Mes erreurs »).</li><li>La veille : relire ses fiches et dormir suffisamment.</li><li>Le jour J : lire tout le sujet, gérer son temps (barème), commencer par ce qu'on maîtrise, se relire.</li></ol>`,
        ar: `<h3>1. الانتقال من الثانوي للجامعة</h3>
<p>ف EST، كتكوني <b>مستقلة</b> أكثر: بزاف ديال الدروس النظرية (CM)، الأشغال الموجهة (TD)، الأشغال التطبيقية (TP)، الفروض المحروسة (DS) نهار السبت، ومراقبة يومية قليلة. الخدمة الشخصية كتولي حاسمة: عادة كنحسبو <b>ساعة خدمة شخصية لكل ساعة درس</b>.</p>
<h3>2. تخطيط الأسبوع</h3>
<ul><li>كتبي ف أجندة (ورقية ولا تطبيق) الدروس، الفروض، وتواريخ تسليم الأشغال.</li><li>حجزي <b>أوقات ثابتة</b> للخدمة الشخصية (مثلا الاثنين 10–12: مراجعة المحاسبة).</li><li>عاودي شوفي كل درس <b>ف نفس النهار</b> (10–20 دقيقة): هادي أحسن لحظة باش تثبت المعلومة.</li><li>خلي وقت للنعاس، الرياضة والعائلة: المخ المرتاح كيتعلم أحسن.</li></ul>
<h3>3. تحديد الأولويات: مصفوفة أيزنهاور</h3>
{{fig:eisenhower}}
<p>كنرتبو المهام حسب جوج معايير: <b>مستعجل</b> و<b>مهم</b>. أغلب التقدم كيجي من الخانة 2 (مهم ولكن ماشي مستعجل): إلا تهملناها، كلشي كيولي مستعجل ف آخر لحظة.</p>
<h3>4. التركيز: تقنية بومودورو</h3>
{{fig:pomodoro}}
<p>خدمي <b>25 دقيقة</b> بلا حتى تشويش (التليفون ف وضع الطيران، الإشعارات مقطوعة)، ومن بعد ديري <b>5 دقايق</b> راحة. من بعد 4 «بومودورو»، ديري راحة أطول (15–30 دقيقة).</p>
<h3>5. الحفظ لمدة طويلة</h3>
<ul><li><b>منحنى النسيان</b> (إيبنغهاوس): بلا مراجعة، كننساو جزء كبير من الدرس ف شي أيام.</li><li><b>التكرار المتباعد</b>: المراجعة ف J+1، J+3، J+7، J+14، J+30 (هادشي اللي كيدير قسم «المراجعة» ف هاد التطبيق بنظام لايتنر).</li><li><b>الاسترجاع النشط</b>: طرحي أسئلة على راسك، عاودي التمارين بلا ما تشوفي التصحيح، شرحي الدرس لشي حد. القراية السلبية أقل فعالية بزاف.</li><li><b>بطاقات المراجعة</b>: التعاريف، الصيغ، الخطاطات، الأمثلة النموذجية.</li></ul>
<h3>6. التحضير لفرض ولا امتحان</h3>
<ol><li>بداي <b>2 حتى 3 أسابيع قبل</b>؛ ديري لائحة الفصول.</li><li>عاودي الـTD والمواضيع القديمة بوقت محدود.</li><li>سجلي الأخطاء ديالك وعاودي خدميهم (قسم «أخطائي»).</li><li>النهار اللي قبل: قراي البطاقات ديالك ونعسي مزيان.</li><li>نهار الامتحان: قراي الموضوع كامل، سيري الوقت (حسب التنقيط)، بداي باللي كتعرفي، وعاودي قراي الأجوبة.</li></ol>`,
        en: `<h3>1. From high school to university</h3>
<p>At the EST you are more <b>independent</b>: many lectures (CM), tutorials (TD), practical classes (TP), supervised tests (DS) on Saturdays, and less day-to-day monitoring. Personal work becomes decisive: plan about <b>1 hour of personal study for each hour of class</b>.</p>
<h3>2. Planning your week</h3>
<ul><li>Write classes, tests and deadlines in a diary (paper or app).</li><li>Block <b>fixed slots</b> for personal study (e.g. Monday 10–12: accounting revision).</li><li>Review each lesson <b>the same day</b> (10–20 minutes): the best moment to fix information.</li><li>Keep time for sleep, sport and family: a rested brain learns better.</li></ul>
<h3>3. Prioritising: the Eisenhower matrix</h3>
{{fig:eisenhower}}
<p>Tasks are sorted by two criteria: <b>urgent</b> and <b>important</b>. Most progress comes from quadrant 2 (important, not urgent): neglect it and everything becomes urgent at the last minute.</p>
<h3>4. Focusing: the Pomodoro technique</h3>
{{fig:pomodoro}}
<p>Work for <b>25 minutes</b> with no distraction (phone in flight mode, notifications off), then take a <b>5-minute</b> break. After 4 “pomodoros”, take a longer break (15–30 min).</p>
<h3>5. Remembering for the long term</h3>
<ul><li><b>Forgetting curve</b> (Ebbinghaus): without review, much of a lesson is forgotten within days.</li><li><b>Spaced repetition</b>: review on day 1, 3, 7, 14, 30 (this app's “Review” section does this with the Leitner system).</li><li><b>Active recall</b>: quiz yourself, redo exercises without looking at the solution, explain the lesson to someone. Passive re-reading is far less effective.</li><li><b>Revision cards</b>: definitions, formulas, diagrams, model examples.</li></ul>
<h3>6. Preparing for a test or exam</h3>
<ol><li>Start <b>2–3 weeks before</b>; list the chapters.</li><li>Redo tutorials and past papers under time limits.</li><li>Record your mistakes and work on them (“My mistakes” section).</li><li>The day before: review your cards and sleep well.</li><li>On the day: read the whole paper, manage time (marks), start with what you know, check your work.</li></ol>`,
      },
      key: { fr: ['1 h de travail personnel par heure de cours.', 'Eisenhower : urgent × important ; privilégier l’important non urgent.', 'Pomodoro : 25 min de travail + 5 min de pause.', 'Répétition espacée et rappel actif > relecture passive.'], ar: ['ساعة خدمة شخصية لكل ساعة درس.', 'أيزنهاور: مستعجل × مهم؛ ركزي على المهم غير المستعجل.', 'بومودورو: 25 دقيقة خدمة + 5 دقايق راحة.', 'التكرار المتباعد والاسترجاع النشط > القراية السلبية.'], en: ['1 h of personal study per hour of class.', 'Eisenhower: urgent × important; favour important-not-urgent.', 'Pomodoro: 25 min work + 5 min break.', 'Spaced repetition and active recall > passive re-reading.'] } },

    { id: 'met2', t: { fr: 'Prendre des notes et lire activement', ar: 'أخذ الملاحظات والقراية النشيطة', en: 'Note-taking and active reading' },
      sum: { fr: 'Méthode Cornell, abréviations, carte mentale, lecture SQ3R', ar: 'طريقة كورنيل، الاختصارات، الخريطة الذهنية، القراية SQ3R', en: 'Cornell method, abbreviations, mind maps, SQ3R reading' },
      body: {
        fr: `<h3>1. Pourquoi prendre des notes ?</h3>
<p>Prendre des notes oblige à <b>écouter activement</b>, à sélectionner l'essentiel et à reformuler : on comprend et on retient mieux. Tes notes deviennent ta principale base de révision.</p>
<h3>2. Les règles d'or</h3>
<ul><li>Ne pas tout écrire : noter les <b>idées principales</b>, les définitions, les exemples, ce que le professeur répète ou écrit au tableau.</li><li>Écrire avec <b>ses propres mots</b>, en phrases courtes.</li><li>Laisser de l'espace (marges) pour compléter après le cours.</li><li>Utiliser des <b>titres</b>, des numéros, des couleurs et des flèches.</li><li>Dater et numéroter les pages, un cahier ou un dossier par module.</li></ul>
<h3>3. Les abréviations et symboles</h3>
<table><tr><th>Symbole</th><th>Sens</th><th>Symbole</th><th>Sens</th></tr><tr><td>→</td><td>entraîne, donc</td><td>≠</td><td>différent de</td></tr><tr><td>↑ / ↓</td><td>augmente / diminue</td><td>≈</td><td>environ</td></tr><tr><td>cf.</td><td>voir</td><td>ex.</td><td>exemple</td></tr><tr><td>pb</td><td>problème</td><td>qqch / qqn</td><td>quelque chose / quelqu'un</td></tr><tr><td>ds</td><td>dans</td><td>ê</td><td>être</td></tr><tr><td>tt / tjrs</td><td>tout / toujours</td><td>Δ</td><td>variation</td></tr><tr><td>∴</td><td>donc</td><td>∵</td><td>parce que</td></tr></table>
<h3>4. La méthode Cornell</h3>
{{fig:cornell}}
<ol><li><b>Pendant le cours</b> : prendre les notes dans la grande colonne de droite.</li><li><b>Juste après</b> : dans la colonne de gauche, écrire les mots-clés et des <b>questions</b> auxquelles les notes répondent.</li><li><b>En bas</b> : résumer la page en 3 ou 4 lignes.</li><li><b>Pour réviser</b> : cacher la partie droite et répondre aux questions de gauche à voix haute.</li></ol>
<h3>5. La carte mentale (mind map)</h3>
<p>Le thème est au centre ; les idées principales partent en branches, puis les détails en sous-branches, avec des mots-clés, des couleurs et des dessins. Très utile pour avoir une vue d'ensemble d'un chapitre (ex. : « Management » au centre, puis « Fonctions », « Écoles », « Décision »…).</p>
<h3>6. Lire activement : la méthode SQ3R</h3>
<table><tr><th>Étape</th><th>Action</th></tr><tr><td><b>S</b>urvey (survoler)</td><td>regarder le titre, l'introduction, les sous-titres, les schémas, la conclusion</td></tr><tr><td><b>Q</b>uestion</td><td>transformer les titres en questions (« Qu'est-ce que l'élasticité ? »)</td></tr><tr><td><b>R</b>ead (lire)</td><td>lire pour répondre aux questions, souligner peu mais bien</td></tr><tr><td><b>R</b>ecite (réciter)</td><td>redire les réponses sans regarder</td></tr><tr><td><b>R</b>eview (revoir)</td><td>relire ses notes plus tard, faire une fiche</td></tr></table>`,
        ar: `<h3>1. علاش ناخدو الملاحظات؟</h3>
<p>أخذ الملاحظات كيفرض <b>الاستماع النشيط</b>، اختيار الأساسي وإعادة الصياغة: كنفهمو وكنعقلو أحسن. الملاحظات ديالك كيوليو القاعدة الأساسية للمراجعة.</p>
<h3>2. القواعد الذهبية</h3>
<ul><li>ما تكتبيش كلشي: سجلي <b>الأفكار الأساسية</b>، التعاريف، الأمثلة، واللي كيعاودو الأستاذ ولا كيكتبو ف السبورة.</li><li>كتبي <b>بكلماتك</b>، بجمل قصيرة.</li><li>خلي بلاصة (هوامش) باش تكملي من بعد الدرس.</li><li>استعملي <b>العناوين</b>، الأرقام، الألوان والأسهم.</li><li>كتبي التاريخ ورقمي الصفحات، دفتر ولا ملف لكل مادة.</li></ul>
<h3>3. الاختصارات والرموز</h3>
<table><tr><th>الرمز</th><th>المعنى</th><th>الرمز</th><th>المعنى</th></tr><tr><td>→</td><td>كيأدي لـ، إذن</td><td>≠</td><td>مختلف على</td></tr><tr><td>↑ / ↓</td><td>كيزيد / كينقص</td><td>≈</td><td>تقريبا</td></tr><tr><td>cf.</td><td>شوف</td><td>ex.</td><td>مثال</td></tr><tr><td>pb</td><td>مشكل</td><td>qqch / qqn</td><td>شي حاجة / شي حد</td></tr><tr><td>ds</td><td>ف</td><td>ê</td><td>être</td></tr><tr><td>tt / tjrs</td><td>كلشي / ديما</td><td>Δ</td><td>التغير</td></tr><tr><td>∴</td><td>إذن</td><td>∵</td><td>حيت</td></tr></table>
<h3>4. طريقة كورنيل</h3>
{{fig:cornell}}
<ol><li><b>ف وقت الدرس</b>: كتبي الملاحظات ف العمود الكبير على اليمين.</li><li><b>مباشرة من بعد</b>: ف العمود على اليسار، كتبي الكلمات المفاتيح و<b>الأسئلة</b> اللي كتجاوب عليها الملاحظات.</li><li><b>لتحت</b>: لخصي الصفحة ف 3 ولا 4 سطور.</li><li><b>باش تراجعي</b>: غطي الجزء اليمين وجاوبي على الأسئلة ديال اليسار بصوت عالي.</li></ol>
<h3>5. الخريطة الذهنية (mind map)</h3>
<p>الموضوع ف الوسط؛ الأفكار الأساسية كيخرجو بحال الفروع، والتفاصيل ف فروع صغار، بكلمات مفاتيح، ألوان ورسومات. مفيدة بزاف باش تشوفي الفصل كامل (مثلا: «Management» ف الوسط، ومن بعد «الوظائف»، «المدارس»، «القرار»…).</p>
<h3>6. القراية النشيطة: طريقة SQ3R</h3>
<table><tr><th>المرحلة</th><th>العمل</th></tr><tr><td><b>S</b>urvey (نظرة عامة)</td><td>شوفي العنوان، المقدمة، العناوين الفرعية، الخطاطات، الخاتمة</td></tr><tr><td><b>Q</b>uestion (السؤال)</td><td>حولي العناوين لأسئلة («شنو هي المرونة؟»)</td></tr><tr><td><b>R</b>ead (القراية)</td><td>قراي باش تجاوبي على الأسئلة، سطري شوية ولكن مزيان</td></tr><tr><td><b>R</b>ecite (الاسترجاع)</td><td>عاودي قولي الأجوبة بلا ما تشوفي</td></tr><tr><td><b>R</b>eview (المراجعة)</td><td>عاودي قراي الملاحظات من بعد، وديري بطاقة</td></tr></table>`,
        en: `<h3>1. Why take notes?</h3>
<p>Taking notes forces you to <b>listen actively</b>, select what matters and rephrase it: you understand and remember better. Your notes become your main revision material.</p>
<h3>2. Golden rules</h3>
<ul><li>Don't write everything: note <b>main ideas</b>, definitions, examples, and what the teacher repeats or writes on the board.</li><li>Use <b>your own words</b> and short sentences.</li><li>Leave space (margins) to complete after class.</li><li>Use <b>headings</b>, numbers, colours and arrows.</li><li>Date and number pages; one notebook or folder per module.</li></ul>
<h3>3. Abbreviations and symbols (common in French notes)</h3>
<table><tr><th>Symbol</th><th>Meaning</th><th>Symbol</th><th>Meaning</th></tr><tr><td>→</td><td>leads to, so</td><td>≠</td><td>different from</td></tr><tr><td>↑ / ↓</td><td>increases / decreases</td><td>≈</td><td>about</td></tr><tr><td>cf.</td><td>see</td><td>ex.</td><td>example</td></tr><tr><td>pb</td><td>problem</td><td>qqch / qqn</td><td>something / someone</td></tr><tr><td>ds</td><td>in (dans)</td><td>ê</td><td>to be (être)</td></tr><tr><td>tt / tjrs</td><td>all / always</td><td>Δ</td><td>change</td></tr><tr><td>∴</td><td>therefore</td><td>∵</td><td>because</td></tr></table>
<h3>4. The Cornell method</h3>
{{fig:cornell}}
<ol><li><b>During class</b>: take notes in the large right-hand column.</li><li><b>Right after</b>: in the left column, write keywords and <b>questions</b> the notes answer.</li><li><b>At the bottom</b>: summarise the page in 3–4 lines.</li><li><b>To revise</b>: cover the right side and answer the left-hand questions aloud.</li></ol>
<h3>5. Mind maps</h3>
<p>The topic sits in the centre; main ideas branch out, then details in sub-branches, with keywords, colours and drawings. Very useful for an overview of a chapter (e.g. “Management” in the centre, then “Functions”, “Schools”, “Decisions”…).</p>
<h3>6. Active reading: SQ3R</h3>
<table><tr><th>Step</th><th>Action</th></tr><tr><td><b>S</b>urvey</td><td>look at the title, introduction, headings, diagrams, conclusion</td></tr><tr><td><b>Q</b>uestion</td><td>turn headings into questions (“What is elasticity?”)</td></tr><tr><td><b>R</b>ead</td><td>read to answer the questions; underline little but well</td></tr><tr><td><b>R</b>ecite</td><td>say the answers without looking</td></tr><tr><td><b>R</b>eview</td><td>re-read notes later and make a revision card</td></tr></table>`,
      },
      key: { fr: ['Noter l’essentiel avec ses mots, abréviations et symboles.', 'Cornell : notes à droite, questions à gauche, résumé en bas.', 'Carte mentale : thème au centre et branches.', 'SQ3R : Survey, Question, Read, Recite, Review.'], ar: ['سجلي الأساسي بكلماتك، بالاختصارات والرموز.', 'كورنيل: الملاحظات على اليمين، الأسئلة على اليسار، الملخص لتحت.', 'الخريطة الذهنية: الموضوع ف الوسط والفروع.', 'SQ3R: Survey، Question، Read، Recite، Review.'], en: ['Note the essentials in your own words with abbreviations.', 'Cornell: notes right, questions left, summary at the bottom.', 'Mind map: topic in the centre with branches.', 'SQ3R: Survey, Question, Read, Recite, Review.'] } },

    { id: 'met3', t: { fr: 'Recherche documentaire, citations et rapport', ar: 'البحث الوثائقي، الاستشهاد والتقرير', en: 'Research, citations and reports' },
      sum: { fr: 'Étapes de la recherche, sources, normes APA, plagiat, plan d’un rapport, exposé', ar: 'مراحل البحث، المصادر، معايير APA، السرقة العلمية، تصميم التقرير، العرض', en: 'Research steps, sources, APA style, plagiarism, report structure, presentations' },
      body: {
        fr: `<h3>1. Les étapes d'une recherche documentaire</h3>
<ol><li><b>Définir le sujet</b> : le reformuler, chercher les mots-clés et les synonymes (en français et en anglais).</li><li><b>Choisir les sources</b> : bibliothèque (ENCG / Biblio), catalogues, bases de données, Google Scholar, sites officiels.</li><li><b>Sélectionner et évaluer</b> les documents (auteur, date, fiabilité).</li><li><b>Lire et prendre des notes</b> en notant toujours la référence complète.</li><li><b>Exploiter</b> : organiser les idées dans un plan.</li></ol>
<h3>2. Les types de sources</h3>
<ul><li><b>Ouvrages</b> (manuels, livres) : connaissances solides et générales.</li><li><b>Articles scientifiques</b> (revues) : recherches récentes et spécialisées.</li><li><b>Rapports officiels</b> (HCP, Bank Al-Maghrib, ministères) : chiffres fiables.</li><li><b>Presse</b> : actualité, à vérifier.</li><li><b>Sites web, réseaux sociaux</b> : à utiliser avec prudence.</li></ul>
<h3>3. Citer ses sources : la norme APA</h3>
<p>Chaque idée ou chiffre emprunté doit être cité <b>dans le texte</b> et dans la <b>bibliographie</b> finale.</p>
<ul><li><b>Dans le texte</b> : (Kotler, 2022) ou « Selon Kotler (2022), … ». Citation exacte : entre guillemets avec la page (Kotler, 2022, p. 45).</li><li><b>Livre</b> : Nom, Initiale. (Année). <i>Titre en italique</i> (édition). Éditeur.<br>→ Kotler, P., &amp; Keller, K. L. (2022). <i>Marketing management</i> (16e éd.). Pearson.</li><li><b>Article</b> : Nom, I. (Année). Titre de l'article. <i>Nom de la revue</i>, volume(numéro), pages.</li><li><b>Site web</b> : Auteur ou organisme. (Année, jour mois). <i>Titre de la page</i>. Nom du site. URL</li></ul>
<p>La bibliographie est classée par <b>ordre alphabétique</b> des auteurs.</p>
<div class="warn"><b>Le plagiat</b>, c'est présenter le travail ou les mots d'un autre comme les siens (copier-coller sans citer, faire écrire son devoir par une IA sans le dire). C'est une fraude sanctionnée à l'université. Reformule, cite, et utilise les outils d'IA seulement comme aide, en vérifiant tout.</div>
<h3>4. Rédiger un rapport</h3>
{{fig:rapport}}
<ul><li><b>Page de garde</b> : établissement, filière, titre, nom, encadrant, année universitaire.</li><li><b>Sommaire</b> (table des matières automatique).</li><li><b>Introduction</b> : contexte, problématique (la question centrale), objectifs, annonce du plan.</li><li><b>Développement</b> : 2 ou 3 parties équilibrées, avec des titres et sous-titres, des tableaux et graphiques légendés et commentés.</li><li><b>Conclusion</b> : réponse à la problématique, bilan, limites, ouverture.</li><li><b>Bibliographie</b> et <b>annexes</b>.</li></ul>
<div class="ex"><b>Exemple de problématique</b> pour un rapport de MEEC : « Dans quelle mesure les réseaux sociaux influencent-ils les décisions d'achat des jeunes consommateurs à Oujda ? »</div>
<h3>5. Le travail en groupe</h3>
<ul><li>Répartir les rôles (coordinateur, rédacteur, responsable des recherches, du diaporama).</li><li>Fixer un <b>calendrier</b> avec des étapes et des dates.</li><li>Utiliser des outils collaboratifs (Google Docs, Drive, groupe de messagerie).</li><li>Harmoniser le style à la fin et relire ensemble.</li></ul>`,
        ar: `<h3>1. مراحل البحث الوثائقي</h3>
<ol><li><b>تحديد الموضوع</b>: نعاودو الصياغة ديالو، نقلبو على الكلمات المفاتيح والمرادفات (بالفرنسية والإنجليزية).</li><li><b>اختيار المصادر</b>: المكتبة (ENCG / Biblio)، الفهارس، قواعد المعطيات، Google Scholar، المواقع الرسمية.</li><li><b>الاختيار والتقييم</b> ديال الوثائق (الكاتب، التاريخ، الموثوقية).</li><li><b>القراية وأخذ الملاحظات</b> مع تسجيل المرجع الكامل ديما.</li><li><b>الاستغلال</b>: تنظيم الأفكار ف تصميم.</li></ol>
<h3>2. أنواع المصادر</h3>
<ul><li><b>الكتب</b> (المقررات، المؤلفات): معارف متينة وعامة.</li><li><b>المقالات العلمية</b> (المجلات): أبحاث جديدة ومتخصصة.</li><li><b>التقارير الرسمية</b> (المندوبية، بنك المغرب، الوزارات): أرقام موثوقة.</li><li><b>الصحافة</b>: الأخبار، خاص التحقق.</li><li><b>المواقع والشبكات الاجتماعية</b>: كتستعمل بحذر.</li></ul>
<h3>3. ذكر المصادر: معيار APA</h3>
<p>كل فكرة ولا رقم مأخوذ خاصو يتذكر <b>ف النص</b> وف <b>لائحة المراجع</b> ف الأخير.</p>
<ul><li><b>ف النص</b>: (Kotler, 2022) ولا «Selon Kotler (2022), …». الاقتباس الحرفي: بين المزدوجتين مع الصفحة (Kotler, 2022, p. 45).</li><li><b>كتاب</b>: النسب، الحرف الأول. (العام). <i>العنوان بالمائل</i> (الطبعة). الناشر.<br>← Kotler, P., &amp; Keller, K. L. (2022). <i>Marketing management</i> (16e éd.). Pearson.</li><li><b>مقال</b>: النسب، الحرف. (العام). عنوان المقال. <i>اسم المجلة</i>، المجلد(العدد)، الصفحات.</li><li><b>موقع</b>: الكاتب ولا المؤسسة. (العام، اليوم الشهر). <i>عنوان الصفحة</i>. اسم الموقع. الرابط</li></ul>
<p>لائحة المراجع كتترتب <b>حسب الترتيب الأبجدي</b> ديال الكتاب.</p>
<div class="warn"><b>السرقة العلمية</b> هي تقديم الخدمة ولا الكلام ديال شي حد آخر بحال إلا ديالك (نسخ ولصق بلا ذكر المصدر، تخلي الذكاء الاصطناعي يكتب الفرض بلا ما تقولي). هادا غش كيتعاقب عليه ف الجامعة. عاودي الصياغة، ذكري المصادر، واستعملي الذكاء الاصطناعي غير كمساعدة مع التحقق من كلشي.</div>
<h3>4. كتابة تقرير</h3>
{{fig:rapport}}
<ul><li><b>صفحة الغلاف</b>: المؤسسة، الشعبة، العنوان، الاسم، المؤطر، السنة الجامعية.</li><li><b>الفهرس</b> (أوتوماتيكي).</li><li><b>المقدمة</b>: السياق، الإشكالية (السؤال المركزي)، الأهداف، الإعلان على التصميم.</li><li><b>العرض</b>: 2 ولا 3 أجزاء متوازنة، بعناوين رئيسية وفرعية، جداول ومبيانات معلق عليها.</li><li><b>الخاتمة</b>: الجواب على الإشكالية، الحصيلة، الحدود، الانفتاح.</li><li><b>المراجع</b> و<b>الملاحق</b>.</li></ul>
<div class="ex"><b>مثال ديال الإشكالية</b> لتقرير ف MEEC: «Dans quelle mesure les réseaux sociaux influencent-ils les décisions d'achat des jeunes consommateurs à Oujda ?»</div>
<h3>5. الخدمة الجماعية</h3>
<ul><li>توزيع الأدوار (المنسق، الكاتب، المسؤول على البحث، على العرض).</li><li>تحديد <b>جدول زمني</b> بمراحل وتواريخ.</li><li>استعمال أدوات تشاركية (Google Docs، Drive، مجموعة ف التراسل).</li><li>توحيد الأسلوب ف الأخير والقراية مع بعض.</li></ul>`,
        en: `<h3>1. Steps of documentary research</h3>
<ol><li><b>Define the topic</b>: rephrase it, list keywords and synonyms (in French and English).</li><li><b>Choose sources</b>: library (ENCG / Biblio), catalogues, databases, Google Scholar, official websites.</li><li><b>Select and evaluate</b> documents (author, date, reliability).</li><li><b>Read and take notes</b>, always recording the full reference.</li><li><b>Use</b> the material: organise ideas into an outline.</li></ol>
<h3>2. Types of sources</h3>
<ul><li><b>Books</b> (textbooks): solid general knowledge.</li><li><b>Academic articles</b> (journals): recent, specialised research.</li><li><b>Official reports</b> (HCP, Bank Al-Maghrib, ministries): reliable figures.</li><li><b>Press</b>: current events, to be checked.</li><li><b>Websites, social media</b>: use with caution.</li></ul>
<h3>3. Citing sources: APA style</h3>
<p>Every borrowed idea or figure must be cited <b>in the text</b> and in the final <b>reference list</b>.</p>
<ul><li><b>In the text</b>: (Kotler, 2022) or “According to Kotler (2022), …”. Direct quotation: in quotation marks with the page (Kotler, 2022, p. 45).</li><li><b>Book</b>: Surname, Initial. (Year). <i>Title in italics</i> (edition). Publisher.<br>→ Kotler, P., &amp; Keller, K. L. (2022). <i>Marketing management</i> (16th ed.). Pearson.</li><li><b>Article</b>: Surname, I. (Year). Article title. <i>Journal Name</i>, volume(issue), pages.</li><li><b>Web page</b>: Author or organisation. (Year, Month Day). <i>Page title</i>. Site name. URL</li></ul>
<p>The reference list is in <b>alphabetical order</b> of authors.</p>
<div class="warn"><b>Plagiarism</b> is presenting someone else's work or words as your own (copy-paste without citing, having an AI write your assignment without saying so). It is academic fraud and is sanctioned. Rephrase, cite, and use AI tools only as an aid, checking everything.</div>
<h3>4. Writing a report</h3>
{{fig:rapport}}
<ul><li><b>Title page</b>: institution, programme, title, name, supervisor, academic year.</li><li><b>Contents</b> (automatic table of contents).</li><li><b>Introduction</b>: context, research question (problématique), objectives, outline.</li><li><b>Body</b>: 2–3 balanced parts with headings, captioned and commented tables and charts.</li><li><b>Conclusion</b>: answer to the question, summary, limits, opening.</li><li><b>References</b> and <b>appendices</b>.</li></ul>
<div class="ex"><b>Example research question</b> for a MEEC report: “To what extent do social networks influence the buying decisions of young consumers in Oujda?”</div>
<h3>5. Group work</h3>
<ul><li>Share roles (coordinator, writer, researcher, slides).</li><li>Set a <b>schedule</b> with steps and dates.</li><li>Use collaborative tools (Google Docs, Drive, a messaging group).</li><li>Harmonise the style at the end and proofread together.</li></ul>`,
      },
      key: { fr: ['Recherche : sujet → sources → évaluation → notes → plan.', 'APA : (Auteur, année) dans le texte + bibliographie alphabétique.', 'Plagiat = fraude : toujours citer.', 'Rapport : garde, sommaire, introduction (problématique), développement, conclusion, bibliographie.'], ar: ['البحث: الموضوع ← المصادر ← التقييم ← الملاحظات ← التصميم.', 'APA: (الكاتب، العام) ف النص + لائحة مراجع أبجدية.', 'السرقة العلمية = غش: ذكري المصدر ديما.', 'التقرير: الغلاف، الفهرس، المقدمة (الإشكالية)، العرض، الخاتمة، المراجع.'], en: ['Research: topic → sources → evaluation → notes → outline.', 'APA: (Author, year) in text + alphabetical reference list.', 'Plagiarism = fraud: always cite.', 'Report: title page, contents, introduction (question), body, conclusion, references.'] } },
  ],
  gloss: [
    ['CM / TD / TP', 'الدرس / الأشغال الموجهة / التطبيقية', 'Lecture / tutorial / practical', { fr: 'Cours magistral, travaux dirigés, travaux pratiques.', ar: 'الدرس النظري، الأشغال الموجهة، الأشغال التطبيقية.', en: 'Lecture, tutorial, practical class.' }],
    ['DS', 'الفرض المحروس', 'Supervised test', { fr: 'Devoir surveillé, en général le samedi à l’EST.', ar: 'فرض محروس، عادة نهار السبت ف EST.', en: 'Supervised test, usually on Saturdays at the EST.' }],
    ['Matrice d’Eisenhower', 'مصفوفة أيزنهاور', 'Eisenhower matrix', { fr: 'Classement des tâches selon urgent/important.', ar: 'ترتيب المهام حسب مستعجل/مهم.', en: 'Sorting tasks by urgent/important.' }],
    ['Pomodoro', 'بومودورو', 'Pomodoro', { fr: '25 min de travail concentré + 5 min de pause.', ar: '25 دقيقة خدمة مركزة + 5 دقايق راحة.', en: '25 min focused work + 5 min break.' }],
    ['Répétition espacée', 'التكرار المتباعد', 'Spaced repetition', { fr: 'Revoir à intervalles croissants (1, 3, 7, 14, 30 jours).', ar: 'المراجعة على فترات كتكبر (1، 3، 7، 14، 30 يوم).', en: 'Reviewing at growing intervals (1, 3, 7, 14, 30 days).' }],
    ['Rappel actif', 'الاسترجاع النشط', 'Active recall', { fr: 'Se tester au lieu de relire.', ar: 'نختبرو راسنا عوض ما نعاودو نقراو.', en: 'Testing yourself instead of re-reading.' }],
    ['Méthode Cornell', 'طريقة كورنيل', 'Cornell method', { fr: 'Notes à droite, mots-clés à gauche, résumé en bas.', ar: 'الملاحظات على اليمين، الكلمات المفاتيح على اليسار، الملخص لتحت.', en: 'Notes right, keywords left, summary at the bottom.' }],
    ['Carte mentale', 'الخريطة الذهنية', 'Mind map', { fr: 'Schéma en branches autour d’un thème central.', ar: 'خطاطة بالفروع حول موضوع ف الوسط.', en: 'Branching diagram around a central topic.' }],
    ['Problématique', 'الإشكالية', 'Research question', { fr: 'Question centrale à laquelle répond un travail.', ar: 'السؤال المركزي اللي كيجاوب عليه البحث.', en: 'Central question a piece of work answers.' }],
    ['Bibliographie', 'لائحة المراجع', 'Reference list', { fr: 'Liste alphabétique des sources utilisées.', ar: 'لائحة أبجدية ديال المصادر المستعملة.', en: 'Alphabetical list of sources used.' }],
    ['Plagiat', 'السرقة العلمية', 'Plagiarism', { fr: 'Utiliser le travail d’autrui sans le citer.', ar: 'استعمال خدمة الآخرين بلا ذكر المصدر.', en: 'Using others’ work without citing it.' }],
    ['Norme APA', 'معيار APA', 'APA style', { fr: 'Règles de citation : (Auteur, année).', ar: 'قواعد الاستشهاد: (الكاتب، العام).', en: 'Citation rules: (Author, year).' }],
  ],
};
