export interface ObjectsData<T> {
	[objectName: string]: T;
}

export interface ObjectListData {
	imagePath?: string;
	projectName?: string;
	industry?: string;
	sections?: string;
	square?: string;
	completionYear?: string;
	description?: string;
}

export const objectsData: ObjectsData<ObjectListData[]> = {
	design: [
		{
			imagePath: 'assets/objects/design/sudokhol.png',
			projectName: 'Морской порт «Суходол» (Владивосток)',
			industry: 'транспортная инфраструктура',
			sections:
				'системы связи, телекоммуникационная инфраструктура, построение ведомственных ИТ-систем',
			completionYear: '2024',
			description:
				'Пропускная способность нового терминала, оснащенного самым современным оборудованием для проведения контрольных процедур на границе, составляет 12 млн. тонн угля в год (234 судозахода в год).',
		},
		{
			imagePath: 'assets/objects/design/orenburg.png',
			projectName: 'Аэропорт Оренбург',
			industry: 'транспортная инфраструктура',
			sections:
				'системы связи, в том числе с использованием средств защиты информации, системы безопасности, телекоммуникационная инфраструктура, построение ведомственных ИТ-систем государственных органов',
			completionYear: '2023',
			description:
				'Прогнозируемый годовой объем перевозок составляет 989 570 пассажиров в год, в том числе на внутренних воздушных линиях – 653 116 пассажиров и 336 454 – на международных. Проект получил положительное заключение Главгосэкспертизы России.',
		},
		{
			imagePath: 'assets/objects/design/sakhalin.png',
			projectName: 'Морские порты Сахалина (Холмск, Корсаков, Невельск)',
			industry: 'транспортная инфраструктура',
			sections:
				'системы связи, в том числе с использованием средств защиты информации, системы безопасности, телекоммуникационная инфраструктура, построение ведомственных ИТ-систем государственных контрольных органов.',
			completionYear: '2023',
			description: '',
		},
		{
			imagePath: 'assets/objects/design/novokuznetsk.png',
			projectName: 'Аэропорт Новокузнецк',
			industry: 'транспортная инфраструктура',
			sections:
				'системы связи, в том числе с использованием средств защиты информации, системы безопасности, телекоммуникационная инфраструктура, построение ведомственных ИТ-систем государственных контрольных органов.',
			completionYear: '2023',
			description:
				'Новый терминала аэропорт Новокузнецка сможет принимать до 580 пассажиров в час, а годовой объём пассажирских перевозок возрастёт до 311 300. \nПроект получил положительное заключение Главгосэкспертизы России',
		},
		{
			imagePath: 'assets/objects/design/grozny.png',
			projectName: 'Аэропорт Грозный (Северный)',
			industry: 'транспортная инфраструктура',
			sections:
				'системы связи, в том числе с использованием средств защиты информации, системы безопасности, телекоммуникационная инфраструктура, построение ведомственных ИТ-систем государственных контрольных органов.',
			completionYear: '2023',
			description:
				'Расчётный объём пассажирских перевозок — 1 181 295 пассажиров в год, пропускная способность составит 1000 пассажиров в час, в том числе 600 пассажиров в час на внутренних воздушных линиях и 400 — на международных. \n Проект получил положительное заключение Главгосэкспертизы России',
		},
		{
			imagePath: 'assets/objects/design/norilsk.png',
			projectName: 'Аэропорт Норильск (Алыкель)',
			industry: 'транспортная инфраструктура',
			sections: 'генеральный проектировщик',
			completionYear: '2023',
			description:
				'Пассажиропоток составляет 500 000 человек в год и имеет ярко выраженную сезонность: 60% годового пассажиропотока проходит в период отпусков — с апреля по сентябрь.',
		},
		{
			imagePath: 'assets/objects/design/krasnodar.png',
			projectName: 'Аэропорт Краснодар (Пашковский)',
			industry: 'транспортная инфраструктура',
			sections:
				'системы связи, в том числе с использованием средств защиты информации, системы безопасности, телекоммуникационная инфраструктура, построение ведомственных ИТ-систем государственных контрольных органов.',
			completionYear: '2022',
			description:
				'Строительство нового аэровокзала и развитие аэродромной инфраструктуры позволят увеличить пассажиропоток до 7 545 000 человек. Пропускная способность составит 3 200 пассажиров в час, в том числе 2 000 на внутренних воздушных линиях и 1 200 – на международных. Расчетные показатели учитывают перспективы развития краснодарского аэропорта к 2033 году. \n Проект получил положительное заключение Главгосэкспертизы России',
		},
		{
			imagePath: 'assets/objects/design/blagoveshchensk.png',
			projectName: 'Аэропорт Благовещенск (Игнатьево), Новый терминал',
			industry: 'транспортная инфраструктура',
			sections:
				'системы связи, в том числе с использованием средств защиты информации, системы безопасности, телекоммуникационная инфраструктура, построение ведомственных ИТ-систем государственных контрольных органов.',
			completionYear: '2022',
			description:
				'Пропускная способность терминала рассчитана на обслуживание 600 пассажиров в час на внутренних авиалиниях и 400 пассажиров в час — на международных. \n Проект получил положительное заключение Главгосэкспертизы России',
		},
		{
			imagePath: 'assets/objects/design/ekaterinburg.png',
			projectName: 'Аэропорт Екатеринбург (Кольцово)',
			industry: 'транспортная инфраструктура',
			sections:
				'системы связи, в том числе с использованием средств защиты информации, системы безопасности, телекоммуникационная инфраструктура, построение ведомственных ИТ-систем государственных контрольных органов.',
			completionYear: '2021',
			description:
				'Реконструкция аэровокзального комплекса позволила увеличить годовой пассажиропоток МВЛ до 2 205 000 человек. Пропускная способность составила 2 200 пассажиров в час. Расчетные показатели учитывают перспективы развития аэропорта Кольцово к 2028 года. \n Проект получил положительное заключение Главгосэкспертизы России',
		},
		{
			imagePath: 'assets/objects/design/tyumen.png',
			projectName: 'Аэропорт Тюмень (Рощино)',
			industry: 'транспортная инфраструктура',
			sections:
				'системы связи, в том числе с использованием средств защиты информации, системы безопасности, телекоммуникационная инфраструктура, построение ведомственных ИТ-систем государственных контрольных органов.',
			completionYear: '2021',
			description:
				'Пропускная способность вырастет до 1 900 пасс./час, а общий годовой объем – до 3 800 000 пасс./год.',
		},
		{
			imagePath: 'assets/objects/design/volgograd.png',
			projectName: 'Аэропорт Волгоград (Гумрак)',
			industry: 'транспортная инфраструктура',
			sections:
				'системы связи, в том числе с использованием средств защиты информации, системы безопасности, телекоммуникационная инфраструктура, построение ведомственных ИТ-систем государственных контрольных органов.',
			completionYear: '2019',
			description:
				'В 2023 году международный аэропорт Волгограда обслужил рекордное количество пассажиров - пассажиропоток аэропорта составил 1 571 246 человек.',
		},
		{
			imagePath: 'assets/objects/design/khabarovsk.png',
			projectName: 'Аэропорт Хабаровск (Новый), Международный терминал',
			industry: 'транспортная инфраструктура',
			sections:
				'системы связи, в том числе с использованием средств защиты информации, системы безопасности, телекоммуникационная инфраструктура, построение ведомственных ИТ-систем государственных контрольных органов.',
			completionYear: '2019',
			description:
				'Площадь нового терминала МВЛ составит 20 тыс. кв. м, пропускная способность составит около 1 миллиона пассажиров в год. \n Проект получил положительное заключение Главгосэкспертизы России.',
		},
		{
			imagePath: 'assets/objects/design/domodedovo.png',
			projectName: 'Аэропорт Домодедово (Терминал-2)',
			industry: 'транспортная инфраструктура',
			sections:
				'системы связи, в том числе с использованием средств защиты информации, системы безопасности, телекоммуникационная инфраструктура, построение ведомственных ИТ-систем государственных контрольных органов.',
			completionYear: '2017',
			description:
				'Расчетный пассажиропоток после первого этапа сдачи терминала составил 5,7 млн пассажиров в год, после второго этапа — 12 млн. \n Проект получил положительное заключение Главгосэкспертизы России',
		},
		{
			imagePath: 'assets/objects/design/syktyvkar.png',
			projectName: 'Аэропорт Сыктывкар',
			industry: 'транспортная инфраструктура',
			sections:
				'системы связи, в том числе с использованием средств защиты информации, системы безопасности, телекоммуникационная инфраструктура, построение ведомственных ИТ-систем государственных контрольных органов.',
			completionYear: '2016',
			description:
				'Пассажиропоток аэропорта Сыктывкара достиг в 2023 году 500 000 человек, обслужено порядка 3 500 рейсов.',
		},
		{
			imagePath: 'assets/objects/design/chelyabinsk.png',
			projectName:
				'Аэропорт Челябинск (Баландино), Международный терминал',
			industry: 'транспортная инфраструктура',
			sections:
				'системы связи, в том числе с использованием средств защиты информации, системы безопасности, телекоммуникационная инфраструктура, построение ведомственных ИТ-систем государственных контрольных органов.',
			completionYear: '2018',
			description:
				'Пропускная способность нового международного терминала — 400 пассажиров в час.',
		},
		{
			imagePath: 'assets/objects/design/yuzhno-sakhalinsk.png',
			projectName: 'Аэропорт Южно-Сахалинск (Хомутово)',
			industry: 'транспортная инфраструктура',
			sections:
				'системы связи, в том числе с использованием средств защиты информации, системы безопасности, телекоммуникационная инфраструктура, построение ведомственных ИТ-систем государственных контрольных органов.',
			completionYear: '2023',
			description:
				'Новые расчетные показатели аэровокзала учитывают поэтапное развитие аэропорта Южно-Сахалинска в перспективе до 2033 года. Максимальная пропускная способность сектора внутренних воздушных линий на расчетный год составит 1 000 пассажиров в час. На международных линиях – 600 пассажиров в час, в том числе 300 на вылет и 300 на прилет.',
		},
	],
	building: [
		{
			imagePath: 'assets/objects/building/saransk.png',
			projectName:
				'Аэропорт Саранск, Международный терминал (Республика Мордовия)',
			industry: 'транспортная инфраструктура',
			square: '3 979,2 м2 (капитальный ремонт и модернизация)',
			completionYear: '2023',
			description:
				'Разработана проектная документация, в рамках технического оснащения пункта пропуска проведены работы по установке и настройке высокотехнологичных интеллектуальных систем пограничного и таможенного контроля, оперативного теленаблюдения, контроля и управления доступом и другим современным оборудованием в интересах государственных контрольных органов. \n Модернизировано существующее здание Международного терминала аэропорта Саранск общей площадью 3 195 м2 и пропускной способностью — 140 пасс/час.',
		},
		{
			imagePath: 'assets/objects/building/kyzyl.png',
			projectName:
				'Аэропорт Кызыл, Международный сектор (Республика Тыва)',
			industry: 'транспортная инфраструктура',
			square: '2 407,33 м2 (капитальный ремонт)',
			completionYear: '2023',
			description:
				'Разработка проектной документации на приспособление помещений для осуществления контроля пассажиров и размещения государственных контрольных органов, разработка проектной документации на техническое оснащение пункта пропуска, прохождение экспертизы сметной стоимости, проведение строительно-монтажных и пусконаладочных работ, ввод объекта в эксплуатацию. /n В 2023 году главный аэропорт Тувы обслужил более 110 900 пассажиров.',
		},
		{
			imagePath: 'assets/objects/building/saint-petersburg.png',
			projectName:
				'Морской Пассажирский порт Санкт-Петербург «Морской Фасад», Международный грузовой паромный терминал',
			industry: 'транспортная инфраструктура',
			square: '14 880 м2 (реконструкция)',
			completionYear: '2020',
			description:
				'Комплекс работ по строительству и реконструкции, техническому перевооружению, обустройству и вводу в эксплуатацию, направленный на увеличение пропускной способности пункта пропуска, выполненный в интересах государственных контрольных органов. /n Пассажиропоток (расчётный): 1 004 000 чел./год. Количество судозаходов (расчётное): 726 ед./год.',
		},
		{
			imagePath: 'assets/objects/building/ulyanovsk.png',
			projectName:
				'Аэропорт Ульяновск (Баратаевка), Международный сектор',
			industry: 'транспортная инфраструктура',
			square: '6 305,24 м2 (капитальный ремонт)',
			completionYear: '2017',
			description:
				'Подготовка и оборудование помещений в интересах служб государственных контрольных органов в здании АВК. \n Пропускная способность аэровокзального комплекса — 240 пассажиров в час.',
		},
	],
	technicalEquipment: [
		{
			imagePath: 'assets/objects/technical-equipment/tobolsk.png',
			projectName: 'Аэропорт Тобольск (Ремезов)',
			industry: 'транспортная инфраструктура',
			sections:
				'Разделы: системы связи, в том числе с использованием средств защиты информации, системы безопасности, телекоммуникационная инфраструктура, построение ведомственных ИТ-систем государственных контрольных органов.',
			completionYear: '2023',
			description:
				'Пропускная способность аэропорта 380 пассажиров в час.',
		},
		{
			imagePath: 'assets/objects/technical-equipment/novosibirsk.png',
			projectName: 'Аэропорт Новосибирск (Толмачево)',
			industry: 'транспортная инфраструктура',
			sections:
				'Разделы: системы связи, в том числе с использованием средств защиты информации, системы безопасности, телекоммуникационная инфраструктура, построение ведомственных ИТ-систем государственных контрольных органов.',
			completionYear: '2023',
			description:
				'Современный аэровокзальный комплекс Международного аэропорта Новосибирск (Толмачёво) им. А.И.Покрышкина способен обслуживать 1800 пассажиров в час на внутренних авиалиниях и 1300 — на международных. ',
		},
		{
			imagePath: 'assets/objects/technical-equipment/sabetta.png',
			projectName: 'Морской порт Сабетта, Терминал Утренний',
			industry: 'транспортная инфраструктура',
			sections:
				'Разделы: системы связи, в том числе с использованием средств защиты информации, системы безопасности, телекоммуникационная инфраструктура, построение ведомственных ИТ-систем государственных контрольных органов.',
			completionYear: '2023',
			description:
				'Терминал «Утренний» введён в эксплуатацию в первом полугодии 2023 года. Он позволит увеличить отгрузку углеводородов в объёме 21,6 млн тонн в год в рамках освоения месторождения проекта «Арктик СПГ 2», который предусматривает строительство трёх технологических линий по производству СПГ общей мощностью 19,8 млн тонн в год и стабильного газового конденсата до 1,6 млн тонн в год.',
		},
		{
			imagePath: 'assets/objects/technical-equipment/anapa.png',
			projectName: 'Аэропорт Анапа (Витязево), Международный терминал',
			industry: 'транспортная инфраструктура',
			sections:
				'Разделы: системы связи, в том числе с использованием средств защиты информации, системы безопасности, телекоммуникационная инфраструктура, построение ведомственных ИТ-систем государственных контрольных органов.',
			completionYear: '2022',
			description:
				'Пропускная способность модернизированного международного терминала увеличится почти втрое и составит до 160 пассажиров в час.',
		},
		{
			imagePath: 'assets/objects/technical-equipment/krasnoyarsk.png',
			projectName: 'Аэропорт Красноярск (Емельяново)',
			industry: 'транспортная инфраструктура',
			sections:
				'Разделы: системы связи, в том числе с использованием средств защиты информации, системы безопасности, телекоммуникационная инфраструктура, построение ведомственных ИТ-систем государственных контрольных органов.',
			completionYear: '2021',
			description:
				'Аэровокзальный комплекс: Пассажирский (Т1) и Деловой терминалы (Т2) с пропускной способностью 1 300 пассажиров в час на отправление, общая площадь более 58 000 м2.',
		},
		{
			imagePath: 'assets/objects/technical-equipment/blagoveshchensk.png',
			projectName: 'Аэропорт Благовещенск (Игнатьево)',
			industry: 'транспортная инфраструктура',
			sections:
				'Разделы: системы связи, в том числе с использованием средств защиты информации, системы безопасности, телекоммуникационная инфраструктура, построение ведомственных ИТ-систем государственных контрольных органов.',
			completionYear: '2021',
			description:
				'Пассажиропоток в Международном аэропорту Благовещенск им. Н.Н. Муравьева-Амурского по итогам 2023 года превысил 914 000 человек.',
		},
		{
			imagePath: 'assets/objects/technical-equipment/ultramar.png',
			projectName:
				'Многофункциональный морской перегрузочный терминал «Ультрамар» (Ленинградская область)',
			industry: 'транспортная инфраструктура',
			sections:
				'Разделы: системы связи, в том числе с использованием средств защиты информации, системы безопасности, телекоммуникационная инфраструктура, построение ведомственных ИТ-систем государственных контрольных органов.',
			completionYear: '2020',
			description:
				'«Ультрамар» – многофункциональный морской перегрузочный терминал в северной части порта Усть-Луга в Ленинградской области, специализирующийся на хранении и перевалке минеральных удобрений, рудно-металлургической продукции, угля, прочих насыпных и генеральных грузов. Мощность терминала: 20 млн тонн/год.',
		},
		{
			imagePath: 'assets/objects/technical-equipment/petrovsky.png',
			projectName: 'Стадион «Петровский» (Санкт-Петербург)',
			industry: 'спортивные сооружения',
			sections: 'строительство комплексной системы безопасности.',
			completionYear: '2019',
			description:
				'«Петровский» (до 1992 года — Стадион имени В. И. Ленина) — стадион, расположенный в Санкт-Петербурге, на Петровском острове Малой Невы. Зрительские трибуны вмещают 20 985 человек.',
		},
		{
			imagePath: 'assets/objects/technical-equipment/mineral-waters.png',
			projectName: 'Аэропорт Минеральные Воды (Ставропольский край)',
			industry: 'транспортная инфраструктура',
			sections:
				'Разделы: системы связи, в том числе с использованием средств защиты информации, системы безопасности, телекоммуникационная инфраструктура, построение ведомственных ИТ-систем государственных контрольных органов.',
			completionYear: '2018',
			description:
				'Пропускная способность ВВЛ - 1 050 пасс/час и МВЛ – 450 пасс/час.',
		},
		{
			imagePath: 'assets/objects/technical-equipment/vanino.png',
			projectName: 'Морской порт Ванино (Хабаровский край)',
			industry: 'транспортная инфраструктура',
			sections:
				'Разделы: системы связи, в том числе с использованием средств защиты информации, системы безопасности, телекоммуникационная инфраструктура, построение ведомственных ИТ-систем государственных контрольных органов.',
			completionYear: '2018',
			description:
				'Порт Ванино вошёл в первую десятку портов РФ по перевалке грузов с грузооборотом 31,3 млн тонн/год.',
		},
		{
			imagePath: 'assets/objects/technical-equipment/murmansk.png',
			projectName: 'Морской порт Мурманск',
			industry: 'транспортная инфраструктура',
			sections:
				'Разделы: системы связи, в том числе с использованием средств защиты информации, системы безопасности, телекоммуникационная инфраструктура, построение ведомственных ИТ-систем государственных контрольных органов.',
			completionYear: '2018',
			description:
				'Пропускная способность грузового морского терминала 1 200 тыс. тонн в год.',
		},
		{
			imagePath: 'assets/objects/technical-equipment/vysotsky.png',
			projectName:
				'Терминал по производству и перегрузке сжиженного газа в порту Высоцк',
			industry: 'транспортная инфраструктура',
			sections:
				'Разделы: системы связи, в том числе с использованием средств защиты информации, системы безопасности, телекоммуникационная инфраструктура',
			completionYear: '2018',
			description:
				'Производительность специализированного терминал для производства и перегрузки СПГ в порту Высоцк — 660 тыс. тонн СПГ в год.',
		},
		{
			imagePath: 'assets/objects/technical-equipment/sheremetyevo.png',
			projectName: 'Аэропорт Шереметьево (Терминалы В и С)',
			industry: 'транспортная инфраструктура',
			sections:
				'Разделы: системы связи, в том числе с использованием средств защиты информации, системы безопасности, телекоммуникационная инфраструктура',
			completionYear: '2017',
			description:
				'Международный аэропорт Шереметьево — крупнейший международный аэропорт России по объёмам пассажирских и грузовых перевозок, входит в ТОП-5 самых крупных аэропортов-хабов Европы. Пропускная способность Терминалов В и С по 20 млн пассажиров в год каждый.',
		},
		{
			imagePath: 'assets/objects/technical-equipment/sabetta-port.png',
			projectName: 'Аэропорт и морской порт Сабетта',
			industry: 'транспортная инфраструктура',
			sections:
				'Разделы: системы связи, в том числе с использованием средств защиты информации, системы безопасности, телекоммуникационная инфраструктура, построение ведомственных ИТ-систем государственных контрольных органов.',
			completionYear: '2017',
			description:
				'Пропускная способность аэропорта — 200 пассажиров в час, включая международный сектор — 50 пассажиров в час. \n Пропускная способность грузовых терминалов порта 30 317,8 тыс.тонн/год.',
		},
	],
	constructionControl: [
		{
			imagePath: 'assets/objects/construction-control/domodedovo.png',
			projectName:
				'Аэропорт Домодедово. Новый сегмент пассажирского терминала Т2',
			industry: 'транспортная инфраструктура',
			completionYear: '2024',
		},
	],
	maintenanceService: [
		{
			imagePath: 'assets/objects/maintenance-service/chp.png',
			projectName: 'Юго-Западная ТЭЦ (Санкт-Петербург)',
			industry: 'объекты энергетического комплекса',
			completionYear: '2020, 2022, 2023, 2024',
		},
		{
			imagePath:
				'assets/objects/maintenance-service/admiralty-shipyards.png',
			projectName: 'Адмиралтейские верфи (Санкт-Петербург)',
			industry: 'промышленные предприятия',
			completionYear: '2019',
		},
		{
			imagePath: 'assets/objects/maintenance-service/kirovsky-zavod.png',
			projectName: 'Кировский завод (Санкт-Петербург)',
			industry: 'промышленные предприятия',
			completionYear: '2017-2024',
		},
		{
			imagePath: 'assets/objects/maintenance-service/shatura-gres.png',
			projectName: 'Шатурская ГРЭС, филиал «ЮНИПРО» (Московская область)',
			industry: 'объекты энергетического комплекса',
			completionYear: '2017, 2020, 2023, 2024',
		},
		{
			imagePath:
				'assets/objects/maintenance-service/kirov-energomash.png',
			projectName: 'Завод «Киров-Энергомаш»',
			industry: 'промышленные предприятия',
			completionYear: '2017-2024',
		},
	],
};
