const STORAGE_KEY = "archiloft-romi-dashboard-v2";
const MANAGER_OVERRIDES_KEY = "archiloft-manager-overrides-v1";
const MANUAL_AD_KEY = "archiloft-manual-ad-v1";
const MANUAL_FINANCE_KEY = "archiloft-manual-finance-v1";

const financeData = window.ARCHILOFT_FINANCE_DATA || {
  monthly: [],
  yearly: [],
  events: [],
  event_types: [],
  ad_lines: [],
  ad_breakdown: [],
  ad_by_year: [],
  equipment_assets: [],
  equipment_monthly: [],
  equipment_summary: [],
  equipment_transactions: [],
  amortization_yearly: [],
  amo_summary: [],
  amo_note: ""
};
const crmData = {
  "summary": {
    "Потратили всего, ₽": 105292.87,
    "Лиды Calltouch": 82.0,
    "Сделки CRM": 133.0,
    "Квал. лиды CRM": 121.0,
    "Звонки CRM (Манго)": 41.0,
    "В работе": 38.0,
    "Закрыто": 95.0,
    "КП / предложение": 32.0,
    "Встреча назначена": 1.0,
    "Просмотр площадки / встреча проведена": 4.0,
    "Договоры": 0.0,
    "Предоплаты/оплаты": 0.0,
    "Брони": 0.0,
    "Реализованные мероприятия": 0.0,
    "Выручка Calltouch, ₽": 26240240.0,
    "Бюджет сделок CRM, ₽": 26680240.0,
    "Потенц. прибыль, ₽": 26574947.13
  },
  "channel_total": {
    "channel": "ИТОГО",
    "description": "",
    "category": "",
    "spend": 105292.87,
    "crm_deals": 133,
    "qualified_leads": 121,
    "mango_calls": 41,
    "in_work": 38,
    "closed": 95,
    "proposal": 32,
    "meeting": 4,
    "crm_budget": 26680240.0,
    "cpl": 870.19,
    "deal_cost": 791.68,
    "profit": 26574947.13,
    "fact": "CRM бюджет = потенциальная выручка, не факт оплаты",
    "romi": 25239.07566580719
  },
  "channels": [
    {
      "channel": "яндекс директ / cpc",
      "description": "платная реклама / Промо групп",
      "category": "платная реклама",
      "spend": 105292.87,
      "crm_deals": 14,
      "qualified_leads": 14,
      "mango_calls": 8,
      "in_work": 3,
      "closed": 11,
      "proposal": 3,
      "meeting": 0,
      "crm_budget": 3110000.0,
      "cpl": 7520.92,
      "deal_cost": 7520.92,
      "profit": 3004707.13,
      "fact": "договоров/предоплат в выгрузке нет",
      "romi": 2853.6662833865203
    },
    {
      "channel": "Ищу площадку (холодный поиск)",
      "description": "мы сами нашли / холодный поиск",
      "category": "холодный поиск",
      "spend": 0.0,
      "crm_deals": 5,
      "qualified_leads": 5,
      "mango_calls": 0,
      "in_work": 5,
      "closed": 0,
      "proposal": 5,
      "meeting": 0,
      "crm_budget": 3000000.0,
      "cpl": 0.0,
      "deal_cost": 0.0,
      "profit": 3000000.0,
      "fact": "договоров/предоплат в выгрузке нет",
      "romi": null
    },
    {
      "channel": "organic",
      "description": "бесплатный ресурс / органика",
      "category": "органика",
      "spend": 0.0,
      "crm_deals": 16,
      "qualified_leads": 16,
      "mango_calls": 8,
      "in_work": 4,
      "closed": 12,
      "proposal": 3,
      "meeting": 1,
      "crm_budget": 2970000.0,
      "cpl": 0.0,
      "deal_cost": 0.0,
      "profit": 2970000.0,
      "fact": "договоров/предоплат в выгрузке нет",
      "romi": null
    },
    {
      "channel": "Лид не найден",
      "description": "занесли сами / источник не определен",
      "category": "ручной ввод",
      "spend": 0.0,
      "crm_deals": 13,
      "qualified_leads": 12,
      "mango_calls": 0,
      "in_work": 4,
      "closed": 9,
      "proposal": 3,
      "meeting": 0,
      "crm_budget": 2800240.0,
      "cpl": 0.0,
      "deal_cost": 0.0,
      "profit": 2800240.0,
      "fact": "нужно проставлять точный источник в CRM/UTM",
      "romi": null
    },
    {
      "channel": "social",
      "description": "Telegram / VK / соцсети / мессенджеры",
      "category": "соцсети",
      "spend": 0.0,
      "crm_deals": 16,
      "qualified_leads": 16,
      "mango_calls": 1,
      "in_work": 3,
      "closed": 13,
      "proposal": 2,
      "meeting": 1,
      "crm_budget": 2670000.0,
      "cpl": 0.0,
      "deal_cost": 0.0,
      "profit": 2670000.0,
      "fact": "договоров/предоплат в выгрузке нет",
      "romi": null
    },
    {
      "channel": "Манго / звонки",
      "description": "звонки Манго без точного UTM-источника",
      "category": "звонки",
      "spend": 0.0,
      "crm_deals": 12,
      "qualified_leads": 12,
      "mango_calls": 12,
      "in_work": 4,
      "closed": 8,
      "proposal": 4,
      "meeting": 0,
      "crm_budget": 2340000.0,
      "cpl": 0.0,
      "deal_cost": 0.0,
      "profit": 2340000.0,
      "fact": "нужно проставлять точный источник в CRM/UTM",
      "romi": null
    },
    {
      "channel": "уже обращались",
      "description": "клиенты/лиды, которые уже знали площадку",
      "category": "повторные",
      "spend": 0.0,
      "crm_deals": 9,
      "qualified_leads": 9,
      "mango_calls": 0,
      "in_work": 2,
      "closed": 7,
      "proposal": 2,
      "meeting": 0,
      "crm_budget": 2100000.0,
      "cpl": 0.0,
      "deal_cost": 0.0,
      "profit": 2100000.0,
      "fact": "договоров/предоплат в выгрузке нет",
      "romi": null
    },
    {
      "channel": "(none)",
      "description": "Яндекс/прямой брендовый заход: ввели «Архилофт»",
      "category": "брендовый поиск",
      "spend": 0.0,
      "crm_deals": 10,
      "qualified_leads": 10,
      "mango_calls": 6,
      "in_work": 3,
      "closed": 7,
      "proposal": 2,
      "meeting": 0,
      "crm_budget": 1720000.0,
      "cpl": 0.0,
      "deal_cost": 0.0,
      "profit": 1720000.0,
      "fact": "нужно проставлять точный источник в CRM/UTM",
      "romi": null
    },
    {
      "channel": "Почта",
      "description": "входящие заявки на почту",
      "category": "почта",
      "spend": 0.0,
      "crm_deals": 6,
      "qualified_leads": 6,
      "mango_calls": 0,
      "in_work": 2,
      "closed": 4,
      "proposal": 2,
      "meeting": 0,
      "crm_budget": 1030000.0,
      "cpl": 0.0,
      "deal_cost": 0.0,
      "profit": 1030000.0,
      "fact": "договоров/предоплат в выгрузке нет",
      "romi": null
    },
    {
      "channel": "cpc",
      "description": "платная реклама, прочие UTM cpc",
      "category": "платная реклама",
      "spend": 0.0,
      "crm_deals": 3,
      "qualified_leads": 3,
      "mango_calls": 2,
      "in_work": 2,
      "closed": 1,
      "proposal": 2,
      "meeting": 0,
      "crm_budget": 680000.0,
      "cpl": 0.0,
      "deal_cost": 0.0,
      "profit": 680000.0,
      "fact": "договоров/предоплат в выгрузке нет",
      "romi": null
    },
    {
      "channel": "referral",
      "description": "другие источники / рефералы",
      "category": "реферал",
      "spend": 0.0,
      "crm_deals": 3,
      "qualified_leads": 3,
      "mango_calls": 2,
      "in_work": 2,
      "closed": 1,
      "proposal": 2,
      "meeting": 0,
      "crm_budget": 640000.0,
      "cpl": 0.0,
      "deal_cost": 0.0,
      "profit": 640000.0,
      "fact": "договоров/предоплат в выгрузке нет",
      "romi": null
    },
    {
      "channel": "Спам",
      "description": "нецелевые/спам-заявки",
      "category": "нецелевые",
      "spend": 0.0,
      "crm_deals": 11,
      "qualified_leads": 0,
      "mango_calls": 1,
      "in_work": 0,
      "closed": 11,
      "proposal": 0,
      "meeting": 0,
      "crm_budget": 600000.0,
      "cpl": 0.0,
      "deal_cost": 0.0,
      "profit": 600000.0,
      "fact": "не учитывать в эффективности каналов",
      "romi": null
    },
    {
      "channel": "Тильда / сайт",
      "description": "заявки с сайта/формы без точного UTM",
      "category": "сайт",
      "spend": 0.0,
      "crm_deals": 2,
      "qualified_leads": 2,
      "mango_calls": 0,
      "in_work": 1,
      "closed": 1,
      "proposal": 0,
      "meeting": 1,
      "crm_budget": 440000.0,
      "cpl": 0.0,
      "deal_cost": 0.0,
      "profit": 440000.0,
      "fact": "договоров/предоплат в выгрузке нет",
      "romi": null
    },
    {
      "channel": "рекомендации",
      "description": "сотрудничество / рекомендации",
      "category": "партнерский",
      "spend": 0.0,
      "crm_deals": 2,
      "qualified_leads": 2,
      "mango_calls": 0,
      "in_work": 1,
      "closed": 1,
      "proposal": 0,
      "meeting": 1,
      "crm_budget": 440000.0,
      "cpl": 0.0,
      "deal_cost": 0.0,
      "profit": 440000.0,
      "fact": "договоров/предоплат в выгрузке нет",
      "romi": null
    },
    {
      "channel": "Инстаграм",
      "description": "Instagram / ig",
      "category": "соцсети",
      "spend": 0.0,
      "crm_deals": 2,
      "qualified_leads": 2,
      "mango_calls": 0,
      "in_work": 1,
      "closed": 1,
      "proposal": 1,
      "meeting": 0,
      "crm_budget": 400000.0,
      "cpl": 0.0,
      "deal_cost": 0.0,
      "profit": 400000.0,
      "fact": "договоров/предоплат в выгрузке нет",
      "romi": null
    },
    {
      "channel": "<не указано>",
      "description": "источник не указан",
      "category": "неразмечено",
      "spend": 0.0,
      "crm_deals": 2,
      "qualified_leads": 2,
      "mango_calls": 1,
      "in_work": 0,
      "closed": 2,
      "proposal": 0,
      "meeting": 0,
      "crm_budget": 400000.0,
      "cpl": 0.0,
      "deal_cost": 0.0,
      "profit": 400000.0,
      "fact": "нужно проставлять точный источник в CRM/UTM",
      "romi": null
    },
    {
      "channel": "вед вед",
      "description": "Wed Wed / Вед Вед",
      "category": "агрегатор",
      "spend": 0.0,
      "crm_deals": 2,
      "qualified_leads": 2,
      "mango_calls": 0,
      "in_work": 1,
      "closed": 1,
      "proposal": 1,
      "meeting": 0,
      "crm_budget": 400000.0,
      "cpl": 0.0,
      "deal_cost": 0.0,
      "profit": 400000.0,
      "fact": "договоров/предоплат в выгрузке нет",
      "romi": null
    },
    {
      "channel": "Рассылка",
      "description": "рассылка",
      "category": "рассылка",
      "spend": 0.0,
      "crm_deals": 1,
      "qualified_leads": 1,
      "mango_calls": 0,
      "in_work": 0,
      "closed": 1,
      "proposal": 0,
      "meeting": 0,
      "crm_budget": 200000.0,
      "cpl": 0.0,
      "deal_cost": 0.0,
      "profit": 200000.0,
      "fact": "договоров/предоплат в выгрузке нет",
      "romi": null
    },
    {
      "channel": "баш тудей",
      "description": "Bash Today",
      "category": "агрегатор",
      "spend": 0.0,
      "crm_deals": 1,
      "qualified_leads": 1,
      "mango_calls": 0,
      "in_work": 0,
      "closed": 1,
      "proposal": 0,
      "meeting": 0,
      "crm_budget": 200000.0,
      "cpl": 0.0,
      "deal_cost": 0.0,
      "profit": 200000.0,
      "fact": "договоров/предоплат в выгрузке нет",
      "romi": null
    },
    {
      "channel": "ревел тайм",
      "description": "Revel Time",
      "category": "агрегатор",
      "spend": 0.0,
      "crm_deals": 1,
      "qualified_leads": 1,
      "mango_calls": 0,
      "in_work": 0,
      "closed": 1,
      "proposal": 0,
      "meeting": 0,
      "crm_budget": 200000.0,
      "cpl": 0.0,
      "deal_cost": 0.0,
      "profit": 200000.0,
      "fact": "договоров/предоплат в выгрузке нет",
      "romi": null
    },
    {
      "channel": "яндекс карты",
      "description": "Яндекс Карты",
      "category": "карты",
      "spend": 0.0,
      "crm_deals": 1,
      "qualified_leads": 1,
      "mango_calls": 0,
      "in_work": 0,
      "closed": 1,
      "proposal": 0,
      "meeting": 0,
      "crm_budget": 190000.0,
      "cpl": 0.0,
      "deal_cost": 0.0,
      "profit": 190000.0,
      "fact": "договоров/предоплат в выгрузке нет",
      "romi": null
    },
    {
      "channel": "Агрегатор",
      "description": "агрегатор без уточнения площадки",
      "category": "агрегатор",
      "spend": 0.0,
      "crm_deals": 1,
      "qualified_leads": 1,
      "mango_calls": 0,
      "in_work": 0,
      "closed": 1,
      "proposal": 0,
      "meeting": 0,
      "crm_budget": 150000.0,
      "cpl": 0.0,
      "deal_cost": 0.0,
      "profit": 150000.0,
      "fact": "договоров/предоплат в выгрузке нет",
      "romi": null
    },
    {
      "channel": "горько",
      "description": "Горько",
      "category": "агрегатор",
      "spend": 0.0,
      "crm_deals": 0,
      "qualified_leads": 0,
      "mango_calls": 0,
      "in_work": 0,
      "closed": 0,
      "proposal": 0,
      "meeting": 0,
      "crm_budget": 0.0,
      "cpl": 0.0,
      "deal_cost": 0.0,
      "profit": 0.0,
      "fact": "заявок пока нет",
      "romi": null
    },
    {
      "channel": "портал номер1",
      "description": "Портал №1",
      "category": "агрегатор",
      "spend": 0.0,
      "crm_deals": 0,
      "qualified_leads": 0,
      "mango_calls": 0,
      "in_work": 0,
      "closed": 0,
      "proposal": 0,
      "meeting": 0,
      "crm_budget": 0.0,
      "cpl": 0.0,
      "deal_cost": 0.0,
      "profit": 0.0,
      "fact": "заявок пока нет",
      "romi": null
    },
    {
      "channel": "Speed rent",
      "description": "Speed rent",
      "category": "агрегатор",
      "spend": 0.0,
      "crm_deals": 0,
      "qualified_leads": 0,
      "mango_calls": 0,
      "in_work": 0,
      "closed": 0,
      "proposal": 0,
      "meeting": 0,
      "crm_budget": 0.0,
      "cpl": 0.0,
      "deal_cost": 0.0,
      "profit": 0.0,
      "fact": "заявок пока нет",
      "romi": null
    },
    {
      "channel": "BigFinger",
      "description": "BigFinger",
      "category": "партнерский/ивент",
      "spend": 0.0,
      "crm_deals": 0,
      "qualified_leads": 0,
      "mango_calls": 0,
      "in_work": 0,
      "closed": 0,
      "proposal": 0,
      "meeting": 0,
      "crm_budget": 0.0,
      "cpl": 0.0,
      "deal_cost": 0.0,
      "profit": 0.0,
      "fact": "заявок пока нет",
      "romi": null
    },
    {
      "channel": "mainpage",
      "description": "сайт / главная",
      "category": "сайт",
      "spend": 0.0,
      "crm_deals": 0,
      "qualified_leads": 0,
      "mango_calls": 0,
      "in_work": 0,
      "closed": 0,
      "proposal": 0,
      "meeting": 0,
      "crm_budget": 0.0,
      "cpl": 0.0,
      "deal_cost": 0.0,
      "profit": 0.0,
      "fact": "заявок пока нет",
      "romi": null
    },
    {
      "channel": "sign",
      "description": "форма / sign",
      "category": "форма",
      "spend": 0.0,
      "crm_deals": 0,
      "qualified_leads": 0,
      "mango_calls": 0,
      "in_work": 0,
      "closed": 0,
      "proposal": 0,
      "meeting": 0,
      "crm_budget": 0.0,
      "cpl": 0.0,
      "deal_cost": 0.0,
      "profit": 0.0,
      "fact": "заявок пока нет",
      "romi": null
    },
    {
      "channel": "cpc (yclid)",
      "description": "платная реклама: yclid",
      "category": "платная реклама",
      "spend": 0.0,
      "crm_deals": 0,
      "qualified_leads": 0,
      "mango_calls": 0,
      "in_work": 0,
      "closed": 0,
      "proposal": 0,
      "meeting": 0,
      "crm_budget": 0.0,
      "cpl": 0.0,
      "deal_cost": 0.0,
      "profit": 0.0,
      "fact": "заявок пока нет",
      "romi": null
    },
    {
      "channel": "<не заполнено>",
      "description": "UTM/источник не заполнен",
      "category": "неразмечено",
      "spend": 0.0,
      "crm_deals": 0,
      "qualified_leads": 0,
      "mango_calls": 0,
      "in_work": 0,
      "closed": 0,
      "proposal": 0,
      "meeting": 0,
      "crm_budget": 0.0,
      "cpl": 0.0,
      "deal_cost": 0.0,
      "profit": 0.0,
      "fact": "заявок пока нет",
      "romi": null
    },
    {
      "channel": "яндекс директ",
      "description": "дополнительная детализация рекламы",
      "category": "платная реклама",
      "spend": 0.0,
      "crm_deals": 0,
      "qualified_leads": 0,
      "mango_calls": 0,
      "in_work": 0,
      "closed": 0,
      "proposal": 0,
      "meeting": 0,
      "crm_budget": 0.0,
      "cpl": 0.0,
      "deal_cost": 0.0,
      "profit": 0.0,
      "fact": "заявок пока нет",
      "romi": null
    }
  ],
  "efficiency": [
    {
      "event_type": "Другое",
      "status": "Закрыто",
      "deals": 67,
      "revenue": 9100000.0,
      "costs": 48752.9687459807,
      "romi": 18565.529985289817
    },
    {
      "event_type": "Другое",
      "status": "КП / предложение",
      "deals": 18,
      "revenue": 7230240.0,
      "costs": 13203.929035369776,
      "romi": 54658.24643280141
    },
    {
      "event_type": "Свадьбы",
      "status": "Закрыто",
      "deals": 9,
      "revenue": 2050000.0,
      "costs": 16928.114147909968,
      "romi": 12010.031761884731
    },
    {
      "event_type": "Съемки",
      "status": "Закрыто",
      "deals": 6,
      "revenue": 1380000.0,
      "costs": 5078.43424437299,
      "romi": 27073.729807155985
    },
    {
      "event_type": "Конференции / деловые",
      "status": "КП / предложение",
      "deals": 4,
      "revenue": 1020000.0,
      "costs": 14558.178167202572,
      "romi": 6906.371183847094
    },
    {
      "event_type": "Детские / выпускные",
      "status": "Закрыто",
      "deals": 3,
      "revenue": 940000.0,
      "costs": 0.0,
      "romi": null
    },
    {
      "event_type": "Конференции / деловые",
      "status": "Закрыто",
      "deals": 4,
      "revenue": 770000.0,
      "costs": 0.0,
      "romi": null
    },
    {
      "event_type": "Вечеринки / дни рождения",
      "status": "Закрыто",
      "deals": 3,
      "revenue": 680000.0,
      "costs": 6771.2456591639875,
      "romi": 9942.465363514166
    },
    {
      "event_type": "Корпоративы",
      "status": "КП / предложение",
      "deals": 4,
      "revenue": 640000.0,
      "costs": 0.0,
      "romi": null
    },
    {
      "event_type": "Корпоративы",
      "status": "Закрыто",
      "deals": 3,
      "revenue": 630000.0,
      "costs": 0.0,
      "romi": null
    },
    {
      "event_type": "Свадьбы",
      "status": "Встреча проведена",
      "deals": 2,
      "revenue": 480000.0,
      "costs": 0.0,
      "romi": null
    },
    {
      "event_type": "Мастер-классы",
      "status": "КП / предложение",
      "deals": 1,
      "revenue": 480000.0,
      "costs": 0.0,
      "romi": null
    },
    {
      "event_type": "Конференции / деловые",
      "status": "Встреча назначена",
      "deals": 1,
      "revenue": 240000.0,
      "costs": 0.0,
      "romi": null
    },
    {
      "event_type": "Корпоративы",
      "status": "Встреча проведена",
      "deals": 1,
      "revenue": 240000.0,
      "costs": 0.0,
      "romi": null
    },
    {
      "event_type": "Свадьбы",
      "status": "КП / предложение",
      "deals": 3,
      "revenue": 200000.0,
      "costs": 0.0,
      "romi": null
    },
    {
      "event_type": "Съемки",
      "status": "КП / предложение",
      "deals": 1,
      "revenue": 200000.0,
      "costs": 0.0,
      "romi": null
    },
    {
      "event_type": "Детские / выпускные",
      "status": "Встреча проведена",
      "deals": 1,
      "revenue": 200000.0,
      "costs": 0.0,
      "romi": null
    },
    {
      "event_type": "Детские / выпускные",
      "status": "КП / предложение",
      "deals": 1,
      "revenue": 200000.0,
      "costs": 0.0,
      "romi": null
    },
    {
      "event_type": "Другое",
      "status": "В работе / неразобранное",
      "deals": 1,
      "revenue": 0.0,
      "costs": 0.0,
      "romi": null
    }
  ],
  "stages": [
    {
      "stage": "Озвучено предложение",
      "group": "КП / предложение",
      "deals": 32,
      "share": 0.24060150375939848,
      "budget": 9970240.0
    },
    {
      "stage": "Закрыто и не реализовано",
      "group": "Закрыто",
      "deals": 28,
      "share": 0.21052631578947367,
      "budget": 2230000.0
    },
    {
      "stage": "Закрыто и не реализовано (Выбрали другую площадку)",
      "group": "Закрыто",
      "deals": 21,
      "share": 0.15789473684210525,
      "budget": 3910000.0
    },
    {
      "stage": "Закрыто и не реализовано (Не вышли на связь)",
      "group": "Закрыто",
      "deals": 14,
      "share": 0.10526315789473684,
      "budget": 2760000.0
    },
    {
      "stage": "Закрыто и не реализовано (Не подходит по расположению)",
      "group": "Закрыто",
      "deals": 8,
      "share": 0.06015037593984962,
      "budget": 1520000.0
    },
    {
      "stage": "Закрыто и не реализовано (Отмена события)",
      "group": "Закрыто",
      "deals": 8,
      "share": 0.06015037593984962,
      "budget": 1700000.0
    },
    {
      "stage": "Закрыто и не реализовано (Дата занята)",
      "group": "Закрыто",
      "deals": 7,
      "share": 0.05263157894736842,
      "budget": 1640000.0
    },
    {
      "stage": "Закрыто и не реализовано (Не прошли по бюджету)",
      "group": "Закрыто",
      "deals": 5,
      "share": 0.03759398496240601,
      "budget": 1110000.0
    },
    {
      "stage": "Встреча проведена",
      "group": "Встреча проведена",
      "deals": 4,
      "share": 0.03007518796992481,
      "budget": 920000.0
    },
    {
      "stage": "Закрыто и не реализовано (Не прошли по вместимости)",
      "group": "Закрыто",
      "deals": 4,
      "share": 0.03007518796992481,
      "budget": 680000.0
    },
    {
      "stage": "Назначена встреча",
      "group": "Встреча назначена",
      "deals": 1,
      "share": 0.007518796992481203,
      "budget": 240000.0
    },
    {
      "stage": "Неразобранное",
      "group": "В работе / неразобранное",
      "deals": 1,
      "share": 0.007518796992481203,
      "budget": 0.0
    }
  ],
  "amortization_yearly": [
    {
      "year": 2024,
      "rows_count": 112,
      "amortization_amount": 371902.0,
      "cumulative_amount": 371902.0
    },
    {
      "year": 2025,
      "rows_count": 83,
      "amortization_amount": 390876.51,
      "cumulative_amount": 762778.51
    },
    {
      "year": 2026,
      "rows_count": 10,
      "amortization_amount": 124914.42,
      "cumulative_amount": 887692.93
    }
  ]
};

