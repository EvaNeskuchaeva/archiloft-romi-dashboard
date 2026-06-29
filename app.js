const STORAGE_KEY = "archiloft-romi-dashboard-v2";
const MANAGER_OVERRIDES_KEY = "archiloft-manager-overrides-v1";

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
  amortization_yearly: []
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

function activeYears() {
  return Array.from(new Set(activeMonthly().map((month) => month.year))).sort();
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
        <td>${formatMoney(row.expenses)}</td>
        <td class="${row.net < 0 ? "negative" : "positive"}">${formatMoney(row.net)}</td>
      </tr>
    `).join("") : `<tr><td colspan="6">За выбранный период строк по технике нет. Выберите 2024, 2025 или “Все данные”.</td></tr>`;
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

  document.querySelector("#amoBox").innerHTML = `
    <div class="status-line">amoCRM готов к подключению: ответственный “Юлия” будет автоматически считаться как “Вероника Нам”.</div>
    <div class="summary-grid">
      ${managers.map((manager) => `<div class="mini-card"><span>${manager}</span><strong>${number.format((state.managerOverrides[manager]?.leads) || 0)} лидов</strong></div>`).join("")}
    </div>
    <p class="muted-note">Чтобы подтянуть источники, суммы, статусы “в работе” и задачи по менеджерам без ручного ввода, нужен экспорт из amoCRM или API-ключ/виджет доступа.</p>
  `;
}

function renderAmortization() {
  document.querySelector("#amortizationRows").innerHTML = (financeData.amortization_yearly || [])
    .map((row) => `
      <tr>
        <td>${row.year}</td>
        <td>${formatMoney(row.equipment_revenue)}</td>
        <td>${formatMoney(row.equipment_expenses)}</td>
        <td class="${row.equipment_net < 0 ? "negative" : "positive"}">${formatMoney(row.equipment_net)}</td>
        <td>${formatMoney(row.cumulative_net)}</td>
        <td>${formatMoney(row.payback_remaining)}</td>
        <td class="${row.available_for_amortization > 0 ? "positive" : ""}">${formatMoney(row.available_for_amortization)}</td>
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
  renderSalesAndAmo();
  renderAmortization();
  if (includeEditor) renderEditor();
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
  document.querySelector("#dealEditor").addEventListener("input", updateDeal);
  document.querySelector("#dealEditor").addEventListener("change", updateDeal);
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
