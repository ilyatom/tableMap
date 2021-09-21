//---general
let colors = [
	'e6602b', //горы
	'fcc02e', //холмы
	'fcd971', //равнины
	'aec55d', //низины
];
let flora = [
	'…',			
	'∗∗',
	'♣',
	'♣',
	'∗∗',
	'…',
	'…',
	''
];
//---ruins
let founders = [
	'эльфов',
	'гномов',
	'неизвестного происхождения',
	'варваров',
	'древнего народа',
	'орков',
	'знаменитого мага',
	'легендарного ордена',
	'таинственного культа',
];
let purpose = [
	'Крепость',
	'Блокпост',
	'Замок',
	'Шпиль',
	'Башня',
	'Цитадель',
	'Твердыня',
	'Дворец',
	'Зиккурат',
	'Покои',
	'Храм',
	'Гробница',
	'Сокровищница',
	'Хранилище',
	'Оружейная',			
];
let destructionReason = [
	'войны с внешним противником',
	'гражданской войны',
	'истощения ресурсов',
	'окутанных тайной событий',
	'магии',
	'болезни',
	'стихийного бедствия или пожара',
	'божественного или экстрапланарного вмешательства',
];
// --------'поселения
let first = [
	'Блэк',
	'Грэй',
	'Вайт',
	'Ред',
	'Йеллоу',
	'Грин',
	'Блу',
	'Сент',
	'Литтл',
	'Смол',
	'Гуд',
	'Дарк',
	'Биг',
	'Хьюдж',
	'Ларж',
	'Дип',
	'Вотер',
	'Мун',
	'Сан',
	'Бэй',
	'Найт',
];