function dateFromPeriod(period) {
  return `${period}-01`;
}

const managers = ["Клочкова Ирина", "Вероника Нам", "Дарья Тенькова"];

const seedDeals = financeData.monthly.map((month, index) => ({
  id: `${month.period}-balance`,
  date: dateFromPeriod(month.period),
  channel: "Реклама из баланса",
  type: "Все мероприятия месяца",
  manager: managers[index % managers.length],
  status: "event",
  leads: month.events_count,
  marketing: Math.round(month.ad_spend || 0),
  revenue: Math.round(month.revenue || 0),
  costs: Math.max(0, Math.round((month.expenses || 0) - (month.ad_spend || 0)))
}));

const channels = Array.from(new Set(["Реклама из баланса", ...financeData.ad_lines.map((line) => line.name)])).slice(0, 80);
const types = Array.from(new Set(["Все мероприятия месяца", ...financeData.events.map((event) => event.type)])).slice(0, 80);
const statuses = [
  ["lead", "Лид"],
  ["hold", "Просмотр"],
  ["booked", "Бронь"],
  ["event", "Мероприятие"]
];

const state = {
  deals: loadDeals(),
  managerOverrides: loadManagerOverrides(),
  manualAds: loadManualRows(MANUAL_AD_KEY),
  manualFinance: loadManualRows(MANUAL_FINANCE_KEY),
  view: "overview"
};

const money = new Intl.NumberFormat("ru-RU", { style: "currency", currency: "RUB", maximumFractionDigits: 0 });
const number = new Intl.NumberFormat("ru-RU");

function normalizeDeals(deals) {
  const oldManagerMap = {
    "Анна Смирнова": "Клочкова Ирина",
    "Ирина Клочкова": "Клочкова Ирина",
    "Иван Петров": "Дарья Тенькова",
    "Мария Кузнецова": "Вероника Нам",
    "Алексей Власов": "Клочкова Ирина"
  };
  return deals.map((deal, index) => ({
    ...deal,
    manager: managers.includes(deal.manager) ? deal.manager : oldManagerMap[deal.manager] || managers[index % managers.length]
  }));
}

function loadManagerOverrides() {
  try {
    const parsed = JSON.parse(localStorage.getItem(MANAGER_OVERRIDES_KEY) || "{}");
    return typeof parsed === "object" && parsed ? parsed : {};
  } catch {
    return {};
  }
}

function saveManagerOverrides() {
  localStorage.setItem(MANAGER_OVERRIDES_KEY, JSON.stringify(state.managerOverrides));
}

function loadManualRows(key) {
  try {
    const parsed = JSON.parse(localStorage.getItem(key) || "[]");
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveManualRows(key, rows) {
  localStorage.setItem(key, JSON.stringify(rows));
}

function loadDeals() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return normalizeDeals(seedDeals);
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? normalizeDeals(parsed) : normalizeDeals(seedDeals);
  } catch {
    return normalizeDeals(seedDeals);
  }
}

function saveDeals() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.deals));
}

function byDateRange(deal) {
  const from = document.querySelector("#dateFrom").value;
  const to = document.querySelector("#dateTo").value;
  return (!from || deal.date >= from) && (!to || deal.date <= to);
}

function filteredDeals() {
  return state.deals.filter(byDateRange);
}

function activeMonthly() {
  const from = document.querySelector("#dateFrom").value;
  const to = document.querySelector("#dateTo").value;
  return financeData.monthly.filter((month) => {
    const date = dateFromPeriod(month.period);
    return (!from || date >= from) && (!to || date <= to);
  });
}

function activeEvents() {
  const from = document.querySelector("#dateFrom").value;
  const to = document.querySelector("#dateTo").value;
  return financeData.events.filter((event) => event.date && (!from || event.date >= from) && (!to || event.date <= to));
}

function activeAdLines() {
  const periods = new Set(activeMonthly().map((month) => month.period));
  return financeData.ad_lines.filter((line) => periods.has(line.period));
}

function activeAdBreakdown() {
  const periods = new Set(activeMonthly().map((month) => month.period));
  return (financeData.ad_breakdown || []).filter((line) => periods.has(line.period));
}

function activeEquipmentMonthly() {
  const periods = new Set(activeMonthly().map((month) => month.period));
  return (financeData.equipment_monthly || []).filter((row) => periods.has(row.period));
}

function daysInPeriod(period) {
  const [year, month] = period.split("-").map(Number);
  return new Date(year, month, 0).getDate();
}

function activeYears() {
  return Array.from(new Set(activeMonthly().map((month) => month.year))).sort();
}

function normalizedAmoRows(rows) {
  const byManager = new Map((rows || []).map((row) => [row.manager, row]));
  const empty = {
    clients_total: 0,
    in_work: 0,
    closed_lost: 0,
    success: 0,
    without_deal: 0,
    tasks: 0,
    urgent_call: 0
  };
  const requiredRows = managers.map((manager) => ({ manager, ...empty, ...(byManager.get(manager) || {}) }));
  const otherRows = (rows || []).filter((row) => !managers.includes(row.manager));
  return [...requiredRows, ...otherRows];
}

function activeEventTypes() {
  const periods = new Set(activeMonthly().map((month) => month.period));
  return financeData.event_types.filter((row) => periods.has(row.period));
}

function sum(items, key) {
  return items.reduce((total, item) => total + Number(item[key] || 0), 0);
}

function romi(revenue, marketing) {
  if (!marketing) return revenue ? 100 : 0;
  return ((revenue - marketing) / marketing) * 100;
}

function profit(deals) {
  return sum(deals, "revenue") - sum(deals, "marketing") - sum(deals, "costs");
}

function groupBy(items, key) {
  return items.reduce((groups, item) => {
    const value = typeof key === "function" ? key(item) : item[key];
    groups[value] = groups[value] || [];
    groups[value].push(item);
    return groups;
  }, {});
}

function statusLabel(status) {
  return statuses.find(([value]) => value === status)?.[1] || status;
}

function pct(value) {
  return `${Math.round(value)}%`;
}

function formatMoney(value) {
  return money.format(Math.round(value)).replace(",00", "");
}

function sourceTypeLabel(type) {
  const labels = { paid: "Платный", free: "Бесплатный", untracked: "Не склеен" };
  return labels[type] || "Другое";
}

function setDefaultDates() {
  document.querySelector("#dateFrom").value = "2026-01-01";
  document.querySelector("#dateTo").value = "2026-05-31";
}

function applyPreset() {
  const preset = document.querySelector("#periodPreset").value;
  if (["2024", "2025", "2026"].includes(preset)) {
    document.querySelector("#dateFrom").value = `${preset}-01-01`;
    document.querySelector("#dateTo").value = preset === "2026" ? "2026-05-31" : `${preset}-12-31`;
  }
  if (preset === "month") {
    document.querySelector("#dateFrom").value = "2026-05-01";
    document.querySelector("#dateTo").value = "2026-05-31";
  }
  if (preset === "quarter") {
    document.querySelector("#dateFrom").value = "2026-03-01";
    document.querySelector("#dateTo").value = "2026-05-31";
  }
  if (preset === "all") {
    document.querySelector("#dateFrom").value = "";
    document.querySelector("#dateTo").value = "";
  }
  render();
}

function renderKpis(deals) {
  const months = activeMonthly();
  const revenue = sum(months, "revenue");
  const marketing = sum(months, "ad_spend");
  const events = sum(months, "events_count");
  const totalProfit = sum(months, "profit");
  const avgCheck = events ? revenue / events : 0;
  const items = [
    ["ROMI", pct(romi(revenue, marketing)), `${months.length} мес.`, "↗", "green"],
    ["Выручка", formatMoney(revenue), "по балансам", "▣", "violet"],
    ["Прибыль", formatMoney(totalProfit), "прибыль/убыток", "▥", totalProfit < 0 ? "red" : "green"],
    ["Расход на рекламу", formatMoney(marketing), "строка реклама", "⌁", "orange"],
    ["Мероприятия", number.format(events), "листов мероприятий", "□", "blue"],
    ["Средний чек", formatMoney(avgCheck), "выручка / события", "≡", "yellow"]
  ];

  document.querySelector("#kpis").innerHTML = items.map(([title, value, trend, icon, tone], index) => `
    <article class="kpi">
      <div class="kpi-top">
        <span>${title}</span>
        <span class="kpi-icon" style="background: var(--${tone}-soft); color: var(--${tone});">${icon}</span>
      </div>
      <strong>${value}</strong>
      <span class="trend">${trend}</span>
      ${sparkline(index)}
    </article>
  `).join("");
}

function sparkline(offset) {
  const values = [12, 19, 17, 25, 15, 29, 27, 35, 31, 24, 28, 38].map((value) => value + offset * 2);
  const points = values.map((value, index) => `${index * 18},${35 - value * 0.65}`).join(" ");
  return `<svg class="spark" viewBox="0 0 200 42" preserveAspectRatio="none"><polyline points="${points}" fill="none" stroke="currentColor" stroke-width="2"/></svg>`;
}

function renderLineChart(deals) {
  const months = activeMonthly().sort((a, b) => a.period.localeCompare(b.period));
  if (!months.length) {
    document.querySelector("#romiHint").textContent = "Нет данных";
    document.querySelector("#romiChart").innerHTML = `<div class="empty-chart">Нет данных за выбранный период</div>`;
    return;
  }
  const values = months.map((month) => romi(month.revenue, month.ad_spend));
  const max = Math.ceil(Math.max(400, ...values) / 500) * 500;
  const width = 820;
  const height = 270;
  const plot = { x: 54, y: 32, w: 710, h: 172 };
  const labelStep = Math.max(1, Math.ceil(months.length / 12));
  const pointLabelStep = Math.max(1, Math.ceil(months.length / 8));
  const points = values.map((value, index) => {
    const x = plot.x + (months.length === 1 ? plot.w / 2 : (plot.w / (months.length - 1)) * index);
    const y = plot.y + plot.h - (value / max) * plot.h;
    return { x, y, value, month: months[index].period };
  });
  const poly = points.map((point) => `${point.x},${point.y}`).join(" ");
  const area = `${plot.x},${plot.y + plot.h} ${poly} ${plot.x + plot.w},${plot.y + plot.h}`;
  const ticks = Array.from({ length: 5 }, (_, index) => Math.round((max / 4) * index));

  document.querySelector("#romiHint").textContent = `${months.length} мес. в периоде`;
  document.querySelector("#romiChart").innerHTML = `
    <svg viewBox="0 0 ${width} ${height}" role="img" aria-label="ROMI по месяцам">
      <defs>
        <linearGradient id="lineFill" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stop-color="#7257d8" stop-opacity="0.28"/>
          <stop offset="1" stop-color="#7257d8" stop-opacity="0"/>
        </linearGradient>
      </defs>
      ${ticks.map((tick) => {
        const y = plot.y + plot.h - (tick / max) * plot.h;
        return `<line x1="${plot.x}" x2="${plot.x + plot.w}" y1="${y}" y2="${y}" stroke="#edf0f6"/><text x="8" y="${y + 4}" class="chart-label">${tick}%</text>`;
      }).join("")}
      <polygon points="${area}" fill="url(#lineFill)"/>
      <polyline points="${poly}" fill="none" stroke="#7257d8" stroke-width="3"/>
      ${points.map((point, index) => `<circle cx="${point.x}" cy="${point.y}" r="5" fill="#fff" stroke="#7257d8" stroke-width="3"/>${index % pointLabelStep === 0 || index === points.length - 1 ? `<text x="${point.x}" y="${Math.max(16, point.y - 13)}" text-anchor="middle" class="chart-label value-label">${pct(point.value)}</text>` : ""}`).join("")}
      ${points.map((point, index) => (index % labelStep === 0 || index === points.length - 1) ? `<text x="${point.x}" y="238" text-anchor="middle" class="chart-label month-label">${monthName(point.month)} ${point.month.slice(2, 4)}</text>` : "").join("")}
    </svg>
  `;
}

function monthName(key) {
  const names = ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"];
  return names[Number(key.slice(5, 7)) - 1];
}

function renderFunnel(deals) {
  const leads = sum(deals, "leads");
  const holds = deals.filter((deal) => ["hold", "booked", "event"].includes(deal.status)).length * 16;
  const booked = deals.filter((deal) => ["booked", "event"].includes(deal.status)).length;
  const events = deals.filter((deal) => deal.status === "event").length;
  const steps = [
    ["Показы рекламы", leads * 420, 0],
    ["Переходы", leads * 42, 10],
    ["Заявки (лиды)", leads, leads ? 3.5 : 0],
    ["Созвоны", Math.round(leads * 0.5), leads ? 50 : 0],
    ["Просмотры площадки", holds, leads ? (holds / leads) * 100 : 0],
    ["Предварительные брони", booked, holds ? (booked / holds) * 100 : 0],
    ["Оплата (бронь)", events, booked ? (events / booked) * 100 : 0],
    ["Мероприятия проведено", events, events ? 100 : 0]
  ];
  const max = Math.max(...steps.map((step) => step[1]), 1);
  document.querySelector("#funnelChart").innerHTML = steps.map(([label, value, conversion]) => `
    <div class="funnel-row">
      <span>${label}</span>
      <div class="bar-track"><div class="bar-fill" style="width:${Math.max(2, (value / max) * 100)}%"></div></div>
      <b>${number.format(value)}</b>
      <span>${conversion ? `${conversion.toFixed(1)}%` : "—"}</span>
    </div>
  `).join("");
}

function renderChannelRows(deals) {
  const rows = crmData.channels || [];
  document.querySelector("#channelRows").innerHTML = rows
    .slice(0, 18)
    .map((row) => `
      <tr>
        <td>${row.channel}</td>
        <td>${row.category || "—"}</td>
        <td>${formatMoney(row.spend || 0)}</td>
        <td>${number.format(row.crm_deals || 0)}</td>
        <td>${number.format(row.in_work || 0)}</td>
        <td>${number.format(row.closed || 0)}</td>
        <td>${number.format(row.proposal || 0)}</td>
        <td>${formatMoney(row.crm_budget || 0)}</td>
        <td class="${row.romi === null ? "" : row.romi < 0 ? "negative" : "positive"}">${row.romi === null ? "без расхода" : pct(row.romi)}</td>
      </tr>
    `).join("");
  renderCrmEfficiency();
}

