// Module 1.1.3 — Micro et Macroéconomie
export default {
  id: 'eco', code: '1.1.3', em: '📈', color: '#1f8a5b', prof: 'MOKHTARI Karima',
  name: { fr: 'Micro et Macroéconomie', ar: 'الاقتصاد الجزئي والكلي', en: 'Micro & Macroeconomics' },
  intro: { fr: "La microéconomie étudie les choix des consommateurs et des entreprises ; la macroéconomie étudie l'économie d'un pays dans son ensemble (PIB, inflation, chômage, politiques économiques).", ar: 'الاقتصاد الجزئي كيدرس اختيارات المستهلكين والمقاولات؛ والاقتصاد الكلي كيدرس الاقتصاد ديال بلاد كاملة (الناتج الداخلي، التضخم، البطالة، السياسات الاقتصادية).', en: 'Microeconomics studies the choices of consumers and firms; macroeconomics studies a country’s economy as a whole (GDP, inflation, unemployment, economic policy).' },
  chapters: [
    { id: 'eco1', t: { fr: "Introduction : la science économique et le circuit", ar: 'مدخل: علم الاقتصاد والدورة الاقتصادية', en: 'Introduction: economics and the circular flow' },
      sum: { fr: 'Rareté, besoins, biens, agents économiques, circuit économique', ar: 'الندرة، الحاجات، السلع، الأعوان الاقتصاديين، الدورة', en: 'Scarcity, needs, goods, economic agents, circular flow' },
      body: {
        fr: `<h3>1. Le problème économique : la rareté</h3>
<div class="def">L'<b>économie</b> est la science qui étudie comment les individus et les sociétés utilisent des <b>ressources rares</b> pour satisfaire des <b>besoins illimités</b>.</div>
<p>Comme on ne peut pas tout avoir, il faut <b>choisir</b>. Tout choix a un <b>coût d'opportunité</b> : la valeur de la meilleure option à laquelle on renonce.</p>
<div class="ex">Tu as 200 DH : tu peux acheter un livre de marketing ou sortir au restaurant. Si tu choisis le livre, le coût d'opportunité est le repas auquel tu renonces.</div>
<h3>2. Besoins et biens</h3>
<p>Un <b>besoin</b> est un sentiment de manque. On distingue les besoins <b>primaires</b> (se nourrir, se loger), <b>secondaires</b> (loisirs, voyages) et les besoins <b>individuels</b> ou <b>collectifs</b> (sécurité, éducation).</p>
<p>Les <b>biens</b> satisfont les besoins :</p>
<ul><li><b>biens libres</b> (air, lumière du soleil) : gratuits et abondants ; <b>biens économiques</b> : rares, ils ont un prix ;</li>
<li><b>biens matériels</b> (un téléphone) et <b>services</b> (un cours, une livraison) ;</li>
<li><b>biens de consommation</b> (détruits par l'usage final) et <b>biens de production</b> (machines, utilisés pour produire) ;</li>
<li>biens <b>complémentaires</b> (voiture et essence) et biens <b>substituables</b> (thé et café).</li></ul>
<h3>3. Micro et macroéconomie</h3>
<table><tr><th>Microéconomie</th><th>Macroéconomie</th></tr><tr><td>étudie les comportements <b>individuels</b> : un consommateur, une entreprise, un marché</td><td>étudie l'économie <b>globale</b> d'un pays : production totale, chômage, prix, commerce extérieur</td></tr><tr><td>ex. : comment une hausse du prix du sucre change les achats d'un ménage</td><td>ex. : pourquoi le PIB du Maroc a augmenté de 3 % cette année</td></tr></table>
<h3>4. Les agents économiques</h3>
<p>La comptabilité nationale regroupe les acteurs en grandes catégories selon leur fonction principale :</p>
<table><tr><th>Agent</th><th>Fonction principale</th><th>Ressource principale</th></tr>
<tr><td>Ménages</td><td>consommer</td><td>salaires, revenus de la propriété</td></tr>
<tr><td>Entreprises (sociétés non financières)</td><td>produire des biens et services marchands</td><td>ventes</td></tr>
<tr><td>Institutions financières (banques, assurances)</td><td>financer, collecter l'épargne</td><td>intérêts, primes</td></tr>
<tr><td>Administrations publiques (État, collectivités)</td><td>produire des services non marchands, redistribuer</td><td>impôts et cotisations</td></tr>
<tr><td>Reste du monde</td><td>échanges avec l'étranger</td><td>exportations / importations</td></tr></table>
<h3>5. Le circuit économique</h3>
<p>Les agents sont reliés par des <b>flux</b> : des <b>flux réels</b> (travail, biens et services) et, en sens inverse, des <b>flux monétaires</b> (salaires, dépenses).</p>
{{fig:circuit}}
<ul><li>Les ménages fournissent leur <b>travail</b> aux entreprises et reçoivent des <b>salaires</b>.</li>
<li>Avec ce revenu, ils <b>consomment</b> les biens produits par les entreprises, et ils <b>épargnent</b> une partie.</li>
<li>Les banques transforment l'épargne en <b>crédits</b> pour les entreprises qui investissent.</li>
<li>L'État prélève des <b>impôts</b> et fournit des services publics (écoles, hôpitaux, routes).</li></ul>
<div class="tip">Équation de base : <b>Revenu = Consommation + Épargne</b> (R = C + E). La part du revenu consommée s'appelle la <b>propension moyenne à consommer</b> : PMC = C / R.</div>
<div class="ex">Un ménage gagne 8 000 DH par mois, en dépense 6 800 et épargne 1 200. PMC = 6 800 / 8 000 = 0,85 = 85 % ; propension à épargner = 15 %.</div>`,
        ar: `<h3>1. المشكل الاقتصادي: الندرة</h3>
<div class="def"><b>الاقتصاد</b> هو العلم اللي كيدرس كيفاش الأفراد والمجتمعات كيستعملو <b>موارد نادرة</b> باش يلبيو <b>حاجات غير محدودة</b>.</div>
<p>حيت ما نقدروش ناخدو كلشي، خاصنا <b>نختارو</b>. كل اختيار عندو <b>تكلفة الفرصة الضائعة</b>: قيمة أحسن خيار كنتخلاو عليه.</p>
<div class="ex">عندك 200 درهم: تقدري تشري كتاب ديال التسويق ولا تخرجي للمطعم. إلا اخترتي الكتاب، تكلفة الفرصة هي الماكلة اللي تخليتي عليها.</div>
<h3>2. الحاجات والسلع</h3>
<p><b>الحاجة</b> هي الإحساس بالنقص. كاين الحاجات <b>الأولية</b> (الماكلة، السكن)، <b>الثانوية</b> (الترفيه، السفر) والحاجات <b>الفردية</b> ولا <b>الجماعية</b> (الأمن، التعليم).</p>
<p><b>السلع</b> كتلبي الحاجات:</p>
<ul><li><b>سلع حرة</b> (الهواء، ضو الشمس): مجانية ووفيرة؛ <b>سلع اقتصادية</b>: نادرة وعندها ثمن؛</li>
<li><b>سلع مادية</b> (تليفون) و<b>خدمات</b> (درس، توصيل)؛</li>
<li><b>سلع استهلاكية</b> (كتفنى بالاستعمال النهائي) و<b>سلع إنتاجية</b> (الآلات، كتستعمل للإنتاج)؛</li>
<li>سلع <b>متكاملة</b> (السيارة والبنزين) وسلع <b>بديلة</b> (أتاي والقهوة).</li></ul>
<h3>3. الاقتصاد الجزئي والكلي</h3>
<table><tr><th>الاقتصاد الجزئي</th><th>الاقتصاد الكلي</th></tr><tr><td>كيدرس السلوكات <b>الفردية</b>: مستهلك، مقاولة، سوق</td><td>كيدرس الاقتصاد <b>الشامل</b> ديال البلاد: الإنتاج الكلي، البطالة، الأثمنة، التجارة الخارجية</td></tr><tr><td>مثال: كيفاش ارتفاع ثمن السكر كيبدل مشتريات أسرة</td><td>مثال: علاش الناتج الداخلي ديال المغرب طلع بـ 3 % هاد العام</td></tr></table>
<h3>4. الأعوان الاقتصاديين</h3>
<p>المحاسبة الوطنية كتجمع الفاعلين ف فئات كبرى حسب الوظيفة الأساسية ديالهم:</p>
<table><tr><th>العون</th><th>الوظيفة الأساسية</th><th>المورد الأساسي</th></tr>
<tr><td>الأسر</td><td>الاستهلاك</td><td>الأجور، مداخيل الملكية</td></tr>
<tr><td>المقاولات</td><td>إنتاج سلع وخدمات تجارية</td><td>المبيعات</td></tr>
<tr><td>المؤسسات المالية (الأبناك، التأمين)</td><td>التمويل، جمع الادخار</td><td>الفوائد، الأقساط</td></tr>
<tr><td>الإدارات العمومية (الدولة، الجماعات)</td><td>إنتاج خدمات غير تجارية، إعادة التوزيع</td><td>الضرائب والمساهمات</td></tr>
<tr><td>بقية العالم</td><td>المبادلات مع الخارج</td><td>الصادرات / الواردات</td></tr></table>
<h3>5. الدورة الاقتصادية</h3>
<p>الأعوان مرتبطين بـ<b>تدفقات</b>: <b>تدفقات حقيقية</b> (العمل، السلع والخدمات) وف الاتجاه المعاكس <b>تدفقات نقدية</b> (الأجور، النفقات).</p>
{{fig:circuit}}
<ul><li>الأسر كتعطي <b>العمل</b> ديالها للمقاولات وكتاخد <b>الأجور</b>.</li>
<li>بهاد الدخل كت<b>ستهلك</b> السلع اللي كتنتجها المقاولات، وكت<b>دخر</b> جزء.</li>
<li>الأبناك كتحول الادخار لـ<b>قروض</b> للمقاولات اللي كتستثمر.</li>
<li>الدولة كتقتطع <b>الضرائب</b> وكتقدم الخدمات العمومية (المدارس، المستشفيات، الطرق).</li></ul>
<div class="tip">المعادلة الأساسية: <b>الدخل = الاستهلاك + الادخار</b> (R = C + E). الجزء المستهلك من الدخل كيتسمى <b>الميل المتوسط للاستهلاك</b>: PMC = C / R.</div>
<div class="ex">أسرة كتربح 8 000 درهم ف الشهر، كتصرف 6 800 وكتدخر 1 200. PMC = 6 800 / 8 000 = 0,85 = 85 %؛ الميل للادخار = 15 %.</div>`,
        en: `<h3>1. The economic problem: scarcity</h3>
<div class="def"><b>Economics</b> is the science that studies how individuals and societies use <b>scarce resources</b> to satisfy <b>unlimited wants</b>.</div>
<p>Since we cannot have everything, we must <b>choose</b>. Every choice has an <b>opportunity cost</b>: the value of the best alternative given up.</p>
<div class="ex">You have 200 MAD: you can buy a marketing book or eat out. If you choose the book, the opportunity cost is the meal you give up.</div>
<h3>2. Needs and goods</h3>
<p>A <b>need</b> is a feeling of lack. There are <b>primary</b> needs (food, housing), <b>secondary</b> needs (leisure, travel), and <b>individual</b> or <b>collective</b> needs (security, education).</p>
<p><b>Goods</b> satisfy needs:</p>
<ul><li><b>free goods</b> (air, sunlight): free and abundant; <b>economic goods</b>: scarce, with a price;</li>
<li><b>tangible goods</b> (a phone) and <b>services</b> (a lesson, a delivery);</li>
<li><b>consumer goods</b> (used up by final use) and <b>capital goods</b> (machines used to produce);</li>
<li><b>complementary</b> goods (car and fuel) and <b>substitute</b> goods (tea and coffee).</li></ul>
<h3>3. Micro vs macroeconomics</h3>
<table><tr><th>Microeconomics</th><th>Macroeconomics</th></tr><tr><td>studies <b>individual</b> behaviour: a consumer, a firm, a market</td><td>studies the <b>whole</b> economy: total output, unemployment, prices, foreign trade</td></tr><tr><td>e.g. how a rise in the price of sugar changes a household's purchases</td><td>e.g. why Morocco's GDP grew by 3% this year</td></tr></table>
<h3>4. Economic agents</h3>
<p>National accounts group actors by main function:</p>
<table><tr><th>Agent</th><th>Main function</th><th>Main resource</th></tr>
<tr><td>Households</td><td>consume</td><td>wages, property income</td></tr>
<tr><td>Firms</td><td>produce market goods and services</td><td>sales</td></tr>
<tr><td>Financial institutions (banks, insurers)</td><td>finance, collect savings</td><td>interest, premiums</td></tr>
<tr><td>General government (State, local authorities)</td><td>provide non-market services, redistribute</td><td>taxes and contributions</td></tr>
<tr><td>Rest of the world</td><td>trade with foreign countries</td><td>exports / imports</td></tr></table>
<h3>5. The circular flow</h3>
<p>Agents are linked by <b>flows</b>: <b>real flows</b> (labour, goods and services) and, in the opposite direction, <b>money flows</b> (wages, spending).</p>
{{fig:circuit}}
<ul><li>Households supply <b>labour</b> to firms and receive <b>wages</b>.</li>
<li>With this income they <b>consume</b> firms' products and <b>save</b> part of it.</li>
<li>Banks turn savings into <b>loans</b> for firms that invest.</li>
<li>The State collects <b>taxes</b> and provides public services (schools, hospitals, roads).</li></ul>
<div class="tip">Basic identity: <b>Income = Consumption + Saving</b> (Y = C + S). The share of income consumed is the <b>average propensity to consume</b>: APC = C / Y.</div>
<div class="ex">A household earns 8,000 MAD a month, spends 6,800 and saves 1,200. APC = 6,800 / 8,000 = 0.85 = 85%; propensity to save = 15%.</div>`,
      },
      key: { fr: ['Économie = gérer des ressources rares face à des besoins illimités.', 'Coût d’opportunité = meilleure option sacrifiée.', '5 agents : ménages, entreprises, institutions financières, administrations, reste du monde.', 'R = C + E ; PMC = C / R.'], ar: ['الاقتصاد = تسيير موارد نادرة أمام حاجات غير محدودة.', 'تكلفة الفرصة = أحسن خيار ضحينا بيه.', '5 أعوان: الأسر، المقاولات، المؤسسات المالية، الإدارات، بقية العالم.', 'R = C + E ؛ PMC = C / R.'], en: ['Economics = managing scarce resources against unlimited wants.', 'Opportunity cost = best alternative forgone.', '5 agents: households, firms, financial institutions, government, rest of world.', 'Y = C + S; APC = C / Y.'] } },

    { id: 'eco2', t: { fr: "Le marché : offre, demande et élasticité", ar: 'السوق: العرض، الطلب والمرونة', en: 'The market: supply, demand and elasticity' },
      sum: { fr: 'Loi de la demande, loi de l’offre, équilibre, élasticité-prix', ar: 'قانون الطلب، قانون العرض، التوازن، مرونة الثمن', en: 'Law of demand, law of supply, equilibrium, price elasticity' },
      body: {
        fr: `<h3>1. Le marché</h3>
<div class="def">Un <b>marché</b> est le lieu (physique ou virtuel) de rencontre entre l'<b>offre</b> (les vendeurs) et la <b>demande</b> (les acheteurs) d'un bien, qui détermine un <b>prix</b> et une <b>quantité échangée</b>.</div>
<p>Exemples : le souk hebdomadaire, la Bourse de Casablanca, une plateforme de e-commerce.</p>
<h3>2. La demande</h3>
<p><b>Loi de la demande</b> : quand le prix augmente, la quantité demandée <b>diminue</b> (et inversement). La courbe de demande est donc <b>décroissante</b>.</p>
<p>Autres facteurs qui <b>déplacent</b> toute la courbe : le revenu, les goûts et la mode, le prix des biens substituables ou complémentaires, la publicité, le nombre d'acheteurs.</p>
<h3>3. L'offre</h3>
<p><b>Loi de l'offre</b> : quand le prix augmente, les producteurs veulent vendre <b>plus</b> (c'est plus rentable). La courbe d'offre est <b>croissante</b>. Elle se déplace avec le coût des matières, la technologie, les impôts, le climat (pour l'agriculture).</p>
<h3>4. L'équilibre du marché</h3>
{{fig:offreDemande}}
<p>Le <b>prix d'équilibre</b> P* est celui pour lequel <b>quantité offerte = quantité demandée</b>.</p>
<ul><li>si P &gt; P* : il y a un <b>excédent</b> (surplus d'offre), les vendeurs baissent les prix ;</li>
<li>si P &lt; P* : il y a une <b>pénurie</b> (excès de demande), les prix montent.</li></ul>
<p>Avec des fonctions linéaires, on trouve l'équilibre en résolvant <b>D(P) = O(P)</b>.</p>
<div class="ex">Demande : D = 200 − 4P ; offre : O = 20 + 2P.<br>On pose 200 − 4P = 20 + 2P → 180 = 6P → <b>P* = 30 DH</b>. Quantité : D = 200 − 4×30 = <b>80 unités</b> (et O = 20 + 60 = 80 ✔).</div>
<h3>5. L'élasticité-prix de la demande</h3>
<p>Elle mesure la <b>sensibilité</b> de la quantité demandée à une variation du prix :</p>
<span class="f">e = (variation % de la quantité) / (variation % du prix) = (ΔQ/Q) / (ΔP/P)</span>
<table><tr><th>Valeur de |e|</th><th>Demande</th><th>Exemple</th></tr><tr><td>|e| &gt; 1</td><td><b>élastique</b> : très sensible au prix</td><td>vêtements de marque, voyages</td></tr><tr><td>|e| &lt; 1</td><td><b>inélastique</b> : peu sensible</td><td>pain, médicaments, carburant</td></tr><tr><td>|e| = 1</td><td>unitaire</td><td>—</td></tr></table>
<div class="ex">Le prix d'un forfait internet passe de 100 à 110 DH (+10 %) et le nombre d'abonnés passe de 5 000 à 4 600 (−8 %). e = −8 % / +10 % = <b>−0,8</b> → demande inélastique : l'opérateur gagne à augmenter son prix, car la recette totale passe de 500 000 à 506 000 DH.</div>
<p><b>Élasticité-revenu</b> : e<sub>R</sub> = (ΔQ/Q)/(ΔR/R). Si e<sub>R</sub> &gt; 1 → bien de luxe ; 0 &lt; e<sub>R</sub> &lt; 1 → bien normal (nécessité) ; e<sub>R</sub> &lt; 0 → bien inférieur.</p>
<p><b>Élasticité croisée</b> : si elle est positive, les biens sont substituables ; négative, ils sont complémentaires.</p>
<h3>6. Les structures de marché</h3>
<table><tr><th>Structure</th><th>Vendeurs</th><th>Exemple</th></tr><tr><td>Concurrence pure et parfaite</td><td>très nombreux, produit identique</td><td>marché de gros de légumes (approximation)</td></tr><tr><td>Concurrence monopolistique</td><td>nombreux, produits différenciés</td><td>restaurants, marques de vêtements</td></tr><tr><td>Oligopole</td><td>quelques-uns</td><td>opérateurs télécoms au Maroc</td></tr><tr><td>Monopole</td><td>un seul</td><td>distribution d'eau dans une ville</td></tr></table>`,
        ar: `<h3>1. السوق</h3>
<div class="def"><b>السوق</b> هو البلاصة (مادية ولا افتراضية) فين كيتلاقى <b>العرض</b> (البائعين) و<b>الطلب</b> (المشترين) على سلعة، وكيتحدد <b>الثمن</b> و<b>الكمية المتبادلة</b>.</div>
<p>أمثلة: السوق الأسبوعي، بورصة الدار البيضاء، منصة ديال التجارة الإلكترونية.</p>
<h3>2. الطلب</h3>
<p><b>قانون الطلب</b>: ملي كيطلع الثمن، الكمية المطلوبة <b>كتنقص</b> (والعكس). منحنى الطلب إذن <b>تنازلي</b>.</p>
<p>عوامل أخرى كت<b>زحزح</b> المنحنى كامل: الدخل، الأذواق والموضة، ثمن السلع البديلة أو المتكاملة، الإشهار، عدد المشترين.</p>
<h3>3. العرض</h3>
<p><b>قانون العرض</b>: ملي كيطلع الثمن، المنتجين باغيين يبيعو <b>أكثر</b> (حيت مربح أكثر). منحنى العرض <b>تصاعدي</b>. كيتزحزح مع تكلفة المواد، التكنولوجيا، الضرائب، المناخ (بالنسبة للفلاحة).</p>
<h3>4. توازن السوق</h3>
{{fig:offreDemande}}
<p><b>ثمن التوازن</b> P* هو الثمن اللي فيه <b>الكمية المعروضة = الكمية المطلوبة</b>.</p>
<ul><li>إلا P &gt; P*: كاين <b>فائض</b> ف العرض، البائعين كينقصو الأثمنة؛</li>
<li>إلا P &lt; P*: كاين <b>خصاص</b> (فائض ف الطلب)، الأثمنة كتطلع.</li></ul>
<p>مع دوال خطية، كنلقاو التوازن بحل <b>D(P) = O(P)</b>.</p>
<div class="ex">الطلب: D = 200 − 4P؛ العرض: O = 20 + 2P.<br>كنكتبو 200 − 4P = 20 + 2P ← 180 = 6P ← <b>P* = 30 درهم</b>. الكمية: D = 200 − 4×30 = <b>80 وحدة</b> (و O = 20 + 60 = 80 ✔).</div>
<h3>5. مرونة الطلب بالنسبة للثمن</h3>
<p>كتقيس <b>حساسية</b> الكمية المطلوبة لتغير الثمن:</p>
<span class="f">e = (التغير % ف الكمية) / (التغير % ف الثمن) = (ΔQ/Q) / (ΔP/P)</span>
<table><tr><th>قيمة |e|</th><th>الطلب</th><th>مثال</th></tr><tr><td>|e| &gt; 1</td><td><b>مرن</b>: حساس بزاف للثمن</td><td>الحوايج ديال الماركة، السفر</td></tr><tr><td>|e| &lt; 1</td><td><b>غير مرن</b>: قليل الحساسية</td><td>الخبز، الدواء، البنزين</td></tr><tr><td>|e| = 1</td><td>أحادي</td><td>—</td></tr></table>
<div class="ex">ثمن اشتراك الأنترنت طلع من 100 لـ 110 درهم (+10 %) وعدد المشتركين نقص من 5 000 لـ 4 600 (−8 %). e = −8 % / +10 % = <b>−0,8</b> ← طلب غير مرن: الشركة كتربح ملي كتطلع الثمن، حيت المداخيل الكلية كتدوز من 500 000 لـ 506 000 درهم.</div>
<p><b>مرونة الدخل</b>: e<sub>R</sub> = (ΔQ/Q)/(ΔR/R). إلا e<sub>R</sub> &gt; 1 ← سلعة كمالية؛ 0 &lt; e<sub>R</sub> &lt; 1 ← سلعة عادية (ضرورية)؛ e<sub>R</sub> &lt; 0 ← سلعة دنيا.</p>
<p><b>المرونة التقاطعية</b>: إلا كانت موجبة، السلع بديلة؛ إلا كانت سالبة، متكاملة.</p>
<h3>6. بنيات السوق</h3>
<table><tr><th>البنية</th><th>البائعين</th><th>مثال</th></tr><tr><td>المنافسة الكاملة</td><td>بزاف، منتوج متشابه</td><td>سوق الجملة ديال الخضرة (تقريبا)</td></tr><tr><td>المنافسة الاحتكارية</td><td>بزاف، منتوجات متميزة</td><td>المطاعم، ماركات الحوايج</td></tr><tr><td>احتكار القلة</td><td>شي شوية</td><td>شركات الاتصالات ف المغرب</td></tr><tr><td>الاحتكار</td><td>واحد</td><td>توزيع الما ف مدينة</td></tr></table>`,
        en: `<h3>1. The market</h3>
<div class="def">A <b>market</b> is the place (physical or virtual) where the <b>supply</b> (sellers) and <b>demand</b> (buyers) for a good meet, setting a <b>price</b> and a <b>quantity traded</b>.</div>
<p>Examples: the weekly souk, the Casablanca Stock Exchange, an e-commerce platform.</p>
<h3>2. Demand</h3>
<p><b>Law of demand</b>: when the price rises, the quantity demanded <b>falls</b> (and vice versa). The demand curve slopes <b>downwards</b>.</p>
<p>Other factors <b>shift</b> the whole curve: income, tastes and fashion, prices of substitutes or complements, advertising, number of buyers.</p>
<h3>3. Supply</h3>
<p><b>Law of supply</b>: when the price rises, producers want to sell <b>more</b> (it is more profitable). The supply curve slopes <b>upwards</b>. It shifts with input costs, technology, taxes, weather (for farming).</p>
<h3>4. Market equilibrium</h3>
{{fig:offreDemande}}
<p>The <b>equilibrium price</b> P* is where <b>quantity supplied = quantity demanded</b>.</p>
<ul><li>if P &gt; P*: there is a <b>surplus</b>, sellers cut prices;</li>
<li>if P &lt; P*: there is a <b>shortage</b>, prices rise.</li></ul>
<p>With linear functions, solve <b>D(P) = S(P)</b>.</p>
<div class="ex">Demand: D = 200 − 4P; supply: S = 20 + 2P.<br>200 − 4P = 20 + 2P → 180 = 6P → <b>P* = 30 MAD</b>. Quantity: D = 200 − 4×30 = <b>80 units</b> (and S = 20 + 60 = 80 ✔).</div>
<h3>5. Price elasticity of demand</h3>
<p>It measures how <b>sensitive</b> quantity demanded is to a price change:</p>
<span class="f">e = (% change in quantity) / (% change in price) = (ΔQ/Q) / (ΔP/P)</span>
<table><tr><th>|e|</th><th>Demand</th><th>Example</th></tr><tr><td>|e| &gt; 1</td><td><b>elastic</b>: very price-sensitive</td><td>branded clothes, travel</td></tr><tr><td>|e| &lt; 1</td><td><b>inelastic</b>: not very sensitive</td><td>bread, medicines, fuel</td></tr><tr><td>|e| = 1</td><td>unit elastic</td><td>—</td></tr></table>
<div class="ex">An internet plan goes from 100 to 110 MAD (+10%) and subscribers fall from 5,000 to 4,600 (−8%). e = −8% / +10% = <b>−0.8</b> → inelastic demand: the operator gains from raising the price, as total revenue rises from 500,000 to 506,000 MAD.</div>
<p><b>Income elasticity</b>: e<sub>Y</sub> = (ΔQ/Q)/(ΔY/Y). If e<sub>Y</sub> &gt; 1 → luxury good; 0 &lt; e<sub>Y</sub> &lt; 1 → normal good (necessity); e<sub>Y</sub> &lt; 0 → inferior good.</p>
<p><b>Cross elasticity</b>: positive → substitutes; negative → complements.</p>
<h3>6. Market structures</h3>
<table><tr><th>Structure</th><th>Sellers</th><th>Example</th></tr><tr><td>Perfect competition</td><td>very many, identical product</td><td>wholesale vegetable market (roughly)</td></tr><tr><td>Monopolistic competition</td><td>many, differentiated products</td><td>restaurants, clothing brands</td></tr><tr><td>Oligopoly</td><td>a few</td><td>telecom operators in Morocco</td></tr><tr><td>Monopoly</td><td>one</td><td>water distribution in a city</td></tr></table>`,
      },
      key: { fr: ['Demande décroissante, offre croissante.', 'Équilibre : D(P) = O(P).', 'e = (ΔQ/Q)/(ΔP/P) ; |e| > 1 élastique, |e| < 1 inélastique.', 'Si la demande est inélastique, une hausse de prix augmente la recette.'], ar: ['الطلب تنازلي، العرض تصاعدي.', 'التوازن: D(P) = O(P).', 'e = (ΔQ/Q)/(ΔP/P)؛ |e| > 1 مرن، |e| < 1 غير مرن.', 'إلا كان الطلب غير مرن، ارتفاع الثمن كيزيد ف المداخيل.'], en: ['Demand slopes down, supply slopes up.', 'Equilibrium: D(P) = S(P).', 'e = (ΔQ/Q)/(ΔP/P); |e| > 1 elastic, |e| < 1 inelastic.', 'With inelastic demand, a price rise increases revenue.'] } },

    { id: 'eco3', t: { fr: 'Le consommateur et le producteur', ar: 'المستهلك والمنتج', en: 'The consumer and the producer' },
      sum: { fr: 'Utilité, contrainte budgétaire, coûts (fixes, variables, moyens, marginaux), profit', ar: 'المنفعة، القيد الميزانياتي، التكاليف (الثابتة، المتغيرة، المتوسطة، الحدية)، الربح', en: 'Utility, budget constraint, costs (fixed, variable, average, marginal), profit' },
      body: {
        fr: `<h3>1. Le comportement du consommateur</h3>
<p>Le consommateur cherche à <b>maximiser sa satisfaction</b> (son <b>utilité</b>) avec un revenu limité.</p>
<ul><li><b>Utilité totale</b> : satisfaction totale retirée de la consommation d'une quantité de bien.</li>
<li><b>Utilité marginale</b> : satisfaction apportée par la <b>dernière unité</b> consommée.</li></ul>
<div class="def"><b>Loi de l'utilité marginale décroissante :</b> plus on consomme d'un bien, moins chaque unité supplémentaire apporte de satisfaction.</div>
<div class="ex">Après un match, le 1er verre d'eau procure une grande satisfaction, le 2e un peu moins, le 5e presque aucune.</div>
<p><b>Contrainte budgétaire</b> : avec un revenu R et deux biens X et Y de prix Px et Py, le consommateur doit respecter :</p>
<span class="f">Px·X + Py·Y ≤ R</span>
<div class="ex">Avec 300 DH, des cafés à 15 DH et des places de cinéma à 50 DH : 15X + 50Y ≤ 300. Par exemple 10 cafés et 3 places (150 + 150 = 300).</div>
<p>À l'optimum, le consommateur égalise l'utilité marginale par dirham dépensé : <b>Um<sub>X</sub>/Px = Um<sub>Y</sub>/Py</b>.</p>
<h3>2. La production</h3>
<p>Le producteur combine des facteurs (travail L, capital K). La <b>productivité</b> mesure l'efficacité :</p>
<span class="f">Productivité moyenne du travail = Production / Nombre de travailleurs</span>
<p>La <b>loi des rendements décroissants</b> : si l'on ajoute toujours plus de travailleurs à une machine fixe, la production supplémentaire apportée par chaque nouveau travailleur finit par baisser.</p>
<h3>3. Les coûts de production</h3>
<table><tr><th>Coût</th><th>Définition</th><th>Formule</th></tr>
<tr><td>Coût fixe (CF)</td><td>ne dépend pas de la quantité (loyer, assurance)</td><td>—</td></tr>
<tr><td>Coût variable (CV)</td><td>augmente avec la quantité (matières, emballages)</td><td>—</td></tr>
<tr><td>Coût total (CT)</td><td>somme des deux</td><td>CT = CF + CV</td></tr>
<tr><td>Coût moyen (CM)</td><td>coût d'une unité</td><td>CM = CT / q</td></tr>
<tr><td>Coût marginal (Cm)</td><td>coût de la dernière unité</td><td>Cm = ΔCT / Δq (dérivée de CT)</td></tr></table>
{{fig:couts}}
<div class="ex">Une petite imprimerie : loyer et machine = 6 000 DH/mois (CF) ; papier et encre = 2 DH par affiche (CV unitaire). Pour 1 000 affiches : CT = 6 000 + 2 000 = 8 000 DH ; CM = 8 DH. Pour 3 000 affiches : CT = 12 000 DH ; CM = 4 DH. Le coût moyen baisse quand on produit plus : ce sont les <b>économies d'échelle</b>.</div>
<h3>4. Recette et profit</h3>
<ul><li><b>Recette totale</b> RT = prix × quantité = p·q ;</li><li><b>Recette marginale</b> Rm = recette de la dernière unité (en concurrence parfaite, Rm = p) ;</li><li><b>Profit</b> π = RT − CT.</li></ul>
<div class="def"><b>Règle de maximisation du profit :</b> l'entreprise produit jusqu'à ce que <b>Rm = Cm</b>. En concurrence parfaite : <b>p = Cm</b>.</div>
<p><b>Seuil de rentabilité</b> : la quantité pour laquelle RT = CT (profit nul). Au-delà, l'entreprise gagne de l'argent.</p>
<div class="ex">Prix de vente d'une affiche : 5 DH. Profit = 5q − (6 000 + 2q) = 3q − 6 000. Le seuil est atteint quand 3q = 6 000, soit <b>q = 2 000 affiches</b>.</div>`,
        ar: `<h3>1. سلوك المستهلك</h3>
<p>المستهلك كيقلب <b>يزيد أكثر ما يمكن ف الرضا ديالو</b> (<b>المنفعة</b>) بدخل محدود.</p>
<ul><li><b>المنفعة الكلية</b>: الرضا الكلي اللي كيجيبو استهلاك كمية من السلعة.</li>
<li><b>المنفعة الحدية</b>: الرضا اللي كتجيبو <b>آخر وحدة</b> مستهلكة.</li></ul>
<div class="def"><b>قانون تناقص المنفعة الحدية:</b> كلما استهلكنا أكثر من سلعة، كلما كل وحدة إضافية كتجيب رضا أقل.</div>
<div class="ex">من بعد ماتش، أول كاس ديال الما كيعطي رضا كبير، التاني شوية أقل، والخامس تقريبا والو.</div>
<p><b>القيد الميزانياتي</b>: بدخل R وسلعتين X و Y بالأثمنة Px و Py، المستهلك خاصو يحترم:</p>
<span class="f">Px·X + Py·Y ≤ R</span>
<div class="ex">بـ 300 درهم، القهوة بـ 15 درهم والسينما بـ 50 درهم: 15X + 50Y ≤ 300. مثلا 10 قهاوي و 3 تذاكر (150 + 150 = 300).</div>
<p>ف التوازن، المستهلك كيساوي المنفعة الحدية لكل درهم مصروف: <b>Um<sub>X</sub>/Px = Um<sub>Y</sub>/Py</b>.</p>
<h3>2. الإنتاج</h3>
<p>المنتج كيجمع عوامل الإنتاج (العمل L، الرأسمال K). <b>الإنتاجية</b> كتقيس النجاعة:</p>
<span class="f">الإنتاجية المتوسطة للعمل = الإنتاج / عدد العمال</span>
<p><b>قانون تناقص الغلة</b>: إلا زدنا ديما عمال على آلة ثابتة، الإنتاج الإضافي ديال كل عامل جديد كينقص ف الأخير.</p>
<h3>3. تكاليف الإنتاج</h3>
<table><tr><th>التكلفة</th><th>التعريف</th><th>الصيغة</th></tr>
<tr><td>التكلفة الثابتة (CF)</td><td>ما كتبدلش مع الكمية (الكراء، التأمين)</td><td>—</td></tr>
<tr><td>التكلفة المتغيرة (CV)</td><td>كتزيد مع الكمية (المواد، التعليب)</td><td>—</td></tr>
<tr><td>التكلفة الكلية (CT)</td><td>مجموع الجوج</td><td>CT = CF + CV</td></tr>
<tr><td>التكلفة المتوسطة (CM)</td><td>تكلفة وحدة واحدة</td><td>CM = CT / q</td></tr>
<tr><td>التكلفة الحدية (Cm)</td><td>تكلفة آخر وحدة</td><td>Cm = ΔCT / Δq (مشتقة CT)</td></tr></table>
{{fig:couts}}
<div class="ex">مطبعة صغيرة: الكراء والآلة = 6 000 درهم ف الشهر (CF)؛ الورق والحبر = 2 درهم لكل ملصق (CV للوحدة). لـ 1 000 ملصق: CT = 6 000 + 2 000 = 8 000 درهم؛ CM = 8 دراهم. لـ 3 000 ملصق: CT = 12 000 درهم؛ CM = 4 دراهم. التكلفة المتوسطة كتنقص ملي كنتجو أكثر: هادي هي <b>وفورات الحجم</b>.</div>
<h3>4. المداخيل والربح</h3>
<ul><li><b>المداخيل الكلية</b> RT = الثمن × الكمية = p·q؛</li><li><b>المداخيل الحدية</b> Rm = مدخول آخر وحدة (ف المنافسة الكاملة Rm = p)؛</li><li><b>الربح</b> π = RT − CT.</li></ul>
<div class="def"><b>قاعدة تعظيم الربح:</b> المقاولة كتنتج حتى توصل لـ <b>Rm = Cm</b>. ف المنافسة الكاملة: <b>p = Cm</b>.</div>
<p><b>عتبة المردودية</b>: الكمية اللي فيها RT = CT (ربح صفر). من بعدها المقاولة كتربح.</p>
<div class="ex">ثمن بيع الملصق: 5 دراهم. الربح = 5q − (6 000 + 2q) = 3q − 6 000. العتبة كتوصل ملي 3q = 6 000، يعني <b>q = 2 000 ملصق</b>.</div>`,
        en: `<h3>1. Consumer behaviour</h3>
<p>The consumer seeks to <b>maximise satisfaction</b> (<b>utility</b>) with limited income.</p>
<ul><li><b>Total utility</b>: total satisfaction from consuming a quantity of a good.</li>
<li><b>Marginal utility</b>: satisfaction from the <b>last unit</b> consumed.</li></ul>
<div class="def"><b>Law of diminishing marginal utility:</b> the more of a good we consume, the less satisfaction each extra unit brings.</div>
<div class="ex">After a football match, the 1st glass of water is very satisfying, the 2nd a bit less, the 5th almost not at all.</div>
<p><b>Budget constraint</b>: with income Y and two goods X and Y priced Px and Py, the consumer must respect:</p>
<span class="f">Px·X + Py·Y ≤ Income</span>
<div class="ex">With 300 MAD, coffees at 15 MAD and cinema tickets at 50 MAD: 15X + 50Y ≤ 300, e.g. 10 coffees and 3 tickets (150 + 150 = 300).</div>
<p>At the optimum, marginal utility per dirham is equal: <b>MU<sub>X</sub>/Px = MU<sub>Y</sub>/Py</b>.</p>
<h3>2. Production</h3>
<p>The producer combines factors (labour L, capital K). <b>Productivity</b> measures efficiency:</p>
<span class="f">Average labour productivity = Output / Number of workers</span>
<p>The <b>law of diminishing returns</b>: adding more and more workers to a fixed machine eventually lowers the extra output from each new worker.</p>
<h3>3. Production costs</h3>
<table><tr><th>Cost</th><th>Definition</th><th>Formula</th></tr>
<tr><td>Fixed cost (FC)</td><td>independent of quantity (rent, insurance)</td><td>—</td></tr>
<tr><td>Variable cost (VC)</td><td>rises with quantity (materials, packaging)</td><td>—</td></tr>
<tr><td>Total cost (TC)</td><td>sum of both</td><td>TC = FC + VC</td></tr>
<tr><td>Average cost (AC)</td><td>cost per unit</td><td>AC = TC / q</td></tr>
<tr><td>Marginal cost (MC)</td><td>cost of the last unit</td><td>MC = ΔTC / Δq (derivative of TC)</td></tr></table>
{{fig:couts}}
<div class="ex">A small print shop: rent and machine = 6,000 MAD/month (FC); paper and ink = 2 MAD per poster. For 1,000 posters: TC = 6,000 + 2,000 = 8,000 MAD; AC = 8 MAD. For 3,000 posters: TC = 12,000 MAD; AC = 4 MAD. Average cost falls as output rises: <b>economies of scale</b>.</div>
<h3>4. Revenue and profit</h3>
<ul><li><b>Total revenue</b> TR = price × quantity = p·q;</li><li><b>Marginal revenue</b> MR = revenue from the last unit (in perfect competition MR = p);</li><li><b>Profit</b> π = TR − TC.</li></ul>
<div class="def"><b>Profit-maximising rule:</b> produce until <b>MR = MC</b>. In perfect competition: <b>p = MC</b>.</div>
<p><b>Break-even point</b>: the quantity where TR = TC (zero profit). Beyond it, the firm makes money.</p>
<div class="ex">A poster sells for 5 MAD. Profit = 5q − (6,000 + 2q) = 3q − 6,000. Break-even when 3q = 6,000, i.e. <b>q = 2,000 posters</b>.</div>`,
      },
      key: { fr: ['Utilité marginale décroissante.', 'Contrainte budgétaire : Px·X + Py·Y ≤ R.', 'CT = CF + CV ; CM = CT/q ; Cm = dérivée de CT.', 'Profit maximal quand Rm = Cm ; seuil de rentabilité quand RT = CT.'], ar: ['تناقص المنفعة الحدية.', 'القيد الميزانياتي: Px·X + Py·Y ≤ R.', 'CT = CF + CV ؛ CM = CT/q ؛ Cm = مشتقة CT.', 'الربح فالأقصى ملي Rm = Cm؛ عتبة المردودية ملي RT = CT.'], en: ['Diminishing marginal utility.', 'Budget constraint: Px·X + Py·Y ≤ income.', 'TC = FC + VC; AC = TC/q; MC = derivative of TC.', 'Max profit where MR = MC; break-even where TR = TC.'] } },

    { id: 'eco4', t: { fr: 'Les grands agrégats et les politiques économiques', ar: 'المجاميع الكبرى والسياسات الاقتصادية', en: 'Main aggregates and economic policy' },
      sum: { fr: 'PIB, croissance, inflation, chômage, carré magique, politiques budgétaire et monétaire, multiplicateur', ar: 'الناتج الداخلي، النمو، التضخم، البطالة، المربع السحري، السياسة الميزانياتية والنقدية، المضاعف', en: 'GDP, growth, inflation, unemployment, magic square, fiscal and monetary policy, multiplier' },
      body: {
        fr: `<h3>1. Le Produit intérieur brut (PIB)</h3>
<div class="def">Le <b>PIB</b> mesure la valeur de tous les biens et services finaux produits sur le territoire d'un pays pendant une année. Au Maroc, il est calculé par le <b>HCP</b> (Haut-Commissariat au Plan).</div>
<p>Trois approches donnent le même résultat :</p>
<ul><li><b>Approche production</b> : PIB = somme des valeurs ajoutées + impôts sur les produits − subventions.</li>
<li><b>Approche dépenses (demande)</b> : <b>PIB = C + I + G + (X − M)</b> — consommation des ménages, investissement, dépenses publiques, exportations moins importations.</li>
<li><b>Approche revenus</b> : PIB = salaires + excédent brut d'exploitation + impôts nets.</li></ul>
<div class="ex">C = 700, I = 250, G = 200, X = 300, M = 400 (milliards de DH). PIB = 700 + 250 + 200 + (300 − 400) = <b>1 050 milliards de DH</b>.</div>
<p><b>PIB nominal</b> (aux prix courants) et <b>PIB réel</b> (aux prix constants, sans l'effet de l'inflation). Le <b>taux de croissance</b> :</p>
<span class="f">Taux de croissance = (PIB<sub>n</sub> − PIB<sub>n−1</sub>) / PIB<sub>n−1</sub> × 100</span>
<p>Le <b>PIB par habitant</b> = PIB / population, indicateur (imparfait) du niveau de vie. L'<b>IDH</b> (indice de développement humain) ajoute la santé et l'éducation.</p>
<h3>2. L'inflation</h3>
<p>L'<b>inflation</b> est la hausse générale et durable des prix. Elle se mesure avec l'<b>indice des prix à la consommation (IPC)</b> :</p>
<span class="f">Taux d'inflation = (IPC<sub>n</sub> − IPC<sub>n−1</sub>) / IPC<sub>n−1</sub> × 100</span>
<p>Causes : inflation par la <b>demande</b> (demande supérieure à l'offre), par les <b>coûts</b> (hausse du pétrole, des matières premières), <b>monétaire</b> (trop de monnaie en circulation). Conséquence : baisse du <b>pouvoir d'achat</b> si les revenus n'augmentent pas autant.</p>
<p>La <b>déflation</b> est la baisse générale des prix ; la <b>désinflation</b> est un ralentissement de l'inflation.</p>
<h3>3. Le chômage</h3>
<span class="f">Taux de chômage = Chômeurs / Population active × 100</span>
<p>La <b>population active</b> = actifs occupés + chômeurs (personnes sans emploi, disponibles et cherchant un travail). Types de chômage : <b>frictionnel</b> (temps de passage d'un emploi à l'autre), <b>conjoncturel</b> (crise, baisse de la demande), <b>structurel</b> (inadéquation entre les compétences et les emplois proposés).</p>
<h3>4. Le carré magique de Kaldor</h3>
<p>Nicholas Kaldor résume les 4 grands objectifs d'une politique économique : croissance forte, plein-emploi (chômage faible), stabilité des prix (inflation faible) et équilibre extérieur. Il est « magique » car il est très difficile de les atteindre tous en même temps.</p>
{{fig:kaldor}}
<h3>5. Les politiques économiques</h3>
<table><tr><th>Politique</th><th>Qui ?</th><th>Instruments</th><th>Effet recherché</th></tr>
<tr><td><b>Budgétaire</b></td><td>Gouvernement (loi de finances)</td><td>dépenses publiques, impôts</td><td>relance : + dépenses / − impôts ; rigueur : l'inverse</td></tr>
<tr><td><b>Monétaire</b></td><td>Banque centrale : <b>Bank Al-Maghrib</b></td><td>taux directeur, réserves obligatoires</td><td>baisser le taux pour relancer le crédit ; le relever pour lutter contre l'inflation</td></tr></table>
<h3>6. Le multiplicateur keynésien</h3>
<p>Pour Keynes, une dépense supplémentaire (investissement ou dépense publique) augmente le revenu national <b>plus que proportionnellement</b>, car les revenus distribués sont à leur tour dépensés.</p>
<span class="f">k = 1 / (1 − c) &nbsp;&nbsp; où c = propension marginale à consommer &nbsp;&nbsp; ΔY = k × ΔI</span>
<div class="ex">Si c = 0,8, alors k = 1 / 0,2 = 5. Un investissement public de 2 milliards de DH peut augmenter le revenu national de 5 × 2 = <b>10 milliards de DH</b>.</div>`,
        ar: `<h3>1. الناتج الداخلي الإجمالي (PIB)</h3>
<div class="def"><b>الناتج الداخلي الإجمالي</b> كيقيس قيمة جميع السلع والخدمات النهائية المنتجة فوق تراب بلاد ف عام. ف المغرب كتحسبو <b>المندوبية السامية للتخطيط (HCP)</b>.</div>
<p>ثلاث مقاربات كيعطيو نفس النتيجة:</p>
<ul><li><b>مقاربة الإنتاج</b>: PIB = مجموع القيم المضافة + الضرائب على المنتوجات − الإعانات.</li>
<li><b>مقاربة النفقات (الطلب)</b>: <b>PIB = C + I + G + (X − M)</b> — استهلاك الأسر، الاستثمار، النفقات العمومية، الصادرات ناقص الواردات.</li>
<li><b>مقاربة المداخيل</b>: PIB = الأجور + الفائض الإجمالي للاستغلال + الضرائب الصافية.</li></ul>
<div class="ex">C = 700، I = 250، G = 200، X = 300، M = 400 (مليار درهم). PIB = 700 + 250 + 200 + (300 − 400) = <b>1 050 مليار درهم</b>.</div>
<p><b>PIB الاسمي</b> (بالأثمنة الجارية) و<b>PIB الحقيقي</b> (بالأثمنة الثابتة، بلا أثر التضخم). <b>معدل النمو</b>:</p>
<span class="f">معدل النمو = (PIB<sub>n</sub> − PIB<sub>n−1</sub>) / PIB<sub>n−1</sub> × 100</span>
<p><b>PIB لكل فرد</b> = PIB / عدد السكان، مؤشر (ناقص) على مستوى العيش. <b>مؤشر التنمية البشرية</b> كيزيد الصحة والتعليم.</p>
<h3>2. التضخم</h3>
<p><b>التضخم</b> هو الارتفاع العام والمستمر للأثمنة. كيتقاس بـ<b>مؤشر أثمنة الاستهلاك (IPC)</b>:</p>
<span class="f">معدل التضخم = (IPC<sub>n</sub> − IPC<sub>n−1</sub>) / IPC<sub>n−1</sub> × 100</span>
<p>الأسباب: تضخم بسبب <b>الطلب</b> (الطلب أكبر من العرض)، بسبب <b>التكاليف</b> (ارتفاع البترول والمواد الأولية)، <b>نقدي</b> (بزاف ديال النقود ف التداول). النتيجة: تراجع <b>القدرة الشرائية</b> إلا ما زادتش المداخيل بنفس القدر.</p>
<p><b>الانكماش</b> هو الانخفاض العام للأثمنة؛ و<b>تباطؤ التضخم</b> هو نقصان سرعة التضخم.</p>
<h3>3. البطالة</h3>
<span class="f">معدل البطالة = العاطلين / السكان النشيطين × 100</span>
<p><b>السكان النشيطين</b> = النشيطين المشتغلين + العاطلين (أشخاص بلا خدمة، مستعدين وكيقلبو على العمل). أنواع البطالة: <b>احتكاكية</b> (الوقت ديال الانتقال من خدمة لخدمة)، <b>ظرفية</b> (أزمة، تراجع الطلب)، <b>هيكلية</b> (عدم التوافق بين الكفاءات والمناصب المعروضة).</p>
<h3>4. المربع السحري ديال كالدور</h3>
<p>نيكولاس كالدور لخص 4 أهداف كبرى للسياسة الاقتصادية: نمو قوي، التشغيل الكامل (بطالة منخفضة)، استقرار الأثمنة (تضخم منخفض) وتوازن خارجي. «سحري» حيت صعيب بزاف نوصلو ليهم كاملين ف نفس الوقت.</p>
{{fig:kaldor}}
<h3>5. السياسات الاقتصادية</h3>
<table><tr><th>السياسة</th><th>شكون؟</th><th>الأدوات</th><th>الأثر</th></tr>
<tr><td><b>الميزانياتية</b></td><td>الحكومة (قانون المالية)</td><td>النفقات العمومية، الضرائب</td><td>الإنعاش: + نفقات / − ضرائب؛ التقشف: العكس</td></tr>
<tr><td><b>النقدية</b></td><td>البنك المركزي: <b>بنك المغرب</b></td><td>سعر الفائدة الرئيسي، الاحتياطي الإلزامي</td><td>تخفيض السعر لإنعاش القروض؛ رفعو لمحاربة التضخم</td></tr></table>
<h3>6. المضاعف الكينزي</h3>
<p>حسب كينز، نفقة إضافية (استثمار أو نفقة عمومية) كتزيد الدخل الوطني <b>بأكثر منها</b>، حيت المداخيل الموزعة كترجع تتصرف بدورها.</p>
<span class="f">k = 1 / (1 − c) &nbsp;&nbsp; c = الميل الحدي للاستهلاك &nbsp;&nbsp; ΔY = k × ΔI</span>
<div class="ex">إلا c = 0,8، إذن k = 1 / 0,2 = 5. استثمار عمومي ديال 2 مليار درهم يقدر يزيد الدخل الوطني بـ 5 × 2 = <b>10 مليار درهم</b>.</div>`,
        en: `<h3>1. Gross domestic product (GDP)</h3>
<div class="def"><b>GDP</b> measures the value of all final goods and services produced within a country during a year. In Morocco it is computed by the <b>HCP</b> (High Commission for Planning).</div>
<p>Three approaches give the same result:</p>
<ul><li><b>Output approach</b>: GDP = sum of value added + taxes on products − subsidies.</li>
<li><b>Expenditure approach</b>: <b>GDP = C + I + G + (X − M)</b> — household consumption, investment, government spending, exports minus imports.</li>
<li><b>Income approach</b>: GDP = wages + gross operating surplus + net taxes.</li></ul>
<div class="ex">C = 700, I = 250, G = 200, X = 300, M = 400 (billion MAD). GDP = 700 + 250 + 200 + (300 − 400) = <b>1,050 billion MAD</b>.</div>
<p><b>Nominal GDP</b> (current prices) vs <b>real GDP</b> (constant prices, without inflation). The <b>growth rate</b>:</p>
<span class="f">Growth rate = (GDP<sub>n</sub> − GDP<sub>n−1</sub>) / GDP<sub>n−1</sub> × 100</span>
<p><b>GDP per capita</b> = GDP / population, an (imperfect) indicator of living standards. The <b>HDI</b> adds health and education.</p>
<h3>2. Inflation</h3>
<p><b>Inflation</b> is a general and lasting rise in prices, measured by the <b>consumer price index (CPI)</b>:</p>
<span class="f">Inflation rate = (CPI<sub>n</sub> − CPI<sub>n−1</sub>) / CPI<sub>n−1</sub> × 100</span>
<p>Causes: <b>demand-pull</b> (demand above supply), <b>cost-push</b> (higher oil and raw-material prices), <b>monetary</b> (too much money in circulation). Consequence: lower <b>purchasing power</b> if incomes do not rise as much.</p>
<p><b>Deflation</b> is a general fall in prices; <b>disinflation</b> is a slowdown of inflation.</p>
<h3>3. Unemployment</h3>
<span class="f">Unemployment rate = Unemployed / Labour force × 100</span>
<p>The <b>labour force</b> = employed + unemployed (people without a job, available and looking for work). Types: <b>frictional</b> (time between jobs), <b>cyclical</b> (crisis, falling demand), <b>structural</b> (mismatch between skills and jobs).</p>
<h3>4. Kaldor's magic square</h3>
<p>Nicholas Kaldor summarised the 4 main goals of economic policy: strong growth, full employment, price stability (low inflation) and external balance. It is “magic” because reaching all four at once is very hard.</p>
{{fig:kaldor}}
<h3>5. Economic policies</h3>
<table><tr><th>Policy</th><th>Who?</th><th>Tools</th><th>Aim</th></tr>
<tr><td><b>Fiscal</b></td><td>Government (finance law)</td><td>public spending, taxes</td><td>stimulus: + spending / − taxes; austerity: the opposite</td></tr>
<tr><td><b>Monetary</b></td><td>Central bank: <b>Bank Al-Maghrib</b></td><td>policy rate, reserve requirements</td><td>cut the rate to boost credit; raise it to fight inflation</td></tr></table>
<h3>6. The Keynesian multiplier</h3>
<p>For Keynes, extra spending (investment or public spending) raises national income <b>more than proportionally</b>, because the income it creates is spent again.</p>
<span class="f">k = 1 / (1 − c) &nbsp;&nbsp; c = marginal propensity to consume &nbsp;&nbsp; ΔY = k × ΔI</span>
<div class="ex">If c = 0.8, then k = 1 / 0.2 = 5. Public investment of 2 billion MAD can raise national income by 5 × 2 = <b>10 billion MAD</b>.</div>`,
      },
      key: { fr: ['PIB = C + I + G + (X − M).', 'Croissance, inflation : (valeur n − valeur n−1) / valeur n−1 × 100.', 'Taux de chômage = chômeurs / population active.', 'Politique budgétaire (État) vs monétaire (Bank Al-Maghrib).', 'Multiplicateur k = 1 / (1 − c).'], ar: ['PIB = C + I + G + (X − M).', 'النمو والتضخم: (قيمة n − قيمة n−1) / قيمة n−1 × 100.', 'معدل البطالة = العاطلين / السكان النشيطين.', 'السياسة الميزانياتية (الدولة) مقابل النقدية (بنك المغرب).', 'المضاعف k = 1 / (1 − c).'], en: ['GDP = C + I + G + (X − M).', 'Growth, inflation: (value n − value n−1) / value n−1 × 100.', 'Unemployment rate = unemployed / labour force.', 'Fiscal policy (government) vs monetary (Bank Al-Maghrib).', 'Multiplier k = 1 / (1 − c).'] } },
  ],
  gloss: [
    ['Rareté', 'الندرة', 'Scarcity', { fr: 'Les ressources sont limitées par rapport aux besoins.', ar: 'الموارد محدودة مقارنة مع الحاجات.', en: 'Resources are limited compared to needs.' }],
    ['Coût d’opportunité', 'تكلفة الفرصة الضائعة', 'Opportunity cost', { fr: 'Valeur de la meilleure option à laquelle on renonce.', ar: 'قيمة أحسن خيار كنتخلاو عليه.', en: 'Value of the best alternative given up.' }],
    ['Ménages', 'الأسر', 'Households', { fr: 'Agents dont la fonction principale est de consommer.', ar: 'أعوان الوظيفة الأساسية ديالهم هي الاستهلاك.', en: 'Agents whose main function is to consume.' }],
    ['Biens substituables', 'السلع البديلة', 'Substitute goods', { fr: 'Biens qui peuvent se remplacer (thé / café).', ar: 'سلع اللي تقدر تعوض بعضها (أتاي / القهوة).', en: 'Goods that can replace each other (tea / coffee).' }],
    ['Loi de la demande', 'قانون الطلب', 'Law of demand', { fr: 'Quand le prix monte, la quantité demandée baisse.', ar: 'ملي كيطلع الثمن، الكمية المطلوبة كتنقص.', en: 'When price rises, quantity demanded falls.' }],
    ['Prix d’équilibre', 'ثمن التوازن', 'Equilibrium price', { fr: 'Prix où l’offre est égale à la demande.', ar: 'الثمن اللي فيه العرض كيساوي الطلب.', en: 'Price where supply equals demand.' }],
    ['Élasticité-prix', 'مرونة الثمن', 'Price elasticity', { fr: 'Variation % de la quantité / variation % du prix.', ar: 'التغير % ف الكمية / التغير % ف الثمن.', en: '% change in quantity / % change in price.' }],
    ['Oligopole', 'احتكار القلة', 'Oligopoly', { fr: 'Marché dominé par quelques vendeurs.', ar: 'سوق كيتحكمو فيه شي بائعين قلال.', en: 'Market dominated by a few sellers.' }],
    ['Utilité marginale', 'المنفعة الحدية', 'Marginal utility', { fr: 'Satisfaction apportée par la dernière unité consommée.', ar: 'الرضا اللي كتجيبو آخر وحدة مستهلكة.', en: 'Satisfaction from the last unit consumed.' }],
    ['Coût marginal', 'التكلفة الحدية', 'Marginal cost', { fr: 'Coût de production d’une unité supplémentaire.', ar: 'تكلفة إنتاج وحدة إضافية.', en: 'Cost of producing one extra unit.' }],
    ['Coût fixe', 'التكلفة الثابتة', 'Fixed cost', { fr: 'Coût indépendant de la quantité produite (loyer).', ar: 'تكلفة ما كتبدلش مع الكمية (الكراء).', en: 'Cost independent of output (rent).' }],
    ['Seuil de rentabilité', 'عتبة المردودية', 'Break-even point', { fr: 'Quantité pour laquelle recette totale = coût total.', ar: 'الكمية اللي فيها المداخيل الكلية = التكلفة الكلية.', en: 'Quantity where total revenue = total cost.' }],
    ['Économies d’échelle', 'وفورات الحجم', 'Economies of scale', { fr: 'Baisse du coût moyen quand la production augmente.', ar: 'نقصان التكلفة المتوسطة ملي كيزيد الإنتاج.', en: 'Fall in average cost as output rises.' }],
    ['PIB', 'الناتج الداخلي الإجمالي', 'GDP', { fr: 'Valeur des biens et services finaux produits dans un pays en un an.', ar: 'قيمة السلع والخدمات النهائية المنتجة ف بلاد ف عام.', en: 'Value of final goods and services produced in a country in a year.' }],
    ['Inflation', 'التضخم', 'Inflation', { fr: 'Hausse générale et durable des prix.', ar: 'ارتفاع عام ومستمر للأثمنة.', en: 'General and lasting rise in prices.' }],
    ['Population active', 'السكان النشيطين', 'Labour force', { fr: 'Actifs occupés + chômeurs.', ar: 'المشتغلين + العاطلين.', en: 'Employed + unemployed.' }],
    ['Politique monétaire', 'السياسة النقدية', 'Monetary policy', { fr: 'Action de la banque centrale sur la monnaie et les taux d’intérêt.', ar: 'تدخل البنك المركزي ف النقود وأسعار الفائدة.', en: 'Central bank action on money and interest rates.' }],
    ['Multiplicateur', 'المضاعف', 'Multiplier', { fr: 'k = 1/(1 − c) : effet amplifié d’une dépense sur le revenu.', ar: 'k = 1/(1 − c): الأثر المضاعف لنفقة على الدخل.', en: 'k = 1/(1 − c): amplified effect of spending on income.' }],
  ],
};