let last = [
	'стоун',
	'вилл',
	'таун',
	'порт',
	'холм',
	'хилл',
	'стоун',
	'хоум',
	'форт',
	'касл',
	'маунт',
	'тайм',
	'торн',
	'бридж',
];
let color = [
	'белый',
	'черный',
	'зеленый',
	'красный',
	'синий',
	'голубой',
	'серый',
	'оранжевый',
	'коричневый',
];
let work = [
	'пивоварение',
	'рыбная ловля',
	'охота',
	'добыча золота',
	'добыча серебра',
	'добыча меда',
	'добыча камня',
	'добыча драгоценных камней',    
	'сбор ягод',
	'сбор грибов',
	'сбор трав',
	'кожевенное дело',
	'кузнечное дело',
	'ткацкое дело',
	'изделия из золота',
	'изделия из серебра',
	'изделия из дерева',
	'скотоводство',
	'выращивание ячменя',
	'выращивание овса',
	'выращивание ржи',
	'выращивание пшеницы',
];
let settlementTypes = [
	['Город',1,10],
	['Крепость',11,30],
	['Поселок',31,60],
	['Деревня',61,100],
];
let settlementWealth = [
'Нищее: на продажу нет ничего, никто не имеет больше того, в чём нуждается (и это те, кому повезло). Труд стоит дёшево.',
'Бедное: на продажу есть только предметы первой необходимости. Оружие редкость, если только поселение не является хорошо защищённым или воинственным. Не обученный труд широко доступен.',
'Обычный достаток: доступна большая часть повседневных предметов. Некоторые разновидности умелых работников.',
'Процветающее: любой обычный предмет можно найти на продажу; есть почти все виды умелых рабочих, но они нарасхват.',
'Богатое: обычные предметы и куда больше, если знаешь, где искать. Доступен труд специалистов, но он стоит дорого.',
];
let settlementPopulation = [
'Исход: поселение потеряло большую часть своего населения и находится на грани коллапса.',
'Падение населения: население куда безлюдней, чем было раньше. Есть заброшенные постройки.',
'Стабильность населения: население соответствует размеру поселения, имеется небольшой прирост.',
'Рост населения: в городе куда больше людей, чем жилья.',
'Бум: поселение с трудом справляется с огромным людским потоком.',
];
let settlementDefense = [
'Незащищенное: в качестве защиты есть только крестьяне с дубинками, факелами и вилами.',
'Ополчение: способные мужчины и женщины с изношенным оружием, готовые ответить на зов, но нет постоянной стражи.',
'Дозор: на страже поселения есть несколько дозорных, высматривающих опасность и решающих мелкие вопросы, но их основная роль — вызов ополчения. ',
'Стража: поселение охраняют постоянные вооружённые защитники числом до 100 человек и хотя бы один вооружённый патруль.',
'Гарнизон: постоянные вооружённые защитники числом 100–300. Поселение охраняет несколько вооружённых патрулей.',
'Батальон: до 1000 вооружённых воинов и хорошие укрепления.',
'Легион: поселение защищают тысячи вооружённых солдат (или эквивалент). Защитные укрепления поселения внушают ужас врагам.',
];
let settlementSpecialGeneral = [
'Безопасность: проблемы не касаются этого места, пока игроки не принесут их. Идиллические и укромные, эти поселения теряют безопасность вместо потери или падения другого положительного свойства.',
'Вера: поселение особенно почитает указанного бога.',
'Редкость: поселение предлагает товары и услуги, недоступные нигде в округе. Укажите их.',
'Ресурс: у поселения лёгкий доступ к указанному ресурсу (специи, вид руды, рыба, виноград и т.д.). Этот ресурс стоит здесь заметно дешевле.',
'Нужда: поселение испытывает острую или постоянную нужду в указанном ресурсе. Ресурс продаётся здесь куда дороже.',
'Торговля: поселение регулярно торгует с указанными поселениями.',
'Рынок: сюда стекаются торговцы со всей округи. В любой день выставленные на продажу предметы могут быть куда лучше, чем показывает достаток поселения. +1 к пополнению запасов.',
'Вражда: поселение затаило злобу против указанных поселений.',
'Прошлое: здесь произошло что-то важное. Выберите одно и опишите или придумайте своё: сражение, чудо, миф, любовь, трагедия.',
'Волшебное: кто-то в городе способен применять волшебные заклинания за плату. Это привлекает и других волшебников. +1 к вербовке, когда вы пытаетесь нанять адепта.',
'Религиозное: в поселении сильно присутствие религии, возможно даже есть собор или монастырь. Священники могут исцелять раны и, может быть, даже воскрешать мёртвых за пожертвования или выполнение задания.',
'Гильдия: в городе широко представлена (и обычно имеет вес) указанная гильдия. Если гильдия тесно связана с видом наёмников, возьмите +1 при их найме.',
'Личность: в поселении живёт примечательный человек. Дайте ему имя и опишите, что делает его известным.',
'Гномье: всё население или его большую часть составляют гномы. Гномьи товары более распространены и стоят дешевле, чем обычно.',
'Эльфийское: всё или почти всё население составляют эльфы. Эльфийские товары более распространены и стоят дешевле обычного.',
'Ремесло: поселение известно мастерами указанного ремесла. Предметы этого ремесла куда доступнее или более высокого свойства, чем в любом другом поселении в округе.',
'Беззаконие: преступность свирепствует, власти разводят руками.',
'Беда: поселение испытывает постоянные проблемы, обычно связаны с какой-либо из разновидностей чудовищ.',
'Могущество: поселение пользуется влиянием определённого рода — политическим, волшебным или религиозным.',
];
let citySpecialBase = [
'Рынок: сюда стекаются торговцы со всей округи. В любой день выставленные на продажу предметы могут быть куда лучше, чем показывает достаток поселения. +1 к пополнению запасов.',
'Гильдия: в городе широко представлена (и обычно имеет вес) указанная гильдия. Если гильдия тесно связана с видом наёмников, возьмите +1 при их найме.',
// 'Имеет верность как минимум с двумя другими поселениями, обычно посёлком и крепостью.',
];
let citySpecialGood = [
'Город защищён долговечными укреплениями, такими как крепостные стены: +оборона, верность (по вашему выбору).',
'Городом руководит единоличный правитель: личность (правитель), власть (политическая).',
'Город многообразен: гномий, эльфийский или оба.',
'Город — центр торговли: торговля (близкие поселения), +достаток.',
'Город является древним, возведённым на собственных руинах: прошлое (на ваш выбор), религиозный.',
'Город является образовательным центром: волшебный, ремесло (ваш выбор), могущество (волшебное).',
];
let citySpecialBad = [
'Город перерос собственные ресурсы: +население, нужда (еда).',
'Город имеет планы на соседнюю территорию: враг (поселения по соседству), +оборона.',
'Городом руководит теократия: –оборона, власть (религиозная).',
'Городом правит народ: –оборона, +население.',
'Город защищают сверхъестественные силы: +оборона, беда (сверхъестественные создания).',
'Город расположен в месте силы: волшебный, личность (хранитель места силы), беда (сверхъестественные создания).',
];
let fortSpecialBase = [
'Торговля: поселение регулярно торгует с указанными поселениями.',
//'Верность: поселение принесло клятву указанным поселениям. Обычно это клятва верности или обещание защиты, но бывает и конкретнее.',
'Нужда (снабжение): поселение испытывает острую или постоянную нужду в указанном ресурсе. Ресурс продаётся здесь куда дороже.',
];
let fortSpecialGood = [
'Крепость принадлежит роду аристократов: +достаток, могущество (политическое).',
'Крепостью руководит опытный лидер: личность (лидер), +оборона.',
'Крепость охраняет торговый путь: +достаток, гильдия (торговая).',
'В крепости тренируются спецвойска: волшебная, –население.',
'Крепость окружена чернозёмом: –нужда (снабжение).',
'Крепость на границе: +оборона, вражда (поселение по ту сторону).',
];
let fortSpecialBad = [
'Крепость возведена в выгодном месте: безопасная, –население.',
'Крепость была захвачена у другого государства: вражда (поселения другого государства).',
'Крепость является прибежищем разбойников: беззаконие.',
'Крепость построена для зашиты от некой угрозы: беда (угроза).',
'Крепость была местом бойни: прошлое (битва), беда (злые духи).',
'В крепости служат худшие из худших: нужда (опытные рекруты).',
];
let townSpecialBase = [
'Торговля: поселение регулярно торгует с указанными поселениями.',
];
let townSpecialGood = [
'Посёлок разросся: бум, беззаконие.',
'Посёлок построен на перекрёстке: рынок, +достаток.',
//'Другое поселение защищает посёлок: верность (другое поселение), +оборона.',
'Посёлок построен вокруг церкви: могущество (религиозное).',
'Посёлок славится своими ремесленниками: ремесло (ваш выбор), ресурс (нечто связанное с выбранным ремеслом).',
'Посёлок построен вокруг военного поста: +оборона.',
];
let townSpecialBad = [
'Посёлок перерос собственные ресурсы (как зерно, дерево или камень): нужда (ресурс), торговля (деревня или другой посёлок, обладающие этим ресурсом).',
'Посёлок даёт защиту другим: верность (ваш выбор), -оборона.',
'Посёлок известен преступником, по слухам, живущим в нём: личность (преступник), вражда (поселения, где были совершены преступления).',
'Посёлок монополизировал поставку товаров или услуг: редкость (товар или услуга), вражда (амбициозное поселение).',
'Посёлок страдает от болезни: -население.',
'Посёлок — известное местом встречи: +население, беззаконие.',
];
let villageSpecialBase = [
'Ресурс: у поселения лёгкий доступ к указанному ресурсу (специи, вид руды, рыба, виноград и т.д.). Этот ресурс стоит здесь заметно дешевле.',
//'Верность: поселение принесло клятву указанным поселениям. Обычно это клятва верности или обещание защиты, но бывает и конкретнее.',
];
let villageSpecialGood = [
'Деревня расположена в защищённом ландшафтом месте: безопасность, -оборона.',
'Деревня существует за счёт богатых природных ресурсов: +достаток, ресурс (на ваш выбор), вражда (на ваш выбор).',
//'Деревня находится под защитой другого поселения: верность (другое поселение), +оборона.',
'Деревня расположена на значимой дороге: торговля (ваш выбор), +достаток.',
'Деревня построена вокруг башни волшебника: личность (волшебник), беда (волшебные создания).',
'Деревня была построена на месте религиозного значения: религиозное, прошлое (ваш выбор).',
];
let villageSpecialBad = [
'Деревня находится в сухой или непригодной для земледелия местности: нужда (еда).',
'Деревня посвящена божеству: вера (божество), вражда (поселение, поклоняющееся другому богу).',
'Деревня недавно участвовала в бою: -население; -достаток, если они сражались до самого конца; -оборона, если они проиграли.',
'Деревня испытывает проблемы с монстрами: беда (чудовища), нужда (искатели приключений).',
'Деревня поглотила другую деревню: +население, беззаконие.',
'Деревня находится в отдалённой местности или неприветлива: -достаток, гномья или эльфийская.',
];

//-------------------лидеры-------------------

let leadersProffessions = [
	['Бандит',1,20],
	['Воин',21,40],
	['Аристократ',41,60],
	['Общественный деятель',61,80],
	['Торговец',81,100],
	['Мудрец',101,110],
	['Священник',111,120],
	['Волшебник',121,130],
	['Нечеловек (эльф, гном, орк и т.д.)',131,135],
];

let leadersMeans = [
'власть сильного',
'круг приближенных',
'харизму',
'богатство',
'былые заслуги',
'связи',
'дипломатию или интриги',
];

let leadersPurposes = [
'получить доступ к ресурсу',
'расширить политическое влияние',
'получить больше земель',
'захватить конкретное место',
'разбогатеть',
'наладить или укрепить связь с важным лицом',
'улучшить жизнь своих людей',
'отгородиться от угроз',
];

let leadersDisadvantages = [
'любовь или родственные связи',
'болезнь или старость',
'страшная тайна или грехи прошлого',
'импульсивность или тайная страсть',
'неудобные обязательства или старый долг',
];