function renderCrmEfficiency() {
  const target = document.querySelector("#crmEfficiencyRows");
  if (!target) return;
  target.innerHTML = (crmData.efficiency || [])
    .slice(0, 18)
    .map((row) => `
      <tr>
        <td>${row.event_type}</td>
        <td>${row.status}</td>
        <td>${number.format(row.deals || 0)}</td>
        <td>${formatMoney(row.revenue || 0)}</td>
        <td>${formatMoney(row.costs || 0)}</td>
        <td class="${row.romi === null ? "" : row.romi < 0 ? "negative" : "positive"}">${row.romi === null ? "без расхода" : pct(row.romi)}</td>
      </tr>
    `).join("");
}

function renderEquipment() {
  const rows = activeEquipmentMonthly();
  const revenue = sum(rows, "revenue");
  const expenses = sum(rows, "expenses");
  const net = sum(rows, "net");
  const purchase = sum(financeData.equipment_summary || [], "purchase_cost");
  const remaining = Math.max(0, purchase - sum(financeData.equipment_summary || [], "net"));
  document.querySelector("#equipmentHint").textContent = `${rows.length} строк за период`;
  document.querySelector("#equipmentSummary").innerHTML = [
    ["Закупка техники", purchase],
    ["Доход за период", revenue],
    ["Расход за период", expenses],
    ["Чистыми за период", net],
    ["Остаток окупаемости", remaining]
  ].map(([label, value]) => `<div class="mini-card"><span>${label}</span><strong>${formatMoney(value)}</strong></div>`).join("");

  document.querySelector("#equipmentRows").innerHTML = rows.length ? rows
    .sort((a, b) => a.period.localeCompare(b.period) || a.category.localeCompare(b.category))
    .map((row) => `
      <tr>
        <td>${monthName(row.period)} ${row.year}</td>
        <td>${row.category}</td>
        <td>${number.format(row.events_count)}</td>
        <td>${formatMoney(row.revenue)}</td>
        <td>${formatMoney(row.agency || 0)}</td>
        <td>${formatMoney(row.investors || 0)}</td>
        <td>${formatMoney((row.repair || 0) + (row.other_expenses || 0) + (row.manager_bonus || 0))}</td>
        <td>${formatMoney(row.tax || 0)}</td>
        <td>${formatMoney(row.tech_specialist || 0)}</td>
        <td class="${row.net < 0 ? "negative" : "positive"}">${formatMoney(row.net)}</td>
      </tr>
    `).join("") : `<tr><td colspan="10">За выбранный период строк по технике нет. Выберите 2024, 2025 или “Все данные”.</td></tr>`;
}

function renderAdvertising() {
  const years = new Set(activeYears());
  const grouped = {};
  (financeData.ad_breakdown || []).forEach((line) => {
    if (years.size && !years.has(line.year)) return;
    const key = `${line.year}__${line.vendor}`;
    grouped[key] = grouped[key] || { year: line.year, vendor: line.vendor, months: Array(12).fill(0), total: 0 };
    const monthIndex = Number(line.month || line.period?.slice(5, 7)) - 1;
    if (monthIndex >= 0 && monthIndex < 12) grouped[key].months[monthIndex] += Number(line.amount || 0);
    grouped[key].total += Number(line.amount || 0);
  });
  document.querySelector("#adYearRows").innerHTML = Object.values(grouped)
    .sort((a, b) => a.year - b.year || b.total - a.total)
    .map((row) => `
      <tr>
        <td>${row.year}</td>
        <td>${row.vendor}</td>
        ${row.months.map((value) => `<td>${value ? formatMoney(value) : "—"}</td>`).join("")}
        <td>${formatMoney(row.total)}</td>
      </tr>
    `).join("") || `<tr><td colspan="15">За выбранный период рекламных расходов нет.</td></tr>`;
}

function renderSourceDashboard() {
  const calltouch = marketingData.calltouch_june_2026 || { summary: {}, rows: [] };
  const summary = calltouch.summary || {};
  const cpl = summary.all_leads ? summary.budget / summary.all_leads : 0;
  const kpis = [
    ["Расход", summary.budget || 0],
    ["Все лиды", summary.all_leads || 0, "number"],
    ["Целевые лиды", summary.target_leads || 0, "number"],
    ["Сделки", summary.deals || 0, "number"],
    ["Выручка", summary.revenue || 0],
    ["Цена лида", cpl],
    ["ROI", summary.roi || 0, "percent"],
  ];
  document.querySelector("#sourceKpis").innerHTML = kpis.map(([label, value, kind]) => `
    <div class="mini-card">
      <span>${label}</span>
      <strong>${kind === "number" ? number.format(value) : kind === "percent" ? `${number.format(Math.round(value))}%` : formatMoney(value)}</strong>
    </div>
  `).join("");

  const blind = (calltouch.rows || []).find((row) => row.source === "Лид не найден");
  document.querySelector("#sourceWarning").innerHTML = blind
    ? `Главная точка контроля: ${number.format(blind.deals)} сделки и ${formatMoney(blind.revenue)} выручки попали в “Лид не найден”. Сначала нужна склейка Calltouch и amoCRM, иначе бюджет нельзя распределить честно.`
    : "Данные Calltouch загружены.";

  document.querySelector("#sourceRows").innerHTML = (calltouch.rows || [])
    .sort((a, b) => b.revenue - a.revenue || b.leads - a.leads)
    .map((row) => `
      <tr>
        <td>${row.source}</td>
        <td><span class="source-tag ${row.type}">${sourceTypeLabel(row.type)}</span></td>
        <td>${formatMoney(row.spend || 0)}</td>
        <td>${number.format(row.clicks || 0)}</td>
        <td>${number.format(row.leads || 0)}</td>
        <td>${row.leads ? formatMoney(row.cpl || 0) : "—"}</td>
        <td>${number.format(row.deals || 0)}</td>
        <td>${formatMoney(row.revenue || 0)}</td>
        <td>${row.lead_rate ? `${row.lead_rate.toFixed(2)}%` : "—"}</td>
      </tr>
    `).join("");

  document.querySelector("#recommendationRows").innerHTML = (marketingData.leadership_recommendations || []).map((row) => `
    <div class="decision">
      <b>${row.priority}. ${row.source}</b>
      <strong>${row.decision}</strong>
      <span>${row.why}</span>
    </div>
  `).join("");

  document.querySelector("#amoSourceRows").innerHTML = (marketingData.amo_source_monthly || []).length
    ? marketingData.amo_source_monthly.map((row) => `
      <tr>
        <td>${row.source}</td>
        <td>${number.format(row.clients_total || 0)}</td>
        <td>${number.format(row.in_work || 0)}</td>
        <td>${number.format(row.proposal_sent || 0)}</td>
        <td>${number.format(row.success || 0)}</td>
        <td>${number.format(row.closed_lost || 0)}</td>
        <td>${number.format(row.without_deal || 0)}</td>
        <td>${number.format(row.tasks || 0)}</td>
      </tr>
    `).join("")
    : `<tr><td colspan="8">За 1–29 июня в amoCRM-файле не найдено строк для агрегации.</td></tr>`;
  document.querySelector("#amoSourceNote").textContent = marketingData.amo_note || "";

  document.querySelector("#supplierRows").innerHTML = (marketingData.paid_suppliers || [])
    .filter((row) => activeYears().includes(row.year) || activeYears().length === 0)
    .map((row) => `
      <tr>
        <td>${row.year}</td>
        <td>${row.vendor}</td>
        <td>${row.spend ? formatMoney(row.spend) : "—"}</td>
        <td>${row.earned ? formatMoney(row.earned) : "нет привязки"}</td>
        <td>${row.note || "Расход из сводных рекламных строк"}</td>
      </tr>
    `).join("");
}

function renderSalesAndAmo() {
  const months = activeMonthly();
  const events = sum(months, "events_count");
  const adSpend = sum(months, "ad_spend");
  const revenue = sum(months, "revenue");
  document.querySelector("#salesBox").innerHTML = `
    <div class="status-line good">Рекламные расходы уже стоят в расходах дашборда: ${formatMoney(adSpend)}</div>
    <div class="summary-grid">
      <div class="mini-card"><span>Реализовано мероприятий</span><strong>${number.format(events)}</strong></div>
      <div class="mini-card"><span>Выручка по балансам</span><strong>${formatMoney(revenue)}</strong></div>
      <div class="mini-card"><span>Средний чек</span><strong>${formatMoney(events ? revenue / events : 0)}</strong></div>
    </div>
    <p class="muted-note">Google-таблицы по рекламе и продажам добавлены как следующий источник. Для живой загрузки нужен доступ на чтение или экспорт CSV из этих таблиц.</p>
  `;

  const amoRows = normalizedAmoRows(financeData.amo_summary || []);
  document.querySelector("#amoBox").innerHTML = amoRows.length ? `
    <div class="status-line good">База клиентов не загружена в дашборд: показаны только количества по менеджерам и статусам.</div>
    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th>Менеджер</th>
            <th>Всего</th>
            <th>В работе</th>
            <th>Закрыто нереализовано</th>
            <th>Успешно реализовано</th>
            <th>Без сделки</th>
            <th>Задач</th>
            <th>Срочно позвонить</th>
          </tr>
        </thead>
        <tbody>
          ${amoRows.map((row) => `
            <tr>
              <td>${row.manager}</td>
              <td>${number.format(row.clients_total || 0)}</td>
              <td>${number.format(row.in_work || 0)}</td>
              <td>${number.format(row.closed_lost || 0)}</td>
              <td>${number.format(row.success || 0)}</td>
              <td>${number.format(row.without_deal || 0)}</td>
              <td>${number.format(row.tasks || 0)}</td>
              <td class="${row.urgent_call ? "negative" : ""}">${number.format(row.urgent_call || 0)}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
    <p class="muted-note">${financeData.amo_note || "Ответственный “Юлия” автоматически считается как “Вероника Нам”."}</p>
  ` : `
    <div class="status-line">amoCRM готов к подключению: ответственный “Юлия” будет автоматически считаться как “Вероника Нам”.</div>
    <p class="muted-note">Для точных статусов нужна выгрузка сделок amoCRM со стадией, суммой, источником и ответственным.</p>
  `;
}

function renderAmortization() {
  const yearlyRows = crmData.amortization_yearly || [];
  document.querySelector("#amortizationRows").innerHTML = yearlyRows
    .map((row) => `
      <tr>
        <td>${row.year}</td>
        <td>${number.format(row.rows_count || 0)}</td>
        <td>${formatMoney(row.amortization_amount || row.available_for_amortization || 0)}</td>
        <td>${formatMoney(row.cumulative_amount || 0)}</td>
      </tr>
    `).join("");
}

function renderEventRows(deals) {
  const grouped = groupBy(activeEventTypes(), "type");
  document.querySelector("#eventRows").innerHTML = Object.entries(grouped)
    .sort((a, b) => sum(b[1], "events_count") - sum(a[1], "events_count"))
    .map(([type, rows]) => {
      const revenue = sum(rows, "rent_revenue");
      const totalProfit = sum(rows, "total_profit");
      return `<tr><td>${type}</td><td>${number.format(sum(rows, "events_count"))}</td><td>${formatMoney(revenue)}</td><td class="${totalProfit < 0 ? "negative" : "positive"}">${formatMoney(totalProfit)}</td></tr>`;
    }).join("");
}

function renderCalendar(deals) {
  const events = activeEvents();
  const bookedDates = new Set(events.map((event) => event.date));
  const calendarMonth = (document.querySelector("#dateFrom").value || events[0]?.date || "2026-05-01").slice(0, 7);
  const [year, month] = calendarMonth.split("-").map(Number);
  const daysInMonth = new Date(year, month, 0).getDate();
  const days = Array.from({ length: daysInMonth }, (_, index) => {
    const day = index + 1;
    const iso = `${calendarMonth}-${String(day).padStart(2, "0")}`;
    const cls = bookedDates.has(iso) ? "booked" : "";
    return `<div class="day ${cls}">${day}</div>`;
  });
  const occupancy = Math.round(([...bookedDates].filter((date) => date.startsWith(calendarMonth)).length / daysInMonth) * 100);
  document.querySelector("#calendarGrid").innerHTML = days.join("");
  document.querySelector("#occupancyLabel").textContent = `${calendarMonth} · Занятость ${occupancy}%`;
  renderOccupancyRows();
}

function renderOccupancyRows() {
  const rows = activeMonthly().sort((a, b) => a.period.localeCompare(b.period));
  document.querySelector("#occupancyRows").innerHTML = rows.length ? rows.map((row) => {
    const days = daysInPeriod(row.period);
    const percent = days ? (row.events_count / days) * 100 : 0;
    return `
      <tr>
        <td>${row.year}</td>
        <td>${monthName(row.period)}</td>
        <td>${number.format(row.events_count)}</td>
        <td>${number.format(days)}</td>
        <td>${pct(percent)}</td>
      </tr>
    `;
  }).join("") : `<tr><td colspan="5">За выбранный период мероприятий нет.</td></tr>`;
}

function renderCac(deals) {
  const months = activeMonthly();
  const eventCount = sum(months, "events_count") || 1;
  const marketing = sum(months, "ad_spend");
  const leads = eventCount * 8;
  const stages = [
    ["Лид", leads],
    ["Просмотр площадки", Math.max(1, Math.round(eventCount * 2.5))],
    ["Бронь", Math.max(1, Math.round(eventCount * 1.25))],
    ["Мероприятие", eventCount]
  ];
  document.querySelector("#cacList").innerHTML = stages.map(([label, count], index) => `
    <div class="metric-row">
      <span>${label}</span>
      <b>${formatMoney(marketing / count)}</b>
      ${miniLine(index)}
    </div>
  `).join("");
}

function miniLine(offset) {
  const points = [8, 12, 10, 15, 9, 18, 14, 21, 17].map((v, i) => `${i * 12},${26 - v - offset}`).join(" ");
  return `<svg class="mini-line" viewBox="0 0 100 28"><polyline points="${points}" fill="none" stroke="#9a87df" stroke-width="2"/></svg>`;
}

function renderManagers(deals) {
  const grouped = groupBy(deals, "manager");
  document.querySelector("#managerRows").innerHTML = managers.map((manager) => {
    const rows = grouped[manager] || [];
    const bookings = rows.filter((deal) => ["booked", "event"].includes(deal.status)).length;
    const override = state.managerOverrides[manager] || {};
    const leadsValue = override.leads ?? sum(rows, "leads");
    const bookingsValue = override.bookings ?? bookings;
    return `
      <tr>
        <td>${manager}</td>
        <td><input class="manager-edit" type="number" min="0" data-manager="${manager}" data-manager-field="leads" value="${leadsValue}"></td>
        <td><input class="manager-edit" type="number" min="0" data-manager="${manager}" data-manager-field="bookings" value="${bookingsValue}"></td>
        <td class="positive">${pct(romi(sum(rows, "revenue"), sum(rows, "marketing")))}</td>
      </tr>
    `;
  }).join("");
}

function renderFinance(deals) {
  const months = activeMonthly();
  const revenue = sum(months, "revenue");
  const marketing = sum(months, "ad_spend");
  const expenses = sum(months, "expenses");
  const totalProfit = sum(months, "profit");
  const percent = revenue ? Math.max(0, Math.min(100, (totalProfit / revenue) * 100)) : 0;
  document.querySelector("#profitDonut").style.background = `conic-gradient(var(--violet) ${percent}%, #edf0f6 0)`;
  document.querySelector("#profitDonut").innerHTML = `<div class="donut-label">Прибыль<b>${formatMoney(totalProfit)}</b>${pct(percent)}</div>`;
  document.querySelector("#financeRows").innerHTML = [
    ["Выручка", revenue],
    ["Реклама", -marketing],
    ["Расходы всего", -expenses],
    ["Расходы без рекламы", -(expenses - marketing)],
    ["Прибыль/убыток", totalProfit]
  ].map(([label, value]) => `<div class="finance-row"><span>${label}</span><b>${formatMoney(value)}</b></div>`).join("");
}

function renderRepeatAndForecast(deals) {
  const months = activeMonthly();
  const eventCount = sum(months, "events_count");
  const revenue = sum(months, "revenue");
  const repeat = Math.round(eventCount * 0.28);
  document.querySelector("#repeatBox").innerHTML = `
    <div class="repeat-card"><span>Новые клиенты</span><strong>${Math.max(0, eventCount - repeat)}</strong><small>Расчетная доля</small></div>
    <div class="repeat-card"><span>Повторные клиенты</span><strong>${repeat}</strong><small>LTV: ${formatMoney(revenue / Math.max(1, eventCount) * 1.7)}</small></div>
  `;

  const booked = eventCount;
  const expectedEvents = Math.round(eventCount * 1.08);
  const expectedRevenue = expectedEvents * (revenue / Math.max(1, eventCount));
  const rows = [
    ["Подтвержденные мероприятия", eventCount, 70],
    ["Расчетный план +8%", expectedEvents, 48],
    ["Месяцев в выборке", months.length, 62],
    ["Ожидаемая выручка", formatMoney(expectedRevenue), 78]
  ];
  document.querySelector("#forecastBox").innerHTML = rows.map(([label, value, width]) => `
    <div class="forecast-row"><span>${label}</span><div class="bar-track"><div class="bar-fill" style="width:${width}%"></div></div><b>${value}</b></div>
  `).join("") + `<b>Прогноз уточняется после подключения календаря и amoCRM</b>`;
}

function renderEditor() {
  document.querySelector("#dealEditor").innerHTML = state.deals.map((deal) => `
    <tr data-id="${deal.id}">
      <td><input type="date" data-field="date" value="${deal.date}"></td>
      <td>${select("channel", channels, deal.channel)}</td>
      <td>${select("type", types, deal.type)}</td>
      <td>${select("manager", managers, deal.manager)}</td>
      <td>${select("status", statuses.map(([, label]) => label), statusLabel(deal.status), statuses.map(([value]) => value))}</td>
      <td><input type="number" min="0" data-field="leads" value="${deal.leads}"></td>
      <td><input type="number" min="0" data-field="marketing" value="${deal.marketing}"></td>
      <td><input type="number" min="0" data-field="revenue" value="${deal.revenue}"></td>
      <td><input type="number" min="0" data-field="costs" value="${deal.costs}"></td>
      <td><button class="delete-row" data-delete="${deal.id}">×</button></td>
    </tr>
  `).join("");
}

function renderManualTables() {
  document.querySelector("#manualAdRows").innerHTML = renderManualRows(state.manualAds, "ad");
  document.querySelector("#manualFinanceRows").innerHTML = renderManualRows(state.manualFinance, "finance");
}

function renderManualRows(rows, type) {
  const fields = type === "ad"
    ? ["period", "source", "spend", "leads", "deals", "revenue", "comment"]
    : ["period", "revenue", "expenses", "profit", "amortization", "comment"];
  return rows.map((row) => `
    <tr data-id="${row.id}">
      ${fields.map((field) => `
        <td><input data-manual="${type}" data-field="${field}" value="${row[field] ?? ""}" ${["spend", "leads", "deals", "revenue", "expenses", "profit", "amortization"].includes(field) ? 'type="number"' : 'type="text"'}></td>
      `).join("")}
      <td><button class="delete-row" data-manual-delete="${type}" data-delete="${row.id}">×</button></td>
    </tr>
  `).join("");
}

function select(field, labels, selectedLabel, values = labels) {
  return `<select data-field="${field}">${labels.map((label, index) => `<option value="${values[index]}" ${label === selectedLabel || values[index] === selectedLabel ? "selected" : ""}>${label}</option>`).join("")}</select>`;
}

function render(includeEditor = true) {
  const deals = filteredDeals();
  renderKpis(deals);
  renderLineChart(deals);
  renderFunnel(deals);
  renderChannelRows(deals);
  renderEventRows(deals);
  renderCalendar(deals);
  renderCac(deals);
  renderManagers(deals);
  renderFinance(deals);
  renderRepeatAndForecast(deals);
  renderAdvertising();
  renderAmortization();
  if (includeEditor) renderEditor();
  if (includeEditor) renderManualTables();
}

function wireEvents() {
  document.querySelector("#periodPreset").addEventListener("change", applyPreset);
  document.querySelector("#dateFrom").addEventListener("change", render);
  document.querySelector("#dateTo").addEventListener("change", render);
  document.querySelector("#addDeal").addEventListener("click", () => {
    state.deals.unshift({
      id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
      date: new Date().toISOString().slice(0, 10),
      channel: channels[0],
      type: types[0],
      manager: managers[0],
      status: "lead",
      leads: 1,
      marketing: 0,
      revenue: 0,
      costs: 0
    });
    saveDeals();
    render();
  });
  document.querySelector("#addManualAd").addEventListener("click", () => addManualRow("ad"));
  document.querySelector("#addManualFinance").addEventListener("click", () => addManualRow("finance"));
  document.querySelector("#dealEditor").addEventListener("input", updateDeal);
  document.querySelector("#dealEditor").addEventListener("change", updateDeal);
  document.querySelector("#manualAdRows").addEventListener("input", updateManualRow);
  document.querySelector("#manualFinanceRows").addEventListener("input", updateManualRow);
  document.querySelector("#manualAdRows").addEventListener("click", deleteManualRow);
  document.querySelector("#manualFinanceRows").addEventListener("click", deleteManualRow);
  document.querySelector("#managerRows").addEventListener("input", updateManagerOverride);
  document.querySelector("#dealEditor").addEventListener("click", (event) => {
    const id = event.target.dataset.delete;
    if (!id) return;
    state.deals = state.deals.filter((deal) => deal.id !== id);
    saveDeals();
    render();
  });
  document.querySelector("#resetData").addEventListener("click", () => {
    state.deals = seedDeals.map((deal) => ({ ...deal, id: crypto.randomUUID ? crypto.randomUUID() : String(Math.random()) }));
    saveDeals();
    setDefaultDates();
    render();
  });
  document.querySelector("#exportJson").addEventListener("click", exportJson);
  document.querySelector("#importJson").addEventListener("change", importJson);
  document.querySelectorAll(".nav-item").forEach((button) => {
    button.addEventListener("click", () => {
      state.view = button.dataset.view;
      document.body.className = state.view === "overview" ? "" : `view-${state.view}`;
      document.querySelectorAll(".nav-item").forEach((item) => item.classList.toggle("active", item === button));
    });
  });
}

function addManualRow(type) {
  const rows = type === "ad" ? state.manualAds : state.manualFinance;
  const row = type === "ad"
    ? { id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()), period: "2026-06", source: "", spend: 0, leads: 0, deals: 0, revenue: 0, comment: "" }
    : { id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()), period: "2026-06", revenue: 0, expenses: 0, profit: 0, amortization: 0, comment: "" };
  rows.unshift(row);
  saveManualRows(type === "ad" ? MANUAL_AD_KEY : MANUAL_FINANCE_KEY, rows);
  renderManualTables();
}

