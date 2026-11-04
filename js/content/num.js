// Module 1.1.4 — Compétences numériques
export default {
  id: 'num', code: '1.1.4', em: '💻', color: '#0e7c86', prof: 'CM/TP · Salle C1',
  name: { fr: 'Compétences numériques', ar: 'الكفايات الرقمية', en: 'Digital skills' },
  intro: { fr: "Maîtriser l'ordinateur, les fichiers, le traitement de texte, le tableur Excel, la recherche sur internet et les bons réflexes de sécurité et de citoyenneté numérique.", ar: 'التمكن من الحاسوب، الملفات، معالجة النصوص، المجدول Excel، البحث ف الأنترنت والعادات المزيانة ديال الأمان والمواطنة الرقمية.', en: 'Master the computer, files, word processing, Excel spreadsheets, internet search and good security and digital-citizenship habits.' },
  chapters: [
    { id: 'num1', t: { fr: "L'ordinateur, les fichiers et la sécurité", ar: 'الحاسوب، الملفات والأمان', en: 'Computers, files and security' },
      sum: { fr: 'Matériel/logiciel, unités de stockage, dossiers et extensions, cloud, mots de passe', ar: 'العتاد/البرمجيات، وحدات التخزين، المجلدات والامتدادات، السحابة، كلمات السر', en: 'Hardware/software, storage units, folders and extensions, cloud, passwords' },
      body: {
        fr: `<h3>1. Matériel et logiciel</h3>
<ul><li><b>Matériel (hardware)</b> : les éléments physiques. Le <b>processeur (CPU)</b> exécute les calculs ; la <b>mémoire vive (RAM)</b> garde les données pendant le travail (elle s'efface à l'extinction) ; le <b>disque</b> (HDD ou SSD) stocke durablement ; les <b>périphériques d'entrée</b> (clavier, souris, micro) et <b>de sortie</b> (écran, imprimante).</li>
<li><b>Logiciel (software)</b> : les programmes. Le <b>système d'exploitation</b> (Windows, macOS, Linux, Android, iOS) gère la machine ; les <b>applications</b> (Word, Excel, navigateur) servent à des tâches précises.</li></ul>
<h3>2. Les unités de stockage</h3>
<p>L'information est codée en <b>binaire</b> (0 et 1). Un <b>bit</b> vaut 0 ou 1 ; un <b>octet</b> = 8 bits (il peut coder un caractère).</p>
{{fig:units}}
<div class="ex">Une photo de 3 Mo, une vidéo de 1,5 Go : une clé USB de 16 Go peut contenir environ 16 × 1 024 / 3 ≈ 5 400 photos. (Dans le commerce, on utilise souvent 1 000 au lieu de 1 024.)</div>
<p>À ne pas confondre : la <b>vitesse de connexion</b> s'exprime en <b>bits</b> par seconde (Mbit/s). Une connexion de 80 Mbit/s télécharge environ 10 Mo par seconde (80 / 8).</p>
<h3>3. Fichiers et dossiers</h3>
<p>Un <b>fichier</b> a un nom et une <b>extension</b> qui indique son type :</p>
<table><tr><th>Extension</th><th>Type</th></tr><tr><td>.docx</td><td>document Word</td></tr><tr><td>.xlsx</td><td>classeur Excel</td></tr><tr><td>.pptx</td><td>présentation PowerPoint</td></tr><tr><td>.pdf</td><td>document fixe (à envoyer ou imprimer)</td></tr><tr><td>.jpg / .png</td><td>image</td></tr><tr><td>.mp4</td><td>vidéo</td></tr><tr><td>.zip</td><td>archive compressée</td></tr></table>
<p>Les fichiers sont rangés dans des <b>dossiers</b> organisés en <b>arborescence</b>. Un <b>chemin d'accès</b> indique l'emplacement : <code>C:\\Users\\Salma\\Documents\\DUT\\Compta\\TD1.xlsx</code>.</p>
<div class="tip">Bonne pratique : un dossier par module, des noms clairs (<i>2026-10-12_Compta_TD3.xlsx</i>), sans espaces ni caractères spéciaux, et une <b>sauvegarde</b> régulière (clé USB + cloud).</div>
<h3>4. Le cloud</h3>
<p>Le <b>cloud</b> (Google Drive, OneDrive, iCloud) stocke les fichiers sur des serveurs accessibles par internet. Avantages : accès depuis n'importe quel appareil, partage, travail collaboratif en temps réel, sauvegarde. Inconvénients : besoin d'internet, questions de confidentialité.</p>
<h3>5. La sécurité numérique</h3>
<ul><li><b>Mot de passe solide</b> : au moins 12 caractères, mélange de majuscules, minuscules, chiffres et symboles ; un mot de passe différent par site ; un gestionnaire de mots de passe.</li>
<li><b>Double authentification (2FA)</b> : un code par SMS ou application en plus du mot de passe.</li>
<li><b>Hameçonnage (phishing)</b> : faux message (SMS, e-mail) qui imite une banque ou une livraison pour voler tes données. Ne clique pas sur les liens suspects, vérifie l'adresse de l'expéditeur.</li>
<li><b>Logiciels malveillants</b> (virus, rançongiciels) : mettre à jour le système, installer un antivirus, ne pas télécharger de logiciels piratés.</li></ul>
<div class="warn">Aucune banque ne te demandera ton code secret ou ton mot de passe par message ou par téléphone.</div>`,
        ar: `<h3>1. العتاد والبرمجيات</h3>
<ul><li><b>العتاد (hardware)</b>: العناصر المادية. <b>المعالج (CPU)</b> كيدير الحسابات؛ <b>الذاكرة الحية (RAM)</b> كتحفظ المعطيات وقت الخدمة (كتتمسح ملي كيتطفى)؛ <b>القرص</b> (HDD ولا SSD) كيخزن بشكل دائم؛ <b>أجهزة الإدخال</b> (لوحة المفاتيح، الفأرة، الميكرو) و<b>الإخراج</b> (الشاشة، الطابعة).</li>
<li><b>البرمجيات (software)</b>: البرامج. <b>نظام التشغيل</b> (Windows، macOS، Linux، Android، iOS) كيسير الجهاز؛ <b>التطبيقات</b> (Word، Excel، المتصفح) كتصلح لمهام محددة.</li></ul>
<h3>2. وحدات التخزين</h3>
<p>المعلومة كتترمز بـ<b>النظام الثنائي</b> (0 و 1). <b>البت</b> كيساوي 0 ولا 1؛ <b>البايت (octet)</b> = 8 بت (يقدر يرمز حرف واحد).</p>
{{fig:units}}
<div class="ex">تصويرة ديال 3 Mo، فيديو ديال 1,5 Go: فلاشة ديال 16 Go تقدر تهز تقريبا 16 × 1 024 / 3 ≈ 5 400 تصويرة. (ف التجارة غالبا كيستعملو 1 000 عوض 1 024.)</div>
<p>ما تخلطيش: <b>سرعة الاتصال</b> كتقاس بالـ<b>بت</b> ف الثانية (Mbit/s). اتصال ديال 80 Mbit/s كيحمل تقريبا 10 Mo ف الثانية (80 / 8).</p>
<h3>3. الملفات والمجلدات</h3>
<p><b>الملف</b> عندو اسم و<b>امتداد</b> كيبين النوع ديالو:</p>
<table><tr><th>الامتداد</th><th>النوع</th></tr><tr><td>.docx</td><td>وثيقة Word</td></tr><tr><td>.xlsx</td><td>مصنف Excel</td></tr><tr><td>.pptx</td><td>عرض PowerPoint</td></tr><tr><td>.pdf</td><td>وثيقة ثابتة (للإرسال ولا الطباعة)</td></tr><tr><td>.jpg / .png</td><td>صورة</td></tr><tr><td>.mp4</td><td>فيديو</td></tr><tr><td>.zip</td><td>أرشيف مضغوط</td></tr></table>
<p>الملفات كتترتب ف <b>مجلدات</b> منظمة على شكل <b>شجرة</b>. <b>المسار</b> كيبين البلاصة: <code>C:\\Users\\Salma\\Documents\\DUT\\Compta\\TD1.xlsx</code>.</p>
<div class="tip">عادة مزيانة: مجلد لكل مادة، أسماء واضحة (<i>2026-10-12_Compta_TD3.xlsx</i>)، بلا فراغات ولا رموز خاصة، و<b>نسخة احتياطية</b> بانتظام (فلاشة + السحابة).</div>
<h3>4. السحابة</h3>
<p><b>السحابة</b> (Google Drive، OneDrive، iCloud) كتخزن الملفات ف خوادم كتوصل ليها عبر الأنترنت. المزايا: الوصول من أي جهاز، المشاركة، الخدمة الجماعية ف نفس الوقت، النسخ الاحتياطي. العيوب: خاص الأنترنت، ومسائل السرية.</p>
<h3>5. الأمان الرقمي</h3>
<ul><li><b>كلمة سر قوية</b>: على الأقل 12 حرف، خليط ديال الحروف الكبيرة والصغيرة، الأرقام والرموز؛ كلمة سر مختلفة لكل موقع؛ مسير كلمات السر.</li>
<li><b>المصادقة الثنائية (2FA)</b>: كود بالـSMS ولا بتطبيق زيادة على كلمة السر.</li>
<li><b>التصيد (phishing)</b>: رسالة مزورة (SMS، إيميل) كتقلد بنك ولا شركة توصيل باش تسرق المعطيات ديالك. ما تورقيش على الروابط المشكوك فيها، وتأكدي من عنوان المرسل.</li>
<li><b>البرمجيات الخبيثة</b> (الفيروسات، برامج الفدية): حدّثي النظام، نصبي مضاد الفيروسات، وما تحمليش البرامج المقرصنة.</li></ul>
<div class="warn">حتى بنك ما غادي يطلب منك الكود السري ولا كلمة السر ف رسالة ولا ف التليفون.</div>`,
        en: `<h3>1. Hardware and software</h3>
<ul><li><b>Hardware</b>: physical parts. The <b>processor (CPU)</b> performs calculations; <b>RAM</b> holds data while you work (erased when switched off); the <b>drive</b> (HDD or SSD) stores data permanently; <b>input devices</b> (keyboard, mouse, mic) and <b>output devices</b> (screen, printer).</li>
<li><b>Software</b>: programs. The <b>operating system</b> (Windows, macOS, Linux, Android, iOS) runs the machine; <b>applications</b> (Word, Excel, browser) do specific tasks.</li></ul>
<h3>2. Storage units</h3>
<p>Information is coded in <b>binary</b> (0 and 1). A <b>bit</b> is 0 or 1; a <b>byte</b> = 8 bits (it can code one character).</p>
{{fig:units}}
<div class="ex">A 3 MB photo, a 1.5 GB video: a 16 GB USB stick holds about 16 × 1,024 / 3 ≈ 5,400 photos. (Shops often use 1,000 instead of 1,024.)</div>
<p>Don't confuse: <b>connection speed</b> is measured in <b>bits</b> per second (Mbit/s). An 80 Mbit/s connection downloads about 10 MB per second (80 / 8).</p>
<h3>3. Files and folders</h3>
<p>A <b>file</b> has a name and an <b>extension</b> showing its type:</p>
<table><tr><th>Extension</th><th>Type</th></tr><tr><td>.docx</td><td>Word document</td></tr><tr><td>.xlsx</td><td>Excel workbook</td></tr><tr><td>.pptx</td><td>PowerPoint presentation</td></tr><tr><td>.pdf</td><td>fixed document (to send or print)</td></tr><tr><td>.jpg / .png</td><td>image</td></tr><tr><td>.mp4</td><td>video</td></tr><tr><td>.zip</td><td>compressed archive</td></tr></table>
<p>Files are stored in <b>folders</b> arranged as a <b>tree</b>. A <b>path</b> gives the location: <code>C:\\Users\\Salma\\Documents\\DUT\\Compta\\TD1.xlsx</code>.</p>
<div class="tip">Good practice: one folder per module, clear names (<i>2026-10-12_Accounting_TD3.xlsx</i>), no spaces or special characters, and regular <b>backups</b> (USB + cloud).</div>
<h3>4. The cloud</h3>
<p>The <b>cloud</b> (Google Drive, OneDrive, iCloud) stores files on servers reachable over the internet. Pros: access from any device, sharing, real-time collaboration, backup. Cons: needs internet, privacy issues.</p>
<h3>5. Digital security</h3>
<ul><li><b>Strong password</b>: at least 12 characters mixing upper and lower case, numbers and symbols; a different password for each site; a password manager.</li>
<li><b>Two-factor authentication (2FA)</b>: a code by SMS or app in addition to the password.</li>
<li><b>Phishing</b>: a fake message (SMS, e-mail) imitating a bank or a delivery company to steal your data. Don't click suspicious links; check the sender's address.</li>
<li><b>Malware</b> (viruses, ransomware): update your system, install antivirus, never download pirated software.</li></ul>
<div class="warn">No bank will ever ask for your PIN or password by message or phone.</div>`,
      },
      key: { fr: ['1 octet = 8 bits ; Ko, Mo, Go, To : ×1 024.', 'RAM = mémoire temporaire ; disque = stockage durable.', 'L’extension indique le type de fichier (.docx, .xlsx, .pdf…).', 'Mots de passe longs et différents + double authentification.'], ar: ['1 بايت = 8 بت؛ Ko، Mo، Go، To: ×1 024.', 'RAM = ذاكرة مؤقتة؛ القرص = تخزين دائم.', 'الامتداد كيبين نوع الملف (.docx، .xlsx، .pdf…).', 'كلمات سر طويلة ومختلفة + المصادقة الثنائية.'], en: ['1 byte = 8 bits; KB, MB, GB, TB: ×1,024.', 'RAM = temporary memory; drive = permanent storage.', 'The extension shows the file type (.docx, .xlsx, .pdf…).', 'Long, unique passwords + two-factor authentication.'] } },

    { id: 'num2', t: { fr: 'Traitement de texte et présentation', ar: 'معالجة النصوص والعروض', en: 'Word processing and presentations' },
      sum: { fr: 'Word : mise en forme, styles, table des matières ; PowerPoint : règles d’une bonne présentation', ar: 'Word: التنسيق، الأنماط، الفهرس؛ PowerPoint: قواعد العرض المزيان', en: 'Word: formatting, styles, table of contents; PowerPoint: good presentation rules' },
      body: {
        fr: `<h3>1. Le traitement de texte (Word, Google Docs, LibreOffice Writer)</h3>
<p>Il sert à rédiger des rapports, des lettres, des CV. Trois niveaux de mise en forme :</p>
<ul><li><b>Caractère</b> : police, taille, gras, italique, couleur.</li>
<li><b>Paragraphe</b> : alignement (gauche, centré, justifié), interligne, retraits, espacement avant/après, puces et numérotation.</li>
<li><b>Page</b> : marges, orientation (portrait/paysage), en-tête et pied de page, numéros de page, sauts de page.</li></ul>
<h3>2. Les styles : le secret d'un document professionnel</h3>
<p>Au lieu de mettre en forme chaque titre « à la main », on applique des <b>styles</b> : <i>Titre 1</i> pour les grandes parties, <i>Titre 2</i> pour les sous-parties, <i>Normal</i> pour le texte. Avantages :</p>
<ul><li>une présentation homogène dans tout le document ;</li><li>modifier un style change tous les titres d'un coup ;</li><li>la <b>table des matières automatique</b> (Références → Table des matières) se crée et se met à jour en un clic ;</li><li>le volet de navigation permet de se déplacer rapidement.</li></ul>
<h3>3. Autres fonctions utiles</h3>
<ul><li><b>Tableaux</b> : insérer, fusionner des cellules, appliquer un style.</li>
<li><b>Images et légendes</b> : habillage du texte, légende numérotée (Figure 1…).</li>
<li><b>Notes de bas de page</b> pour citer une source.</li>
<li><b>Révision</b> : suivi des modifications et commentaires pour travailler à plusieurs.</li>
<li><b>Exporter en PDF</b> pour envoyer un document qui ne bougera pas.</li></ul>
<div class="tip">Raccourcis utiles : Ctrl + C (copier), Ctrl + V (coller), Ctrl + X (couper), Ctrl + Z (annuler), Ctrl + S (enregistrer), Ctrl + F (rechercher), Ctrl + B ou G (gras), Ctrl + P (imprimer). Sur Mac : Cmd au lieu de Ctrl.</div>
<h3>4. La présentation (PowerPoint, Google Slides, Canva)</h3>
<p>Une présentation soutient un exposé oral : elle ne doit pas le remplacer.</p>
<ul><li><b>Une idée par diapositive</b>, avec un titre clair.</li>
<li><b>Règle 6 × 6</b> : pas plus de 6 lignes et environ 6 mots par ligne.</li>
<li>Police lisible (au moins 24 pt pour le texte, 32 pt pour les titres), bon <b>contraste</b>.</li>
<li>Des <b>visuels</b> (graphiques, photos, schémas) plutôt que de longs textes.</li>
<li>Une charte graphique cohérente : 2 ou 3 couleurs, les mêmes polices (utiliser le <b>masque des diapositives</b>).</li>
<li>Animations et transitions avec modération.</li></ul>
<p><b>Structure type</b> : diapo de titre → plan → contenu (2 ou 3 parties) → conclusion → questions / remerciements.</p>
<div class="ex">Pour un exposé de 10 minutes en marketing : environ 8 à 10 diapositives. Exemple : 1) titre ; 2) plan ; 3) définition du marketing digital ; 4) chiffres clés au Maroc (graphique) ; 5) exemple d'une marque ; 6) avantages ; 7) limites ; 8) conclusion ; 9) sources.</div>`,
        ar: `<h3>1. معالجة النصوص (Word، Google Docs، LibreOffice Writer)</h3>
<p>كتستعمل لكتابة التقارير، الرسائل، السير الذاتية. ثلاث مستويات ديال التنسيق:</p>
<ul><li><b>الحرف</b>: نوع الخط، الحجم، الغليظ، المائل، اللون.</li>
<li><b>الفقرة</b>: المحاذاة (يسار، وسط، ضبط)، التباعد بين الأسطر، الإزاحة، التباعد قبل/بعد، التعداد النقطي والرقمي.</li>
<li><b>الصفحة</b>: الهوامش، الاتجاه (عمودي/أفقي)، الرأس والتذييل، ترقيم الصفحات، فواصل الصفحات.</li></ul>
<h3>2. الأنماط: السر ديال وثيقة احترافية</h3>
<p>عوض ما ننسقو كل عنوان «باليد»، كنطبقو <b>الأنماط</b>: <i>عنوان 1</i> للأجزاء الكبرى، <i>عنوان 2</i> للأجزاء الصغرى، <i>عادي</i> للنص. المزايا:</p>
<ul><li>تقديم موحد ف الوثيقة كاملة؛</li><li>تبديل نمط كيبدل جميع العناوين دقة وحدة؛</li><li><b>الفهرس الأوتوماتيكي</b> (Références ← Table des matières) كيتصاوب وكيتحدث بنقرة؛</li><li>جزء التنقل كيسمح تتحركي بسرعة.</li></ul>
<h3>3. وظائف أخرى مفيدة</h3>
<ul><li><b>الجداول</b>: الإدراج، دمج الخلايا، تطبيق نمط.</li>
<li><b>الصور والتعاليق</b>: التفاف النص، تعليق مرقم (الشكل 1…).</li>
<li><b>الهوامش السفلية</b> لذكر المصدر.</li>
<li><b>المراجعة</b>: تتبع التعديلات والتعليقات للخدمة الجماعية.</li>
<li><b>التصدير بـ PDF</b> باش ترسلي وثيقة ما تتبدلش.</li></ul>
<div class="tip">اختصارات مفيدة: Ctrl + C (نسخ)، Ctrl + V (لصق)، Ctrl + X (قص)، Ctrl + Z (تراجع)، Ctrl + S (حفظ)، Ctrl + F (بحث)، Ctrl + B ولا G (غليظ)، Ctrl + P (طباعة). ف الماك: Cmd عوض Ctrl.</div>
<h3>4. العرض (PowerPoint، Google Slides، Canva)</h3>
<p>العرض كيدعم الكلام الشفوي: ما خاصوش يعوضو.</p>
<ul><li><b>فكرة وحدة ف كل شريحة</b>، بعنوان واضح.</li>
<li><b>قاعدة 6 × 6</b>: ما كثر من 6 أسطر وتقريبا 6 كلمات ف السطر.</li>
<li>خط مقروء (على الأقل 24 pt للنص، 32 pt للعناوين)، و<b>تباين</b> مزيان.</li>
<li><b>صور ومرئيات</b> (مبيانات، صور، خطاطات) عوض النصوص الطويلة.</li>
<li>هوية بصرية منسجمة: 2 ولا 3 ألوان، نفس الخطوط (استعملي <b>قالب الشرائح</b>).</li>
<li>الحركات والانتقالات بالاعتدال.</li></ul>
<p><b>البنية النموذجية</b>: شريحة العنوان ← التصميم ← المحتوى (2 ولا 3 أجزاء) ← الخاتمة ← الأسئلة / الشكر.</p>
<div class="ex">لعرض ديال 10 دقايق ف التسويق: تقريبا 8 حتى 10 شرائح. مثال: 1) العنوان؛ 2) التصميم؛ 3) تعريف التسويق الرقمي؛ 4) أرقام مهمة ف المغرب (مبيان)؛ 5) مثال ديال ماركة؛ 6) المزايا؛ 7) الحدود؛ 8) الخاتمة؛ 9) المصادر.</div>`,
        en: `<h3>1. Word processing (Word, Google Docs, LibreOffice Writer)</h3>
<p>Used to write reports, letters and CVs. Three levels of formatting:</p>
<ul><li><b>Character</b>: font, size, bold, italic, colour.</li>
<li><b>Paragraph</b>: alignment (left, centred, justified), line spacing, indents, spacing before/after, bullets and numbering.</li>
<li><b>Page</b>: margins, orientation (portrait/landscape), header and footer, page numbers, page breaks.</li></ul>
<h3>2. Styles: the secret of a professional document</h3>
<p>Instead of formatting each heading “by hand”, apply <b>styles</b>: <i>Heading 1</i> for main parts, <i>Heading 2</i> for sub-parts, <i>Normal</i> for text. Benefits:</p>
<ul><li>consistent look throughout;</li><li>changing a style updates every heading at once;</li><li>an <b>automatic table of contents</b> (References → Table of Contents) is created and updated in one click;</li><li>the navigation pane lets you move around quickly.</li></ul>
<h3>3. Other useful features</h3>
<ul><li><b>Tables</b>: insert, merge cells, apply a style.</li>
<li><b>Images and captions</b>: text wrapping, numbered captions (Figure 1…).</li>
<li><b>Footnotes</b> to cite a source.</li>
<li><b>Review</b>: track changes and comments for teamwork.</li>
<li><b>Export to PDF</b> to send a document that won't change.</li></ul>
<div class="tip">Useful shortcuts: Ctrl + C (copy), Ctrl + V (paste), Ctrl + X (cut), Ctrl + Z (undo), Ctrl + S (save), Ctrl + F (find), Ctrl + B (bold), Ctrl + P (print). On Mac: Cmd instead of Ctrl.</div>
<h3>4. Presentations (PowerPoint, Google Slides, Canva)</h3>
<p>Slides support a talk; they should not replace it.</p>
<ul><li><b>One idea per slide</b>, with a clear title.</li>
<li><b>6 × 6 rule</b>: no more than 6 lines and about 6 words per line.</li>
<li>Readable fonts (at least 24 pt for text, 32 pt for titles), good <b>contrast</b>.</li>
<li><b>Visuals</b> (charts, photos, diagrams) rather than long text.</li>
<li>A consistent design: 2–3 colours, the same fonts (use the <b>slide master</b>).</li>
<li>Animations and transitions in moderation.</li></ul>
<p><b>Standard structure</b>: title slide → outline → content (2–3 parts) → conclusion → questions / thanks.</p>
<div class="ex">For a 10-minute marketing talk: about 8–10 slides, e.g. 1) title; 2) outline; 3) definition of digital marketing; 4) key figures in Morocco (chart); 5) a brand example; 6) advantages; 7) limits; 8) conclusion; 9) sources.</div>`,
      },
      key: { fr: ['3 niveaux de mise en forme : caractère, paragraphe, page.', 'Les styles de titres permettent une table des matières automatique.', 'PowerPoint : une idée par diapo, règle 6 × 6, des visuels.', 'Exporter en PDF pour envoyer.'], ar: ['3 مستويات ديال التنسيق: الحرف، الفقرة، الصفحة.', 'أنماط العناوين كتسمح بفهرس أوتوماتيكي.', 'PowerPoint: فكرة ف كل شريحة، قاعدة 6 × 6، المرئيات.', 'صدّري بـ PDF باش ترسلي.'], en: ['3 formatting levels: character, paragraph, page.', 'Heading styles enable an automatic table of contents.', 'PowerPoint: one idea per slide, 6 × 6 rule, visuals.', 'Export to PDF to send.'] } },

    { id: 'num3', t: { fr: 'Le tableur Excel', ar: 'المجدول Excel', en: 'Excel spreadsheets' },
      sum: { fr: 'Cellules, formules, références relatives et absolues, fonctions SOMME, MOYENNE, SI, NB.SI, RECHERCHEV, graphiques', ar: 'الخلايا، الصيغ، المراجع النسبية والمطلقة، الدوال، المبيانات', en: 'Cells, formulas, relative and absolute references, SUM, AVERAGE, IF, COUNTIF, VLOOKUP, charts' },
      body: {
        fr: `<h3>1. Le vocabulaire</h3>
<p>Un fichier Excel est un <b>classeur</b> composé de <b>feuilles</b>. Chaque feuille est une grille de <b>colonnes</b> (A, B, C…) et de <b>lignes</b> (1, 2, 3…). Leur croisement est une <b>cellule</b>, repérée par sa <b>référence</b> (ex. B3). Un ensemble de cellules est une <b>plage</b> (ex. A1:D10).</p>
<h3>2. Les formules</h3>
<p>Une formule commence <b>toujours par =</b>. Opérateurs : + − * / ^ (puissance) et &amp; (concaténer du texte).</p>
{{fig:excel}}
<h3>3. Références relatives et absolues</h3>
<ul><li><b>Relative</b> (A1) : quand on recopie la formule, la référence <b>s'adapte</b> (A1 devient A2 une ligne plus bas).</li>
<li><b>Absolue</b> ($A$1) : la référence <b>reste fixe</b>. On l'obtient avec la touche <b>F4</b>.</li>
<li><b>Mixte</b> ($A1 ou A$1) : seule la colonne ou seule la ligne est bloquée.</li></ul>
<div class="ex">Le taux de TVA (20 %) est en cellule F1. Pour calculer la TVA de chaque produit : en E2, <b>=D2*$F$1</b>, puis on recopie vers le bas. D2 devient D3, D4… mais $F$1 reste fixe. Si on avait écrit =D2*F1, la copie aurait donné =D3*F2 (cellule vide → résultat faux).</div>
<h3>4. Les fonctions essentielles</h3>
<table><tr><th>Fonction</th><th>Rôle</th><th>Exemple</th></tr>
<tr><td>SOMME</td><td>additionner</td><td>=SOMME(D2:D10)</td></tr>
<tr><td>MOYENNE</td><td>moyenne</td><td>=MOYENNE(C2:C30)</td></tr>
<tr><td>MAX / MIN</td><td>plus grande / plus petite valeur</td><td>=MAX(B2:B50)</td></tr>
<tr><td>NB / NBVAL</td><td>compter les nombres / les cellules non vides</td><td>=NBVAL(A2:A100)</td></tr>
<tr><td>SI</td><td>tester une condition</td><td>=SI(C2&gt;=10;"Validé";"Rattrapage")</td></tr>
<tr><td>NB.SI</td><td>compter selon un critère</td><td>=NB.SI(B2:B100;"Oujda")</td></tr>
<tr><td>SOMME.SI</td><td>additionner selon un critère</td><td>=SOMME.SI(B2:B100;"Oujda";D2:D100)</td></tr>
<tr><td>RECHERCHEV</td><td>chercher une valeur dans un tableau</td><td>=RECHERCHEV(G2;A2:D50;3;FAUX)</td></tr>
<tr><td>ARRONDI</td><td>arrondir</td><td>=ARRONDI(E2;2)</td></tr></table>
<div class="tip">Dans la version anglaise : SUM, AVERAGE, IF, COUNTIF, SUMIF, VLOOKUP, ROUND. Le séparateur d'arguments est « ; » en français et « , » en anglais.</div>
<h3>5. La fonction SI en détail</h3>
<span class="f">=SI(test_logique ; valeur_si_vrai ; valeur_si_faux)</span>
<div class="ex">Remise de 5 % si la commande dépasse 1 000 DH : <b>=SI(D2&gt;1000;D2*5%;0)</b>. SI imbriqués : =SI(C2&gt;=16;"Très bien";SI(C2&gt;=12;"Bien";SI(C2&gt;=10;"Passable";"Insuffisant")))</div>
<h3>6. Trier, filtrer, graphiques</h3>
<ul><li><b>Trier</b> (croissant/décroissant) et <b>filtrer</b> (afficher seulement certaines lignes, ex. les clients d'une ville).</li>
<li><b>Mise en forme conditionnelle</b> : colorer automatiquement les valeurs (ex. ventes &lt; objectif en rouge).</li>
<li><b>Graphiques</b> : histogramme (comparer), courbe (évolution), secteurs (répartition).</li>
<li><b>Tableau croisé dynamique</b> : résumer une grande base de données (ventes par ville et par mois) en quelques clics.</li></ul>`,
        ar: `<h3>1. المصطلحات</h3>
<p>ملف Excel هو <b>مصنف</b> مكون من <b>أوراق</b>. كل ورقة هي شبكة ديال <b>الأعمدة</b> (A، B، C…) و<b>الصفوف</b> (1، 2، 3…). التقاطع ديالهم هو <b>خلية</b>، كتعرف بـ<b>المرجع</b> ديالها (مثلا B3). مجموعة ديال الخلايا هي <b>نطاق</b> (مثلا A1:D10).</p>
<h3>2. الصيغ</h3>
<p>الصيغة كتبدا <b>ديما بـ =</b>. المعاملات: + − * / ^ (الأس) و &amp; (جمع النصوص).</p>
{{fig:excel}}
<h3>3. المراجع النسبية والمطلقة</h3>
<ul><li><b>النسبي</b> (A1): ملي كننسخو الصيغة، المرجع <b>كيتكيف</b> (A1 كتولي A2 ف الصف اللي تحت).</li>
<li><b>المطلق</b> ($A$1): المرجع <b>كيبقى ثابت</b>. كنحصلو عليه بالزر <b>F4</b>.</li>
<li><b>المختلط</b> ($A1 ولا A$1): غير العمود ولا غير الصف اللي كيتسد.</li></ul>
<div class="ex">نسبة TVA (20 %) ف الخلية F1. باش نحسبو TVA ديال كل منتوج: ف E2، <b>=D2*$F$1</b>، ومن بعد كننسخو للتحت. D2 كتولي D3، D4… ولكن $F$1 كتبقى ثابتة. إلا كتبنا =D2*F1، النسخ غادي يعطي =D3*F2 (خلية خاوية ← نتيجة غالطة).</div>
<h3>4. الدوال الأساسية</h3>
<table><tr><th>الدالة</th><th>الدور</th><th>مثال</th></tr>
<tr><td>SOMME</td><td>الجمع</td><td>=SOMME(D2:D10)</td></tr>
<tr><td>MOYENNE</td><td>المتوسط</td><td>=MOYENNE(C2:C30)</td></tr>
<tr><td>MAX / MIN</td><td>أكبر / أصغر قيمة</td><td>=MAX(B2:B50)</td></tr>
<tr><td>NB / NBVAL</td><td>عد الأرقام / الخلايا غير الخاوية</td><td>=NBVAL(A2:A100)</td></tr>
<tr><td>SI</td><td>اختبار شرط</td><td>=SI(C2&gt;=10;"Validé";"Rattrapage")</td></tr>
<tr><td>NB.SI</td><td>العد حسب معيار</td><td>=NB.SI(B2:B100;"Oujda")</td></tr>
<tr><td>SOMME.SI</td><td>الجمع حسب معيار</td><td>=SOMME.SI(B2:B100;"Oujda";D2:D100)</td></tr>
<tr><td>RECHERCHEV</td><td>البحث على قيمة ف جدول</td><td>=RECHERCHEV(G2;A2:D50;3;FAUX)</td></tr>
<tr><td>ARRONDI</td><td>التقريب</td><td>=ARRONDI(E2;2)</td></tr></table>
<div class="tip">ف النسخة الإنجليزية: SUM، AVERAGE، IF، COUNTIF، SUMIF، VLOOKUP، ROUND. الفاصل بين المعطيات هو «;» بالفرنسية و«,» بالإنجليزية.</div>
<h3>5. الدالة SI بالتفصيل</h3>
<span class="f">=SI(الاختبار ; القيمة_إلا_صحيح ; القيمة_إلا_خطأ)</span>
<div class="ex">تخفيض 5 % إلا الطلبية فاتت 1 000 درهم: <b>=SI(D2&gt;1000;D2*5%;0)</b>. SI متداخلة: =SI(C2&gt;=16;"Très bien";SI(C2&gt;=12;"Bien";SI(C2&gt;=10;"Passable";"Insuffisant")))</div>
<h3>6. الترتيب، التصفية، المبيانات</h3>
<ul><li><b>الترتيب</b> (تصاعدي/تنازلي) و<b>التصفية</b> (عرض غير بعض الصفوف، مثلا زبناء مدينة).</li>
<li><b>التنسيق الشرطي</b>: تلوين القيم أوتوماتيكيا (مثلا المبيعات &lt; الهدف بالحمر).</li>
<li><b>المبيانات</b>: الأعمدة (المقارنة)، المنحنى (التطور)، الدائري (التوزيع).</li>
<li><b>الجدول المحوري</b>: تلخيص قاعدة معطيات كبيرة (المبيعات حسب المدينة والشهر) ف شي نقرات.</li></ul>`,
        en: `<h3>1. Vocabulary</h3>
<p>An Excel file is a <b>workbook</b> made of <b>sheets</b>. Each sheet is a grid of <b>columns</b> (A, B, C…) and <b>rows</b> (1, 2, 3…). Their intersection is a <b>cell</b>, identified by its <b>reference</b> (e.g. B3). A group of cells is a <b>range</b> (e.g. A1:D10).</p>
<h3>2. Formulas</h3>
<p>A formula <b>always starts with =</b>. Operators: + − * / ^ (power) and &amp; (join text).</p>
{{fig:excel}}
<h3>3. Relative and absolute references</h3>
<ul><li><b>Relative</b> (A1): when the formula is copied, the reference <b>adjusts</b> (A1 becomes A2 one row down).</li>
<li><b>Absolute</b> ($A$1): the reference <b>stays fixed</b>. Press <b>F4</b> to add the $ signs.</li>
<li><b>Mixed</b> ($A1 or A$1): only the column or only the row is locked.</li></ul>
<div class="ex">The VAT rate (20%) is in F1. To compute each product's VAT: in E2, <b>=D2*$F$1</b>, then copy down. D2 becomes D3, D4… but $F$1 stays fixed. With =D2*F1, the copy would give =D3*F2 (empty cell → wrong result).</div>
<h3>4. Essential functions (English names)</h3>
<table><tr><th>Function</th><th>Role</th><th>Example</th></tr>
<tr><td>SUM</td><td>add</td><td>=SUM(D2:D10)</td></tr>
<tr><td>AVERAGE</td><td>mean</td><td>=AVERAGE(C2:C30)</td></tr>
<tr><td>MAX / MIN</td><td>largest / smallest value</td><td>=MAX(B2:B50)</td></tr>
<tr><td>COUNT / COUNTA</td><td>count numbers / non-empty cells</td><td>=COUNTA(A2:A100)</td></tr>
<tr><td>IF</td><td>test a condition</td><td>=IF(C2&gt;=10,"Pass","Resit")</td></tr>
<tr><td>COUNTIF</td><td>count by criterion</td><td>=COUNTIF(B2:B100,"Oujda")</td></tr>
<tr><td>SUMIF</td><td>add by criterion</td><td>=SUMIF(B2:B100,"Oujda",D2:D100)</td></tr>
<tr><td>VLOOKUP</td><td>look up a value in a table</td><td>=VLOOKUP(G2,A2:D50,3,FALSE)</td></tr>
<tr><td>ROUND</td><td>round</td><td>=ROUND(E2,2)</td></tr></table>
<div class="tip">In French Excel: SOMME, MOYENNE, SI, NB.SI, SOMME.SI, RECHERCHEV, ARRONDI, with “;” as the separator.</div>
<h3>5. IF in detail</h3>
<span class="f">=IF(logical_test, value_if_true, value_if_false)</span>
<div class="ex">5% discount if the order is over 1,000 MAD: <b>=IF(D2&gt;1000,D2*5%,0)</b>. Nested IFs: =IF(C2&gt;=16,"Very good",IF(C2&gt;=12,"Good",IF(C2&gt;=10,"Pass","Fail")))</div>
<h3>6. Sort, filter, charts</h3>
<ul><li><b>Sort</b> (ascending/descending) and <b>filter</b> (show only some rows, e.g. customers from one city).</li>
<li><b>Conditional formatting</b>: colour values automatically (e.g. sales below target in red).</li>
<li><b>Charts</b>: column (compare), line (trend), pie (breakdown).</li>
<li><b>PivotTable</b>: summarise a large database (sales by city and month) in a few clicks.</li></ul>`,
      },
      key: { fr: ['Une formule commence par =.', 'A1 relative, $A$1 absolue (touche F4).', 'SOMME, MOYENNE, MAX, NB.SI, SOMME.SI, RECHERCHEV.', '=SI(test;si_vrai;si_faux).'], ar: ['الصيغة كتبدا بـ =.', 'A1 نسبي، $A$1 مطلق (الزر F4).', 'SOMME، MOYENNE، MAX، NB.SI، SOMME.SI، RECHERCHEV.', '=SI(اختبار;إلا_صحيح;إلا_خطأ).'], en: ['A formula starts with =.', 'A1 relative, $A$1 absolute (F4 key).', 'SUM, AVERAGE, MAX, COUNTIF, SUMIF, VLOOKUP.', '=IF(test, if_true, if_false).'] } },

    { id: 'num4', t: { fr: 'Internet, recherche et citoyenneté numérique', ar: 'الأنترنت، البحث والمواطنة الرقمية', en: 'Internet, search and digital citizenship' },
      sum: { fr: 'Fonctionnement d’internet, recherche avancée, fiabilité des sources, e-mail pro, données personnelles (loi 09-08)', ar: 'اشتغال الأنترنت، البحث المتقدم، موثوقية المصادر، الإيميل المهني، المعطيات الشخصية (القانون 09-08)', en: 'How the internet works, advanced search, source reliability, professional e-mail, personal data (Law 09-08)' },
      body: {
        fr: `<h3>1. Comment fonctionne internet ?</h3>
<p><b>Internet</b> est un réseau mondial d'ordinateurs reliés entre eux. Le <b>Web</b> est l'un de ses services : des pages reliées par des liens, consultées avec un <b>navigateur</b> (Chrome, Safari, Firefox, Edge).</p>
<ul><li>Une <b>URL</b> est l'adresse d'une page : <code>https://www.esto.ump.ma/formations</code> — protocole (https), nom de domaine (esto.ump.ma), chemin.</li>
<li><b>HTTPS</b> (cadenas 🔒) signifie que la connexion est <b>chiffrée</b> : indispensable pour payer en ligne ou se connecter.</li>
<li>Un <b>nom de domaine</b> se termine par une extension : .ma (Maroc), .com, .org, .gov…</li></ul>
<h3>2. Rechercher efficacement</h3>
<p>Un moteur de recherche (Google, Bing) classe les pages selon leur pertinence. Pour être précis :</p>
{{fig:search}}
<ul><li>choisir des <b>mots-clés</b> précis plutôt qu'une phrase entière ;</li><li>utiliser les <b>filtres</b> (date, images, actualités, « Outils ») ;</li><li>utiliser <b>Google Scholar</b> pour les articles scientifiques.</li></ul>
<h3>3. Évaluer la fiabilité d'une source (méthode CRAAP simplifiée)</h3>
<table><tr><th>Critère</th><th>Questions</th></tr><tr><td><b>Auteur</b></td><td>Qui a écrit ? Est-il compétent (institution, expert) ?</td></tr><tr><td><b>Date</b></td><td>L'information est-elle récente ?</td></tr><tr><td><b>Objectif</b></td><td>Informer, vendre, convaincre ? Y a-t-il de la publicité ?</td></tr><tr><td><b>Sources</b></td><td>Les chiffres sont-ils justifiés, avec des références ?</td></tr><tr><td><b>Recoupement</b></td><td>D'autres sources sérieuses disent-elles la même chose ?</td></tr></table>
<div class="tip">Sources fiables pour l'économie marocaine : <b>HCP</b> (hcp.ma), <b>Bank Al-Maghrib</b> (bkam.ma), le ministère des Finances, l'<b>ANRT</b> (télécoms et internet), l'Office des changes.</div>
<h3>4. L'e-mail professionnel</h3>
<ul><li>une adresse sérieuse (prenom.nom@…) ;</li><li>un <b>objet</b> clair et précis ;</li><li>une formule d'appel (« Madame, Monsieur, » / « Bonjour Madame Filali, ») ;</li><li>un message court, structuré, sans fautes ni langage SMS ;</li><li>une formule de politesse et une signature (nom, filière, groupe) ;</li><li>vérifier la <b>pièce jointe</b> (au format PDF de préférence) avant d'envoyer ;</li><li><b>À</b> : destinataire principal ; <b>Cc</b> : copie visible ; <b>Cci</b> : copie cachée.</li></ul>
<h3>5. Données personnelles et e-réputation</h3>
<p>Au Maroc, la <b>loi 09-08</b> protège les données personnelles ; elle est contrôlée par la <b>CNDP</b> (Commission nationale de contrôle de la protection des données à caractère personnel). Une entreprise qui collecte des données (formulaire, newsletter, site e-commerce) doit informer la personne, obtenir son <b>consentement</b>, ne collecter que les données nécessaires et les protéger.</p>
<p>Ton <b>e-réputation</b> est l'image que tu donnes sur internet : les recruteurs consultent souvent les réseaux sociaux. Soigne ton profil LinkedIn, règle la confidentialité de tes comptes et réfléchis avant de publier.</p>
<h3>6. Outils numériques du e-commerce</h3>
<p>Plateformes de boutique en ligne (Shopify, WooCommerce), réseaux sociaux (Instagram, TikTok, Facebook) pour la communication, outils d'analyse (Google Analytics), e-mailing, paiement en ligne (cartes, paiement mobile) et logistique de livraison.</p>`,
        ar: `<h3>1. كيفاش كيخدم الأنترنت؟</h3>
<p><b>الأنترنت</b> هو شبكة عالمية ديال الحواسيب مرتبطة بيناتها. <b>الويب</b> هو واحد من الخدمات ديالو: صفحات مرتبطة بروابط، كنشوفوها بـ<b>متصفح</b> (Chrome، Safari، Firefox، Edge).</p>
<ul><li><b>URL</b> هو عنوان الصفحة: <code>https://www.esto.ump.ma/formations</code> — البروتوكول (https)، اسم النطاق (esto.ump.ma)، المسار.</li>
<li><b>HTTPS</b> (القفل 🔒) معناه الاتصال <b>مشفر</b>: ضروري للأداء عبر الأنترنت ولا الدخول للحساب.</li>
<li><b>اسم النطاق</b> كيسالي بامتداد: .ma (المغرب)، .com، .org، .gov…</li></ul>
<h3>2. البحث بفعالية</h3>
<p>محرك البحث (Google، Bing) كيرتب الصفحات حسب الملاءمة. باش تكوني دقيقة:</p>
{{fig:search}}
<ul><li>ختاري <b>كلمات مفاتيح</b> دقيقة عوض جملة كاملة؛</li><li>استعملي <b>المرشحات</b> (التاريخ، الصور، الأخبار، «أدوات»)؛</li><li>استعملي <b>Google Scholar</b> للمقالات العلمية.</li></ul>
<h3>3. تقييم موثوقية المصدر</h3>
<table><tr><th>المعيار</th><th>الأسئلة</th></tr><tr><td><b>الكاتب</b></td><td>شكون كتب؟ واش عندو الكفاءة (مؤسسة، خبير)؟</td></tr><tr><td><b>التاريخ</b></td><td>واش المعلومة جديدة؟</td></tr><tr><td><b>الهدف</b></td><td>الإخبار، البيع، الإقناع؟ واش كاين الإشهار؟</td></tr><tr><td><b>المصادر</b></td><td>واش الأرقام مبررة بمراجع؟</td></tr><tr><td><b>المقارنة</b></td><td>واش مصادر جدية أخرى كتقول نفس الشي؟</td></tr></table>
<div class="tip">مصادر موثوقة للاقتصاد المغربي: <b>المندوبية السامية للتخطيط</b> (hcp.ma)، <b>بنك المغرب</b> (bkam.ma)، وزارة المالية، <b>ANRT</b> (الاتصالات والأنترنت)، مكتب الصرف.</div>
<h3>4. الإيميل المهني</h3>
<ul><li>عنوان جدي (الاسم.النسب@…)؛</li><li><b>موضوع</b> واضح ودقيق؛</li><li>عبارة النداء («Madame, Monsieur,» / «Bonjour Madame Filali,»)؛</li><li>رسالة قصيرة، منظمة، بلا أخطاء وبلا لغة SMS؛</li><li>عبارة مجاملة وتوقيع (الاسم، الشعبة، المجموعة)؛</li><li>تأكدي من <b>المرفق</b> (بصيغة PDF أحسن) قبل الإرسال؛</li><li><b>À</b>: المرسل إليه الأساسي؛ <b>Cc</b>: نسخة ظاهرة؛ <b>Cci</b>: نسخة مخفية.</li></ul>
<h3>5. المعطيات الشخصية والسمعة الرقمية</h3>
<p>ف المغرب، <b>القانون 09-08</b> كيحمي المعطيات الشخصية؛ وكتراقبو <b>CNDP</b> (اللجنة الوطنية لمراقبة حماية المعطيات ذات الطابع الشخصي). المقاولة اللي كتجمع المعطيات (استمارة، نشرة إخبارية، موقع تجارة إلكترونية) خاصها تعلم الشخص، تاخد <b>الموافقة</b> ديالو، تجمع غير المعطيات الضرورية وتحميها.</p>
<p><b>السمعة الرقمية</b> ديالك هي الصورة اللي كتعطي ف الأنترنت: المشغلين كيشوفو غالبا الشبكات الاجتماعية. اعتني بالبروفايل ديالك ف LinkedIn، نظمي الخصوصية ديال الحسابات ديالك، وفكري قبل ما تنشري.</p>
<h3>6. الأدوات الرقمية ديال التجارة الإلكترونية</h3>
<p>منصات المتاجر الإلكترونية (Shopify، WooCommerce)، الشبكات الاجتماعية (Instagram، TikTok، Facebook) للتواصل، أدوات التحليل (Google Analytics)، الإيميلينغ، الأداء عبر الأنترنت (البطاقات، الأداء بالهاتف) ولوجيستيك التوصيل.</p>`,
        en: `<h3>1. How does the internet work?</h3>
<p>The <b>internet</b> is a worldwide network of connected computers. The <b>Web</b> is one of its services: pages linked together, viewed with a <b>browser</b> (Chrome, Safari, Firefox, Edge).</p>
<ul><li>A <b>URL</b> is a page address: <code>https://www.esto.ump.ma/formations</code> — protocol (https), domain name (esto.ump.ma), path.</li>
<li><b>HTTPS</b> (padlock 🔒) means the connection is <b>encrypted</b>: essential for paying online or logging in.</li>
<li>A <b>domain name</b> ends with an extension: .ma (Morocco), .com, .org, .gov…</li></ul>
<h3>2. Searching effectively</h3>
<p>A search engine (Google, Bing) ranks pages by relevance. To be precise:</p>
{{fig:search}}
<ul><li>use precise <b>keywords</b> rather than a whole sentence;</li><li>use <b>filters</b> (date, images, news, “Tools”);</li><li>use <b>Google Scholar</b> for academic articles.</li></ul>
<h3>3. Judging source reliability</h3>
<table><tr><th>Criterion</th><th>Questions</th></tr><tr><td><b>Author</b></td><td>Who wrote it? Are they qualified (institution, expert)?</td></tr><tr><td><b>Date</b></td><td>Is the information recent?</td></tr><tr><td><b>Purpose</b></td><td>To inform, sell, persuade? Is there advertising?</td></tr><tr><td><b>Evidence</b></td><td>Are figures backed by references?</td></tr><tr><td><b>Cross-checking</b></td><td>Do other serious sources say the same?</td></tr></table>
<div class="tip">Reliable sources on the Moroccan economy: <b>HCP</b> (hcp.ma), <b>Bank Al-Maghrib</b> (bkam.ma), the Ministry of Finance, <b>ANRT</b> (telecoms and internet), the Foreign Exchange Office.</div>
<h3>4. Professional e-mail</h3>
<ul><li>a serious address (firstname.lastname@…);</li><li>a clear, precise <b>subject</b>;</li><li>a salutation (“Dear Madam/Sir,” / “Dear Mrs Filali,”);</li><li>a short, structured message without mistakes or text-speak;</li><li>a closing and signature (name, programme, group);</li><li>check the <b>attachment</b> (preferably PDF) before sending;</li><li><b>To</b>: main recipient; <b>Cc</b>: visible copy; <b>Bcc</b>: hidden copy.</li></ul>
<h3>5. Personal data and online reputation</h3>
<p>In Morocco, <b>Law 09-08</b> protects personal data, overseen by the <b>CNDP</b> (national data-protection commission). A company collecting data (forms, newsletter, e-commerce site) must inform the person, obtain <b>consent</b>, collect only what is necessary and protect it.</p>
<p>Your <b>online reputation</b> is the image you give on the internet: recruiters often check social media. Take care of your LinkedIn profile, set your privacy settings and think before posting.</p>
<h3>6. Digital tools for e-commerce</h3>
<p>Online-shop platforms (Shopify, WooCommerce), social media (Instagram, TikTok, Facebook) for communication, analytics tools (Google Analytics), e-mailing, online payment (cards, mobile payment) and delivery logistics.</p>`,
      },
      key: { fr: ['HTTPS = connexion chiffrée.', 'Opérateurs : " ", -, OR, site:, filetype:.', 'Vérifier auteur, date, objectif, sources, recoupement.', 'Loi 09-08 et CNDP : consentement et protection des données.'], ar: ['HTTPS = اتصال مشفر.', 'المعاملات: " "، -، OR، site:، filetype:.', 'تأكدي من الكاتب، التاريخ، الهدف، المصادر، المقارنة.', 'القانون 09-08 و CNDP: الموافقة وحماية المعطيات.'], en: ['HTTPS = encrypted connection.', 'Operators: " ", -, OR, site:, filetype:.', 'Check author, date, purpose, evidence, cross-checking.', 'Law 09-08 and CNDP: consent and data protection.'] } },
  ],
  gloss: [
    ['Processeur', 'المعالج', 'Processor (CPU)', { fr: 'Composant qui exécute les calculs.', ar: 'المكون اللي كيدير الحسابات.', en: 'Component that performs calculations.' }],
    ['Mémoire vive', 'الذاكرة الحية', 'RAM', { fr: 'Mémoire temporaire, effacée à l’extinction.', ar: 'ذاكرة مؤقتة كتتمسح ملي كيتطفى الجهاز.', en: 'Temporary memory erased at shutdown.' }],
    ['Octet', 'البايت', 'Byte', { fr: '8 bits ; unité de base du stockage.', ar: '8 بت؛ الوحدة الأساسية ديال التخزين.', en: '8 bits; basic storage unit.' }],
    ['Extension', 'الامتداد', 'File extension', { fr: 'Suffixe qui indique le type de fichier (.pdf, .xlsx).', ar: 'اللاحقة اللي كتبين نوع الملف (.pdf، .xlsx).', en: 'Suffix showing the file type (.pdf, .xlsx).' }],
    ['Cloud', 'السحابة', 'Cloud', { fr: 'Stockage sur des serveurs accessibles par internet.', ar: 'تخزين ف خوادم كنوصلو ليها بالأنترنت.', en: 'Storage on servers reached via the internet.' }],
    ['Hameçonnage', 'التصيد الاحتيالي', 'Phishing', { fr: 'Faux message pour voler des données.', ar: 'رسالة مزورة لسرقة المعطيات.', en: 'Fake message to steal data.' }],
    ['Double authentification', 'المصادقة الثنائية', 'Two-factor authentication', { fr: 'Code supplémentaire en plus du mot de passe.', ar: 'كود إضافي زيادة على كلمة السر.', en: 'Extra code on top of the password.' }],
    ['Style (Word)', 'النمط', 'Style', { fr: 'Ensemble de mises en forme appliqué d’un coup.', ar: 'مجموعة تنسيقات كتطبق دقة وحدة.', en: 'Set of formatting applied in one go.' }],
    ['Cellule', 'الخلية', 'Cell', { fr: 'Croisement d’une colonne et d’une ligne (ex. B3).', ar: 'تقاطع عمود وصف (مثلا B3).', en: 'Intersection of a column and a row (e.g. B3).' }],
    ['Référence absolue', 'المرجع المطلق', 'Absolute reference', { fr: 'Référence fixe avec $ ($A$1), touche F4.', ar: 'مرجع ثابت بـ $ ($A$1)، الزر F4.', en: 'Fixed reference with $ ($A$1), F4 key.' }],
    ['RECHERCHEV', 'دالة البحث العمودي', 'VLOOKUP', { fr: 'Cherche une valeur dans la 1re colonne et renvoie une autre colonne.', ar: 'كتقلب على قيمة ف العمود الأول وكترجع قيمة من عمود آخر.', en: 'Finds a value in the first column and returns another column.' }],
    ['Tableau croisé dynamique', 'الجدول المحوري', 'PivotTable', { fr: 'Outil pour résumer une grande base de données.', ar: 'أداة لتلخيص قاعدة معطيات كبيرة.', en: 'Tool to summarise a large dataset.' }],
    ['URL', 'عنوان الصفحة', 'URL', { fr: 'Adresse d’une page web.', ar: 'عنوان صفحة ويب.', en: 'Address of a web page.' }],
    ['HTTPS', 'HTTPS', 'HTTPS', { fr: 'Protocole sécurisé (chiffré).', ar: 'بروتوكول آمن (مشفر).', en: 'Secure (encrypted) protocol.' }],
    ['E-réputation', 'السمعة الرقمية', 'Online reputation', { fr: 'Image d’une personne ou marque sur internet.', ar: 'صورة شخص ولا ماركة ف الأنترنت.', en: 'Image of a person or brand online.' }],
    ['CNDP', 'اللجنة الوطنية لحماية المعطيات', 'CNDP', { fr: 'Autorité marocaine de protection des données (loi 09-08).', ar: 'السلطة المغربية لحماية المعطيات (القانون 09-08).', en: 'Moroccan data-protection authority (Law 09-08).' }],
  ],
};
