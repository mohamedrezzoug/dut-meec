// Module — Comptabilité et Travaux de fin d'exercice (CGNC, Maroc)
export default {
  id: 'compta', code: '1.1.3', em: '🧾', color: '#c2412d', prof: 'MARKAOUI Kawtar',
  name: { fr: "Comptabilité et travaux de fin d'exercice", ar: 'المحاسبة وأشغال نهاية الدورة', en: 'Accounting and year-end work' },
  intro: { fr: "La comptabilité générale enregistre toutes les opérations de l'entreprise selon le CGNC marocain, pour établir à la fin de l'année le bilan et le compte de produits et charges (CPC).", ar: 'المحاسبة العامة كتسجل جميع العمليات ديال المقاولة حسب المدونة العامة للتطبيع المحاسبي (CGNC)، باش ف آخر العام نوجدو الميزانية وحساب العائدات والتكاليف (CPC).', en: 'Financial accounting records all company transactions under the Moroccan CGNC, to produce the balance sheet and income statement (CPC) at year end.' },
  chapters: [
    { id: 'cpt1', t: { fr: 'Le rôle de la comptabilité et le bilan', ar: 'دور المحاسبة والميزانية', en: 'The role of accounting and the balance sheet' },
      sum: { fr: 'Définition, CGNC, principes comptables, actif et passif, équation du bilan', ar: 'التعريف، CGNC، المبادئ المحاسبية، الأصول والخصوم، معادلة الميزانية', en: 'Definition, CGNC, accounting principles, assets and liabilities, balance equation' },
      body: {
        fr: `<h3>1. À quoi sert la comptabilité ?</h3>
<div class="def">La <b>comptabilité générale</b> est un système d'organisation de l'information financière qui permet de <b>saisir, classer, enregistrer</b> les opérations de l'entreprise et de présenter des <b>états de synthèse</b> qui donnent une image fidèle de son patrimoine, de sa situation financière et de ses résultats.</div>
<p>Elle est utile à de nombreux acteurs :</p>
<ul><li><b>le dirigeant</b> : pour piloter l'entreprise et prendre des décisions ;</li><li><b>l'État (DGI)</b> : pour calculer les impôts (IS, IR, TVA) ;</li><li><b>les banques</b> : pour accorder un crédit ;</li><li><b>les associés et investisseurs</b> : pour connaître la rentabilité ;</li><li><b>les salariés, clients et fournisseurs</b> : pour juger la solidité de l'entreprise.</li></ul>
<h3>2. Le cadre marocain : le CGNC</h3>
<p>Au Maroc, la comptabilité est régie par la <b>loi 9-88</b> et le <b>Code général de normalisation comptable (CGNC)</b>. Le plan des comptes est organisé en <b>classes</b> :</p>
<table><tr><th>Classe</th><th>Contenu</th><th>Document</th></tr>
<tr><td>1</td><td>Comptes de financement permanent (capital, emprunts)</td><td rowspan="5">Bilan</td></tr><tr><td>2</td><td>Comptes d'actif immobilisé</td></tr><tr><td>3</td><td>Comptes d'actif circulant (hors trésorerie)</td></tr><tr><td>4</td><td>Comptes de passif circulant (hors trésorerie)</td></tr><tr><td>5</td><td>Comptes de trésorerie</td></tr>
<tr><td>6</td><td>Comptes de charges</td><td rowspan="2">CPC</td></tr><tr><td>7</td><td>Comptes de produits</td></tr>
<tr><td>8</td><td>Comptes de résultats</td><td>—</td></tr></table>
<p>Les états de synthèse au Maroc sont <b>5</b> : le Bilan, le CPC (compte de produits et charges), l'ESG (état des soldes de gestion), le TF (tableau de financement) et l'ETIC (état des informations complémentaires).</p>
<h3>3. Les principes comptables fondamentaux</h3>
<ul><li><b>Continuité d'exploitation</b> : on suppose que l'entreprise va continuer son activité.</li>
<li><b>Permanence des méthodes</b> : on garde les mêmes méthodes d'une année à l'autre.</li>
<li><b>Coût historique</b> : les biens sont enregistrés à leur prix d'achat.</li>
<li><b>Spécialisation des exercices</b> : chaque année ne supporte que ses propres charges et produits.</li>
<li><b>Prudence</b> : on enregistre les pertes probables, mais pas les gains seulement probables.</li>
<li><b>Clarté</b> et <b>importance significative</b> : informations claires, qui comptent vraiment.</li></ul>
<h3>4. Le bilan</h3>
<div class="def">Le <b>bilan</b> est une « photographie » du patrimoine de l'entreprise à une date donnée (en général le 31 décembre). À gauche, l'<b>actif</b> : ce que l'entreprise possède (ses emplois). À droite, le <b>passif</b> : d'où viennent les ressources (capitaux propres et dettes).</div>
{{fig:bilan}}
<span class="f">Total Actif = Total Passif &nbsp;&nbsp;⟺&nbsp;&nbsp; Capitaux propres = Actif − Dettes</span>
<div class="ex"><b>Exemple :</b> Salma crée le 1er octobre une boutique en ligne avec un apport de 80 000 DH déposé à la banque. Elle achète un ordinateur à 12 000 DH (payé par banque) et un stock de marchandises à 20 000 DH (à crédit chez un fournisseur).<br>
Actif : matériel informatique 12 000 + stock 20 000 + banque (80 000 − 12 000) 68 000 = <b>100 000 DH</b>.<br>
Passif : capital 80 000 + fournisseurs 20 000 = <b>100 000 DH</b>. L'équilibre est respecté ✔.</div>
<h3>5. Le résultat</h3>
<p>Le <b>résultat</b> de l'exercice est la différence entre les produits et les charges : <b>Résultat = Produits − Charges</b>. S'il est positif, c'est un <b>bénéfice</b> (il augmente les capitaux propres) ; s'il est négatif, c'est une <b>perte</b>. On le retrouve à la fois au passif du bilan et dans le CPC.</p>`,
        ar: `<h3>1. علاش كتصلح المحاسبة؟</h3>
<div class="def"><b>المحاسبة العامة</b> هي نظام لتنظيم المعلومة المالية كيمكن من <b>حجز، ترتيب، وتسجيل</b> العمليات ديال المقاولة، وتقديم <b>قوائم تركيبية</b> كتعطي صورة صادقة على الذمة المالية، الوضعية المالية والنتائج.</div>
<p>كتنفع بزاف ديال الأطراف:</p>
<ul><li><b>المسير</b>: باش يسير المقاولة وياخد القرارات؛</li><li><b>الدولة (المديرية العامة للضرائب)</b>: باش تحسب الضرائب (IS، IR، TVA)؛</li><li><b>الأبناك</b>: باش تعطي القرض؛</li><li><b>الشركاء والمستثمرين</b>: باش يعرفو المردودية؛</li><li><b>الأجراء والزبناء والموردين</b>: باش يحكمو على متانة المقاولة.</li></ul>
<h3>2. الإطار المغربي: CGNC</h3>
<p>ف المغرب، المحاسبة منظمة بـ<b>القانون 9-88</b> و<b>المدونة العامة للتطبيع المحاسبي (CGNC)</b>. مخطط الحسابات منظم ف <b>أصناف</b>:</p>
<table><tr><th>الصنف</th><th>المحتوى</th><th>الوثيقة</th></tr>
<tr><td>1</td><td>حسابات التمويل الدائم (الرأسمال، القروض)</td><td rowspan="5">الميزانية</td></tr><tr><td>2</td><td>حسابات الأصول الثابتة</td></tr><tr><td>3</td><td>حسابات الأصول المتداولة (خارج الخزينة)</td></tr><tr><td>4</td><td>حسابات الخصوم المتداولة (خارج الخزينة)</td></tr><tr><td>5</td><td>حسابات الخزينة</td></tr>
<tr><td>6</td><td>حسابات التكاليف</td><td rowspan="2">CPC</td></tr><tr><td>7</td><td>حسابات العائدات</td></tr>
<tr><td>8</td><td>حسابات النتائج</td><td>—</td></tr></table>
<p>القوائم التركيبية ف المغرب هوما <b>5</b>: الميزانية، حساب العائدات والتكاليف (CPC)، قائمة أرصدة الإدارة (ESG)، جدول التمويل (TF) وقائمة المعلومات التكميلية (ETIC).</p>
<h3>3. المبادئ المحاسبية الأساسية</h3>
<ul><li><b>استمرارية الاستغلال</b>: كنفترضو بلي المقاولة غادي تكمل النشاط ديالها.</li>
<li><b>ثبات الطرق</b>: كنحافظو على نفس الطرق من عام لعام.</li>
<li><b>التكلفة التاريخية</b>: الممتلكات كتتسجل بثمن الشراء ديالها.</li>
<li><b>استقلال الدورات</b>: كل عام كيتحمل غير التكاليف والعائدات ديالو.</li>
<li><b>الحيطة والحذر</b>: كنسجلو الخسائر المحتملة، ولكن ما كنسجلوش الأرباح غير المحتملة.</li>
<li><b>الوضوح</b> و<b>الأهمية النسبية</b>: معلومات واضحة ومهمة بصح.</li></ul>
<h3>4. الميزانية</h3>
<div class="def"><b>الميزانية</b> هي «صورة» على الذمة المالية ديال المقاولة ف تاريخ محدد (عادة 31 دجنبر). على اليسار <b>الأصول</b>: آش كتملك المقاولة (الاستعمالات). على اليمين <b>الخصوم</b>: منين جاو الموارد (رؤوس الأموال الذاتية والديون).</div>
{{fig:bilan}}
<span class="f">مجموع الأصول = مجموع الخصوم &nbsp;⟺&nbsp; رؤوس الأموال الذاتية = الأصول − الديون</span>
<div class="ex"><b>مثال:</b> سلمى فتحات ف 1 أكتوبر متجر إلكتروني بمساهمة ديال 80 000 درهم حطاتها ف البنك. شرات حاسوب بـ 12 000 درهم (خلصات بالبنك) ومخزون ديال البضائع بـ 20 000 درهم (بالكريدي عند مورد).<br>
الأصول: معدات معلوماتية 12 000 + مخزون 20 000 + البنك (80 000 − 12 000) 68 000 = <b>100 000 درهم</b>.<br>
الخصوم: الرأسمال 80 000 + الموردين 20 000 = <b>100 000 درهم</b>. التوازن محترم ✔.</div>
<h3>5. النتيجة</h3>
<p><b>النتيجة</b> ديال الدورة هي الفرق بين العائدات والتكاليف: <b>النتيجة = العائدات − التكاليف</b>. إلا كانت موجبة فهي <b>ربح</b> (كتزيد ف رؤوس الأموال الذاتية)؛ إلا كانت سالبة فهي <b>خسارة</b>. كتلقاها ف الخصوم ديال الميزانية وحتى ف CPC.</p>`,
        en: `<h3>1. What is accounting for?</h3>
<div class="def"><b>Financial accounting</b> is a system for organising financial information: it <b>captures, classifies and records</b> the company's transactions and presents <b>financial statements</b> giving a true and fair view of its assets, financial position and results.</div>
<p>It serves many users:</p>
<ul><li><b>the manager</b>: to run the company and make decisions;</li><li><b>the State (tax authority, DGI)</b>: to compute taxes (corporate tax, income tax, VAT);</li><li><b>banks</b>: to grant loans;</li><li><b>partners and investors</b>: to assess profitability;</li><li><b>employees, customers and suppliers</b>: to judge the firm's soundness.</li></ul>
<h3>2. The Moroccan framework: the CGNC</h3>
<p>In Morocco accounting is governed by <b>Law 9-88</b> and the <b>General Accounting Standards Code (CGNC)</b>. The chart of accounts is organised in <b>classes</b>:</p>
<table><tr><th>Class</th><th>Content</th><th>Statement</th></tr>
<tr><td>1</td><td>Permanent financing (capital, long-term loans)</td><td rowspan="5">Balance sheet</td></tr><tr><td>2</td><td>Fixed assets</td></tr><tr><td>3</td><td>Current assets (excluding cash)</td></tr><tr><td>4</td><td>Current liabilities (excluding cash)</td></tr><tr><td>5</td><td>Cash accounts</td></tr>
<tr><td>6</td><td>Expenses</td><td rowspan="2">Income statement (CPC)</td></tr><tr><td>7</td><td>Revenues</td></tr>
<tr><td>8</td><td>Results</td><td>—</td></tr></table>
<p>Morocco has <b>5</b> financial statements: the balance sheet, the CPC (income statement), the ESG (management balances), the TF (funding table) and the ETIC (notes).</p>
<h3>3. Key accounting principles</h3>
<ul><li><b>Going concern</b>: the company is assumed to continue operating.</li>
<li><b>Consistency</b>: the same methods are kept from year to year.</li>
<li><b>Historical cost</b>: assets are recorded at purchase price.</li>
<li><b>Accruals (period independence)</b>: each year bears only its own expenses and revenues.</li>
<li><b>Prudence</b>: probable losses are recorded, merely probable gains are not.</li>
<li><b>Clarity</b> and <b>materiality</b>: clear information that really matters.</li></ul>
<h3>4. The balance sheet</h3>
<div class="def">The <b>balance sheet</b> is a “snapshot” of the company's position at a given date (usually 31 December). On the left, <b>assets</b>: what the company owns (uses of funds). On the right, <b>liabilities and equity</b>: where resources come from.</div>
{{fig:bilan}}
<span class="f">Total assets = Total liabilities &nbsp;⟺&nbsp; Equity = Assets − Debts</span>
<div class="ex"><b>Example:</b> On 1 October Salma starts an online shop with 80,000 MAD deposited at the bank. She buys a computer for 12,000 MAD (paid by bank) and goods for 20,000 MAD (on credit from a supplier).<br>
Assets: computer equipment 12,000 + inventory 20,000 + bank (80,000 − 12,000) 68,000 = <b>100,000 MAD</b>.<br>
Liabilities: capital 80,000 + suppliers 20,000 = <b>100,000 MAD</b>. Balanced ✔.</div>
<h3>5. The result</h3>
<p>The year's <b>result</b> is revenues minus expenses: <b>Result = Revenues − Expenses</b>. Positive = <b>profit</b> (it increases equity); negative = <b>loss</b>. It appears both in the balance sheet (liabilities side) and in the CPC.</p>`,
      },
      key: { fr: ['CGNC : classes 1 à 5 → bilan ; 6 et 7 → CPC.', 'Actif = emplois ; Passif = ressources ; Total Actif = Total Passif.', 'Résultat = Produits − Charges.', 'Principes : continuité, permanence, coût historique, spécialisation, prudence.'], ar: ['CGNC: الأصناف 1 حتى 5 ← الميزانية؛ 6 و 7 ← CPC.', 'الأصول = الاستعمالات؛ الخصوم = الموارد؛ مجموع الأصول = مجموع الخصوم.', 'النتيجة = العائدات − التكاليف.', 'المبادئ: الاستمرارية، الثبات، التكلفة التاريخية، استقلال الدورات، الحيطة.'], en: ['CGNC: classes 1–5 → balance sheet; 6 and 7 → CPC.', 'Assets = uses; liabilities = resources; total assets = total liabilities.', 'Result = Revenues − Expenses.', 'Principles: going concern, consistency, historical cost, accruals, prudence.'] } },

    { id: 'cpt2', t: { fr: 'Le compte, la partie double et le journal', ar: 'الحساب، القيد المزدوج واليومية', en: 'Accounts, double entry and the journal' },
      sum: { fr: 'Compte en T, débit/crédit, règles de fonctionnement, journal, grand livre, balance', ar: 'الحساب على شكل T، المدين/الدائن، قواعد الاشتغال، اليومية، دفتر الأستاذ، الميزان', en: 'T-account, debit/credit, rules, journal, ledger, trial balance' },
      body: {
        fr: `<h3>1. Le compte</h3>
<div class="def">Un <b>compte</b> est un tableau qui enregistre les mouvements (augmentations et diminutions) d'un élément du patrimoine, d'une charge ou d'un produit. Il a deux côtés : le <b>débit</b> (à gauche) et le <b>crédit</b> (à droite).</div>
{{fig:compteT}}
<p>Le <b>solde</b> = total débit − total crédit. S'il est positif : solde <b>débiteur</b> ; s'il est négatif : solde <b>créditeur</b>.</p>
<h3>2. La partie double</h3>
<p>Chaque opération touche <b>au moins deux comptes</b> : un compte est débité et un autre est crédité <b>du même montant</b>. C'est le principe de la <b>partie double</b> : <b>Σ débits = Σ crédits</b>.</p>
<h3>3. Les règles de fonctionnement</h3>
<table><tr><th>Type de compte</th><th>Augmentation</th><th>Diminution</th></tr>
<tr><td>Actif (classes 2, 3, 5 débiteurs)</td><td>Débit</td><td>Crédit</td></tr>
<tr><td>Passif (classes 1, 4)</td><td>Crédit</td><td>Débit</td></tr>
<tr><td>Charges (classe 6)</td><td>Débit</td><td>(Crédit si annulation)</td></tr>
<tr><td>Produits (classe 7)</td><td>Crédit</td><td>(Débit si annulation)</td></tr></table>
<div class="tip">Astuce : « <b>Ce que je reçois, je le débite ; ce que je donne, je le crédite.</b> » Si l'argent rentre en banque → je débite 5141 ; si l'argent sort → je crédite 5141.</div>
<h3>4. Les comptes les plus utilisés (CGNC)</h3>
<table><tr><th>N°</th><th>Intitulé</th><th>N°</th><th>Intitulé</th></tr>
<tr><td>1111</td><td>Capital social</td><td>6111</td><td>Achats de marchandises</td></tr>
<tr><td>1481</td><td>Emprunts auprès des établissements de crédit</td><td>6125</td><td>Achats non stockés (eau, électricité)</td></tr>
<tr><td>2340</td><td>Matériel de transport</td><td>6131</td><td>Locations et charges locatives</td></tr>
<tr><td>2355</td><td>Matériel informatique</td><td>6171</td><td>Rémunérations du personnel</td></tr>
<tr><td>3111</td><td>Marchandises (stock)</td><td>6147</td><td>Services bancaires</td></tr>
<tr><td>3421</td><td>Clients</td><td>7111</td><td>Ventes de marchandises</td></tr>
<tr><td>34552</td><td>État – TVA récupérable sur charges</td><td>7124</td><td>Ventes de services</td></tr>
<tr><td>4411</td><td>Fournisseurs</td><td>5141</td><td>Banques</td></tr>
<tr><td>4455</td><td>État – TVA facturée</td><td>5161</td><td>Caisse</td></tr></table>
<h3>5. Le journal</h3>
<p>Le <b>journal</b> enregistre les opérations dans l'<b>ordre chronologique</b>. Chaque enregistrement s'appelle une <b>écriture</b> (ou un article) : date, comptes débités puis crédités, libellé, montants.</p>
{{fig:journal}}
<div class="ex"><b>Opérations de la boutique de Salma :</b><br>
1) Apport en banque de 80 000 DH : <b>5141 Banques (D) 80 000 / 1111 Capital (C) 80 000</b>.<br>
2) Achat d'un ordinateur 12 000 DH par chèque : <b>2355 Matériel informatique (D) 12 000 / 5141 Banques (C) 12 000</b>.<br>
3) Paiement du loyer 3 000 DH en espèces : <b>6131 Locations (D) 3 000 / 5161 Caisse (C) 3 000</b>.<br>
4) Vente de marchandises au comptant 6 000 DH HT, encaissée en banque (TVA 20 %) : <b>5141 (D) 7 200 / 7111 (C) 6 000 / 4455 (C) 1 200</b>.</div>
<h3>6. Le grand livre et la balance</h3>
<p>Le <b>grand livre</b> regroupe tous les comptes de l'entreprise : on y reporte chaque ligne du journal dans le bon compte. La <b>balance</b> est un tableau qui liste tous les comptes avec leurs totaux et leurs soldes. Elle permet de vérifier que <b>total des soldes débiteurs = total des soldes créditeurs</b>.</p>
<div class="warn">Une balance équilibrée ne prouve pas qu'il n'y a pas d'erreur (par exemple une écriture oubliée ou passée dans le mauvais compte), mais une balance déséquilibrée prouve qu'il y en a une.</div>`,
        ar: `<h3>1. الحساب</h3>
<div class="def"><b>الحساب</b> هو جدول كيسجل الحركات (الزيادة والنقصان) ديال عنصر من الذمة المالية، ولا تكلفة ولا عائد. عندو جوج جهات: <b>المدين</b> (على اليسار) و<b>الدائن</b> (على اليمين).</div>
{{fig:compteT}}
<p><b>الرصيد</b> = مجموع المدين − مجموع الدائن. إلا كان موجب: رصيد <b>مدين</b>؛ إلا كان سالب: رصيد <b>دائن</b>.</p>
<h3>2. القيد المزدوج</h3>
<p>كل عملية كتمس <b>على الأقل جوج حسابات</b>: حساب كيتجعل مدين وحساب آخر كيتجعل دائن <b>بنفس المبلغ</b>. هادا هو مبدأ <b>القيد المزدوج</b>: <b>مجموع المدين = مجموع الدائن</b>.</p>
<h3>3. قواعد اشتغال الحسابات</h3>
<table><tr><th>نوع الحساب</th><th>الزيادة</th><th>النقصان</th></tr>
<tr><td>الأصول (الأصناف 2، 3، 5)</td><td>مدين</td><td>دائن</td></tr>
<tr><td>الخصوم (الأصناف 1، 4)</td><td>دائن</td><td>مدين</td></tr>
<tr><td>التكاليف (الصنف 6)</td><td>مدين</td><td>(دائن ف حالة الإلغاء)</td></tr>
<tr><td>العائدات (الصنف 7)</td><td>دائن</td><td>(مدين ف حالة الإلغاء)</td></tr></table>
<div class="tip">قاعدة سهلة: «<b>اللي كيدخل كنجعلو مدين، واللي كيخرج كنجعلو دائن.</b>» إلا دخلو الفلوس للبنك ← مدين 5141؛ إلا خرجو ← دائن 5141.</div>
<h3>4. الحسابات الأكثر استعمالا (CGNC)</h3>
<table><tr><th>الرقم</th><th>الاسم</th><th>الرقم</th><th>الاسم</th></tr>
<tr><td>1111</td><td>الرأسمال الاجتماعي</td><td>6111</td><td>مشتريات البضائع</td></tr>
<tr><td>1481</td><td>قروض من مؤسسات الائتمان</td><td>6125</td><td>مشتريات غير مخزنة (الما، الضو)</td></tr>
<tr><td>2340</td><td>معدات النقل</td><td>6131</td><td>الكراء والتكاليف الإيجارية</td></tr>
<tr><td>2355</td><td>المعدات المعلوماتية</td><td>6171</td><td>أجور المستخدمين</td></tr>
<tr><td>3111</td><td>البضائع (المخزون)</td><td>6147</td><td>الخدمات البنكية</td></tr>
<tr><td>3421</td><td>الزبناء</td><td>7111</td><td>مبيعات البضائع</td></tr>
<tr><td>34552</td><td>الدولة – الضريبة على القيمة المضافة القابلة للاسترجاع</td><td>7124</td><td>بيع الخدمات</td></tr>
<tr><td>4411</td><td>الموردون</td><td>5141</td><td>الأبناك</td></tr>
<tr><td>4455</td><td>الدولة – الضريبة على القيمة المضافة المفوترة</td><td>5161</td><td>الصندوق</td></tr></table>
<h3>5. اليومية</h3>
<p><b>اليومية</b> كتسجل العمليات حسب <b>الترتيب الزمني</b>. كل تسجيل كيتسمى <b>قيد</b>: التاريخ، الحسابات المدينة ومن بعد الدائنة، البيان، المبالغ.</p>
{{fig:journal}}
<div class="ex"><b>العمليات ديال المتجر ديال سلمى:</b><br>
1) مساهمة ف البنك 80 000 درهم: <b>5141 الأبناك (مدين) 80 000 / 1111 الرأسمال (دائن) 80 000</b>.<br>
2) شراء حاسوب 12 000 درهم بشيك: <b>2355 المعدات المعلوماتية (مدين) 12 000 / 5141 الأبناك (دائن) 12 000</b>.<br>
3) خلاص الكراء 3 000 درهم نقدا: <b>6131 الكراء (مدين) 3 000 / 5161 الصندوق (دائن) 3 000</b>.<br>
4) بيع بضائع نقدا 6 000 درهم خارج الرسم، مستخلصة ف البنك (TVA 20 %): <b>5141 (مدين) 7 200 / 7111 (دائن) 6 000 / 4455 (دائن) 1 200</b>.</div>
<h3>6. دفتر الأستاذ والميزان</h3>
<p><b>دفتر الأستاذ</b> كيجمع جميع الحسابات ديال المقاولة: كننقلو كل سطر من اليومية للحساب المناسب. <b>ميزان المراجعة</b> هو جدول فيه جميع الحسابات مع المجاميع والأرصدة ديالهم. كيسمح نتحققو بلي <b>مجموع الأرصدة المدينة = مجموع الأرصدة الدائنة</b>.</p>
<div class="warn">ميزان متوازن ما كيثبتش بلي ما كاينش غلط (مثلا قيد منسي ولا ف حساب غالط)، ولكن ميزان غير متوازن كيثبت بلي كاين غلط.</div>`,
        en: `<h3>1. The account</h3>
<div class="def">An <b>account</b> is a table recording movements (increases and decreases) of an asset, liability, expense or revenue item. It has two sides: <b>debit</b> (left) and <b>credit</b> (right).</div>
{{fig:compteT}}
<p>The <b>balance</b> = total debits − total credits. Positive: <b>debit balance</b>; negative: <b>credit balance</b>.</p>
<h3>2. Double entry</h3>
<p>Every transaction affects <b>at least two accounts</b>: one is debited and another credited <b>by the same amount</b>. This is <b>double-entry bookkeeping</b>: <b>Σ debits = Σ credits</b>.</p>
<h3>3. Rules</h3>
<table><tr><th>Account type</th><th>Increase</th><th>Decrease</th></tr>
<tr><td>Assets (classes 2, 3, 5)</td><td>Debit</td><td>Credit</td></tr>
<tr><td>Liabilities & equity (classes 1, 4)</td><td>Credit</td><td>Debit</td></tr>
<tr><td>Expenses (class 6)</td><td>Debit</td><td>(Credit if cancelled)</td></tr>
<tr><td>Revenues (class 7)</td><td>Credit</td><td>(Debit if cancelled)</td></tr></table>
<div class="tip">Tip: “<b>What comes in is debited; what goes out is credited.</b>” Money into the bank → debit 5141; money out → credit 5141.</div>
<h3>4. Most common accounts (CGNC)</h3>
<table><tr><th>No.</th><th>Name</th><th>No.</th><th>Name</th></tr>
<tr><td>1111</td><td>Share capital</td><td>6111</td><td>Purchases of goods</td></tr>
<tr><td>1481</td><td>Bank loans</td><td>6125</td><td>Non-stocked purchases (water, power)</td></tr>
<tr><td>2340</td><td>Vehicles</td><td>6131</td><td>Rent</td></tr>
<tr><td>2355</td><td>Computer equipment</td><td>6171</td><td>Staff salaries</td></tr>
<tr><td>3111</td><td>Goods (inventory)</td><td>6147</td><td>Bank charges</td></tr>
<tr><td>3421</td><td>Customers</td><td>7111</td><td>Sales of goods</td></tr>
<tr><td>34552</td><td>State – recoverable VAT on expenses</td><td>7124</td><td>Sales of services</td></tr>
<tr><td>4411</td><td>Suppliers</td><td>5141</td><td>Banks</td></tr>
<tr><td>4455</td><td>State – VAT charged</td><td>5161</td><td>Cash</td></tr></table>
<h3>5. The journal</h3>
<p>The <b>journal</b> records transactions in <b>chronological order</b>. Each record is an <b>entry</b>: date, accounts debited then credited, description, amounts.</p>
{{fig:journal}}
<div class="ex"><b>Salma's shop transactions:</b><br>
1) Capital of 80,000 deposited at the bank: <b>5141 Banks (Dr) 80,000 / 1111 Capital (Cr) 80,000</b>.<br>
2) Computer bought for 12,000 by cheque: <b>2355 Computer equipment (Dr) 12,000 / 5141 Banks (Cr) 12,000</b>.<br>
3) Rent of 3,000 paid in cash: <b>6131 Rent (Dr) 3,000 / 5161 Cash (Cr) 3,000</b>.<br>
4) Cash sale of goods 6,000 excl. VAT, paid into the bank (VAT 20%): <b>5141 (Dr) 7,200 / 7111 (Cr) 6,000 / 4455 (Cr) 1,200</b>.</div>
<h3>6. Ledger and trial balance</h3>
<p>The <b>general ledger</b> contains all accounts; each journal line is posted to the right account. The <b>trial balance</b> lists every account with totals and balances, to check that <b>total debit balances = total credit balances</b>.</p>
<div class="warn">A balanced trial balance does not prove there are no errors (e.g. a forgotten entry or a wrong account), but an unbalanced one proves there is one.</div>`,
      },
      key: { fr: ['Débit à gauche, crédit à droite ; solde = D − C.', 'Partie double : Σ débits = Σ crédits.', 'Actif et charges augmentent au débit ; passif et produits au crédit.', 'Journal (chronologique) → grand livre (par compte) → balance (contrôle).'], ar: ['المدين على اليسار، الدائن على اليمين؛ الرصيد = م − د.', 'القيد المزدوج: مجموع المدين = مجموع الدائن.', 'الأصول والتكاليف كيزيدو ف المدين؛ الخصوم والعائدات ف الدائن.', 'اليومية (زمني) ← دفتر الأستاذ (حسب الحساب) ← الميزان (المراقبة).'], en: ['Debit left, credit right; balance = Dr − Cr.', 'Double entry: Σ debits = Σ credits.', 'Assets and expenses increase on the debit side; liabilities and revenues on the credit side.', 'Journal (chronological) → ledger (by account) → trial balance (check).'] } },

    { id: 'cpt3', t: { fr: 'Achats, ventes, TVA et règlements', ar: 'المشتريات، المبيعات، الضريبة على القيمة المضافة والأداءات', en: 'Purchases, sales, VAT and payments' },
      sum: { fr: 'Facture, réductions commerciales et financières, TVA au Maroc, déclaration de TVA', ar: 'الفاتورة، التخفيضات التجارية والمالية، TVA ف المغرب، التصريح', en: 'Invoice, trade and cash discounts, VAT in Morocco, VAT return' },
      body: {
        fr: `<h3>1. La facture</h3>
<p>La <b>facture</b> est le document qui constate une vente. Elle indique le prix brut, les réductions éventuelles, le montant hors taxes (HT), la TVA et le montant toutes taxes comprises (TTC).</p>
<h3>2. Les réductions</h3>
<ul><li><b>Réductions commerciales</b> (déduites directement sur la facture) : le <b>rabais</b> (pour défaut de qualité ou retard), la <b>remise</b> (pour achat en grande quantité), la <b>ristourne</b> (sur le chiffre d'affaires réalisé sur une période).</li>
<li><b>Réduction financière</b> : l'<b>escompte</b>, accordé pour un paiement rapide (comptant). C'est une <b>charge financière</b> pour le vendeur (6386) et un <b>produit financier</b> pour l'acheteur (7386).</li></ul>
<p>Les réductions se calculent en <b>cascade</b> : chaque taux s'applique sur le montant qui reste après la réduction précédente.</p>
{{fig:facture}}
<h3>3. La TVA au Maroc</h3>
<div class="def">La <b>TVA</b> (taxe sur la valeur ajoutée) est un impôt indirect payé par le <b>consommateur final</b>. L'entreprise la <b>collecte</b> sur ses ventes (TVA facturée) et <b>récupère</b> celle payée sur ses achats (TVA récupérable). Elle reverse la différence à l'État.</div>
<table><tr><th>Taux</th><th>Exemples</th></tr><tr><td><b>20 %</b> (taux normal)</td><td>la plupart des biens et services</td></tr><tr><td>14 %</td><td>certains services de transport, beurre…</td></tr><tr><td>10 %</td><td>hôtellerie, restauration, certains produits alimentaires</td></tr><tr><td>7 %</td><td>eau, électricité, produits pharmaceutiques…</td></tr></table>
<span class="f">TVA = HT × taux &nbsp;&nbsp; TTC = HT × (1 + taux) &nbsp;&nbsp; HT = TTC / (1 + taux)</span>
<div class="ex">Un sac vendu 1 440 DH TTC (TVA 20 %) : HT = 1 440 / 1,2 = 1 200 DH ; TVA = 240 DH.</div>
<h3>4. Enregistrer un achat et une vente</h3>
<div class="ex"><b>Achat à crédit</b> : facture de 10 000 DH HT, TVA 20 % :<br>
6111 Achats de marchandises (D) 10 000<br>34552 État – TVA récupérable (D) 2 000<br>&nbsp;&nbsp;&nbsp;&nbsp;4411 Fournisseurs (C) 12 000</div>
<div class="ex"><b>Vente à crédit</b> : 15 000 DH HT, remise 4 %, TVA 20 % → net HT = 14 400 ; TVA = 2 880 ; TTC = 17 280 :<br>
3421 Clients (D) 17 280<br>&nbsp;&nbsp;&nbsp;&nbsp;7111 Ventes de marchandises (C) 14 400<br>&nbsp;&nbsp;&nbsp;&nbsp;4455 État – TVA facturée (C) 2 880</div>
<div class="tip">Les réductions commerciales <b>figurant sur la facture</b> ne s'enregistrent pas séparément : on enregistre directement le <b>net commercial</b>. Seul l'escompte s'enregistre à part (compte 6386 ou 7386).</div>
<h3>5. Les règlements</h3>
<ul><li>Le client paie par virement : <b>5141 Banques (D) / 3421 Clients (C)</b>.</li>
<li>On paie le fournisseur par chèque : <b>4411 Fournisseurs (D) / 5141 Banques (C)</b>.</li>
<li>Paiement en espèces : on utilise <b>5161 Caisse</b>.</li></ul>
<h3>6. La déclaration de TVA</h3>
<span class="f">TVA due = TVA facturée − TVA récupérable</span>
<p>Si le résultat est positif, l'entreprise paie l'État ; s'il est négatif, elle a un <b>crédit de TVA</b> qu'elle reporte sur le mois suivant.</p>
<div class="ex">Au mois d'octobre : TVA facturée = 9 600 DH ; TVA récupérable = 5 400 DH. TVA due = <b>4 200 DH</b>. Écriture : 4455 (D) 9 600 / 34552 (C) 5 400 / 4456 État – TVA due (C) 4 200 ; puis le paiement 4456 (D) / 5141 (C) 4 200.</div>`,
        ar: `<h3>1. الفاتورة</h3>
<p><b>الفاتورة</b> هي الوثيقة اللي كتثبت البيع. فيها الثمن الخام، التخفيضات إلا كانو، المبلغ خارج الرسوم (HT)، الضريبة على القيمة المضافة والمبلغ مع جميع الرسوم (TTC).</p>
<h3>2. التخفيضات</h3>
<ul><li><b>التخفيضات التجارية</b> (كتنقص مباشرة ف الفاتورة): <b>الحط</b> (بسبب عيب ف الجودة أو التأخير)، <b>التخفيض</b> (بسبب الشراء بكمية كبيرة)، <b>الإسقاط</b> (على رقم المعاملات المحقق ف مدة).</li>
<li><b>تخفيض مالي</b>: <b>الخصم</b>، كيتعطى على الأداء السريع (نقدا). هو <b>تكلفة مالية</b> بالنسبة للبائع (6386) و<b>عائد مالي</b> بالنسبة للمشتري (7386).</li></ul>
<p>التخفيضات كتحسب <b>بالتتابع</b>: كل نسبة كتطبق على المبلغ اللي بقا من بعد التخفيض اللي قبلها.</p>
{{fig:facture}}
<h3>3. الضريبة على القيمة المضافة ف المغرب</h3>
<div class="def"><b>TVA</b> هي ضريبة غير مباشرة كيخلصها <b>المستهلك النهائي</b>. المقاولة كت<b>جمعها</b> على المبيعات (TVA المفوترة) وكت<b>سترجع</b> اللي خلصات على المشتريات (TVA القابلة للاسترجاع). وكترد الفرق للدولة.</div>
<table><tr><th>النسبة</th><th>أمثلة</th></tr><tr><td><b>20 %</b> (النسبة العادية)</td><td>أغلب السلع والخدمات</td></tr><tr><td>14 %</td><td>بعض خدمات النقل، الزبدة…</td></tr><tr><td>10 %</td><td>الفنادق، المطاعم، بعض المواد الغذائية</td></tr><tr><td>7 %</td><td>الما، الكهرباء، المنتوجات الصيدلية…</td></tr></table>
<span class="f">TVA = HT × النسبة &nbsp;&nbsp; TTC = HT × (1 + النسبة) &nbsp;&nbsp; HT = TTC / (1 + النسبة)</span>
<div class="ex">صاك تباع بـ 1 440 درهم TTC (TVA 20 %): HT = 1 440 / 1,2 = 1 200 درهم؛ TVA = 240 درهم.</div>
<h3>4. تسجيل الشراء والبيع</h3>
<div class="ex"><b>شراء بالكريدي</b>: فاتورة ديال 10 000 درهم HT، TVA 20 %:<br>
6111 مشتريات البضائع (مدين) 10 000<br>34552 الدولة – TVA القابلة للاسترجاع (مدين) 2 000<br>&nbsp;&nbsp;&nbsp;&nbsp;4411 الموردون (دائن) 12 000</div>
<div class="ex"><b>بيع بالكريدي</b>: 15 000 درهم HT، تخفيض 4 %، TVA 20 % ← الصافي HT = 14 400؛ TVA = 2 880؛ TTC = 17 280:<br>
3421 الزبناء (مدين) 17 280<br>&nbsp;&nbsp;&nbsp;&nbsp;7111 مبيعات البضائع (دائن) 14 400<br>&nbsp;&nbsp;&nbsp;&nbsp;4455 الدولة – TVA المفوترة (دائن) 2 880</div>
<div class="tip">التخفيضات التجارية <b>اللي ف الفاتورة</b> ما كتتسجلش بوحدها: كنسجلو مباشرة <b>الصافي التجاري</b>. غير الخصم اللي كيتسجل بوحدو (الحساب 6386 ولا 7386).</div>
<h3>5. الأداءات</h3>
<ul><li>الزبون خلص بتحويل: <b>5141 الأبناك (مدين) / 3421 الزبناء (دائن)</b>.</li>
<li>خلصنا المورد بشيك: <b>4411 الموردون (مدين) / 5141 الأبناك (دائن)</b>.</li>
<li>الأداء نقدا: كنستعملو <b>5161 الصندوق</b>.</li></ul>
<h3>6. التصريح بالضريبة على القيمة المضافة</h3>
<span class="f">TVA المستحقة = TVA المفوترة − TVA القابلة للاسترجاع</span>
<p>إلا كانت النتيجة موجبة، المقاولة كتخلص الدولة؛ إلا كانت سالبة، عندها <b>رصيد دائن ديال TVA</b> كتنقلو للشهر الجاي.</p>
<div class="ex">ف شهر أكتوبر: TVA المفوترة = 9 600 درهم؛ TVA القابلة للاسترجاع = 5 400 درهم. TVA المستحقة = <b>4 200 درهم</b>. القيد: 4455 (مدين) 9 600 / 34552 (دائن) 5 400 / 4456 الدولة – TVA المستحقة (دائن) 4 200؛ ومن بعد الأداء 4456 (مدين) / 5141 (دائن) 4 200.</div>`,
        en: `<h3>1. The invoice</h3>
<p>The <b>invoice</b> records a sale. It shows the gross price, any discounts, the amount excluding tax (HT), the VAT and the total including tax (TTC).</p>
<h3>2. Discounts</h3>
<ul><li><b>Trade discounts</b> (deducted directly on the invoice): <b>allowance</b> (for poor quality or delay), <b>quantity discount</b> (for large orders), <b>rebate</b> (on turnover over a period).</li>
<li><b>Cash (settlement) discount</b>: granted for prompt payment. It is a <b>financial expense</b> for the seller (6386) and <b>financial income</b> for the buyer (7386).</li></ul>
<p>Discounts are applied in <b>cascade</b>: each rate applies to the amount left after the previous discount.</p>
{{fig:facture}}
<h3>3. VAT in Morocco</h3>
<div class="def"><b>VAT</b> is an indirect tax paid by the <b>final consumer</b>. The company <b>collects</b> it on sales (VAT charged) and <b>recovers</b> the VAT paid on purchases (recoverable VAT), paying the difference to the State.</div>
<table><tr><th>Rate</th><th>Examples</th></tr><tr><td><b>20%</b> (standard)</td><td>most goods and services</td></tr><tr><td>14%</td><td>some transport services, butter…</td></tr><tr><td>10%</td><td>hotels, restaurants, some foods</td></tr><tr><td>7%</td><td>water, electricity, pharmaceuticals…</td></tr></table>
<span class="f">VAT = excl. × rate &nbsp;&nbsp; incl. = excl. × (1 + rate) &nbsp;&nbsp; excl. = incl. / (1 + rate)</span>
<div class="ex">A bag sold for 1,440 MAD incl. VAT (20%): excl. = 1,440 / 1.2 = 1,200 MAD; VAT = 240 MAD.</div>
<h3>4. Recording a purchase and a sale</h3>
<div class="ex"><b>Credit purchase</b>: invoice of 10,000 excl. VAT, VAT 20%:<br>
6111 Purchases of goods (Dr) 10,000<br>34552 State – recoverable VAT (Dr) 2,000<br>&nbsp;&nbsp;&nbsp;&nbsp;4411 Suppliers (Cr) 12,000</div>
<div class="ex"><b>Credit sale</b>: 15,000 excl. VAT, discount 4%, VAT 20% → net excl. = 14,400; VAT = 2,880; total = 17,280:<br>
3421 Customers (Dr) 17,280<br>&nbsp;&nbsp;&nbsp;&nbsp;7111 Sales of goods (Cr) 14,400<br>&nbsp;&nbsp;&nbsp;&nbsp;4455 State – VAT charged (Cr) 2,880</div>
<div class="tip">Trade discounts <b>shown on the invoice</b> are not recorded separately: only the <b>net amount</b> is recorded. Only the cash discount has its own account (6386 or 7386).</div>
<h3>5. Payments</h3>
<ul><li>Customer pays by transfer: <b>5141 Banks (Dr) / 3421 Customers (Cr)</b>.</li>
<li>We pay a supplier by cheque: <b>4411 Suppliers (Dr) / 5141 Banks (Cr)</b>.</li>
<li>Cash payments use <b>5161 Cash</b>.</li></ul>
<h3>6. The VAT return</h3>
<span class="f">VAT payable = VAT charged − Recoverable VAT</span>
<p>If positive, the company pays the State; if negative, it has a <b>VAT credit</b> carried forward to the next month.</p>
<div class="ex">In October: VAT charged = 9,600; recoverable VAT = 5,400. VAT payable = <b>4,200 MAD</b>. Entry: 4455 (Dr) 9,600 / 34552 (Cr) 5,400 / 4456 State – VAT payable (Cr) 4,200; then payment 4456 (Dr) / 5141 (Cr) 4,200.</div>`,
      },
      key: { fr: ['Rabais, remise, ristourne = réductions commerciales ; escompte = réduction financière.', 'TVA normale au Maroc : 20 % (aussi 14, 10, 7 %).', 'TTC = HT × (1 + t) ; HT = TTC / (1 + t).', 'TVA due = TVA facturée − TVA récupérable.'], ar: ['الحط، التخفيض، الإسقاط = تخفيضات تجارية؛ الخصم = تخفيض مالي.', 'النسبة العادية ف المغرب: 20 % (وحتى 14، 10، 7 %).', 'TTC = HT × (1 + t)؛ HT = TTC / (1 + t).', 'TVA المستحقة = المفوترة − القابلة للاسترجاع.'], en: ['Allowance, quantity discount, rebate = trade discounts; cash discount = financial.', 'Standard VAT in Morocco: 20% (also 14, 10, 7%).', 'Incl. = excl. × (1 + t); excl. = incl. / (1 + t).', 'VAT payable = VAT charged − recoverable VAT.'] } },

    { id: 'cpt4', t: { fr: "Les travaux de fin d'exercice", ar: 'أشغال نهاية الدورة', en: 'Year-end work' },
      sum: { fr: 'Amortissements linéaire et dégressif, provisions, régularisations, résultat', ar: 'الاهتلاك الخطي والتنازلي، المؤونات، التسويات، النتيجة', en: 'Straight-line and declining depreciation, provisions, accruals, result' },
      body: {
        fr: `<h3>1. Pourquoi des travaux d'inventaire ?</h3>
<p>Au 31 décembre, avant d'établir le bilan et le CPC, il faut <b>ajuster</b> les comptes pour qu'ils donnent une image fidèle : constater l'usure des immobilisations, les pertes probables et rattacher chaque charge et chaque produit au bon exercice. Ce sont les <b>travaux de fin d'exercice</b> (ou d'inventaire).</p>
<h3>2. Les amortissements</h3>
<div class="def">L'<b>amortissement</b> est la constatation comptable de la <b>dépréciation irréversible</b> d'une immobilisation due à l'usage, au temps ou à l'obsolescence (ordinateur, voiture, machine). Les terrains ne s'amortissent pas.</div>
<h4>a) L'amortissement linéaire (constant)</h4>
<span class="f">Taux = 100 % / durée &nbsp;&nbsp; Annuité = Valeur d'origine × taux</span>
{{fig:amort}}
<p>La première année, on calcule l'annuité <b>au prorata temporis</b> (en mois) si le bien a été acquis en cours d'année.</p>
<div class="ex">Un ordinateur acheté 12 000 DH HT le 1er octobre N, amortissable sur 5 ans (20 %).<br>Annuité complète = 12 000 × 20 % = 2 400 DH.<br>Dotation N (3 mois) = 2 400 × 3/12 = <b>600 DH</b>.<br>VNC au 31/12/N = 12 000 − 600 = <b>11 400 DH</b>.<br>Écriture : <b>6193 Dotations d'exploitation aux amortissements des immobilisations corporelles (D) 600 / 2835 Amortissements du mobilier, matériel de bureau et aménagements divers (C) 600</b>.</div>
<h4>b) L'amortissement dégressif</h4>
<p>Il donne des annuités plus fortes au début. Au Maroc, le taux dégressif = taux linéaire × <b>coefficient</b> : <b>1,5</b> (durée de 3 ou 4 ans), <b>2</b> (5 ou 6 ans), <b>3</b> (plus de 6 ans). L'annuité se calcule sur la <b>VNC</b> du début d'année ; on passe au linéaire quand l'annuité linéaire sur la durée restante devient supérieure.</p>
<div class="ex">Machine 100 000 DH, 5 ans : taux linéaire 20 % × 2 = 40 %. Année 1 : 40 000 (VNC 60 000) ; année 2 : 24 000 (VNC 36 000) ; année 3 : 14 400 ou linéaire 36 000/3 = 12 000 → on garde 14 400 (VNC 21 600) ; année 4 : 40 % donne 8 640 &lt; 21 600/2 = 10 800 → on passe en linéaire : 10 800 ; année 5 : 10 800.</div>
<h4>Vocabulaire</h4><ul><li><b>Valeur d'origine (VO)</b> : coût d'acquisition HT.</li><li><b>Cumul des amortissements</b> : somme des dotations.</li><li><b>VNC</b> (valeur nette comptable) = VO − cumul des amortissements.</li></ul>
<h3>3. Les provisions</h3>
<p>Une <b>provision</b> constate une perte <b>probable</b> (principe de prudence). Exemple : un client a des difficultés et risque de ne pas payer (<b>client douteux</b>).</p>
<div class="ex">Un client doit 24 000 DH TTC (dont 4 000 de TVA) et on estime la perte probable à 50 %. La provision se calcule sur le <b>HT</b> : 20 000 × 50 % = <b>10 000 DH</b>.<br>1) 3424 Clients douteux ou litigieux (D) 24 000 / 3421 Clients (C) 24 000.<br>2) 6196 Dotations d'exploitation aux provisions pour dépréciation de l'actif circulant (D) 10 000 / 3942 Provisions pour dépréciation des clients (C) 10 000.</div>
<h3>4. Les régularisations des charges et produits</h3>
<table><tr><th>Situation</th><th>Compte de régularisation</th><th>Exemple</th></tr>
<tr><td>Charge payée d'avance (concerne N+1)</td><td><b>3491</b> Charges constatées d'avance</td><td>assurance payée pour 12 mois au 1er octobre : 9 mois concernent N+1</td></tr>
<tr><td>Produit encaissé d'avance</td><td><b>4491</b> Produits constatés d'avance</td><td>loyer reçu d'avance pour janvier</td></tr>
<tr><td>Charge de N pas encore facturée</td><td><b>4417</b> Fournisseurs – factures non parvenues</td><td>électricité de décembre facturée en janvier</td></tr>
<tr><td>Produit de N pas encore facturé</td><td><b>3427</b> Clients – factures à établir</td><td>livraison faite en décembre, facture en janvier</td></tr></table>
<div class="ex">Assurance payée 6 000 DH le 1er octobre N pour un an. Part de N+1 = 6 000 × 9/12 = 4 500 DH → <b>3491 Charges constatées d'avance (D) 4 500 / 6134 Primes d'assurances (C) 4 500</b>.</div>
<h3>5. Le résultat et le CPC</h3>
<p>Le <b>CPC</b> classe les charges et produits en trois niveaux : <b>exploitation</b>, <b>financier</b> et <b>non courant</b>. On obtient successivement le résultat d'exploitation, le résultat financier, le résultat courant, le résultat non courant, puis le <b>résultat net</b> après impôt sur les résultats (IS).</p>
<span class="f">Résultat net = Total des produits − Total des charges (y compris l'IS)</span>`,
        ar: `<h3>1. علاش أشغال الجرد؟</h3>
<p>ف 31 دجنبر، قبل ما نوجدو الميزانية وCPC، خاصنا <b>نسويو</b> الحسابات باش يعطيو صورة صادقة: نسجلو استهلاك الأصول الثابتة، الخسائر المحتملة، ونربطو كل تكلفة وكل عائد بالدورة ديالو. هادو هوما <b>أشغال نهاية الدورة</b> (أشغال الجرد).</p>
<h3>2. الاهتلاكات</h3>
<div class="def"><b>الاهتلاك</b> هو التسجيل المحاسبي لل<b>نقص النهائي</b> ف قيمة أصل ثابت بسبب الاستعمال، الوقت أو التقادم (حاسوب، سيارة، آلة). الأراضي ما كتهتلكش.</div>
<h4>أ) الاهتلاك الخطي (الثابت)</h4>
<span class="f">النسبة = 100 % / المدة &nbsp;&nbsp; القسط = القيمة الأصلية × النسبة</span>
{{fig:amort}}
<p>ف العام الأول، كنحسبو القسط <b>حسب المدة</b> (بالشهور) إلا تشرى الأصل ف وسط العام.</p>
<div class="ex">حاسوب تشرى بـ 12 000 درهم HT ف 1 أكتوبر N، كيهتلك على 5 سنين (20 %).<br>القسط الكامل = 12 000 × 20 % = 2 400 درهم.<br>مخصص N (3 شهور) = 2 400 × 3/12 = <b>600 درهم</b>.<br>القيمة المحاسبية الصافية ف 31/12/N = 12 000 − 600 = <b>11 400 درهم</b>.<br>القيد: <b>6193 مخصصات الاستغلال لاهتلاك الأصول الثابتة المادية (مدين) 600 / 2835 اهتلاكات الأثاث ومعدات المكتب (دائن) 600</b>.</div>
<h4>ب) الاهتلاك التنازلي</h4>
<p>كيعطي أقساط كبار ف البداية. ف المغرب، النسبة التنازلية = النسبة الخطية × <b>معامل</b>: <b>1,5</b> (مدة 3 ولا 4 سنين)، <b>2</b> (5 ولا 6 سنين)، <b>3</b> (أكثر من 6 سنين). القسط كيتحسب على <b>القيمة الصافية</b> ديال بداية العام؛ وكندوزو للخطي ملي القسط الخطي على المدة الباقية كيولي أكبر.</p>
<div class="ex">آلة 100 000 درهم، 5 سنين: 20 % × 2 = 40 %. العام 1: 40 000 (القيمة الصافية 60 000)؛ العام 2: 24 000 (36 000)؛ العام 3: 14 400 ولا الخطي 36 000/3 = 12 000 ← كنحتفظو بـ 14 400 (21 600)؛ العام 4: 40 % كتعطي 8 640 &lt; 21 600/2 = 10 800 ← كندوزو للخطي: 10 800؛ العام 5: 10 800.</div>
<h4>المصطلحات</h4><ul><li><b>القيمة الأصلية (VO)</b>: تكلفة الشراء خارج الرسوم.</li><li><b>مجموع الاهتلاكات</b>: مجموع المخصصات.</li><li><b>القيمة المحاسبية الصافية (VNC)</b> = VO − مجموع الاهتلاكات.</li></ul>
<h3>3. المؤونات</h3>
<p><b>المؤونة</b> كتسجل خسارة <b>محتملة</b> (مبدأ الحيطة). مثال: زبون عندو مشاكل وممكن ما يخلصش (<b>زبون مشكوك فيه</b>).</p>
<div class="ex">زبون عليه 24 000 درهم TTC (منها 4 000 ديال TVA) والخسارة المحتملة 50 %. المؤونة كتحسب على <b>HT</b>: 20 000 × 50 % = <b>10 000 درهم</b>.<br>1) 3424 زبناء مشكوك فيهم (مدين) 24 000 / 3421 الزبناء (دائن) 24 000.<br>2) 6196 مخصصات الاستغلال لمؤونات انخفاض قيمة الأصول المتداولة (مدين) 10 000 / 3942 مؤونات انخفاض قيمة الزبناء (دائن) 10 000.</div>
<h3>4. تسوية التكاليف والعائدات</h3>
<table><tr><th>الوضعية</th><th>حساب التسوية</th><th>مثال</th></tr>
<tr><td>تكلفة مخلصة مسبقا (كتخص N+1)</td><td><b>3491</b> تكاليف مسجلة مسبقا</td><td>تأمين مخلص لـ 12 شهر ف 1 أكتوبر: 9 شهور كيخصو N+1</td></tr>
<tr><td>عائد مستخلص مسبقا</td><td><b>4491</b> عائدات مسجلة مسبقا</td><td>كراء مقبوض مسبقا على يناير</td></tr>
<tr><td>تكلفة ديال N ما جاتش الفاتورة ديالها</td><td><b>4417</b> الموردون – فواتير لم تصل</td><td>الضو ديال دجنبر مفوتر ف يناير</td></tr>
<tr><td>عائد ديال N ما تفوترش</td><td><b>3427</b> الزبناء – فواتير للإعداد</td><td>توصيل ف دجنبر، الفاتورة ف يناير</td></tr></table>
<div class="ex">تأمين مخلص 6 000 درهم ف 1 أكتوبر N لعام. الجزء ديال N+1 = 6 000 × 9/12 = 4 500 درهم ← <b>3491 تكاليف مسجلة مسبقا (مدين) 4 500 / 6134 أقساط التأمين (دائن) 4 500</b>.</div>
<h3>5. النتيجة و CPC</h3>
<p><b>CPC</b> كيرتب التكاليف والعائدات ف ثلاث مستويات: <b>الاستغلال</b>، <b>المالي</b> و<b>غير الجاري</b>. كنلقاو بالتتابع نتيجة الاستغلال، النتيجة المالية، النتيجة الجارية، النتيجة غير الجارية، ومن بعد <b>النتيجة الصافية</b> بعد الضريبة على الشركات (IS).</p>
<span class="f">النتيجة الصافية = مجموع العائدات − مجموع التكاليف (مع IS)</span>`,
        en: `<h3>1. Why year-end adjustments?</h3>
<p>On 31 December, before preparing the balance sheet and CPC, accounts must be <b>adjusted</b> to give a true and fair view: record the wear of fixed assets, probable losses, and match each expense and revenue to the right year. These are <b>year-end (inventory) adjustments</b>.</p>
<h3>2. Depreciation</h3>
<div class="def"><b>Depreciation</b> records the <b>irreversible loss of value</b> of a fixed asset due to use, time or obsolescence (computer, car, machine). Land is not depreciated.</div>
<h4>a) Straight-line depreciation</h4>
<span class="f">Rate = 100% / useful life &nbsp;&nbsp; Annual charge = Cost × rate</span>
{{fig:amort}}
<p>In the first year the charge is calculated <b>pro rata temporis</b> (in months) if the asset was bought during the year.</p>
<div class="ex">A computer bought for 12,000 excl. VAT on 1 October N, depreciated over 5 years (20%).<br>Full annual charge = 12,000 × 20% = 2,400.<br>Charge for N (3 months) = 2,400 × 3/12 = <b>600 MAD</b>.<br>Net book value at 31/12/N = 12,000 − 600 = <b>11,400 MAD</b>.<br>Entry: <b>6193 Depreciation expense on tangible assets (Dr) 600 / 2835 Accumulated depreciation – office equipment (Cr) 600</b>.</div>
<h4>b) Declining-balance depreciation</h4>
<p>It gives larger charges at first. In Morocco the declining rate = straight-line rate × <b>coefficient</b>: <b>1.5</b> (3–4 years), <b>2</b> (5–6 years), <b>3</b> (over 6 years). The charge is computed on the opening <b>net book value</b>; switch to straight line when the straight-line charge over the remaining life becomes larger.</p>
<div class="ex">Machine 100,000, 5 years: 20% × 2 = 40%. Year 1: 40,000 (NBV 60,000); year 2: 24,000 (NBV 36,000); year 3: 14,400 vs straight line 36,000/3 = 12,000 → keep 14,400 (NBV 21,600); year 4: 40% gives 8,640 &lt; 21,600/2 = 10,800 → switch: 10,800; year 5: 10,800.</div>
<h4>Vocabulary</h4><ul><li><b>Original cost</b>: purchase cost excl. VAT.</li><li><b>Accumulated depreciation</b>: sum of charges.</li><li><b>Net book value (NBV)</b> = cost − accumulated depreciation.</li></ul>
<h3>3. Provisions</h3>
<p>A <b>provision</b> records a <b>probable</b> loss (prudence). Example: a customer in difficulty may not pay (<b>doubtful debtor</b>).</p>
<div class="ex">A customer owes 24,000 incl. VAT (4,000 of which is VAT) and the probable loss is 50%. The provision is based on the amount <b>excl. VAT</b>: 20,000 × 50% = <b>10,000 MAD</b>.<br>1) 3424 Doubtful customers (Dr) 24,000 / 3421 Customers (Cr) 24,000.<br>2) 6196 Provision expense – current assets (Dr) 10,000 / 3942 Provision for doubtful debts (Cr) 10,000.</div>
<h3>4. Accruals and prepayments</h3>
<table><tr><th>Situation</th><th>Account</th><th>Example</th></tr>
<tr><td>Expense paid in advance (for N+1)</td><td><b>3491</b> Prepaid expenses</td><td>12-month insurance paid on 1 October: 9 months concern N+1</td></tr>
<tr><td>Revenue received in advance</td><td><b>4491</b> Deferred revenue</td><td>January rent received in December</td></tr>
<tr><td>Expense of N not yet invoiced</td><td><b>4417</b> Suppliers – invoices not received</td><td>December electricity billed in January</td></tr>
<tr><td>Revenue of N not yet invoiced</td><td><b>3427</b> Customers – invoices to issue</td><td>delivery in December, invoice in January</td></tr></table>
<div class="ex">Insurance of 6,000 paid on 1 October N for one year. Share of N+1 = 6,000 × 9/12 = 4,500 → <b>3491 Prepaid expenses (Dr) 4,500 / 6134 Insurance premiums (Cr) 4,500</b>.</div>
<h3>5. The result and the CPC</h3>
<p>The <b>CPC</b> classifies expenses and revenues in three levels: <b>operating</b>, <b>financial</b> and <b>non-current</b>. It gives the operating result, financial result, current result, non-current result and finally the <b>net result</b> after corporate tax (IS).</p>
<span class="f">Net result = Total revenues − Total expenses (including corporate tax)</span>`,
      },
      key: { fr: ['Annuité linéaire = VO × taux, au prorata temporis la 1re année.', 'VNC = VO − cumul des amortissements.', 'Dégressif au Maroc : coefficients 1,5 / 2 / 3.', 'Provision client = créance HT × % de perte probable.', 'Régularisations : 3491 CCA, 4491 PCA, 4417 FNP, 3427 FAE.'], ar: ['القسط الخطي = VO × النسبة، حسب المدة ف العام الأول.', 'VNC = VO − مجموع الاهتلاكات.', 'التنازلي ف المغرب: المعاملات 1,5 / 2 / 3.', 'مؤونة الزبون = الدين HT × نسبة الخسارة المحتملة.', 'التسويات: 3491، 4491، 4417، 3427.'], en: ['Straight-line charge = cost × rate, pro rata in year 1.', 'NBV = cost − accumulated depreciation.', 'Declining balance in Morocco: coefficients 1.5 / 2 / 3.', 'Customer provision = debt excl. VAT × % probable loss.', 'Adjustments: 3491, 4491, 4417, 3427.'] } },
  ],
  gloss: [
    ['Bilan', 'الميزانية', 'Balance sheet', { fr: 'Photographie du patrimoine : actif = passif.', ar: 'صورة على الذمة المالية: الأصول = الخصوم.', en: 'Snapshot of the financial position: assets = liabilities.' }],
    ['Actif', 'الأصول', 'Assets', { fr: 'Ce que l’entreprise possède (emplois).', ar: 'آش كتملك المقاولة (الاستعمالات).', en: 'What the company owns (uses of funds).' }],
    ['Passif', 'الخصوم', 'Liabilities', { fr: 'Origine des ressources : capitaux propres et dettes.', ar: 'مصدر الموارد: رؤوس الأموال الذاتية والديون.', en: 'Sources of funds: equity and debts.' }],
    ['CPC', 'حساب العائدات والتكاليف', 'Income statement (CPC)', { fr: 'État qui présente charges et produits et calcule le résultat.', ar: 'قائمة كتعرض التكاليف والعائدات وكتحسب النتيجة.', en: 'Statement of expenses and revenues giving the result.' }],
    ['Débit', 'المدين', 'Debit', { fr: 'Côté gauche d’un compte.', ar: 'الجهة اليسرى ديال الحساب.', en: 'Left side of an account.' }],
    ['Crédit', 'الدائن', 'Credit', { fr: 'Côté droit d’un compte.', ar: 'الجهة اليمنى ديال الحساب.', en: 'Right side of an account.' }],
    ['Partie double', 'القيد المزدوج', 'Double entry', { fr: 'Chaque opération débite et crédite au moins deux comptes du même montant.', ar: 'كل عملية كتجعل جوج حسابات على الأقل مدين ودائن بنفس المبلغ.', en: 'Each transaction debits and credits at least two accounts equally.' }],
    ['Journal', 'اليومية', 'Journal', { fr: 'Registre chronologique des écritures.', ar: 'سجل زمني ديال القيود.', en: 'Chronological record of entries.' }],
    ['Grand livre', 'دفتر الأستاذ', 'General ledger', { fr: 'Ensemble de tous les comptes.', ar: 'مجموع جميع الحسابات.', en: 'Set of all accounts.' }],
    ['Balance', 'ميزان المراجعة', 'Trial balance', { fr: 'Tableau des soldes de tous les comptes, pour contrôle.', ar: 'جدول أرصدة جميع الحسابات للمراقبة.', en: 'List of all account balances, for checking.' }],
    ['TVA', 'الضريبة على القيمة المضافة', 'VAT', { fr: 'Impôt indirect payé par le consommateur final ; taux normal 20 %.', ar: 'ضريبة غير مباشرة كيخلصها المستهلك النهائي؛ النسبة العادية 20 %.', en: 'Indirect tax paid by the final consumer; standard rate 20%.' }],
    ['Remise', 'التخفيض', 'Quantity discount', { fr: 'Réduction commerciale pour achat important.', ar: 'تخفيض تجاري على الشراء بكمية كبيرة.', en: 'Trade discount for a large purchase.' }],
    ['Escompte', 'الخصم', 'Cash discount', { fr: 'Réduction financière pour paiement rapide.', ar: 'تخفيض مالي على الأداء السريع.', en: 'Financial discount for prompt payment.' }],
    ['Amortissement', 'الاهتلاك', 'Depreciation', { fr: 'Constatation de la perte de valeur d’une immobilisation.', ar: 'تسجيل نقص قيمة أصل ثابت.', en: 'Recording the loss in value of a fixed asset.' }],
    ['VNC', 'القيمة المحاسبية الصافية', 'Net book value', { fr: 'Valeur d’origine − cumul des amortissements.', ar: 'القيمة الأصلية − مجموع الاهتلاكات.', en: 'Original cost − accumulated depreciation.' }],
    ['Provision', 'المؤونة', 'Provision', { fr: 'Constatation d’une perte probable (prudence).', ar: 'تسجيل خسارة محتملة (الحيطة).', en: 'Recording a probable loss (prudence).' }],
    ['Charges constatées d’avance', 'تكاليف مسجلة مسبقا', 'Prepaid expenses', { fr: 'Charges payées en N qui concernent N+1 (compte 3491).', ar: 'تكاليف مخلصة ف N كتخص N+1 (الحساب 3491).', en: 'Expenses paid in N relating to N+1 (account 3491).' }],
    ['Prorata temporis', 'حسب المدة', 'Pro rata temporis', { fr: 'Calcul proportionnel au temps (en mois).', ar: 'حساب متناسب مع الوقت (بالشهور).', en: 'Calculation proportional to time (in months).' }],
  ],
};