function updateManualRow(event) {
  const type = event.target.dataset.manual;
  const field = event.target.dataset.field;
  if (!type || !field) return;
  const rows = type === "ad" ? state.manualAds : state.manualFinance;
  const row = rows.find((item) => item.id === event.target.closest("tr").dataset.id);
  if (!row) return;
  const numeric = ["spend", "leads", "deals", "revenue", "expenses", "profit", "amortization"].includes(field);
  row[field] = numeric ? Number(event.target.value || 0) : event.target.value;
  saveManualRows(type === "ad" ? MANUAL_AD_KEY : MANUAL_FINANCE_KEY, rows);
}

function deleteManualRow(event) {
  const type = event.target.dataset.manualDelete;
  const id = event.target.dataset.delete;
  if (!type || !id) return;
  if (type === "ad") {
    state.manualAds = state.manualAds.filter((row) => row.id !== id);
    saveManualRows(MANUAL_AD_KEY, state.manualAds);
  } else {
    state.manualFinance = state.manualFinance.filter((row) => row.id !== id);
    saveManualRows(MANUAL_FINANCE_KEY, state.manualFinance);
  }
  renderManualTables();
}

function updateManagerOverride(event) {
  const manager = event.target.dataset.manager;
  const field = event.target.dataset.managerField;
  if (!manager || !field) return;
  state.managerOverrides[manager] = state.managerOverrides[manager] || {};
  state.managerOverrides[manager][field] = Number(event.target.value || 0);
  saveManagerOverrides();
}

function updateDeal(event) {
  const field = event.target.dataset.field;
  if (!field) return;
  const row = event.target.closest("tr");
  const deal = state.deals.find((item) => item.id === row.dataset.id);
  if (!deal) return;
  const numeric = ["leads", "marketing", "revenue", "costs"].includes(field);
  deal[field] = numeric ? Number(event.target.value) : event.target.value;
  saveDeals();
  render(false);
}

function exportJson() {
  const blob = new Blob([JSON.stringify(state.deals, null, 2)], { type: "application/json" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "archiloft-dashboard-data.json";
  link.click();
  URL.revokeObjectURL(link.href);
}

function importJson(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const imported = JSON.parse(reader.result);
      if (!Array.isArray(imported)) throw new Error("Нужен массив строк");
      state.deals = normalizeDeals(imported.map((deal) => ({ ...deal, id: deal.id || (crypto.randomUUID ? crypto.randomUUID() : String(Math.random())) })));
      saveDeals();
      render();
    } catch {
      alert("Не удалось импортировать файл. Проверьте формат JSON.");
    }
  };
  reader.readAsText(file);
}

setDefaultDates();
wireEvents();
render();
const STORAGE_KEY = "archiloft-romi-dashboard-v2";
const MANAGER_OVERRIDES_KEY = "archiloft-manager-overrides-v1";
const MANUAL_AD_KEY = "archiloft-manual-ad-v1";
const MANUAL_FINANCE_KEY = "archiloft-manual-finance-v1";

