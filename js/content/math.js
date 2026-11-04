// Module 1.1.5 — Mathématiques appliquées
export default {
  id: 'math', code: '1.1.5', em: '📐', color: '#6c4ab6', prof: 'AISSAOUI Zoubida',
  name: { fr: 'Mathématiques appliquées', ar: 'الرياضيات التطبيقية', en: 'Applied mathematics' },
  intro: { fr: "Les outils mathématiques du marketing et de la gestion : pourcentages et indices, fonctions et dérivées pour optimiser, mathématiques financières et statistiques.", ar: 'الأدوات الرياضية ديال التسويق والتسيير: النسب المئوية والمؤشرات، الدوال والمشتقات للتحسين، الرياضيات المالية والإحصاء.', en: 'The maths tools of marketing and management: percentages and indices, functions and derivatives for optimisation, financial maths and statistics.' },
  chapters: [
    { id: 'mat1', t: { fr: 'Pourcentages, taux de variation et indices', ar: 'النسب المئوية، معدلات التغير والمؤشرات', en: 'Percentages, rates of change and indices' },
      sum: { fr: 'Calculer une part, une hausse, une baisse, des variations successives, des indices', ar: 'حساب جزء، زيادة، نقصان، تغيرات متتالية، مؤشرات', en: 'Shares, increases, decreases, successive changes, indices' },
      body: {
        fr: `<h3>1. Proportion et pourcentage</h3>
<p>Un pourcentage exprime une <b>part sur 100</b> : 35 % = 35/100 = 0,35.</p>
<span class="f">Part = Total × taux &nbsp;&nbsp;&nbsp; Taux = Part / Total × 100</span>
<div class="ex">Sur 240 clients d'une boutique en ligne, 84 achètent avec un code promo. Taux = 84 / 240 × 100 = <b>35 %</b>.</div>
<h3>2. Taux de variation</h3>
<span class="f">t = (V<sub>arrivée</sub> − V<sub>départ</sub>) / V<sub>départ</sub> × 100</span>
<div class="ex">Le chiffre d'affaires passe de 80 000 DH à 92 000 DH : t = (92 000 − 80 000) / 80 000 = 0,15 → <b>+15 %</b>.</div>
<h3>3. Le coefficient multiplicateur</h3>
<p>Augmenter de t % revient à multiplier par <b>CM = 1 + t/100</b> ; baisser de t % revient à multiplier par <b>1 − t/100</b>.</p>
<table><tr><th>Variation</th><th>Coefficient</th></tr><tr><td>+20 %</td><td>× 1,20</td></tr><tr><td>−30 %</td><td>× 0,70</td></tr><tr><td>+5 %</td><td>× 1,05</td></tr><tr><td>−12,5 %</td><td>× 0,875</td></tr></table>
<div class="ex">Un téléphone à 3 500 DH est soldé à −20 % : 3 500 × 0,8 = <b>2 800 DH</b>.</div>
<h3>4. Variations successives</h3>
<p>Les pourcentages <b>ne s'additionnent pas</b> : on <b>multiplie</b> les coefficients.</p>
<div class="ex">Un prix augmente de 10 % puis baisse de 10 % : 1,1 × 0,9 = 0,99 → variation globale <b>−1 %</b> (et non 0 %).</div>
<p><b>Taux réciproque</b> : pour revenir au prix de départ après une hausse de t %, il faut baisser de t/(1 + t). Après +25 %, il faut −20 % (car 1/1,25 = 0,8).</p>
<p><b>Taux moyen</b> sur n périodes : (1 + t<sub>m</sub>)<sup>n</sup> = CM global, donc t<sub>m</sub> = CM<sup>1/n</sup> − 1.</p>
<div class="ex">Les ventes augmentent de 21 % en 2 ans. Taux annuel moyen : √1,21 − 1 = 1,1 − 1 = <b>10 % par an</b>.</div>
<h3>5. Prix HT, TTC et marge</h3>
<span class="f">TTC = HT × (1 + TVA) &nbsp;&nbsp; Marge = Prix de vente − Coût d'achat</span>
<ul><li><b>Taux de marge</b> = marge / coût d'achat × 100</li><li><b>Taux de marque</b> = marge / prix de vente × 100</li></ul>
<div class="ex">Un article acheté 150 DH est vendu 200 DH HT. Marge = 50 DH ; taux de marge = 50/150 = <b>33,3 %</b> ; taux de marque = 50/200 = <b>25 %</b>.</div>
<h3>6. Les indices</h3>
<p>Un <b>indice</b> compare une valeur à une valeur de référence (base 100) :</p>
<span class="f">I<sub>t/0</sub> = V<sub>t</sub> / V<sub>0</sub> × 100</span>
<div class="ex">Prix du litre d'huile : 18 DH en 2024 (base 100), 22,5 DH en 2026. Indice 2026 = 22,5/18 × 100 = <b>125</b> → hausse de 25 %.</div>
<p>Indices des prix (IPC du HCP), indices boursiers (MASI à la Bourse de Casablanca) : ils permettent de comparer facilement des évolutions.</p>`,
        ar: `<h3>1. النسبة والنسبة المئوية</h3>
<p>النسبة المئوية كتعبر على <b>جزء من 100</b>: 35 % = 35/100 = 0,35.</p>
<span class="f">الجزء = المجموع × النسبة &nbsp;&nbsp;&nbsp; النسبة = الجزء / المجموع × 100</span>
<div class="ex">من 240 زبون ف متجر إلكتروني، 84 شراو بكود التخفيض. النسبة = 84 / 240 × 100 = <b>35 %</b>.</div>
<h3>2. معدل التغير</h3>
<span class="f">t = (القيمة النهائية − القيمة البدئية) / القيمة البدئية × 100</span>
<div class="ex">رقم المعاملات دوز من 80 000 لـ 92 000 درهم: t = (92 000 − 80 000) / 80 000 = 0,15 ← <b>+15 %</b>.</div>
<h3>3. المعامل الضربي</h3>
<p>الزيادة بـ t % كتساوي الضرب ف <b>CM = 1 + t/100</b>؛ والنقصان بـ t % كيساوي الضرب ف <b>1 − t/100</b>.</p>
<table><tr><th>التغير</th><th>المعامل</th></tr><tr><td>+20 %</td><td>× 1,20</td></tr><tr><td>−30 %</td><td>× 0,70</td></tr><tr><td>+5 %</td><td>× 1,05</td></tr><tr><td>−12,5 %</td><td>× 0,875</td></tr></table>
<div class="ex">تليفون بـ 3 500 درهم عليه تخفيض −20 %: 3 500 × 0,8 = <b>2 800 درهم</b>.</div>
<h3>4. التغيرات المتتالية</h3>
<p>النسب المئوية <b>ما كتجمعش</b>: كن<b>ضربو</b> المعاملات.</p>
<div class="ex">ثمن طلع بـ 10 % ومن بعد نقص بـ 10 %: 1,1 × 0,9 = 0,99 ← التغير الإجمالي <b>−1 %</b> (ماشي 0 %).</div>
<p><b>النسبة العكسية</b>: باش نرجعو للثمن البدئي من بعد زيادة t %، خاص نقصان ديال t/(1 + t). من بعد +25 %، خاص −20 % (حيت 1/1,25 = 0,8).</p>
<p><b>النسبة المتوسطة</b> على n فترات: (1 + t<sub>m</sub>)<sup>n</sup> = المعامل الإجمالي، إذن t<sub>m</sub> = CM<sup>1/n</sup> − 1.</p>
<div class="ex">المبيعات زادت بـ 21 % ف عامين. النسبة السنوية المتوسطة: √1,21 − 1 = 1,1 − 1 = <b>10 % ف العام</b>.</div>
<h3>5. الثمن HT و TTC والهامش</h3>
<span class="f">TTC = HT × (1 + TVA) &nbsp;&nbsp; الهامش = ثمن البيع − تكلفة الشراء</span>
<ul><li><b>نسبة الهامش</b> = الهامش / تكلفة الشراء × 100</li><li><b>نسبة العلامة</b> = الهامش / ثمن البيع × 100</li></ul>
<div class="ex">سلعة تشرات بـ 150 درهم وتباعت بـ 200 درهم HT. الهامش = 50 درهم؛ نسبة الهامش = 50/150 = <b>33,3 %</b>؛ نسبة العلامة = 50/200 = <b>25 %</b>.</div>
<h3>6. المؤشرات</h3>
<p><b>المؤشر</b> كيقارن قيمة مع قيمة مرجعية (الأساس 100):</p>
<span class="f">I<sub>t/0</sub> = V<sub>t</sub> / V<sub>0</sub> × 100</span>
<div class="ex">ثمن لتر الزيت: 18 درهم ف 2024 (الأساس 100)، 22,5 درهم ف 2026. مؤشر 2026 = 22,5/18 × 100 = <b>125</b> ← زيادة 25 %.</div>
<p>مؤشرات الأثمنة (IPC ديال المندوبية)، المؤشرات البورصوية (MASI ف بورصة الدار البيضاء): كيسهلو مقارنة التطورات.</p>`,
        en: `<h3>1. Proportions and percentages</h3>
<p>A percentage is a <b>share out of 100</b>: 35% = 35/100 = 0.35.</p>
<span class="f">Part = Total × rate &nbsp;&nbsp;&nbsp; Rate = Part / Total × 100</span>
<div class="ex">Out of 240 customers of an online shop, 84 used a promo code. Rate = 84 / 240 × 100 = <b>35%</b>.</div>
<h3>2. Rate of change</h3>
<span class="f">t = (V<sub>final</sub> − V<sub>initial</sub>) / V<sub>initial</sub> × 100</span>
<div class="ex">Turnover rises from 80,000 to 92,000 MAD: t = (92,000 − 80,000) / 80,000 = 0.15 → <b>+15%</b>.</div>
<h3>3. The multiplier</h3>
<p>Increasing by t% means multiplying by <b>1 + t/100</b>; decreasing by t% means multiplying by <b>1 − t/100</b>.</p>
<table><tr><th>Change</th><th>Multiplier</th></tr><tr><td>+20%</td><td>× 1.20</td></tr><tr><td>−30%</td><td>× 0.70</td></tr><tr><td>+5%</td><td>× 1.05</td></tr><tr><td>−12.5%</td><td>× 0.875</td></tr></table>
<div class="ex">A 3,500 MAD phone with 20% off: 3,500 × 0.8 = <b>2,800 MAD</b>.</div>
<h3>4. Successive changes</h3>
<p>Percentages <b>do not add up</b>: <b>multiply</b> the multipliers.</p>
<div class="ex">A price rises 10% then falls 10%: 1.1 × 0.9 = 0.99 → overall change <b>−1%</b> (not 0%).</div>
<p><b>Reverse rate</b>: to get back to the original price after a rise of t, decrease by t/(1 + t). After +25% you need −20% (because 1/1.25 = 0.8).</p>
<p><b>Average rate</b> over n periods: (1 + t<sub>m</sub>)<sup>n</sup> = overall multiplier, so t<sub>m</sub> = M<sup>1/n</sup> − 1.</p>
<div class="ex">Sales rise 21% in 2 years. Average annual rate: √1.21 − 1 = 1.1 − 1 = <b>10% per year</b>.</div>
<h3>5. Prices excl./incl. VAT and margin</h3>
<span class="f">Incl. = Excl. × (1 + VAT) &nbsp;&nbsp; Margin = Selling price − Purchase cost</span>
<ul><li><b>Markup rate</b> = margin / purchase cost × 100</li><li><b>Margin rate</b> = margin / selling price × 100</li></ul>
<div class="ex">An item bought for 150 MAD is sold for 200 MAD excl. VAT. Margin = 50; markup = 50/150 = <b>33.3%</b>; margin rate = 50/200 = <b>25%</b>.</div>
<h3>6. Indices</h3>
<p>An <b>index</b> compares a value to a reference value (base 100):</p>
<span class="f">I<sub>t/0</sub> = V<sub>t</sub> / V<sub>0</sub> × 100</span>
<div class="ex">A litre of oil: 18 MAD in 2024 (base 100), 22.5 MAD in 2026. Index 2026 = 22.5/18 × 100 = <b>125</b> → 25% rise.</div>
<p>Price indices (HCP CPI), stock indices (MASI at the Casablanca Stock Exchange) make changes easy to compare.</p>`,
      },
      key: { fr: ['t = (V1 − V0)/V0 × 100.', 'Hausse de t % : × (1 + t) ; baisse : × (1 − t).', 'Variations successives : on multiplie les coefficients.', 'Taux de marge (sur coût) ≠ taux de marque (sur prix de vente).', 'Indice = Vt/V0 × 100.'], ar: ['t = (V1 − V0)/V0 × 100.', 'زيادة t %: × (1 + t)؛ نقصان: × (1 − t).', 'التغيرات المتتالية: كنضربو المعاملات.', 'نسبة الهامش (على التكلفة) ≠ نسبة العلامة (على ثمن البيع).', 'المؤشر = Vt/V0 × 100.'], en: ['t = (V1 − V0)/V0 × 100.', 'Increase of t: × (1 + t); decrease: × (1 − t).', 'Successive changes: multiply the multipliers.', 'Markup (on cost) ≠ margin rate (on price).', 'Index = Vt/V0 × 100.'] } },

    { id: 'mat2', t: { fr: 'Fonctions, dérivées et optimisation', ar: 'الدوال، المشتقات والتحسين', en: 'Functions, derivatives and optimisation' },
      sum: { fr: 'Fonctions affines et du 2nd degré, coût/recette/bénéfice, dérivée, maximum', ar: 'الدوال التآلفية ومن الدرجة الثانية، التكلفة/المداخيل/الربح، المشتقة، القيمة القصوى', en: 'Linear and quadratic functions, cost/revenue/profit, derivative, maximum' },
      body: {
        fr: `<h3>1. Fonctions en gestion</h3>
<p>Une <b>fonction</b> associe à chaque quantité q une valeur : un coût C(q), une recette R(q), un bénéfice B(q).</p>
<ul><li><b>Fonction affine</b> : f(x) = ax + b (droite). Ex. : coût total C(q) = 2q + 6 000 (coût variable 2 DH, coût fixe 6 000 DH).</li>
<li><b>Fonction du 2nd degré</b> : f(x) = ax² + bx + c (parabole), souvent pour un bénéfice.</li></ul>
<span class="f">R(q) = p × q &nbsp;&nbsp;&nbsp; B(q) = R(q) − C(q)</span>
<h3>2. La dérivée</h3>
<div class="def">La <b>dérivée</b> f′(x) mesure la <b>vitesse de variation</b> de f : de combien f change quand x augmente d'une petite quantité. En économie, la dérivée du coût total est le <b>coût marginal</b>, celle de la recette est la <b>recette marginale</b>.</div>
<table><tr><th>Fonction f(x)</th><th>Dérivée f′(x)</th></tr><tr><td>k (constante)</td><td>0</td></tr><tr><td>x</td><td>1</td></tr><tr><td>xⁿ</td><td>n·xⁿ⁻¹</td></tr><tr><td>a·u + b·v</td><td>a·u′ + b·v′</td></tr><tr><td>u·v</td><td>u′v + uv′</td></tr><tr><td>u / v</td><td>(u′v − uv′) / v²</td></tr><tr><td>ln x</td><td>1/x</td></tr><tr><td>eˣ</td><td>eˣ</td></tr></table>
<div class="ex">f(x) = 3x² − 5x + 7 → f′(x) = 6x − 5.<br>C(q) = 0,5q² + 4q + 200 → Cm(q) = C′(q) = q + 4.</div>
<h3>3. Sens de variation</h3>
<ul><li>si f′(x) &gt; 0 : f est <b>croissante</b> ;</li><li>si f′(x) &lt; 0 : f est <b>décroissante</b> ;</li><li>si f′ s'annule en changeant de signe (+ puis −) : f admet un <b>maximum</b>.</li></ul>
<h3>4. Maximiser un bénéfice</h3>
{{fig:profit}}
<div class="ex"><b>Exercice type.</b> Une entreprise vend des coques de téléphone. Son bénéfice mensuel est B(q) = −0,5q² + 50q − 600 (q en centaines).<br>
1) B′(q) = −q + 50.<br>2) B′(q) = 0 ⟺ q = 50. Avant 50, B′ &gt; 0 (croissante) ; après, B′ &lt; 0 (décroissante) → <b>maximum en q = 50</b>.<br>
3) B(50) = −0,5 × 2 500 + 2 500 − 600 = <b>650</b> (milliers de DH).<br>4) Seuil de rentabilité : B(q) = 0 ⟺ −0,5q² + 50q − 600 = 0 ⟺ q² − 100q + 1 200 = 0 ; Δ = 10 000 − 4 800 = 5 200 ; q ≈ 13,9 ou q ≈ 86,1. L'entreprise est rentable entre ces deux quantités.</div>
<h3>5. Rappels : équation du 2nd degré</h3>
<span class="f">ax² + bx + c = 0 &nbsp;&nbsp; Δ = b² − 4ac &nbsp;&nbsp; x = (−b ± √Δ) / 2a</span>
<p>Si Δ &gt; 0 : deux solutions ; Δ = 0 : une solution double ; Δ &lt; 0 : pas de solution réelle. Le sommet d'une parabole est en x = −b / 2a.</p>
<h3>6. Élasticité et dérivée</h3>
<p>Pour une demande Q(p), l'élasticité au point p vaut <b>e = Q′(p) × p / Q(p)</b>.</p>
<div class="ex">Q(p) = 500 − 10p. En p = 20 : Q = 300, Q′ = −10, e = −10 × 20 / 300 ≈ <b>−0,67</b> (demande inélastique).</div>`,
        ar: `<h3>1. الدوال ف التسيير</h3>
<p><b>الدالة</b> كتربط كل كمية q بقيمة: تكلفة C(q)، مداخيل R(q)، ربح B(q).</p>
<ul><li><b>دالة تآلفية</b>: f(x) = ax + b (مستقيم). مثال: التكلفة الكلية C(q) = 2q + 6 000 (التكلفة المتغيرة 2 درهم، الثابتة 6 000 درهم).</li>
<li><b>دالة من الدرجة الثانية</b>: f(x) = ax² + bx + c (شلجم)، غالبا للربح.</li></ul>
<span class="f">R(q) = p × q &nbsp;&nbsp;&nbsp; B(q) = R(q) − C(q)</span>
<h3>2. المشتقة</h3>
<div class="def"><b>المشتقة</b> f′(x) كتقيس <b>سرعة تغير</b> f: بشحال كتبدل f ملي x كتزيد بشوية. ف الاقتصاد، مشتقة التكلفة الكلية هي <b>التكلفة الحدية</b>، ومشتقة المداخيل هي <b>المداخيل الحدية</b>.</div>
<table><tr><th>الدالة f(x)</th><th>المشتقة f′(x)</th></tr><tr><td>k (ثابتة)</td><td>0</td></tr><tr><td>x</td><td>1</td></tr><tr><td>xⁿ</td><td>n·xⁿ⁻¹</td></tr><tr><td>a·u + b·v</td><td>a·u′ + b·v′</td></tr><tr><td>u·v</td><td>u′v + uv′</td></tr><tr><td>u / v</td><td>(u′v − uv′) / v²</td></tr><tr><td>ln x</td><td>1/x</td></tr><tr><td>eˣ</td><td>eˣ</td></tr></table>
<div class="ex">f(x) = 3x² − 5x + 7 ← f′(x) = 6x − 5.<br>C(q) = 0,5q² + 4q + 200 ← Cm(q) = C′(q) = q + 4.</div>
<h3>3. منحى التغير</h3>
<ul><li>إلا f′(x) &gt; 0: f <b>تزايدية</b>؛</li><li>إلا f′(x) &lt; 0: f <b>تناقصية</b>؛</li><li>إلا f′ كتولي صفر وكتبدل الإشارة (+ ومن بعد −): f عندها <b>قيمة قصوى</b>.</li></ul>
<h3>4. تعظيم الربح</h3>
{{fig:profit}}
<div class="ex"><b>تمرين نموذجي.</b> مقاولة كتبيع أغلفة التليفونات. الربح الشهري ديالها B(q) = −0,5q² + 50q − 600 (q بالمئات).<br>
1) B′(q) = −q + 50.<br>2) B′(q) = 0 ⟺ q = 50. قبل 50، B′ &gt; 0 (تزايدية)؛ من بعد، B′ &lt; 0 (تناقصية) ← <b>القيمة القصوى ف q = 50</b>.<br>
3) B(50) = −0,5 × 2 500 + 2 500 − 600 = <b>650</b> (ألف درهم).<br>4) عتبة المردودية: B(q) = 0 ⟺ q² − 100q + 1 200 = 0؛ Δ = 10 000 − 4 800 = 5 200؛ q ≈ 13,9 ولا q ≈ 86,1. المقاولة مربحة بين هاد الجوج كميات.</div>
<h3>5. تذكير: معادلة من الدرجة الثانية</h3>
<span class="f">ax² + bx + c = 0 &nbsp;&nbsp; Δ = b² − 4ac &nbsp;&nbsp; x = (−b ± √Δ) / 2a</span>
<p>إلا Δ &gt; 0: جوج حلول؛ Δ = 0: حل مزدوج؛ Δ &lt; 0: ما كاينش حل حقيقي. رأس الشلجم ف x = −b / 2a.</p>
<h3>6. المرونة والمشتقة</h3>
<p>بالنسبة لطلب Q(p)، المرونة ف النقطة p كتساوي <b>e = Q′(p) × p / Q(p)</b>.</p>
<div class="ex">Q(p) = 500 − 10p. ف p = 20: Q = 300، Q′ = −10، e = −10 × 20 / 300 ≈ <b>−0,67</b> (طلب غير مرن).</div>`,
        en: `<h3>1. Functions in management</h3>
<p>A <b>function</b> links each quantity q to a value: a cost C(q), a revenue R(q), a profit B(q).</p>
<ul><li><b>Linear function</b>: f(x) = ax + b (straight line). E.g. total cost C(q) = 2q + 6,000 (variable cost 2 MAD, fixed cost 6,000).</li>
<li><b>Quadratic function</b>: f(x) = ax² + bx + c (parabola), often for profit.</li></ul>
<span class="f">R(q) = p × q &nbsp;&nbsp;&nbsp; B(q) = R(q) − C(q)</span>
<h3>2. The derivative</h3>
<div class="def">The <b>derivative</b> f′(x) measures the <b>rate of change</b> of f: how much f changes when x increases slightly. In economics, the derivative of total cost is <b>marginal cost</b>; that of revenue is <b>marginal revenue</b>.</div>
<table><tr><th>Function f(x)</th><th>Derivative f′(x)</th></tr><tr><td>k (constant)</td><td>0</td></tr><tr><td>x</td><td>1</td></tr><tr><td>xⁿ</td><td>n·xⁿ⁻¹</td></tr><tr><td>a·u + b·v</td><td>a·u′ + b·v′</td></tr><tr><td>u·v</td><td>u′v + uv′</td></tr><tr><td>u / v</td><td>(u′v − uv′) / v²</td></tr><tr><td>ln x</td><td>1/x</td></tr><tr><td>eˣ</td><td>eˣ</td></tr></table>
<div class="ex">f(x) = 3x² − 5x + 7 → f′(x) = 6x − 5.<br>C(q) = 0.5q² + 4q + 200 → MC(q) = C′(q) = q + 4.</div>
<h3>3. Increasing and decreasing</h3>
<ul><li>if f′(x) &gt; 0: f is <b>increasing</b>;</li><li>if f′(x) &lt; 0: f is <b>decreasing</b>;</li><li>if f′ is zero and changes sign (+ then −): f has a <b>maximum</b>.</li></ul>
<h3>4. Maximising profit</h3>
{{fig:profit}}
<div class="ex"><b>Typical exercise.</b> A firm sells phone cases. Monthly profit B(q) = −0.5q² + 50q − 600 (q in hundreds).<br>
1) B′(q) = −q + 50.<br>2) B′(q) = 0 ⟺ q = 50. Before 50, B′ &gt; 0; after, B′ &lt; 0 → <b>maximum at q = 50</b>.<br>
3) B(50) = −0.5 × 2,500 + 2,500 − 600 = <b>650</b> (thousand MAD).<br>4) Break-even: q² − 100q + 1,200 = 0; Δ = 10,000 − 4,800 = 5,200; q ≈ 13.9 or q ≈ 86.1. The firm is profitable between these two quantities.</div>
<h3>5. Reminder: quadratic equations</h3>
<span class="f">ax² + bx + c = 0 &nbsp;&nbsp; Δ = b² − 4ac &nbsp;&nbsp; x = (−b ± √Δ) / 2a</span>
<p>Δ &gt; 0: two solutions; Δ = 0: one double solution; Δ &lt; 0: no real solution. The vertex of a parabola is at x = −b / 2a.</p>
<h3>6. Elasticity and derivative</h3>
<p>For demand Q(p), the point elasticity is <b>e = Q′(p) × p / Q(p)</b>.</p>
<div class="ex">Q(p) = 500 − 10p. At p = 20: Q = 300, Q′ = −10, e = −10 × 20 / 300 ≈ <b>−0.67</b> (inelastic).</div>`,
      },
      key: { fr: ['B(q) = R(q) − C(q).', '(xⁿ)′ = n·xⁿ⁻¹ ; la dérivée du coût est le coût marginal.', 'Maximum quand f′ = 0 et change de signe (+ → −).', 'Δ = b² − 4ac ; sommet en −b/2a.'], ar: ['B(q) = R(q) − C(q).', '(xⁿ)′ = n·xⁿ⁻¹؛ مشتقة التكلفة هي التكلفة الحدية.', 'القيمة القصوى ملي f′ = 0 وكتبدل الإشارة (+ ← −).', 'Δ = b² − 4ac؛ الرأس ف −b/2a.'], en: ['B(q) = R(q) − C(q).', '(xⁿ)′ = n·xⁿ⁻¹; the derivative of cost is marginal cost.', 'Maximum where f′ = 0 and changes sign (+ → −).', 'Δ = b² − 4ac; vertex at −b/2a.'] } },

    { id: 'mat3', t: { fr: 'Mathématiques financières', ar: 'الرياضيات المالية', en: 'Financial mathematics' },
      sum: { fr: 'Intérêts simples et composés, valeur actuelle, annuités, remboursement d’emprunt', ar: 'الفوائد البسيطة والمركبة، القيمة الحالية، الدفعات، تسديد القرض', en: 'Simple and compound interest, present value, annuities, loan repayment' },
      body: {
        fr: `<h3>1. Les intérêts simples</h3>
<p>Utilisés pour les placements et prêts <b>à court terme</b> (moins d'un an). L'intérêt est calculé uniquement sur le capital de départ.</p>
<span class="f">I = C × t × n &nbsp;&nbsp;&nbsp; (n en années ; si n en jours : I = C × t × j / 360)</span>
<span class="f">Valeur acquise : A = C + I = C(1 + t·n)</span>
<div class="ex">5 000 DH placés à 6 % pendant 90 jours : I = 5 000 × 0,06 × 90/360 = <b>75 DH</b>. Valeur acquise = 5 075 DH.</div>
<h3>2. Les intérêts composés</h3>
<p>Pour le <b>long terme</b> : à la fin de chaque période, les intérêts sont ajoutés au capital et produisent à leur tour des intérêts (<b>capitalisation</b>).</p>
<span class="f">C<sub>n</sub> = C<sub>0</sub> × (1 + i)<sup>n</sup></span>
{{fig:interets}}
<div class="ex">10 000 DH placés à 5 % par an pendant 4 ans : C<sub>4</sub> = 10 000 × 1,05<sup>4</sup> = 10 000 × 1,21550625 ≈ <b>12 155,06 DH</b>. En intérêts simples, on aurait seulement 12 000 DH.</div>
<h3>3. La valeur actuelle (actualisation)</h3>
<p>Actualiser, c'est chercher aujourd'hui la valeur d'une somme future : c'est l'opération inverse de la capitalisation.</p>
<span class="f">C<sub>0</sub> = C<sub>n</sub> × (1 + i)<sup>−n</sup> = C<sub>n</sub> / (1 + i)<sup>n</sup></span>
<div class="ex">Combien placer aujourd'hui à 6 % pour avoir 20 000 DH dans 3 ans ? C<sub>0</sub> = 20 000 / 1,06³ = 20 000 / 1,191016 ≈ <b>16 792,39 DH</b>.</div>
<h3>4. Taux équivalents</h3>
<p>Un taux annuel i est équivalent à un taux mensuel i<sub>m</sub> tel que (1 + i<sub>m</sub>)<sup>12</sup> = 1 + i. Le taux proportionnel (i/12) n'est utilisé qu'en intérêts simples.</p>
<h3>5. Les annuités</h3>
<p>Une suite de versements <b>égaux</b> et <b>réguliers</b> (loyers, mensualités de crédit, épargne mensuelle).</p>
{{fig:timeline}}
<span class="f">Valeur acquise : V<sub>n</sub> = a × [(1 + i)<sup>n</sup> − 1] / i</span>
<span class="f">Valeur actuelle : V<sub>0</sub> = a × [1 − (1 + i)<sup>−n</sup>] / i</span>
<div class="ex">Tu épargnes 1 000 DH à la fin de chaque année pendant 5 ans à 4 % : V<sub>5</sub> = 1 000 × (1,04⁵ − 1)/0,04 = 1 000 × 5,416323 ≈ <b>5 416,32 DH</b>.</div>
<h3>6. Rembourser un emprunt par annuités constantes</h3>
<span class="f">a = V<sub>0</sub> × i / [1 − (1 + i)<sup>−n</sup>]</span>
<div class="ex">Un auto-entrepreneur emprunte 50 000 DH à 8 % sur 5 ans : a = 50 000 × 0,08 / (1 − 1,08<sup>−5</sup>) = 4 000 / 0,319417 ≈ <b>12 522,82 DH par an</b>. Première ligne du tableau d'amortissement : intérêt = 50 000 × 8 % = 4 000 ; amortissement du capital = 12 522,82 − 4 000 = 8 522,82 ; capital restant = 41 477,18.</div>
<div class="tip">Dans chaque annuité : <b>annuité = intérêt + amortissement du capital</b>. Les intérêts diminuent au fil du temps, et la part de capital remboursée augmente.</div>`,
        ar: `<h3>1. الفوائد البسيطة</h3>
<p>كتستعمل للتوظيفات والقروض <b>القصيرة المدى</b> (أقل من عام). الفائدة كتحسب غير على الرأسمال البدئي.</p>
<span class="f">I = C × t × n &nbsp;&nbsp;&nbsp; (n بالسنوات؛ إلا n بالأيام: I = C × t × j / 360)</span>
<span class="f">القيمة المكتسبة: A = C + I = C(1 + t·n)</span>
<div class="ex">5 000 درهم موظفة بـ 6 % لمدة 90 يوم: I = 5 000 × 0,06 × 90/360 = <b>75 درهم</b>. القيمة المكتسبة = 5 075 درهم.</div>
<h3>2. الفوائد المركبة</h3>
<p>لل<b>مدى الطويل</b>: ف آخر كل فترة، الفوائد كتزاد للرأسمال وكتنتج بدورها فوائد (<b>الرسملة</b>).</p>
<span class="f">C<sub>n</sub> = C<sub>0</sub> × (1 + i)<sup>n</sup></span>
{{fig:interets}}
<div class="ex">10 000 درهم موظفة بـ 5 % ف العام لمدة 4 سنين: C<sub>4</sub> = 10 000 × 1,05<sup>4</sup> ≈ <b>12 155,06 درهم</b>. بالفوائد البسيطة غادي يكون غير 12 000 درهم.</div>
<h3>3. القيمة الحالية (التحيين)</h3>
<p>التحيين هو نقلبو على القيمة ديال اليوم لمبلغ مستقبلي: هي العملية العكسية ديال الرسملة.</p>
<span class="f">C<sub>0</sub> = C<sub>n</sub> × (1 + i)<sup>−n</sup> = C<sub>n</sub> / (1 + i)<sup>n</sup></span>
<div class="ex">شحال خاص نوظفو اليوم بـ 6 % باش يكون عندنا 20 000 درهم من بعد 3 سنين؟ C<sub>0</sub> = 20 000 / 1,06³ ≈ <b>16 792,39 درهم</b>.</div>
<h3>4. النسب المتكافئة</h3>
<p>نسبة سنوية i كتكافئ نسبة شهرية i<sub>m</sub> بحيث (1 + i<sub>m</sub>)<sup>12</sup> = 1 + i. النسبة التناسبية (i/12) كتستعمل غير ف الفوائد البسيطة.</p>
<h3>5. الدفعات الثابتة</h3>
<p>سلسلة ديال أداءات <b>متساوية</b> و<b>منتظمة</b> (الكراء، أقساط القرض، الادخار الشهري).</p>
{{fig:timeline}}
<span class="f">القيمة المكتسبة: V<sub>n</sub> = a × [(1 + i)<sup>n</sup> − 1] / i</span>
<span class="f">القيمة الحالية: V<sub>0</sub> = a × [1 − (1 + i)<sup>−n</sup>] / i</span>
<div class="ex">كتدخري 1 000 درهم ف آخر كل عام لمدة 5 سنين بـ 4 %: V<sub>5</sub> = 1 000 × (1,04⁵ − 1)/0,04 ≈ <b>5 416,32 درهم</b>.</div>
<h3>6. تسديد قرض بدفعات ثابتة</h3>
<span class="f">a = V<sub>0</sub> × i / [1 − (1 + i)<sup>−n</sup>]</span>
<div class="ex">مقاول ذاتي سلف 50 000 درهم بـ 8 % على 5 سنين: a = 50 000 × 0,08 / (1 − 1,08<sup>−5</sup>) ≈ <b>12 522,82 درهم ف العام</b>. السطر الأول ف جدول الاستهلاك: الفائدة = 50 000 × 8 % = 4 000؛ استهلاك الرأسمال = 12 522,82 − 4 000 = 8 522,82؛ الرأسمال الباقي = 41 477,18.</div>
<div class="tip">ف كل دفعة: <b>الدفعة = الفائدة + استهلاك الرأسمال</b>. الفوائد كتنقص مع الوقت، والجزء ديال الرأسمال المسدد كيزيد.</div>`,
        en: `<h3>1. Simple interest</h3>
<p>Used for <b>short-term</b> investments and loans (under a year). Interest is computed only on the initial capital.</p>
<span class="f">I = C × t × n &nbsp;&nbsp;&nbsp; (n in years; with days: I = C × t × d / 360)</span>
<span class="f">Future value: A = C + I = C(1 + t·n)</span>
<div class="ex">5,000 MAD invested at 6% for 90 days: I = 5,000 × 0.06 × 90/360 = <b>75 MAD</b>. Future value = 5,075 MAD.</div>
<h3>2. Compound interest</h3>
<p>For the <b>long term</b>: at the end of each period interest is added to the capital and earns interest in turn (<b>compounding</b>).</p>
<span class="f">C<sub>n</sub> = C<sub>0</sub> × (1 + i)<sup>n</sup></span>
{{fig:interets}}
<div class="ex">10,000 MAD at 5% a year for 4 years: C<sub>4</sub> = 10,000 × 1.05<sup>4</sup> ≈ <b>12,155.06 MAD</b>. With simple interest it would be only 12,000.</div>
<h3>3. Present value (discounting)</h3>
<p>Discounting finds today's value of a future sum: the reverse of compounding.</p>
<span class="f">C<sub>0</sub> = C<sub>n</sub> × (1 + i)<sup>−n</sup> = C<sub>n</sub> / (1 + i)<sup>n</sup></span>
<div class="ex">How much to invest today at 6% to have 20,000 MAD in 3 years? C<sub>0</sub> = 20,000 / 1.06³ ≈ <b>16,792.39 MAD</b>.</div>
<h3>4. Equivalent rates</h3>
<p>An annual rate i is equivalent to a monthly rate i<sub>m</sub> such that (1 + i<sub>m</sub>)<sup>12</sup> = 1 + i. The proportional rate (i/12) is used only with simple interest.</p>
<h3>5. Annuities</h3>
<p>A series of <b>equal</b>, <b>regular</b> payments (rent, loan instalments, monthly savings).</p>
{{fig:timeline}}
<span class="f">Future value: V<sub>n</sub> = a × [(1 + i)<sup>n</sup> − 1] / i</span>
<span class="f">Present value: V<sub>0</sub> = a × [1 − (1 + i)<sup>−n</sup>] / i</span>
<div class="ex">You save 1,000 MAD at the end of each year for 5 years at 4%: V<sub>5</sub> = 1,000 × (1.04⁵ − 1)/0.04 ≈ <b>5,416.32 MAD</b>.</div>
<h3>6. Repaying a loan with constant annuities</h3>
<span class="f">a = V<sub>0</sub> × i / [1 − (1 + i)<sup>−n</sup>]</span>
<div class="ex">An auto-entrepreneur borrows 50,000 MAD at 8% over 5 years: a = 50,000 × 0.08 / (1 − 1.08<sup>−5</sup>) ≈ <b>12,522.82 MAD per year</b>. First row of the schedule: interest = 4,000; capital repaid = 8,522.82; remaining capital = 41,477.18.</div>
<div class="tip">In each annuity: <b>annuity = interest + capital repaid</b>. Interest falls over time and the capital share rises.</div>`,
      },
      key: { fr: ['Intérêts simples : I = C·t·n (jours /360).', 'Intérêts composés : Cn = C0(1 + i)ⁿ.', 'Actualiser : C0 = Cn(1 + i)⁻ⁿ.', 'Annuité d’emprunt : a = V0·i / (1 − (1 + i)⁻ⁿ).'], ar: ['الفوائد البسيطة: I = C·t·n (الأيام /360).', 'الفوائد المركبة: Cn = C0(1 + i)ⁿ.', 'التحيين: C0 = Cn(1 + i)⁻ⁿ.', 'دفعة القرض: a = V0·i / (1 − (1 + i)⁻ⁿ).'], en: ['Simple interest: I = C·t·n (days /360).', 'Compound: Cn = C0(1 + i)ⁿ.', 'Discount: C0 = Cn(1 + i)⁻ⁿ.', 'Loan annuity: a = V0·i / (1 − (1 + i)⁻ⁿ).'] } },

    { id: 'mat4', t: { fr: 'Statistiques descriptives', ar: 'الإحصاء الوصفي', en: 'Descriptive statistics' },
      sum: { fr: 'Population, caractère, effectifs, fréquences, moyenne, médiane, mode, écart-type', ar: 'الساكنة، الميزة، التكرارات، النسب، المتوسط، الوسيط، المنوال، الانحراف المعياري', en: 'Population, variable, frequencies, mean, median, mode, standard deviation' },
      body: {
        fr: `<h3>1. Le vocabulaire</h3>
<ul><li><b>Population</b> : l'ensemble étudié (ex. les clients d'une boutique) ; un <b>individu</b> est un élément de cette population.</li>
<li><b>Échantillon</b> : une partie de la population interrogée (ex. 200 clients dans une enquête de satisfaction).</li>
<li><b>Caractère</b> (variable) : ce qu'on observe. <b>Qualitatif</b> (ville, sexe, marque préférée) ou <b>quantitatif</b> : <b>discret</b> (nombre d'achats) ou <b>continu</b> (montant du panier, en classes).</li></ul>
<h3>2. Effectifs et fréquences</h3>
<span class="f">Fréquence f<sub>i</sub> = n<sub>i</sub> / N &nbsp;&nbsp;&nbsp; Σ f<sub>i</sub> = 1 (100 %)</span>
<p>Les <b>effectifs cumulés croissants</b> indiquent combien d'individus ont une valeur inférieure ou égale à une valeur donnée.</p>
<h3>3. Représentations graphiques</h3>
<p>Diagramme en <b>bâtons</b> (variable discrète), <b>histogramme</b> (variable continue en classes), diagramme <b>circulaire</b> (secteurs, pour un caractère qualitatif : angle = f × 360°), <b>courbe</b> (évolution dans le temps).</p>
{{fig:histo}}
<h3>4. Les paramètres de position</h3>
<ul><li><b>Moyenne</b> : x̄ = Σ n<sub>i</sub>x<sub>i</sub> / N (pour des classes, on prend le centre de chaque classe).</li>
<li><b>Médiane</b> : la valeur qui partage la série ordonnée en deux moitiés (50 % en dessous, 50 % au-dessus).</li>
<li><b>Mode</b> : la valeur (ou la classe) la plus fréquente.</li></ul>
<div class="ex">Nombre d'achats en ligne par mois de 10 étudiants : 0, 1, 1, 2, 2, 2, 3, 4, 5, 10.<br>Moyenne = 30/10 = <b>3</b> ; médiane = (2 + 2)/2 = <b>2</b> ; mode = <b>2</b>. La valeur 10 (extrême) tire la moyenne vers le haut : la médiane résiste mieux aux valeurs extrêmes.</div>
<h3>5. Les paramètres de dispersion</h3>
<ul><li><b>Étendue</b> = valeur maximale − valeur minimale.</li>
<li><b>Variance</b> : V = Σ n<sub>i</sub>(x<sub>i</sub> − x̄)² / N = (Σ n<sub>i</sub>x<sub>i</sub>² / N) − x̄².</li>
<li><b>Écart-type</b> : σ = √V. Plus σ est grand, plus les valeurs sont dispersées autour de la moyenne.</li>
<li><b>Coefficient de variation</b> : CV = σ / x̄ (sans unité, pour comparer deux séries).</li></ul>
<div class="ex">Notes : 8, 10, 12, 14, 16. x̄ = 12. Écarts² : 16, 4, 0, 4, 16 → V = 40/5 = 8 ; σ = √8 ≈ <b>2,83</b>.</div>
<h3>6. Statistiques et marketing</h3>
<p>Les études de marché utilisent ces outils : panier moyen, taux de satisfaction, répartition des clients par âge ou par ville, dispersion des prix des concurrents. Un bon tableau ou graphique rend les résultats d'une enquête compréhensibles en un coup d'œil.</p>`,
        ar: `<h3>1. المصطلحات</h3>
<ul><li><b>الساكنة</b>: المجموعة المدروسة (مثلا زبناء متجر)؛ <b>الفرد</b> هو عنصر من هاد الساكنة.</li>
<li><b>العينة</b>: جزء من الساكنة اللي سولناه (مثلا 200 زبون ف بحث على الرضا).</li>
<li><b>الميزة</b> (المتغير): داكشي اللي كنلاحظو. <b>نوعية</b> (المدينة، الجنس، الماركة المفضلة) ولا <b>كمية</b>: <b>منفصلة</b> (عدد المشتريات) ولا <b>متصلة</b> (مبلغ السلة، بالفئات).</li></ul>
<h3>2. التكرارات والنسب</h3>
<span class="f">النسبة f<sub>i</sub> = n<sub>i</sub> / N &nbsp;&nbsp;&nbsp; Σ f<sub>i</sub> = 1 (100 %)</span>
<p><b>التكرارات المتراكمة التصاعدية</b> كتبين شحال من فرد عندو قيمة صغر ولا تساوي قيمة معينة.</p>
<h3>3. التمثيلات المبيانية</h3>
<p>مخطط <b>بالأعمدة</b> (متغير منفصل)، <b>المدرج التكراري</b> (متغير متصل بالفئات)، المخطط <b>الدائري</b> (للميزة النوعية: الزاوية = f × 360°)، <b>المنحنى</b> (التطور ف الزمن).</p>
{{fig:histo}}
<h3>4. مقاييس الموقع</h3>
<ul><li><b>المتوسط الحسابي</b>: x̄ = Σ n<sub>i</sub>x<sub>i</sub> / N (بالنسبة للفئات كناخدو المركز ديال كل فئة).</li>
<li><b>الوسيط</b>: القيمة اللي كتقسم السلسلة المرتبة لجوج نصاص (50 % تحت، 50 % فوق).</li>
<li><b>المنوال</b>: القيمة (ولا الفئة) الأكثر تكرارا.</li></ul>
<div class="ex">عدد المشتريات عبر الأنترنت ف الشهر عند 10 طلبة: 0، 1، 1، 2، 2، 2، 3، 4، 5، 10.<br>المتوسط = 30/10 = <b>3</b>؛ الوسيط = (2 + 2)/2 = <b>2</b>؛ المنوال = <b>2</b>. القيمة 10 (المتطرفة) كتطلع المتوسط: الوسيط كيقاوم أكثر القيم المتطرفة.</div>
<h3>5. مقاييس التشتت</h3>
<ul><li><b>المدى</b> = القيمة الكبرى − القيمة الصغرى.</li>
<li><b>التباين</b>: V = Σ n<sub>i</sub>(x<sub>i</sub> − x̄)² / N = (Σ n<sub>i</sub>x<sub>i</sub>² / N) − x̄².</li>
<li><b>الانحراف المعياري</b>: σ = √V. كلما كبر σ، كلما كانت القيم متشتتة حول المتوسط.</li>
<li><b>معامل الاختلاف</b>: CV = σ / x̄ (بلا وحدة، لمقارنة جوج سلاسل).</li></ul>
<div class="ex">النقط: 8، 10، 12، 14، 16. x̄ = 12. مربعات الفروق: 16، 4، 0، 4، 16 ← V = 40/5 = 8؛ σ = √8 ≈ <b>2,83</b>.</div>
<h3>6. الإحصاء والتسويق</h3>
<p>دراسات السوق كتستعمل هاد الأدوات: السلة المتوسطة، نسبة الرضا، توزيع الزبناء حسب العمر ولا المدينة، تشتت أثمنة المنافسين. جدول ولا مبيان مزيان كيخلي نتائج البحث مفهومة من أول نظرة.</p>`,
        en: `<h3>1. Vocabulary</h3>
<ul><li><b>Population</b>: the whole set studied (e.g. a shop's customers); an <b>individual</b> is one element.</li>
<li><b>Sample</b>: the part of the population surveyed (e.g. 200 customers in a satisfaction survey).</li>
<li><b>Variable</b>: what is observed. <b>Qualitative</b> (city, gender, favourite brand) or <b>quantitative</b>: <b>discrete</b> (number of purchases) or <b>continuous</b> (basket value, in classes).</li></ul>
<h3>2. Frequencies</h3>
<span class="f">Relative frequency f<sub>i</sub> = n<sub>i</sub> / N &nbsp;&nbsp;&nbsp; Σ f<sub>i</sub> = 1 (100%)</span>
<p><b>Cumulative frequencies</b> show how many individuals have a value less than or equal to a given value.</p>
<h3>3. Charts</h3>
<p><b>Bar chart</b> (discrete variable), <b>histogram</b> (continuous variable in classes), <b>pie chart</b> (qualitative variable: angle = f × 360°), <b>line chart</b> (change over time).</p>
{{fig:histo}}
<h3>4. Measures of central tendency</h3>
<ul><li><b>Mean</b>: x̄ = Σ n<sub>i</sub>x<sub>i</sub> / N (for classes, use each class midpoint).</li>
<li><b>Median</b>: the value splitting the ordered data into two halves.</li>
<li><b>Mode</b>: the most frequent value (or class).</li></ul>
<div class="ex">Monthly online purchases of 10 students: 0, 1, 1, 2, 2, 2, 3, 4, 5, 10.<br>Mean = 30/10 = <b>3</b>; median = (2 + 2)/2 = <b>2</b>; mode = <b>2</b>. The extreme value 10 pulls the mean up: the median resists outliers better.</div>
<h3>5. Measures of dispersion</h3>
<ul><li><b>Range</b> = maximum − minimum.</li>
<li><b>Variance</b>: V = Σ n<sub>i</sub>(x<sub>i</sub> − x̄)² / N = (Σ n<sub>i</sub>x<sub>i</sub>² / N) − x̄².</li>
<li><b>Standard deviation</b>: σ = √V. The larger σ, the more spread out the values.</li>
<li><b>Coefficient of variation</b>: CV = σ / x̄ (unit-free, to compare two series).</li></ul>
<div class="ex">Marks: 8, 10, 12, 14, 16. x̄ = 12. Squared deviations: 16, 4, 0, 4, 16 → V = 40/5 = 8; σ = √8 ≈ <b>2.83</b>.</div>
<h3>6. Statistics in marketing</h3>
<p>Market research uses these tools: average basket, satisfaction rate, breakdown of customers by age or city, spread of competitors' prices. A good table or chart makes survey results clear at a glance.</p>`,
      },
      key: { fr: ['Fréquence = effectif / total.', 'Moyenne, médiane (milieu), mode (le plus fréquent).', 'Variance = moyenne des carrés des écarts ; σ = √V.', 'La médiane résiste aux valeurs extrêmes.'], ar: ['النسبة = التكرار / المجموع.', 'المتوسط، الوسيط (الوسط)، المنوال (الأكثر تكرارا).', 'التباين = متوسط مربعات الفروق؛ σ = √V.', 'الوسيط كيقاوم القيم المتطرفة.'], en: ['Frequency = count / total.', 'Mean, median (middle), mode (most frequent).', 'Variance = mean of squared deviations; σ = √V.', 'The median resists outliers.'] } },
  ],
  gloss: [
    ['Taux de variation', 'معدل التغير', 'Rate of change', { fr: '(V1 − V0) / V0 × 100.', ar: '(V1 − V0) / V0 × 100.', en: '(V1 − V0) / V0 × 100.' }],
    ['Coefficient multiplicateur', 'المعامل الضربي', 'Multiplier', { fr: '1 + t/100 pour une hausse, 1 − t/100 pour une baisse.', ar: '1 + t/100 للزيادة، 1 − t/100 للنقصان.', en: '1 + t/100 for a rise, 1 − t/100 for a fall.' }],
    ['Indice', 'المؤشر', 'Index', { fr: 'Valeur rapportée à une base 100.', ar: 'قيمة منسوبة لأساس 100.', en: 'Value relative to a base of 100.' }],
    ['Taux de marge', 'نسبة الهامش', 'Markup rate', { fr: 'Marge / coût d’achat × 100.', ar: 'الهامش / تكلفة الشراء × 100.', en: 'Margin / purchase cost × 100.' }],
    ['Taux de marque', 'نسبة العلامة', 'Margin rate', { fr: 'Marge / prix de vente × 100.', ar: 'الهامش / ثمن البيع × 100.', en: 'Margin / selling price × 100.' }],
    ['Dérivée', 'المشتقة', 'Derivative', { fr: 'Vitesse de variation d’une fonction.', ar: 'سرعة تغير الدالة.', en: 'Rate of change of a function.' }],
    ['Discriminant', 'المميز', 'Discriminant', { fr: 'Δ = b² − 4ac.', ar: 'Δ = b² − 4ac.', en: 'Δ = b² − 4ac.' }],
    ['Intérêts simples', 'الفوائد البسيطة', 'Simple interest', { fr: 'I = C × t × n, calculés sur le seul capital initial.', ar: 'I = C × t × n، كتحسب غير على الرأسمال البدئي.', en: 'I = C × t × n, on the initial capital only.' }],
    ['Intérêts composés', 'الفوائد المركبة', 'Compound interest', { fr: 'Les intérêts s’ajoutent au capital : Cn = C0(1 + i)ⁿ.', ar: 'الفوائد كتزاد للرأسمال: Cn = C0(1 + i)ⁿ.', en: 'Interest is added to capital: Cn = C0(1 + i)ⁿ.' }],
    ['Actualisation', 'التحيين', 'Discounting', { fr: 'Calcul de la valeur aujourd’hui d’une somme future.', ar: 'حساب القيمة ديال اليوم لمبلغ مستقبلي.', en: 'Finding today’s value of a future sum.' }],
    ['Annuité', 'الدفعة', 'Annuity', { fr: 'Versement égal et régulier.', ar: 'أداء متساوي ومنتظم.', en: 'Equal, regular payment.' }],
    ['Médiane', 'الوسيط', 'Median', { fr: 'Valeur qui partage la série en deux moitiés.', ar: 'القيمة اللي كتقسم السلسلة لجوج نصاص.', en: 'Value splitting the data into two halves.' }],
    ['Mode', 'المنوال', 'Mode', { fr: 'Valeur la plus fréquente.', ar: 'القيمة الأكثر تكرارا.', en: 'Most frequent value.' }],
    ['Écart-type', 'الانحراف المعياري', 'Standard deviation', { fr: 'Racine de la variance : mesure de dispersion.', ar: 'جذر التباين: مقياس التشتت.', en: 'Square root of variance: measure of spread.' }],
    ['Échantillon', 'العينة', 'Sample', { fr: 'Partie de la population étudiée.', ar: 'جزء من الساكنة المدروسة.', en: 'Part of the population studied.' }],
  ],
};
