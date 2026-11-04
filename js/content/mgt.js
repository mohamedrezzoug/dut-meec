// Module 1.1.2 — Management
export default {
  id: 'mgt', code: '1.1.2', em: '🏢', color: '#2f5aa6', prof: 'FILALI Saida',
  name: { fr: 'Management', ar: 'التسيير (Management)', en: 'Management' },
  intro: { fr: "Comprendre ce qu'est une entreprise, comment elle est dirigée, quelles théories ont façonné le management et comment on prend des décisions stratégiques.", ar: 'نفهمو شنو هي المقاولة، كيفاش كتسير، شنو هي النظريات اللي بنات التسيير، وكيفاش كتّاخد القرارات الاستراتيجية.', en: 'Understand what a company is, how it is run, which theories shaped management and how strategic decisions are made.' },
  chapters: [
    { id: 'mgt1', t: { fr: "L'entreprise et son environnement", ar: 'المقاولة ومحيطها', en: 'The company and its environment' },
      sum: { fr: 'Définition, classifications, formes juridiques au Maroc, parties prenantes, PESTEL', ar: 'التعريف، التصنيفات، الأشكال القانونية ف المغرب، الأطراف المعنية، PESTEL', en: 'Definition, classifications, legal forms in Morocco, stakeholders, PESTEL' },
      body: {
        fr: `<h3>1. Qu'est-ce qu'une entreprise ?</h3>
<div class="def"><b>Définition :</b> une entreprise est une organisation qui combine des <b>facteurs de production</b> (travail, capital, matières, informations) pour produire des <b>biens ou des services</b> destinés à être vendus sur un marché, dans le but de réaliser un <b>profit</b>.</div>
<p>On peut voir l'entreprise sous trois angles complémentaires :</p>
<ul><li><b>Une cellule économique</b> : elle crée de la richesse (la <i>valeur ajoutée</i>) en transformant des consommations intermédiaires en produits plus utiles.</li>
<li><b>Une cellule sociale</b> : elle regroupe des personnes (salariés, dirigeants) qui ont des objectifs parfois différents (salaire, carrière, reconnaissance).</li>
<li><b>Un système ouvert</b> : elle échange en permanence avec son environnement (clients, fournisseurs, banques, État).</li></ul>
<p>La <b>valeur ajoutée</b> se calcule ainsi :</p><span class="f">Valeur ajoutée = Chiffre d'affaires − Consommations intermédiaires</span>
<div class="ex">Une coopérative d'huile d'olive à Taounate vend pour 900 000 DH d'huile. Elle a acheté 350 000 DH d'olives, d'emballages et d'électricité. Sa valeur ajoutée est 900 000 − 350 000 = <b>550 000 DH</b>. Cette richesse sert à payer les salaires, les impôts, les intérêts et à rémunérer les associés.</div>
<h3>2. Classer les entreprises</h3>
<p><b>Selon la taille</b> (effectif, chiffre d'affaires) : très petites entreprises (TPE), petites et moyennes entreprises (PME) et grandes entreprises. Au Maroc, l'immense majorité des entreprises sont des TPE et des PME.</p>
<p><b>Selon le secteur d'activité</b> :</p>
<ul><li>secteur <b>primaire</b> : agriculture, pêche, mines (ex. OCP pour l'extraction des phosphates) ;</li>
<li>secteur <b>secondaire</b> : industrie et transformation (ex. Renault Tanger, industrie agroalimentaire) ;</li>
<li>secteur <b>tertiaire</b> : services (banques, commerce, transport, e-commerce comme les plateformes de vente en ligne).</li></ul>
<p><b>Selon la propriété</b> : entreprises privées, entreprises publiques (l'État est majoritaire, ex. ONCF) et entreprises de l'économie sociale (coopératives, associations).</p>
<h3>3. Les formes juridiques au Maroc</h3>
<table><tr><th>Forme</th><th>Associés</th><th>Responsabilité</th><th>Exemple d'usage</th></tr>
<tr><td>Entreprise individuelle / auto-entrepreneur</td><td>1 personne</td><td>illimitée (sur ses biens personnels)</td><td>petit commerce, freelance en marketing digital</td></tr>
<tr><td>SARL / SARL AU</td><td>1 à 50</td><td>limitée aux apports</td><td>PME, start-up e-commerce</td></tr>
<tr><td>SA</td><td>au moins 5 actionnaires</td><td>limitée aux apports</td><td>grandes entreprises, entreprises cotées</td></tr>
<tr><td>SNC</td><td>au moins 2</td><td>illimitée et solidaire</td><td>affaires familiales</td></tr></table>
<div class="tip">Le statut d'<b>auto-entrepreneur</b> est très utilisé par les jeunes au Maroc pour lancer une activité de vente en ligne ou de services, avec une fiscalité simplifiée.</div>
<h3>4. Les parties prenantes (stakeholders)</h3>
<p>Ce sont tous les acteurs qui influencent l'entreprise ou qui sont influencés par elle :</p>
<ul><li><b>internes</b> : dirigeants, salariés, associés/actionnaires ;</li><li><b>externes</b> : clients, fournisseurs, banques, concurrents, État et collectivités, associations, médias.</li></ul>
<p>Chaque partie a des attentes : le client veut qualité et prix, le salarié veut un bon salaire et de bonnes conditions, l'actionnaire veut des dividendes, l'État veut des impôts et des emplois. Le rôle du manager est de trouver un <b>équilibre</b> entre ces attentes.</p>
<h3>5. Analyser l'environnement : le PESTEL</h3>
<p>On distingue le <b>micro-environnement</b> (clients, concurrents, fournisseurs, proches de l'entreprise) et le <b>macro-environnement</b> (grandes tendances générales). Le modèle PESTEL sert à analyser le macro-environnement :</p>
{{fig:pestel}}
<ul><li><b>P – Politique</b> : stabilité, politiques publiques (ex. programmes d'aide à l'entrepreneuriat).</li>
<li><b>E – Économique</b> : croissance, inflation, taux d'intérêt, pouvoir d'achat.</li>
<li><b>S – Socioculturel</b> : démographie, modes de vie, habitudes d'achat (forte utilisation des réseaux sociaux chez les jeunes).</li>
<li><b>T – Technologique</b> : internet, paiement mobile, intelligence artificielle.</li>
<li><b>E – Écologique</b> : pollution, recyclage, attentes « vertes » des consommateurs.</li>
<li><b>L – Légal</b> : droit du travail, protection des données personnelles (loi 09-08), droit du commerce électronique.</li></ul>
<div class="ex"><b>Mini-PESTEL d'une boutique en ligne de vêtements à Oujda :</b> T = développement du paiement mobile et des réseaux sociaux (opportunité) ; E = baisse du pouvoir d'achat (menace) ; S = les jeunes achètent de plus en plus en ligne (opportunité) ; L = obligation de protéger les données des clients.</div>`,
        ar: `<h3>1. شنو هي المقاولة؟</h3>
<div class="def"><b>تعريف:</b> المقاولة هي تنظيم كيجمع <b>عوامل الإنتاج</b> (العمل، الرأسمال، المواد، المعلومات) باش ينتج <b>سلع أو خدمات</b> موجهة للبيع ف السوق، بهدف تحقيق <b>الربح</b>.</div>
<p>نقدرو نشوفو المقاولة من ثلاث زوايا متكاملة:</p>
<ul><li><b>خلية اقتصادية</b>: كتخلق الثروة (<i>القيمة المضافة</i>) ملي كتحول الاستهلاكات الوسيطة لمنتوجات أكثر نفعا.</li>
<li><b>خلية اجتماعية</b>: كتجمع أشخاص (أجراء، مسيرين) عندهم أهداف مختلفة أحيانا (الأجر، الترقية، الاعتراف).</li>
<li><b>نظام مفتوح</b>: ديما كتتبادل مع المحيط ديالها (الزبناء، الموردين، الأبناك، الدولة).</li></ul>
<p><b>القيمة المضافة</b> كتحسب هكا:</p><span class="f">القيمة المضافة = رقم المعاملات − الاستهلاكات الوسيطة</span>
<div class="ex">تعاونية ديال زيت الزيتون ف تاونات باعت زيت بـ 900 000 درهم. شرات زيتون وتعليب وكهرباء بـ 350 000 درهم. القيمة المضافة ديالها = 900 000 − 350 000 = <b>550 000 درهم</b>. هاد الثروة كتخلص بيها الأجور والضرائب والفوائد وكتكافئ الشركاء.</div>
<h3>2. تصنيف المقاولات</h3>
<p><b>حسب الحجم</b> (عدد الأجراء ورقم المعاملات): المقاولات الصغيرة جدا، المقاولات الصغرى والمتوسطة، والمقاولات الكبرى. ف المغرب، أغلبية المقاولات صغيرة جدا أو صغرى ومتوسطة.</p>
<p><b>حسب قطاع النشاط</b>:</p>
<ul><li>القطاع <b>الأولي</b>: الفلاحة، الصيد، المعادن (مثلا OCP لاستخراج الفوسفاط)؛</li>
<li>القطاع <b>الثانوي</b>: الصناعة والتحويل (مثلا رونو طنجة، الصناعة الغذائية)؛</li>
<li>القطاع <b>الثالث</b>: الخدمات (الأبناك، التجارة، النقل، التجارة الإلكترونية).</li></ul>
<p><b>حسب الملكية</b>: مقاولات خاصة، مقاولات عمومية (الدولة كتملك الأغلبية، مثلا ONCF)، ومقاولات الاقتصاد الاجتماعي (التعاونيات، الجمعيات).</p>
<h3>3. الأشكال القانونية ف المغرب</h3>
<table><tr><th>الشكل</th><th>الشركاء</th><th>المسؤولية</th><th>مثال</th></tr>
<tr><td>مقاولة فردية / مقاول ذاتي</td><td>شخص واحد</td><td>غير محدودة (حتى على الممتلكات الشخصية)</td><td>تجارة صغيرة، خدمات التسويق الرقمي</td></tr>
<tr><td>SARL / SARL AU</td><td>من 1 حتى 50</td><td>محدودة ف المساهمات</td><td>المقاولات الصغرى، شركات التجارة الإلكترونية</td></tr>
<tr><td>SA (شركة المساهمة)</td><td>على الأقل 5 مساهمين</td><td>محدودة ف المساهمات</td><td>الشركات الكبرى، الشركات المدرجة ف البورصة</td></tr>
<tr><td>SNC (شركة التضامن)</td><td>على الأقل 2</td><td>غير محدودة وتضامنية</td><td>المشاريع العائلية</td></tr></table>
<div class="tip">نظام <b>المقاول الذاتي</b> كيستعملوه بزاف ديال الشباب ف المغرب باش يبداو نشاط ديال البيع عبر الأنترنت أو الخدمات، بضريبة مبسطة.</div>
<h3>4. الأطراف المعنية (Stakeholders)</h3>
<p>هوما جميع الفاعلين اللي كيأثرو ف المقاولة أو كيتأثرو بيها:</p>
<ul><li><b>داخليين</b>: المسيرين، الأجراء، الشركاء والمساهمين؛</li><li><b>خارجيين</b>: الزبناء، الموردين، الأبناك، المنافسين، الدولة والجماعات، الجمعيات، الإعلام.</li></ul>
<p>كل طرف عندو انتظارات: الزبون باغي الجودة والثمن، الأجير باغي أجر مزيان وظروف عمل مزيانة، المساهم باغي الأرباح، والدولة باغية الضرائب ومناصب الشغل. دور المسير هو يلقى <b>التوازن</b> بين هاد الانتظارات.</p>
<h3>5. تحليل المحيط: نموذج PESTEL</h3>
<p>كنفرقو بين <b>المحيط الخاص</b> (الزبناء، المنافسين، الموردين، القريبين من المقاولة) و<b>المحيط العام</b> (التوجهات الكبرى). نموذج PESTEL كيستعمل لتحليل المحيط العام:</p>
{{fig:pestel}}
<ul><li><b>P – السياسي</b>: الاستقرار، السياسات العمومية (مثلا برامج دعم المقاولة).</li>
<li><b>E – الاقتصادي</b>: النمو، التضخم، أسعار الفائدة، القدرة الشرائية.</li>
<li><b>S – الاجتماعي والثقافي</b>: الديموغرافيا، أنماط العيش، عادات الشراء (استعمال قوي للشبكات الاجتماعية عند الشباب).</li>
<li><b>T – التكنولوجي</b>: الأنترنت، الأداء عبر الهاتف، الذكاء الاصطناعي.</li>
<li><b>E – البيئي</b>: التلوث، إعادة التدوير، الانتظارات «الخضراء» ديال المستهلكين.</li>
<li><b>L – القانوني</b>: قانون الشغل، حماية المعطيات الشخصية (القانون 09-08)، قانون التجارة الإلكترونية.</li></ul>
<div class="ex"><b>PESTEL صغير لمتجر إلكتروني ديال الحوايج ف وجدة:</b> T = تطور الأداء عبر الهاتف والشبكات الاجتماعية (فرصة)؛ E = تراجع القدرة الشرائية (تهديد)؛ S = الشباب كيشريو أكثر فأكثر عبر الأنترنت (فرصة)؛ L = إلزامية حماية معطيات الزبناء.</div>`,
        en: `<h3>1. What is a company?</h3>
<div class="def"><b>Definition:</b> a company is an organisation that combines <b>factors of production</b> (labour, capital, materials, information) to produce <b>goods or services</b> sold on a market, in order to make a <b>profit</b>.</div>
<p>A company can be seen from three complementary angles:</p>
<ul><li><b>An economic unit</b>: it creates wealth (<i>value added</i>) by transforming intermediate consumption into more useful products.</li>
<li><b>A social unit</b>: it brings together people (employees, managers) whose goals sometimes differ (pay, career, recognition).</li>
<li><b>An open system</b>: it constantly exchanges with its environment (customers, suppliers, banks, the State).</li></ul>
<p><b>Value added</b> is calculated as follows:</p><span class="f">Value added = Turnover − Intermediate consumption</span>
<div class="ex">An olive-oil cooperative in Taounate sells 900,000 MAD of oil. It bought 350,000 MAD of olives, packaging and electricity. Its value added is 900,000 − 350,000 = <b>550,000 MAD</b>. This wealth pays wages, taxes and interest, and rewards the members.</div>
<h3>2. Classifying companies</h3>
<p><b>By size</b> (staff, turnover): very small enterprises, small and medium-sized enterprises (SMEs) and large companies. In Morocco, the vast majority are very small firms and SMEs.</p>
<p><b>By sector</b>:</p>
<ul><li><b>primary</b>: agriculture, fishing, mining (e.g. OCP for phosphates);</li>
<li><b>secondary</b>: industry and manufacturing (e.g. Renault Tangier, food industry);</li>
<li><b>tertiary</b>: services (banks, retail, transport, e-commerce).</li></ul>
<p><b>By ownership</b>: private companies, public companies (the State holds the majority, e.g. ONCF) and social-economy organisations (cooperatives, associations).</p>
<h3>3. Legal forms in Morocco</h3>
<table><tr><th>Form</th><th>Partners</th><th>Liability</th><th>Typical use</th></tr>
<tr><td>Sole proprietorship / auto-entrepreneur</td><td>1 person</td><td>unlimited (personal assets)</td><td>small shop, digital-marketing freelancer</td></tr>
<tr><td>SARL / single-member SARL (LLC)</td><td>1 to 50</td><td>limited to contributions</td><td>SMEs, e-commerce start-ups</td></tr>
<tr><td>SA (public limited company)</td><td>at least 5 shareholders</td><td>limited to contributions</td><td>large and listed companies</td></tr>
<tr><td>SNC (general partnership)</td><td>at least 2</td><td>unlimited and joint</td><td>family businesses</td></tr></table>
<div class="tip">The <b>auto-entrepreneur</b> status is widely used by young Moroccans to start an online-selling or service activity with simplified taxation.</div>
<h3>4. Stakeholders</h3>
<p>Stakeholders are all the actors who influence the company or are influenced by it:</p>
<ul><li><b>internal</b>: managers, employees, partners/shareholders;</li><li><b>external</b>: customers, suppliers, banks, competitors, the State and local authorities, associations, the media.</li></ul>
<p>Each one has expectations: the customer wants quality and a fair price, the employee wants good pay and conditions, the shareholder wants dividends, the State wants taxes and jobs. The manager's role is to find a <b>balance</b> between them.</p>
<h3>5. Analysing the environment: PESTEL</h3>
<p>We distinguish the <b>micro-environment</b> (customers, competitors, suppliers) from the <b>macro-environment</b> (broad general trends). PESTEL is used to analyse the macro-environment:</p>
{{fig:pestel}}
<ul><li><b>P – Political</b>: stability, public policies (e.g. support for entrepreneurship).</li>
<li><b>E – Economic</b>: growth, inflation, interest rates, purchasing power.</li>
<li><b>S – Social</b>: demographics, lifestyles, buying habits (heavy social-media use by young people).</li>
<li><b>T – Technological</b>: internet, mobile payment, artificial intelligence.</li>
<li><b>E – Environmental</b>: pollution, recycling, consumers' “green” expectations.</li>
<li><b>L – Legal</b>: labour law, personal-data protection (Law 09-08), e-commerce law.</li></ul>
<div class="ex"><b>Mini-PESTEL for an online clothing shop in Oujda:</b> T = growth of mobile payment and social media (opportunity); E = falling purchasing power (threat); S = young people buy online more and more (opportunity); L = duty to protect customer data.</div>`,
      },
      key: { fr: ["L'entreprise combine des facteurs de production pour créer de la valeur ajoutée (CA − consommations intermédiaires).", 'Trois secteurs : primaire, secondaire, tertiaire.', 'SARL et SA : responsabilité limitée aux apports ; SNC et entreprise individuelle : responsabilité illimitée.', 'Le PESTEL analyse 6 familles de facteurs du macro-environnement.'],
        ar: ['المقاولة كتجمع عوامل الإنتاج باش تخلق القيمة المضافة (رقم المعاملات − الاستهلاكات الوسيطة).', 'ثلاث قطاعات: أولي، ثانوي، ثالث.', 'SARL و SA: مسؤولية محدودة ف المساهمات؛ SNC والمقاولة الفردية: مسؤولية غير محدودة.', 'PESTEL كيحلل 6 عائلات ديال العوامل ف المحيط العام.'],
        en: ['A company combines factors of production to create value added (turnover − intermediate consumption).', 'Three sectors: primary, secondary, tertiary.', 'SARL and SA: liability limited to contributions; SNC and sole proprietorship: unlimited liability.', 'PESTEL analyses 6 families of macro-environment factors.'] } },

    { id: 'mgt2', t: { fr: 'Les fonctions du manager', ar: 'وظائف المسير', en: 'The functions of the manager' },
      sum: { fr: 'Planifier, organiser, diriger, contrôler ; rôles de Mintzberg ; objectifs SMART', ar: 'التخطيط، التنظيم، التوجيه، المراقبة؛ أدوار مينتزبرغ؛ الأهداف SMART', en: 'Plan, organise, lead, control; Mintzberg’s roles; SMART objectives' },
      body: {
        fr: `<h3>1. Qu'est-ce que manager ?</h3>
<div class="def"><b>Manager</b>, c'est atteindre les objectifs d'une organisation en utilisant de façon <b>efficace</b> (avec le moins de ressources possible) et <b>efficiente</b> les ressources humaines, financières, matérielles et informationnelles.</div>
<p>On distingue souvent l'<b>efficacité</b> (atteindre l'objectif fixé) et l'<b>efficience</b> (l'atteindre au moindre coût). Une campagne publicitaire qui atteint 10 000 ventes est efficace ; si elle les atteint avec un budget deux fois plus petit qu'une autre, elle est aussi plus efficiente.</p>
<h3>2. Les quatre fonctions (Henri Fayol)</h3>
<p>Henri Fayol (1916) a décrit l'administration en cinq verbes : prévoir, organiser, commander, coordonner, contrôler. Aujourd'hui on les résume en quatre fonctions qui forment un cycle, le <b>PODC</b> :</p>
{{fig:podc}}
<h4>a) Planifier</h4><p>Fixer les objectifs et choisir les moyens pour les atteindre. On distingue le plan <b>stratégique</b> (long terme, 3 à 5 ans, direction générale), <b>tactique</b> (moyen terme, par service) et <b>opérationnel</b> (court terme, au quotidien).</p>
<h4>b) Organiser</h4><p>Répartir les tâches, définir qui fait quoi, qui décide et qui rend compte à qui. Le résultat se voit dans l'<b>organigramme</b>.</p>
<h4>c) Diriger (animer)</h4><p>Motiver, communiquer, commander et créer un bon climat de travail. C'est la dimension humaine : le <b>leadership</b>.</p>
<h4>d) Contrôler</h4><p>Comparer les résultats aux objectifs, mesurer les <b>écarts</b> avec des indicateurs (tableau de bord) et corriger. Le contrôle relance ensuite la planification : c'est un cycle.</p>
<h3>3. Fixer de bons objectifs : la méthode SMART</h3>
<p>Un objectif bien formulé doit être :</p>
<table><tr><th>Lettre</th><th>Signification</th><th>Question à se poser</th></tr>
<tr><td><b>S</b></td><td>Spécifique</td><td>Que veut-on exactement ?</td></tr>
<tr><td><b>M</b></td><td>Mesurable</td><td>Avec quel chiffre le vérifier ?</td></tr>
<tr><td><b>A</b></td><td>Atteignable (accepté)</td><td>Est-ce réaliste avec nos moyens ?</td></tr>
<tr><td><b>R</b></td><td>Réaliste / pertinent</td><td>Est-ce utile pour l'entreprise ?</td></tr>
<tr><td><b>T</b></td><td>Temporellement défini</td><td>Pour quelle date ?</td></tr></table>
<div class="ex">« Augmenter les ventes » n'est pas SMART. « Augmenter de 15 % les ventes de la boutique en ligne d'ici le 30 juin, grâce à une campagne Instagram » est SMART.</div>
<h3>4. Les rôles du manager selon Mintzberg</h3>
<p>Henry Mintzberg (1973) a observé des dirigeants et montré que leur travail est fait d'activités courtes et variées. Il distingue <b>10 rôles</b> regroupés en 3 familles :</p>
<ul><li><b>Rôles interpersonnels</b> : symbole (représenter l'entreprise), leader (motiver l'équipe), agent de liaison (créer un réseau).</li>
<li><b>Rôles informationnels</b> : observateur (collecter l'information), diffuseur (la transmettre en interne), porte-parole (communiquer à l'extérieur).</li>
<li><b>Rôles décisionnels</b> : entrepreneur (innover), régulateur (gérer les crises), répartiteur de ressources (budget), négociateur.</li></ul>
<h3>5. Les styles de direction</h3>
<p>Selon la façon de prendre les décisions avec l'équipe, on distingue (Likert, Lewin) :</p>
<ul><li><b>autoritaire</b> : le chef décide seul ; efficace en urgence mais démotivant à long terme ;</li>
<li><b>paternaliste</b> : le chef décide seul mais se soucie du bien-être des salariés ;</li>
<li><b>consultatif</b> : le chef demande l'avis de l'équipe avant de décider ;</li>
<li><b>participatif</b> : la décision est prise avec l'équipe ; il motive et responsabilise ;</li>
<li><b>laisser-faire (délégatif)</b> : l'équipe s'organise seule ; possible avec des experts autonomes.</li></ul>
<div class="tip">Il n'existe pas de « meilleur » style : le bon manager adapte son style à la situation et à la maturité de son équipe (c'est le <b>management situationnel</b> de Hersey et Blanchard).</div>`,
        ar: `<h3>1. شنو معنى التسيير؟</h3>
<div class="def"><b>التسيير</b> هو الوصول لأهداف التنظيم باستعمال الموارد البشرية والمالية والمادية والمعلوماتية بطريقة <b>فعالة</b> و<b>ناجعة</b> (بأقل موارد ممكنة).</div>
<p>كنفرقو بين <b>الفعالية</b> (الوصول للهدف) و<b>النجاعة</b> (الوصول ليه بأقل تكلفة). حملة إشهارية وصلات لـ 10 000 مبيعة هي فعالة؛ وإلا وصلات ليها بميزانية نص ديال حملة أخرى، فهي حتى ناجعة أكثر.</p>
<h3>2. الوظائف الأربع (هنري فايول)</h3>
<p>هنري فايول (1916) وصف الإدارة بخمس أفعال: التوقع، التنظيم، الأمر، التنسيق، المراقبة. اليوم كنلخصوهم ف أربع وظائف كيكونو دورة، <b>PODC</b>:</p>
{{fig:podc}}
<h4>أ) التخطيط</h4><p>تحديد الأهداف واختيار الوسائل للوصول ليها. كاين المخطط <b>الاستراتيجي</b> (المدى الطويل، 3 حتى 5 سنين، الإدارة العامة)، <b>التكتيكي</b> (المدى المتوسط، حسب المصلحة) و<b>العملياتي</b> (المدى القصير، اليومي).</p>
<h4>ب) التنظيم</h4><p>توزيع المهام، وتحديد شكون كيدير آش، شكون كيقرر، وشكون كيقدم الحساب لشكون. النتيجة كتبان ف <b>الهيكل التنظيمي</b>.</p>
<h4>ج) التوجيه (القيادة)</h4><p>التحفيز، التواصل، إعطاء التعليمات وخلق جو عمل مزيان. هادي هي الجانب الإنساني: <b>القيادة</b>.</p>
<h4>د) المراقبة</h4><p>مقارنة النتائج مع الأهداف، قياس <b>الفوارق</b> بالمؤشرات (لوحة القيادة) والتصحيح. المراقبة كترجع تعطي انطلاقة للتخطيط: هادي دورة.</p>
<h3>3. تحديد أهداف مزيانة: طريقة SMART</h3>
<p>الهدف المصاغ مزيان خاصو يكون:</p>
<table><tr><th>الحرف</th><th>المعنى</th><th>السؤال</th></tr>
<tr><td><b>S</b></td><td>محدد</td><td>شنو بغينا بالضبط؟</td></tr>
<tr><td><b>M</b></td><td>قابل للقياس</td><td>بأي رقم غادي نتحققو منو؟</td></tr>
<tr><td><b>A</b></td><td>قابل للتحقيق (مقبول)</td><td>واش واقعي بالوسائل ديالنا؟</td></tr>
<tr><td><b>R</b></td><td>واقعي / ملائم</td><td>واش مفيد للمقاولة؟</td></tr>
<tr><td><b>T</b></td><td>محدد ف الزمن</td><td>لإمتى؟</td></tr></table>
<div class="ex">«نزيدو ف المبيعات» ماشي هدف SMART. «نزيدو 15 % ف المبيعات ديال المتجر الإلكتروني قبل 30 يونيو، بحملة على إنستغرام» هو هدف SMART.</div>
<h3>4. أدوار المسير حسب مينتزبرغ</h3>
<p>هنري مينتزبرغ (1973) لاحظ المسيرين وبين بلي الخدمة ديالهم مكونة من أنشطة قصيرة ومتنوعة. ميز <b>10 أدوار</b> ف 3 عائلات:</p>
<ul><li><b>أدوار العلاقات الشخصية</b>: الرمز (تمثيل المقاولة)، القائد (تحفيز الفريق)، ضابط الاتصال (خلق شبكة علاقات).</li>
<li><b>أدوار إعلامية</b>: الملاحظ (جمع المعلومات)، الناشر (نقلها داخليا)، الناطق الرسمي (التواصل مع الخارج).</li>
<li><b>أدوار قرارية</b>: المقاول (الابتكار)، المنظم (تسيير الأزمات)، موزع الموارد (الميزانية)، المفاوض.</li></ul>
<h3>5. أنماط القيادة</h3>
<p>حسب طريقة اتخاذ القرار مع الفريق، كنميزو (ليكرت، ليوين):</p>
<ul><li><b>السلطوي</b>: الرئيس كيقرر بوحدو؛ فعال ف الحالات المستعجلة ولكن كيقتل الحماس على المدى الطويل؛</li>
<li><b>الأبوي</b>: الرئيس كيقرر بوحدو ولكن كيهتم براحة الأجراء؛</li>
<li><b>الاستشاري</b>: الرئيس كيطلب رأي الفريق قبل ما يقرر؛</li>
<li><b>التشاركي</b>: القرار كيتاخد مع الفريق؛ كيحفز وكيحمل المسؤولية؛</li>
<li><b>الترك (التفويض)</b>: الفريق كينظم راسو بوحدو؛ ممكن مع خبراء مستقلين.</li></ul>
<div class="tip">ما كاينش نمط «أحسن» من الآخر: المسير المزيان كيكيف النمط ديالو مع الوضعية ومع نضج الفريق ديالو (هادا هو <b>التسيير الظرفي</b> ديال هيرسي وبلانشارد).</div>`,
        en: `<h3>1. What does managing mean?</h3>
<div class="def"><b>Managing</b> means achieving an organisation's objectives by using human, financial, material and information resources <b>effectively</b> and <b>efficiently</b> (with as few resources as possible).</div>
<p><b>Effectiveness</b> is reaching the goal; <b>efficiency</b> is reaching it at the lowest cost. An advertising campaign that reaches 10,000 sales is effective; if it does so with half the budget of another, it is also more efficient.</p>
<h3>2. The four functions (Henri Fayol)</h3>
<p>Henri Fayol (1916) described administration with five verbs: forecast, organise, command, coordinate, control. Today they are summarised as four functions forming a cycle, <b>POLC</b>:</p>
{{fig:podc}}
<h4>a) Planning</h4><p>Setting objectives and choosing the means to reach them. Plans can be <b>strategic</b> (long term, 3–5 years, top management), <b>tactical</b> (medium term, per department) or <b>operational</b> (short term, day to day).</p>
<h4>b) Organising</h4><p>Dividing tasks, defining who does what, who decides and who reports to whom. The result appears in the <b>organisation chart</b>.</p>
<h4>c) Leading</h4><p>Motivating, communicating, giving instructions and creating a good work climate — the human side of management: <b>leadership</b>.</p>
<h4>d) Controlling</h4><p>Comparing results with objectives, measuring <b>gaps</b> with indicators (a dashboard) and correcting. Control then feeds the next planning round: it is a cycle.</p>
<h3>3. Setting good objectives: SMART</h3>
<p>A well-written objective is:</p>
<table><tr><th>Letter</th><th>Meaning</th><th>Question to ask</th></tr>
<tr><td><b>S</b></td><td>Specific</td><td>What exactly do we want?</td></tr>
<tr><td><b>M</b></td><td>Measurable</td><td>Which figure will prove it?</td></tr>
<tr><td><b>A</b></td><td>Achievable (agreed)</td><td>Is it realistic with our means?</td></tr>
<tr><td><b>R</b></td><td>Relevant</td><td>Is it useful for the company?</td></tr>
<tr><td><b>T</b></td><td>Time-bound</td><td>By when?</td></tr></table>
<div class="ex">“Increase sales” is not SMART. “Increase online-shop sales by 15% by 30 June through an Instagram campaign” is SMART.</div>
<h3>4. Mintzberg's managerial roles</h3>
<p>Henry Mintzberg (1973) observed managers and showed that their work consists of short, varied activities. He identified <b>10 roles</b> in 3 families:</p>
<ul><li><b>Interpersonal</b>: figurehead (represents the firm), leader (motivates the team), liaison (builds a network).</li>
<li><b>Informational</b>: monitor (gathers information), disseminator (passes it on internally), spokesperson (communicates externally).</li>
<li><b>Decisional</b>: entrepreneur (innovates), disturbance handler (manages crises), resource allocator (budget), negotiator.</li></ul>
<h3>5. Leadership styles</h3>
<p>Depending on how decisions are made with the team, we distinguish (Likert, Lewin):</p>
<ul><li><b>autocratic</b>: the boss decides alone; effective in emergencies but demotivating in the long run;</li>
<li><b>paternalistic</b>: the boss decides alone but cares for employees' well-being;</li>
<li><b>consultative</b>: the boss asks for the team's opinion before deciding;</li>
<li><b>participative</b>: the decision is made with the team; it motivates and empowers;</li>
<li><b>laissez-faire (delegative)</b>: the team organises itself; works with autonomous experts.</li></ul>
<div class="tip">There is no single “best” style: a good manager adapts to the situation and the team's maturity (Hersey and Blanchard's <b>situational leadership</b>).</div>`,
      },
      key: { fr: ['Efficacité = atteindre l’objectif ; efficience = l’atteindre au moindre coût.', 'Les 4 fonctions : Planifier, Organiser, Diriger, Contrôler (PODC), d’après Fayol.', 'Un objectif doit être SMART.', 'Mintzberg : 10 rôles en 3 familles (interpersonnels, informationnels, décisionnels).'],
        ar: ['الفعالية = الوصول للهدف؛ النجاعة = الوصول ليه بأقل تكلفة.', 'الوظائف الأربع: التخطيط، التنظيم، التوجيه، المراقبة (PODC)، حسب فايول.', 'الهدف خاصو يكون SMART.', 'مينتزبرغ: 10 أدوار ف 3 عائلات (علاقات شخصية، إعلامية، قرارية).'],
        en: ['Effectiveness = reaching the goal; efficiency = reaching it at the lowest cost.', 'The 4 functions: Plan, Organise, Lead, Control, after Fayol.', 'An objective must be SMART.', 'Mintzberg: 10 roles in 3 families (interpersonal, informational, decisional).'] } },

    { id: 'mgt3', t: { fr: 'Les grandes écoles de pensée', ar: 'المدارس الكبرى ديال الفكر التسييري', en: 'The main schools of management thought' },
      sum: { fr: 'Taylor, Fayol, Weber, Mayo, Maslow, Herzberg, McGregor', ar: 'تايلور، فايول، فيبر، مايو، ماسلو، هيرزبرغ، ماكغريغور', en: 'Taylor, Fayol, Weber, Mayo, Maslow, Herzberg, McGregor' },
      body: {
        fr: `<h3>1. L'école classique (début du XXe siècle)</h3>
<p>Elle cherche la « meilleure façon » d'organiser le travail pour augmenter la productivité. L'homme y est vu surtout comme un exécutant motivé par le salaire.</p>
<h4>Frederick W. Taylor – l'organisation scientifique du travail (OST)</h4>
<ul><li><b>Division verticale</b> : ceux qui conçoivent (bureau des méthodes) sont séparés de ceux qui exécutent (ouvriers).</li>
<li><b>Division horizontale</b> : le travail est découpé en tâches simples et répétitives, chronométrées (« one best way »).</li>
<li><b>Salaire au rendement</b> : plus l'ouvrier produit, plus il gagne.</li></ul>
<p>Henry Ford a appliqué ces idées avec le <b>travail à la chaîne</b> (Ford T) et la standardisation : c'est le <i>fordisme</i>.</p>
<div class="warn">Limites : travail monotone, ennui, absentéisme, l'ouvrier ne prend aucune initiative.</div>
<h4>Henri Fayol – l'administration</h4><p>Il s'intéresse à la direction de l'entreprise. Il décrit 6 fonctions de l'entreprise (technique, commerciale, financière, sécurité, comptable, administrative) et 14 principes, dont l'<b>unité de commandement</b> (un seul chef) et la <b>hiérarchie</b>.</p>
<h4>Max Weber – la bureaucratie</h4><p>Pour Weber, l'organisation la plus efficace repose sur des <b>règles écrites</b>, une hiérarchie claire, des postes définis et un recrutement selon la compétence. La « bureaucratie » au sens de Weber n'est pas péjorative : elle garantit l'égalité et la rationalité. Ses limites : lenteur et rigidité.</p>
<h3>2. L'école des relations humaines (années 1930)</h3>
<p><b>Elton Mayo</b> mène des expériences à l'usine Hawthorne (Western Electric, 1927-1932). En modifiant l'éclairage, il constate que la productivité augmente… même quand on diminue la lumière ! Conclusion : ce sont l'<b>attention portée aux ouvriers</b> et l'esprit de groupe qui les motivent (« effet Hawthorne »). Le facteur humain et social devient central.</p>
<h3>3. Les théories de la motivation</h3>
<h4>Abraham Maslow – la pyramide des besoins (1943)</h4>
{{fig:maslow}}
<p>L'homme cherche d'abord à satisfaire ses besoins de base, puis passe aux besoins supérieurs. En entreprise : un salaire suffisant (physiologique), un contrat stable (sécurité), une bonne équipe (appartenance), la reconnaissance et les promotions (estime), des missions intéressantes et la formation (accomplissement).</p>
<h4>Frederick Herzberg – les deux facteurs</h4>
<ul><li><b>Facteurs d'hygiène</b> (salaire, conditions de travail, relations avec le chef) : s'ils manquent, le salarié est mécontent ; mais s'ils sont présents, ils ne motivent pas vraiment.</li>
<li><b>Facteurs moteurs</b> (responsabilités, reconnaissance, intérêt du travail, progression) : ce sont eux qui motivent réellement.</li></ul>
<h4>Douglas McGregor – théories X et Y</h4>
<table><tr><th>Théorie X</th><th>Théorie Y</th></tr><tr><td>L'homme n'aime pas travailler, il fuit les responsabilités.</td><td>Le travail est naturel, l'homme aime les responsabilités.</td></tr><tr><td>Il faut le contrôler et le sanctionner.</td><td>Il faut lui faire confiance et le responsabiliser.</td></tr><tr><td>→ style autoritaire</td><td>→ style participatif</td></tr></table>
<h3>4. Les approches modernes</h3>
<ul><li><b>L'approche systémique</b> : l'entreprise est un système ouvert, composé de sous-systèmes en interaction.</li>
<li><b>L'approche de la contingence</b> (Burns et Stalker, Lawrence et Lorsch) : il n'y a pas d'organisation idéale ; la bonne structure dépend de l'environnement (stable ou turbulent), de la taille et de la technologie.</li>
<li><b>Le management par objectifs</b> (Peter Drucker) : fixer des objectifs négociés avec chaque salarié et évaluer sur les résultats.</li></ul>
<div class="tip">Astuce mémoire : <b>Taylor = tâches</b>, <b>Fayol = fonctions</b>, <b>Weber = règles</b>, <b>Mayo = groupe</b>, <b>Maslow = pyramide</b>, <b>Herzberg = 2 facteurs</b>, <b>McGregor = X/Y</b>.</div>`,
        ar: `<h3>1. المدرسة الكلاسيكية (بداية القرن العشرين)</h3>
<p>كتقلب على «أحسن طريقة» لتنظيم العمل باش تزيد الإنتاجية. الإنسان كيتشاف بالأساس كمنفذ كيحفزو الأجر.</p>
<h4>فريدريك تايلور – التنظيم العلمي للعمل</h4>
<ul><li><b>التقسيم العمودي</b>: اللي كيصممو (مكتب الطرق) منفصلين على اللي كينفذو (العمال).</li>
<li><b>التقسيم الأفقي</b>: العمل كيتقسم لمهام بسيطة ومتكررة، محسوبة بالكرونومتر («أحسن طريقة واحدة»).</li>
<li><b>الأجر حسب المردودية</b>: كلما نتج العامل أكثر، كلما ربح أكثر.</li></ul>
<p>هنري فورد طبق هاد الأفكار بـ<b>العمل ف السلسلة</b> (Ford T) والتنميط: هادا هو <i>الفوردية</i>.</p>
<div class="warn">الحدود: عمل رتيب، الملل، الغياب، والعامل ما كياخد حتى مبادرة.</div>
<h4>هنري فايول – الإدارة</h4><p>كيهتم بإدارة المقاولة. وصف 6 وظائف ديال المقاولة (تقنية، تجارية، مالية، أمنية، محاسبية، إدارية) و14 مبدأ، من بينهم <b>وحدة الأمر</b> (رئيس واحد) و<b>التسلسل الهرمي</b>.</p>
<h4>ماكس فيبر – البيروقراطية</h4><p>حسب فيبر، أكثر تنظيم فعال كيعتمد على <b>قواعد مكتوبة</b>، تسلسل هرمي واضح، مناصب محددة وتوظيف حسب الكفاءة. «البيروقراطية» عند فيبر ماشي حاجة قدحية: كتضمن المساواة والعقلانية. الحدود ديالها: البطء والجمود.</p>
<h3>2. مدرسة العلاقات الإنسانية (الثلاثينات)</h3>
<p><b>إلتون مايو</b> دار تجارب ف معمل هاوثورن (Western Electric، 1927-1932). ملي بدل الضو، لاحظ بلي الإنتاجية كتطلع… حتى ملي كينقص الضو! الخلاصة: <b>الاهتمام بالعمال</b> وروح الجماعة هوما اللي كيحفزوهم («أثر هاوثورن»). العامل الإنساني والاجتماعي ولى ف المركز.</p>
<h3>3. نظريات التحفيز</h3>
<h4>أبراهام ماسلو – هرم الحاجات (1943)</h4>
{{fig:maslow}}
<p>الإنسان كيقلب الأول يلبي الحاجات الأساسية، ومن بعد كيدوز للحاجات العليا. ف المقاولة: أجر كافي (فيزيولوجي)، عقد مستقر (الأمان)، فريق مزيان (الانتماء)، الاعتراف والترقية (التقدير)، مهام مهمة والتكوين (تحقيق الذات).</p>
<h4>فريدريك هيرزبرغ – العاملين</h4>
<ul><li><b>عوامل النظافة</b> (الأجر، ظروف العمل، العلاقة مع الرئيس): إلا كانو ناقصين الأجير كيكون غير راضي؛ ولكن إلا كانو موجودين ما كيحفزوش بزاف.</li>
<li><b>العوامل المحفزة</b> (المسؤوليات، الاعتراف، أهمية العمل، التطور): هوما اللي كيحفزو بصح.</li></ul>
<h4>دوغلاس ماكغريغور – النظريتين X و Y</h4>
<table><tr><th>النظرية X</th><th>النظرية Y</th></tr><tr><td>الإنسان ما كيحبش يخدم وكيهرب من المسؤوليات.</td><td>العمل حاجة طبيعية، والإنسان كيحب المسؤولية.</td></tr><tr><td>خاص المراقبة والعقاب.</td><td>خاص الثقة وتحميل المسؤولية.</td></tr><tr><td>← نمط سلطوي</td><td>← نمط تشاركي</td></tr></table>
<h3>4. المقاربات الحديثة</h3>
<ul><li><b>المقاربة النسقية</b>: المقاولة نظام مفتوح مكون من أنظمة فرعية متفاعلة.</li>
<li><b>المقاربة الظرفية</b> (بيرنز وستالكر، لورانس ولورش): ما كاينش تنظيم مثالي؛ البنية المزيانة كتعتمد على المحيط (مستقر ولا متقلب)، الحجم والتكنولوجيا.</li>
<li><b>التسيير بالأهداف</b> (بيتر دراكر): تحديد أهداف متفاوض عليها مع كل أجير والتقييم حسب النتائج.</li></ul>
<div class="tip">باش تحفظي: <b>تايلور = المهام</b>، <b>فايول = الوظائف</b>، <b>فيبر = القواعد</b>، <b>مايو = الجماعة</b>، <b>ماسلو = الهرم</b>، <b>هيرزبرغ = عاملين</b>، <b>ماكغريغور = X/Y</b>.</div>`,
        en: `<h3>1. The classical school (early 20th century)</h3>
<p>It looks for the “best way” to organise work in order to raise productivity. People are mainly seen as executors motivated by pay.</p>
<h4>Frederick W. Taylor – scientific management</h4>
<ul><li><b>Vertical division</b>: those who design the work (methods office) are separated from those who execute it (workers).</li>
<li><b>Horizontal division</b>: work is broken into simple, repetitive, timed tasks (“one best way”).</li>
<li><b>Piece-rate pay</b>: the more a worker produces, the more he earns.</li></ul>
<p>Henry Ford applied these ideas through the <b>assembly line</b> (Model T) and standardisation: <i>Fordism</i>.</p>
<div class="warn">Limits: monotonous work, boredom, absenteeism, no initiative for workers.</div>
<h4>Henri Fayol – administration</h4><p>He focuses on running the company. He describes 6 business functions (technical, commercial, financial, security, accounting, administrative) and 14 principles, including <b>unity of command</b> (one boss only) and the <b>scalar chain</b> (hierarchy).</p>
<h4>Max Weber – bureaucracy</h4><p>For Weber, the most efficient organisation relies on <b>written rules</b>, a clear hierarchy, defined positions and recruitment by competence. Weber's “bureaucracy” is not negative: it ensures equality and rationality. Its limits: slowness and rigidity.</p>
<h3>2. The human relations school (1930s)</h3>
<p><b>Elton Mayo</b> ran experiments at the Hawthorne plant (Western Electric, 1927–1932). When changing the lighting, productivity rose… even when the light was reduced! Conclusion: <b>attention paid to workers</b> and group spirit motivate them (the “Hawthorne effect”). The human and social factor becomes central.</p>
<h3>3. Theories of motivation</h3>
<h4>Abraham Maslow – the hierarchy of needs (1943)</h4>
{{fig:maslow}}
<p>People first satisfy basic needs, then move up to higher needs. At work: a sufficient wage (physiological), a stable contract (safety), a good team (belonging), recognition and promotion (esteem), interesting tasks and training (self-actualisation).</p>
<h4>Frederick Herzberg – the two-factor theory</h4>
<ul><li><b>Hygiene factors</b> (pay, working conditions, relations with the boss): if missing, employees are dissatisfied; if present, they do not really motivate.</li>
<li><b>Motivators</b> (responsibility, recognition, interesting work, advancement): these truly motivate.</li></ul>
<h4>Douglas McGregor – Theory X and Theory Y</h4>
<table><tr><th>Theory X</th><th>Theory Y</th></tr><tr><td>People dislike work and avoid responsibility.</td><td>Work is natural; people seek responsibility.</td></tr><tr><td>They must be controlled and sanctioned.</td><td>They should be trusted and empowered.</td></tr><tr><td>→ autocratic style</td><td>→ participative style</td></tr></table>
<h3>4. Modern approaches</h3>
<ul><li><b>Systems approach</b>: the firm is an open system made of interacting subsystems.</li>
<li><b>Contingency approach</b> (Burns & Stalker, Lawrence & Lorsch): there is no ideal organisation; the right structure depends on the environment (stable or turbulent), size and technology.</li>
<li><b>Management by objectives</b> (Peter Drucker): set objectives negotiated with each employee and assess results.</li></ul>
<div class="tip">Memory trick: <b>Taylor = tasks</b>, <b>Fayol = functions</b>, <b>Weber = rules</b>, <b>Mayo = group</b>, <b>Maslow = pyramid</b>, <b>Herzberg = 2 factors</b>, <b>McGregor = X/Y</b>.</div>`,
      },
      key: { fr: ['Taylor : OST, division du travail, chronométrage, salaire au rendement.', 'Mayo (Hawthorne) : l’attention et le groupe motivent.', 'Maslow : 5 niveaux ; Herzberg : facteurs d’hygiène vs facteurs moteurs.', 'McGregor : X (contrôle) vs Y (confiance).'],
        ar: ['تايلور: التنظيم العلمي، تقسيم العمل، الكرونومتر، الأجر حسب المردودية.', 'مايو (هاوثورن): الاهتمام والجماعة كيحفزو.', 'ماسلو: 5 مستويات؛ هيرزبرغ: عوامل النظافة مقابل العوامل المحفزة.', 'ماكغريغور: X (المراقبة) مقابل Y (الثقة).'],
        en: ['Taylor: scientific management, division of labour, timing, piece-rate pay.', 'Mayo (Hawthorne): attention and the group motivate.', 'Maslow: 5 levels; Herzberg: hygiene factors vs motivators.', 'McGregor: X (control) vs Y (trust).'] } },

    { id: 'mgt4', t: { fr: 'Décision, stratégie et structures', ar: 'القرار، الاستراتيجية والبنيات', en: 'Decision, strategy and structures' },
      sum: { fr: 'Types de décisions, processus de décision, SWOT, structures organisationnelles', ar: 'أنواع القرارات، مراحل القرار، SWOT، البنيات التنظيمية', en: 'Types of decisions, decision process, SWOT, organisational structures' },
      body: {
        fr: `<h3>1. Les types de décisions (Igor Ansoff)</h3>
<table><tr><th>Type</th><th>Qui ?</th><th>Horizon</th><th>Exemple</th></tr>
<tr><td><b>Stratégique</b></td><td>direction générale</td><td>long terme, engage l'avenir</td><td>se lancer dans la vente en ligne, ouvrir à l'export</td></tr>
<tr><td><b>Tactique (administrative)</b></td><td>cadres, chefs de service</td><td>moyen terme</td><td>choisir un nouveau fournisseur, organiser une campagne</td></tr>
<tr><td><b>Opérationnelle</b></td><td>agents de maîtrise, employés</td><td>court terme, répétitive</td><td>commander du stock, planifier les horaires</td></tr></table>
<p>On distingue aussi les décisions <b>programmables</b> (répétitives, avec une règle) et <b>non programmables</b> (nouvelles, incertaines).</p>
<h3>2. Le processus de décision</h3>
<p>Herbert Simon a montré que le décideur a une <b>rationalité limitée</b> : il ne connaît pas toutes les solutions et choisit la première solution « satisfaisante » plutôt que la meilleure. Son modèle (IMC : Intelligence, Modélisation, Choix) peut être complété ainsi :</p>
{{fig:decision}}
<h3>3. Le diagnostic stratégique : la matrice SWOT</h3>
<p>Avant de choisir une stratégie, on fait un diagnostic <b>interne</b> (forces et faiblesses de l'entreprise) et <b>externe</b> (opportunités et menaces de l'environnement, souvent tirées du PESTEL).</p>
{{fig:swot}}
<div class="ex"><b>SWOT d'une petite marque marocaine de cosmétiques à l'argan :</b><br>Forces : produit naturel authentique, savoir-faire des coopératives.<br>Faiblesses : petit budget de communication, site web peu visible.<br>Opportunités : succès mondial de l'argan, croissance du e-commerce et des réseaux sociaux.<br>Menaces : contrefaçons, grandes marques internationales.<br><b>Stratégie possible :</b> utiliser ses forces pour saisir les opportunités → vente en ligne à l'international avec des influenceurs.</div>
<h3>4. Les grandes stratégies</h3>
<p>Selon Michael Porter, une entreprise obtient un avantage concurrentiel par :</p>
<ul><li><b>la domination par les coûts</b> : produire moins cher que les concurrents (grande série, efficacité) ;</li>
<li><b>la différenciation</b> : proposer un produit perçu comme unique (qualité, marque, service) ;</li>
<li><b>la focalisation (niche)</b> : se concentrer sur un segment précis de clients.</li></ul>
<p>Pour croître, elle peut aussi choisir la <b>spécialisation</b>, la <b>diversification</b>, l'<b>intégration</b> (verticale ou horizontale), l'<b>internationalisation</b> ou des <b>alliances</b>.</p>
<h3>5. Les structures organisationnelles</h3>
<p>La structure est la façon dont l'entreprise répartit le travail et l'autorité. On la représente par un <b>organigramme</b>.</p>
{{fig:orga}}
<ul><li><b>Structure hiérarchique (linéaire)</b> : chaque salarié a un seul chef (unité de commandement, Fayol). Simple et claire, mais lente.</li>
<li><b>Structure fonctionnelle</b> : services par fonction (commercial, production, finance, RH). Spécialisation efficace, mais risque de cloisonnement.</li>
<li><b>Structure divisionnelle</b> : divisions par produit, par marché ou par région, chacune avec ses propres fonctions. Adaptée aux grandes entreprises diversifiées.</li>
<li><b>Structure matricielle</b> : double rattachement (un chef de fonction + un chef de projet). Flexible, mais risque de conflits d'autorité.</li>
<li><b>Structure en réseau / plate</b> : peu de niveaux hiérarchiques, équipes autonomes, typique des start-ups du numérique.</li></ul>
<div class="tip">Notions liées : <b>centralisation</b> (les décisions remontent au sommet) ou <b>décentralisation</b> (on délègue aux niveaux inférieurs) ; <b>éventail de subordination</b> (nombre de personnes sous un même chef).</div>`,
        ar: `<h3>1. أنواع القرارات (إيغور أنسوف)</h3>
<table><tr><th>النوع</th><th>شكون؟</th><th>المدى</th><th>مثال</th></tr>
<tr><td><b>استراتيجي</b></td><td>الإدارة العامة</td><td>طويل، كيلتزم بالمستقبل</td><td>الدخول للبيع عبر الأنترنت، الانفتاح على التصدير</td></tr>
<tr><td><b>تكتيكي (إداري)</b></td><td>الأطر، رؤساء المصالح</td><td>متوسط</td><td>اختيار مورد جديد، تنظيم حملة</td></tr>
<tr><td><b>عملياتي</b></td><td>المشرفين، المستخدمين</td><td>قصير، متكرر</td><td>طلب المخزون، تنظيم أوقات العمل</td></tr></table>
<p>كنميزو حتى بين القرارات <b>المبرمجة</b> (متكررة، عندها قاعدة) و<b>غير المبرمجة</b> (جديدة وغير أكيدة).</p>
<h3>2. مراحل اتخاذ القرار</h3>
<p>هربرت سايمون بين بلي صاحب القرار عندو <b>عقلانية محدودة</b>: ما كيعرفش جميع الحلول، وكيختار أول حل «مرضي» عوض أحسن حل. النموذج ديالو (IMC: الذكاء، النمذجة، الاختيار) نقدرو نكملوه هكا:</p>
{{fig:decision}}
<h3>3. التشخيص الاستراتيجي: مصفوفة SWOT</h3>
<p>قبل اختيار الاستراتيجية، كنديرو تشخيص <b>داخلي</b> (نقاط القوة والضعف ديال المقاولة) و<b>خارجي</b> (الفرص والتهديدات ف المحيط، غالبا من PESTEL).</p>
{{fig:swot}}
<div class="ex"><b>SWOT ديال علامة مغربية صغيرة ديال مستحضرات التجميل بالأركان:</b><br>القوة: منتوج طبيعي أصيل، خبرة التعاونيات.<br>الضعف: ميزانية تواصل صغيرة، موقع إلكتروني ما باينش.<br>الفرص: النجاح العالمي ديال الأركان، نمو التجارة الإلكترونية والشبكات الاجتماعية.<br>التهديدات: التزوير، العلامات العالمية الكبرى.<br><b>استراتيجية ممكنة:</b> نستعملو نقاط القوة باش نستغلو الفرص ← البيع عبر الأنترنت للعالم مع المؤثرين.</div>
<h3>4. الاستراتيجيات الكبرى</h3>
<p>حسب مايكل بورتر، المقاولة كتحقق ميزة تنافسية بـ:</p>
<ul><li><b>الريادة ف التكاليف</b>: الإنتاج بثمن أرخص من المنافسين (الإنتاج الكبير، النجاعة)؛</li>
<li><b>التمييز</b>: تقديم منتوج كيبان فريد (الجودة، العلامة، الخدمة)؛</li>
<li><b>التركيز (السوق الضيق)</b>: التركيز على فئة محددة من الزبناء.</li></ul>
<p>باش تكبر، تقدر تختار حتى <b>التخصص</b>، <b>التنويع</b>، <b>التكامل</b> (عمودي ولا أفقي)، <b>التدويل</b> أو <b>التحالفات</b>.</p>
<h3>5. البنيات التنظيمية</h3>
<p>البنية هي الطريقة اللي كتوزع بيها المقاولة العمل والسلطة. كنمثلوها بـ<b>الهيكل التنظيمي</b>.</p>
{{fig:orga}}
<ul><li><b>البنية التسلسلية (الخطية)</b>: كل أجير عندو رئيس واحد (وحدة الأمر، فايول). بسيطة وواضحة ولكن بطيئة.</li>
<li><b>البنية الوظيفية</b>: المصالح حسب الوظيفة (التجاري، الإنتاج، المالية، الموارد البشرية). تخصص فعال، ولكن خطر الانغلاق.</li>
<li><b>البنية القسمية</b>: أقسام حسب المنتوج أو السوق أو الجهة، كل قسم عندو الوظائف ديالو. مناسبة للمقاولات الكبرى المتنوعة.</li>
<li><b>البنية المصفوفية</b>: تبعية مزدوجة (رئيس الوظيفة + رئيس المشروع). مرنة، ولكن فيها خطر صراع السلطة.</li>
<li><b>البنية الشبكية / المسطحة</b>: مستويات هرمية قليلة، فرق مستقلة، كتلقاها ف الشركات الناشئة الرقمية.</li></ul>
<div class="tip">مفاهيم مرتبطة: <b>المركزية</b> (القرارات كتطلع للقمة) ولا <b>اللامركزية</b> (كنفوضو للمستويات التحتية)؛ <b>نطاق الإشراف</b> (عدد الأشخاص تحت نفس الرئيس).</div>`,
        en: `<h3>1. Types of decisions (Igor Ansoff)</h3>
<table><tr><th>Type</th><th>Who?</th><th>Horizon</th><th>Example</th></tr>
<tr><td><b>Strategic</b></td><td>top management</td><td>long term, commits the future</td><td>start selling online, begin exporting</td></tr>
<tr><td><b>Tactical (administrative)</b></td><td>middle managers</td><td>medium term</td><td>choose a new supplier, organise a campaign</td></tr>
<tr><td><b>Operational</b></td><td>supervisors, staff</td><td>short term, repetitive</td><td>order stock, plan shifts</td></tr></table>
<p>Decisions can also be <b>programmed</b> (repetitive, rule-based) or <b>non-programmed</b> (new, uncertain).</p>
<h3>2. The decision process</h3>
<p>Herbert Simon showed that decision-makers have <b>bounded rationality</b>: they do not know every option and choose the first “satisfactory” solution rather than the best. His model (Intelligence, Design, Choice) can be extended as follows:</p>
{{fig:decision}}
<h3>3. Strategic diagnosis: the SWOT matrix</h3>
<p>Before choosing a strategy, a firm carries out an <b>internal</b> diagnosis (strengths and weaknesses) and an <b>external</b> one (opportunities and threats, often from PESTEL).</p>
{{fig:swot}}
<div class="ex"><b>SWOT of a small Moroccan argan cosmetics brand:</b><br>Strengths: authentic natural product, cooperatives' know-how.<br>Weaknesses: small communication budget, poorly visible website.<br>Opportunities: global success of argan, growth of e-commerce and social media.<br>Threats: counterfeits, big international brands.<br><b>Possible strategy:</b> use strengths to seize opportunities → sell online internationally with influencers.</div>
<h3>4. Generic strategies</h3>
<p>According to Michael Porter, a firm gains competitive advantage through:</p>
<ul><li><b>cost leadership</b>: producing more cheaply than competitors (volume, efficiency);</li>
<li><b>differentiation</b>: offering a product perceived as unique (quality, brand, service);</li>
<li><b>focus (niche)</b>: concentrating on a specific customer segment.</li></ul>
<p>To grow, it can also choose <b>specialisation</b>, <b>diversification</b>, <b>integration</b> (vertical or horizontal), <b>internationalisation</b> or <b>alliances</b>.</p>
<h3>5. Organisational structures</h3>
<p>Structure is how the company divides work and authority, shown in an <b>organisation chart</b>.</p>
{{fig:orga}}
<ul><li><b>Line (hierarchical) structure</b>: each employee has a single boss (unity of command). Simple and clear but slow.</li>
<li><b>Functional structure</b>: departments by function (sales, production, finance, HR). Efficient specialisation, but risk of silos.</li>
<li><b>Divisional structure</b>: divisions by product, market or region, each with its own functions. Suits large diversified firms.</li>
<li><b>Matrix structure</b>: dual reporting (functional boss + project manager). Flexible but can cause authority conflicts.</li>
<li><b>Network / flat structure</b>: few levels, autonomous teams, typical of digital start-ups.</li></ul>
<div class="tip">Related ideas: <b>centralisation</b> (decisions go to the top) vs <b>decentralisation</b> (delegation downwards); <b>span of control</b> (number of people under one manager).</div>`,
      },
      key: { fr: ['Décisions stratégiques, tactiques, opérationnelles (Ansoff).', 'Simon : rationalité limitée, solution satisfaisante.', 'SWOT = diagnostic interne (forces/faiblesses) + externe (opportunités/menaces).', 'Porter : coûts, différenciation, focalisation.', 'Structures : hiérarchique, fonctionnelle, divisionnelle, matricielle.'],
        ar: ['قرارات استراتيجية، تكتيكية، عملياتية (أنسوف).', 'سايمون: العقلانية المحدودة، الحل المرضي.', 'SWOT = تشخيص داخلي (قوة/ضعف) + خارجي (فرص/تهديدات).', 'بورتر: التكاليف، التمييز، التركيز.', 'البنيات: تسلسلية، وظيفية، قسمية، مصفوفية.'],
        en: ['Strategic, tactical and operational decisions (Ansoff).', 'Simon: bounded rationality, satisfactory solution.', 'SWOT = internal (strengths/weaknesses) + external (opportunities/threats).', 'Porter: cost, differentiation, focus.', 'Structures: line, functional, divisional, matrix.'] } },
  ],
  gloss: [
    ['Entreprise', 'المقاولة', 'Company', { fr: 'Organisation qui produit des biens ou services pour les vendre et réaliser un profit.', ar: 'تنظيم كينتج سلع أو خدمات للبيع وتحقيق الربح.', en: 'Organisation that produces goods or services to sell for profit.' }],
    ['Valeur ajoutée', 'القيمة المضافة', 'Value added', { fr: 'Chiffre d’affaires − consommations intermédiaires : la richesse créée.', ar: 'رقم المعاملات − الاستهلاكات الوسيطة: الثروة المخلوقة.', en: 'Turnover − intermediate consumption: the wealth created.' }],
    ['Parties prenantes', 'الأطراف المعنية', 'Stakeholders', { fr: 'Acteurs internes ou externes qui influencent l’entreprise ou sont influencés par elle.', ar: 'فاعلين داخليين أو خارجيين كيأثرو ف المقاولة أو كيتأثرو بيها.', en: 'Internal or external actors who affect or are affected by the company.' }],
    ['PESTEL', 'PESTEL', 'PESTEL', { fr: 'Analyse du macro-environnement : politique, économique, socioculturel, technologique, écologique, légal.', ar: 'تحليل المحيط العام: سياسي، اقتصادي، اجتماعي، تكنولوجي، بيئي، قانوني.', en: 'Macro-environment analysis: political, economic, social, technological, environmental, legal.' }],
    ['Efficience', 'النجاعة', 'Efficiency', { fr: 'Atteindre un objectif en utilisant le moins de ressources possible.', ar: 'الوصول للهدف بأقل موارد ممكنة.', en: 'Reaching a goal with the fewest resources.' }],
    ['Efficacité', 'الفعالية', 'Effectiveness', { fr: 'Capacité à atteindre l’objectif fixé.', ar: 'القدرة على الوصول للهدف المحدد.', en: 'Ability to reach the set objective.' }],
    ['Planification', 'التخطيط', 'Planning', { fr: 'Fixer les objectifs et les moyens pour les atteindre.', ar: 'تحديد الأهداف والوسائل للوصول ليها.', en: 'Setting objectives and the means to reach them.' }],
    ['Organigramme', 'الهيكل التنظيمي', 'Organisation chart', { fr: 'Schéma qui représente la structure et les liens hiérarchiques.', ar: 'رسم كيمثل البنية والعلاقات الهرمية.', en: 'Diagram showing the structure and reporting lines.' }],
    ['Objectif SMART', 'هدف SMART', 'SMART objective', { fr: 'Objectif spécifique, mesurable, atteignable, réaliste et daté.', ar: 'هدف محدد، قابل للقياس، قابل للتحقيق، واقعي ومحدد ف الزمن.', en: 'Specific, measurable, achievable, relevant, time-bound objective.' }],
    ['OST (Taylor)', 'التنظيم العلمي للعمل', 'Scientific management', { fr: 'Division du travail en tâches simples, chronométrées, avec salaire au rendement.', ar: 'تقسيم العمل لمهام بسيطة محسوبة بالوقت، مع الأجر حسب المردودية.', en: 'Breaking work into simple timed tasks, with piece-rate pay.' }],
    ['Effet Hawthorne', 'أثر هاوثورن', 'Hawthorne effect', { fr: 'Les salariés sont plus productifs quand on s’intéresse à eux (Mayo).', ar: 'الأجراء كيكونو منتجين أكثر ملي كنهتمو بيهم (مايو).', en: 'Workers are more productive when attention is paid to them (Mayo).' }],
    ['Facteurs d’hygiène', 'عوامل النظافة', 'Hygiene factors', { fr: 'Selon Herzberg, éléments qui évitent le mécontentement sans motiver (salaire, conditions).', ar: 'حسب هيرزبرغ، عناصر كتمنع عدم الرضا بلا ما تحفز (الأجر، الظروف).', en: 'Herzberg: elements that prevent dissatisfaction without motivating (pay, conditions).' }],
    ['Leadership', 'القيادة', 'Leadership', { fr: 'Capacité à influencer et motiver un groupe vers un objectif.', ar: 'القدرة على التأثير ف جماعة وتحفيزها نحو هدف.', en: 'Ability to influence and motivate a group towards a goal.' }],
    ['Matrice SWOT', 'مصفوفة SWOT', 'SWOT matrix', { fr: 'Forces, faiblesses (internes), opportunités, menaces (externes).', ar: 'القوة، الضعف (داخلي)، الفرص، التهديدات (خارجي).', en: 'Strengths, weaknesses (internal), opportunities, threats (external).' }],
    ['Différenciation', 'التمييز', 'Differentiation', { fr: 'Stratégie qui rend le produit unique aux yeux du client.', ar: 'استراتيجية كتخلي المنتوج فريد ف عين الزبون.', en: 'Strategy making the product unique in customers’ eyes.' }],
    ['Structure matricielle', 'البنية المصفوفية', 'Matrix structure', { fr: 'Double rattachement : chef fonctionnel et chef de projet.', ar: 'تبعية مزدوجة: رئيس الوظيفة ورئيس المشروع.', en: 'Dual reporting: functional manager and project manager.' }],
    ['Rationalité limitée', 'العقلانية المحدودة', 'Bounded rationality', { fr: 'Le décideur choisit une solution satisfaisante faute de tout connaître (Simon).', ar: 'صاحب القرار كيختار حل مرضي حيت ما كيعرفش كلشي (سايمون).', en: 'The decision-maker picks a satisfactory option because information is limited (Simon).' }],
    ['Décentralisation', 'اللامركزية', 'Decentralisation', { fr: 'Délégation du pouvoir de décision aux niveaux inférieurs.', ar: 'تفويض سلطة القرار للمستويات التحتية.', en: 'Delegating decision-making to lower levels.' }],
  ],
};