const financeData = window.ARCHILOFT_FINANCE_DATA || {
  monthly: [],
  yearly: [],
  events: [],
  event_types: [],
  ad_lines: [],
  ad_breakdown: [],
  ad_by_year: [],
  equipment_assets: [],
  equipment_monthly: [],
  equipment_summary: [],
  equipment_transactions: [],
  amortization_yearly: [],
  amo_summary: [],
  amo_note: ""
};
window.ARCHILOFT_MARKETING_DATA = {
  "generated_at": "2026-06-30T15:31:10",
  "calltouch_june_2026": {
    "period": "2026-06",
    "date_from": "2026-06-01",
    "date_to": "2026-06-29",
    "summary": {
      "budget": 69240.04,
      "cpc": 5,
      "impressions": 307164,
      "clicks": 13329,
      "target_leads": 61,
      "all_leads": 81,
      "lead_to_deal_percent": 179.01,
      "deals": 145,
      "avg_check": 255448,
      "revenue": 25800240,
      "roi": 37162.02
    },
    "rows": [
      {
        "raw_channel": "Лид не найден",
        "source": "Лид не найден",
        "type": "untracked",
        "spend": 0,
        "clicks": 0,
        "leads": 0,
        "lead_rate": 0,
        "cpl": 0,
        "deals": 83,
        "revenue": 12330240,
        "roi": 0,
        "deal_conversion": 0
      },
      {
        "raw_channel": "social",
        "source": "Соцсети",
        "type": "free",
        "spend": 0,
        "clicks": 22,
        "leads": 1,
        "lead_rate": 4.55,
        "cpl": 0.0,
        "deals": 1,
        "revenue": 200000,
        "roi": 0,
        "deal_conversion": 100.0
      },
      {
        "raw_channel": "sign",
        "source": "Вывеска / офлайн",
        "type": "free",
        "spend": 0,
        "clicks": 1,
        "leads": 0,
        "lead_rate": 0,
        "cpl": 0,
        "deals": 0,
        "revenue": 0,
        "roi": 0,
        "deal_conversion": 0
      },
      {
        "raw_channel": "referral",
        "source": "Рекомендации",
        "type": "free",
        "spend": 0,
        "clicks": 69,
        "leads": 6,
        "lead_rate": 8.7,
        "cpl": 0.0,
        "deals": 6,
        "revenue": 1230000,
        "roi": 0,
        "deal_conversion": 100.0
      },
      {
        "raw_channel": "organic",
        "source": "Органика",
        "type": "free",
        "spend": 0,
        "clicks": 429,
        "leads": 29,
        "lead_rate": 6.76,
        "cpl": 0.0,
        "deals": 20,
        "revenue": 5570000,
        "roi": 0,
        "deal_conversion": 68.96551724137932
      },
      {
        "raw_channel": "mainpage",
        "source": "Сайт / главная",
        "type": "free",
        "spend": 0,
        "clicks": 4,
        "leads": 0,
        "lead_rate": 0,
        "cpl": 0,
        "deals": 0,
        "revenue": 0,
        "roi": 0,
        "deal_conversion": 0
      },
      {
        "raw_channel": "cpc (yclid)",
        "source": "Яндекс / yclid",
        "type": "paid",
        "spend": 0,
        "clicks": 1,
        "leads": 0,
        "lead_rate": 0,
        "cpl": 0,
        "deals": 0,
        "revenue": 0,
        "roi": 0,
        "deal_conversion": 0
      },
      {
        "raw_channel": "cpc",
        "source": "Яндекс / cpc / autotargeting",
        "type": "paid",
        "spend": 69240.04,
        "clicks": 12183,
        "leads": 24,
        "lead_rate": 0.2,
        "cpl": 2885,
        "deals": 21,
        "revenue": 4190000,
        "roi": 5951.41,
        "deal_conversion": 87.5
      },
      {
        "raw_channel": "bigfinger",
        "source": "Bigfinger",
        "type": "free",
        "spend": 0,
        "clicks": 1,
        "leads": 0,
        "lead_rate": 0,
        "cpl": 0,
        "deals": 0,
        "revenue": 0,
        "roi": 0,
        "deal_conversion": 0
      },
      {
        "raw_channel": "<не указано>",
        "source": "Не указано",
        "type": "untracked",
        "spend": 0,
        "clicks": 0,
        "leads": 4,
        "lead_rate": 0,
        "cpl": 0.0,
        "deals": 2,
        "revenue": 400000,
        "roi": 0,
        "deal_conversion": 50.0
      },
      {
        "raw_channel": "<не заполнено>",
        "source": "Не заполнено",
        "type": "untracked",
        "spend": 0,
        "clicks": 1,
        "leads": 0,
        "lead_rate": 0,
        "cpl": 0,
        "deals": 0,
        "revenue": 0,
        "roi": 0,
        "deal_conversion": 0
      },
      {
        "raw_channel": "(none)",
        "source": "Не размечено",
        "type": "untracked",
        "spend": 0,
        "clicks": 618,
        "leads": 17,
        "lead_rate": 2.75,
        "cpl": 0.0,
        "deals": 12,
        "revenue": 1880000,
        "roi": 0,
        "deal_conversion": 70.58823529411765
      }
    ]
  },
  "amo_source_monthly": [
    {
      "period": "2026-06",
      "year": 2026,
      "month": 6,
      "source": "Не размечено",
      "clients_total": 173,
      "in_work": 152,
      "proposal_sent": 2,
      "closed_lost": 1,
      "success": 0,
      "without_deal": 20,
      "tasks": 3,
      "urgent_call": 0
    },
    {
      "period": "2026-06",
      "year": 2026,
      "month": 6,
      "source": "Не указан",
      "clients_total": 54,
      "in_work": 0,
      "proposal_sent": 0,
      "closed_lost": 0,
      "success": 0,
      "without_deal": 54,
      "tasks": 0,
      "urgent_call": 0
    },
    {
      "period": "2026-06",
      "year": 2026,
      "month": 6,
      "source": "ВК",
      "clients_total": 5,
      "in_work": 5,
      "proposal_sent": 0,
      "closed_lost": 0,
      "success": 0,
      "without_deal": 0,
      "tasks": 0,
      "urgent_call": 0
    },
    {
      "period": "2026-06",
      "year": 2026,
      "month": 6,
      "source": "Тендер",
      "clients_total": 5,
      "in_work": 5,
      "proposal_sent": 1,
      "closed_lost": 0,
      "success": 0,
      "without_deal": 0,
      "tasks": 0,
      "urgent_call": 0
    },
    {
      "period": "2026-06",
      "year": 2026,
      "month": 6,
      "source": "Сотрудничество",
      "clients_total": 3,
      "in_work": 3,
      "proposal_sent": 0,
      "closed_lost": 0,
      "success": 0,
      "without_deal": 0,
      "tasks": 0,
      "urgent_call": 0
    },
    {
      "period": "2026-06",
      "year": 2026,
      "month": 6,
      "source": "Агрегатор",
      "clients_total": 2,
      "in_work": 2,
      "proposal_sent": 0,
      "closed_lost": 0,
      "success": 0,
      "without_deal": 0,
      "tasks": 0,
      "urgent_call": 0
    },
    {
      "period": "2026-06",
      "year": 2026,
      "month": 6,
      "source": "СПАМ",
      "clients_total": 2,
      "in_work": 2,
      "proposal_sent": 0,
      "closed_lost": 0,
      "success": 0,
      "without_deal": 0,
      "tasks": 0,
      "urgent_call": 0
    },
    {
      "period": "2026-06",
      "year": 2026,
      "month": 6,
      "source": "Bash Today",
      "clients_total": 1,
      "in_work": 1,
      "proposal_sent": 0,
      "closed_lost": 0,
      "success": 0,
      "without_deal": 0,
      "tasks": 0,
      "urgent_call": 0
    }
  ],
  "amo_manager_june": [
    {
      "period": "2026-06",
      "year": 2026,
      "month": 6,
      "manager": "Дарья Тенькова",
      "clients_total": 96,
      "in_work": 91,
      "proposal_sent": 3,
      "closed_lost": 0,
      "success": 0,
      "without_deal": 5,
      "tasks": 0,
      "urgent_call": 0
    },
    {
      "period": "2026-06",
      "year": 2026,
      "month": 6,
      "manager": "Клочкова Ирина",
      "clients_total": 67,
      "in_work": 63,
      "proposal_sent": 0,
      "closed_lost": 1,
      "success": 0,
      "without_deal": 3,
      "tasks": 0,
      "urgent_call": 0
    },
    {
      "period": "2026-06",
      "year": 2026,
      "month": 6,
      "manager": "Не распределено",
      "clients_total": 38,
      "in_work": 14,
      "proposal_sent": 0,
      "closed_lost": 0,
      "success": 0,
      "without_deal": 24,
      "tasks": 3,
      "urgent_call": 0
    },
    {
      "period": "2026-06",
      "year": 2026,
      "month": 6,
      "manager": "Не указан",
      "clients_total": 44,
      "in_work": 2,
      "proposal_sent": 0,
      "closed_lost": 0,
      "success": 0,
      "without_deal": 42,
      "tasks": 0,
      "urgent_call": 0
    }
  ],
  "amo_note": "amoCRM-файл за июнь 2026 содержит контакты/компании, а не полную выгрузку сделок. Статусы рассчитаны по полям «Сделки», «Теги» и «Ближайшая задача»; точная стадия сделки появится после экспорта сделок amoCRM.",
  "paid_suppliers": [
    {
      "year": 2024,
      "vendor": "Штопоров",
      "spend": 0,
      "earned": 0,
      "note": "По Штопорову оставлена только выручка по привязанным сделкам; в текущих данных привязки выручки нет."
    },
    {
      "year": 2024,
      "vendor": "Баш Тудей",
      "spend": 50000.0,
      "earned": 0,
      "note": ""
    },
    {
      "year": 2024,
      "vendor": "Яндекс",
      "spend": 1940223.5,
      "earned": 0,
      "note": ""
    },
    {
      "year": 2025,
      "vendor": "Штопоров",
      "spend": 0,
      "earned": 0,
      "note": "По Штопорову оставлена только выручка по привязанным сделкам; в текущих данных привязки выручки нет."
    },
    {
      "year": 2025,
      "vendor": "Баш Тудей",
      "spend": 57000.0,
      "earned": 0,
      "note": ""
    },
    {
      "year": 2025,
      "vendor": "Яндекс",
      "spend": 1928208.65,
      "earned": 0,
      "note": ""
    },
    {
      "year": 2026,
      "vendor": "Промо групп",
      "spend": 35000.0,
      "earned": 0,
      "note": ""
    },
    {
      "year": 2026,
      "vendor": "Штопоров",
      "spend": 0,
      "earned": 0,
      "note": "По Штопорову оставлена только выручка по привязанным сделкам; в текущих данных привязки выручки нет."
    },
    {
      "year": 2026,
      "vendor": "Баш Тудей",
      "spend": 7500.0,
      "earned": 0,
      "note": ""
    },
    {
      "year": 2026,
      "vendor": "Яндекс",
      "spend": 343868.0,
      "earned": 0,
      "note": ""
    }
  ],
  "amortization_yearly": [
    {
      "year": 2024,
      "amortization_amount": 371902.0,
      "rows_count": 112,
      "cumulative_amount": 371902.0,
      "available_for_amortization": 371902.0,
      "note": "Сумма взята из строк «Амортизация» на листах мероприятий; листы «Инвестиции» и техника не включены."
    },
    {
      "year": 2025,
      "amortization_amount": 390876.51,
      "rows_count": 83,
      "cumulative_amount": 762778.51,
      "available_for_amortization": 390876.51,
      "note": "Сумма взята из строк «Амортизация» на листах мероприятий; листы «Инвестиции» и техника не включены."
    },
    {
      "year": 2026,
      "amortization_amount": 124914.42,
      "rows_count": 10,
      "cumulative_amount": 887692.93,
      "available_for_amortization": 124914.42,
      "note": "Сумма взята из строк «Амортизация» на листах мероприятий; листы «Инвестиции» и техника не включены."
    }
  ],
  "amortization_monthly": [
    {
      "period": "2024-01",
      "year": 2024,
      "month": 1,
      "amount": 31230.0,
      "rows_count": 5
    },
    {
      "period": "2024-02",
      "year": 2024,
      "month": 2,
      "amount": 31227.0,
      "rows_count": 7
    },
    {
      "period": "2024-03",
      "year": 2024,
      "month": 3,
      "amount": 31227.0,
      "rows_count": 6
    },
    {
      "period": "2024-04",
      "year": 2024,
      "month": 4,
      "amount": 28107.0,
      "rows_count": 9
    },
    {
      "period": "2024-05",
      "year": 2024,
      "month": 5,
      "amount": 31230.0,
      "rows_count": 6
    },
    {
      "period": "2024-06",
      "year": 2024,
      "month": 6,
      "amount": 31227.0,
      "rows_count": 7
    },
    {
      "period": "2024-07",
      "year": 2024,
      "month": 7,
      "amount": 31227.0,
      "rows_count": 3
    },
    {
      "period": "2024-08",
      "year": 2024,
      "month": 8,
      "amount": 31232.0,
      "rows_count": 15
    },
    {
      "period": "2024-09",
      "year": 2024,
      "month": 9,
      "amount": 31220.0,
      "rows_count": 13
    },
    {
      "period": "2024-10",
      "year": 2024,
      "month": 10,
      "amount": 31232.0,
      "rows_count": 7
    },
    {
      "period": "2024-11",
      "year": 2024,
      "month": 11,
      "amount": 31234.0,
      "rows_count": 10
    },
    {
      "period": "2024-12",
      "year": 2024,
      "month": 12,
      "amount": 31509.0,
      "rows_count": 24
    },
    {
      "period": "2025-01",
      "year": 2025,
      "month": 1,
      "amount": 31227.0,
      "rows_count": 6
    },
    {
      "period": "2025-02",
      "year": 2025,
      "month": 2,
      "amount": 41636.0,
      "rows_count": 4
    },
    {
      "period": "2025-03",
      "year": 2025,
      "month": 3,
      "amount": 31227.0,
      "rows_count": 7
    },
    {
      "period": "2025-04",
      "year": 2025,
      "month": 4,
      "amount": 26024.71,
      "rows_count": 4
    },
    {
      "period": "2025-05",
      "year": 2025,
      "month": 5,
      "amount": 93684.0,
      "rows_count": 19
    },
    {
      "period": "2025-07",
      "year": 2025,
      "month": 7,
      "amount": 31229.8,
      "rows_count": 6
    },
    {
      "period": "2025-08",
      "year": 2025,
      "month": 8,
      "amount": 31230.0,
      "rows_count": 5
    },
    {
      "period": "2025-09",
      "year": 2025,
      "month": 9,
      "amount": 40077.0,
      "rows_count": 5
    },
    {
      "period": "2025-10",
      "year": 2025,
      "month": 10,
      "amount": 31229.0,
      "rows_count": 11
    },
    {
      "period": "2025-12",
      "year": 2025,
      "month": 12,
      "amount": 33312.0,
      "rows_count": 16
    },
    {
      "period": "2026-01",
      "year": 2026,
      "month": 1,
      "amount": 31228.14,
      "rows_count": 2
    },
    {
      "period": "2026-03",
      "year": 2026,
      "month": 3,
      "amount": 31230.0,
      "rows_count": 3
    },
    {
      "period": "2026-04",
      "year": 2026,
      "month": 4,
      "amount": 31228.28,
      "rows_count": 2
    },
    {
      "period": "2026-05",
      "year": 2026,
      "month": 5,
      "amount": 31228.0,
      "rows_count": 3
    }
  ],
  "amortization_details": [
    {
      "period": "2024-01",
      "year": 2024,
      "month": 1,
      "sheet": "Н-13-01-24",
      "row": 26,
      "amount": 6246.0
    },
    {
      "period": "2024-01",
      "year": 2024,
      "month": 1,
      "sheet": "Е-20-01-24",
      "row": 26,
      "amount": 6246.0
    },
    {
      "period": "2024-01",
      "year": 2024,
      "month": 1,
      "sheet": "А-24-01-24",
      "row": 26,
      "amount": 6246.0
    },
    {
      "period": "2024-01",
      "year": 2024,
      "month": 1,
      "sheet": "Н-27-01-24",
      "row": 26,
      "amount": 6246.0
    },
    {
      "period": "2024-01",
      "year": 2024,
      "month": 1,
      "sheet": "А-28-01-24",
      "row": 26,
      "amount": 6246.0
    },
    {
      "period": "2024-02",
      "year": 2024,
      "month": 2,
      "sheet": "Н-07-02-24",
      "row": 26,
      "amount": 4461.0
    },
    {
      "period": "2024-02",
      "year": 2024,
      "month": 2,
      "sheet": "А-10-02-24",
      "row": 26,
      "amount": 4461.0
    },
    {
      "period": "2024-02",
      "year": 2024,
      "month": 2,
      "sheet": "А-11-02-24",
      "row": 26,
      "amount": 4461.0
    },
    {
      "period": "2024-02",
      "year": 2024,
      "month": 2,
      "sheet": "Н-17-02-24",
      "row": 26,
      "amount": 4461.0
    },
    {
      "period": "2024-02",
      "year": 2024,
      "month": 2,
      "sheet": "Н-22-02-24",
      "row": 26,
      "amount": 4461.0
    },
    {
      "period": "2024-02",
      "year": 2024,
      "month": 2,
      "sheet": "Е-24-02-24",
      "row": 26,
      "amount": 4461.0
    },
    {
      "period": "2024-02",
      "year": 2024,
      "month": 2,
      "sheet": "А-29-02-24",
      "row": 26,
      "amount": 4461.0
    },
    {
      "period": "2024-03",
      "year": 2024,
      "month": 3,
      "sheet": "Е-08-03-24",
      "row": 26,
      "amount": 8922.0
    },
    {
      "period": "2024-03",
      "year": 2024,
      "month": 3,
      "sheet": "Н-16-03-24",
      "row": 26,
      "amount": 4461.0
    },
    {
      "period": "2024-03",
      "year": 2024,
      "month": 3,
      "sheet": "А-17-03-24",
      "row": 26,
      "amount": 4461.0
    },
    {
      "period": "2024-03",
      "year": 2024,
      "month": 3,
      "sheet": "Е-19-03-24",
      "row": 26,
      "amount": 4461.0
    },
    {
      "period": "2024-03",
      "year": 2024,
      "month": 3,
      "sheet": "Е-23-03-24",
      "row": 26,
      "amount": 4461.0
    },
    {
      "period": "2024-03",
      "year": 2024,
      "month": 3,
      "sheet": "А-24-03-24",
      "row": 26,
      "amount": 4461.0
    },
    {
      "period": "2024-04",
      "year": 2024,
      "month": 4,
      "sheet": "А-01-04-24",
      "row": 26,
      "amount": 3123.0
    },
    {
      "period": "2024-04",
      "year": 2024,
      "month": 4,
      "sheet": "Е-12-04-24",
      "row": 26,
      "amount": 3123.0
    },
    {
      "period": "2024-04",
      "year": 2024,
      "month": 4,
      "sheet": "Е-15-04-24",
      "row": 26,
      "amount": 3123.0
    },
    {
      "period": "2024-04",
      "year": 2024,
      "month": 4,
      "sheet": "Н-19-04-24",
      "row": 26,
      "amount": 3123.0
    },
    {
      "period": "2024-04",
      "year": 2024,
      "month": 4,
      "sheet": "А-22-04-24",
      "row": 26,
      "amount": 3123.0
    },
    {
      "period": "2024-04",
      "year": 2024,
      "month": 4,
      "sheet": "Н-25-04-24",
      "row": 26,
      "amount": 3123.0
    },
    {
      "period": "2024-04",
      "year": 2024,
      "month": 4,
      "sheet": "Н-26-04-24",
      "row": 26,
      "amount": 3123.0
    },
    {
      "period": "2024-04",
      "year": 2024,
      "month": 4,
      "sheet": "А-27-04-24",
      "row": 26,
      "amount": 3123.0
    },
    {
      "period": "2024-04",
      "year": 2024,
      "month": 4,
      "sheet": "А-30-04-24",
      "row": 26,
      "amount": 3123.0
    },
    {
      "period": "2024-05",
      "year": 2024,
      "month": 5,
      "sheet": "А-02-05-24",
      "row": 26,
      "amount": 5205.0
    },
    {
      "period": "2024-05",
      "year": 2024,
      "month": 5,
      "sheet": "Н-12-05-24",
      "row": 26,
      "amount": 5205.0
    },
    {
      "period": "2024-05",
      "year": 2024,
      "month": 5,
      "sheet": "Н-15-05-24",
      "row": 26,
      "amount": 5205.0
    },
    {
      "period": "2024-05",
      "year": 2024,
      "month": 5,
      "sheet": "Н-18-05-24",
      "row": 26,
      "amount": 5205.0
    },
    {
      "period": "2024-05",
      "year": 2024,
      "month": 5,
      "sheet": "Н-25-05-24",
      "row": 26,
      "amount": 5205.0
    },
    {
      "period": "2024-05",
      "year": 2024,
      "month": 5,
      "sheet": "А-31-05-24",
      "row": 26,
      "amount": 5205.0
    },
    {
      "period": "2024-06",
      "year": 2024,
      "month": 6,
      "sheet": "Е-01-06-24",
      "row": 26,
      "amount": 4461.0
    },
    {
      "period": "2024-06",
      "year": 2024,
      "month": 6,
      "sheet": "А-11-06-24",
      "row": 26,
      "amount": 4461.0
    },
    {
      "period": "2024-06",
      "year": 2024,
      "month": 6,
      "sheet": "А-15-06-24",
      "row": 26,
      "amount": 4461.0
    },
    {
      "period": "2024-06",
      "year": 2024,
      "month": 6,
      "sheet": "А-21-06-24",
      "row": 26,
      "amount": 4461.0
    },
    {
      "period": "2024-06",
      "year": 2024,
      "month": 6,
      "sheet": "Н-24-06-24",
      "row": 26,
      "amount": 4461.0
    },
    {
      "period": "2024-06",
      "year": 2024,
      "month": 6,
      "sheet": "Н-26-06-24",
      "row": 26,
      "amount": 4461.0
    },
    {
      "period": "2024-06",
      "year": 2024,
      "month": 6,
      "sheet": "А-27-06-24",
      "row": 26,
      "amount": 4461.0
    },
    {
      "period": "2024-07",
      "year": 2024,
      "month": 7,
      "sheet": "А-09-07-24",
      "row": 26,
      "amount": 10409.0
    },
    {
      "period": "2024-07",
      "year": 2024,
      "month": 7,
      "sheet": "Н-13-07-24",
      "row": 26,
      "amount": 10409.0
    },
    {
      "period": "2024-07",
      "year": 2024,
      "month": 7,
      "sheet": "Н-27-07-24",
      "row": 26,
      "amount": 10409.0
    },
    {
      "period": "2024-08",
      "year": 2024,
      "month": 8,
      "sheet": "А-02-08-24",
      "row": 26,
      "amount": 1952.0
    },
    {
      "period": "2024-08",
      "year": 2024,
      "month": 8,
      "sheet": "А-03-08-24",
      "row": 26,
      "amount": 1952.0
    },
    {
      "period": "2024-08",
      "year": 2024,
      "month": 8,
      "sheet": "Н-05-08-24",
      "row": 26,
      "amount": 1952.0
    },
    {
      "period": "2024-08",
      "year": 2024,
      "month": 8,
      "sheet": "А-07-08-24",
      "row": 26,
      "amount": 3904.0
    },
    {
      "period": "2024-08",
      "year": 2024,
      "month": 8,
      "sheet": "Н-11-08-24",
      "row": 26,
      "amount": 1952.0
    },
    {
      "period": "2024-08",
      "year": 2024,
      "month": 8,
      "sheet": "А-12-08-24",
      "row": 26,
      "amount": 1952.0
    },
    {
      "period": "2024-08",
      "year": 2024,
      "month": 8,
      "sheet": "А-14-08-24",
      "row": 26,
      "amount": 1952.0
    },
    {
      "period": "2024-08",
      "year": 2024,
      "month": 8,
      "sheet": "Н-17-08-24",
      "row": 26,
      "amount": 1952.0
    },
    {
      "period": "2024-08",
      "year": 2024,
      "month": 8,
      "sheet": "Н-19-08-24",
      "row": 26,
      "amount": 1952.0
    },
    {
      "period": "2024-08",
      "year": 2024,
      "month": 8,
      "sheet": "А-23-08-24",
      "row": 26,
      "amount": 1952.0
    },
    {
      "period": "2024-08",
      "year": 2024,
      "month": 8,
      "sheet": "Н-24-08-24",
      "row": 26,
      "amount": 1952.0
    },
    {
      "period": "2024-08",
      "year": 2024,
      "month": 8,
      "sheet": "А-28-08-24",
      "row": 26,
      "amount": 1952.0
    },
    {
      "period": "2024-08",
      "year": 2024,
      "month": 8,
      "sheet": "А-29-08-24",
      "row": 26,
      "amount": 1952.0
    },
    {
      "period": "2024-08",
      "year": 2024,
      "month": 8,
      "sheet": "А-30-08-24",
      "row": 26,
      "amount": 1952.0
    },
    {
      "period": "2024-08",
      "year": 2024,
      "month": 8,
      "sheet": "Е-31-08-24",
      "row": 26,
      "amount": 1952.0
    },
    {
      "period": "2024-09",
      "year": 2024,
      "month": 9,
      "sheet": "А-03-09-24",
      "row": 26,
      "amount": 2230.0
    },
    {
      "period": "2024-09",
      "year": 2024,
      "month": 9,
      "sheet": "А-05-09-24",
      "row": 26,
      "amount": 2230.0
    },
    {
      "period": "2024-09",
      "year": 2024,
      "month": 9,
      "sheet": "А-07-09-24",
      "row": 26,
      "amount": 2230.0
    },
    {
      "period": "2024-09",
      "year": 2024,
      "month": 9,
      "sheet": "А-08-09-24",
      "row": 26,
      "amount": 4460.0
    },
    {
      "period": "2024-09",
      "year": 2024,
      "month": 9,
      "sheet": "А-10-09-24",
      "row": 26,
      "amount": 2230.0
    },
    {
      "period": "2024-09",
      "year": 2024,
      "month": 9,
      "sheet": "А-14-09-24",
      "row": 26,
      "amount": 2230.0
    },
    {
      "period": "2024-09",
      "year": 2024,
      "month": 9,
      "sheet": "А-15-09-24",
      "row": 26,
      "amount": 2230.0
    },
    {
      "period": "2024-09",
      "year": 2024,
      "month": 9,
      "sheet": "Н-19-09-24",
      "row": 26,
      "amount": 2230.0
    },
    {
      "period": "2024-09",
      "year": 2024,
      "month": 9,
      "sheet": "Н-20-09-24",
      "row": 26,
      "amount": 2230.0
    },
    {
      "period": "2024-09",
      "year": 2024,
      "month": 9,
      "sheet": "Е-21-09-24",
      "row": 26,
      "amount": 2230.0
    },
    {
      "period": "2024-09",
      "year": 2024,
      "month": 9,
      "sheet": "Н-22-09-24",
      "row": 26,
      "amount": 2230.0
    },
    {
      "period": "2024-09",
      "year": 2024,
      "month": 9,
      "sheet": "Н-27-09-24",
      "row": 26,
      "amount": 2230.0
    },
    {
      "period": "2024-09",
      "year": 2024,
      "month": 9,
      "sheet": "А-28-09-24",
      "row": 26,
      "amount": 2230.0
    },
    {
      "period": "2024-10",
      "year": 2024,
      "month": 10,
      "sheet": "Н-03-10-24",
      "row": 26,
      "amount": 3904.0
    },
    {
      "period": "2024-10",
      "year": 2024,
      "month": 10,
      "sheet": "Н-05-10-24",
      "row": 26,
      "amount": 3904.0
    },
    {
      "period": "2024-10",
      "year": 2024,
      "month": 10,
      "sheet": "Н-11-10-24",
      "row": 26,
      "amount": 3904.0
    },
    {
      "period": "2024-10",
      "year": 2024,
      "month": 10,
      "sheet": "Н-24-10-24",
      "row": 26,
      "amount": 3904.0
    },
    {
      "period": "2024-10",
      "year": 2024,
      "month": 10,
      "sheet": "А-25-10-24",
      "row": 26,
      "amount": 3904.0
    },
    {
      "period": "2024-10",
      "year": 2024,
      "month": 10,
      "sheet": "Е-26-10-24",
      "row": 26,
      "amount": 3904.0
    },
    {
      "period": "2024-10",
      "year": 2024,
      "month": 10,
      "sheet": "А-30-10-24",
      "row": 26,
      "amount": 7808.0
    },
    {
      "period": "2024-11",
      "year": 2024,
      "month": 11,
      "sheet": "Н-03-11-24",
      "row": 26,
      "amount": 2231.0
    },
    {
      "period": "2024-11",
      "year": 2024,
      "month": 11,
      "sheet": "Н-08-11-24",
      "row": 26,
      "amount": 4462.0
    },
    {
      "period": "2024-11",
      "year": 2024,
      "month": 11,
      "sheet": "А-10-11-24",
      "row": 26,
      "amount": 2231.0
    },
    {
      "period": "2024-11",
      "year": 2024,
      "month": 11,
      "sheet": "А-11-11-24",
      "row": 26,
      "amount": 2231.0
    },
    {
      "period": "2024-11",
      "year": 2024,
      "month": 11,
      "sheet": "А-13-11-24",
      "row": 26,
      "amount": 4462.0
    },
    {
      "period": "2024-11",
      "year": 2024,
      "month": 11,
      "sheet": "Н-16-11-24",
      "row": 26,
      "amount": 2231.0
    },
    {
      "period": "2024-11",
      "year": 2024,
      "month": 11,
      "sheet": "А-18-11-24",
      "row": 26,
      "amount": 6693.0
    },
    {
      "period": "2024-11",
      "year": 2024,
      "month": 11,
      "sheet": "Н-23-11-24",
      "row": 26,
      "amount": 2231.0
    },
    {
      "period": "2024-11",
      "year": 2024,
      "month": 11,
      "sheet": "А-24-11-24",
      "row": 26,
      "amount": 2231.0
    },
    {
      "period": "2024-11",
      "year": 2024,
      "month": 11,
      "sheet": "А-30-11-24",
      "row": 26,
      "amount": 2231.0
    },
    {
      "period": "2024-12",
      "year": 2024,
      "month": 12,
      "sheet": "Н-05-12-24",
      "row": 26,
      "amount": 1301.0
    },
    {
      "period": "2024-12",
      "year": 2024,
      "month": 12,
      "sheet": "Н-06-12-24",
      "row": 26,
      "amount": 1301.0
    },
    {
      "period": "2024-12",
      "year": 2024,
      "month": 12,
      "sheet": "А-07-12-24",
      "row": 26,
      "amount": 1301.0
    },
    {
      "period": "2024-12",
      "year": 2024,
      "month": 12,
      "sheet": "Н-08-12-24",
      "row": 26,
      "amount": 1301.0
    },
    {
      "period": "2024-12",
      "year": 2024,
      "month": 12,
      "sheet": "И-09-12-24",
      "row": 26,
      "amount": 1301.0
    },
    {
      "period": "2024-12",
      "year": 2024,
      "month": 12,
      "sheet": "Н-10-12-24",
      "row": 26,
      "amount": 1301.0
    },
    {
      "period": "2024-12",
      "year": 2024,
      "month": 12,
      "sheet": "А-11-12-24",
      "row": 26,
      "amount": 1301.0
    },
    {
      "period": "2024-12",
      "year": 2024,
      "month": 12,
      "sheet": "А-12-12-24",
      "row": 26,
      "amount": 1301.0
    },
    {
      "period": "2024-12",
      "year": 2024,
      "month": 12,
      "sheet": "А-13-12-24",
      "row": 26,
      "amount": 1301.0
    },
    {
      "period": "2024-12",
      "year": 2024,
      "month": 12,
      "sheet": "А-14-12-24",
      "row": 26,
      "amount": 1301.0
    },
    {
      "period": "2024-12",
      "year": 2024,
      "month": 12,
      "sheet": "А-15-12-24",
      "row": 26,
      "amount": 1301.0
    },
    {
      "period": "2024-12",
      "year": 2024,
      "month": 12,
      "sheet": "Н-17-12-24",
      "row": 26,
      "amount": 1301.0
    },
    {
      "period": "2024-12",
      "year": 2024,
      "month": 12,
      "sheet": "А-18-12-24",
      "row": 26,
      "amount": 1301.0
    },
    {
      "period": "2024-12",
      "year": 2024,
      "month": 12,
      "sheet": "А-19-12-24",
      "row": 26,
      "amount": 1301.0
    },
    {
      "period": "2024-12",
      "year": 2024,
      "month": 12,
      "sheet": "Н-20-12-24",
      "row": 26,
      "amount": 1301.0
    },
    {
      "period": "2024-12",
      "year": 2024,
      "month": 12,
      "sheet": "Н-21-12-24",
      "row": 26,
      "amount": 1301.0
    },
    {
      "period": "2024-12",
      "year": 2024,
      "month": 12,
      "sheet": "А-22-12-24",
      "row": 26,
      "amount": 1301.0
    },
    {
      "period": "2024-12",
      "year": 2024,
      "month": 12,
      "sheet": "А-24-12-24",
      "row": 26,
      "amount": 1301.0
    },
    {
      "period": "2024-12",
      "year": 2024,
      "month": 12,
      "sheet": "А-25-12-24",
      "row": 26,
      "amount": 1301.0
    },
    {
      "period": "2024-12",
      "year": 2024,
      "month": 12,
      "sheet": "А-26-12-24",
      "row": 26,
      "amount": 1358.0
    },
    {
      "period": "2024-12",
      "year": 2024,
      "month": 12,
      "sheet": "А-27-12-24",
      "row": 26,
      "amount": 1358.0
    },
    {
      "period": "2024-12",
      "year": 2024,
      "month": 12,
      "sheet": "А-28-12-24",
      "row": 26,
      "amount": 1358.0
    },
    {
      "period": "2024-12",
      "year": 2024,
      "month": 12,
      "sheet": "Н-29-12-24",
      "row": 26,
      "amount": 1358.0
    },
    {
      "period": "2024-12",
      "year": 2024,
      "month": 12,
      "sheet": "Н-30-12-24",
      "row": 26,
      "amount": 1358.0
    },
    {
      "period": "2025-01",
      "year": 2025,
      "month": 1,
      "sheet": "А-11-01-25",
      "row": 26,
      "amount": 4461.0
    },
    {
      "period": "2025-01",
      "year": 2025,
      "month": 1,
      "sheet": "Н-17-01-25",
      "row": 26,
      "amount": 4461.0
    },
    {
      "period": "2025-01",
      "year": 2025,
      "month": 1,
      "sheet": "А-23-01-25",
      "row": 26,
      "amount": 4461.0
    },
    {
      "period": "2025-01",
      "year": 2025,
      "month": 1,
      "sheet": "Е-24-01-25",
      "row": 26,
      "amount": 8922.0
    },
    {
      "period": "2025-01",
      "year": 2025,
      "month": 1,
      "sheet": "И-30-01-25",
      "row": 26,
      "amount": 4461.0
    },
    {
      "period": "2025-01",
      "year": 2025,
      "month": 1,
      "sheet": "Н-31-01-25",
      "row": 26,
      "amount": 4461.0
    },
    {
      "period": "2025-02",
      "year": 2025,
      "month": 2,
      "sheet": "А-01-02-25",
      "row": 26,
      "amount": 10409.0
    },
    {
      "period": "2025-02",
      "year": 2025,
      "month": 2,
      "sheet": "А-05-02-25",
      "row": 26,
      "amount": 10409.0
    },
    {
      "period": "2025-02",
      "year": 2025,
      "month": 2,
      "sheet": "Н-09-02-25",
      "row": 26,
      "amount": 10409.0
    },
    {
      "period": "2025-02",
      "year": 2025,
      "month": 2,
      "sheet": "Н-27-02-25",
      "row": 26,
      "amount": 10409.0
    },
    {
      "period": "2025-03",
      "year": 2025,
      "month": 3,
      "sheet": "И-15-03-25",
      "row": 27,
      "amount": 4461.0
    },
    {
      "period": "2025-03",
      "year": 2025,
      "month": 3,
      "sheet": "А-20-03-25",
      "row": 28,
      "amount": 4461.0
    },
    {
      "period": "2025-03",
      "year": 2025,
      "month": 3,
      "sheet": "А-22-03-25",
      "row": 27,
      "amount": 4461.0
    },
    {
      "period": "2025-03",
      "year": 2025,
      "month": 3,
      "sheet": "И-23-03-25",
      "row": 27,
      "amount": 4461.0
    },
    {
      "period": "2025-03",
      "year": 2025,
      "month": 3,
      "sheet": "А-26-03-25",
      "row": 27,
      "amount": 4461.0
    },
    {
      "period": "2025-03",
      "year": 2025,
      "month": 3,
      "sheet": "Н-29-03-25",
      "row": 26,
      "amount": 4461.0
    },
    {
      "period": "2025-03",
      "year": 2025,
      "month": 3,
      "sheet": "Н-31-03-25",
      "row": 27,
      "amount": 4461.0
    },
    {
      "period": "2025-04",
      "year": 2025,
      "month": 4,
      "sheet": "Н-06-04-25",
      "row": 28,
      "amount": 5204.71
    },
    {
      "period": "2025-04",
      "year": 2025,
      "month": 4,
      "sheet": "А-12-04-25",
      "row": 26,
      "amount": 5205.0
    },
    {
      "period": "2025-04",
      "year": 2025,
      "month": 4,
      "sheet": "А-14-04-25",
      "row": 24,
      "amount": 5205.0
    },
    {
      "period": "2025-04",
      "year": 2025,
      "month": 4,
      "sheet": "Н-23-04-25",
      "row": 25,
      "amount": 10410.0
    },
    {
      "period": "2025-05",
      "year": 2025,
      "month": 5,
      "sheet": "А-10-05-25",
      "row": 26,
      "amount": 5205.0
    },
    {
      "period": "2025-05",
      "year": 2025,
      "month": 5,
      "sheet": "А-11-05-25",
      "row": 26,
      "amount": 10410.0
    },
    {
      "period": "2025-05",
      "year": 2025,
      "month": 5,
      "sheet": "А-17-05-25",
      "row": 25,
      "amount": 5205.0
    },
    {
      "period": "2025-05",
      "year": 2025,
      "month": 5,
      "sheet": "А-23-05-25",
      "row": 25,
      "amount": 5205.0
    },
    {
      "period": "2025-05",
      "year": 2025,
      "month": 5,
      "sheet": "И-30-05-25",
      "row": 27,
      "amount": 5205.0
    },
    {
      "period": "2025-05",
      "year": 2025,
      "month": 5,
      "sheet": "И-07-06-25",
      "row": 28,
      "amount": 4461.0
    },
    {
      "period": "2025-05",
      "year": 2025,
      "month": 5,
      "sheet": "И-08-06-25",
      "row": 28,
      "amount": 4461.0
    },
    {
      "period": "2025-05",
      "year": 2025,
      "month": 5,
      "sheet": "Н-11-06-25",
      "row": 27,
      "amount": 4461.0
    },
    {
      "period": "2025-05",
      "year": 2025,
      "month": 5,
      "sheet": "И-20-06-25",
      "row": 28,
      "amount": 4461.0
    },
    {
      "period": "2025-05",
      "year": 2025,
      "month": 5,
      "sheet": "И-25-06-2025",
      "row": 28,
      "amount": 4461.0
    },
    {
      "period": "2025-05",
      "year": 2025,
      "month": 5,
      "sheet": "И-26-06-25",
      "row": 28,
      "amount": 4461.0
    },
    {
      "period": "2025-05",
      "year": 2025,
      "month": 5,
      "sheet": "И-27-06-25",
      "row": 28,
      "amount": 4461.0
    },
    {
      "period": "2025-07",
      "year": 2025,
      "month": 7,
      "sheet": "Н-01-07-25",
      "row": 25,
      "amount": 5205.0
    },
    {
      "period": "2025-07",
      "year": 2025,
      "month": 7,
      "sheet": "Н-04-07-25",
      "row": 26,
      "amount": 5205.0
    },
    {
      "period": "2025-07",
      "year": 2025,
      "month": 7,
      "sheet": "А-05-07-25",
      "row": 25,
      "amount": 5204.8
    },
    {
      "period": "2025-07",
      "year": 2025,
      "month": 7,
      "sheet": "А-06-07-25",
      "row": 25,
      "amount": 5205.0
    },
    {
      "period": "2025-07",
      "year": 2025,
      "month": 7,
      "sheet": "Н-15-07-25",
      "row": 26,
      "amount": 5205.0
    },
    {
      "period": "2025-07",
      "year": 2025,
      "month": 7,
      "sheet": "И-26-07-25",
      "row": 27,
      "amount": 5205.0
    },
    {
      "period": "2025-08",
      "year": 2025,
      "month": 8,
      "sheet": "Н-02-08-25",
      "row": 27,
      "amount": 6246.0
    },
    {
      "period": "2025-08",
      "year": 2025,
      "month": 8,
      "sheet": "И-06-08-25",
      "row": 28,
      "amount": 6246.0
    },
    {
      "period": "2025-08",
      "year": 2025,
      "month": 8,
      "sheet": "№А-08-08-25",
      "row": 26,
      "amount": 6246.0
    },
    {
      "period": "2025-08",
      "year": 2025,
      "month": 8,
      "sheet": "Н-15-08-25",
      "row": 27,
      "amount": 6246.0
    },
    {
      "period": "2025-08",
      "year": 2025,
      "month": 8,
      "sheet": "№А-22-08-25",
      "row": 26,
      "amount": 6246.0
    },
    {
      "period": "2025-09",
      "year": 2025,
      "month": 9,
      "sheet": "И-06-09-25",
      "row": 27,
      "amount": 10410.0
    },
    {
      "period": "2025-09",
      "year": 2025,
      "month": 9,
      "sheet": "№А-16-09-25",
      "row": 26,
      "amount": 7807.0
    },
    {
      "period": "2025-09",
      "year": 2025,
      "month": 9,
      "sheet": "№А-20-09-25",
      "row": 25,
      "amount": 7807.0
    },
    {
      "period": "2025-09",
      "year": 2025,
      "month": 9,
      "sheet": "№А-26-09-25",
      "row": 27,
      "amount": 7807.0
    },
    {
      "period": "2025-09",
      "year": 2025,
      "month": 9,
      "sheet": "№",
      "row": 26,
      "amount": 6246.0
    },
    {
      "period": "2025-10",
      "year": 2025,
      "month": 10,
      "sheet": "А-11-10-25",
      "row": 27,
      "amount": 2839.0
    },
    {
      "period": "2025-10",
      "year": 2025,
      "month": 10,
      "sheet": "ИА-15-10-25",
      "row": 27,
      "amount": 2839.0
    },
    {
      "period": "2025-10",
      "year": 2025,
      "month": 10,
      "sheet": "А-16-10-25",
      "row": 25,
      "amount": 2839.0
    },
    {
      "period": "2025-10",
      "year": 2025,
      "month": 10,
      "sheet": "А-17-10-25",
      "row": 26,
      "amount": 2839.0
    },
    {
      "period": "2025-10",
      "year": 2025,
      "month": 10,
      "sheet": "И-22-10-25",
      "row": 27,
      "amount": 2839.0
    },
    {
      "period": "2025-10",
      "year": 2025,
      "month": 10,
      "sheet": "Н-23-10-25",
      "row": 26,
      "amount": 2839.0
    },
    {
      "period": "2025-10",
      "year": 2025,
      "month": 10,
      "sheet": "А-24-10-25",
      "row": 27,
      "amount": 2839.0
    },
    {
      "period": "2025-10",
      "year": 2025,
      "month": 10,
      "sheet": "А-25-10-25",
      "row": 26,
      "amount": 2839.0
    },
    {
      "period": "2025-10",
      "year": 2025,
      "month": 10,
      "sheet": "А-28-10-25",
      "row": 28,
      "amount": 2839.0
    },
    {
      "period": "2025-10",
      "year": 2025,
      "month": 10,
      "sheet": "А-30-10-25",
      "row": 27,
      "amount": 2839.0
    },
    {
      "period": "2025-10",
      "year": 2025,
      "month": 10,
      "sheet": "АИ-31-10-25",
      "row": 25,
      "amount": 2839.0
    },
    {
      "period": "2025-05",
      "year": 2025,
      "month": 5,
      "sheet": "А-09-11-25",
      "row": 25,
      "amount": 4461.0
    },
    {
      "period": "2025-05",
      "year": 2025,
      "month": 5,
      "sheet": "А-15-11-25",
      "row": 24,
      "amount": 4461.0
    },
    {
      "period": "2025-05",
      "year": 2025,
      "month": 5,
      "sheet": "А-16-11-25",
      "row": 25,
      "amount": 4461.0
    },
    {
      "period": "2025-05",
      "year": 2025,
      "month": 5,
      "sheet": "И-21-11-25",
      "row": 27,
      "amount": 4461.0
    },
    {
      "period": "2025-05",
      "year": 2025,
      "month": 5,
      "sheet": "А-22-11-25",
      "row": 25,
      "amount": 4461.0
    },
    {
      "period": "2025-05",
      "year": 2025,
      "month": 5,
      "sheet": "Н-26-11-25",
      "row": 28,
      "amount": 4461.0
    },
    {
      "period": "2025-05",
      "year": 2025,
      "month": 5,
      "sheet": "А-30-11-25",
      "row": 25,
      "amount": 4461.0
    },
    {
      "period": "2025-12",
      "year": 2025,
      "month": 12,
      "sheet": "А-05-12-24",
      "row": 25,
      "amount": 2082.0
    },
    {
      "period": "2025-12",
      "year": 2025,
      "month": 12,
      "sheet": "А-07-12-25",
      "row": 25,
      "amount": 2082.0
    },
    {
      "period": "2025-12",
      "year": 2025,
      "month": 12,
      "sheet": "А-09-12-25",
      "row": 24,
      "amount": 2082.0
    },
    {
      "period": "2025-12",
      "year": 2025,
      "month": 12,
      "sheet": "А-10-12-25",
      "row": 25,
      "amount": 2082.0
    },
    {
      "period": "2025-12",
      "year": 2025,
      "month": 12,
      "sheet": "А-12-12-25",
      "row": 25,
      "amount": 2082.0
    },
    {
      "period": "2025-12",
      "year": 2025,
      "month": 12,
      "sheet": "А-13-12-25",
      "row": 25,
      "amount": 2082.0
    },
    {
      "period": "2025-12",
      "year": 2025,
      "month": 12,
      "sheet": "А-15-12-25",
      "row": 25,
      "amount": 2082.0
    },
    {
      "period": "2025-12",
      "year": 2025,
      "month": 12,
      "sheet": "Д-17-12-25",
      "row": 26,
      "amount": 2082.0
    },
    {
      "period": "2025-12",
      "year": 2025,
      "month": 12,
      "sheet": "А-18-12-25",
      "row": 25,
      "amount": 2082.0
    },
    {
      "period": "2025-12",
      "year": 2025,
      "month": 12,
      "sheet": "А-19-12-25",
      "row": 25,
      "amount": 2082.0
    },
    {
      "period": "2025-12",
      "year": 2025,
      "month": 12,
      "sheet": "А-20-12-25",
      "row": 25,
      "amount": 2082.0
    },
    {
      "period": "2025-12",
      "year": 2025,
      "month": 12,
      "sheet": "А-24-12-25",
      "row": 25,
      "amount": 2082.0
    },
    {
      "period": "2025-12",
      "year": 2025,
      "month": 12,
      "sheet": "Д-25-12-25",
      "row": 25,
      "amount": 2082.0
    },
    {
      "period": "2025-12",
      "year": 2025,
      "month": 12,
      "sheet": "А-26-12-25",
      "row": 25,
      "amount": 2082.0
    },
    {
      "period": "2025-12",
      "year": 2025,
      "month": 12,
      "sheet": "И-26-12-25",
      "row": 24,
      "amount": 2082.0
    },
    {
      "period": "2025-12",
      "year": 2025,
      "month": 12,
      "sheet": "А-27-12-25",
      "row": 24,
      "amount": 2082.0
    },
    {
      "period": "2026-01",
      "year": 2026,
      "month": 1,
      "sheet": "Д-16-01-26",
      "row": 25,
      "amount": 15614.14
    },
    {
      "period": "2026-01",
      "year": 2026,
      "month": 1,
      "sheet": "А-17-01-26",
      "row": 24,
      "amount": 15614.0
    },
    {
      "period": "2026-03",
      "year": 2026,
      "month": 3,
      "sheet": "№И-21-03-26",
      "row": 25,
      "amount": 10410.0
    },
    {
      "period": "2026-03",
      "year": 2026,
      "month": 3,
      "sheet": "№Д-22-03-26",
      "row": 24,
      "amount": 10410.0
    },
    {
      "period": "2026-03",
      "year": 2026,
      "month": 3,
      "sheet": "№А-31-03-26",
      "row": 25,
      "amount": 10410.0
    }
  ],
  "leadership_recommendations": [
    {
      "priority": 1,
      "source": "Лид не найден",
      "decision": "Сначала исправить склейку Calltouch и amoCRM",
      "why": "83 сделки и 12 330 240 ₽ выручки не имеют источника. Пока это не размечено, бюджет нельзя перераспределять точно."
    },
    {
      "priority": 2,
      "source": "Яндекс / cpc / autotargeting",
      "decision": "Оставить, но чистить autotargeting и UTM",
      "why": "69240 ₽ расхода дали 24 лида, 21 сделку и 4 190 000 ₽ выручки; слабое место — конверсия клика в лид 0,20%."
    },
    {
      "priority": 3,
      "source": "Органика",
      "decision": "Усилить бесплатный канал",
      "why": "29 лидов, 20 сделок, 5 570 000 ₽ выручки без рекламного расхода."
    },
    {
      "priority": 4,
      "source": "Рекомендации",
      "decision": "Сделать отдельную программу рекомендаций",
      "why": "6 лидов превратились в 6 сделок и 1 230 000 ₽ выручки."
    },
    {
      "priority": 5,
      "source": "Не размечено",
      "decision": "Навести порядок в источниках",
      "why": "17 лидов, 12 сделок и 1 880 000 ₽ выручки сейчас нельзя отнести к конкретному каналу."
    }
  ]
};

