// تعميق الدروس: Management + Économie
const Q = (q, a) => `<details class="qa"><summary>${q}</summary><p>${a}</p></details>`;
export default {
  mgt1: {
    fr: `<h3>📝 Exercice corrigé : analyser une entreprise</h3>
<div class="ex"><b>Énoncé.</b> « Oriental Dates » est une SARL de Berkane (35 salariés) qui conditionne et vend des dattes et des agrumes. En 2026, son chiffre d'affaires est de 14 millions de DH ; elle a acheté pour 8,5 millions de DH de fruits, d'emballages, d'énergie et de transport. Elle veut vendre en ligne en Europe.<br>1) Classe l'entreprise (taille, secteur, forme juridique). 2) Calcule sa valeur ajoutée. 3) Cite 4 parties prenantes et leurs attentes. 4) Fais un mini-PESTEL de son projet.</div>
<ol><li><b>Classement</b> : PME (35 salariés), secteur <b>secondaire</b> (transformation et conditionnement) avec une activité commerciale (tertiaire) ; SARL → responsabilité limitée aux apports.</li>
<li><b>VA</b> = 14 000 000 − 8 500 000 = <b>5 500 000 DH</b>. Elle sert à payer les salaires, les impôts, les intérêts des emprunts et à rémunérer les associés ; le reste est réinvesti.</li>
<li><b>Parties prenantes</b> : salariés (salaires, sécurité de l'emploi) ; agriculteurs fournisseurs (prix juste, paiement rapide) ; clients européens (qualité, traçabilité, livraison) ; banque (remboursement) ; État (impôts, emplois, exportations).</li>
<li><b>PESTEL</b> : P = accords commerciaux Maroc–UE ; E = taux de change du dirham, coûts du transport ; S = mode des produits naturels ; T = plateformes e-commerce, paiement international ; E = sécheresse qui réduit les récoltes ; L = normes sanitaires européennes, étiquetage.</li></ol>
<h3>⚠️ Erreurs fréquentes</h3>
<ul><li>Confondre <b>chiffre d'affaires</b> et <b>bénéfice</b> : le CA est le total des ventes, pas ce qui reste à la fin.</li><li>Oublier que la valeur ajoutée retire seulement les <b>consommations intermédiaires</b> (pas les salaires).</li><li>Mettre un facteur dans la mauvaise lettre du PESTEL : une loi est « L », une décision du gouvernement est souvent « P ».</li><li>Dire qu'en SARL l'associé est responsable sur ses biens personnels (c'est faux : limité aux apports).</li></ul>
<h3>❓ Questions de cours</h3>
${Q("Quelle différence entre micro-environnement et macro-environnement ?", "Le micro-environnement est l'environnement proche avec lequel l'entreprise est en contact direct (clients, fournisseurs, concurrents, banques). Le macro-environnement regroupe les grandes tendances générales (politiques, économiques, sociales, technologiques, écologiques, légales) que l'entreprise ne contrôle pas.")}
${Q("Pourquoi dit-on que l'entreprise est un « système ouvert » ?", "Parce qu'elle échange en permanence avec son environnement : elle reçoit des ressources (matières, capitaux, travail, informations) et fournit des produits, des salaires, des impôts. Elle doit s'adapter aux changements extérieurs pour survivre.")}
${Q("Citez trois formes juridiques au Maroc et leur principale différence.", "Entreprise individuelle (une personne, responsabilité illimitée), SARL (1 à 50 associés, responsabilité limitée aux apports), SA (au moins 5 actionnaires, responsabilité limitée, adaptée aux grandes entreprises).")}`,
    ar: `<h3>📝 تمرين محلول: تحليل مقاولة</h3>
<div class="ex"><b>النص.</b> «Oriental Dates» هي SARL ف بركان (35 أجير) كتعلب وتبيع التمر والحوامض. ف 2026، رقم المعاملات ديالها 14 مليون درهم؛ وشرات بـ 8,5 مليون درهم فواكه وتعليب وطاقة ونقل. باغية تبيع عبر الأنترنت ف أوروبا.<br>1) صنفي المقاولة (الحجم، القطاع، الشكل القانوني). 2) احسبي القيمة المضافة. 3) ذكري 4 أطراف معنية والانتظارات ديالهم. 4) ديري PESTEL صغير للمشروع.</div>
<ol><li><b>التصنيف</b>: مقاولة صغرى ومتوسطة (35 أجير)، القطاع <b>الثانوي</b> (التحويل والتعليب) مع نشاط تجاري (ثالث)؛ SARL ← المسؤولية محدودة ف المساهمات.</li>
<li><b>القيمة المضافة</b> = 14 000 000 − 8 500 000 = <b>5 500 000 درهم</b>. كتخلص بيها الأجور والضرائب وفوائد القروض وكتكافئ الشركاء؛ والباقي كيتعاود يتستثمر.</li>
<li><b>الأطراف المعنية</b>: الأجراء (الأجر، استقرار الخدمة)؛ الفلاحة الموردين (ثمن عادل، أداء سريع)؛ الزبناء الأوروبيين (الجودة، التتبع، التوصيل)؛ البنك (التسديد)؛ الدولة (الضرائب، الشغل، الصادرات).</li>
<li><b>PESTEL</b>: P = الاتفاقيات التجارية المغرب–الاتحاد الأوروبي؛ E = سعر صرف الدرهم، تكاليف النقل؛ S = موضة المنتوجات الطبيعية؛ T = منصات التجارة الإلكترونية، الأداء الدولي؛ E = الجفاف اللي كينقص المحاصيل؛ L = المعايير الصحية الأوروبية، التعليم على المنتوجات.</li></ol>
<h3>⚠️ أخطاء شائعة</h3>
<ul><li>الخلط بين <b>رقم المعاملات</b> و<b>الربح</b>: رقم المعاملات هو مجموع المبيعات، ماشي اللي بقا ف الأخير.</li><li>النسيان بلي القيمة المضافة كتنقص غير <b>الاستهلاكات الوسيطة</b> (ماشي الأجور).</li><li>تحطي عامل ف الحرف الغالط ف PESTEL: القانون هو «L»، وقرار الحكومة غالبا «P».</li><li>تقولي بلي ف SARL الشريك مسؤول على الممتلكات الشخصية ديالو (غالط: محدودة ف المساهمات).</li></ul>
<h3>❓ أسئلة الدرس</h3>
${Q("شنو الفرق بين المحيط الخاص والمحيط العام؟", "المحيط الخاص هو المحيط القريب اللي المقاولة عندها اتصال مباشر معاه (الزبناء، الموردين، المنافسين، الأبناك). المحيط العام فيه التوجهات الكبرى (السياسية، الاقتصادية، الاجتماعية، التكنولوجية، البيئية، القانونية) اللي المقاولة ما كتتحكمش فيها.")}
${Q("علاش كنقولو المقاولة «نظام مفتوح»؟", "حيت ديما كتتبادل مع المحيط ديالها: كتاخد موارد (مواد، رأسمال، عمل، معلومات) وكتعطي منتوجات وأجور وضرائب. خاصها تتكيف مع التغيرات الخارجية باش تبقى.")}
${Q("ذكري ثلاث أشكال قانونية ف المغرب والفرق الأساسي بيناتهم.", "المقاولة الفردية (شخص واحد، مسؤولية غير محدودة)، SARL (من 1 حتى 50 شريك، مسؤولية محدودة ف المساهمات)، SA (على الأقل 5 مساهمين، مسؤولية محدودة، مناسبة للمقاولات الكبرى).")}`,
    en: `<h3>📝 Worked exercise: analysing a company</h3>
<div class="ex"><b>Task.</b> “Oriental Dates” is a SARL in Berkane (35 employees) that packs and sells dates and citrus fruit. In 2026 its turnover is 14 million MAD; it bought 8.5 million MAD of fruit, packaging, energy and transport. It wants to sell online in Europe.<br>1) Classify the company (size, sector, legal form). 2) Compute its value added. 3) Name 4 stakeholders and their expectations. 4) Draw up a mini-PESTEL of the project.</div>
<ol><li><b>Classification</b>: SME (35 employees), <b>secondary</b> sector (processing and packing) with a commercial (tertiary) activity; SARL → liability limited to contributions.</li>
<li><b>Value added</b> = 14,000,000 − 8,500,000 = <b>5,500,000 MAD</b>. It pays wages, taxes, loan interest and rewards the partners; the rest is reinvested.</li>
<li><b>Stakeholders</b>: employees (pay, job security); farmer suppliers (fair price, quick payment); European customers (quality, traceability, delivery); bank (repayment); State (taxes, jobs, exports).</li>
<li><b>PESTEL</b>: P = Morocco–EU trade agreements; E = dirham exchange rate, transport costs; S = fashion for natural products; T = e-commerce platforms, international payment; E = drought reducing harvests; L = EU health standards, labelling.</li></ol>
<h3>⚠️ Common mistakes</h3>
<ul><li>Confusing <b>turnover</b> with <b>profit</b>: turnover is total sales, not what remains at the end.</li><li>Forgetting that value added only subtracts <b>intermediate consumption</b> (not wages).</li><li>Putting a factor under the wrong PESTEL letter: a law is “L”; a government decision is often “P”.</li><li>Saying a SARL partner is liable with personal assets (wrong: limited to contributions).</li></ul>
<h3>❓ Review questions</h3>
${Q("What is the difference between the micro- and macro-environment?", "The micro-environment is the close environment the firm deals with directly (customers, suppliers, competitors, banks). The macro-environment covers broad trends (political, economic, social, technological, environmental, legal) that the firm does not control.")}
${Q("Why is a company called an “open system”?", "Because it constantly exchanges with its environment: it receives resources (materials, capital, labour, information) and provides products, wages and taxes. It must adapt to external change to survive.")}
${Q("Name three Moroccan legal forms and their main difference.", "Sole proprietorship (one person, unlimited liability), SARL (1–50 partners, liability limited to contributions), SA (at least 5 shareholders, limited liability, suited to large firms).")}`,
  },
  mgt2: {
    fr: `<h3>📝 Exercice corrigé : appliquer le PODC</h3>
<div class="ex"><b>Énoncé.</b> Tu es responsable d'un petit groupe d'étudiants qui organise un salon de l'e-commerce à l'EST Oujda dans deux mois. Décris ce que tu fais pour chacune des quatre fonctions du management et formule un objectif SMART.</div>
<ol><li><b>Planifier</b> : fixer l'objectif, le budget (ex. 15 000 DH de sponsors), la date, le programme ; établir un rétroplanning (J−60 : sponsors, J−30 : intervenants, J−15 : communication, J−2 : installation).</li>
<li><b>Organiser</b> : répartir les rôles (sponsoring, logistique, communication, accueil) ; préciser qui décide quoi ; créer un tableau de suivi partagé.</li>
<li><b>Diriger</b> : motiver l'équipe, organiser une réunion hebdomadaire, communiquer clairement, régler les conflits, féliciter.</li>
<li><b>Contrôler</b> : suivre des indicateurs (nombre d'inscrits, budget dépensé / prévu, nombre de stands) ; comparer aux objectifs et corriger (relancer la communication si les inscriptions sont faibles).</li></ol>
<p><b>Objectif SMART</b> : « Réunir 300 visiteurs et 10 entreprises exposantes le samedi 13 février à l'EST, avec un budget de 15 000 DH financé par des sponsors. »</p>
<h3>⚠️ Erreurs fréquentes</h3>
<ul><li>Confondre <b>efficacité</b> (atteindre l'objectif) et <b>efficience</b> (l'atteindre avec peu de moyens).</li><li>Écrire un objectif sans chiffre ou sans date : il n'est alors ni mesurable ni temporellement défini.</li><li>Oublier que le contrôle n'est pas une sanction : il sert à corriger et à relancer le cycle.</li><li>Mélanger les rôles de Mintzberg : « porte-parole » = communiquer vers l'extérieur ; « diffuseur » = vers l'intérieur.</li></ul>
<h3>❓ Questions de cours</h3>
${Q("Quelles sont les cinq activités de l'administration selon Fayol ?", "Prévoir, organiser, commander, coordonner et contrôler. Aujourd'hui, on les résume en quatre fonctions : planifier, organiser, diriger, contrôler (PODC).")}
${Q("Donnez les trois familles de rôles de Mintzberg avec un exemple chacune.", "Rôles interpersonnels (leader : motiver son équipe), rôles informationnels (porte-parole : présenter les résultats à la presse), rôles décisionnels (négociateur : négocier un contrat avec un fournisseur).")}
${Q("Pourquoi le management situationnel est-il utile ?", "Parce qu'aucun style de direction n'est bon dans toutes les situations : avec une équipe débutante, il faut diriger et expliquer ; avec une équipe expérimentée et motivée, on peut déléguer.")}`,
    ar: `<h3>📝 تمرين محلول: تطبيق PODC</h3>
<div class="ex"><b>النص.</b> نتي المسؤولة على مجموعة صغيرة ديال الطلبة كتنظم معرض التجارة الإلكترونية ف EST وجدة من هنا جوج شهور. وصفي شنو غادي ديري ف كل وظيفة من الوظائف الأربع وصيغي هدف SMART.</div>
<ol><li><b>التخطيط</b>: تحديد الهدف، الميزانية (مثلا 15 000 درهم من المحتضنين)، التاريخ، البرنامج؛ جدول زمني عكسي (J−60: المحتضنين، J−30: المتدخلين، J−15: التواصل، J−2: التجهيز).</li>
<li><b>التنظيم</b>: توزيع الأدوار (الاحتضان، اللوجيستيك، التواصل، الاستقبال)؛ تحديد شكون كيقرر فآش؛ جدول تتبع مشترك.</li>
<li><b>التوجيه</b>: تحفيز الفريق، اجتماع أسبوعي، تواصل واضح، حل النزاعات، التهنئة.</li>
<li><b>المراقبة</b>: تتبع المؤشرات (عدد المسجلين، الميزانية المصروفة / المتوقعة، عدد الأروقة)؛ المقارنة مع الأهداف والتصحيح (نعاودو التواصل إلا كانو التسجيلات قلال).</li></ol>
<p><b>هدف SMART</b>: «نجمعو 300 زائر و10 مقاولات عارضة نهار السبت 13 فبراير ف EST، بميزانية 15 000 درهم من المحتضنين.»</p>
<h3>⚠️ أخطاء شائعة</h3>
<ul><li>الخلط بين <b>الفعالية</b> (الوصول للهدف) و<b>النجاعة</b> (الوصول ليه بوسائل قليلة).</li><li>كتابة هدف بلا رقم ولا تاريخ: ما كيكونش قابل للقياس ولا محدد ف الزمن.</li><li>النسيان بلي المراقبة ماشي عقاب: كتصلح للتصحيح وتعاود تبدا الدورة.</li><li>الخلط ف أدوار مينتزبرغ: «الناطق الرسمي» = التواصل مع الخارج؛ «الناشر» = مع الداخل.</li></ul>
<h3>❓ أسئلة الدرس</h3>
${Q("شنو هوما الأنشطة الخمسة ديال الإدارة حسب فايول؟", "التوقع، التنظيم، الأمر، التنسيق والمراقبة. اليوم كنلخصوهم ف أربع وظائف: التخطيط، التنظيم، التوجيه، المراقبة (PODC).")}
${Q("عطي العائلات الثلاث ديال أدوار مينتزبرغ مع مثال لكل وحدة.", "أدوار العلاقات الشخصية (القائد: تحفيز الفريق)، أدوار إعلامية (الناطق الرسمي: تقديم النتائج للصحافة)، أدوار قرارية (المفاوض: التفاوض على عقد مع مورد).")}
${Q("علاش التسيير الظرفي مفيد؟", "حيت ما كاينش نمط قيادة مزيان ف جميع الوضعيات: مع فريق مبتدئ خاص التوجيه والشرح؛ ومع فريق عندو تجربة ومحفز نقدرو نفوضو.")}`,
    en: `<h3>📝 Worked exercise: applying POLC</h3>
<div class="ex"><b>Task.</b> You lead a small student team organising an e-commerce fair at EST Oujda in two months. Describe what you do for each of the four management functions and write a SMART objective.</div>
<ol><li><b>Plan</b>: set the objective, budget (e.g. 15,000 MAD from sponsors), date and programme; build a backward schedule (D−60: sponsors, D−30: speakers, D−15: communication, D−2: set-up).</li>
<li><b>Organise</b>: share roles (sponsorship, logistics, communication, welcome); define who decides what; create a shared tracking sheet.</li>
<li><b>Lead</b>: motivate the team, hold a weekly meeting, communicate clearly, resolve conflicts, give praise.</li>
<li><b>Control</b>: track indicators (registrations, budget spent vs planned, number of stands); compare with objectives and correct (boost communication if registrations are low).</li></ol>
<p><b>SMART objective</b>: “Bring together 300 visitors and 10 exhibiting companies on Saturday 13 February at the EST, with a 15,000 MAD budget funded by sponsors.”</p>
<h3>⚠️ Common mistakes</h3>
<ul><li>Confusing <b>effectiveness</b> (reaching the goal) with <b>efficiency</b> (reaching it with few resources).</li><li>Writing an objective without a figure or a date: it is then neither measurable nor time-bound.</li><li>Forgetting that control is not punishment: it is for correcting and restarting the cycle.</li><li>Mixing Mintzberg's roles: “spokesperson” = external communication; “disseminator” = internal.</li></ul>
<h3>❓ Review questions</h3>
${Q("What are Fayol's five administrative activities?", "Forecasting, organising, commanding, coordinating and controlling — today summarised as plan, organise, lead, control (POLC).")}
${Q("Give Mintzberg's three role families with one example each.", "Interpersonal (leader: motivating the team), informational (spokesperson: presenting results to the press), decisional (negotiator: negotiating a supplier contract).")}
${Q("Why is situational leadership useful?", "Because no style works in every situation: a beginner team needs direction and explanation; an experienced, motivated team can be given delegation.")}`,
  },
  mgt3: {
    fr: `<h3>📝 Exercice corrigé : reconnaître les théories</h3>
<div class="ex"><b>Énoncé.</b> Pour chaque situation, indique l'auteur ou la théorie : a) une usine chronomètre chaque geste et paie à la pièce ; b) une banque applique des procédures écrites identiques dans toutes ses agences ; c) après une augmentation de salaire, les employés ne sont pas plus motivés, mais une mission valorisante les motive ; d) un chef pense que ses employés sont paresseux et les surveille sans cesse ; e) une entreprise organise des activités d'équipe et écoute ses salariés, la productivité augmente.</div>
<ol><li>a) <b>Taylor</b> (OST : chronométrage, salaire au rendement).</li><li>b) <b>Weber</b> (bureaucratie : règles écrites, impersonnalité).</li><li>c) <b>Herzberg</b> : le salaire est un facteur d'<b>hygiène</b> ; la mission valorisante est un facteur <b>moteur</b>.</li><li>d) <b>McGregor, théorie X</b>.</li><li>e) <b>Mayo</b>, école des relations humaines (effet Hawthorne).</li></ol>
<p><b>Lien avec le marketing</b> : la pyramide de Maslow sert aussi à comprendre les clients. Une publicité pour une assurance parle de <i>sécurité</i> ; une marque de luxe parle d'<i>estime</i> ; un réseau social parle d'<i>appartenance</i>.</p>
<h3>⚠️ Erreurs fréquentes</h3>
<ul><li>Croire que Weber critique la bureaucratie : au contraire, il la présente comme le modèle le plus rationnel.</li><li>Placer le salaire dans les facteurs moteurs de Herzberg (c'est un facteur d'hygiène).</li><li>Confondre Taylor (organisation des tâches à l'atelier) et Fayol (direction de l'entreprise).</li><li>Réciter la pyramide de Maslow à l'envers : on commence par les besoins physiologiques en bas.</li></ul>
<h3>❓ Questions de cours</h3>
${Q("Quelles sont les limites de l'OST ?", "Travail répétitif et monotone, déqualification des ouvriers, absence d'initiative, fatigue, absentéisme et conflits sociaux. L'homme est réduit à un exécutant motivé seulement par l'argent.")}
${Q("Qu'a montré l'expérience Hawthorne ?", "Que la productivité dépend aussi de facteurs humains et sociaux : l'attention portée aux ouvriers, l'appartenance à un groupe et l'ambiance de travail, et pas seulement des conditions matérielles.")}
${Q("Qu'apporte l'approche de la contingence ?", "Elle affirme qu'il n'y a pas une organisation idéale valable partout : la meilleure structure dépend de la situation (taille, technologie, environnement stable ou instable).")}`,
    ar: `<h3>📝 تمرين محلول: التعرف على النظريات</h3>
<div class="ex"><b>النص.</b> ف كل وضعية، حددي المؤلف ولا النظرية: أ) معمل كيحسب كل حركة بالكرونومتر وكيخلص بالقطعة؛ ب) بنك كيطبق إجراءات مكتوبة متشابهة ف جميع الوكالات؛ ج) من بعد زيادة الأجر، المستخدمين ما ولاوش محفزين أكثر، ولكن مهمة كتعطيهم القيمة حفزاتهم؛ د) رئيس كيظن بلي المستخدمين كسالى وكيراقبهم ديما؛ ه) مقاولة كتنظم أنشطة جماعية وكتسمع للأجراء، والإنتاجية طلعات.</div>
<ol><li>أ) <b>تايلور</b> (التنظيم العلمي: الكرونومتر، الأجر حسب المردودية).</li><li>ب) <b>فيبر</b> (البيروقراطية: قواعد مكتوبة، اللاشخصانية).</li><li>ج) <b>هيرزبرغ</b>: الأجر عامل <b>نظافة</b>؛ المهمة اللي كتعطي القيمة عامل <b>محفز</b>.</li><li>د) <b>ماكغريغور، النظرية X</b>.</li><li>ه) <b>مايو</b>، مدرسة العلاقات الإنسانية (أثر هاوثورن).</li></ol>
<p><b>العلاقة مع التسويق</b>: هرم ماسلو كيصلح حتى لفهم الزبناء. إشهار ديال التأمين كيهضر على <i>الأمان</i>؛ ماركة ديال الفخامة كتهضر على <i>التقدير</i>؛ شبكة اجتماعية كتهضر على <i>الانتماء</i>.</p>
<h3>⚠️ أخطاء شائعة</h3>
<ul><li>الاعتقاد بلي فيبر كينتقد البيروقراطية: بالعكس، كيقدمها كأكثر نموذج عقلاني.</li><li>تحطي الأجر ف العوامل المحفزة ديال هيرزبرغ (هو عامل نظافة).</li><li>الخلط بين تايلور (تنظيم المهام ف الورشة) وفايول (إدارة المقاولة).</li><li>تحفظي هرم ماسلو بالمقلوب: كنبداو بالحاجات الفيزيولوجية لتحت.</li></ul>
<h3>❓ أسئلة الدرس</h3>
${Q("شنو هوما حدود التنظيم العلمي للعمل؟", "عمل متكرر ورتيب، فقدان العمال للمهارة، غياب المبادرة، العياء، الغياب والنزاعات الاجتماعية. الإنسان كيتحول لمنفذ كيحفزو غير الفلوس.")}
${Q("شنو بينات تجربة هاوثورن؟", "بلي الإنتاجية كتعتمد حتى على عوامل إنسانية واجتماعية: الاهتمام بالعمال، الانتماء لجماعة وجو العمل، ماشي غير الظروف المادية.")}
${Q("شنو كتزيد المقاربة الظرفية؟", "كتأكد بلي ما كاينش تنظيم مثالي صالح ف كل بلاصة: أحسن بنية كتعتمد على الوضعية (الحجم، التكنولوجيا، محيط مستقر ولا متقلب).")}`,
    en: `<h3>📝 Worked exercise: recognising the theories</h3>
<div class="ex"><b>Task.</b> For each situation, name the author or theory: a) a factory times every movement and pays per piece; b) a bank applies identical written procedures in all branches; c) after a pay rise, staff are not more motivated, but a rewarding assignment motivates them; d) a boss thinks staff are lazy and watches them constantly; e) a firm organises team activities and listens to staff, and productivity rises.</div>
<ol><li>a) <b>Taylor</b> (scientific management: timing, piece-rate pay).</li><li>b) <b>Weber</b> (bureaucracy: written rules, impersonality).</li><li>c) <b>Herzberg</b>: pay is a <b>hygiene</b> factor; the rewarding assignment is a <b>motivator</b>.</li><li>d) <b>McGregor, Theory X</b>.</li><li>e) <b>Mayo</b>, human relations school (Hawthorne effect).</li></ol>
<p><b>Link with marketing</b>: Maslow's pyramid also helps understand customers. An insurance advert talks about <i>safety</i>; a luxury brand about <i>esteem</i>; a social network about <i>belonging</i>.</p>
<h3>⚠️ Common mistakes</h3>
<ul><li>Thinking Weber criticises bureaucracy: he presents it as the most rational model.</li><li>Putting pay among Herzberg's motivators (it is a hygiene factor).</li><li>Confusing Taylor (organising workshop tasks) with Fayol (running the company).</li><li>Reciting Maslow upside down: physiological needs are at the bottom.</li></ul>
<h3>❓ Review questions</h3>
${Q("What are the limits of scientific management?", "Repetitive, monotonous work, deskilling, no initiative, fatigue, absenteeism and social conflict. People are reduced to executors motivated only by money.")}
${Q("What did the Hawthorne experiments show?", "That productivity also depends on human and social factors — attention paid to workers, group belonging and work atmosphere — not only on material conditions.")}
${Q("What does the contingency approach add?", "That there is no ideal organisation valid everywhere: the best structure depends on the situation (size, technology, stable or turbulent environment).")}`,
  },
  mgt4: {
    fr: `<h3>📝 Exercice corrigé : SWOT et choix de stratégie</h3>
<div class="ex"><b>Énoncé.</b> « Hanout Click » est une jeune boutique en ligne d'Oujda qui livre des produits d'épicerie à domicile. Elle a une application simple et un service client rapide, mais peu de livreurs et un petit budget publicitaire. La demande de livraison augmente dans les villes ; une grande enseigne nationale lance un service concurrent. 1) Construis la matrice SWOT. 2) Propose une stratégie de Porter. 3) Quelle structure conseilles-tu ?</div>
<ol><li><b>SWOT</b> — Forces : application simple, service client rapide, connaissance du marché local. Faiblesses : peu de livreurs, faible notoriété, petit budget. Opportunités : hausse de la livraison à domicile, usage du smartphone. Menaces : enseigne nationale concurrente, hausse du carburant.</li>
<li><b>Stratégie</b> : la <b>focalisation (niche)</b> avec <b>différenciation</b> : se concentrer sur Oujda et ses quartiers, livrer en moins d'une heure, proposer des produits locaux (huile d'olive de la région, pain traditionnel) que la grande enseigne n'offre pas. La domination par les coûts est difficile face à un grand concurrent.</li>
<li><b>Structure</b> : une petite structure <b>fonctionnelle</b> et assez plate (direction ; commercial & marketing ; logistique ; service client), avec des décisions rapides et peu de niveaux hiérarchiques.</li></ol>
<h3>⚠️ Erreurs fréquentes</h3>
<ul><li>Mettre une opportunité dans les forces : les forces et faiblesses sont <b>internes</b>, les opportunités et menaces sont <b>externes</b>.</li><li>Faire un SWOT sans conclusion : il doit déboucher sur une stratégie.</li><li>Confondre décision stratégique (engage l'avenir) et décision opérationnelle (quotidienne, répétitive).</li><li>Croire que la structure matricielle n'a que des avantages : elle crée des conflits d'autorité.</li></ul>
<h3>❓ Questions de cours</h3>
${Q("Qu'est-ce que la rationalité limitée ?", "Selon Herbert Simon, le décideur ne peut pas connaître toutes les solutions ni toutes leurs conséquences (manque d'information, de temps, de capacité). Il choisit donc la première solution satisfaisante, et non la solution optimale.")}
${Q("Différence entre structure fonctionnelle et divisionnelle ?", "La structure fonctionnelle regroupe les salariés par métier (production, commercial, finance). La structure divisionnelle crée des divisions autonomes par produit, marché ou région, chacune avec ses propres fonctions.")}
${Q("Citez les trois stratégies génériques de Porter.", "La domination par les coûts, la différenciation et la focalisation (concentration sur un segment ou une niche).")}`,
    ar: `<h3>📝 تمرين محلول: SWOT واختيار الاستراتيجية</h3>
<div class="ex"><b>النص.</b> «Hanout Click» متجر إلكتروني جديد ف وجدة كيوصل مواد البقالة للديور. عندو تطبيق بسيط وخدمة زبناء سريعة، ولكن الموصلين قلال والميزانية الإشهارية صغيرة. الطلب على التوصيل كيزيد ف المدن؛ وعلامة وطنية كبيرة طلقات خدمة منافسة. 1) صاوبي مصفوفة SWOT. 2) اقترحي استراتيجية ديال بورتر. 3) شنو هي البنية اللي كتنصحي بيها؟</div>
<ol><li><b>SWOT</b> — القوة: تطبيق بسيط، خدمة زبناء سريعة، معرفة السوق المحلي. الضعف: موصلين قلال، شهرة ضعيفة، ميزانية صغيرة. الفرص: ارتفاع التوصيل للديور، استعمال السمارتفون. التهديدات: العلامة الوطنية المنافسة، ارتفاع البنزين.</li>
<li><b>الاستراتيجية</b>: <b>التركيز (سوق ضيق)</b> مع <b>التمييز</b>: التركيز على وجدة والأحياء ديالها، التوصيل ف أقل من ساعة، منتوجات محلية (زيت الزيتون ديال المنطقة، الخبز التقليدي) اللي العلامة الكبيرة ما كتوفرهاش. الريادة ف التكاليف صعيبة قدام منافس كبير.</li>
<li><b>البنية</b>: بنية <b>وظيفية</b> صغيرة ومسطحة شوية (الإدارة؛ التجاري والتسويق؛ اللوجيستيك؛ خدمة الزبناء)، مع قرارات سريعة ومستويات هرمية قليلة.</li></ol>
<h3>⚠️ أخطاء شائعة</h3>
<ul><li>تحطي فرصة ف نقاط القوة: القوة والضعف <b>داخليين</b>، الفرص والتهديدات <b>خارجيين</b>.</li><li>تديري SWOT بلا خلاصة: خاصو يوصل لاستراتيجية.</li><li>الخلط بين القرار الاستراتيجي (كيلتزم بالمستقبل) والعملياتي (يومي ومتكرر).</li><li>الاعتقاد بلي البنية المصفوفية فيها غير المزايا: كتخلق صراعات ف السلطة.</li></ul>
<h3>❓ أسئلة الدرس</h3>
${Q("شنو هي العقلانية المحدودة؟", "حسب هربرت سايمون، صاحب القرار ما يقدرش يعرف جميع الحلول ولا جميع النتائج ديالها (نقص المعلومات، الوقت، القدرة). داكشي علاش كيختار أول حل مرضي، ماشي الحل الأمثل.")}
${Q("شنو الفرق بين البنية الوظيفية والقسمية؟", "البنية الوظيفية كتجمع الأجراء حسب المهنة (الإنتاج، التجاري، المالية). البنية القسمية كتخلق أقسام مستقلة حسب المنتوج أو السوق أو الجهة، كل قسم عندو الوظائف ديالو.")}
${Q("ذكري الاستراتيجيات العامة الثلاث ديال بورتر.", "الريادة ف التكاليف، التمييز، والتركيز (على فئة ولا سوق ضيق).")}`,
    en: `<h3>📝 Worked exercise: SWOT and choosing a strategy</h3>
<div class="ex"><b>Task.</b> “Hanout Click” is a young online grocery shop in Oujda delivering to homes. It has a simple app and fast customer service, but few couriers and a small ad budget. Home-delivery demand is rising in cities; a large national chain launches a competing service. 1) Build the SWOT matrix. 2) Suggest a Porter strategy. 3) Which structure do you recommend?</div>
<ol><li><b>SWOT</b> — Strengths: simple app, fast customer service, local market knowledge. Weaknesses: few couriers, low awareness, small budget. Opportunities: growth of home delivery, smartphone use. Threats: national competitor, rising fuel prices.</li>
<li><b>Strategy</b>: <b>focus (niche)</b> with <b>differentiation</b>: concentrate on Oujda's neighbourhoods, deliver in under an hour, offer local products (regional olive oil, traditional bread) the big chain does not. Cost leadership is hard against a large competitor.</li>
<li><b>Structure</b>: a small, fairly flat <b>functional</b> structure (management; sales & marketing; logistics; customer service) with fast decisions and few levels.</li></ol>
<h3>⚠️ Common mistakes</h3>
<ul><li>Putting an opportunity among strengths: strengths and weaknesses are <b>internal</b>, opportunities and threats <b>external</b>.</li><li>Doing a SWOT with no conclusion: it must lead to a strategy.</li><li>Confusing strategic decisions (commit the future) with operational ones (daily, repetitive).</li><li>Thinking a matrix structure has only advantages: it creates authority conflicts.</li></ul>
<h3>❓ Review questions</h3>
${Q("What is bounded rationality?", "According to Herbert Simon, decision-makers cannot know all options and consequences (lack of information, time, capacity), so they choose the first satisfactory solution rather than the optimal one.")}
${Q("Functional vs divisional structure?", "A functional structure groups staff by job (production, sales, finance). A divisional structure creates autonomous divisions by product, market or region, each with its own functions.")}
${Q("Name Porter's three generic strategies.", "Cost leadership, differentiation and focus (on a segment or niche).")}`,
  },
  eco1: {
    fr: `<h3>📝 Exercice corrigé : circuit et propension</h3>
<div class="ex"><b>Énoncé.</b> Une famille de Nador a un revenu mensuel de 9 500 DH. Elle dépense 7 600 DH (alimentation, loyer, transport, internet) et place le reste à la banque. Le mois suivant, son revenu passe à 10 500 DH et sa consommation à 8 300 DH.<br>1) Calcule l'épargne et la propension moyenne à consommer (PMC) du premier mois. 2) Calcule la propension marginale à consommer (PmC). 3) Explique le rôle de la banque dans le circuit.</div>
<ol><li>Épargne = 9 500 − 7 600 = <b>1 900 DH</b>. PMC = 7 600 / 9 500 = <b>0,80</b> (80 %) ; propension moyenne à épargner = 20 %.</li>
<li>PmC = ΔC / ΔR = (8 300 − 7 600) / (10 500 − 9 500) = 700 / 1 000 = <b>0,70</b> : sur chaque dirham supplémentaire, la famille en consomme 70 centimes.</li>
<li>La banque collecte l'épargne des ménages et la prête aux entreprises (pour investir) ou à d'autres ménages (crédit immobilier). Elle transforme donc l'épargne en investissement : c'est le <b>financement de l'économie</b>.</li></ol>
<p><b>Coût d'opportunité</b> : si la famille utilise ses 1 900 DH pour acheter un téléphone, elle renonce aux intérêts qu'elle aurait gagnés et à la sécurité d'une épargne.</p>
<h3>⚠️ Erreurs fréquentes</h3>
<ul><li>Confondre PMC (C/R) et PmC (ΔC/ΔR).</li><li>Oublier que flux réels et flux monétaires vont en <b>sens inverse</b>.</li><li>Croire qu'un service n'est pas un bien économique : les services sont aussi produits et vendus.</li><li>Classer l'État parmi les entreprises : il produit surtout des services <b>non marchands</b>.</li></ul>
<h3>❓ Questions de cours</h3>
${Q("Pourquoi l'économie est-elle la science des choix ?", "Parce que les ressources sont rares et les besoins illimités : chaque agent doit choisir comment utiliser ses ressources, et chaque choix entraîne un coût d'opportunité.")}
${Q("Quelle est la différence entre biens complémentaires et substituables ?", "Les biens complémentaires s'utilisent ensemble (imprimante et encre) ; les biens substituables peuvent se remplacer (thé et café). Si le prix du café augmente, la demande de thé augmente.")}
${Q("Que représente le « reste du monde » ?", "Tous les agents étrangers avec lesquels le pays échange : exportations, importations, investissements étrangers, transferts des Marocains résidant à l'étranger.")}`,
    ar: `<h3>📝 تمرين محلول: الدورة والميل</h3>
<div class="ex"><b>النص.</b> أسرة ف الناظور عندها دخل شهري ديال 9 500 درهم. كتصرف 7 600 درهم (الماكلة، الكراء، النقل، الأنترنت) وكتحط الباقي ف البنك. الشهر اللي من بعد، الدخل ولى 10 500 درهم والاستهلاك 8 300 درهم.<br>1) احسبي الادخار والميل المتوسط للاستهلاك (PMC) ديال الشهر الأول. 2) احسبي الميل الحدي للاستهلاك (PmC). 3) شرحي دور البنك ف الدورة.</div>
<ol><li>الادخار = 9 500 − 7 600 = <b>1 900 درهم</b>. PMC = 7 600 / 9 500 = <b>0,80</b> (80 %)؛ الميل المتوسط للادخار = 20 %.</li>
<li>PmC = ΔC / ΔR = (8 300 − 7 600) / (10 500 − 9 500) = 700 / 1 000 = <b>0,70</b>: من كل درهم زايد، الأسرة كتستهلك 70 سنتيم.</li>
<li>البنك كيجمع ادخار الأسر وكيسلفو للمقاولات (باش تستثمر) ولا لأسر أخرى (قرض السكن). يعني كيحول الادخار لاستثمار: هادا هو <b>تمويل الاقتصاد</b>.</li></ol>
<p><b>تكلفة الفرصة</b>: إلا الأسرة استعملات 1 900 درهم باش تشري تليفون، كتتخلى على الفوائد اللي كانت غادي تربح وعلى أمان الادخار.</p>
<h3>⚠️ أخطاء شائعة</h3>
<ul><li>الخلط بين PMC (C/R) و PmC (ΔC/ΔR).</li><li>النسيان بلي التدفقات الحقيقية والنقدية كيمشيو ف <b>اتجاه معاكس</b>.</li><li>الاعتقاد بلي الخدمة ماشي سلعة اقتصادية: الخدمات حتى هي كتنتج وتتباع.</li><li>تصنيف الدولة مع المقاولات: كتنتج بالأساس خدمات <b>غير تجارية</b>.</li></ul>
<h3>❓ أسئلة الدرس</h3>
${Q("علاش الاقتصاد هو علم الاختيارات؟", "حيت الموارد نادرة والحاجات غير محدودة: كل عون خاصو يختار كيفاش يستعمل الموارد ديالو، وكل اختيار عندو تكلفة الفرصة.")}
${Q("شنو الفرق بين السلع المتكاملة والبديلة؟", "السلع المتكاملة كتستعمل مع بعض (الطابعة والمداد)؛ والبديلة تقدر تعوض بعضها (أتاي والقهوة). إلا طلع ثمن القهوة، الطلب على أتاي كيزيد.")}
${Q("شنو كيمثل «بقية العالم»؟", "جميع الأعوان الأجانب اللي البلاد كتتبادل معاهم: الصادرات، الواردات، الاستثمارات الأجنبية، تحويلات المغاربة المقيمين ف الخارج.")}`,
    en: `<h3>📝 Worked exercise: circular flow and propensity</h3>
<div class="ex"><b>Task.</b> A family in Nador earns 9,500 MAD a month. It spends 7,600 MAD (food, rent, transport, internet) and saves the rest at the bank. Next month its income rises to 10,500 MAD and its consumption to 8,300 MAD.<br>1) Compute saving and the average propensity to consume (APC) for month 1. 2) Compute the marginal propensity to consume (MPC). 3) Explain the bank's role in the circular flow.</div>
<ol><li>Saving = 9,500 − 7,600 = <b>1,900 MAD</b>. APC = 7,600 / 9,500 = <b>0.80</b> (80%); average propensity to save = 20%.</li>
<li>MPC = ΔC / ΔY = (8,300 − 7,600) / (10,500 − 9,500) = 700 / 1,000 = <b>0.70</b>: of each extra dirham, the family consumes 70 centimes.</li>
<li>The bank collects household savings and lends them to firms (to invest) or other households (mortgages). It turns saving into investment: <b>financing the economy</b>.</li></ol>
<p><b>Opportunity cost</b>: if the family spends its 1,900 MAD on a phone, it gives up the interest and the security of savings.</p>
<h3>⚠️ Common mistakes</h3>
<ul><li>Confusing APC (C/Y) with MPC (ΔC/ΔY).</li><li>Forgetting that real flows and money flows run in <b>opposite directions</b>.</li><li>Thinking a service is not an economic good: services are produced and sold too.</li><li>Classing the State with firms: it mainly provides <b>non-market</b> services.</li></ul>
<h3>❓ Review questions</h3>
${Q("Why is economics the science of choice?", "Because resources are scarce and wants unlimited: every agent must choose how to use resources, and each choice has an opportunity cost.")}
${Q("Complements vs substitutes?", "Complements are used together (printer and ink); substitutes replace each other (tea and coffee). If coffee becomes dearer, demand for tea rises.")}
${Q("What is the “rest of the world”?", "All foreign agents the country trades with: exports, imports, foreign investment, remittances from Moroccans living abroad.")}`,
  },
  eco2: {
    fr: `<h3>📝 Exercice corrigé : équilibre, taxe et élasticité</h3>
<div class="ex"><b>Énoncé.</b> Sur le marché des coques de téléphone à Oujda : D = 1 200 − 20P et O = 200 + 30P (P en DH, Q en unités par semaine).<br>1) Trouve l'équilibre. 2) Que se passe-t-il si le prix est fixé à 15 DH ? 3) Calcule l'élasticité de la demande entre P = 20 et P = 22.</div>
<ol><li>1 200 − 20P = 200 + 30P → 1 000 = 50P → <b>P* = 20 DH</b> ; Q* = 1 200 − 400 = <b>800 coques</b>. Recette totale des vendeurs = 20 × 800 = 16 000 DH.</li>
<li>À P = 15 : D = 1 200 − 300 = 900 ; O = 200 + 450 = 650. La demande dépasse l'offre : <b>pénurie de 250 coques</b>. Les vendeurs pourront augmenter leurs prix jusqu'à revenir vers 20 DH.</li>
<li>À P = 22 : D = 1 200 − 440 = 760. ΔQ/Q = (760 − 800)/800 = −5 % ; ΔP/P = (22 − 20)/20 = +10 %. e = −5/10 = <b>−0,5</b> : demande <b>inélastique</b>. Vérification : recette = 22 × 760 = 16 720 DH &gt; 16 000 → la hausse de prix augmente la recette.</li></ol>
<p><b>Déplacement ou mouvement ?</b> Une variation du prix provoque un <b>mouvement le long</b> de la courbe. Une variation d'un autre facteur (revenu, mode, publicité) <b>déplace</b> toute la courbe : par exemple, une campagne d'influenceurs déplace la demande vers la droite → le prix et la quantité d'équilibre augmentent.</p>
<h3>⚠️ Erreurs fréquentes</h3>
<ul><li>Oublier le signe négatif de l'élasticité-prix (on compare souvent la valeur absolue à 1).</li><li>Confondre pénurie (D &gt; O, prix trop bas) et excédent (O &gt; D, prix trop haut).</li><li>Diviser par la nouvelle valeur au lieu de la valeur de départ dans les taux de variation.</li><li>Dire « la demande augmente » quand le prix baisse : c'est la <b>quantité demandée</b> qui augmente.</li></ul>
<h3>❓ Questions de cours</h3>
${Q("Quels facteurs déplacent la courbe de demande ?", "Le revenu, les goûts et la mode, le prix des biens substituables et complémentaires, la publicité, les anticipations et le nombre d'acheteurs.")}
${Q("Qu'est-ce qu'un bien inférieur ?", "Un bien dont la demande diminue quand le revenu augmente (élasticité-revenu négative), parce que les consommateurs le remplacent par un bien de meilleure qualité.")}
${Q("Pourquoi un oligopole est-il fréquent dans les télécoms ?", "Parce qu'il faut des investissements énormes (réseaux, licences) qui empêchent l'entrée de nombreuses entreprises ; seuls quelques grands opérateurs peuvent exister.")}`,
    ar: `<h3>📝 تمرين محلول: التوازن، الضريبة والمرونة</h3>
<div class="ex"><b>النص.</b> ف سوق أغلفة التليفونات ف وجدة: D = 1 200 − 20P و O = 200 + 30P (P بالدرهم، Q بالوحدات ف الأسبوع).<br>1) لقاي التوازن. 2) شنو كيوقع إلا تحدد الثمن ف 15 درهم؟ 3) احسبي مرونة الطلب بين P = 20 و P = 22.</div>
<ol><li>1 200 − 20P = 200 + 30P ← 1 000 = 50P ← <b>P* = 20 درهم</b>؛ Q* = 1 200 − 400 = <b>800 غلاف</b>. المداخيل الكلية للبائعين = 20 × 800 = 16 000 درهم.</li>
<li>ف P = 15: D = 1 200 − 300 = 900؛ O = 200 + 450 = 650. الطلب فايت العرض: <b>خصاص ديال 250 غلاف</b>. البائعين غادي يطلعو الأثمنة حتى يرجعو قريب من 20 درهم.</li>
<li>ف P = 22: D = 1 200 − 440 = 760. ΔQ/Q = (760 − 800)/800 = −5 %؛ ΔP/P = (22 − 20)/20 = +10 %. e = −5/10 = <b>−0,5</b>: طلب <b>غير مرن</b>. التحقق: المداخيل = 22 × 760 = 16 720 درهم &gt; 16 000 ← ارتفاع الثمن زاد ف المداخيل.</li></ol>
<p><b>زحزحة ولا حركة؟</b> تغير الثمن كيدير <b>حركة على</b> المنحنى. تغير عامل آخر (الدخل، الموضة، الإشهار) كي<b>زحزح</b> المنحنى كامل: مثلا حملة مع المؤثرين كتزحزح الطلب لليمين ← الثمن والكمية ديال التوازن كيطلعو.</p>
<h3>⚠️ أخطاء شائعة</h3>
<ul><li>نسيان الإشارة السالبة ديال مرونة الثمن (غالبا كنقارنو القيمة المطلقة مع 1).</li><li>الخلط بين الخصاص (D &gt; O، الثمن منخفض بزاف) والفائض (O &gt; D، الثمن مرتفع بزاف).</li><li>القسمة على القيمة الجديدة عوض القيمة البدئية ف معدلات التغير.</li><li>تقولي «الطلب زاد» ملي الثمن نقص: <b>الكمية المطلوبة</b> هي اللي زادت.</li></ul>
<h3>❓ أسئلة الدرس</h3>
${Q("شنو هوما العوامل اللي كتزحزح منحنى الطلب؟", "الدخل، الأذواق والموضة، ثمن السلع البديلة والمتكاملة، الإشهار، التوقعات وعدد المشترين.")}
${Q("شنو هي السلعة الدنيا؟", "سلعة الطلب عليها كينقص ملي الدخل كيزيد (مرونة الدخل سالبة)، حيت المستهلكين كيعوضوها بسلعة جودتها أحسن.")}
${Q("علاش احتكار القلة كثير ف الاتصالات؟", "حيت خاص استثمارات ضخمة (الشبكات، الرخص) كتمنع دخول بزاف ديال المقاولات؛ غير شي شركات كبار اللي يقدرو يكونو.")}`,
    en: `<h3>📝 Worked exercise: equilibrium and elasticity</h3>
<div class="ex"><b>Task.</b> On the phone-case market in Oujda: D = 1,200 − 20P and S = 200 + 30P (P in MAD, Q in units per week).<br>1) Find the equilibrium. 2) What happens if the price is set at 15 MAD? 3) Compute demand elasticity between P = 20 and P = 22.</div>
<ol><li>1,200 − 20P = 200 + 30P → 1,000 = 50P → <b>P* = 20 MAD</b>; Q* = 1,200 − 400 = <b>800 cases</b>. Sellers' revenue = 20 × 800 = 16,000 MAD.</li>
<li>At P = 15: D = 900; S = 650. Demand exceeds supply: <b>a shortage of 250 cases</b>. Sellers can raise prices back towards 20 MAD.</li>
<li>At P = 22: D = 760. ΔQ/Q = −5%; ΔP/P = +10%. e = −5/10 = <b>−0.5</b>: <b>inelastic</b> demand. Check: revenue = 22 × 760 = 16,720 &gt; 16,000 → the price rise increases revenue.</li></ol>
<p><b>Shift or movement?</b> A price change causes a <b>movement along</b> the curve. A change in another factor (income, fashion, advertising) <b>shifts</b> the whole curve: an influencer campaign shifts demand right → equilibrium price and quantity rise.</p>
<h3>⚠️ Common mistakes</h3>
<ul><li>Forgetting the negative sign of price elasticity (compare the absolute value with 1).</li><li>Confusing shortage (D &gt; S, price too low) with surplus (S &gt; D, price too high).</li><li>Dividing by the new value instead of the initial one in rates of change.</li><li>Saying “demand rises” when price falls: it is <b>quantity demanded</b> that rises.</li></ul>
<h3>❓ Review questions</h3>
${Q("What shifts the demand curve?", "Income, tastes and fashion, prices of substitutes and complements, advertising, expectations and the number of buyers.")}
${Q("What is an inferior good?", "A good whose demand falls when income rises (negative income elasticity), because consumers switch to a better-quality good.")}
${Q("Why is oligopoly common in telecoms?", "Because huge investments (networks, licences) block entry, so only a few large operators can exist.")}`,
  },
  eco3: {
    fr: `<h3>📝 Exercice corrigé : coûts et profit d'une petite production</h3>
<div class="ex"><b>Énoncé.</b> Une coopérative fabrique des savons artisanaux. Coût total mensuel : CT(q) = 0,01q² + 4q + 2 000 (q = nombre de savons). Prix de vente : 20 DH.<br>1) Donne CF, CV et le coût moyen pour q = 500. 2) Calcule le coût marginal. 3) Quelle quantité maximise le profit ? Quel est ce profit ?</div>
<ol><li>CF = <b>2 000 DH</b> (ne dépend pas de q) ; CV(q) = 0,01q² + 4q. Pour q = 500 : CV = 2 500 + 2 000 = 4 500 ; CT = 6 500 ; <b>CM = 6 500 / 500 = 13 DH</b>.</li>
<li>Cm(q) = CT′(q) = <b>0,02q + 4</b>. Pour q = 500 : Cm = 14 DH.</li>
<li>En concurrence, profit maximal quand <b>p = Cm</b> : 20 = 0,02q + 4 → q = <b>800 savons</b>. RT = 20 × 800 = 16 000 ; CT = 6 400 + 3 200 + 2 000 = 11 600 ; <b>π = 4 400 DH</b>.</li></ol>
<p><b>Interprétation</b> : au-delà de 800 savons, fabriquer un savon de plus coûterait plus de 20 DH (Cm &gt; p) : le profit diminuerait.</p>
<h3>⚠️ Erreurs fréquentes</h3>
<ul><li>Inclure les coûts fixes dans le coût marginal : la dérivée d'une constante est 0.</li><li>Confondre coût moyen (CT/q) et coût marginal (coût d'une unité de plus).</li><li>Maximiser la recette au lieu du profit.</li><li>Oublier les unités (DH, unités, par mois).</li></ul>
<h3>❓ Questions de cours</h3>
${Q("Énoncez la loi de l'utilité marginale décroissante.", "La satisfaction apportée par chaque unité supplémentaire d'un bien diminue à mesure que l'on en consomme davantage.")}
${Q("Qu'est-ce que l'optimum technique ?", "C'est le niveau de production où le coût moyen est minimal ; à ce point, le coût marginal coupe le coût moyen.")}
${Q("Que sont les économies d'échelle ?", "La baisse du coût moyen quand la production augmente, parce que les coûts fixes sont répartis sur un plus grand nombre d'unités et que l'on obtient de meilleurs prix d'achat.")}`,
    ar: `<h3>📝 تمرين محلول: التكاليف والربح ديال إنتاج صغير</h3>
<div class="ex"><b>النص.</b> تعاونية كتصنع الصابون التقليدي. التكلفة الكلية الشهرية: CT(q) = 0,01q² + 4q + 2 000 (q = عدد الصابون). ثمن البيع: 20 درهم.<br>1) عطي CF و CV والتكلفة المتوسطة لـ q = 500. 2) احسبي التكلفة الحدية. 3) أشمن كمية كتعظم الربح؟ وشحال هو الربح؟</div>
<ol><li>CF = <b>2 000 درهم</b> (ما كتعتمدش على q)؛ CV(q) = 0,01q² + 4q. لـ q = 500: CV = 2 500 + 2 000 = 4 500؛ CT = 6 500؛ <b>CM = 6 500 / 500 = 13 درهم</b>.</li>
<li>Cm(q) = CT′(q) = <b>0,02q + 4</b>. لـ q = 500: Cm = 14 درهم.</li>
<li>ف المنافسة، الربح فالأقصى ملي <b>p = Cm</b>: 20 = 0,02q + 4 ← q = <b>800 صابونة</b>. RT = 20 × 800 = 16 000؛ CT = 6 400 + 3 200 + 2 000 = 11 600؛ <b>π = 4 400 درهم</b>.</li></ol>
<p><b>التفسير</b>: من بعد 800 صابونة، صناعة صابونة زايدة غادي تكلف أكثر من 20 درهم (Cm &gt; p): الربح غادي ينقص.</p>
<h3>⚠️ أخطاء شائعة</h3>
<ul><li>إدخال التكاليف الثابتة ف التكلفة الحدية: مشتقة الثابتة هي 0.</li><li>الخلط بين التكلفة المتوسطة (CT/q) والحدية (تكلفة وحدة زايدة).</li><li>تعظيم المداخيل عوض الربح.</li><li>نسيان الوحدات (درهم، وحدات، ف الشهر).</li></ul>
<h3>❓ أسئلة الدرس</h3>
${Q("صيغي قانون تناقص المنفعة الحدية.", "الرضا اللي كتجيبو كل وحدة زايدة من سلعة كينقص كلما استهلكنا أكثر.")}
${Q("شنو هو الأمثل التقني؟", "هو مستوى الإنتاج اللي فيه التكلفة المتوسطة ف الأدنى؛ ف هاد النقطة التكلفة الحدية كتقطع التكلفة المتوسطة.")}
${Q("شنو هي وفورات الحجم؟", "نقصان التكلفة المتوسطة ملي كيزيد الإنتاج، حيت التكاليف الثابتة كتتوزع على عدد أكبر من الوحدات، وكنحصلو على أثمنة شراء أحسن.")}`,
    en: `<h3>📝 Worked exercise: costs and profit of a small producer</h3>
<div class="ex"><b>Task.</b> A cooperative makes handmade soaps. Monthly total cost: TC(q) = 0.01q² + 4q + 2,000 (q = number of soaps). Price: 20 MAD.<br>1) Give FC, VC and average cost at q = 500. 2) Compute marginal cost. 3) Which quantity maximises profit, and what is the profit?</div>
<ol><li>FC = <b>2,000 MAD</b>; VC(q) = 0.01q² + 4q. At q = 500: VC = 4,500; TC = 6,500; <b>AC = 13 MAD</b>.</li>
<li>MC(q) = TC′(q) = <b>0.02q + 4</b>. At q = 500: MC = 14 MAD.</li>
<li>In competition, profit peaks where <b>p = MC</b>: 20 = 0.02q + 4 → q = <b>800 soaps</b>. TR = 16,000; TC = 11,600; <b>π = 4,400 MAD</b>.</li></ol>
<p><b>Meaning</b>: beyond 800 soaps, one more soap would cost more than 20 MAD (MC &gt; p), so profit would fall.</p>
<h3>⚠️ Common mistakes</h3>
<ul><li>Including fixed costs in marginal cost: the derivative of a constant is 0.</li><li>Confusing average cost (TC/q) with marginal cost (cost of one more unit).</li><li>Maximising revenue instead of profit.</li><li>Forgetting units (MAD, units, per month).</li></ul>
<h3>❓ Review questions</h3>
${Q("State the law of diminishing marginal utility.", "The satisfaction from each additional unit of a good falls as more of it is consumed.")}
${Q("What is the technical optimum?", "The output level where average cost is lowest; there, marginal cost crosses average cost.")}
${Q("What are economies of scale?", "The fall in average cost as output rises, because fixed costs are spread over more units and better purchase prices are obtained.")}`,
  },
  eco4: {
    fr: `<h3>📝 Exercice corrigé : lire les indicateurs d'un pays</h3>
<div class="ex"><b>Énoncé.</b> Données d'un pays (milliards de DH) : année N−1 : PIB nominal = 1 400 ; année N : C = 830, I = 410, G = 270, X = 480, M = 560. Indice des prix : 100 en N−1 et 103 en N. Population active : 12,4 millions dont 1,6 million de chômeurs.<br>1) Calcule le PIB nominal de N et sa croissance. 2) Calcule la croissance réelle. 3) Calcule le taux de chômage. 4) Quelle politique proposer ?</div>
<ol><li>PIB<sub>N</sub> = 830 + 410 + 270 + (480 − 560) = <b>1 430</b>. Croissance nominale = (1 430 − 1 400) / 1 400 = <b>+2,14 %</b>.</li>
<li>PIB réel N (prix de N−1) = 1 430 / 1,03 ≈ 1 388,3 → croissance réelle = (1 388,3 − 1 400) / 1 400 ≈ <b>−0,84 %</b> : la hausse du PIB nominal vient seulement de l'inflation (3 %).</li>
<li>Chômage = 1,6 / 12,4 = <b>12,9 %</b>.</li>
<li>Avec une croissance réelle négative et un chômage élevé, on peut proposer une <b>politique de relance</b> : hausse des investissements publics (le multiplicateur amplifie l'effet) et, si l'inflation le permet, une baisse du taux directeur par Bank Al-Maghrib. Le déficit commercial (X − M = −80) montre aussi le besoin d'aider les exportations.</li></ol>
<h3>⚠️ Erreurs fréquentes</h3>
<ul><li>Oublier de <b>soustraire</b> les importations (X − M).</li><li>Confondre PIB nominal et PIB réel : pour mesurer la vraie croissance, on retire l'inflation.</li><li>Calculer le chômage sur la population totale au lieu de la population active.</li><li>Dire que la Banque centrale fixe les impôts (c'est l'État, politique budgétaire).</li></ul>
<h3>❓ Questions de cours</h3>
${Q("Pourquoi le PIB par habitant est-il un indicateur imparfait du bien-être ?", "Il ne tient pas compte des inégalités de revenus, du travail non rémunéré (domestique, bénévole), de la santé, de l'éducation, ni des dégâts environnementaux. D'où des indicateurs complémentaires comme l'IDH.")}
${Q("Quelles sont les causes de l'inflation ?", "Une demande supérieure à l'offre (inflation par la demande), une hausse des coûts de production comme l'énergie ou les matières premières (inflation par les coûts), et une création monétaire excessive.")}
${Q("Comment fonctionne le multiplicateur keynésien ?", "Une dépense initiale devient un revenu pour d'autres agents, qui en dépensent une partie (selon leur propension à consommer), et ainsi de suite. Le revenu total augmente de k = 1/(1 − c) fois la dépense initiale.")}`,
    ar: `<h3>📝 تمرين محلول: قراية مؤشرات بلاد</h3>
<div class="ex"><b>النص.</b> معطيات بلاد (مليار درهم): العام N−1: PIB الاسمي = 1 400؛ العام N: C = 830، I = 410، G = 270، X = 480، M = 560. مؤشر الأثمنة: 100 ف N−1 و 103 ف N. السكان النشيطين: 12,4 مليون منهم 1,6 مليون عاطل.<br>1) احسبي PIB الاسمي ديال N والنمو ديالو. 2) احسبي النمو الحقيقي. 3) احسبي معدل البطالة. 4) أشمن سياسة نقترحو؟</div>
<ol><li>PIB<sub>N</sub> = 830 + 410 + 270 + (480 − 560) = <b>1 430</b>. النمو الاسمي = (1 430 − 1 400) / 1 400 = <b>+2,14 %</b>.</li>
<li>PIB الحقيقي N (بأثمنة N−1) = 1 430 / 1,03 ≈ 1 388,3 ← النمو الحقيقي ≈ <b>−0,84 %</b>: الزيادة ف PIB الاسمي جاية غير من التضخم (3 %).</li>
<li>البطالة = 1,6 / 12,4 = <b>12,9 %</b>.</li>
<li>مع نمو حقيقي سالب وبطالة مرتفعة، نقدرو نقترحو <b>سياسة إنعاش</b>: زيادة الاستثمارات العمومية (المضاعف كيكبر الأثر)، وإلا سمح التضخم، بنك المغرب ينقص سعر الفائدة الرئيسي. والعجز التجاري (X − M = −80) كيبين حتى الحاجة لدعم الصادرات.</li></ol>
<h3>⚠️ أخطاء شائعة</h3>
<ul><li>نسيان <b>نقص</b> الواردات (X − M).</li><li>الخلط بين PIB الاسمي والحقيقي: باش نقيسو النمو الحقيقي كنحيدو التضخم.</li><li>حساب البطالة على مجموع السكان عوض السكان النشيطين.</li><li>تقولي بلي البنك المركزي كيحدد الضرائب (هادي الدولة، السياسة الميزانياتية).</li></ul>
<h3>❓ أسئلة الدرس</h3>
${Q("علاش PIB لكل فرد مؤشر ناقص على الرفاهية؟", "حيت ما كيحسبش الفوارق ف المداخيل، العمل غير المؤدى عنه (المنزلي، التطوعي)، الصحة، التعليم، ولا الأضرار البيئية. داكشي علاش كاينين مؤشرات مكملة بحال مؤشر التنمية البشرية.")}
${Q("شنو هوما أسباب التضخم؟", "طلب أكبر من العرض (تضخم بسبب الطلب)، ارتفاع تكاليف الإنتاج بحال الطاقة ولا المواد الأولية (تضخم بسبب التكاليف)، وخلق نقدي مفرط.")}
${Q("كيفاش كيخدم المضاعف الكينزي؟", "نفقة أولية كتولي دخل لأعوان آخرين، كيصرفو منها جزء (حسب الميل للاستهلاك)، وهكا. الدخل الكلي كيزيد بـ k = 1/(1 − c) مرة النفقة الأولية.")}`,
    en: `<h3>📝 Worked exercise: reading a country's indicators</h3>
<div class="ex"><b>Task.</b> A country's data (billion MAD): year N−1: nominal GDP = 1,400; year N: C = 830, I = 410, G = 270, X = 480, M = 560. Price index: 100 in N−1 and 103 in N. Labour force: 12.4 million, of whom 1.6 million unemployed.<br>1) Compute nominal GDP in N and its growth. 2) Compute real growth. 3) Compute the unemployment rate. 4) Which policy would you suggest?</div>
<ol><li>GDP<sub>N</sub> = 830 + 410 + 270 + (480 − 560) = <b>1,430</b>. Nominal growth = <b>+2.14%</b>.</li>
<li>Real GDP N (N−1 prices) = 1,430 / 1.03 ≈ 1,388.3 → real growth ≈ <b>−0.84%</b>: the nominal rise is entirely due to 3% inflation.</li>
<li>Unemployment = 1.6 / 12.4 = <b>12.9%</b>.</li>
<li>With negative real growth and high unemployment, a <b>stimulus</b> makes sense: more public investment (amplified by the multiplier) and, if inflation allows, a policy-rate cut by Bank Al-Maghrib. The trade deficit (X − M = −80) also calls for export support.</li></ol>
<h3>⚠️ Common mistakes</h3>
<ul><li>Forgetting to <b>subtract</b> imports (X − M).</li><li>Confusing nominal and real GDP: real growth removes inflation.</li><li>Computing unemployment on the total population instead of the labour force.</li><li>Saying the central bank sets taxes (that is the government's fiscal policy).</li></ul>
<h3>❓ Review questions</h3>
${Q("Why is GDP per capita an imperfect measure of well-being?", "It ignores income inequality, unpaid work (domestic, voluntary), health, education and environmental damage — hence complementary indicators such as the HDI.")}
${Q("What causes inflation?", "Demand above supply (demand-pull), rising production costs such as energy or raw materials (cost-push), and excessive money creation.")}
${Q("How does the Keynesian multiplier work?", "Initial spending becomes income for others, who spend part of it (according to their propensity to consume), and so on. Total income rises by k = 1/(1 − c) times the initial spending.")}`,
  },
};
