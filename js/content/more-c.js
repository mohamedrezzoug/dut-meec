// تعميق الدروس: Numérique + Français + Anglais + Méthodologie
const Q = (q, a) => `<details class="qa"><summary>${q}</summary><p>${a}</p></details>`;
export default {
  num1: {
    fr: `<h3>📝 Exercice corrigé : unités et capacité</h3>
<div class="ex"><b>Énoncé.</b> 1) Un téléphone a 128 Go. Combien de photos de 4 Mo peut-il stocker (en prenant 1 Go = 1 024 Mo) ? 2) Une vidéo de 1,2 Go est téléchargée avec une connexion de 40 Mbit/s. Durée ? 3) Convertis 10110₂ en décimal et 45 en binaire.</div>
<ol><li>128 × 1 024 = 131 072 Mo → 131 072 / 4 = <b>32 768 photos</b>.</li>
<li>1,2 Go = 1,2 × 1 024 = 1 228,8 Mo = 1 228,8 × 8 = 9 830,4 Mbit → 9 830,4 / 40 ≈ <b>246 s ≈ 4 min 6 s</b>. Attention : le débit est en <b>bits</b>, la taille en <b>octets</b>.</li>
<li>10110₂ = 16 + 4 + 2 = <b>22</b>. 45 = 32 + 8 + 4 + 1 → <b>101101₂</b>.</li></ol>
{{fig:units}}
<h3>⚠️ Erreurs fréquentes</h3>
<ul><li>Confondre bit (b) et octet (o / B) : 1 octet = 8 bits.</li><li>Croire que la RAM garde les données après extinction : elle est <b>volatile</b>.</li><li>Confondre logiciel système (Windows, Android) et logiciel d'application (Word, Chrome).</li><li>Penser que plus de Go de stockage rend l'ordinateur plus rapide : la vitesse dépend surtout du processeur et de la RAM.</li></ul>
<h3>❓ Questions de cours</h3>
${Q("Quel est le rôle du processeur ?", "Le processeur (CPU) exécute les instructions des programmes et effectue les calculs. Sa vitesse se mesure en GHz et dépend aussi du nombre de cœurs.")}
${Q("Citez des périphériques d'entrée et de sortie.", "Entrée : clavier, souris, scanner, micro, webcam. Sortie : écran, imprimante, haut-parleurs. Entrée-sortie : écran tactile, clé USB.")}
${Q("Qu'est-ce que le cloud ?", "Le stockage ou l'utilisation de logiciels sur des serveurs accessibles par Internet (Google Drive, OneDrive), au lieu de l'ordinateur personnel.")}`,
    ar: `<h3>📝 تمرين محلول: الوحدات والسعة</h3>
<div class="ex"><b>النص.</b> 1) تليفون فيه 128 Go. شحال من تصويرة ديال 4 Mo يقدر يخزن (1 Go = 1 024 Mo)؟ 2) فيديو ديال 1,2 Go كيتحمل بصبيب 40 Mbit/s. شحال المدة؟ 3) حولي 10110₂ للعشري و 45 للثنائي.</div>
<ol><li>128 × 1 024 = 131 072 Mo ← 131 072 / 4 = <b>32 768 تصويرة</b>.</li>
<li>1,2 Go = 1 228,8 Mo = 1 228,8 × 8 = 9 830,4 Mbit ← 9 830,4 / 40 ≈ <b>246 ثانية ≈ 4 دقايق و 6 ثواني</b>. رد البال: الصبيب بالـ <b>bits</b>، والحجم بالـ <b>octets</b>.</li>
<li>10110₂ = 16 + 4 + 2 = <b>22</b>. 45 = 32 + 8 + 4 + 1 ← <b>101101₂</b>.</li></ol>
{{fig:units}}
<h3>⚠️ أخطاء شائعة</h3>
<ul><li>الخلط بين bit و octet: 1 octet = 8 bits.</li><li>الاعتقاد بلي RAM كتحفظ المعطيات من بعد ما كيطفى الجهاز: هي <b>مؤقتة</b>.</li><li>الخلط بين برنامج النظام (Windows، Android) وبرنامج التطبيق (Word، Chrome).</li><li>الظن بلي Go أكثر ف التخزين كيخلي الحاسوب أسرع: السرعة كتعتمد بالأساس على المعالج و RAM.</li></ul>
<h3>❓ أسئلة الدرس</h3>
${Q("شنو هو دور المعالج؟", "المعالج (CPU) كينفذ التعليمات ديال البرامج وكيدير الحسابات. السرعة ديالو كتقاس بـ GHz وكتعتمد حتى على عدد النوى.")}
${Q("ذكري أجهزة الإدخال والإخراج.", "الإدخال: الكلافيي، الفأرة، السكانير، الميكرو، الكاميرا. الإخراج: الشاشة، الطابعة، مكبرات الصوت. إدخال-إخراج: الشاشة اللمسية، مفتاح USB.")}
${Q("شنو هو السحاب (cloud)؟", "التخزين ولا استعمال البرامج على خوادم كنوصلو ليها بالأنترنت (Google Drive، OneDrive)، عوض الحاسوب الشخصي.")}`,
    en: `<h3>📝 Worked exercise: units and capacity</h3>
<div class="ex"><b>Task.</b> 1) A 128 GB phone: how many 4 MB photos (1 GB = 1,024 MB)? 2) A 1.2 GB video on a 40 Mbit/s connection: time? 3) Convert 10110₂ to decimal and 45 to binary.</div>
<ol><li>131,072 MB / 4 = <b>32,768 photos</b>.</li><li>1.2 GB = 9,830.4 Mbit → ≈ <b>246 s ≈ 4 min 6 s</b>. Speed is in <b>bits</b>, size in <b>bytes</b>.</li><li>10110₂ = <b>22</b>; 45 = <b>101101₂</b>.</li></ol>
{{fig:units}}
<h3>⚠️ Common mistakes</h3>
<ul><li>Confusing bit and byte: 1 byte = 8 bits.</li><li>Thinking RAM keeps data after shutdown: it is <b>volatile</b>.</li><li>Confusing system software (Windows) with applications (Word).</li><li>Believing more storage makes a computer faster: speed depends on CPU and RAM.</li></ul>
<h3>❓ Review questions</h3>
${Q("What does the processor do?", "The CPU executes program instructions and performs calculations; speed in GHz and number of cores.")}
${Q("Input and output devices?", "Input: keyboard, mouse, scanner, mic, webcam. Output: screen, printer, speakers. Both: touchscreen, USB key.")}
${Q("What is the cloud?", "Storing files or using software on Internet servers (Google Drive, OneDrive) rather than on your own computer.")}`,
  },
  num2: {
    fr: `<h3>📝 Exercice corrigé : tableau de ventes sous Excel</h3>
<div class="ex"><b>Énoncé.</b> Tableau : A = Produit, B = Prix HT, C = Quantité, D = Total HT, E = TVA, F = TTC (lignes 2 à 6). Le taux de TVA est dans la cellule H1 (20 %).<br>1) Formules de D2, E2, F2. 2) Total général. 3) Afficher « Bonne vente » si le TTC dépasse 5 000. 4) Compter les produits de plus de 100 DH.</div>
<ol><li>D2 : <code>=B2*C2</code> ; E2 : <code>=D2*$H$1</code> (référence <b>absolue</b> pour copier vers le bas) ; F2 : <code>=D2+E2</code>.</li>
<li><code>=SOMME(F2:F6)</code>.</li>
<li><code>=SI(F2&gt;5000;"Bonne vente";"")</code>.</li>
<li><code>=NB.SI(B2:B6;"&gt;100")</code>.</li></ol>
{{fig:excel}}
<p><b>Bonus</b> : moyenne des quantités <code>=MOYENNE(C2:C6)</code> ; meilleur total <code>=MAX(F2:F6)</code> ; total des ventes d'un produit précis <code>=SOMME.SI(A2:A6;"Savon";F2:F6)</code>.</p>
<h3>⚠️ Erreurs fréquentes</h3>
<ul><li>Oublier le signe <b>=</b> au début d'une formule.</li><li>Recopier une formule avec un taux sans $ : la référence glisse vers une cellule vide.</li><li>Écrire 20 au lieu de 20 % ou 0,2 dans la cellule du taux.</li><li>Utiliser des virgules à la place des points-virgules dans Excel français (et inversement en anglais).</li></ul>
<h3>❓ Questions de cours</h3>
${Q("Différence entre référence relative, absolue et mixte ?", "Relative (A1) : change quand on copie. Absolue ($A$1) : fixe. Mixte ($A1 ou A$1) : seule la colonne ou la ligne est fixe.")}
${Q("Quel graphique choisir ?", "Courbe pour une évolution dans le temps ; histogramme (barres) pour comparer des catégories ; secteurs (camembert) pour des parts d'un total.")}
${Q("À quoi sert un tableau croisé dynamique ?", "À résumer rapidement une grande base de données : total des ventes par produit, par mois ou par région, sans écrire de formules.")}`,
    ar: `<h3>📝 تمرين محلول: جدول المبيعات ف Excel</h3>
<div class="ex"><b>النص.</b> الجدول: A = المنتوج، B = الثمن HT، C = الكمية، D = المجموع HT، E = TVA، F = TTC (السطور من 2 حتى 6). سعر TVA ف الخانة H1 (20 %).<br>1) صيغ D2 و E2 و F2. 2) المجموع العام. 3) تكتب «Bonne vente» إلا كان TTC فايت 5 000. 4) تحسب المنتوجات اللي فايتين 100 درهم.</div>
<ol><li>D2: <code>=B2*C2</code>؛ E2: <code>=D2*$H$1</code> (مرجع <b>مطلق</b> باش ننسخو لتحت)؛ F2: <code>=D2+E2</code>.</li>
<li><code>=SOMME(F2:F6)</code>.</li>
<li><code>=SI(F2&gt;5000;"Bonne vente";"")</code>.</li>
<li><code>=NB.SI(B2:B6;"&gt;100")</code>.</li></ol>
{{fig:excel}}
<p><b>زيادة</b>: متوسط الكميات <code>=MOYENNE(C2:C6)</code>؛ أحسن مجموع <code>=MAX(F2:F6)</code>؛ مجموع مبيعات منتوج معين <code>=SOMME.SI(A2:A6;"Savon";F2:F6)</code>.</p>
<h3>⚠️ أخطاء شائعة</h3>
<ul><li>نسيان علامة <b>=</b> ف البداية ديال الصيغة.</li><li>نسخ صيغة فيها السعر بلا $: المرجع كيزلق لخانة خاوية.</li><li>كتابة 20 عوض 20 % ولا 0,2 ف خانة السعر.</li><li>استعمال الفاصلة عوض الفاصلة المنقوطة ف Excel الفرنسي (والعكس ف الإنجليزي).</li></ul>
<h3>❓ أسئلة الدرس</h3>
${Q("شنو الفرق بين المرجع النسبي والمطلق والمختلط؟", "النسبي (A1): كيتبدل ملي كننسخو. المطلق ($A$1): ثابت. المختلط ($A1 ولا A$1): غير العمود ولا السطر اللي ثابت.")}
${Q("أشمن مبيان نختارو؟", "المنحنى للتطور ف الزمن؛ الأعمدة لمقارنة الفئات؛ الدائرة (camembert) لأجزاء من مجموع.")}
${Q("علاش كيصلح الجدول المحوري (TCD)؟", "باش نلخصو بسرعة قاعدة معطيات كبيرة: مجموع المبيعات حسب المنتوج، الشهر ولا الجهة، بلا ما نكتبو الصيغ.")}`,
    en: `<h3>📝 Worked exercise: a sales sheet in Excel</h3>
<div class="ex"><b>Task.</b> Columns A Product, B Price, C Qty, D Total excl., E VAT, F Total incl. (rows 2–6); VAT rate in H1 (20%).<br>1) Formulas for D2, E2, F2. 2) Grand total. 3) Show “Good sale” if F &gt; 5,000. 4) Count products above 100 MAD.</div>
<ol><li>D2 <code>=B2*C2</code>; E2 <code>=D2*$H$1</code> (<b>absolute</b> reference); F2 <code>=D2+E2</code>.</li><li><code>=SUM(F2:F6)</code>.</li><li><code>=IF(F2&gt;5000,"Good sale","")</code>.</li><li><code>=COUNTIF(B2:B6,"&gt;100")</code>.</li></ol>
{{fig:excel}}
<p><b>Bonus</b>: <code>=AVERAGE(C2:C6)</code>, <code>=MAX(F2:F6)</code>, <code>=SUMIF(A2:A6,"Soap",F2:F6)</code>.</p>
<h3>⚠️ Common mistakes</h3>
<ul><li>Forgetting the leading <b>=</b>.</li><li>Copying a formula without $ on the rate cell.</li><li>Typing 20 instead of 20% or 0.2.</li><li>Commas vs semicolons as separators (English vs French Excel).</li></ul>
<h3>❓ Review questions</h3>
${Q("Relative, absolute and mixed references?", "Relative (A1) changes when copied; absolute ($A$1) stays fixed; mixed ($A1 or A$1) fixes only column or row.")}
${Q("Which chart to choose?", "Line for change over time; bar/column to compare categories; pie for shares of a total.")}
${Q("What is a pivot table for?", "Summarising a large dataset quickly — total sales by product, month or region — without formulas.")}`,
  },
  num3: {
    fr: `<h3>📝 Exercice corrigé : recherche et vérification</h3>
<div class="ex"><b>Énoncé.</b> Pour un exposé sur « le e-commerce au Maroc », tu dois trouver des chiffres fiables. 1) Écris trois requêtes efficaces. 2) Comment juger si une source est fiable ? 3) Une page Facebook annonce « 90 % des Marocains achètent en ligne chaque semaine » : que fais-tu ?</div>
<ol><li><code>"e-commerce" Maroc 2025 chiffres</code> ; <code>paiement en ligne Maroc site:ma</code> ; <code>commerce électronique Maroc rapport filetype:pdf</code>.</li>
<li>Critères : <b>auteur</b> identifié et compétent (organisme public, CMI, Bank Al-Maghrib, HCP, ANRT) ; <b>date</b> récente ; <b>sources</b> citées ; <b>objectif</b> informatif et non commercial ; cohérence avec d'autres sources.</li>
<li>On ne la cite pas directement : on cherche la source originale (étude ? organisme ?), on compare avec des données officielles, et si on ne trouve rien, on considère l'information comme non vérifiée.</li></ol>
{{fig:search}}
<h3>⚠️ Erreurs fréquentes</h3>
<ul><li>Copier un texte sans citer la source : c'est du <b>plagiat</b>.</li><li>Se contenter du premier résultat Google (souvent une publicité).</li><li>Utiliser des mots-clés trop vagues (« commerce ») ou une phrase entière.</li><li>Confondre le navigateur (Chrome) et le moteur de recherche (Google).</li></ul>
<h3>❓ Questions de cours</h3>
${Q("Que fait l'opérateur entre guillemets ?", "Il cherche l'expression exacte, mots dans le même ordre.")}
${Q("À quoi sert le signe moins (−) ?", "À exclure un mot des résultats : jaguar −voiture.")}
${Q("Que sont les cookies ?", "De petits fichiers enregistrés par les sites dans le navigateur pour mémoriser la connexion, le panier ou suivre la navigation (publicité ciblée).")}`,
    ar: `<h3>📝 تمرين محلول: البحث والتحقق</h3>
<div class="ex"><b>النص.</b> لعرض على «التجارة الإلكترونية ف المغرب»، خاصك تلقاي أرقام موثوقة. 1) كتبي ثلاث طلبات بحث فعالة. 2) كيفاش نحكمو واش المصدر موثوق؟ 3) صفحة فيسبوك كتقول «90 % من المغاربة كيشريو أونلاين كل أسبوع»: شنو غادي ديري؟</div>
<ol><li><code>"e-commerce" Maroc 2025 chiffres</code>؛ <code>paiement en ligne Maroc site:ma</code>؛ <code>commerce électronique Maroc rapport filetype:pdf</code>.</li>
<li>المعايير: <b>المؤلف</b> معروف وكفء (مؤسسة عمومية، CMI، بنك المغرب، المندوبية السامية للتخطيط، ANRT)؛ <b>التاريخ</b> جديد؛ <b>المصادر</b> مذكورة؛ <b>الهدف</b> إخباري ماشي تجاري؛ متوافق مع مصادر أخرى.</li>
<li>ما كنذكروهاش مباشرة: كنقلبو على المصدر الأصلي (دراسة؟ مؤسسة؟)، كنقارنو مع المعطيات الرسمية، وإلا ما لقينا والو، كنعتبرو المعلومة غير متحقق منها.</li></ol>
{{fig:search}}
<h3>⚠️ أخطاء شائعة</h3>
<ul><li>نسخ نص بلا ذكر المصدر: هادا <b>انتحال</b>.</li><li>الاكتفاء بالنتيجة الأولى ف Google (غالبا إشهار).</li><li>استعمال كلمات مفاتيح عامة بزاف («commerce») ولا جملة كاملة.</li><li>الخلط بين المتصفح (Chrome) ومحرك البحث (Google).</li></ul>
<h3>❓ أسئلة الدرس</h3>
${Q("شنو كيدير المعامل بين المزدوجتين؟", "كيقلب على العبارة بالضبط، الكلمات بنفس الترتيب.")}
${Q("علاش كتصلح علامة الناقص (−)؟", "باش نحيدو كلمة من النتائج: jaguar −voiture.")}
${Q("شنو هوما الكوكيز؟", "ملفات صغيرة كيسجلوها المواقع ف المتصفح باش يتفكرو الدخول، السلة ولا يتبعو التصفح (إشهار موجه).")}`,
    en: `<h3>📝 Worked exercise: searching and checking</h3>
<div class="ex"><b>Task.</b> For a talk on “e-commerce in Morocco”: 1) write three effective queries; 2) how do you judge reliability? 3) A Facebook page claims “90% of Moroccans shop online every week”: what do you do?</div>
<ol><li><code>"e-commerce" Morocco 2025 figures</code>; <code>online payment Morocco site:ma</code>; <code>e-commerce Morocco report filetype:pdf</code>.</li><li>Check <b>author</b> (public body, CMI, Bank Al-Maghrib, HCP, ANRT), <b>date</b>, cited <b>sources</b>, non-commercial <b>purpose</b>, consistency with other sources.</li><li>Don't cite it: find the original source, compare with official data; if nothing is found, treat it as unverified.</li></ol>
{{fig:search}}
<h3>⚠️ Common mistakes</h3>
<ul><li>Copying without citing: <b>plagiarism</b>.</li><li>Trusting only the first (often sponsored) result.</li><li>Vague keywords or whole sentences.</li><li>Confusing the browser (Chrome) with the search engine (Google).</li></ul>
<h3>❓ Review questions</h3>
${Q("What do quotation marks do?", "Search the exact phrase in that order.")}
${Q("What does the minus sign do?", "Excludes a word: jaguar −car.")}
${Q("What are cookies?", "Small files sites store in your browser to remember login, basket, or track browsing for targeted ads.")}`,
  },
  num4: {
    fr: `<h3>📝 Exercice corrigé : sécurité et données personnelles</h3>
<div class="ex"><b>Énoncé.</b> Tu reçois un SMS : « Votre colis est bloqué, payez 9,90 DH ici : bit.ly/colis-ma ». 1) De quoi s'agit-il ? 2) Quels indices ? 3) Que faire ? 4) Ta boutique en ligne collecte nom, téléphone et adresse : quelles obligations au Maroc ?</div>
<ol><li>Probablement un <b>hameçonnage (phishing / smishing)</b> pour voler les données bancaires.</li>
<li>Indices : urgence, petit montant pour rassurer, lien raccourci inconnu, expéditeur non officiel, aucun numéro de suivi personnel.</li>
<li>Ne pas cliquer ; vérifier sur le site officiel du transporteur ; supprimer et signaler ; si on a déjà payé, prévenir immédiatement la banque et faire opposition.</li>
<li>Loi <b>09-08</b> : déclarer ou demander l'autorisation à la <b>CNDP</b>, informer les clients (finalité, droits d'accès, de rectification et d'opposition), ne collecter que les données nécessaires et les protéger.</li></ol>
<h3>⚠️ Erreurs fréquentes</h3>
<ul><li>Utiliser le même mot de passe partout.</li><li>Croire que « https » garantit que le site est honnête : il garantit seulement que la connexion est chiffrée.</li><li>Faire les sauvegardes sur le même appareil (si on le perd, tout est perdu).</li><li>Partager son code de validation reçu par SMS (personne de légitime ne le demande).</li></ul>
<h3>❓ Questions de cours</h3>
${Q("Qu'est-ce qu'un bon mot de passe ?", "Long (au moins 12 caractères), unique pour chaque site, mélangeant lettres, chiffres et symboles, ou une phrase de passe ; idéalement géré par un gestionnaire de mots de passe.")}
${Q("Qu'est-ce que la double authentification ?", "Une deuxième preuve d'identité en plus du mot de passe (code SMS, application, empreinte), qui bloque un pirate même s'il a volé le mot de passe.")}
${Q("Qu'est-ce qu'un rançongiciel ?", "Un logiciel malveillant qui chiffre les fichiers et demande une rançon pour les débloquer. La meilleure protection est une sauvegarde régulière et des mises à jour.")}`,
    ar: `<h3>📝 تمرين محلول: الأمن والمعطيات الشخصية</h3>
<div class="ex"><b>النص.</b> توصلتي بـ SMS: «الكولي ديالك محبوس، خلصي 9,90 درهم هنا: bit.ly/colis-ma». 1) شنو هادا؟ 2) شنو هي العلامات؟ 3) شنو خاصك ديري؟ 4) المتجر الإلكتروني ديالك كيجمع السمية والتليفون والعنوان: شنو هي الالتزامات ف المغرب؟</div>
<ol><li>غالبا <b>تصيد احتيالي (phishing / smishing)</b> باش يسرقو المعطيات البنكية.</li>
<li>العلامات: الاستعجال، مبلغ صغير باش يطمنوك، رابط مختصر مجهول، مرسل ماشي رسمي، ما كاينش رقم تتبع شخصي.</li>
<li>ما تكليكيش؛ تحققي ف الموقع الرسمي ديال شركة النقل؛ امسحي وبلغي؛ إلا خلصتي، علمي البنك دغيا ودوري تعرض على البطاقة.</li>
<li>القانون <b>09-08</b>: التصريح ولا طلب الإذن من <b>CNDP</b>، إعلام الزبناء (الهدف، حق الولوج والتصحيح والتعرض)، جمع غير المعطيات الضرورية وحمايتها.</li></ol>
<h3>⚠️ أخطاء شائعة</h3>
<ul><li>استعمال نفس كلمة السر ف كل بلاصة.</li><li>الاعتقاد بلي «https» كيضمن بلي الموقع نزيه: كيضمن غير بلي الاتصال مشفر.</li><li>دير النسخ الاحتياطية ف نفس الجهاز (إلا ضاع، كلشي كيضيع).</li><li>تعطي الكود ديال التحقق اللي جاك ف SMS (حتى واحد قانوني ما كيطلبو).</li></ul>
<h3>❓ أسئلة الدرس</h3>
${Q("شنو هي كلمة السر المزيانة؟", "طويلة (على الأقل 12 حرف)، خاصة بكل موقع، فيها حروف وأرقام ورموز، ولا جملة سر؛ والأحسن تتسير بمدير كلمات السر.")}
${Q("شنو هو التحقق بخطوتين؟", "دليل ثاني على الهوية زايد على كلمة السر (كود SMS، تطبيق، البصمة)، كيوقف القرصان واخا سرق كلمة السر.")}
${Q("شنو هو برنامج الفدية؟", "برنامج خبيث كيشفر الملفات وكيطلب فدية باش يحلهم. أحسن حماية هي النسخ الاحتياطي المنتظم والتحديثات.")}`,
    en: `<h3>📝 Worked exercise: security and personal data</h3>
<div class="ex"><b>Task.</b> An SMS says: “Your parcel is blocked, pay 9.90 MAD here: bit.ly/colis-ma”. 1) What is it? 2) Clues? 3) What to do? 4) Your online shop collects name, phone and address: obligations in Morocco?</div>
<ol><li>Probably <b>phishing (smishing)</b> to steal card data.</li><li>Urgency, small reassuring amount, unknown short link, unofficial sender, no personal tracking number.</li><li>Don't click; check the carrier's official site; delete and report; if you paid, call your bank immediately.</li><li>Law <b>09-08</b>: declare to or get authorisation from the <b>CNDP</b>, inform customers of purpose and rights, collect only what is needed and protect it.</li></ol>
<h3>⚠️ Common mistakes</h3>
<ul><li>Reusing one password everywhere.</li><li>Thinking “https” means honest: it only means encrypted.</li><li>Backing up on the same device.</li><li>Sharing an SMS verification code.</li></ul>
<h3>❓ Review questions</h3>
${Q("What makes a good password?", "Long (12+), unique per site, mixed characters or a passphrase, ideally in a password manager.")}
${Q("What is two-factor authentication?", "A second proof of identity (SMS code, app, fingerprint) that stops an attacker even with the password.")}
${Q("What is ransomware?", "Malware that encrypts files and demands payment; regular backups and updates are the best defence.")}`,
  },
  fr1: {
    fr: `<h3>📝 Exercice corrigé : analyser une situation de communication</h3>
<div class="ex"><b>Énoncé.</b> Une marque de jus publie sur Instagram une vidéo de 15 s : une étudiante boit un jus frais à la sortie d'un examen, avec le texte « Fraîcheur méritée 🍊 #ExamDone ». Identifie les 6 éléments du schéma de Jakobson et la fonction dominante.</div>
<ol><li><b>Émetteur</b> : la marque. <b>Récepteur</b> : les jeunes / étudiants abonnés.</li><li><b>Message</b> : « notre jus récompense tes efforts ». <b>Code</b> : image, texte en français, émoji, hashtag.</li><li><b>Canal</b> : Instagram (vidéo courte sur smartphone). <b>Référent / contexte</b> : la période des examens.</li><li>Fonction dominante : <b>conative</b> (inciter à acheter), avec une fonction <b>poétique</b> (jeu sur « méritée », couleurs).</li></ol>
{{fig:jakobson}}
<h3>⚠️ Erreurs fréquentes</h3>
<ul><li>Confondre canal (le support physique) et code (la langue, les signes).</li><li>Oublier les <b>bruits</b> : connexion lente, son coupé, trop de publicités autour.</li><li>Croire qu'un message n'a qu'une seule fonction : on cherche la fonction <b>dominante</b>.</li><li>Négliger le non-verbal à l'oral (regard, gestes, ton).</li></ul>
<h3>❓ Questions de cours</h3>
${Q("Quelles sont les six fonctions du langage ?", "Expressive (émetteur), conative (récepteur), référentielle (contexte), phatique (canal), métalinguistique (code), poétique (message).")}
${Q("Qu'est-ce que la fonction phatique ?", "Celle qui établit ou maintient le contact : « Allô ? », « Vous m'entendez ? », « Bonjour à tous ».")}
${Q("Pourquoi le feed-back est-il important ?", "Il permet à l'émetteur de vérifier que le message a été compris et de l'ajuster ; sans lui, la communication est à sens unique.")}`,
    ar: `<h3>📝 تمرين محلول: تحليل وضعية تواصلية</h3>
<div class="ex"><b>النص.</b> ماركة ديال العصير نشرات ف إنستغرام فيديو ديال 15 ثانية: طالبة كتشرب عصير بارد ف الخروج من الامتحان، مع النص «Fraîcheur méritée 🍊 #ExamDone». حددي العناصر 6 ديال خطاطة ياكوبسون والوظيفة الغالبة.</div>
<ol><li><b>المرسل</b>: الماركة. <b>المتلقي</b>: الشباب / الطلبة المتابعين.</li><li><b>الرسالة</b>: «العصير ديالنا كيكافئ المجهود ديالك». <b>السنن</b>: الصورة، نص بالفرنسية، إيموجي، هاشتاغ.</li><li><b>القناة</b>: إنستغرام (فيديو قصير ف السمارتفون). <b>المرجع / السياق</b>: فترة الامتحانات.</li><li>الوظيفة الغالبة: <b>الإفهامية (conative)</b> (التحفيز على الشراء)، مع وظيفة <b>شعرية</b> (اللعب بكلمة «méritée»، الألوان).</li></ol>
{{fig:jakobson}}
<h3>⚠️ أخطاء شائعة</h3>
<ul><li>الخلط بين القناة (الوسيلة المادية) والسنن (اللغة، الرموز).</li><li>نسيان <b>التشويش</b>: أنترنت بطيء، الصوت مقطوع، إشهارات بزاف حداه.</li><li>الاعتقاد بلي الرسالة عندها غير وظيفة وحدة: كنقلبو على الوظيفة <b>الغالبة</b>.</li><li>إهمال غير اللفظي ف الشفوي (النظرة، الحركات، النبرة).</li></ul>
<h3>❓ أسئلة الدرس</h3>
${Q("شنو هوما وظائف اللغة الستة؟", "التعبيرية (المرسل)، الإفهامية (المتلقي)، المرجعية (السياق)، الانتباهية (القناة)، الميتالغوية (السنن)، الشعرية (الرسالة).")}
${Q("شنو هي الوظيفة الانتباهية (phatique)؟", "اللي كتفتح ولا كتحافظ على الاتصال: «Allô ?»، «Vous m'entendez ?»، «Bonjour à tous».")}
${Q("علاش رجع الصدى (feed-back) مهم؟", "كيخلي المرسل يتأكد بلي الرسالة تفهمات ويعدلها؛ بلا بيه التواصل كيكون ف اتجاه واحد.")}`,
    en: `<h3>📝 Worked exercise: analysing a communication situation</h3>
<div class="ex"><b>Task.</b> A juice brand posts a 15-second Instagram video: a student drinks fresh juice after an exam, captioned “Fraîcheur méritée 🍊 #ExamDone”. Identify Jakobson's 6 elements and the dominant function.</div>
<ol><li><b>Sender</b>: the brand. <b>Receiver</b>: young followers/students.</li><li><b>Message</b>: “our juice rewards your effort”. <b>Code</b>: image, French text, emoji, hashtag.</li><li><b>Channel</b>: Instagram video. <b>Context</b>: exam period.</li><li>Dominant function: <b>conative</b> (push to buy), plus <b>poetic</b> (wordplay, colours).</li></ol>
{{fig:jakobson}}
<h3>⚠️ Common mistakes</h3>
<ul><li>Confusing channel (medium) with code (language, signs).</li><li>Forgetting <b>noise</b>: slow connection, muted sound.</li><li>A message has several functions: look for the <b>dominant</b> one.</li><li>Neglecting non-verbal cues when speaking.</li></ul>
<h3>❓ Review questions</h3>
${Q("Six functions of language?", "Expressive, conative, referential, phatic, metalingual, poetic.")}
${Q("Phatic function?", "Opening or keeping contact: “Hello?”, “Can you hear me?”.")}
${Q("Why does feedback matter?", "It lets the sender check understanding and adjust; without it communication is one-way.")}`,
  },
  fr2: {
    fr: `<h3>📝 Exercice corrigé : rédiger un e-mail professionnel</h3>
<div class="ex"><b>Énoncé.</b> Tu demandes un stage d'observation de 4 semaines au service marketing de « Maroc Digital Shop ». Écris l'e-mail (objet, formule d'appel, 3 paragraphes, formule de politesse).</div>
<div class="ex"><b>Objet :</b> Demande de stage d'observation – Marketing digital (juin 2027)<br><br>Madame, Monsieur,<br><br>Étudiante en première année de DUT Marketing et E-Commerce à l'EST d'Oujda, je me permets de vous adresser ma candidature pour un stage d'observation de quatre semaines au sein de votre service marketing, du 1<sup>er</sup> au 26 juin 2027.<br><br>Votre boutique en ligne, reconnue pour ses campagnes sur les réseaux sociaux, correspond exactement au domaine que je souhaite découvrir. Ma formation m'a déjà permis d'acquérir des bases en marketing, en comptabilité et en outils numériques (Excel, Canva), et je suis motivée, organisée et curieuse.<br><br>Je reste à votre disposition pour un entretien et vous prie de trouver ci-joint mon CV.<br><br>Je vous prie d'agréer, Madame, Monsieur, l'expression de mes salutations distinguées.<br><br>[Prénom NOM] – 06 XX XX XX XX</div>
<h3>⚠️ Erreurs fréquentes</h3>
<ul><li>Un objet vide ou vague (« Stage »).</li><li>Écrire « Bonjour » et tutoyer dans un e-mail formel.</li><li>Une adresse e-mail peu sérieuse (princesse2007@…).</li><li>Oublier la pièce jointe annoncée, ou ne pas relire les fautes.</li><li>« Je vous prie d'agréer mes sincères salutations » mélangé à « Cordialement » : une seule formule suffit.</li></ul>
<h3>❓ Questions de cours</h3>
${Q("Quelles sont les parties d'une lettre administrative ?", "Coordonnées de l'expéditeur, coordonnées du destinataire, lieu et date, objet, formule d'appel, corps (introduction, développement, conclusion), formule de politesse, signature.")}
${Q("Différence entre compte rendu et rapport ?", "Le compte rendu rapporte objectivement ce qui s'est passé ; le rapport analyse une situation et propose des solutions, avec un avis.")}
${Q("Que signifie « CC » et « CCI » ?", "CC : copie visible par tous. CCI : copie cachée, les autres destinataires ne voient pas l'adresse.")}`,
    ar: `<h3>📝 تمرين محلول: كتابة إيميل مهني</h3>
<div class="ex"><b>النص.</b> كتطلبي تدريب ملاحظة ديال 4 أسابيع ف مصلحة التسويق ديال «Maroc Digital Shop». كتبي الإيميل (الموضوع، صيغة المناداة، 3 فقرات، صيغة المجاملة).</div>
<div class="ex" dir="ltr"><b>Objet :</b> Demande de stage d'observation – Marketing digital (juin 2027)<br><br>Madame, Monsieur,<br><br>Étudiante en première année de DUT Marketing et E-Commerce à l'EST d'Oujda, je me permets de vous adresser ma candidature pour un stage d'observation de quatre semaines au sein de votre service marketing, du 1<sup>er</sup> au 26 juin 2027.<br><br>Votre boutique en ligne, reconnue pour ses campagnes sur les réseaux sociaux, correspond exactement au domaine que je souhaite découvrir. Ma formation m'a déjà permis d'acquérir des bases en marketing, en comptabilité et en outils numériques (Excel, Canva), et je suis motivée, organisée et curieuse.<br><br>Je reste à votre disposition pour un entretien et vous prie de trouver ci-joint mon CV.<br><br>Je vous prie d'agréer, Madame, Monsieur, l'expression de mes salutations distinguées.<br><br>[Prénom NOM] – 06 XX XX XX XX</div>
<p>الفقرة 1: شكون نتي وشنو كتطلبي. الفقرة 2: علاش هاد المقاولة وشنو عندك. الفقرة 3: طلب المقابلة والمرفقات.</p>
<h3>⚠️ أخطاء شائعة</h3>
<ul><li>موضوع خاوي ولا غامض («Stage»).</li><li>تكتبي «Bonjour» وتهضري بـ «tu» ف إيميل رسمي.</li><li>عنوان إيميل ماشي جدي (princesse2007@…).</li><li>نسيان المرفق اللي ذكرتي، ولا ما تراجعيش الأخطاء.</li><li>تخلطي «Je vous prie d'agréer…» مع «Cordialement»: صيغة وحدة كافية.</li></ul>
<h3>❓ أسئلة الدرس</h3>
${Q("شنو هوما الأجزاء ديال الرسالة الإدارية؟", "معلومات المرسل، معلومات المرسل إليه، المكان والتاريخ، الموضوع، صيغة المناداة، الجسم (مقدمة، عرض، خاتمة)، صيغة المجاملة، التوقيع.")}
${Q("شنو الفرق بين المحضر (compte rendu) والتقرير (rapport)؟", "المحضر كينقل بموضوعية شنو وقع؛ التقرير كيحلل وضعية وكيقترح حلول، مع رأي.")}
${Q("شنو كيعني «CC» و «CCI»؟", "CC: نسخة كيشوفها الجميع. CCI: نسخة مخفية، المرسل إليهم الآخرين ما كيشوفوش العنوان.")}`,
    en: `<h3>📝 Worked exercise: writing a professional e-mail (in French)</h3>
<div class="ex"><b>Task.</b> Ask “Maroc Digital Shop” for a 4-week observation internship in marketing. Write the e-mail (subject, greeting, 3 paragraphs, closing).</div>
<div class="ex"><b>Objet :</b> Demande de stage d'observation – Marketing digital (juin 2027)<br><br>Madame, Monsieur,<br><br>Étudiante en première année de DUT Marketing et E-Commerce à l'EST d'Oujda, je me permets de vous adresser ma candidature pour un stage d'observation de quatre semaines au sein de votre service marketing, du 1<sup>er</sup> au 26 juin 2027.<br><br>Votre boutique en ligne, reconnue pour ses campagnes sur les réseaux sociaux, correspond exactement au domaine que je souhaite découvrir. Ma formation m'a déjà permis d'acquérir des bases en marketing, en comptabilité et en outils numériques (Excel, Canva), et je suis motivée, organisée et curieuse.<br><br>Je reste à votre disposition pour un entretien et vous prie de trouver ci-joint mon CV.<br><br>Je vous prie d'agréer, Madame, Monsieur, l'expression de mes salutations distinguées.</div>
<p>Paragraph 1: who you are and what you ask. 2: why this company and what you offer. 3: interview request and attachment.</p>
<h3>⚠️ Common mistakes</h3>
<ul><li>Empty or vague subject.</li><li>Using “Bonjour”/“tu” in a formal mail.</li><li>Unprofessional e-mail address.</li><li>Forgetting the attachment; not proofreading.</li><li>Mixing two closings.</li></ul>
<h3>❓ Review questions</h3>
${Q("Parts of a formal letter?", "Sender, recipient, place/date, subject, greeting, body (intro, development, conclusion), closing formula, signature.")}
${Q("Minutes vs report?", "Minutes record objectively what happened; a report analyses and proposes solutions.")}
${Q("CC vs BCC?", "CC is visible to all; BCC hides the address from other recipients.")}`,
  },
  fr3: {
    fr: `<h3>📝 Exercice corrigé : grammaire appliquée</h3>
<div class="ex"><b>Énoncé.</b> Corrige les phrases : 1) « Les offres que nous avons reçu sont intéressant. » 2) « Si j'aurais le temps, je viendrai. » 3) « Il faut que vous venez demain. » 4) « Ces clients, je les ai appelé hier. » 5) « Quand il a fini son stage, il a trouvé un travail » → mettre au futur.</div>
<ol><li>« Les offres que nous avons <b>reçues</b> sont <b>intéressantes</b>. » (COD « que » = les offres, placé avant → accord du participe ; adjectif accordé.)</li>
<li>« Si j'<b>avais</b> le temps, je <b>viendrais</b>. » (si + imparfait → conditionnel ; jamais de conditionnel après « si ».)</li>
<li>« Il faut que vous <b>veniez</b> demain. » (il faut que + subjonctif.)</li>
<li>« Ces clients, je les ai <b>appelés</b> hier. » (COD « les » placé avant.)</li>
<li>« Quand il <b>aura fini</b> son stage, il <b>trouvera</b> un travail. » (futur antérieur pour l'action antérieure.)</li></ol>
{{fig:tenses}}
<h3>⚠️ Erreurs fréquentes</h3>
<ul><li>« Si j'aurais » : toujours <b>si + imparfait</b>.</li><li>Accorder le participe avec avoir quand le COD est <b>après</b> : « nous avons reçu les offres » (pas d'accord).</li><li>Confondre « a / à », « et / est », « ces / ses », « ou / où ».</li><li>« Malgré que » : préférer « bien que » + subjonctif.</li></ul>
<h3>❓ Questions de cours</h3>
${Q("Quand accorde-t-on le participe passé avec être ?", "Toujours avec le sujet : « Elles sont arrivées ».")}
${Q("Quels connecteurs pour exprimer la cause et la conséquence ?", "Cause : car, parce que, puisque, en raison de, grâce à. Conséquence : donc, ainsi, c'est pourquoi, par conséquent, si bien que.")}
${Q("Quels mots déclenchent le subjonctif ?", "Les expressions de volonté, d'obligation, de doute, de sentiment et certaines conjonctions : il faut que, je veux que, bien que, pour que, avant que, à condition que.")}`,
    ar: `<h3>📝 تمرين محلول: القواعد التطبيقية</h3>
<div class="ex"><b>النص.</b> صححي الجمل: 1) «Les offres que nous avons reçu sont intéressant.» 2) «Si j'aurais le temps, je viendrai.» 3) «Il faut que vous venez demain.» 4) «Ces clients, je les ai appelé hier.» 5) «Quand il a fini son stage, il a trouvé un travail» ← حوليها للمستقبل.</div>
<ol><li>«Les offres que nous avons <b>reçues</b> sont <b>intéressantes</b>.» (المفعول به «que» = les offres، جا قبل ← المطابقة ف اسم المفعول؛ والصفة كتطابق.)</li>
<li>«Si j'<b>avais</b> le temps, je <b>viendrais</b>.» (si + imparfait ← conditionnel؛ عمرنا ما كنديرو conditionnel من بعد «si».)</li>
<li>«Il faut que vous <b>veniez</b> demain.» (il faut que + subjonctif.)</li>
<li>«Ces clients, je les ai <b>appelés</b> hier.» (المفعول به «les» جا قبل.)</li>
<li>«Quand il <b>aura fini</b> son stage, il <b>trouvera</b> un travail.» (futur antérieur للفعل اللي وقع قبل.)</li></ol>
{{fig:tenses}}
<h3>⚠️ أخطاء شائعة</h3>
<ul><li>«Si j'aurais»: ديما <b>si + imparfait</b>.</li><li>المطابقة ف اسم المفعول مع avoir ملي المفعول به <b>من بعد</b>: «nous avons reçu les offres» (بلا مطابقة).</li><li>الخلط بين «a / à»، «et / est»، «ces / ses»، «ou / où».</li><li>«Malgré que»: الأحسن «bien que» + subjonctif.</li></ul>
<h3>❓ أسئلة الدرس</h3>
${Q("إمتى كنطابقو اسم المفعول مع être؟", "ديما مع الفاعل: «Elles sont arrivées».")}
${Q("أشمن روابط للتعبير على السبب والنتيجة؟", "السبب: car، parce que، puisque، en raison de، grâce à. النتيجة: donc، ainsi، c'est pourquoi، par conséquent، si bien que.")}
${Q("أشمن كلمات كتجيب subjonctif؟", "عبارات الإرادة، الوجوب، الشك، الإحساس وبعض أدوات الربط: il faut que، je veux que، bien que، pour que، avant que، à condition que.")}`,
    en: `<h3>📝 Worked exercise: applied French grammar</h3>
<div class="ex"><b>Task.</b> Correct: 1) “Les offres que nous avons reçu sont intéressant.” 2) “Si j'aurais le temps, je viendrai.” 3) “Il faut que vous venez demain.” 4) “Ces clients, je les ai appelé hier.” 5) Put “Quand il a fini son stage, il a trouvé un travail” into the future.</div>
<ol><li>“…avons <b>reçues</b> sont <b>intéressantes</b>.” (object before the verb → agreement.)</li><li>“Si j'<b>avais</b>…, je <b>viendrais</b>.” (si + imperfect → conditional.)</li><li>“…que vous <b>veniez</b>.” (il faut que + subjunctive.)</li><li>“…je les ai <b>appelés</b>.”</li><li>“Quand il <b>aura fini</b>…, il <b>trouvera</b>…” (future perfect for the earlier action.)</li></ol>
{{fig:tenses}}
<h3>⚠️ Common mistakes</h3>
<ul><li>Never conditional after “si”.</li><li>No agreement with avoir when the object comes <b>after</b>.</li><li>Homophones a/à, et/est, ces/ses, ou/où.</li><li>Prefer “bien que” to “malgré que”.</li></ul>
<h3>❓ Review questions</h3>
${Q("Agreement with être?", "Always with the subject: “Elles sont arrivées”.")}
${Q("Cause and consequence connectors?", "Cause: car, parce que, puisque, grâce à. Consequence: donc, ainsi, c'est pourquoi, par conséquent.")}
${Q("What triggers the subjunctive?", "Will, obligation, doubt, feeling and conjunctions like il faut que, bien que, pour que, avant que.")}`,
  },
  en1: {
    fr: `<h3>📝 Exercice corrigé : se présenter et parler de ses études</h3>
<div class="ex"><b>Énoncé.</b> Écris une présentation de 6 phrases en anglais pour un entretien de stage, puis corrige ces erreurs : « I have 19 years. » / « I am student in marketing. » / « She work in a bank. »</div>
<div class="ex">“Good morning. My name is [Name] and I'm 19 years old. I'm a first-year student in Marketing and E-commerce at the EST in Oujda. I'm interested in social media marketing and online sales. In my free time, I design posts on Canva and I read about digital trends. I'd like to do an internship in your company to learn how a real marketing team works.”</div>
<ol><li>« I <b>am</b> 19 (years old). » — on utilise <b>be</b> pour l'âge.</li><li>« I am <b>a</b> student… » — article <b>a/an</b> devant un métier ou un statut.</li><li>« She <b>works</b>… » — -s à la 3<sup>e</sup> personne du singulier au présent simple.</li></ol>
<h3>⚠️ Erreurs fréquentes</h3>
<ul><li>Oublier le <b>-s</b> à he/she/it.</li><li>Traduire mot à mot du français (« I have 19 years », « I am agree » → « I agree »).</li><li>Utiliser le présent continu pour une habitude (« I am going to school every day » → « I go »).</li><li>Mettre une majuscule aux jours et mois ? Oui, en anglais : Monday, June.</li></ul>
<h3>❓ Questions de cours</h3>
${Q("Quand utilise-t-on le présent continu ?", "Pour une action en cours au moment où l'on parle (I'm studying now) ou un projet proche déjà organisé (I'm meeting the manager tomorrow).")}
${Q("Comment poser une question au présent simple ?", "Avec do/does + sujet + verbe base : Do you work? Does she live in Oujda? Where do you study?")}
${Q("Quelles questions sont fréquentes en entretien ?", "Tell me about yourself. Why do you want this internship? What are your strengths and weaknesses? Where do you see yourself in five years?")}`,
    ar: `<h3>📝 تمرين محلول: التعريف بالنفس والهضرة على القراية</h3>
<div class="ex"><b>النص.</b> كتبي تقديم ديال 6 جمل بالإنجليزية لمقابلة تدريب، من بعد صححي هاد الأخطاء: «I have 19 years.» / «I am student in marketing.» / «She work in a bank.»</div>
<div class="ex" dir="ltr">“Good morning. My name is [Name] and I'm 19 years old. I'm a first-year student in Marketing and E-commerce at the EST in Oujda. I'm interested in social media marketing and online sales. In my free time, I design posts on Canva and I read about digital trends. I'd like to do an internship in your company to learn how a real marketing team works.”</div>
<ol><li>«I <b>am</b> 19 (years old).» — كنستعملو <b>be</b> للعمر.</li><li>«I am <b>a</b> student…» — أداة <b>a/an</b> قبل المهنة ولا الصفة.</li><li>«She <b>works</b>…» — ‎-s مع الشخص الثالث المفرد ف المضارع البسيط.</li></ol>
<h3>⚠️ أخطاء شائعة</h3>
<ul><li>نسيان <b>‎-s</b> مع he/she/it.</li><li>الترجمة حرف بحرف من الفرنسية («I have 19 years»، «I am agree» ← «I agree»).</li><li>استعمال المضارع المستمر للعادة («I am going to school every day» ← «I go»).</li><li>الحرف الكبير ف الأيام والشهور؟ إيه، ف الإنجليزية: Monday، June.</li></ul>
<h3>❓ أسئلة الدرس</h3>
${Q("إمتى كنستعملو المضارع المستمر؟", "لفعل كيوقع دابا ف لحظة الهضرة (I'm studying now) ولا لمشروع قريب منظم (I'm meeting the manager tomorrow).")}
${Q("كيفاش نطرحو سؤال ف المضارع البسيط؟", "بـ do/does + الفاعل + الفعل ف الأصل: Do you work? Does she live in Oujda? Where do you study?")}
${Q("شنو هوما الأسئلة الكثيرة ف المقابلة؟", "Tell me about yourself. Why do you want this internship? What are your strengths and weaknesses? Where do you see yourself in five years?")}`,
    en: `<h3>📝 Worked exercise: introducing yourself</h3>
<div class="ex"><b>Task.</b> Write a 6-sentence self-introduction for an internship interview, then correct: “I have 19 years.” / “I am student in marketing.” / “She work in a bank.”</div>
<div class="ex">“Good morning. My name is [Name] and I'm 19 years old. I'm a first-year student in Marketing and E-commerce at the EST in Oujda. I'm interested in social media marketing and online sales. In my free time, I design posts on Canva and I read about digital trends. I'd like to do an internship in your company to learn how a real marketing team works.”</div>
<ol><li>“I <b>am</b> 19.” — age uses <b>be</b>.</li><li>“I am <b>a</b> student.” — article before a job/status.</li><li>“She <b>works</b>.” — third-person -s.</li></ol>
<h3>⚠️ Common mistakes</h3>
<ul><li>Dropping third-person <b>-s</b>.</li><li>Word-for-word translation (“I am agree” → “I agree”).</li><li>Continuous for habits (“I go every day”).</li><li>Days and months take capitals.</li></ul>
<h3>❓ Review questions</h3>
${Q("When is the present continuous used?", "For actions happening now or arranged near-future plans.")}
${Q("Present simple questions?", "Do/does + subject + base verb: Do you work? Where does she live?")}
${Q("Common interview questions?", "Tell me about yourself; Why this internship? Strengths and weaknesses? Where in five years?")}`,
  },
  en2: {
    fr: `<h3>📝 Exercice corrigé : temps du passé et vocabulaire business</h3>
<div class="ex"><b>Énoncé.</b> Mets les verbes au bon temps : 1) Last year, our company (launch) a new website. 2) We (already / sell) 2,000 products this month. 3) While I (check) the orders, the customer (call). 4) Sales (increase) by 15% since January.</div>
<ol><li><b>launched</b> — prétérit (date passée précise : last year).</li><li>We <b>have already sold</b> — present perfect (période non terminée : this month).</li><li>While I <b>was checking</b>…, the customer <b>called</b> — past continuous + prétérit.</li><li>Sales <b>have increased</b> — present perfect avec <b>since</b>.</li></ol>
<p><b>Vocabulaire de graphique</b> : rise / increase (monter), fall / drop / decrease (baisser), peak (atteindre un pic), remain stable (rester stable), slightly (légèrement), sharply (fortement). Ex. : “Online sales rose sharply in December and then fell slightly in January.”</p>
<h3>⚠️ Erreurs fréquentes</h3>
<ul><li>Present perfect avec une date précise : « I have visited Paris in 2024 » → « I <b>visited</b> ».</li><li>Oublier les verbes irréguliers : buy → bought, sell → sold, make → made.</li><li>Confondre <b>for</b> (durée : for 3 years) et <b>since</b> (point de départ : since 2023).</li><li>Prononcer le -ed comme une syllabe partout (worked = « workt »).</li></ul>
<h3>❓ Questions de cours</h3>
${Q("Comment forme-t-on le present perfect ?", "have/has + participe passé : I have finished, she has sent.")}
${Q("Différence entre customer et client ?", "Customer : personne qui achète un produit (magasin, site). Client : personne qui paie un service professionnel (avocat, agence, banque).")}
${Q("Que signifient revenue, profit et turnover ?", "Revenue : recettes / chiffre d'affaires. Profit : bénéfice. Turnover : chiffre d'affaires (britannique) ou rotation du personnel selon le contexte.")}`,
    ar: `<h3>📝 تمرين محلول: أزمنة الماضي ومفردات البيزنس</h3>
<div class="ex"><b>النص.</b> حطي الأفعال ف الزمن الصحيح: 1) Last year, our company (launch) a new website. 2) We (already / sell) 2,000 products this month. 3) While I (check) the orders, the customer (call). 4) Sales (increase) by 15% since January.</div>
<ol><li><b>launched</b> — الماضي البسيط (تاريخ ماضي محدد: last year).</li><li>We <b>have already sold</b> — present perfect (فترة ما سالاتش: this month).</li><li>While I <b>was checking</b>…, the customer <b>called</b> — الماضي المستمر + الماضي البسيط.</li><li>Sales <b>have increased</b> — present perfect مع <b>since</b>.</li></ol>
<p><b>مفردات المبيان</b>: rise / increase (طلع)، fall / drop / decrease (نقص)، peak (وصل للقمة)، remain stable (بقا مستقر)، slightly (شوية)، sharply (بزاف). مثال: “Online sales rose sharply in December and then fell slightly in January.”</p>
<h3>⚠️ أخطاء شائعة</h3>
<ul><li>Present perfect مع تاريخ محدد: «I have visited Paris in 2024» ← «I <b>visited</b>».</li><li>نسيان الأفعال الشاذة: buy ← bought، sell ← sold، make ← made.</li><li>الخلط بين <b>for</b> (المدة: for 3 years) و <b>since</b> (نقطة البداية: since 2023).</li><li>نطق ‎-ed كمقطع ف كل حالة (worked = «workt»).</li></ul>
<h3>❓ أسئلة الدرس</h3>
${Q("كيفاش كنكونو present perfect؟", "have/has + اسم المفعول: I have finished، she has sent.")}
${Q("شنو الفرق بين customer و client؟", "Customer: اللي كيشري منتوج (محل، موقع). Client: اللي كيخلص خدمة مهنية (محامي، وكالة، بنك).")}
${Q("شنو معنى revenue و profit و turnover؟", "Revenue: المداخيل / رقم المعاملات. Profit: الربح. Turnover: رقم المعاملات (بريطاني) ولا دوران الموظفين حسب السياق.")}`,
    en: `<h3>📝 Worked exercise: past tenses and business vocabulary</h3>
<div class="ex"><b>Task.</b> Use the right tense: 1) Last year, our company (launch) a new website. 2) We (already / sell) 2,000 products this month. 3) While I (check) the orders, the customer (call). 4) Sales (increase) by 15% since January.</div>
<ol><li><b>launched</b> — past simple (finished time).</li><li><b>have already sold</b> — present perfect (unfinished period).</li><li><b>was checking</b> / <b>called</b> — past continuous + past simple.</li><li><b>have increased</b> — present perfect with since.</li></ol>
<p><b>Graph vocabulary</b>: rise, increase, fall, drop, peak, remain stable, slightly, sharply.</p>
<h3>⚠️ Common mistakes</h3>
<ul><li>Present perfect with a finished date (“in 2024” → past simple).</li><li>Irregular verbs: bought, sold, made.</li><li><b>for</b> = duration, <b>since</b> = starting point.</li><li>Pronouncing every -ed as an extra syllable.</li></ul>
<h3>❓ Review questions</h3>
${Q("How is the present perfect formed?", "have/has + past participle.")}
${Q("Customer vs client?", "Customer buys products; client pays for professional services.")}
${Q("Revenue, profit, turnover?", "Revenue = income from sales; profit = what remains after costs; turnover = sales (UK) or staff turnover.")}`,
  },
  en3: {
    fr: `<h3>📝 Exercice corrigé : e-mail de réclamation et réponse</h3>
<div class="ex"><b>Énoncé.</b> Un client écrit : « I ordered a blue bag (order #4521) but I received a black one. » Rédige une réponse professionnelle en anglais.</div>
<div class="ex">Subject: Your order #4521<br><br>Dear Mr Smith,<br><br>Thank you for contacting us, and please accept our apologies for sending you the wrong colour.<br><br>We will send you the blue bag free of charge within 3 working days. You can keep the black bag or return it with the prepaid label attached to this e-mail.<br><br>If you have any further questions, please do not hesitate to contact us.<br><br>Kind regards,<br>[Name]<br>Customer Service – Salma Shop</div>
<p><b>Structure</b> : remercier → s'excuser → solution concrète + délai → proposer de l'aide → formule finale.</p>
<h3>⚠️ Erreurs fréquentes</h3>
<ul><li>« Dear Sir » quand on connaît le nom : utiliser « Dear Mr / Ms + nom ».</li><li>Fermer par « Yours sincerely » après « Dear Sir/Madam » ? Non : <b>Yours faithfully</b> (nom inconnu) / <b>Yours sincerely</b> (nom connu) en anglais britannique ; « Kind regards » est neutre.</li><li>Ton trop direct : « You must send » → « Could you please send…? ».</li><li>Contractions dans un e-mail très formel (don't → do not).</li></ul>
<h3>❓ Questions de cours</h3>
${Q("Comment demander poliment en anglais ?", "Could you…? Would you mind + -ing? I would be grateful if you could… Please find attached…")}
${Q("Que signifie ASAP, FYI, PFA ?", "As soon as possible (dès que possible), For your information (pour information), Please find attached (veuillez trouver ci-joint).")}
${Q("Les 4 P du marketing en anglais ?", "Product, Price, Place (distribution), Promotion (communication).")}`,
    ar: `<h3>📝 تمرين محلول: إيميل الشكاية والجواب</h3>
<div class="ex"><b>النص.</b> زبون كتب: «I ordered a blue bag (order #4521) but I received a black one.» كتبي جواب مهني بالإنجليزية.</div>
<div class="ex" dir="ltr">Subject: Your order #4521<br><br>Dear Mr Smith,<br><br>Thank you for contacting us, and please accept our apologies for sending you the wrong colour.<br><br>We will send you the blue bag free of charge within 3 working days. You can keep the black bag or return it with the prepaid label attached to this e-mail.<br><br>If you have any further questions, please do not hesitate to contact us.<br><br>Kind regards,<br>[Name]<br>Customer Service – Salma Shop</div>
<p><b>البنية</b>: الشكر ← الاعتذار ← حل ملموس + أجل ← اقتراح المساعدة ← صيغة الختام.</p>
<h3>⚠️ أخطاء شائعة</h3>
<ul><li>«Dear Sir» ملي كنعرفو السمية: استعملي «Dear Mr / Ms + السمية».</li><li>الختام: <b>Yours faithfully</b> (السمية مجهولة) / <b>Yours sincerely</b> (السمية معروفة) ف الإنجليزية البريطانية؛ «Kind regards» محايدة.</li><li>نبرة مباشرة بزاف: «You must send» ← «Could you please send…?».</li><li>الاختصارات ف إيميل رسمي بزاف (don't ← do not).</li></ul>
<h3>❓ أسئلة الدرس</h3>
${Q("كيفاش نطلبو بأدب بالإنجليزية؟", "Could you…? Would you mind + -ing? I would be grateful if you could… Please find attached…")}
${Q("شنو معنى ASAP و FYI و PFA؟", "As soon as possible (ف أقرب وقت)، For your information (للعلم)، Please find attached (تجدون ف المرفق).")}
${Q("العناصر 4 ديال التسويق بالإنجليزية؟", "Product (المنتوج)، Price (الثمن)، Place (التوزيع)، Promotion (التواصل).")}`,
    en: `<h3>📝 Worked exercise: complaint reply</h3>
<div class="ex"><b>Task.</b> A customer writes: “I ordered a blue bag (order #4521) but I received a black one.” Write a professional reply.</div>
<div class="ex">Subject: Your order #4521<br><br>Dear Mr Smith,<br><br>Thank you for contacting us, and please accept our apologies for sending you the wrong colour.<br><br>We will send you the blue bag free of charge within 3 working days. You can keep the black bag or return it with the prepaid label attached to this e-mail.<br><br>If you have any further questions, please do not hesitate to contact us.<br><br>Kind regards,<br>[Name]<br>Customer Service – Salma Shop</div>
<p><b>Structure</b>: thank → apologise → concrete solution + deadline → offer help → closing.</p>
<h3>⚠️ Common mistakes</h3>
<ul><li>“Dear Sir” when you know the name.</li><li>Yours faithfully (name unknown) vs Yours sincerely (name known); Kind regards is neutral.</li><li>Too direct: “You must…” → “Could you please…?”.</li><li>Contractions in very formal mail.</li></ul>
<h3>❓ Review questions</h3>
${Q("Polite requests?", "Could you…? Would you mind + -ing? I would be grateful if you could…")}
${Q("ASAP, FYI, PFA?", "As soon as possible; For your information; Please find attached.")}
${Q("The 4 Ps?", "Product, Price, Place, Promotion.")}`,
  },
  met1: {
    fr: `<h3>📝 Exercice corrigé : organiser sa semaine</h3>
<div class="ex"><b>Énoncé.</b> Tu as un contrôle de comptabilité jeudi, un exposé d'anglais à rendre lundi, et tu travailles le samedi après-midi. Classe ces tâches dans la matrice d'Eisenhower et propose un planning pour mardi soir.</div>
<ol><li><b>Urgent + important</b> : réviser la comptabilité (contrôle jeudi) → à faire en premier.</li><li><b>Important, pas urgent</b> : préparer l'exposé d'anglais (lundi) → planifier dès maintenant.</li><li><b>Urgent, pas important</b> : répondre aux messages du groupe → regrouper en 10 min.</li><li><b>Ni l'un ni l'autre</b> : scroller sur TikTok → limiter.</li></ol>
<p><b>Mardi soir</b> : 18h30–19h45 : 3 Pomodoros de comptabilité (journal + TVA) ; 19h45–20h : pause ; 20h–20h50 : 2 Pomodoros pour le plan de l'exposé ; 20h50–21h : messages ; avant de dormir : 10 min de relecture de fiches (répétition espacée).</p>
{{fig:eisenhower}}
<h3>⚠️ Erreurs fréquentes</h3>
<ul><li>Relire passivement le cours au lieu de <b>se tester</b> (exercices, questions).</li><li>Tout réviser la veille : l'apprentissage espacé est beaucoup plus efficace.</li><li>Travailler avec le téléphone à côté : chaque notification casse la concentration.</li><li>Négliger le sommeil : la mémoire se consolide pendant la nuit.</li></ul>
<h3>❓ Questions de cours</h3>
${Q("Qu'est-ce que la répétition espacée ?", "Revoir une notion à des intervalles de plus en plus longs (1 jour, 3 jours, 1 semaine…) pour la fixer dans la mémoire à long terme. C'est le principe de la rubrique « Révision » de cette application.")}
${Q("Qu'est-ce que la méthode Pomodoro ?", "Travailler 25 minutes sans interruption, puis faire une pause de 5 minutes ; après 4 cycles, une pause longue de 15 à 30 minutes.")}
${Q("Comment fixer un bon objectif d'étude ?", "Avec la méthode SMART : par exemple « Faire 10 exercices de TVA et corriger mes erreurs avant mercredi 20h ».")}`,
    ar: `<h3>📝 تمرين محلول: تنظيم الأسبوع</h3>
<div class="ex"><b>النص.</b> عندك فرض ديال المحاسبة نهار الخميس، عرض ديال الإنجليزية خاصك تسلميه نهار الاثنين، وكتخدمي السبت فالعشية. صنفي هاد المهام ف مصفوفة أيزنهاور واقترحي برنامج لليلة الثلاثاء.</div>
<ol><li><b>مستعجل + مهم</b>: مراجعة المحاسبة (الفرض الخميس) ← أول حاجة.</li><li><b>مهم، ماشي مستعجل</b>: تحضير العرض ديال الإنجليزية (الاثنين) ← خططي ليه من دابا.</li><li><b>مستعجل، ماشي مهم</b>: الجواب على ميساجات المجموعة ← جمعيهم ف 10 دقايق.</li><li><b>لا هادا لا هادا</b>: التقلاب ف تيك توك ← نقصي منو.</li></ol>
<p><b>ليلة الثلاثاء</b>: 18:30–19:45: 3 بومودورو ديال المحاسبة (اليومية + TVA)؛ 19:45–20:00: استراحة؛ 20:00–20:50: 2 بومودورو لتصميم العرض؛ 20:50–21:00: الميساجات؛ قبل النعاس: 10 دقايق مراجعة البطاقات (التكرار المتباعد).</p>
{{fig:eisenhower}}
<h3>⚠️ أخطاء شائعة</h3>
<ul><li>قراية الدرس بطريقة سلبية عوض <b>اختبار راسك</b> (تمارين، أسئلة).</li><li>مراجعة كلشي ليلة الامتحان: التعلم المتباعد أنجع بزاف.</li><li>القراية والتليفون حداك: كل إشعار كيقطع التركيز.</li><li>إهمال النعاس: الذاكرة كتثبت ف الليل.</li></ul>
<h3>❓ أسئلة الدرس</h3>
${Q("شنو هو التكرار المتباعد؟", "مراجعة مفهوم ف فترات كتطول (نهار، 3 أيام، أسبوع…) باش يتثبت ف الذاكرة الطويلة. هادا هو المبدأ ديال قسم «المراجعة» ف هاد التطبيق.")}
${Q("شنو هي طريقة بومودورو؟", "تخدمي 25 دقيقة بلا توقف، من بعد استراحة 5 دقايق؛ من بعد 4 دورات، استراحة طويلة من 15 حتى 30 دقيقة.")}
${Q("كيفاش نحددو هدف مزيان للقراية؟", "بطريقة SMART: مثلا «ندير 10 تمارين ديال TVA ونصحح الأخطاء ديالي قبل الأربعاء 20:00».")}`,
    en: `<h3>📝 Worked exercise: organising your week</h3>
<div class="ex"><b>Task.</b> You have an accounting test Thursday, an English presentation due Monday, and work Saturday afternoon. Sort tasks in the Eisenhower matrix and plan Tuesday evening.</div>
<ol><li><b>Urgent + important</b>: revise accounting → first.</li><li><b>Important, not urgent</b>: prepare the presentation → schedule now.</li><li><b>Urgent, not important</b>: group messages → batch in 10 min.</li><li><b>Neither</b>: scrolling → limit.</li></ol>
<p><b>Tuesday</b>: 18:30–19:45 three Pomodoros of accounting; break; 20:00–20:50 two Pomodoros on the presentation outline; messages; 10 min of flashcards before bed.</p>
{{fig:eisenhower}}
<h3>⚠️ Common mistakes</h3>
<ul><li>Passive re-reading instead of <b>self-testing</b>.</li><li>Cramming the night before.</li><li>Phone next to you.</li><li>Neglecting sleep.</li></ul>
<h3>❓ Review questions</h3>
${Q("Spaced repetition?", "Reviewing at growing intervals (1 day, 3 days, 1 week…) to fix long-term memory — the principle of this app's Review section.")}
${Q("Pomodoro?", "25 minutes of focus, 5-minute break; a long break after 4 cycles.")}
${Q("A good study goal?", "SMART: “Do 10 VAT exercises and correct my mistakes before Wednesday 8 pm.”")}`,
  },
  met2: {
    fr: `<h3>📝 Exercice corrigé : prendre des notes et faire une fiche</h3>
<div class="ex"><b>Énoncé.</b> Le professeur dit : « L'amortissement constate la perte de valeur d'une immobilisation. Il existe deux modes principaux : le linéaire, où l'annuité est constante, et le dégressif, où elle diminue. Le dégressif utilise un coefficient de 1,5, 2 ou 3 selon la durée. » Prends des notes abrégées puis fais une fiche Cornell.</div>
<p><b>Notes abrégées</b> : Amort. = ↘ valeur immo. 2 modes : linéaire (annuité cste) / dégressif (annuité ↘). Coef. dégr. : 1,5 (3–4 ans), 2 (5–6), 3 (&gt;6).</p>
<p><b>Fiche Cornell</b> — Colonne gauche (questions) : Qu'est-ce que l'amortissement ? Quels modes ? Quels coefficients ? — Colonne droite : les notes ci-dessus. — Bas de page (résumé) : « L'amortissement répartit le coût d'une immobilisation ; linéaire = constant, dégressif = décroissant avec un coefficient. »</p>
{{fig:cornell}}
<h3>⚠️ Erreurs fréquentes</h3>
<ul><li>Vouloir tout écrire mot à mot : on perd le fil.</li><li>Inventer des abréviations qu'on ne comprend plus le lendemain : garder une légende.</li><li>Ne jamais relire ses notes : il faut les reprendre le jour même.</li><li>Recopier le cours en plus joli au lieu de le <b>reformuler</b>.</li></ul>
<h3>❓ Questions de cours</h3>
${Q("Quelles abréviations sont utiles ?", "↗ augmente, ↘ diminue, → entraîne, = égal / signifie, ≠ différent, cf. voir, ex. exemple, pb problème, qqch quelque chose, ds dans, tjs toujours.")}
${Q("Qu'est-ce qu'une carte mentale ?", "Un schéma avec le thème au centre et des branches pour les idées principales, puis des sous-branches. Elle aide à voir les liens et à mémoriser.")}
${Q("Comment rendre une fiche efficace ?", "Une fiche par notion, des titres clairs, des mots-clés, des formules encadrées, un exemple, et des questions au dos pour s'auto-tester.")}`,
    ar: `<h3>📝 تمرين محلول: أخذ النقط وصاوبي بطاقة</h3>
<div class="ex"><b>النص.</b> الأستاذ قال: «L'amortissement constate la perte de valeur d'une immobilisation. Il existe deux modes principaux : le linéaire, où l'annuité est constante, et le dégressif, où elle diminue. Le dégressif utilise un coefficient de 1,5, 2 ou 3 selon la durée.» خدي نقط مختصرة من بعد صاوبي بطاقة كورنيل.</div>
<p><b>النقط المختصرة</b>: Amort. = ↘ valeur immo. 2 modes: linéaire (annuité cste) / dégressif (annuité ↘). Coef. dégr.: 1,5 (3–4 ans)، 2 (5–6)، 3 (&gt;6).</p>
<p><b>بطاقة كورنيل</b> — العمود اليسار (الأسئلة): شنو هو الإهتلاك؟ أشمن طرق؟ أشمن معاملات؟ — العمود اليمين: النقط اللي فوق. — لتحت (الخلاصة): «الإهتلاك كيوزع تكلفة الأصل الثابت؛ الثابت = قسط ثابت، المتناقص = كينقص بمعامل.»</p>
{{fig:cornell}}
<h3>⚠️ أخطاء شائعة</h3>
<ul><li>تبغي تكتبي كلشي كلمة بكلمة: كيضيع منك الخيط.</li><li>تخترعي اختصارات ما كتفهميهمش غدا: خلي مفتاح ليهم.</li><li>ما تعاوديش تقراي النقط: خاصك ترجعي ليهم نفس النهار.</li><li>تنقلي الدرس بخط زوين عوض ما <b>تعاودي صياغتو</b>.</li></ul>
<h3>❓ أسئلة الدرس</h3>
${Q("شنو هوما الاختصارات المفيدة؟", "↗ كيزيد، ↘ كينقص، → كيأدي لـ، = يساوي / معناه، ≠ مختلف، cf. شوف، ex. مثال، pb مشكل، qqch شي حاجة، ds ف، tjs ديما.")}
${Q("شنو هي الخريطة الذهنية؟", "رسم فيه الموضوع ف الوسط وفروع للأفكار الرئيسية، من بعد فروع صغار. كتعاون تشوفي العلاقات وتحفظي.")}
${Q("كيفاش تكون البطاقة فعالة؟", "بطاقة لكل مفهوم، عناوين واضحة، كلمات مفاتيح، صيغ ف إطار، مثال، وأسئلة ف الظهر باش تختبري راسك.")}`,
    en: `<h3>📝 Worked exercise: note-taking and a study card</h3>
<div class="ex"><b>Task.</b> The teacher says (in French) that depreciation records loss of value, with straight-line (constant charge) and declining (falling charge, coefficient 1.5, 2 or 3). Take short notes, then make a Cornell card.</div>
<p><b>Notes</b>: Depr. = ↘ asset value. 2 methods: straight-line (const.) / declining (↘). Coef.: 1.5 (3–4 y), 2 (5–6), 3 (&gt;6).</p>
<p><b>Cornell card</b> — left: questions; right: notes; bottom: one-sentence summary.</p>
{{fig:cornell}}
<h3>⚠️ Common mistakes</h3>
<ul><li>Writing everything word for word.</li><li>Abbreviations you can't decode later.</li><li>Never reviewing notes the same day.</li><li>Copying neatly instead of <b>rephrasing</b>.</li></ul>
<h3>❓ Review questions</h3>
${Q("Useful abbreviations?", "↗ rises, ↘ falls, → leads to, = means, ≠ different, e.g., pb problem.")}
${Q("What is a mind map?", "A diagram with the topic in the centre and branches for main and sub-ideas.")}
${Q("What makes a good card?", "One idea per card, clear titles, keywords, boxed formulas, an example, and self-test questions on the back.")}`,
  },
  met3: {
    fr: `<h3>📝 Exercice corrigé : préparer un exposé</h3>
<div class="ex"><b>Énoncé.</b> Sujet : « Le paiement mobile au Maroc ». Exposé de 10 minutes en binôme. Propose un plan, la répartition du temps et 3 conseils pour les diapositives.</div>
<ol><li><b>Introduction (1 min 30)</b> : accroche (« Qui a déjà payé avec son téléphone ? »), définition, problématique : « Le paiement mobile peut-il remplacer l'argent liquide au Maroc ? », annonce du plan.</li>
<li><b>I. État des lieux (3 min)</b> : solutions existantes, chiffres d'organismes officiels (Bank Al-Maghrib), usages.</li>
<li><b>II. Freins et opportunités (3 min 30)</b> : habitude du cash, confiance, couverture réseau / inclusion financière, e-commerce, jeunes.</li>
<li><b>Conclusion (1 min)</b> + <b>questions (1 min)</b> : réponse à la problématique, ouverture.</li></ol>
<p><b>Diapositives</b> : une idée par diapo, 6 lignes maximum ; un graphique plutôt qu'un tableau de chiffres ; citer les sources sur la dernière diapo.</p>
{{fig:rapport}}
<h3>⚠️ Erreurs fréquentes</h3>
<ul><li>Lire ses diapositives en tournant le dos au public.</li><li>Dépasser le temps : répéter avec un chronomètre.</li><li>Une problématique qui est juste le titre avec un point d'interrogation.</li><li>Plan déséquilibré (une partie de 5 min, l'autre de 1 min).</li></ul>
<h3>❓ Questions de cours</h3>
${Q("Qu'est-ce qu'une problématique ?", "La question centrale à laquelle le travail répond ; elle montre un enjeu ou une tension et guide le plan.")}
${Q("Comment citer une source ?", "Auteur ou organisme, titre, date, et lien ou éditeur. Ex. : Bank Al-Maghrib, Rapport annuel, 2025, bkam.ma.")}
${Q("Que contient la page de garde d'un rapport ?", "Le nom de l'établissement, le titre, le nom de l'étudiant(e), la filière, l'encadrant, et l'année universitaire.")}`,
    ar: `<h3>📝 تمرين محلول: تحضير عرض</h3>
<div class="ex"><b>النص.</b> الموضوع: «الأداء بالهاتف ف المغرب». عرض ديال 10 دقايق بجوج. اقترحي تصميم، توزيع الوقت و3 نصائح للشرائح.</div>
<ol><li><b>المقدمة (1 دقيقة و30)</b>: جملة جذابة («شكون خلص شي مرة بالتليفون؟»)، التعريف، الإشكالية: «واش الأداء بالهاتف يقدر يعوض الفلوس الكاش ف المغرب؟»، الإعلان على التصميم.</li>
<li><b>I. الوضعية الحالية (3 دقايق)</b>: الحلول الموجودة، أرقام من مؤسسات رسمية (بنك المغرب)، الاستعمالات.</li>
<li><b>II. العوائق والفرص (3 دقايق و30)</b>: عادة الكاش، الثقة، تغطية الشبكة / الشمول المالي، التجارة الإلكترونية، الشباب.</li>
<li><b>الخاتمة (1 دقيقة)</b> + <b>الأسئلة (1 دقيقة)</b>: الجواب على الإشكالية، الانفتاح.</li></ol>
<p><b>الشرائح</b>: فكرة وحدة ف كل شريحة، 6 سطور ماكسيموم؛ مبيان عوض جدول ديال الأرقام؛ ذكر المصادر ف الشريحة الأخيرة.</p>
{{fig:rapport}}
<h3>⚠️ أخطاء شائعة</h3>
<ul><li>قراية الشرائح والضهر للجمهور.</li><li>فوات الوقت: عاودي التمرين بالكرونومتر.</li><li>إشكالية هي غير العنوان مع علامة استفهام.</li><li>تصميم ما متوازنش (جزء 5 دقايق والآخر دقيقة).</li></ul>
<h3>❓ أسئلة الدرس</h3>
${Q("شنو هي الإشكالية؟", "السؤال المركزي اللي كيجاوب عليه العمل؛ كتبين رهان ولا توتر وكتوجه التصميم.")}
${Q("كيفاش نذكرو مصدر؟", "المؤلف ولا المؤسسة، العنوان، التاريخ، والرابط ولا الناشر. مثال: Bank Al-Maghrib, Rapport annuel, 2025, bkam.ma.")}
${Q("شنو كاين ف الصفحة الأولى ديال التقرير؟", "سمية المؤسسة، العنوان، سمية الطالب(ة)، الشعبة، المؤطر، والسنة الجامعية.")}`,
    en: `<h3>📝 Worked exercise: preparing a presentation</h3>
<div class="ex"><b>Task.</b> Topic: “Mobile payment in Morocco”, 10 minutes in pairs. Suggest an outline, timing and 3 slide tips.</div>
<ol><li><b>Intro (1:30)</b>: hook, definition, research question “Can mobile payment replace cash in Morocco?”, outline.</li><li><b>I. Current situation (3:00)</b>: existing solutions, official figures (Bank Al-Maghrib), uses.</li><li><b>II. Barriers and opportunities (3:30)</b>: cash habits, trust, coverage/financial inclusion, e-commerce, youth.</li><li><b>Conclusion (1:00) + questions (1:00)</b>.</li></ol>
<p><b>Slides</b>: one idea per slide, max 6 lines; a chart rather than a table; sources on the last slide.</p>
{{fig:rapport}}
<h3>⚠️ Common mistakes</h3>
<ul><li>Reading slides with your back to the audience.</li><li>Running over time: rehearse with a timer.</li><li>A research question that is just the title with “?”.</li><li>Unbalanced parts.</li></ul>
<h3>❓ Review questions</h3>
${Q("What is a research question?", "The central question the work answers; it shows an issue and guides the outline.")}
${Q("How to cite a source?", "Author/organisation, title, date, link or publisher.")}
${Q("Report cover page?", "Institution, title, student name, programme, supervisor, academic year.")}`,
  },
};