const marketingData = window.ARCHILOFT_MARKETING_DATA || {
  calltouch_june_2026: { summary: {}, rows: [] },
  amo_source_monthly: [],
  amo_manager_june: [],
  paid_suppliers: [],
  amortization_yearly: [],
  amortization_monthly: [],
  leadership_recommendations: [],
  amo_note: ""
};

function dateFromPeriod(period) {
  return `${period}-01`;
}

const managers = ["Клочкова Ирина", "Вероника Нам", "Дарья Тенькова"];

const seedDeals = financeData.monthly.map((month, index) => ({
  id: `${month.period}-balance`,
  date: dateFromPeriod(month.period),
  channel: "Реклама из баланса",
  type: "Все мероприятия месяца",
  manager: managers[index % managers.length],
  status: "event",
  leads: month.events_count,
  marketing: Math.round(month.ad_spend || 0),
  revenue: Math.round(month.revenue || 0),
  costs: Math.max(0, Math.round((month.expenses || 0) - (month.ad_spend || 0)))
}));

const channels = Array.from(new Set(["Реклама из баланса", ...financeData.ad_lines.map((line) => line.name)])).slice(0, 80);
const types = Array.from(new Set(["Все мероприятия месяца", ...financeData.events.map((event) => event.type)])).slice(0, 80);
const statuses = [
  ["lead", "Лид"],
  ["hold", "Просмотр"],
  ["booked", "Бронь"],
  ["event", "Мероприятие"]
];

