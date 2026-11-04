// Module 1.1.6.1 — Français (techniques d'expression et de communication)
export default {
  id: 'fr', code: '1.1.6.1', em: '✍️', color: '#d1495b', prof: 'HAMMAOUI Abdelkader',
  name: { fr: 'Français', ar: 'اللغة الفرنسية', en: 'French' },
  intro: { fr: "Communiquer efficacement en français à l'écrit et à l'oral dans un contexte universitaire et professionnel : communication, écrits professionnels, grammaire utile, résumé et exposé.", ar: 'التواصل بفعالية بالفرنسية كتابة وشفويا ف الجامعة والمهنة: التواصل، الكتابات المهنية، القواعد المفيدة، التلخيص والعرض.', en: 'Communicate effectively in French, in writing and orally, in academic and professional contexts: communication, business writing, useful grammar, summary and presentation.' },
  chapters: [
    { id: 'fr1', t: { fr: 'La communication et les registres de langue', ar: 'التواصل ومستويات اللغة', en: 'Communication and language registers' },
      sum: { fr: 'Schéma de Jakobson, fonctions du langage, communication verbale et non verbale, registres', ar: 'خطاطة ياكوبسون، وظائف اللغة، التواصل اللفظي وغير اللفظي، المستويات', en: 'Jakobson’s model, language functions, verbal and non-verbal communication, registers' },
      body: {
        fr: `<h3>1. Qu'est-ce que communiquer ?</h3>
<div class="def"><b>Communiquer</b>, c'est transmettre un message à quelqu'un dans le but d'être compris et, souvent, d'obtenir une réaction (informer, convaincre, faire agir).</div>
<h3>2. Le schéma de Jakobson</h3>
{{fig:jakobson}}
<ul><li><b>Émetteur</b> : celui qui envoie le message (ex. une marque).</li><li><b>Récepteur</b> : celui qui le reçoit (le client).</li><li><b>Message</b> : le contenu (une publicité).</li><li><b>Canal</b> : le moyen (Instagram, affiche, radio).</li><li><b>Code</b> : la langue ou les signes utilisés (français, darija, images).</li><li><b>Contexte (référent)</b> : la situation, ce dont on parle.</li></ul>
<p>Il faut ajouter le <b>feed-back</b> (réponse du récepteur) et les <b>bruits</b> (tout ce qui perturbe : bruit réel, mauvaise connexion, mot inconnu, préjugé).</p>
<h3>3. Les fonctions du langage</h3>
<table><tr><th>Fonction</th><th>Centrée sur</th><th>Exemple</th></tr>
<tr><td>Expressive (émotive)</td><td>l'émetteur</td><td>« Je suis ravie de ce stage ! »</td></tr>
<tr><td>Conative (impressive)</td><td>le récepteur</td><td>« Commandez maintenant ! » — typique de la publicité</td></tr>
<tr><td>Référentielle</td><td>le contexte</td><td>« La boutique ouvre à 9 h. »</td></tr>
<tr><td>Phatique</td><td>le canal</td><td>« Allô ? Vous m'entendez ? »</td></tr>
<tr><td>Métalinguistique</td><td>le code</td><td>« Le mot <i>e-commerce</i> signifie… »</td></tr>
<tr><td>Poétique</td><td>le message</td><td>slogans, jeux de mots, rimes</td></tr></table>
<h3>4. Verbal et non verbal</h3>
<p>La communication <b>verbale</b> utilise les mots. La communication <b>non verbale</b> passe par le regard, les gestes, la posture, l'intonation, la tenue vestimentaire. À l'oral, le non-verbal pèse souvent plus que les mots : un sourire et un regard franc inspirent confiance lors d'un entretien.</p>
<h3>5. Les registres de langue</h3>
<table><tr><th>Registre</th><th>Situation</th><th>Exemple</th></tr>
<tr><td><b>Familier</b></td><td>amis, famille</td><td>« T'as vu le prof ? C'est trop cool. »</td></tr>
<tr><td><b>Courant</b></td><td>vie quotidienne, collègues</td><td>« As-tu vu le professeur ? C'est très bien. »</td></tr>
<tr><td><b>Soutenu</b></td><td>écrits officiels, lettres, exposés</td><td>« Avez-vous eu l'occasion de rencontrer le professeur ? »</td></tr></table>
<div class="tip">À l'université et en entreprise, utilise le registre <b>courant</b> à l'oral et <b>soutenu</b> à l'écrit (e-mails aux professeurs, lettres, rapports). On vouvoie les professeurs et les inconnus.</div>
<h3>6. Communiquer en entreprise</h3>
<ul><li><b>Interne</b> : entre salariés (réunions, notes de service, intranet).</li><li><b>Externe</b> : vers les clients, fournisseurs, partenaires (publicité, site web, réseaux sociaux, relations presse).</li><li><b>Formelle</b> (officielle) ou <b>informelle</b> (discussions à la pause).</li></ul>
<p>Pour qu'un message soit efficace, on se pose les questions <b>QQOQCP</b> : Qui ? Quoi ? Où ? Quand ? Comment ? Pourquoi ?</p>`,
        ar: `<h3>1. شنو هو التواصل؟</h3>
<div class="def"><b>التواصل</b> هو نقل رسالة لشخص بهدف الفهم، وغالبا باش نحصلو على رد فعل (الإخبار، الإقناع، الدفع للفعل).</div>
<h3>2. خطاطة ياكوبسون</h3>
{{fig:jakobson}}
<ul><li><b>المرسل</b>: اللي كيرسل الرسالة (مثلا ماركة).</li><li><b>المستقبل</b>: اللي كيتوصل بيها (الزبون).</li><li><b>الرسالة</b>: المحتوى (إشهار).</li><li><b>القناة</b>: الوسيلة (Instagram، ملصق، الراديو).</li><li><b>الرمز</b>: اللغة ولا العلامات المستعملة (الفرنسية، الدارجة، الصور).</li><li><b>السياق (المرجع)</b>: الوضعية، الموضوع.</li></ul>
<p>خاصنا نزيدو <b>رجع الصدى</b> (رد المستقبل) و<b>التشويش</b> (كل حاجة كتعرقل: صداع، اتصال ضعيف، كلمة ما مفهوماش، حكم مسبق).</p>
<h3>3. وظائف اللغة</h3>
<table><tr><th>الوظيفة</th><th>المركز</th><th>مثال</th></tr>
<tr><td>التعبيرية (الانفعالية)</td><td>المرسل</td><td>«Je suis ravie de ce stage !»</td></tr>
<tr><td>الإيعازية (التأثيرية)</td><td>المستقبل</td><td>«Commandez maintenant !» — خاصة بالإشهار</td></tr>
<tr><td>المرجعية</td><td>السياق</td><td>«La boutique ouvre à 9 h.»</td></tr>
<tr><td>الانتباهية</td><td>القناة</td><td>«Allô ? Vous m'entendez ?»</td></tr>
<tr><td>الميتالغوية (الشارحة)</td><td>الرمز</td><td>«Le mot <i>e-commerce</i> signifie…»</td></tr>
<tr><td>الشعرية</td><td>الرسالة</td><td>الشعارات، اللعب بالكلمات، القوافي</td></tr></table>
<h3>4. اللفظي وغير اللفظي</h3>
<p>التواصل <b>اللفظي</b> كيستعمل الكلمات. التواصل <b>غير اللفظي</b> كيدوز بالنظرة، الحركات، الوقفة، النبرة، اللباس. ف الشفوي، غير اللفظي غالبا كيأثر أكثر من الكلمات: ابتسامة ونظرة صادقة كيعطيو الثقة ف المقابلة.</p>
<h3>5. مستويات اللغة</h3>
<table><tr><th>المستوى</th><th>الوضعية</th><th>مثال</th></tr>
<tr><td><b>العامي (familier)</b></td><td>الصحاب، العائلة</td><td>«T'as vu le prof ? C'est trop cool.»</td></tr>
<tr><td><b>العادي (courant)</b></td><td>الحياة اليومية، الزملاء</td><td>«As-tu vu le professeur ? C'est très bien.»</td></tr>
<tr><td><b>الراقي (soutenu)</b></td><td>الكتابات الرسمية، الرسائل، العروض</td><td>«Avez-vous eu l'occasion de rencontrer le professeur ?»</td></tr></table>
<div class="tip">ف الجامعة والمقاولة، استعملي المستوى <b>العادي</b> ف الشفوي و<b>الراقي</b> ف الكتابة (الإيميلات للأساتذة، الرسائل، التقارير). كنخاطبو الأساتذة والناس اللي ما كنعرفوهمش بـ «vous».</div>
<h3>6. التواصل ف المقاولة</h3>
<ul><li><b>الداخلي</b>: بين الأجراء (الاجتماعات، المذكرات، الأنترانيت).</li><li><b>الخارجي</b>: مع الزبناء والموردين والشركاء (الإشهار، الموقع، الشبكات الاجتماعية، العلاقات مع الصحافة).</li><li><b>الرسمي</b> ولا <b>غير الرسمي</b> (الهضرة ف الاستراحة).</li></ul>
<p>باش تكون الرسالة فعالة، كنطرحو أسئلة <b>QQOQCP</b>: شكون؟ آش؟ فين؟ إمتى؟ كيفاش؟ علاش؟</p>`,
        en: `<h3>1. What is communicating?</h3>
<div class="def"><b>Communicating</b> means passing a message to someone in order to be understood and, often, to get a reaction (inform, persuade, prompt action).</div>
<h3>2. Jakobson's model</h3>
{{fig:jakobson}}
<ul><li><b>Sender</b>: who sends the message (e.g. a brand).</li><li><b>Receiver</b>: who gets it (the customer).</li><li><b>Message</b>: the content (an advert).</li><li><b>Channel</b>: the medium (Instagram, poster, radio).</li><li><b>Code</b>: the language or signs used (French, Darija, images).</li><li><b>Context</b>: the situation, the topic.</li></ul>
<p>Add <b>feedback</b> (the receiver's response) and <b>noise</b> (anything that disrupts: real noise, poor connection, unknown word, prejudice).</p>
<h3>3. The functions of language</h3>
<table><tr><th>Function</th><th>Focus</th><th>Example (in French)</th></tr>
<tr><td>Expressive</td><td>sender</td><td>« Je suis ravie de ce stage ! »</td></tr>
<tr><td>Conative</td><td>receiver</td><td>« Commandez maintenant ! » — typical of advertising</td></tr>
<tr><td>Referential</td><td>context</td><td>« La boutique ouvre à 9 h. »</td></tr>
<tr><td>Phatic</td><td>channel</td><td>« Allô ? Vous m'entendez ? »</td></tr>
<tr><td>Metalingual</td><td>code</td><td>« Le mot <i>e-commerce</i> signifie… »</td></tr>
<tr><td>Poetic</td><td>message</td><td>slogans, puns, rhymes</td></tr></table>
<h3>4. Verbal and non-verbal</h3>
<p><b>Verbal</b> communication uses words. <b>Non-verbal</b> communication uses eye contact, gestures, posture, tone of voice, clothing. In speech, non-verbal signals often weigh more than words: a smile and direct eye contact build trust in an interview.</p>
<h3>5. Language registers in French</h3>
<table><tr><th>Register</th><th>Situation</th><th>Example</th></tr>
<tr><td><b>Familier</b> (informal)</td><td>friends, family</td><td>« T'as vu le prof ? C'est trop cool. »</td></tr>
<tr><td><b>Courant</b> (standard)</td><td>daily life, colleagues</td><td>« As-tu vu le professeur ? C'est très bien. »</td></tr>
<tr><td><b>Soutenu</b> (formal)</td><td>official writing, letters, talks</td><td>« Avez-vous eu l'occasion de rencontrer le professeur ? »</td></tr></table>
<div class="tip">At university and at work, use <b>courant</b> when speaking and <b>soutenu</b> in writing (e-mails to teachers, letters, reports). Address teachers and strangers with « vous ».</div>
<h3>6. Communication in companies</h3>
<ul><li><b>Internal</b>: among employees (meetings, memos, intranet).</li><li><b>External</b>: towards customers, suppliers, partners (advertising, website, social media, press relations).</li><li><b>Formal</b> or <b>informal</b> (chats during breaks).</li></ul>
<p>For an effective message, ask the <b>5W1H</b> questions (QQOQCP in French): Who? What? Where? When? How? Why?</p>`,
      },
      key: { fr: ['6 éléments de Jakobson : émetteur, récepteur, message, canal, code, contexte.', '6 fonctions : expressive, conative, référentielle, phatique, métalinguistique, poétique.', 'Registres : familier, courant, soutenu.', 'QQOQCP pour préparer un message.'], ar: ['6 عناصر ديال ياكوبسون: المرسل، المستقبل، الرسالة، القناة، الرمز، السياق.', '6 وظائف: تعبيرية، إيعازية، مرجعية، انتباهية، شارحة، شعرية.', 'المستويات: عامي، عادي، راقي.', 'QQOQCP باش نحضرو رسالة.'], en: ['Jakobson’s 6 elements: sender, receiver, message, channel, code, context.', '6 functions: expressive, conative, referential, phatic, metalingual, poetic.', 'Registers: familier, courant, soutenu.', '5W1H (QQOQCP) to prepare a message.'] } },

    { id: 'fr2', t: { fr: 'Les écrits professionnels', ar: 'الكتابات المهنية', en: 'Professional writing' },
      sum: { fr: 'Lettre administrative et commerciale, e-mail, CV, lettre de motivation', ar: 'الرسالة الإدارية والتجارية، الإيميل، السيرة الذاتية، رسالة التحفيز', en: 'Formal and business letters, e-mail, CV, cover letter' },
      body: {
        fr: `<h3>1. La lettre administrative ou commerciale</h3>
{{fig:lettre}}
<ul><li><b>Expéditeur</b> en haut à gauche : nom, adresse, téléphone, e-mail.</li><li><b>Destinataire</b> à droite : nom, fonction, organisme, adresse.</li><li><b>Lieu et date</b> : « Oujda, le 4 novembre 2026 ».</li><li><b>Objet</b> : résumé en quelques mots (« Demande de stage »).</li><li><b>Formule d'appel</b> : « Madame, Monsieur, » / « Monsieur le Directeur, ».</li><li><b>Corps</b> : en général trois paragraphes — 1) la situation (je / vous), 2) la demande ou le développement, 3) la conclusion.</li><li><b>Formule de politesse</b> et <b>signature</b>.</li></ul>
<h3>2. Les formules utiles</h3>
<table><tr><th>Moment</th><th>Formules</th></tr>
<tr><td>Introduction</td><td>« Suite à notre entretien téléphonique du… », « J'ai l'honneur de solliciter… », « En réponse à votre annonce parue sur… »</td></tr>
<tr><td>Demande</td><td>« Je vous serais reconnaissante de bien vouloir… », « Pourriez-vous m'indiquer… »</td></tr>
<tr><td>Conclusion</td><td>« Dans l'attente de votre réponse, … », « Je reste à votre disposition pour tout renseignement complémentaire. »</td></tr>
<tr><td>Politesse</td><td>« Veuillez agréer, Madame, Monsieur, l'expression de mes salutations distinguées. »</td></tr></table>
<div class="warn">La formule de politesse reprend <b>exactement</b> la formule d'appel : si vous avez écrit « Monsieur le Directeur, », écrivez « Veuillez agréer, Monsieur le Directeur, … ».</div>
<h3>3. L'e-mail professionnel</h3>
<div class="ex"><b>Objet :</b> Absence au TD de comptabilité du 12 novembre<br><br>Madame,<br><br>Je suis étudiante en première année du DUT Marketing et E-Commerce (groupe 1). Je vous informe que je n'ai pas pu assister au TD du mercredi 12 novembre pour raison de santé ; vous trouverez ci-joint mon certificat médical.<br>Pourriez-vous m'indiquer les exercices à préparer pour la prochaine séance ?<br><br>Je vous remercie par avance.<br>Cordialement,<br>Salma B., DUT MEEC – S1</div>
<h3>4. Le CV</h3>
<ul><li><b>Une page</b>, clair et aéré, sans fautes.</li><li><b>État civil / contact</b> : nom, téléphone, e-mail professionnel, ville, lien LinkedIn.</li><li><b>Titre / objectif</b> : « Étudiante en DUT Marketing et E-Commerce, à la recherche d'un stage en marketing digital ».</li><li><b>Formation</b> (de la plus récente à la plus ancienne).</li><li><b>Expériences</b> : stages, petits boulots, projets, bénévolat, avec des verbes d'action (j'ai géré, organisé, créé…).</li><li><b>Compétences</b> : informatiques (Excel, Canva, réseaux sociaux), <b>langues</b> (arabe, français, anglais, amazighe…), qualités.</li><li><b>Centres d'intérêt</b> (courts et vrais).</li></ul>
<h3>5. La lettre de motivation</h3>
<p>Elle accompagne le CV. Structure classique « <b>vous – moi – nous</b> » :</p>
<ol><li><b>Vous</b> : pourquoi cette entreprise m'intéresse (ses valeurs, ses produits, sa réputation).</li><li><b>Moi</b> : ce que j'apporte (formation, compétences, qualités, exemples concrets).</li><li><b>Nous</b> : ce que nous pouvons faire ensemble, et la demande d'entretien.</li></ol>
<div class="tip">Personnalise chaque lettre : un recruteur reconnaît tout de suite une lettre copiée-collée. Une page maximum.</div>`,
        ar: `<h3>1. الرسالة الإدارية ولا التجارية</h3>
{{fig:lettre}}
<ul><li><b>المرسل</b> فوق على اليسار: الاسم، العنوان، التليفون، الإيميل.</li><li><b>المرسل إليه</b> على اليمين: الاسم، الوظيفة، المؤسسة، العنوان.</li><li><b>المكان والتاريخ</b>: «Oujda, le 4 novembre 2026».</li><li><b>الموضوع</b>: ملخص ف شي كلمات («Demande de stage»).</li><li><b>عبارة النداء</b>: «Madame, Monsieur,» / «Monsieur le Directeur,».</li><li><b>المتن</b>: عادة ثلاث فقرات — 1) الوضعية (أنا / أنتم)، 2) الطلب ولا التفصيل، 3) الخاتمة.</li><li><b>عبارة المجاملة</b> و<b>التوقيع</b>.</li></ul>
<h3>2. العبارات المفيدة</h3>
<table><tr><th>اللحظة</th><th>العبارات</th></tr>
<tr><td>المقدمة</td><td>«Suite à notre entretien téléphonique du…»، «J'ai l'honneur de solliciter…»، «En réponse à votre annonce parue sur…»</td></tr>
<tr><td>الطلب</td><td>«Je vous serais reconnaissante de bien vouloir…»، «Pourriez-vous m'indiquer…»</td></tr>
<tr><td>الخاتمة</td><td>«Dans l'attente de votre réponse, …»، «Je reste à votre disposition pour tout renseignement complémentaire.»</td></tr>
<tr><td>المجاملة</td><td>«Veuillez agréer, Madame, Monsieur, l'expression de mes salutations distinguées.»</td></tr></table>
<div class="warn">عبارة المجاملة كتعاود <b>بالضبط</b> عبارة النداء: إلا كتبتي «Monsieur le Directeur,»، كتبي «Veuillez agréer, Monsieur le Directeur, …».</div>
<h3>3. الإيميل المهني</h3>
<div class="ex" dir="ltr"><b>Objet :</b> Absence au TD de comptabilité du 12 novembre<br><br>Madame,<br><br>Je suis étudiante en première année du DUT Marketing et E-Commerce (groupe 1). Je vous informe que je n'ai pas pu assister au TD du mercredi 12 novembre pour raison de santé ; vous trouverez ci-joint mon certificat médical.<br>Pourriez-vous m'indiquer les exercices à préparer pour la prochaine séance ?<br><br>Je vous remercie par avance.<br>Cordialement,<br>Salma B., DUT MEEC – S1</div>
<h3>4. السيرة الذاتية (CV)</h3>
<ul><li><b>صفحة وحدة</b>، واضحة ومنظمة، بلا أخطاء.</li><li><b>المعلومات الشخصية</b>: الاسم، التليفون، إيميل مهني، المدينة، رابط LinkedIn.</li><li><b>العنوان / الهدف</b>: «Étudiante en DUT Marketing et E-Commerce, à la recherche d'un stage en marketing digital».</li><li><b>التكوين</b> (من الأحدث للأقدم).</li><li><b>التجارب</b>: التداريب، الخدمات الصغيرة، المشاريع، التطوع، بأفعال الحركة (gérer، organiser، créer…).</li><li><b>الكفاءات</b>: المعلوميات (Excel، Canva، الشبكات الاجتماعية)، <b>اللغات</b> (العربية، الفرنسية، الإنجليزية، الأمازيغية…)، الصفات.</li><li><b>الاهتمامات</b> (قصيرة وصحيحة).</li></ul>
<h3>5. رسالة التحفيز</h3>
<p>كتجي مع السيرة الذاتية. البنية الكلاسيكية «<b>أنتم – أنا – نحن</b>»:</p>
<ol><li><b>أنتم</b>: علاش هاد المقاولة كتهمني (القيم ديالها، المنتوجات، السمعة).</li><li><b>أنا</b>: آش غادي نزيد (التكوين، الكفاءات، الصفات، أمثلة ملموسة).</li><li><b>نحن</b>: آش نقدرو نديرو مع بعض، وطلب المقابلة.</li></ol>
<div class="tip">خصصي كل رسالة: المشغل كيعرف دغيا الرسالة المنسوخة. صفحة وحدة على الأكثر.</div>`,
        en: `<h3>1. The formal or business letter (French layout)</h3>
{{fig:lettre}}
<ul><li><b>Sender</b> top left: name, address, phone, e-mail.</li><li><b>Recipient</b> on the right: name, position, organisation, address.</li><li><b>Place and date</b>: « Oujda, le 4 novembre 2026 ».</li><li><b>Subject</b> (Objet): a few words (« Demande de stage »).</li><li><b>Salutation</b>: « Madame, Monsieur, » / « Monsieur le Directeur, ».</li><li><b>Body</b>: usually three paragraphs — 1) the situation (me / you), 2) the request or details, 3) the conclusion.</li><li><b>Closing formula</b> and <b>signature</b>.</li></ul>
<h3>2. Useful French phrases</h3>
<table><tr><th>Moment</th><th>Phrases</th></tr>
<tr><td>Opening</td><td>« Suite à notre entretien téléphonique du… », « J'ai l'honneur de solliciter… », « En réponse à votre annonce parue sur… »</td></tr>
<tr><td>Request</td><td>« Je vous serais reconnaissante de bien vouloir… », « Pourriez-vous m'indiquer… »</td></tr>
<tr><td>Ending</td><td>« Dans l'attente de votre réponse, … », « Je reste à votre disposition pour tout renseignement complémentaire. »</td></tr>
<tr><td>Closing</td><td>« Veuillez agréer, Madame, Monsieur, l'expression de mes salutations distinguées. »</td></tr></table>
<div class="warn">The closing formula repeats the salutation <b>exactly</b>: if you wrote « Monsieur le Directeur, », write « Veuillez agréer, Monsieur le Directeur, … ».</div>
<h3>3. A professional e-mail (in French)</h3>
<div class="ex"><b>Objet :</b> Absence au TD de comptabilité du 12 novembre<br><br>Madame,<br><br>Je suis étudiante en première année du DUT Marketing et E-Commerce (groupe 1). Je vous informe que je n'ai pas pu assister au TD du mercredi 12 novembre pour raison de santé ; vous trouverez ci-joint mon certificat médical.<br>Pourriez-vous m'indiquer les exercices à préparer pour la prochaine séance ?<br><br>Je vous remercie par avance.<br>Cordialement,<br>Salma B., DUT MEEC – S1</div>
<h3>4. The CV</h3>
<ul><li><b>One page</b>, clear and airy, no mistakes.</li><li><b>Contact details</b>: name, phone, professional e-mail, city, LinkedIn link.</li><li><b>Headline / objective</b>: “DUT Marketing & E-Commerce student looking for a digital-marketing internship”.</li><li><b>Education</b> (most recent first).</li><li><b>Experience</b>: internships, small jobs, projects, volunteering, with action verbs (managed, organised, created…).</li><li><b>Skills</b>: IT (Excel, Canva, social media), <b>languages</b> (Arabic, French, English, Amazigh…), qualities.</li><li><b>Interests</b> (short and true).</li></ul>
<h3>5. The cover letter</h3>
<p>It goes with the CV. Classic “<b>you – me – us</b>” structure:</p>
<ol><li><b>You</b>: why this company interests me (values, products, reputation).</li><li><b>Me</b>: what I bring (education, skills, qualities, concrete examples).</li><li><b>Us</b>: what we can do together, and a request for an interview.</li></ol>
<div class="tip">Personalise each letter: recruiters spot a copy-paste letter immediately. One page maximum.</div>`,
      },
      key: { fr: ['Lettre : expéditeur, destinataire, lieu/date, objet, appel, corps, politesse, signature.', 'La formule de politesse reprend la formule d’appel.', 'E-mail : objet clair, registre soutenu, signature.', 'Lettre de motivation : vous – moi – nous.'], ar: ['الرسالة: المرسل، المرسل إليه، المكان/التاريخ، الموضوع، النداء، المتن، المجاملة، التوقيع.', 'عبارة المجاملة كتعاود عبارة النداء.', 'الإيميل: موضوع واضح، مستوى راقي، توقيع.', 'رسالة التحفيز: أنتم – أنا – نحن.'], en: ['Letter: sender, recipient, place/date, subject, salutation, body, closing, signature.', 'The closing repeats the salutation.', 'E-mail: clear subject, formal register, signature.', 'Cover letter: you – me – us.'] } },

    { id: 'fr3', t: { fr: 'Grammaire utile, résumé et exposé', ar: 'قواعد مفيدة، التلخيص والعرض', en: 'Useful grammar, summary and presentation' },
      sum: { fr: 'Temps et accords, connecteurs logiques, résumé de texte, prise de parole', ar: 'الأزمنة والتطابق، أدوات الربط، تلخيص النص، أخذ الكلمة', en: 'Tenses and agreement, linking words, summarising, public speaking' },
      body: {
        fr: `<h3>1. Les temps les plus utiles</h3>
<table><tr><th>Temps</th><th>Emploi</th><th>Exemple (verbe <i>vendre</i>)</th></tr>
<tr><td>Présent</td><td>action actuelle, habitude, vérité générale</td><td>je vends, nous vendons</td></tr>
<tr><td>Passé composé</td><td>action passée terminée</td><td>j'ai vendu, elles ont vendu</td></tr>
<tr><td>Imparfait</td><td>description, habitude passée</td><td>je vendais, nous vendions</td></tr>
<tr><td>Futur simple</td><td>action à venir</td><td>je vendrai, vous vendrez</td></tr>
<tr><td>Conditionnel présent</td><td>politesse, hypothèse</td><td>je vendrais, nous vendrions</td></tr>
<tr><td>Subjonctif présent</td><td>après « il faut que », un souhait</td><td>que je vende, que nous vendions</td></tr></table>
<p><b>Terminaisons du présent</b> : verbes en -er : -e, -es, -e, -ons, -ez, -ent ; verbes en -ir (finir) : -is, -is, -it, -issons, -issez, -issent.</p>
<p><b>Futur</b> : infinitif + -ai, -as, -a, -ons, -ez, -ont (je commanderai). <b>Conditionnel</b> : infinitif + -ais, -ais, -ait, -ions, -iez, -aient (je commanderais).</p>
<h3>2. Les accords</h3>
<ul><li><b>Participe passé avec être</b> : il s'accorde avec le sujet. « Les commandes sont <b>arrivées</b>. »</li>
<li><b>Participe passé avec avoir</b> : il ne s'accorde pas avec le sujet, mais avec le COD s'il est placé <b>avant</b>. « Les offres que j'ai <b>reçues</b>. » / « J'ai <b>reçu</b> les offres. »</li>
<li><b>Infinitif ou participe ?</b> Remplace par <i>vendre / vendu</i> : « Je vais <i>envoyer</i> (vendre) » ; « J'ai <i>envoyé</i> (vendu) ».</li>
<li><b>Homophones</b> : a / à ; et / est ; son / sont ; ces / ses / c'est / s'est ; ou / où.</li></ul>
<h3>3. Les connecteurs logiques</h3>
<table><tr><th>Relation</th><th>Connecteurs</th></tr>
<tr><td>Addition</td><td>de plus, en outre, par ailleurs, également</td></tr>
<tr><td>Cause</td><td>car, parce que, puisque, en raison de, grâce à</td></tr>
<tr><td>Conséquence</td><td>donc, ainsi, c'est pourquoi, par conséquent</td></tr>
<tr><td>Opposition</td><td>mais, cependant, pourtant, en revanche, alors que</td></tr>
<tr><td>But</td><td>afin de, pour que, dans le but de</td></tr>
<tr><td>Illustration</td><td>par exemple, notamment, ainsi</td></tr>
<tr><td>Conclusion</td><td>enfin, en conclusion, en somme, pour conclure</td></tr></table>
<h3>4. Résumer un texte</h3>
<ol><li>Lire le texte deux fois et repérer le <b>thème</b> et l'<b>idée principale</b>.</li><li>Souligner les idées essentielles et les connecteurs (ils montrent la structure).</li><li>Supprimer exemples, répétitions et détails.</li><li>Reformuler <b>avec ses propres mots</b>, en respectant l'ordre et la logique du texte.</li><li>Respecter le nombre de mots demandé (souvent le quart du texte, ± 10 %).</li></ol>
<div class="warn">Dans un résumé, on ne donne <b>pas son avis</b> et on n'utilise pas « l'auteur dit que » : on résume comme si on était l'auteur.</div>
<h3>5. Réussir un exposé oral</h3>
<ul><li><b>Préparer</b> : plan clair (introduction, 2–3 parties, conclusion), fiches avec mots-clés, répétition chronométrée.</li><li><b>Introduction</b> : accroche (question, chiffre, anecdote), présentation du sujet, annonce du plan.</li><li><b>Pendant</b> : regarder le public, parler lentement et fort, ne pas lire ses notes, utiliser les transitions (« Après avoir vu…, nous allons maintenant… »).</li><li><b>Conclusion</b> : résumer les idées et ouvrir sur une question ; remercier ; répondre aux questions calmement.</li></ul>`,
        ar: `<h3>1. الأزمنة الأكثر استعمالا</h3>
<table><tr><th>الزمن</th><th>الاستعمال</th><th>مثال (الفعل <i>vendre</i>)</th></tr>
<tr><td>Présent (الحاضر)</td><td>فعل حالي، عادة، حقيقة عامة</td><td>je vends, nous vendons</td></tr>
<tr><td>Passé composé (الماضي المركب)</td><td>فعل ماضي تكمل</td><td>j'ai vendu, elles ont vendu</td></tr>
<tr><td>Imparfait (الماضي الناقص)</td><td>الوصف، عادة ف الماضي</td><td>je vendais, nous vendions</td></tr>
<tr><td>Futur simple (المستقبل)</td><td>فعل غادي يوقع</td><td>je vendrai, vous vendrez</td></tr>
<tr><td>Conditionnel présent (الشرطي)</td><td>اللباقة، الافتراض</td><td>je vendrais, nous vendrions</td></tr>
<tr><td>Subjonctif présent</td><td>من بعد «il faut que»، الرغبة</td><td>que je vende, que nous vendions</td></tr></table>
<p><b>نهايات الحاضر</b>: الأفعال -er: -e، -es، -e، -ons، -ez، -ent؛ الأفعال -ir (finir): -is، -is، -it، -issons، -issez، -issent.</p>
<p><b>المستقبل</b>: المصدر + -ai، -as، -a، -ons، -ez، -ont (je commanderai). <b>الشرطي</b>: المصدر + -ais، -ais، -ait، -ions، -iez، -aient (je commanderais).</p>
<h3>2. التطابق</h3>
<ul><li><b>اسم المفعول مع être</b>: كيتطابق مع الفاعل. «Les commandes sont <b>arrivées</b>.»</li>
<li><b>اسم المفعول مع avoir</b>: ما كيتطابقش مع الفاعل، ولكن مع المفعول به المباشر إلا جا <b>قبل</b>. «Les offres que j'ai <b>reçues</b>.» / «J'ai <b>reçu</b> les offres.»</li>
<li><b>المصدر ولا اسم المفعول؟</b> بدلي بـ <i>vendre / vendu</i>: «Je vais <i>envoyer</i> (vendre)»؛ «J'ai <i>envoyé</i> (vendu)».</li>
<li><b>الكلمات المتشابهة ف النطق</b>: a / à؛ et / est؛ son / sont؛ ces / ses / c'est / s'est؛ ou / où.</li></ul>
<h3>3. أدوات الربط المنطقي</h3>
<table><tr><th>العلاقة</th><th>الأدوات</th></tr>
<tr><td>الإضافة</td><td>de plus, en outre, par ailleurs, également</td></tr>
<tr><td>السبب</td><td>car, parce que, puisque, en raison de, grâce à</td></tr>
<tr><td>النتيجة</td><td>donc, ainsi, c'est pourquoi, par conséquent</td></tr>
<tr><td>التعارض</td><td>mais, cependant, pourtant, en revanche, alors que</td></tr>
<tr><td>الهدف</td><td>afin de, pour que, dans le but de</td></tr>
<tr><td>التمثيل</td><td>par exemple, notamment, ainsi</td></tr>
<tr><td>الخاتمة</td><td>enfin, en conclusion, en somme, pour conclure</td></tr></table>
<h3>4. تلخيص نص</h3>
<ol><li>قراي النص جوج مرات وحددي <b>الموضوع</b> و<b>الفكرة الأساسية</b>.</li><li>سطري الأفكار الأساسية وأدوات الربط (كيبينو البنية).</li><li>حيدي الأمثلة والتكرار والتفاصيل.</li><li>عاودي الصياغة <b>بكلماتك</b>، مع احترام الترتيب والمنطق ديال النص.</li><li>احترمي عدد الكلمات المطلوب (غالبا ربع النص، ± 10 %).</li></ol>
<div class="warn">ف التلخيص <b>ما كنعطيوش الرأي</b> وما كنستعملوش «l'auteur dit que»: كنلخصو بحال إلا حنا الكاتب.</div>
<h3>5. نجاح العرض الشفوي</h3>
<ul><li><b>التحضير</b>: تصميم واضح (مقدمة، 2–3 أجزاء، خاتمة)، بطاقات بالكلمات المفاتيح، تمرين بالوقت.</li><li><b>المقدمة</b>: جملة جذابة (سؤال، رقم، قصة)، تقديم الموضوع، الإعلان على التصميم.</li><li><b>ف الوقت</b>: شوفي ف الجمهور، هضري بشوية وبصوت عالي، ما تقرايش الأوراق، استعملي الانتقالات («Après avoir vu…, nous allons maintenant…»).</li><li><b>الخاتمة</b>: لخصي الأفكار وفتحي على سؤال؛ اشكري؛ جاوبي على الأسئلة بهدوء.</li></ul>`,
        en: `<h3>1. The most useful French tenses</h3>
<table><tr><th>Tense</th><th>Use</th><th>Example (<i>vendre</i>)</th></tr>
<tr><td>Présent</td><td>current action, habit, general truth</td><td>je vends, nous vendons</td></tr>
<tr><td>Passé composé</td><td>completed past action</td><td>j'ai vendu, elles ont vendu</td></tr>
<tr><td>Imparfait</td><td>description, past habit</td><td>je vendais, nous vendions</td></tr>
<tr><td>Futur simple</td><td>future action</td><td>je vendrai, vous vendrez</td></tr>
<tr><td>Conditionnel présent</td><td>politeness, hypothesis</td><td>je vendrais, nous vendrions</td></tr>
<tr><td>Subjonctif présent</td><td>after « il faut que », wishes</td><td>que je vende, que nous vendions</td></tr></table>
<p><b>Present endings</b>: -er verbs: -e, -es, -e, -ons, -ez, -ent; -ir verbs (finir): -is, -is, -it, -issons, -issez, -issent.</p>
<p><b>Future</b>: infinitive + -ai, -as, -a, -ons, -ez, -ont (je commanderai). <b>Conditional</b>: infinitive + -ais, -ais, -ait, -ions, -iez, -aient (je commanderais).</p>
<h3>2. Agreement</h3>
<ul><li><b>Past participle with être</b>: agrees with the subject. « Les commandes sont <b>arrivées</b>. »</li>
<li><b>Past participle with avoir</b>: does not agree with the subject, but with the direct object if it comes <b>before</b>. « Les offres que j'ai <b>reçues</b>. » / « J'ai <b>reçu</b> les offres. »</li>
<li><b>Infinitive or participle?</b> Replace with <i>vendre / vendu</i>: « Je vais <i>envoyer</i> (vendre) »; « J'ai <i>envoyé</i> (vendu) ».</li>
<li><b>Homophones</b>: a / à; et / est; son / sont; ces / ses / c'est / s'est; ou / où.</li></ul>
<h3>3. Linking words</h3>
<table><tr><th>Relation</th><th>Connectors</th></tr>
<tr><td>Addition</td><td>de plus, en outre, par ailleurs, également</td></tr>
<tr><td>Cause</td><td>car, parce que, puisque, en raison de, grâce à</td></tr>
<tr><td>Consequence</td><td>donc, ainsi, c'est pourquoi, par conséquent</td></tr>
<tr><td>Contrast</td><td>mais, cependant, pourtant, en revanche, alors que</td></tr>
<tr><td>Purpose</td><td>afin de, pour que, dans le but de</td></tr>
<tr><td>Example</td><td>par exemple, notamment, ainsi</td></tr>
<tr><td>Conclusion</td><td>enfin, en conclusion, en somme, pour conclure</td></tr></table>
<h3>4. Summarising a text</h3>
<ol><li>Read the text twice; identify the <b>topic</b> and <b>main idea</b>.</li><li>Underline key ideas and connectors (they show the structure).</li><li>Remove examples, repetitions and details.</li><li>Rephrase <b>in your own words</b>, keeping the order and logic.</li><li>Respect the word count (often a quarter of the text, ± 10%).</li></ol>
<div class="warn">In a French <i>résumé</i> you do <b>not give your opinion</b> and do not write « l'auteur dit que »: you summarise as if you were the author.</div>
<h3>5. Giving a good oral presentation</h3>
<ul><li><b>Prepare</b>: clear outline (introduction, 2–3 parts, conclusion), cue cards with keywords, timed rehearsal.</li><li><b>Introduction</b>: a hook (question, figure, anecdote), the topic, the outline.</li><li><b>During</b>: look at the audience, speak slowly and loudly, don't read, use transitions (« Après avoir vu…, nous allons maintenant… »).</li><li><b>Conclusion</b>: sum up and open with a question; thank the audience; answer questions calmly.</li></ul>`,
      },
      key: { fr: ['Futur : infinitif + -ai… ; conditionnel : infinitif + -ais…', 'PP avec être : accord avec le sujet ; avec avoir : avec le COD placé avant.', 'Connecteurs : cause, conséquence, opposition, but…', 'Résumé : ses propres mots, sans avis, ordre du texte.'], ar: ['المستقبل: المصدر + -ai…؛ الشرطي: المصدر + -ais…', 'اسم المفعول مع être: مع الفاعل؛ مع avoir: مع المفعول به اللي قبل.', 'أدوات الربط: السبب، النتيجة، التعارض، الهدف…', 'التلخيص: بكلماتك، بلا رأي، بترتيب النص.'], en: ['Future: infinitive + -ai…; conditional: infinitive + -ais…', 'PP with être agrees with subject; with avoir, with a preceding direct object.', 'Connectors: cause, consequence, contrast, purpose…', 'Summary: own words, no opinion, text order.'] } },
  ],
  gloss: [
    ['Émetteur', 'المرسل', 'Sender', { fr: 'Celui qui envoie le message.', ar: 'اللي كيرسل الرسالة.', en: 'The one who sends the message.' }],
    ['Récepteur', 'المستقبل', 'Receiver', { fr: 'Celui qui reçoit le message.', ar: 'اللي كيتوصل بالرسالة.', en: 'The one who receives the message.' }],
    ['Canal', 'القناة', 'Channel', { fr: 'Moyen par lequel passe le message.', ar: 'الوسيلة اللي كتدوز منها الرسالة.', en: 'Medium carrying the message.' }],
    ['Fonction conative', 'الوظيفة الإيعازية', 'Conative function', { fr: 'Le message cherche à faire agir le récepteur (publicité).', ar: 'الرسالة كتقلب تخلي المستقبل يدير فعل (الإشهار).', en: 'The message tries to make the receiver act (advertising).' }],
    ['Registre soutenu', 'المستوى الراقي', 'Formal register', { fr: 'Langue soignée des écrits officiels.', ar: 'لغة معتنى بيها ديال الكتابات الرسمية.', en: 'Careful language of official writing.' }],
    ['Objet', 'الموضوع', 'Subject line', { fr: 'Résumé en quelques mots du but de la lettre ou de l’e-mail.', ar: 'ملخص ف شي كلمات ديال هدف الرسالة ولا الإيميل.', en: 'A few words summarising the letter or e-mail.' }],
    ['Formule de politesse', 'عبارة المجاملة', 'Closing formula', { fr: 'Phrase finale de courtoisie d’une lettre.', ar: 'الجملة اللبقة ف آخر الرسالة.', en: 'Polite final sentence of a letter.' }],
    ['Lettre de motivation', 'رسالة التحفيز', 'Cover letter', { fr: 'Lettre qui accompagne le CV : vous – moi – nous.', ar: 'رسالة كتجي مع السيرة الذاتية: أنتم – أنا – نحن.', en: 'Letter with the CV: you – me – us.' }],
    ['Connecteur logique', 'أداة الربط المنطقي', 'Linking word', { fr: 'Mot qui exprime une relation (cause, opposition…).', ar: 'كلمة كتعبر على علاقة (سبب، تعارض…).', en: 'Word expressing a relation (cause, contrast…).' }],
    ['Résumé', 'التلخيص', 'Summary', { fr: 'Reformulation courte et fidèle d’un texte, sans avis.', ar: 'إعادة صياغة قصيرة وأمينة للنص بلا رأي.', en: 'Short faithful rewording of a text, without opinion.' }],
    ['Passé composé', 'الماضي المركب', 'Passé composé', { fr: 'Auxiliaire avoir/être + participe passé.', ar: 'الفعل المساعد avoir/être + اسم المفعول.', en: 'Auxiliary avoir/être + past participle.' }],
    ['Accroche', 'الجملة الجذابة', 'Hook', { fr: 'Phrase qui capte l’attention au début d’un exposé.', ar: 'جملة كتجلب الانتباه ف بداية العرض.', en: 'Opening line that grabs attention.' }],
  ],
};
