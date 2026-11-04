// تعميق الدروس: Comptabilité + Maths
const Q = (q, a) => `<details class="qa"><summary>${q}</summary><p>${a}</p></details>`;
export default {
  cpt1: {
    fr: `<h3>📝 Exercice corrigé : construire un bilan</h3>
<div class="ex"><b>Énoncé.</b> Salma crée « Salma Shop » (vente en ligne de cosmétiques). Au 31/12 : matériel informatique 18 000 ; mobilier 7 000 ; stock de marchandises 12 500 ; clients 4 300 ; banque 9 200 ; caisse 800 ; emprunt bancaire 15 000 ; fournisseurs 6 800 ; capital = ?<br>1) Classe chaque élément. 2) Calcule le capital. 3) Présente le bilan.</div>
<ol><li><b>Actif immobilisé</b> : matériel informatique 18 000, mobilier 7 000 → 25 000. <b>Actif circulant</b> : stock 12 500, clients 4 300 → 16 800. <b>Trésorerie-actif</b> : banque 9 200, caisse 800 → 10 000. <b>Total actif = 51 800</b>.</li>
<li>Dettes = emprunt 15 000 + fournisseurs 6 800 = 21 800. Capital = 51 800 − 21 800 = <b>30 000 DH</b>.</li>
<li>Passif : Financement permanent (capital 30 000 + emprunt 15 000 = 45 000) ; Passif circulant (fournisseurs 6 800). <b>Total passif = 51 800</b> = total actif ✔.</li></ol>
{{fig:bilan}}
<h3>⚠️ Erreurs fréquentes</h3>
<ul><li>Mettre l'emprunt à l'actif parce que « l'argent est sur le compte » : l'argent est à l'actif (banque), la dette est au passif.</li><li>Oublier que le bilan est une <b>photo à une date</b> et le CPC un <b>film de l'année</b>.</li><li>Classer un ordinateur acheté pour être revendu en immobilisation : c'est une marchandise (stock).</li><li>Un bilan non équilibré : vérifier les additions avant d'aller plus loin.</li></ul>
<h3>❓ Questions de cours</h3>
${Q("Quel est le rôle de la comptabilité générale ?", "Enregistrer toutes les opérations de l'entreprise selon des règles communes (CGNC), afin de connaître son patrimoine (bilan), son résultat (CPC), et informer les associés, les banques et l'administration fiscale.")}
${Q("Que signifie le principe de prudence ?", "On enregistre les pertes probables (provisions) mais pas les gains seulement probables : on évite de présenter une situation plus favorable que la réalité.")}
${Q("Quelles sont les 9 classes du CGNC ?", "1 Financement permanent, 2 Actif immobilisé, 3 Actif circulant, 4 Passif circulant, 5 Trésorerie, 6 Charges, 7 Produits, 8 Résultats, 9 Comptabilité analytique.")}`,
    ar: `<h3>📝 تمرين محلول: بناء الميزانية</h3>
<div class="ex"><b>النص.</b> سلمى فتحات «Salma Shop» (بيع مواد التجميل عبر الأنترنت). ف 31/12: معدات معلوماتية 18 000؛ أثاث 7 000؛ مخزون البضائع 12 500؛ الزبناء 4 300؛ البنك 9 200؛ الصندوق 800؛ قرض بنكي 15 000؛ الموردين 6 800؛ الرأسمال = ؟<br>1) صنفي كل عنصر. 2) احسبي الرأسمال. 3) قدمي الميزانية.</div>
<ol><li><b>الأصول الثابتة</b>: معدات معلوماتية 18 000، أثاث 7 000 ← 25 000. <b>الأصول المتداولة</b>: المخزون 12 500، الزبناء 4 300 ← 16 800. <b>خزينة الأصول</b>: البنك 9 200، الصندوق 800 ← 10 000. <b>مجموع الأصول = 51 800</b>.</li>
<li>الديون = القرض 15 000 + الموردين 6 800 = 21 800. الرأسمال = 51 800 − 21 800 = <b>30 000 درهم</b>.</li>
<li>الخصوم: التمويل الدائم (الرأسمال 30 000 + القرض 15 000 = 45 000)؛ الخصوم المتداولة (الموردين 6 800). <b>مجموع الخصوم = 51 800</b> = مجموع الأصول ✔.</li></ol>
{{fig:bilan}}
<h3>⚠️ أخطاء شائعة</h3>
<ul><li>تحطي القرض ف الأصول حيت «الفلوس ف الحساب»: الفلوس ف الأصول (البنك)، والدين ف الخصوم.</li><li>النسيان بلي الميزانية <b>صورة ف تاريخ</b> وحساب العائدات والتكاليف <b>فيلم ديال العام</b>.</li><li>تصنيف حاسوب مشري باش يتباع كأصل ثابت: هو بضاعة (مخزون).</li><li>ميزانية ما متوازناش: راجعي الجمع قبل ما تكملي.</li></ul>
<h3>❓ أسئلة الدرس</h3>
${Q("شنو هو دور المحاسبة العامة؟", "تسجيل جميع عمليات المقاولة حسب قواعد مشتركة (CGNC)، باش نعرفو الذمة المالية ديالها (الميزانية)، النتيجة (CPC)، ونعلمو الشركاء والأبناك وإدارة الضرائب.")}
${Q("شنو كيعني مبدأ الحيطة؟", "كنسجلو الخسائر المحتملة (المخصصات) ولكن ماشي الأرباح غير المحتملة: باش ما نقدموش وضعية أحسن من الواقع.")}
${Q("شنو هوما الأصناف 9 ديال CGNC؟", "1 التمويل الدائم، 2 الأصول الثابتة، 3 الأصول المتداولة، 4 الخصوم المتداولة، 5 الخزينة، 6 التكاليف، 7 العائدات، 8 النتائج، 9 المحاسبة التحليلية.")}`,
    en: `<h3>📝 Worked exercise: building a balance sheet</h3>
<div class="ex"><b>Task.</b> Salma starts “Salma Shop” (online cosmetics). At 31/12: IT equipment 18,000; furniture 7,000; goods inventory 12,500; customers 4,300; bank 9,200; cash 800; bank loan 15,000; suppliers 6,800; capital = ?<br>1) Classify each item. 2) Compute capital. 3) Present the balance sheet.</div>
<ol><li><b>Fixed assets</b>: IT 18,000 + furniture 7,000 = 25,000. <b>Current assets</b>: stock 12,500 + customers 4,300 = 16,800. <b>Cash</b>: bank 9,200 + cash 800 = 10,000. <b>Total assets = 51,800</b>.</li>
<li>Debts = loan 15,000 + suppliers 6,800 = 21,800. Capital = 51,800 − 21,800 = <b>30,000 MAD</b>.</li>
<li>Liabilities: permanent financing (capital 30,000 + loan 15,000 = 45,000); current liabilities (suppliers 6,800). <b>Total = 51,800</b> = total assets ✔.</li></ol>
{{fig:bilan}}
<h3>⚠️ Common mistakes</h3>
<ul><li>Putting the loan among assets because “the money is in the account”: the money is an asset (bank), the debt is a liability.</li><li>Forgetting that the balance sheet is a <b>snapshot at a date</b> and the income statement a <b>film of the year</b>.</li><li>Classing a computer bought for resale as a fixed asset: it is inventory.</li><li>An unbalanced sheet: check additions before going further.</li></ul>
<h3>❓ Review questions</h3>
${Q("What is financial accounting for?", "Recording all transactions under common rules (CGNC) to know the firm's wealth (balance sheet) and result (income statement), and to inform partners, banks and tax authorities.")}
${Q("What does the prudence principle mean?", "Probable losses are recorded (provisions) but merely probable gains are not, so the situation is never shown better than it is.")}
${Q("What are the 9 CGNC classes?", "1 Permanent financing, 2 Fixed assets, 3 Current assets, 4 Current liabilities, 5 Cash, 6 Expenses, 7 Income, 8 Results, 9 Cost accounting.")}`,
  },
  cpt2: {
    fr: `<h3>📝 Exercice corrigé : la partie double pas à pas</h3>
<div class="ex"><b>Énoncé.</b> Enregistre au journal de « Salma Shop » : 1) apport en banque de 30 000 DH ; 2) achat d'un ordinateur 9 000 DH HT, TVA 20 %, payé par chèque ; 3) achat de marchandises 6 000 DH HT à crédit, TVA 20 % ; 4) vente de marchandises 10 000 DH HT, TVA 20 %, encaissée par virement.</div>
<ol><li>Banque (5141) <b>débit</b> 30 000 / Capital (1111) <b>crédit</b> 30 000 — la banque augmente (emploi), le capital est la ressource.</li>
<li>Matériel informatique (2355) D 9 000 ; État TVA récupérable sur immobilisations (34551) D 1 800 / Banque (5141) C 10 800.</li>
<li>Achats de marchandises (6111) D 6 000 ; État TVA récupérable sur charges (34552) D 1 200 / Fournisseurs (4411) C 7 200.</li>
<li>Banque (5141) D 12 000 / Ventes de marchandises (7111) C 10 000 ; État TVA facturée (4455) C 2 000.</li></ol>
<p><b>Vérification</b> : dans chaque écriture, total débit = total crédit. Solde banque = 30 000 − 10 800 + 12 000 = 31 200 DH (débiteur).</p>
{{fig:journal}}
<h3>⚠️ Erreurs fréquentes</h3>
<ul><li>Inverser débit et crédit pour la banque : un encaissement se met au <b>débit</b> de la banque (du point de vue de l'entreprise).</li><li>Mettre la TVA dans le compte d'achat : la TVA récupérable a son propre compte (3455).</li><li>Oublier la TVA facturée sur les ventes (4455).</li><li>Utiliser le compte « 6111 » pour une immobilisation : un ordinateur utilisé dans l'entreprise va en classe 2.</li></ul>
<h3>❓ Questions de cours</h3>
${Q("Énoncez le principe de la partie double.", "Toute opération touche au moins deux comptes : l'un est débité, l'autre crédité, pour le même montant total. Ce qui est reçu (emploi) est débité, ce qui est donné (ressource) est crédité.")}
${Q("Comment fonctionne un compte de charge ?", "Il augmente au débit. En fin d'exercice, son solde (débiteur) est viré au CPC pour calculer le résultat.")}
${Q("À quoi sert la balance ?", "C'est le tableau de tous les comptes avec leurs totaux débit, crédit et soldes. Elle vérifie que total débit = total crédit et prépare le bilan et le CPC.")}`,
    ar: `<h3>📝 تمرين محلول: القيد المزدوج خطوة بخطوة</h3>
<div class="ex"><b>النص.</b> سجلي ف دفتر اليومية ديال «Salma Shop»: 1) مساهمة ف البنك ديال 30 000 درهم؛ 2) شراء حاسوب 9 000 درهم دون احتساب الضريبة، TVA 20 %، بالشيك؛ 3) شراء بضائع 6 000 درهم HT بالكريدي، TVA 20 %؛ 4) بيع بضائع 10 000 درهم HT، TVA 20 %، توصلات بتحويل.</div>
<ol><li>البنك (5141) <b>مدين</b> 30 000 / الرأسمال (1111) <b>دائن</b> 30 000 — البنك زاد (استعمال)، والرأسمال هو المورد.</li>
<li>المعدات المعلوماتية (2355) م 9 000؛ الدولة TVA قابلة للاسترجاع على الأصول الثابتة (34551) م 1 800 / البنك (5141) د 10 800.</li>
<li>مشتريات البضائع (6111) م 6 000؛ الدولة TVA قابلة للاسترجاع على التكاليف (34552) م 1 200 / الموردين (4411) د 7 200.</li>
<li>البنك (5141) م 12 000 / مبيعات البضائع (7111) د 10 000؛ الدولة TVA المفوترة (4455) د 2 000.</li></ol>
<p><b>التحقق</b>: ف كل قيد، مجموع المدين = مجموع الدائن. رصيد البنك = 30 000 − 10 800 + 12 000 = 31 200 درهم (مدين).</p>
{{fig:journal}}
<h3>⚠️ أخطاء شائعة</h3>
<ul><li>قلب المدين والدائن ف البنك: التحصيل كيتحط ف <b>مدين</b> البنك (من وجهة نظر المقاولة).</li><li>تحطي TVA ف حساب الشراء: TVA القابلة للاسترجاع عندها الحساب ديالها (3455).</li><li>نسيان TVA المفوترة على المبيعات (4455).</li><li>استعمال حساب «6111» لأصل ثابت: الحاسوب اللي كيتستعمل ف المقاولة كيمشي للصنف 2.</li></ul>
<h3>❓ أسئلة الدرس</h3>
${Q("صيغي مبدأ القيد المزدوج.", "كل عملية كتمس على الأقل جوج حسابات: واحد مدين والآخر دائن، بنفس المبلغ الإجمالي. اللي كنتوصلو بيه (استعمال) مدين، واللي كنعطيو (مورد) دائن.")}
${Q("كيفاش كيخدم حساب التكاليف؟", "كيزيد ف المدين. ف آخر الدورة، الرصيد ديالو (مدين) كيتحول لـ CPC باش نحسبو النتيجة.")}
${Q("علاش كتصلح ميزان المراجعة؟", "هو جدول ديال جميع الحسابات مع مجاميع المدين والدائن والأرصدة. كيتحقق بلي مجموع المدين = مجموع الدائن وكيوجد الميزانية و CPC.")}`,
    en: `<h3>📝 Worked exercise: double entry step by step</h3>
<div class="ex"><b>Task.</b> Journalise for “Salma Shop”: 1) capital of 30,000 MAD paid into the bank; 2) computer 9,000 MAD excl. VAT, VAT 20%, paid by cheque; 3) goods 6,000 MAD excl. VAT on credit, VAT 20%; 4) sale of goods 10,000 MAD excl. VAT, VAT 20%, received by transfer.</div>
<ol><li>Bank (5141) <b>Dr</b> 30,000 / Capital (1111) <b>Cr</b> 30,000.</li>
<li>IT equipment (2355) Dr 9,000; VAT recoverable on fixed assets (34551) Dr 1,800 / Bank Cr 10,800.</li>
<li>Purchases of goods (6111) Dr 6,000; VAT recoverable on expenses (34552) Dr 1,200 / Suppliers (4411) Cr 7,200.</li>
<li>Bank Dr 12,000 / Sales of goods (7111) Cr 10,000; VAT charged (4455) Cr 2,000.</li></ol>
<p><b>Check</b>: each entry balances. Bank balance = 30,000 − 10,800 + 12,000 = 31,200 MAD (debit).</p>
{{fig:journal}}
<h3>⚠️ Common mistakes</h3>
<ul><li>Reversing debit/credit for the bank: money received is a <b>debit</b> to the bank (from the firm's viewpoint).</li><li>Putting VAT into the purchase account: recoverable VAT has its own account (3455).</li><li>Forgetting output VAT on sales (4455).</li><li>Using 6111 for a fixed asset: a computer used in the business goes to class 2.</li></ul>
<h3>❓ Review questions</h3>
${Q("State the double-entry principle.", "Every transaction affects at least two accounts, one debited and one credited, for the same total. What is received (use) is debited; what is given (source) is credited.")}
${Q("How does an expense account work?", "It increases on the debit side; at year end its debit balance is transferred to the income statement.")}
${Q("What is the trial balance for?", "A table of all accounts with debit/credit totals and balances; it checks that total debits = total credits and prepares the financial statements.")}`,
  },
  cpt3: {
    fr: `<h3>📝 Exercice corrigé : facture complète et TVA due</h3>
<div class="ex"><b>Énoncé.</b> Le grossiste « Atlas Cosmétiques » vend à Salma Shop des marchandises au prix brut de 20 000 DH. Remise 10 %, rabais 5 %, escompte 2 % pour paiement comptant ; port facturé 300 DH HT ; TVA 20 %. Ensuite, Salma a, ce mois-là, une TVA facturée sur ses ventes de 7 400 DH.<br>1) Établis la facture. 2) Calcule la TVA due de Salma.</div>
<ol><li>Brut 20 000 → remise 10 % : −2 000 → 18 000 → rabais 5 % : −900 → <b>net commercial 17 100</b> → escompte 2 % : −342 → <b>net financier 16 758</b> → port +300 → <b>total HT 17 058</b> → TVA 20 % = <b>3 411,60</b> → <b>TTC = 20 469,60 DH</b>.</li>
<li>TVA due = TVA facturée − TVA récupérable = 7 400 − 3 411,60 = <b>3 988,40 DH</b> à verser à la DGI.</li></ol>
{{fig:facture}}
<p><b>Comptabilisation chez Salma</b> : Achats 6111 D 16 758 ; Transports 6142 D 300 ; TVA récupérable 34552 D 3 411,60 / Banque C 20 469,60 (paiement comptant).</p>
<h3>⚠️ Erreurs fréquentes</h3>
<ul><li>Calculer toutes les réductions sur le prix brut : chaque réduction s'applique au <b>montant précédent</b> (en cascade).</li><li>Appliquer l'escompte avant la remise : l'ordre est commercial (remise, rabais, ristourne) puis financier (escompte).</li><li>Oublier la TVA sur le port facturé.</li><li>Dans l'écriture, enregistrer les réductions commerciales : elles ne sont pas comptabilisées si elles figurent sur la facture initiale (on enregistre le net).</li></ul>
<h3>❓ Questions de cours</h3>
${Q("Différence entre remise, rabais et ristourne ?", "Remise : réduction habituelle liée à la quantité ou à la qualité du client. Rabais : réduction exceptionnelle pour un défaut ou un retard. Ristourne : réduction calculée sur l'ensemble des achats d'une période.")}
${Q("Quels sont les taux de TVA au Maroc ?", "Taux normal 20 % et taux réduits 14 %, 10 % et 7 % selon les produits et services.")}
${Q("Qu'est-ce qu'une facture d'avoir ?", "Un document du vendeur qui diminue une facture déjà envoyée (retour de marchandises, rabais accordé après coup). Elle annule partiellement la vente et la TVA correspondante.")}`,
    ar: `<h3>📝 تمرين محلول: فاتورة كاملة و TVA المستحقة</h3>
<div class="ex"><b>النص.</b> بائع الجملة «Atlas Cosmétiques» باع لـ Salma Shop بضائع بالثمن الخام 20 000 درهم. تخفيض 10 %، تنزيل 5 %، خصم 2 % على الأداء نقدا؛ النقل مفوتر 300 درهم HT؛ TVA 20 %. من بعد، سلمى عندها ف هاد الشهر TVA مفوترة على المبيعات ديال 7 400 درهم.<br>1) صاوبي الفاتورة. 2) احسبي TVA المستحقة على سلمى.</div>
<ol><li>الخام 20 000 ← تخفيض 10 %: −2 000 ← 18 000 ← تنزيل 5 %: −900 ← <b>الصافي التجاري 17 100</b> ← خصم 2 %: −342 ← <b>الصافي المالي 16 758</b> ← النقل +300 ← <b>المجموع HT 17 058</b> ← TVA 20 % = <b>3 411,60</b> ← <b>TTC = 20 469,60 درهم</b>.</li>
<li>TVA المستحقة = TVA المفوترة − TVA القابلة للاسترجاع = 7 400 − 3 411,60 = <b>3 988,40 درهم</b> كتخلص للمديرية العامة للضرائب.</li></ol>
{{fig:facture}}
<p><b>التسجيل عند سلمى</b>: المشتريات 6111 م 16 758؛ النقل 6142 م 300؛ TVA قابلة للاسترجاع 34552 م 3 411,60 / البنك د 20 469,60 (أداء نقدي).</p>
<h3>⚠️ أخطاء شائعة</h3>
<ul><li>حساب جميع التخفيضات على الثمن الخام: كل تخفيض كيتطبق على <b>المبلغ اللي قبلو</b> (بالتسلسل).</li><li>تطبيق الخصم قبل التخفيض: الترتيب هو التجاري (تخفيض، تنزيل، إرجاع) من بعد المالي (الخصم).</li><li>نسيان TVA على النقل المفوتر.</li><li>تسجيل التخفيضات التجارية ف القيد: ما كتتسجلش إلا كانت ف الفاتورة الأصلية (كنسجلو الصافي).</li></ul>
<h3>❓ أسئلة الدرس</h3>
${Q("شنو الفرق بين التخفيض والتنزيل والإرجاع (ristourne)؟", "التخفيض: تخفيض عادي مرتبط بالكمية أو بنوعية الزبون. التنزيل: تخفيض استثنائي بسبب عيب أو تأخير. الإرجاع: تخفيض كيتحسب على مجموع المشتريات ديال فترة.")}
${Q("شنو هوما أسعار TVA ف المغرب؟", "السعر العادي 20 % والأسعار المخفضة 14 %، 10 % و 7 % حسب المنتوجات والخدمات.")}
${Q("شنو هي فاتورة الإشعار الدائن (avoir)؟", "وثيقة من البائع كتنقص فاتورة مصيفطة من قبل (رجوع البضائع، تنزيل من بعد). كتلغي جزء من البيع ومن TVA ديالو.")}`,
    en: `<h3>📝 Worked exercise: full invoice and VAT payable</h3>
<div class="ex"><b>Task.</b> Wholesaler “Atlas Cosmétiques” sells Salma Shop goods at a gross price of 20,000 MAD. Trade discount 10%, allowance 5%, cash discount 2%; carriage invoiced 300 MAD excl. VAT; VAT 20%. That month Salma's output VAT on sales is 7,400 MAD.<br>1) Draw up the invoice. 2) Compute Salma's VAT payable.</div>
<ol><li>Gross 20,000 → −10%: 18,000 → −5%: <b>net trade 17,100</b> → −2%: <b>net 16,758</b> → carriage +300 → <b>excl. VAT 17,058</b> → VAT 20% = <b>3,411.60</b> → <b>incl. VAT 20,469.60 MAD</b>.</li>
<li>VAT payable = output VAT − input VAT = 7,400 − 3,411.60 = <b>3,988.40 MAD</b> to the tax office.</li></ol>
{{fig:facture}}
<p><b>Entry at Salma's</b>: Purchases 6111 Dr 16,758; Transport 6142 Dr 300; Input VAT 34552 Dr 3,411.60 / Bank Cr 20,469.60.</p>
<h3>⚠️ Common mistakes</h3>
<ul><li>Computing every discount on the gross price: each applies to the <b>previous amount</b> (cascade).</li><li>Applying the cash discount before trade discounts: commercial reductions first, then financial.</li><li>Forgetting VAT on invoiced carriage.</li><li>Recording trade discounts in the entry: when they appear on the original invoice, only the net is recorded.</li></ul>
<h3>❓ Review questions</h3>
${Q("Trade discount, allowance and rebate?", "Trade discount: usual reduction for quantity or customer status. Allowance: exceptional reduction for a defect or delay. Rebate: reduction on total purchases over a period.")}
${Q("What are Morocco's VAT rates?", "Standard 20% and reduced 14%, 10% and 7% depending on goods and services.")}
${Q("What is a credit note?", "A seller's document reducing an invoice already sent (returns, later allowance); it partly cancels the sale and its VAT.")}`,
  },
  cpt4: {
    fr: `<h3>📝 Exercice corrigé : tableau d'amortissement linéaire et dégressif</h3>
<div class="ex"><b>Énoncé.</b> Salma Shop achète le 1<sup>er</sup> avril N une machine d'emballage à 60 000 DH HT, durée 5 ans.<br>1) Dresse les trois premières lignes du plan linéaire (prorata temporis). 2) Calcule le taux dégressif et la 1<sup>re</sup> annuité dégressive. 3) Passe l'écriture de dotation de N (linéaire).</div>
<ol><li>Taux linéaire = 100/5 = 20 %. Annuité pleine = 12 000.<br>N (9 mois) : 12 000 × 9/12 = <b>9 000</b> ; cumul 9 000 ; VNA 51 000.<br>N+1 : 12 000 ; cumul 21 000 ; VNA 39 000.<br>N+2 : 12 000 ; cumul 33 000 ; VNA 27 000. (La dernière année N+5 aura 3 000 pour arriver à 0.)</li>
<li>Durée 5 ans → coefficient <b>2</b> → taux dégressif = 20 % × 2 = <b>40 %</b>. Dégressif : le prorata commence au mois d'acquisition → 60 000 × 40 % × 9/12 = <b>18 000</b>.</li>
<li>Dotations d'exploitation aux amortissements (6193) D 9 000 / Amortissements du matériel (28332) C 9 000.</li></ol>
{{fig:amort}}
<h3>⚠️ Erreurs fréquentes</h3>
<ul><li>Oublier le prorata la première année.</li><li>Garder le taux dégressif jusqu'à la fin : on passe au linéaire quand l'annuité linéaire sur la durée restante devient plus forte.</li><li>Mettre l'amortissement au passif : il se déduit de l'actif (valeur nette).</li><li>Amortir un terrain : les terrains ne s'amortissent pas en général.</li></ul>
<h3>❓ Questions de cours</h3>
${Q("Pourquoi amortit-on une immobilisation ?", "Pour constater sa perte de valeur due à l'usure, au temps ou à l'obsolescence, et répartir son coût sur les années où elle est utilisée.")}
${Q("Quels coefficients dégressifs utilise-t-on au Maroc ?", "1,5 pour une durée de 3 ou 4 ans, 2 pour 5 ou 6 ans, 3 pour plus de 6 ans.")}
${Q("Qu'est-ce qu'une provision ?", "Une charge enregistrée pour une perte probable non encore réalisée : client douteux, dépréciation d'un stock, litige. Elle applique le principe de prudence.")}`,
    ar: `<h3>📝 تمرين محلول: جدول الإهتلاك الثابت والمتناقص</h3>
<div class="ex"><b>النص.</b> Salma Shop شرات ف 1 أبريل N آلة التعليب بـ 60 000 درهم HT، المدة 5 سنين.<br>1) صاوبي ثلاث سطور الأولى من المخطط الثابت (حسب المدة). 2) احسبي المعدل المتناقص والقسط المتناقص الأول. 3) سجلي قيد المخصص ديال N (ثابت).</div>
<ol><li>المعدل الثابت = 100/5 = 20 %. القسط الكامل = 12 000.<br>N (9 شهور): 12 000 × 9/12 = <b>9 000</b>؛ المجموع 9 000؛ القيمة الصافية 51 000.<br>N+1: 12 000؛ المجموع 21 000؛ القيمة الصافية 39 000.<br>N+2: 12 000؛ المجموع 33 000؛ القيمة الصافية 27 000. (العام الأخير N+5 غادي يكون فيه 3 000 باش نوصلو لـ 0.)</li>
<li>المدة 5 سنين ← المعامل <b>2</b> ← المعدل المتناقص = 20 % × 2 = <b>40 %</b>. المتناقص: الحساب كيبدا من شهر الاقتناء ← 60 000 × 40 % × 9/12 = <b>18 000</b>.</li>
<li>مخصصات الاستغلال للإهتلاكات (6193) م 9 000 / إهتلاكات المعدات (28332) د 9 000.</li></ol>
{{fig:amort}}
<h3>⚠️ أخطاء شائعة</h3>
<ul><li>نسيان الحساب حسب المدة ف العام الأول.</li><li>البقاء بالمعدل المتناقص حتى للآخر: كندوزو للثابت ملي القسط الثابت على المدة الباقية كيولي أكبر.</li><li>تحطي الإهتلاك ف الخصوم: كيتنقص من الأصول (القيمة الصافية).</li><li>إهتلاك أرض: الأراضي عادة ما كتهتلكش.</li></ul>
<h3>❓ أسئلة الدرس</h3>
${Q("علاش كنهتلكو الأصل الثابت؟", "باش نسجلو نقصان القيمة ديالو بسبب الاستعمال، الزمن ولا التقادم، ونوزعو التكلفة ديالو على السنين اللي كيتستعمل فيهم.")}
${Q("شنو هوما المعاملات المتناقصة ف المغرب؟", "1,5 لمدة 3 ولا 4 سنين، 2 لـ 5 ولا 6 سنين، 3 لأكثر من 6 سنين.")}
${Q("شنو هو المخصص (provision)؟", "تكلفة كتتسجل لخسارة محتملة ما تحققاتش باقي: زبون مشكوك فيه، نقصان قيمة المخزون، نزاع. كيطبق مبدأ الحيطة.")}`,
    en: `<h3>📝 Worked exercise: straight-line and declining schedules</h3>
<div class="ex"><b>Task.</b> On 1 April N Salma Shop buys a packing machine for 60,000 MAD excl. VAT, life 5 years.<br>1) Write the first three lines of the straight-line plan (pro rata). 2) Compute the declining rate and first declining charge. 3) Record year N's depreciation entry (straight line).</div>
<ol><li>Rate = 20%. Full charge = 12,000.<br>N (9 months): <b>9,000</b>; cumulative 9,000; NBV 51,000.<br>N+1: 12,000; 21,000; 39,000.<br>N+2: 12,000; 33,000; 27,000. (Final year N+5 gets 3,000.)</li>
<li>5 years → coefficient <b>2</b> → declining rate <b>40%</b>; first charge = 60,000 × 40% × 9/12 = <b>18,000</b>.</li>
<li>Depreciation expense (6193) Dr 9,000 / Accumulated depreciation (28332) Cr 9,000.</li></ol>
{{fig:amort}}
<h3>⚠️ Common mistakes</h3>
<ul><li>Forgetting pro rata in year 1.</li><li>Keeping the declining rate to the end: switch to straight line when it gives a higher charge on the remaining life.</li><li>Putting depreciation among liabilities: it is deducted from assets (net value).</li><li>Depreciating land: land generally is not depreciated.</li></ul>
<h3>❓ Review questions</h3>
${Q("Why depreciate a fixed asset?", "To record its loss of value through wear, time or obsolescence and spread its cost over the years of use.")}
${Q("Which declining coefficients apply in Morocco?", "1.5 for 3–4 years, 2 for 5–6 years, 3 for more than 6 years.")}
${Q("What is a provision?", "An expense recorded for a probable, not yet realised loss: doubtful customer, stock write-down, dispute — applying prudence.")}`,
  },
  mat1: {
    fr: `<h3>📝 Exercice corrigé : pourcentages en cascade</h3>
<div class="ex"><b>Énoncé.</b> Un sac coûte 400 DH. En janvier, son prix augmente de 15 % ; pendant les soldes, il baisse de 20 %.<br>1) Prix final ? 2) Taux d'évolution global ? 3) Quel taux de hausse ramènerait le prix à 400 DH ? 4) Le sac représente 35 % des ventes d'une boutique qui vend pour 12 000 DH : quel montant ?</div>
<ol><li>CM global = 1,15 × 0,80 = 0,92 → prix final = 400 × 0,92 = <b>368 DH</b>.</li>
<li>Taux global = 0,92 − 1 = <b>−8 %</b> (et non −5 % !).</li>
<li>Taux réciproque : 1/0,92 − 1 ≈ <b>+8,70 %</b>.</li>
<li>35 % × 12 000 = <b>4 200 DH</b>.</li></ol>
<p><b>Astuce</b> : « augmenter de t % » = multiplier par (1 + t/100) ; « diminuer de t % » = multiplier par (1 − t/100). Les coefficients se <b>multiplient</b>, les pourcentages ne s'additionnent pas.</p>
<h3>⚠️ Erreurs fréquentes</h3>
<ul><li>Additionner les taux : +15 % puis −20 % ne fait pas −5 %.</li><li>Croire qu'une baisse de 20 % est compensée par une hausse de 20 %.</li><li>Confondre points de pourcentage et pourcentage : passer de 10 % à 12 % = +2 points mais +20 %.</li><li>Prendre la valeur d'arrivée comme référence dans un taux d'évolution.</li></ul>
<h3>❓ Questions de cours</h3>
${Q("Comment calculer un taux d'évolution ?", "t = (V_arrivée − V_départ) / V_départ × 100.")}
${Q("Qu'est-ce qu'un indice base 100 ?", "I = V / V_référence × 100. Un indice de 125 signifie une hausse de 25 % par rapport à l'année de base.")}
${Q("Comment trouver le prix HT à partir du TTC ?", "HT = TTC / (1 + taux de TVA). Exemple : 600 TTC avec TVA 20 % → 600 / 1,2 = 500 HT.")}`,
    ar: `<h3>📝 تمرين محلول: النسب المئوية المتتالية</h3>
<div class="ex"><b>النص.</b> صاك ثمنو 400 درهم. ف يناير، الثمن طلع بـ 15 %؛ وف الصولد نقص بـ 20 %.<br>1) الثمن النهائي؟ 2) معدل التطور الإجمالي؟ 3) أشمن معدل زيادة غادي يرجع الثمن لـ 400 درهم؟ 4) الصاك كيمثل 35 % من مبيعات محل كيبيع بـ 12 000 درهم: شحال المبلغ؟</div>
<ol><li>المعامل الإجمالي = 1,15 × 0,80 = 0,92 ← الثمن النهائي = 400 × 0,92 = <b>368 درهم</b>.</li>
<li>المعدل الإجمالي = 0,92 − 1 = <b>−8 %</b> (ماشي −5 %!).</li>
<li>المعدل العكسي: 1/0,92 − 1 ≈ <b>+8,70 %</b>.</li>
<li>35 % × 12 000 = <b>4 200 درهم</b>.</li></ol>
<p><b>حيلة</b>: «الزيادة بـ t %» = الضرب ف (1 + t/100)؛ «النقصان بـ t %» = الضرب ف (1 − t/100). المعاملات <b>كتضرب</b>، والنسب ما كتجمعش.</p>
<h3>⚠️ أخطاء شائعة</h3>
<ul><li>جمع المعدلات: +15 % من بعد −20 % ماشي −5 %.</li><li>الاعتقاد بلي نقصان 20 % كتعوضو زيادة 20 %.</li><li>الخلط بين النقط المئوية والنسبة: من 10 % لـ 12 % = +2 نقط ولكن +20 %.</li><li>أخذ القيمة النهائية كمرجع ف معدل التطور.</li></ul>
<h3>❓ أسئلة الدرس</h3>
${Q("كيفاش نحسبو معدل التطور؟", "t = (القيمة النهائية − القيمة البدئية) / القيمة البدئية × 100.")}
${Q("شنو هو المؤشر بأساس 100؟", "I = V / V المرجع × 100. مؤشر 125 كيعني زيادة 25 % بالمقارنة مع عام الأساس.")}
${Q("كيفاش نلقاو الثمن HT من TTC؟", "HT = TTC / (1 + سعر TVA). مثال: 600 TTC مع TVA 20 % ← 600 / 1,2 = 500 HT.")}`,
    en: `<h3>📝 Worked exercise: successive percentages</h3>
<div class="ex"><b>Task.</b> A bag costs 400 MAD. In January its price rises 15%; in the sales it falls 20%.<br>1) Final price? 2) Overall rate? 3) Which rise would bring it back to 400? 4) The bag is 35% of a shop's 12,000 MAD sales: what amount?</div>
<ol><li>Overall multiplier = 1.15 × 0.80 = 0.92 → <b>368 MAD</b>.</li><li>Overall rate = <b>−8%</b> (not −5%!).</li><li>Reciprocal: 1/0.92 − 1 ≈ <b>+8.70%</b>.</li><li>35% × 12,000 = <b>4,200 MAD</b>.</li></ol>
<p><b>Tip</b>: “increase by t%” = multiply by (1 + t/100). Multipliers <b>multiply</b>; percentages do not add.</p>
<h3>⚠️ Common mistakes</h3>
<ul><li>Adding rates: +15% then −20% is not −5%.</li><li>Thinking a 20% fall is offset by a 20% rise.</li><li>Confusing percentage points with percent: 10% → 12% is +2 points but +20%.</li><li>Using the final value as the base of a rate of change.</li></ul>
<h3>❓ Review questions</h3>
${Q("How to compute a rate of change?", "t = (final − initial) / initial × 100.")}
${Q("What is a base-100 index?", "I = V / V_base × 100; an index of 125 means +25% versus the base year.")}
${Q("How to get the price excl. VAT from incl. VAT?", "Excl. = Incl. / (1 + VAT rate); 600 incl. at 20% → 500 excl.")}`,
  },
  mat2: {
    fr: `<h3>📝 Exercice corrigé : étude d'une fonction de profit</h3>
<div class="ex"><b>Énoncé.</b> Une start-up vend des abonnements. Son profit mensuel (en milliers de DH) est P(x) = −x² + 14x − 24, où x est le nombre d'abonnements vendus (en centaines).<br>1) Pour quelles valeurs le profit est-il nul ? 2) Quand est-il positif ? 3) Quel x maximise le profit ? Profit maximal ?</div>
<ol><li>Δ = 14² − 4(−1)(−24) = 196 − 96 = 100 → √Δ = 10. x₁ = (−14 + 10)/(−2) = <b>2</b> ; x₂ = (−14 − 10)/(−2) = <b>12</b>.</li>
<li>a = −1 &lt; 0 : P est positif <b>entre les racines</b> → entre 200 et 1 200 abonnements.</li>
<li>P′(x) = −2x + 14 = 0 → <b>x = 7</b> (700 abonnements). P(7) = −49 + 98 − 24 = <b>25</b> → 25 000 DH.</li></ol>
{{fig:profit}}
<h3>⚠️ Erreurs fréquentes</h3>
<ul><li>Oublier le signe de a dans −b/(2a) ou dans la formule des racines.</li><li>Calculer b² sans parenthèses quand b est négatif : (−4)² = 16, pas −16.</li><li>Dire « le signe est celui de a entre les racines » : c'est l'<b>inverse</b> ; entre les racines, le signe est opposé à a.</li><li>Oublier de revenir aux unités de l'énoncé (centaines, milliers).</li></ul>
<h3>❓ Questions de cours</h3>
${Q("Que se passe-t-il si Δ &lt; 0 ?", "L'équation n'a pas de solution réelle et le trinôme a toujours le signe de a.")}
${Q("Que représente la dérivée en économie ?", "Une grandeur marginale : la dérivée du coût total est le coût marginal, celle de la recette totale est la recette marginale.")}
${Q("Comment trouver le maximum d'une fonction ?", "On calcule la dérivée, on cherche où elle s'annule et change de signe (de + à −), puis on calcule la valeur de la fonction en ce point.")}`,
    ar: `<h3>📝 تمرين محلول: دراسة دالة الربح</h3>
<div class="ex"><b>النص.</b> ستارت-أب كتبيع اشتراكات. الربح الشهري ديالها (بالآلاف ديال الدراهم) هو P(x) = −x² + 14x − 24، و x عدد الاشتراكات المبيوعة (بالمئات).<br>1) ف أشمن قيم الربح كيكون صفر؟ 2) إمتى كيكون موجب؟ 3) أشمن x كيعظم الربح؟ وشحال الربح الأقصى؟</div>
<ol><li>Δ = 14² − 4(−1)(−24) = 196 − 96 = 100 ← √Δ = 10. x₁ = (−14 + 10)/(−2) = <b>2</b>؛ x₂ = (−14 − 10)/(−2) = <b>12</b>.</li>
<li>a = −1 &lt; 0: P موجب <b>بين الجذور</b> ← بين 200 و 1 200 اشتراك.</li>
<li>P′(x) = −2x + 14 = 0 ← <b>x = 7</b> (700 اشتراك). P(7) = −49 + 98 − 24 = <b>25</b> ← 25 000 درهم.</li></ol>
{{fig:profit}}
<h3>⚠️ أخطاء شائعة</h3>
<ul><li>نسيان إشارة a ف −b/(2a) ولا ف صيغة الجذور.</li><li>حساب b² بلا قوسين ملي b سالب: (−4)² = 16، ماشي −16.</li><li>تقولي «الإشارة هي إشارة a بين الجذور»: <b>بالعكس</b>؛ بين الجذور الإشارة عكس a.</li><li>نسيان الرجوع لوحدات النص (المئات، الآلاف).</li></ul>
<h3>❓ أسئلة الدرس</h3>
${Q("شنو كيوقع إلا Δ &lt; 0؟", "المعادلة ما عندهاش حل حقيقي، والحدودية ديما عندها إشارة a.")}
${Q("شنو كتمثل المشتقة ف الاقتصاد؟", "مقدار حدي: مشتقة التكلفة الكلية هي التكلفة الحدية، ومشتقة المداخيل الكلية هي المداخيل الحدية.")}
${Q("كيفاش نلقاو القيمة القصوى ديال دالة؟", "كنحسبو المشتقة، كنقلبو فين كتولي صفر وكتبدل الإشارة (من + لـ −)، من بعد كنحسبو قيمة الدالة ف هاد النقطة.")}`,
    en: `<h3>📝 Worked exercise: studying a profit function</h3>
<div class="ex"><b>Task.</b> A start-up's monthly profit (thousand MAD) is P(x) = −x² + 14x − 24, x = subscriptions sold (hundreds).<br>1) When is profit zero? 2) When is it positive? 3) Which x maximises profit, and what is the maximum?</div>
<ol><li>Δ = 196 − 96 = 100 → x₁ = <b>2</b>, x₂ = <b>12</b>.</li><li>a &lt; 0: positive <b>between the roots</b> → 200 to 1,200 subscriptions.</li><li>P′(x) = −2x + 14 = 0 → <b>x = 7</b>; P(7) = <b>25</b> → 25,000 MAD.</li></ol>
{{fig:profit}}
<h3>⚠️ Common mistakes</h3>
<ul><li>Forgetting the sign of a in −b/(2a).</li><li>Writing b² without brackets when b &lt; 0: (−4)² = 16.</li><li>Between the roots the sign is <b>opposite</b> to a.</li><li>Not converting back to the units of the task.</li></ul>
<h3>❓ Review questions</h3>
${Q("What if Δ &lt; 0?", "No real solution; the quadratic always has the sign of a.")}
${Q("What does the derivative mean in economics?", "A marginal quantity: the derivative of total cost is marginal cost; of total revenue, marginal revenue.")}
${Q("How to find a maximum?", "Differentiate, find where the derivative is zero and changes from + to −, then evaluate the function there.")}`,
  },
  mat3: {
    fr: `<h3>📝 Exercice corrigé : épargne et crédit</h3>
<div class="ex"><b>Énoncé.</b> 1) Fatima place 20 000 DH à 4 % par an à intérêts composés pendant 5 ans. Valeur acquise ? 2) Elle aurait pu placer à intérêts simples au même taux : différence ? 3) Elle emprunte 50 000 DH sur 3 ans à 6 % par an, remboursables par annuités constantes. Calcule l'annuité et la 1<sup>re</sup> ligne du tableau.</div>
<ol><li>Cₙ = 20 000 × 1,04⁵ = 20 000 × 1,216653 ≈ <b>24 333,06 DH</b>.</li>
<li>Simples : I = 20 000 × 0,04 × 5 = 4 000 → 24 000 DH. Différence ≈ <b>333,06 DH</b> (intérêts sur intérêts).</li>
<li>a = 50 000 × 0,06 / (1 − 1,06⁻³) = 3 000 / (1 − 0,839619) = 3 000 / 0,160381 ≈ <b>18 705,49 DH</b>.<br>Ligne 1 : intérêt = 50 000 × 6 % = 3 000 ; amortissement = 18 705,49 − 3 000 = 15 705,49 ; capital restant = 34 294,51.</li></ol>
{{fig:interets}}
<h3>⚠️ Erreurs fréquentes</h3>
<ul><li>Utiliser la formule simple pour des intérêts composés (ou l'inverse).</li><li>Oublier de convertir la durée : 9 mois = 9/12 an ; avec un taux mensuel, n en mois.</li><li>Écrire 4 % = 4 au lieu de 0,04 dans la formule.</li><li>Dans un emprunt, croire que l'amortissement est constant avec des annuités constantes : c'est l'<b>annuité</b> qui est constante ; l'amortissement augmente.</li></ul>
<h3>❓ Questions de cours</h3>
${Q("Qu'est-ce que l'actualisation ?", "Le calcul de la valeur aujourd'hui d'une somme future : C₀ = Cₙ × (1 + i)⁻ⁿ. C'est l'opération inverse de la capitalisation.")}
${Q("Que sont des taux équivalents ?", "Des taux qui, sur des périodes différentes, donnent la même valeur acquise. Taux mensuel équivalent à un taux annuel i : (1 + i)^(1/12) − 1.")}
${Q("Que contient un tableau d'amortissement d'emprunt ?", "Pour chaque période : le capital restant dû au début, l'intérêt, l'amortissement du capital, l'annuité et le capital restant dû en fin de période.")}`,
    ar: `<h3>📝 تمرين محلول: الادخار والقرض</h3>
<div class="ex"><b>النص.</b> 1) فاطمة حطات 20 000 درهم بـ 4 % ف العام بفوائد مركبة لمدة 5 سنين. القيمة المكتسبة؟ 2) كانت تقدر تحطها بفوائد بسيطة بنفس المعدل: شحال الفرق؟ 3) سلفات 50 000 درهم على 3 سنين بـ 6 % ف العام، بأقساط سنوية ثابتة. احسبي القسط والسطر الأول من الجدول.</div>
<ol><li>Cₙ = 20 000 × 1,04⁵ = 20 000 × 1,216653 ≈ <b>24 333,06 درهم</b>.</li>
<li>بسيطة: I = 20 000 × 0,04 × 5 = 4 000 ← 24 000 درهم. الفرق ≈ <b>333,06 درهم</b> (فوائد على الفوائد).</li>
<li>a = 50 000 × 0,06 / (1 − 1,06⁻³) = 3 000 / 0,160381 ≈ <b>18 705,49 درهم</b>.<br>السطر 1: الفائدة = 50 000 × 6 % = 3 000؛ استهلاك الرأسمال = 18 705,49 − 3 000 = 15 705,49؛ الرأسمال الباقي = 34 294,51.</li></ol>
{{fig:interets}}
<h3>⚠️ أخطاء شائعة</h3>
<ul><li>استعمال صيغة الفوائد البسيطة للمركبة (ولا العكس).</li><li>نسيان تحويل المدة: 9 شهور = 9/12 عام؛ مع معدل شهري، n بالشهور.</li><li>كتابة 4 % = 4 عوض 0,04 ف الصيغة.</li><li>ف القرض، الاعتقاد بلي الاستهلاك ثابت مع الأقساط الثابتة: <b>القسط</b> هو اللي ثابت؛ الاستهلاك كيزيد.</li></ul>
<h3>❓ أسئلة الدرس</h3>
${Q("شنو هو التحيين؟", "حساب القيمة ديال اليوم لمبلغ مستقبلي: C₀ = Cₙ × (1 + i)⁻ⁿ. هي العملية المعاكسة للرسملة.")}
${Q("شنو هي المعدلات المتكافئة؟", "معدلات ف فترات مختلفة كتعطي نفس القيمة المكتسبة. المعدل الشهري المكافئ لمعدل سنوي i: (1 + i)^(1/12) − 1.")}
${Q("شنو كاين ف جدول استهلاك القرض؟", "لكل فترة: الرأسمال الباقي ف البداية، الفائدة، استهلاك الرأسمال، القسط والرأسمال الباقي ف الآخر.")}`,
    en: `<h3>📝 Worked exercise: savings and loans</h3>
<div class="ex"><b>Task.</b> 1) Fatima invests 20,000 MAD at 4% compound for 5 years. Final value? 2) Difference with simple interest? 3) She borrows 50,000 MAD over 3 years at 6%, constant annual payments. Compute the payment and first table line.</div>
<ol><li>20,000 × 1.04⁵ ≈ <b>24,333.06 MAD</b>.</li><li>Simple: 24,000 → difference ≈ <b>333.06 MAD</b> (interest on interest).</li><li>a = 3,000 / (1 − 1.06⁻³) ≈ <b>18,705.49 MAD</b>. Line 1: interest 3,000; principal 15,705.49; remaining 34,294.51.</li></ol>
{{fig:interets}}
<h3>⚠️ Common mistakes</h3>
<ul><li>Using the simple formula for compound interest (or vice versa).</li><li>Not converting time: 9 months = 9/12 year.</li><li>Writing 4% as 4 instead of 0.04.</li><li>With constant payments, the <b>payment</b> is constant; the principal part grows.</li></ul>
<h3>❓ Review questions</h3>
${Q("What is discounting?", "Finding today's value of a future sum: C₀ = Cₙ(1 + i)⁻ⁿ — the reverse of compounding.")}
${Q("Equivalent rates?", "Rates over different periods giving the same final value; monthly equivalent of annual i: (1 + i)^(1/12) − 1.")}
${Q("What does a loan schedule contain?", "Per period: opening balance, interest, principal repaid, payment, closing balance.")}`,
  },
  mat4: {
    fr: `<h3>📝 Exercice corrigé : statistiques des ventes</h3>
<div class="ex"><b>Énoncé.</b> Ventes quotidiennes (en unités) d'une boutique en ligne sur 10 jours : 12, 15, 9, 20, 15, 18, 11, 15, 22, 13.<br>1) Moyenne, médiane, mode, étendue. 2) Écart-type. 3) Interprète.</div>
<ol><li>Somme = 150 → <b>x̄ = 15</b>. Série triée : 9, 11, 12, 13, 15, 15, 15, 18, 20, 22 → médiane = (15 + 15)/2 = <b>15</b>. Mode = <b>15</b> (3 fois). Étendue = 22 − 9 = <b>13</b>.</li>
<li>Écarts² : 9, 0, 36, 25, 0, 9, 16, 0, 49, 4 → somme = 148 → variance = 14,8 → <b>σ ≈ 3,85</b>.</li>
<li>Les ventes sont en moyenne de 15 unités par jour, avec une dispersion modérée (environ ±4 unités). Moyenne = médiane : la série est assez symétrique.</li></ol>
{{fig:histo}}
<h3>⚠️ Erreurs fréquentes</h3>
<ul><li>Calculer la médiane sans trier la série.</li><li>Oublier de diviser par l'effectif total pour la variance.</li><li>Confondre fréquence (proportion) et effectif (nombre).</li><li>Dans une série groupée en classes, utiliser les bornes au lieu des <b>centres de classes</b>.</li></ul>
<h3>❓ Questions de cours</h3>
${Q("Pourquoi la médiane est-elle parfois préférable à la moyenne ?", "Parce qu'elle n'est pas influencée par les valeurs extrêmes. Pour les salaires, quelques très hauts salaires augmentent la moyenne mais pas la médiane.")}
${Q("Que mesure le coefficient de variation ?", "CV = σ / x̄. Il compare la dispersion de séries de moyennes différentes : plus il est faible, plus la série est homogène.")}
${Q("Comment calculer une probabilité simple ?", "P(A) = nombre de cas favorables / nombre de cas possibles, si tous les cas sont équiprobables.")}`,
    ar: `<h3>📝 تمرين محلول: إحصائيات المبيعات</h3>
<div class="ex"><b>النص.</b> المبيعات اليومية (بالوحدات) ديال متجر إلكتروني ف 10 أيام: 12، 15، 9، 20، 15، 18، 11، 15، 22، 13.<br>1) المتوسط، الوسيط، المنوال، المدى. 2) الانحراف المعياري. 3) فسري.</div>
<ol><li>المجموع = 150 ← <b>x̄ = 15</b>. السلسلة مرتبة: 9، 11، 12، 13، 15، 15، 15، 18، 20، 22 ← الوسيط = (15 + 15)/2 = <b>15</b>. المنوال = <b>15</b> (3 مرات). المدى = 22 − 9 = <b>13</b>.</li>
<li>مربعات الفروقات: 9، 0، 36، 25، 0، 9، 16، 0، 49، 4 ← المجموع = 148 ← التباين = 14,8 ← <b>σ ≈ 3,85</b>.</li>
<li>المبيعات ف المتوسط 15 وحدة ف النهار، مع تشتت متوسط (تقريبا ±4 وحدات). المتوسط = الوسيط: السلسلة شبه متماثلة.</li></ol>
{{fig:histo}}
<h3>⚠️ أخطاء شائعة</h3>
<ul><li>حساب الوسيط بلا ترتيب السلسلة.</li><li>نسيان القسمة على المجموع الكلي ف التباين.</li><li>الخلط بين التردد (نسبة) والتكرار (عدد).</li><li>ف سلسلة مجمعة ف فئات، استعمال الحدود عوض <b>مراكز الفئات</b>.</li></ul>
<h3>❓ أسئلة الدرس</h3>
${Q("علاش الوسيط أحيانا أحسن من المتوسط؟", "حيت ما كيتأثرش بالقيم المتطرفة. ف الأجور، شي أجور عالية بزاف كتطلع المتوسط ولكن ماشي الوسيط.")}
${Q("شنو كيقيس معامل الاختلاف؟", "CV = σ / x̄. كيقارن التشتت ديال سلاسل عندها متوسطات مختلفة: كلما كان صغير، كلما السلسلة متجانسة.")}
${Q("كيفاش نحسبو احتمال بسيط؟", "P(A) = عدد الحالات الملائمة / عدد الحالات الممكنة، إلا كانت جميع الحالات متساوية الاحتمال.")}`,
    en: `<h3>📝 Worked exercise: sales statistics</h3>
<div class="ex"><b>Task.</b> Daily sales over 10 days: 12, 15, 9, 20, 15, 18, 11, 15, 22, 13.<br>1) Mean, median, mode, range. 2) Standard deviation. 3) Interpret.</div>
<ol><li>Sum 150 → <b>mean 15</b>; sorted → median <b>15</b>; mode <b>15</b>; range <b>13</b>.</li><li>Squared deviations sum 148 → variance 14.8 → <b>σ ≈ 3.85</b>.</li><li>About 15 units a day with moderate spread (±4); mean = median: fairly symmetric.</li></ol>
{{fig:histo}}
<h3>⚠️ Common mistakes</h3>
<ul><li>Taking the median without sorting.</li><li>Not dividing by the total count for variance.</li><li>Confusing frequency (share) with count.</li><li>Using class limits instead of <b>class midpoints</b> in grouped data.</li></ul>
<h3>❓ Review questions</h3>
${Q("Why is the median sometimes better than the mean?", "It is not affected by extreme values — a few very high salaries raise the mean but not the median.")}
${Q("What does the coefficient of variation measure?", "CV = σ / mean; it compares spread between series with different means.")}
${Q("How to compute a simple probability?", "P(A) = favourable cases / possible cases, when all cases are equally likely.")}`,
  },
};