const state = {
  deals: loadDeals(),
  managerOverrides: loadManagerOverrides(),
  manualAds: loadManualRows(MANUAL_AD_KEY),
  manualFinance: loadManualRows(MANUAL_FINANCE_KEY),
  view: "overview"
};

const money = new Intl.NumberFormat("ru-RU", { style: "currency", currency: "RUB", maximumFractionDigits: 0 });
const number = new Intl.NumberFormat("ru-RU");

function normalizeDeals(deals) {
  const oldManagerMap = {
    "Анна Смирнова": "Клочкова Ирина",
    "Ирина Клочкова": "Клочкова Ирина",
    "Иван Петров": "Дарья Тенькова",
    "Мария Кузнецова": "Вероника Нам",
    "Алексей Власов": "Клочкова Ирина"
  };
  return deals.map((deal, index) => ({
    ...deal,
    manager: managers.includes(deal.manager) ? deal.manager : oldManagerMap[deal.manager] || managers[index % managers.length]
  }));
}

function loadManagerOverrides() {
  try {
    const parsed = JSON.parse(localStorage.getItem(MANAGER_OVERRIDES_KEY) || "{}");
    return typeof parsed === "object" && parsed ? parsed : {};
  } catch {
    return {};
  }
}

function saveManagerOverrides() {
  localStorage.setItem(MANAGER_OVERRIDES_KEY, JSON.stringify(state.managerOverrides));
}

function loadManualRows(key) {
  try {
    const parsed = JSON.parse(localStorage.getItem(key) || "[]");
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveManualRows(key, rows) {
  localStorage.setItem(key, JSON.stringify(rows));
}

function loadDeals() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return normalizeDeals(seedDeals);
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? normalizeDeals(parsed) : normalizeDeals(seedDeals);
  } catch {
    return normalizeDeals(seedDeals);
  }
}

function saveDeals() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.deals));
}

function byDateRange(deal) {
  const from = document.querySelector("#dateFrom").value;
  const to = document.querySelector("#dateTo").value;
  return (!from || deal.date >= from) && (!to || deal.date <= to);
}

function filteredDeals() {
  return state.deals.filter(byDateRange);
}

function activeMonthly() {
  const from = document.querySelector("#dateFrom").value;
  const to = document.querySelector("#dateTo").value;
  return financeData.monthly.filter((month) => {
    const date = dateFromPeriod(month.period);
    return (!from || date >= from) && (!to || date <= to);
  });
}

function activeEvents() {
  const from = document.querySelector("#dateFrom").value;
  const to = document.querySelector("#dateTo").value;
  return financeData.events.filter((event) => event.date && (!from || event.date >= from) && (!to || event.date <= to));
}

function activeAdLines() {
  const periods = new Set(activeMonthly().map((month) => month.period));
  return financeData.ad_lines.filter((line) => periods.has(line.period));
}

function activeAdBreakdown() {
  const periods = new Set(activeMonthly().map((month) => month.period));
  return (financeData.ad_breakdown || []).filter((line) => periods.has(line.period));
}

function activeEquipmentMonthly() {
  const periods = new Set(activeMonthly().map((month) => month.period));
  return (financeData.equipment_monthly || []).filter((row) => periods.has(row.period));
}

function daysInPeriod(period) {
  const [year, month] = period.split("-").map(Number);
  return new Date(year, month, 0).getDate();
}

function activeYears() {
  return Array.from(new Set(activeMonthly().map((month) => month.year))).sort();
}

function normalizedAmoRows(rows) {
  const byManager = new Map((rows || []).map((row) => [row.manager, row]));
  const empty = {
    clients_total: 0,
    in_work: 0,
    closed_lost: 0,
    success: 0,
    without_deal: 0,
    tasks: 0,
    urgent_call: 0
  };
  const requiredRows = managers.map((manager) => ({ manager, ...empty, ...(byManager.get(manager) || {}) }));
  const otherRows = (rows || []).filter((row) => !managers.includes(row.manager));
  return [...requiredRows, ...otherRows];
}

function activeEventTypes() {
  const periods = new Set(activeMonthly().map((month) => month.period));
  return financeData.event_types.filter((row) => periods.has(row.period));
}

function sum(items, key) {
  return items.reduce((total, item) => total + Number(item[key] || 0), 0);
}

function romi(revenue, marketing) {
  if (!marketing) return revenue ? 100 : 0;
  return ((revenue - marketing) / marketing) * 100;
}

function profit(deals) {
  return sum(deals, "revenue") - sum(deals, "marketing") - sum(deals, "costs");
}

function groupBy(items, key) {
  return items.reduce((groups, item) => {
    const value = typeof key === "function" ? key(item) : item[key];
    groups[value] = groups[value] || [];
    groups[value].push(item);
    return groups;
  }, {});
}

function statusLabel(status) {
  return statuses.find(([value]) => value === status)?.[1] || status;
}

function pct(value) {
  return `${Math.round(value)}%`;
}

function formatMoney(value) {
  return money.format(Math.round(value)).replace(",00", "");
}

function sourceTypeLabel(type) {
  const labels = { paid: "Платный", free: "Бесплатный", untracked: "Не склеен" };
  return labels[type] || "Другое";
}

function setDefaultDates() {
  document.querySelector("#dateFrom").value = "2026-01-01";
  document.querySelector("#dateTo").value = "2026-05-31";
}

function applyPreset() {
  const preset = document.querySelector("#periodPreset").value;
  if (["2024", "2025", "2026"].includes(preset)) {
    document.querySelector("#dateFrom").value = `${preset}-01-01`;
    document.querySelector("#dateTo").value = preset === "2026" ? "2026-05-31" : `${preset}-12-31`;
  }
  if (preset === "month") {
    document.querySelector("#dateFrom").value = "2026-05-01";
    document.querySelector("#dateTo").value = "2026-05-31";
  }
  if (preset === "quarter") {
    document.querySelector("#dateFrom").value = "2026-03-01";
    document.querySelector("#dateTo").value = "2026-05-31";
  }
  if (preset === "all") {
    document.querySelector("#dateFrom").value = "";
    document.querySelector("#dateTo").value = "";
  }
  render();
}

function renderKpis(deals) {
  const months = activeMonthly();
  const revenue = sum(months, "revenue");
  const marketing = sum(months, "ad_spend");
  const events = sum(months, "events_count");
  const totalProfit = sum(months, "profit");
  const avgCheck = events ? revenue / events : 0;
  const items = [
    ["ROMI", pct(romi(revenue, marketing)), `${months.length} мес.`, "↗", "green"],
    ["Выручка", formatMoney(revenue), "по балансам", "▣", "violet"],
    ["Прибыль", formatMoney(totalProfit), "прибыль/убыток", "▥", totalProfit < 0 ? "red" : "green"],
    ["Расход на рекламу", formatMoney(marketing), "строка реклама", "⌁", "orange"],
    ["Мероприятия", number.format(events), "листов мероприятий", "□", "blue"],
    ["Средний чек", formatMoney(avgCheck), "выручка / события", "≡", "yellow"]
  ];

  document.querySelector("#kpis").innerHTML = items.map(([title, value, trend, icon, tone], index) => `
    <article class="kpi">
      <div class="kpi-top">
        <span>${title}</span>
        <span class="kpi-icon" style="background: var(--${tone}-soft); color: var(--${tone});">${icon}</span>
      </div>
      <strong>${value}</strong>
      <span class="trend">${trend}</span>
      ${sparkline(index)}
    </article>
  `).join("");
}

function sparkline(offset) {
  const values = [12, 19, 17, 25, 15, 29, 27, 35, 31, 24, 28, 38].map((value) => value + offset * 2);
  const points = values.map((value, index) => `${index * 18},${35 - value * 0.65}`).join(" ");
  return `<svg class="spark" viewBox="0 0 200 42" preserveAspectRatio="none"><polyline points="${points}" fill="none" stroke="currentColor" stroke-width="2"/></svg>`;
}

function renderLineChart(deals) {
  const months = activeMonthly().sort((a, b) => a.period.localeCompare(b.period));
  if (!months.length) {
    document.querySelector("#romiHint").textContent = "Нет данных";
    document.querySelector("#romiChart").innerHTML = `<div class="empty-chart">Нет данных за выбранный период</div>`;
    return;
  }
  const values = months.map((month) => romi(month.revenue, month.ad_spend));
  const max = Math.ceil(Math.max(400, ...values) / 500) * 500;
  const width = 820;
  const height = 270;
  const plot = { x: 54, y: 32, w: 710, h: 172 };
  const labelStep = Math.max(1, Math.ceil(months.length / 12));
  const pointLabelStep = Math.max(1, Math.ceil(months.length / 8));
  const points = values.map((value, index) => {
    const x = plot.x + (months.length === 1 ? plot.w / 2 : (plot.w / (months.length - 1)) * index);
    const y = plot.y + plot.h - (value / max) * plot.h;
    return { x, y, value, month: months[index].period };
  });
  const poly = points.map((point) => `${point.x},${point.y}`).join(" ");
  const area = `${plot.x},${plot.y + plot.h} ${poly} ${plot.x + plot.w},${plot.y + plot.h}`;
  const ticks = Array.from({ length: 5 }, (_, index) => Math.round((max / 4) * index));

  document.querySelector("#romiHint").textContent = `${months.length} мес. в периоде`;
  document.querySelector("#romiChart").innerHTML = `
    <svg viewBox="0 0 ${width} ${height}" role="img" aria-label="ROMI по месяцам">
      <defs>
        <linearGradient id="lineFill" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stop-color="#7257d8" stop-opacity="0.28"/>
          <stop offset="1" stop-color="#7257d8" stop-opacity="0"/>
        </linearGradient>
      </defs>
      ${ticks.map((tick) => {
        const y = plot.y + plot.h - (tick / max) * plot.h;
        return `<line x1="${plot.x}" x2="${plot.x + plot.w}" y1="${y}" y2="${y}" stroke="#edf0f6"/><text x="8" y="${y + 4}" class="chart-label">${tick}%</text>`;
      }).join("")}
      <polygon points="${area}" fill="url(#lineFill)"/>
      <polyline points="${poly}" fill="none" stroke="#7257d8" stroke-width="3"/>
      ${points.map((point, index) => `<circle cx="${point.x}" cy="${point.y}" r="5" fill="#fff" stroke="#7257d8" stroke-width="3"/>${index % pointLabelStep === 0 || index === points.length - 1 ? `<text x="${point.x}" y="${Math.max(16, point.y - 13)}" text-anchor="middle" class="chart-label value-label">${pct(point.value)}</text>` : ""}`).join("")}
      ${points.map((point, index) => (index % labelStep === 0 || index === points.length - 1) ? `<text x="${point.x}" y="238" text-anchor="middle" class="chart-label month-label">${monthName(point.month)} ${point.month.slice(2, 4)}</text>` : "").join("")}
    </svg>
  `;
}

function monthName(key) {
  const names = ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"];
  return names[Number(key.slice(5, 7)) - 1];
}

function renderFunnel(deals) {
  const leads = sum(deals, "leads");
  const holds = deals.filter((deal) => ["hold", "booked", "event"].includes(deal.status)).length * 16;
  const booked = deals.filter((deal) => ["booked", "event"].includes(deal.status)).length;
  const events = deals.filter((deal) => deal.status === "event").length;
  const steps = [
    ["Показы рекламы", leads * 420, 0],
    ["Переходы", leads * 42, 10],
    ["Заявки (лиды)", leads, leads ? 3.5 : 0],
    ["Созвоны", Math.round(leads * 0.5), leads ? 50 : 0],
    ["Просмотры площадки", holds, leads ? (holds / leads) * 100 : 0],
    ["Предварительные брони", booked, holds ? (booked / holds) * 100 : 0],
    ["Оплата (бронь)", events, booked ? (events / booked) * 100 : 0],
    ["Мероприятия проведено", events, events ? 100 : 0]
  ];
  const max = Math.max(...steps.map((step) => step[1]), 1);
  document.querySelector("#funnelChart").innerHTML = steps.map(([label, value, conversion]) => `
    <div class="funnel-row">
      <span>${label}</span>
      <div class="bar-track"><div class="bar-fill" style="width:${Math.max(2, (value / max) * 100)}%"></div></div>
      <b>${number.format(value)}</b>
      <span>${conversion ? `${conversion.toFixed(1)}%` : "—"}</span>
    </div>
  `).join("");
}

function renderChannelRows(deals) {
  const adLines = activeAdBreakdown();
  const grouped = groupBy(adLines, "vendor");
  const totalRevenue = sum(activeMonthly(), "revenue");
  const totalMarketing = sum(adLines, "amount");
  document.querySelector("#channelRows").innerHTML = Object.entries(grouped)
    .sort((a, b) => sum(b[1], "amount") - sum(a[1], "amount"))
    .slice(0, 12)
    .map(([channel, rows]) => {
      const marketing = sum(rows, "amount");
      const revenue = totalMarketing ? totalRevenue * (marketing / totalMarketing) : 0;
      const value = romi(revenue, marketing);
      return `<tr><td>${channel}</td><td>${formatMoney(marketing)}</td><td>${formatMoney(revenue)}</td><td class="${value < 0 ? "negative" : "positive"}">${pct(value)}</td></tr>`;
    }).join("");
}

function renderEquipment() {
  const rows = activeEquipmentMonthly();
  const revenue = sum(rows, "revenue");
  const expenses = sum(rows, "expenses");
  const net = sum(rows, "net");
  const purchase = sum(financeData.equipment_summary || [], "purchase_cost");
  const remaining = Math.max(0, purchase - sum(financeData.equipment_summary || [], "net"));
  document.querySelector("#equipmentHint").textContent = `${rows.length} строк за период`;
  document.querySelector("#equipmentSummary").innerHTML = [
    ["Закупка техники", purchase],
    ["Доход за период", revenue],
    ["Расход за период", expenses],
    ["Чистыми за период", net],
    ["Остаток окупаемости", remaining]
  ].map(([label, value]) => `<div class="mini-card"><span>${label}</span><strong>${formatMoney(value)}</strong></div>`).join("");

  document.querySelector("#equipmentRows").innerHTML = rows.length ? rows
    .sort((a, b) => a.period.localeCompare(b.period) || a.category.localeCompare(b.category))
    .map((row) => `
      <tr>
        <td>${monthName(row.period)} ${row.year}</td>
        <td>${row.category}</td>
        <td>${number.format(row.events_count)}</td>
        <td>${formatMoney(row.revenue)}</td>
        <td>${formatMoney(row.agency || 0)}</td>
        <td>${formatMoney(row.investors || 0)}</td>
        <td>${formatMoney((row.repair || 0) + (row.other_expenses || 0) + (row.manager_bonus || 0))}</td>
        <td>${formatMoney(row.tax || 0)}</td>
        <td>${formatMoney(row.tech_specialist || 0)}</td>
        <td class="${row.net < 0 ? "negative" : "positive"}">${formatMoney(row.net)}</td>
      </tr>
    `).join("") : `<tr><td colspan="10">За выбранный период строк по технике нет. Выберите 2024, 2025 или “Все данные”.</td></tr>`;
}

function renderAdvertising() {
  const years = new Set(activeYears());
  const byYear = (financeData.ad_by_year || []).filter((row) => years.size === 0 || years.has(row.year));
  document.querySelector("#adYearRows").innerHTML = byYear
    .sort((a, b) => a.year - b.year || b.amount - a.amount)
    .map((row) => `<tr><td>${row.year}</td><td>${row.vendor}</td><td>${formatMoney(row.amount)}</td></tr>`)
    .join("");

  const detailRows = activeAdBreakdown()
    .sort((a, b) => a.period.localeCompare(b.period) || b.amount - a.amount)
    .slice(0, 120)
    .map((row) => `
      <tr>
        <td>${monthName(row.period)} ${row.year}</td>
        <td>${row.vendor}</td>
        <td>${row.name}</td>
        <td>${formatMoney(row.amount)}</td>
      </tr>
    `).join("");
  document.querySelector("#adDetailRows").innerHTML = detailRows || `<tr><td colspan="4">За выбранный период рекламных платежей нет.</td></tr>`;
}

function renderSourceDashboard() {
  const calltouch = marketingData.calltouch_june_2026 || { summary: {}, rows: [] };
  const summary = calltouch.summary || {};
  const cpl = summary.all_leads ? summary.budget / summary.all_leads : 0;
  const kpis = [
    ["Расход", summary.budget || 0],
    ["Все лиды", summary.all_leads || 0, "number"],
    ["Целевые лиды", summary.target_leads || 0, "number"],
    ["Сделки", summary.deals || 0, "number"],
    ["Выручка", summary.revenue || 0],
    ["Цена лида", cpl],
    ["ROI", summary.roi || 0, "percent"],
  ];
  document.querySelector("#sourceKpis").innerHTML = kpis.map(([label, value, kind]) => `
    <div class="mini-card">
      <span>${label}</span>
      <strong>${kind === "number" ? number.format(value) : kind === "percent" ? `${number.format(Math.round(value))}%` : formatMoney(value)}</strong>
    </div>
  `).join("");

  const blind = (calltouch.rows || []).find((row) => row.source === "Лид не найден");
  document.querySelector("#sourceWarning").innerHTML = blind
    ? `Главная точка контроля: ${number.format(blind.deals)} сделки и ${formatMoney(blind.revenue)} выручки попали в “Лид не найден”. Сначала нужна склейка Calltouch и amoCRM, иначе бюджет нельзя распределить честно.`
    : "Данные Calltouch загружены.";

  document.querySelector("#sourceRows").innerHTML = (calltouch.rows || [])
    .sort((a, b) => b.revenue - a.revenue || b.leads - a.leads)
    .map((row) => `
      <tr>
        <td>${row.source}</td>
        <td><span class="source-tag ${row.type}">${sourceTypeLabel(row.type)}</span></td>
        <td>${formatMoney(row.spend || 0)}</td>
        <td>${number.format(row.clicks || 0)}</td>
        <td>${number.format(row.leads || 0)}</td>
        <td>${row.leads ? formatMoney(row.cpl || 0) : "—"}</td>
        <td>${number.format(row.deals || 0)}</td>
        <td>${formatMoney(row.revenue || 0)}</td>
        <td>${row.lead_rate ? `${row.lead_rate.toFixed(2)}%` : "—"}</td>
      </tr>
    `).join("");

  document.querySelector("#recommendationRows").innerHTML = (marketingData.leadership_recommendations || []).map((row) => `
    <div class="decision">
      <b>${row.priority}. ${row.source}</b>
      <strong>${row.decision}</strong>
      <span>${row.why}</span>
    </div>
  `).join("");

  document.querySelector("#amoSourceRows").innerHTML = (marketingData.amo_source_monthly || []).length
    ? marketingData.amo_source_monthly.map((row) => `
      <tr>
        <td>${row.source}</td>
        <td>${number.format(row.clients_total || 0)}</td>
        <td>${number.format(row.in_work || 0)}</td>
        <td>${number.format(row.proposal_sent || 0)}</td>
        <td>${number.format(row.success || 0)}</td>
        <td>${number.format(row.closed_lost || 0)}</td>
        <td>${number.format(row.without_deal || 0)}</td>
        <td>${number.format(row.tasks || 0)}</td>
      </tr>
    `).join("")
    : `<tr><td colspan="8">За 1–29 июня в amoCRM-файле не найдено строк для агрегации.</td></tr>`;
  document.querySelector("#amoSourceNote").textContent = marketingData.amo_note || "";

  document.querySelector("#supplierRows").innerHTML = (marketingData.paid_suppliers || [])
    .filter((row) => activeYears().includes(row.year) || activeYears().length === 0)
    .map((row) => `
      <tr>
        <td>${row.year}</td>
        <td>${row.vendor}</td>
        <td>${row.spend ? formatMoney(row.spend) : "—"}</td>
        <td>${row.earned ? formatMoney(row.earned) : "нет привязки"}</td>
        <td>${row.note || "Расход из сводных рекламных строк"}</td>
      </tr>
    `).join("");
}

function renderSalesAndAmo() {
  const months = activeMonthly();
  const events = sum(months, "events_count");
  const adSpend = sum(months, "ad_spend");
  const revenue = sum(months, "revenue");
  document.querySelector("#salesBox").innerHTML = `
    <div class="status-line good">Рекламные расходы уже стоят в расходах дашборда: ${formatMoney(adSpend)}</div>
    <div class="summary-grid">
      <div class="mini-card"><span>Реализовано мероприятий</span><strong>${number.format(events)}</strong></div>
      <div class="mini-card"><span>Выручка по балансам</span><strong>${formatMoney(revenue)}</strong></div>
      <div class="mini-card"><span>Средний чек</span><strong>${formatMoney(events ? revenue / events : 0)}</strong></div>
    </div>
    <p class="muted-note">Google-таблицы по рекламе и продажам добавлены как следующий источник. Для живой загрузки нужен доступ на чтение или экспорт CSV из этих таблиц.</p>
  `;

  const amoRows = normalizedAmoRows(financeData.amo_summary || []);
  document.querySelector("#amoBox").innerHTML = amoRows.length ? `
    <div class="status-line good">База клиентов не загружена в дашборд: показаны только количества по менеджерам и статусам.</div>
    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th>Менеджер</th>
            <th>Всего</th>
            <th>В работе</th>
            <th>Закрыто нереализовано</th>
            <th>Успешно реализовано</th>
            <th>Без сделки</th>
            <th>Задач</th>
            <th>Срочно позвонить</th>
          </tr>
        </thead>
        <tbody>
          ${amoRows.map((row) => `
            <tr>
              <td>${row.manager}</td>
              <td>${number.format(row.clients_total || 0)}</td>
              <td>${number.format(row.in_work || 0)}</td>
              <td>${number.format(row.closed_lost || 0)}</td>
              <td>${number.format(row.success || 0)}</td>
              <td>${number.format(row.without_deal || 0)}</td>
              <td>${number.format(row.tasks || 0)}</td>
              <td class="${row.urgent_call ? "negative" : ""}">${number.format(row.urgent_call || 0)}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
    <p class="muted-note">${financeData.amo_note || "Ответственный “Юлия” автоматически считается как “Вероника Нам”."}</p>
  ` : `
    <div class="status-line">amoCRM готов к подключению: ответственный “Юлия” будет автоматически считаться как “Вероника Нам”.</div>
    <p class="muted-note">Для точных статусов нужна выгрузка сделок amoCRM со стадией, суммой, источником и ответственным.</p>
  `;
}

function renderAmortization() {
  const yearlyRows = (marketingData.amortization_yearly || financeData.amortization_yearly || []);
  document.querySelector("#amortizationRows").innerHTML = yearlyRows
    .map((row) => `
      <tr>
        <td>${row.year}</td>
        <td>${number.format(row.rows_count || 0)}</td>
        <td>${formatMoney(row.amortization_amount || row.available_for_amortization || 0)}</td>
        <td>${formatMoney(row.cumulative_amount || 0)}</td>
        <td>${row.note || "Строка амортизации из сводных"}</td>
      </tr>
    `).join("");
  document.querySelector("#amortizationMonthRows").innerHTML = (marketingData.amortization_monthly || [])
    .filter((row) => activeYears().includes(row.year))
    .map((row) => `
      <tr>
        <td>${monthName(row.period)} ${row.year}</td>
        <td>${number.format(row.rows_count || 0)}</td>
        <td>${formatMoney(row.amount || 0)}</td>
      </tr>
    `).join("") || `<tr><td colspan="3">За выбранный период строк амортизации нет.</td></tr>`;
}

function renderEventRows(deals) {
  const grouped = groupBy(activeEventTypes(), "type");
  document.querySelector("#eventRows").innerHTML = Object.entries(grouped)
    .sort((a, b) => sum(b[1], "events_count") - sum(a[1], "events_count"))
    .map(([type, rows]) => {
      const revenue = sum(rows, "rent_revenue");
      const totalProfit = sum(rows, "total_profit");
      return `<tr><td>${type}</td><td>${number.format(sum(rows, "events_count"))}</td><td>${formatMoney(revenue)}</td><td class="${totalProfit < 0 ? "negative" : "positive"}">${formatMoney(totalProfit)}</td></tr>`;
    }).join("");
}

function renderCalendar(deals) {
  const events = activeEvents();
  const bookedDates = new Set(events.map((event) => event.date));
  const calendarMonth = (document.querySelector("#dateFrom").value || events[0]?.date || "2026-05-01").slice(0, 7);
  const [year, month] = calendarMonth.split("-").map(Number);
  const daysInMonth = new Date(year, month, 0).getDate();
  const days = Array.from({ length: daysInMonth }, (_, index) => {
    const day = index + 1;
    const iso = `${calendarMonth}-${String(day).padStart(2, "0")}`;
    const cls = bookedDates.has(iso) ? "booked" : "";
    return `<div class="day ${cls}">${day}</div>`;
  });
  const occupancy = Math.round(([...bookedDates].filter((date) => date.startsWith(calendarMonth)).length / daysInMonth) * 100);
  document.querySelector("#calendarGrid").innerHTML = days.join("");
  document.querySelector("#occupancyLabel").textContent = `${calendarMonth} · Занятость ${occupancy}%`;
  renderOccupancyRows();
}

function renderOccupancyRows() {
  const rows = activeMonthly().sort((a, b) => a.period.localeCompare(b.period));
  document.querySelector("#occupancyRows").innerHTML = rows.length ? rows.map((row) => {
    const days = daysInPeriod(row.period);
    const percent = days ? (row.events_count / days) * 100 : 0;
    return `
      <tr>
        <td>${row.year}</td>
        <td>${monthName(row.period)}</td>
        <td>${number.format(row.events_count)}</td>
        <td>${number.format(days)}</td>
        <td>${pct(percent)}</td>
      </tr>
    `;
  }).join("") : `<tr><td colspan="5">За выбранный период мероприятий нет.</td></tr>`;
}

function renderCac(deals) {
  const months = activeMonthly();
  const eventCount = sum(months, "events_count") || 1;
  const marketing = sum(months, "ad_spend");
  const leads = eventCount * 8;
  const stages = [
    ["Лид", leads],
    ["Просмотр площадки", Math.max(1, Math.round(eventCount * 2.5))],
    ["Бронь", Math.max(1, Math.round(eventCount * 1.25))],
    ["Мероприятие", eventCount]
  ];
  document.querySelector("#cacList").innerHTML = stages.map(([label, count], index) => `
    <div class="metric-row">
      <span>${label}</span>
      <b>${formatMoney(marketing / count)}</b>
      ${miniLine(index)}
    </div>
  `).join("");
}

function miniLine(offset) {
  const points = [8, 12, 10, 15, 9, 18, 14, 21, 17].map((v, i) => `${i * 12},${26 - v - offset}`).join(" ");
  return `<svg class="mini-line" viewBox="0 0 100 28"><polyline points="${points}" fill="none" stroke="#9a87df" stroke-width="2"/></svg>`;
}

function renderManagers(deals) {
  const grouped = groupBy(deals, "manager");
  document.querySelector("#managerRows").innerHTML = managers.map((manager) => {
    const rows = grouped[manager] || [];
    const bookings = rows.filter((deal) => ["booked", "event"].includes(deal.status)).length;
    const override = state.managerOverrides[manager] || {};
    const leadsValue = override.leads ?? sum(rows, "leads");
    const bookingsValue = override.bookings ?? bookings;
    return `
      <tr>
        <td>${manager}</td>
        <td><input class="manager-edit" type="number" min="0" data-manager="${manager}" data-manager-field="leads" value="${leadsValue}"></td>
        <td><input class="manager-edit" type="number" min="0" data-manager="${manager}" data-manager-field="bookings" value="${bookingsValue}"></td>
        <td class="positive">${pct(romi(sum(rows, "revenue"), sum(rows, "marketing")))}</td>
      </tr>
    `;
  }).join("");
}

function renderFinance(deals) {
  const months = activeMonthly();
  const revenue = sum(months, "revenue");
  const marketing = sum(months, "ad_spend");
  const expenses = sum(months, "expenses");
  const totalProfit = sum(months, "profit");
  const percent = revenue ? Math.max(0, Math.min(100, (totalProfit / revenue) * 100)) : 0;
  document.querySelector("#profitDonut").style.background = `conic-gradient(var(--violet) ${percent}%, #edf0f6 0)`;
  document.querySelector("#profitDonut").innerHTML = `<div class="donut-label">Прибыль<b>${formatMoney(totalProfit)}</b>${pct(percent)}</div>`;
  document.querySelector("#financeRows").innerHTML = [
    ["Выручка", revenue],
    ["Реклама", -marketing],
    ["Расходы всего", -expenses],
    ["Расходы без рекламы", -(expenses - marketing)],
    ["Прибыль/убыток", totalProfit]
  ].map(([label, value]) => `<div class="finance-row"><span>${label}</span><b>${formatMoney(value)}</b></div>`).join("");
}

function renderRepeatAndForecast(deals) {
  const months = activeMonthly();
  const eventCount = sum(months, "events_count");
  const revenue = sum(months, "revenue");
  const repeat = Math.round(eventCount * 0.28);
  document.querySelector("#repeatBox").innerHTML = `
    <div class="repeat-card"><span>Новые клиенты</span><strong>${Math.max(0, eventCount - repeat)}</strong><small>Расчетная доля</small></div>
    <div class="repeat-card"><span>Повторные клиенты</span><strong>${repeat}</strong><small>LTV: ${formatMoney(revenue / Math.max(1, eventCount) * 1.7)}</small></div>
  `;

  const booked = eventCount;
  const expectedEvents = Math.round(eventCount * 1.08);
  const expectedRevenue = expectedEvents * (revenue / Math.max(1, eventCount));
  const rows = [
    ["Подтвержденные мероприятия", eventCount, 70],
    ["Расчетный план +8%", expectedEvents, 48],
    ["Месяцев в выборке", months.length, 62],
    ["Ожидаемая выручка", formatMoney(expectedRevenue), 78]
  ];
  document.querySelector("#forecastBox").innerHTML = rows.map(([label, value, width]) => `
    <div class="forecast-row"><span>${label}</span><div class="bar-track"><div class="bar-fill" style="width:${width}%"></div></div><b>${value}</b></div>
  `).join("") + `<b>Прогноз уточняется после подключения календаря и amoCRM</b>`;
}

function renderEditor() {
  document.querySelector("#dealEditor").innerHTML = state.deals.map((deal) => `
    <tr data-id="${deal.id}">
      <td><input type="date" data-field="date" value="${deal.date}"></td>
      <td>${select("channel", channels, deal.channel)}</td>
      <td>${select("type", types, deal.type)}</td>
      <td>${select("manager", managers, deal.manager)}</td>
      <td>${select("status", statuses.map(([, label]) => label), statusLabel(deal.status), statuses.map(([value]) => value))}</td>
      <td><input type="number" min="0" data-field="leads" value="${deal.leads}"></td>
      <td><input type="number" min="0" data-field="marketing" value="${deal.marketing}"></td>
      <td><input type="number" min="0" data-field="revenue" value="${deal.revenue}"></td>
      <td><input type="number" min="0" data-field="costs" value="${deal.costs}"></td>
      <td><button class="delete-row" data-delete="${deal.id}">×</button></td>
    </tr>
  `).join("");
}

function renderManualTables() {
  document.querySelector("#manualAdRows").innerHTML = renderManualRows(state.manualAds, "ad");
  document.querySelector("#manualFinanceRows").innerHTML = renderManualRows(state.manualFinance, "finance");
}

function renderManualRows(rows, type) {
  const fields = type === "ad"
    ? ["period", "source", "spend", "leads", "deals", "revenue", "comment"]
    : ["period", "revenue", "expenses", "profit", "amortization", "comment"];
  return rows.map((row) => `
    <tr data-id="${row.id}">
      ${fields.map((field) => `
        <td><input data-manual="${type}" data-field="${field}" value="${row[field] ?? ""}" ${["spend", "leads", "deals", "revenue", "expenses", "profit", "amortization"].includes(field) ? 'type="number"' : 'type="text"'}></td>
      `).join("")}
      <td><button class="delete-row" data-manual-delete="${type}" data-delete="${row.id}">×</button></td>
    </tr>
  `).join("");
}

function select(field, labels, selectedLabel, values = labels) {
  return `<select data-field="${field}">${labels.map((label, index) => `<option value="${values[index]}" ${label === selectedLabel || values[index] === selectedLabel ? "selected" : ""}>${label}</option>`).join("")}</select>`;
}

function render(includeEditor = true) {
  const deals = filteredDeals();
  renderKpis(deals);
  renderLineChart(deals);
  renderFunnel(deals);
  renderChannelRows(deals);
  renderEventRows(deals);
  renderCalendar(deals);
  renderCac(deals);
  renderManagers(deals);
  renderFinance(deals);
  renderRepeatAndForecast(deals);
  renderEquipment();
  renderAdvertising();
  renderSourceDashboard();
  renderSalesAndAmo();
  renderAmortization();
  if (includeEditor) renderEditor();
  if (includeEditor) renderManualTables();
}

function wireEvents() {
  document.querySelector("#periodPreset").addEventListener("change", applyPreset);
  document.querySelector("#dateFrom").addEventListener("change", render);
  document.querySelector("#dateTo").addEventListener("change", render);
  document.querySelector("#addDeal").addEventListener("click", () => {
    state.deals.unshift({
      id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
      date: new Date().toISOString().slice(0, 10),
      channel: channels[0],
      type: types[0],
      manager: managers[0],
      status: "lead",
      leads: 1,
      marketing: 0,
      revenue: 0,
      costs: 0
    });
    saveDeals();
    render();
  });
  document.querySelector("#addManualAd").addEventListener("click", () => addManualRow("ad"));
  document.querySelector("#addManualFinance").addEventListener("click", () => addManualRow("finance"));
  document.querySelector("#dealEditor").addEventListener("input", updateDeal);
  document.querySelector("#dealEditor").addEventListener("change", updateDeal);
  document.querySelector("#manualAdRows").addEventListener("input", updateManualRow);
  document.querySelector("#manualFinanceRows").addEventListener("input", updateManualRow);
  document.querySelector("#manualAdRows").addEventListener("click", deleteManualRow);
  document.querySelector("#manualFinanceRows").addEventListener("click", deleteManualRow);
  document.querySelector("#managerRows").addEventListener("input", updateManagerOverride);
  document.querySelector("#dealEditor").addEventListener("click", (event) => {
    const id = event.target.dataset.delete;
    if (!id) return;
    state.deals = state.deals.filter((deal) => deal.id !== id);
    saveDeals();
    render();
  });
  document.querySelector("#resetData").addEventListener("click", () => {
    state.deals = seedDeals.map((deal) => ({ ...deal, id: crypto.randomUUID ? crypto.randomUUID() : String(Math.random()) }));
    saveDeals();
    setDefaultDates();
    render();
  });
  document.querySelector("#exportJson").addEventListener("click", exportJson);
  document.querySelector("#importJson").addEventListener("change", importJson);
  document.querySelectorAll(".nav-item").forEach((button) => {
    button.addEventListener("click", () => {
      state.view = button.dataset.view;
      document.body.className = state.view === "overview" ? "" : `view-${state.view}`;
      document.querySelectorAll(".nav-item").forEach((item) => item.classList.toggle("active", item === button));
    });
  });
}

function addManualRow(type) {
  const rows = type === "ad" ? state.manualAds : state.manualFinance;
  const row = type === "ad"
    ? { id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()), period: "2026-06", source: "", spend: 0, leads: 0, deals: 0, revenue: 0, comment: "" }
    : { id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()), period: "2026-06", revenue: 0, expenses: 0, profit: 0, amortization: 0, comment: "" };
  rows.unshift(row);
  saveManualRows(type === "ad" ? MANUAL_AD_KEY : MANUAL_FINANCE_KEY, rows);
  renderManualTables();
}

function updateManualRow(event) {
  const type = event.target.dataset.manual;
  const field = event.target.dataset.field;
  if (!type || !field) return;
  const rows = type === "ad" ? state.manualAds : state.manualFinance;
  const row = rows.find((item) => item.id === event.target.closest("tr").dataset.id);
  if (!row) return;
  const numeric = ["spend", "leads", "deals", "revenue", "expenses", "profit", "amortization"].includes(field);
  row[field] = numeric ? Number(event.target.value || 0) : event.target.value;
  saveManualRows(type === "ad" ? MANUAL_AD_KEY : MANUAL_FINANCE_KEY, rows);
}

function deleteManualRow(event) {
  const type = event.target.dataset.manualDelete;
  const id = event.target.dataset.delete;
  if (!type || !id) return;
  if (type === "ad") {
    state.manualAds = state.manualAds.filter((row) => row.id !== id);
    saveManualRows(MANUAL_AD_KEY, state.manualAds);
  } else {
    state.manualFinance = state.manualFinance.filter((row) => row.id !== id);
    saveManualRows(MANUAL_FINANCE_KEY, state.manualFinance);
  }
  renderManualTables();
}

function updateManagerOverride(event) {
  const manager = event.target.dataset.manager;
  const field = event.target.dataset.managerField;
  if (!manager || !field) return;
  state.managerOverrides[manager] = state.managerOverrides[manager] || {};
  state.managerOverrides[manager][field] = Number(event.target.value || 0);
  saveManagerOverrides();
}

function updateDeal(event) {
  const field = event.target.dataset.field;
  if (!field) return;
  const row = event.target.closest("tr");
  const deal = state.deals.find((item) => item.id === row.dataset.id);
  if (!deal) return;
  const numeric = ["leads", "marketing", "revenue", "costs"].includes(field);
  deal[field] = numeric ? Number(event.target.value) : event.target.value;
  saveDeals();
  render(false);
}

function exportJson() {
  const blob = new Blob([JSON.stringify(state.deals, null, 2)], { type: "application/json" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "archiloft-dashboard-data.json";
  link.click();
  URL.revokeObjectURL(link.href);
}

function importJson(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const imported = JSON.parse(reader.result);
      if (!Array.isArray(imported)) throw new Error("Нужен массив строк");
      state.deals = normalizeDeals(imported.map((deal) => ({ ...deal, id: deal.id || (crypto.randomUUID ? crypto.randomUUID() : String(Math.random())) })));
      saveDeals();
      render();
    } catch {
      alert("Не удалось импортировать файл. Проверьте формат JSON.");
    }
  };
  reader.readAsText(file);
}

setDefaultDates();
wireEvents();
render();
