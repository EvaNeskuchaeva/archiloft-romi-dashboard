const STORAGE_KEY = "archiloft-romi-dashboard-v1";

const seedDeals = [
  ["2024-05-01", "Instagram / FB", "Свадьбы", "Ирина Клочкова", "event", 42, 62000, 360000, 138000],
  ["2024-05-03", "Telegram", "Корпоративы", "Дарья Тенькова", "booked", 28, 41000, 270000, 99000],
  ["2024-05-05", "Яндекс.Директ", "Дни рождения", "Вероника Нам", "event", 31, 52000, 220000, 85000],
  ["2024-05-08", "Google Ads", "Лекции / Мастер-классы", "Ирина Клочкова", "lead", 22, 33000, 88000, 39000],
  ["2024-05-09", "2GIS", "Фото / Видео съемки", "Дарья Тенькова", "event", 18, 21000, 120000, 46000],
  ["2024-05-10", "Avito", "Презентации", "Вероника Нам", "booked", 15, 16000, 90000, 32000],
  ["2024-05-11", "Event-агентства", "Конференции", "Ирина Клочкова", "event", 25, 34000, 180000, 70000],
  ["2024-05-12", "Сарафанное радио", "Бизнес-завтраки", "Дарья Тенькова", "event", 12, 4000, 65000, 24000],
  ["2024-05-16", "Instagram / FB", "Свадьбы", "Вероника Нам", "booked", 36, 54000, 310000, 121000],
  ["2024-05-17", "Telegram", "Корпоративы", "Ирина Клочкова", "event", 24, 30000, 210000, 77000],
  ["2024-05-19", "Яндекс.Директ", "Дни рождения", "Дарья Тенькова", "event", 26, 39000, 170000, 63000],
  ["2024-05-20", "Google Ads", "Лекции / Мастер-классы", "Вероника Нам", "hold", 14, 21000, 56000, 23000],
  ["2024-05-21", "2GIS", "Фото / Видео съемки", "Ирина Клочкова", "event", 11, 14000, 82000, 31000],
  ["2024-05-22", "Avito", "Презентации", "Дарья Тенькова", "lead", 10, 12000, 42000, 16000],
  ["2024-05-24", "Event-агентства", "Конференции", "Вероника Нам", "booked", 19, 27000, 130000, 51000],
  ["2024-05-26", "Сарафанное радио", "Бизнес-завтраки", "Ирина Клочкова", "event", 8, 2000, 50000, 19000],
  ["2024-04-04", "Instagram / FB", "Свадьбы", "Дарья Тенькова", "event", 38, 58000, 315000, 119000],
  ["2024-04-13", "Telegram", "Корпоративы", "Вероника Нам", "event", 21, 29000, 195000, 72000],
  ["2024-04-18", "Яндекс.Директ", "Дни рождения", "Ирина Клочкова", "event", 23, 36000, 155000, 59000],
  ["2024-03-08", "Instagram / FB", "Свадьбы", "Дарья Тенькова", "event", 33, 51000, 260000, 104000],
  ["2024-03-15", "Google Ads", "Корпоративы", "Вероника Нам", "event", 18, 26000, 145000, 58000],
  ["2024-02-07", "Яндекс.Директ", "Дни рождения", "Ирина Клочкова", "event", 21, 33000, 120000, 51000],
  ["2024-01-12", "Telegram", "Корпоративы", "Дарья Тенькова", "event", 17, 24000, 112000, 42000],
  ["2023-12-14", "Instagram / FB", "Свадьбы", "Вероника Нам", "event", 19, 31000, 130000, 48000],
  ["2023-11-09", "Сарафанное радио", "Бизнес-завтраки", "Ирина Клочкова", "event", 9, 3000, 32000, 12000]
].map(([date, channel, type, manager, status, leads, marketing, revenue, costs], index) => ({
  id: crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${index}`,
  date,
  channel,
  type,
  manager,
  status,
  leads,
  marketing,
  revenue,
  costs
}));

const channels = ["Instagram / FB", "Telegram", "Яндекс.Директ", "Google Ads", "2GIS", "Avito", "Event-агентства", "Сарафанное радио"];
const types = ["Свадьбы", "Корпоративы", "Дни рождения", "Лекции / Мастер-классы", "Фото / Видео съемки", "Презентации", "Конференции", "Бизнес-завтраки"];
const managers = ["Ирина Клочкова", "Дарья Тенькова", "Вероника Нам"];
const statuses = [
  ["lead", "Лид"],
  ["hold", "Просмотр"],
  ["booked", "Бронь"],
  ["event", "Мероприятие"]
];

const state = {
  deals: loadDeals(),
  view: "overview"
};

const money = new Intl.NumberFormat("ru-RU", { style: "currency", currency: "RUB", maximumFractionDigits: 0 });
const number = new Intl.NumberFormat("ru-RU");

function normalizeDeals(deals) {
  const oldManagerMap = {
    "Анна Смирнова": "Ирина Клочкова",
    "Иван Петров": "Дарья Тенькова",
    "Мария Кузнецова": "Вероника Нам",
    "Алексей Власов": "Ирина Клочкова"
  };
  return deals.map((deal, index) => ({
    ...deal,
    manager: managers.includes(deal.manager) ? deal.manager : oldManagerMap[deal.manager] || managers[index % managers.length]
  }));
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
  document.querySelector("#dateFrom").value = "2024-05-01";
  document.querySelector("#dateTo").value = "2024-05-31";
}

function applyPreset() {
  const preset = document.querySelector("#periodPreset").value;
  if (preset === "month") {
    setDefaultDates();
  }
  if (preset === "quarter") {
    document.querySelector("#dateFrom").value = "2024-03-01";
    document.querySelector("#dateTo").value = "2024-05-31";
  }
  if (preset === "all") {
    document.querySelector("#dateFrom").value = "";
    document.querySelector("#dateTo").value = "";
  }
  render();
}

function renderKpis(deals) {
  const revenue = sum(deals, "revenue");
  const marketing = sum(deals, "marketing");
  const events = deals.filter((deal) => deal.status === "event").length;
  const totalProfit = profit(deals);
  const avgCheck = events ? revenue / events : 0;
  const items = [
    ["ROMI", pct(romi(revenue, marketing)), "+48% к апрелю", "↗", "green"],
    ["Выручка", formatMoney(revenue), "+17% к апрелю", "▣", "violet"],
    ["Прибыль", formatMoney(totalProfit), "+21% к апрелю", "▥", "green"],
    ["Расход на маркетинг", formatMoney(marketing), "-8% к апрелю", "⌁", "orange"],
    ["Мероприятия", number.format(events), "+10% к апрелю", "□", "blue"],
    ["Средний чек", formatMoney(avgCheck), "+6% к апрелю", "≡", "yellow"]
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
  const grouped = groupBy(state.deals, (deal) => deal.date.slice(0, 7));
  const months = Object.keys(grouped).sort();
  const values = months.map((month) => romi(sum(grouped[month], "revenue"), sum(grouped[month], "marketing")));
  const max = Math.max(400, ...values);
  const width = 640;
  const height = 220;
  const plot = { x: 35, y: 20, w: 570, h: 160 };
  const points = values.map((value, index) => {
    const x = plot.x + (months.length === 1 ? plot.w / 2 : (plot.w / (months.length - 1)) * index);
    const y = plot.y + plot.h - (value / max) * plot.h;
    return { x, y, value, month: months[index] };
  });
  const poly = points.map((point) => `${point.x},${point.y}`).join(" ");
  const area = `${plot.x},${plot.y + plot.h} ${poly} ${plot.x + plot.w},${plot.y + plot.h}`;

  document.querySelector("#romiHint").textContent = `${deals.length} строк в периоде`;
  document.querySelector("#romiChart").innerHTML = `
    <svg viewBox="0 0 ${width} ${height}" role="img" aria-label="ROMI по месяцам">
      <defs>
        <linearGradient id="lineFill" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stop-color="#7257d8" stop-opacity="0.28"/>
          <stop offset="1" stop-color="#7257d8" stop-opacity="0"/>
        </linearGradient>
      </defs>
      ${[0, 100, 200, 300, 400].map((tick) => {
        const y = plot.y + plot.h - (tick / max) * plot.h;
        return `<line x1="${plot.x}" x2="${plot.x + plot.w}" y1="${y}" y2="${y}" stroke="#edf0f6"/><text x="0" y="${y + 4}" class="chart-label">${tick}%</text>`;
      }).join("")}
      <polygon points="${area}" fill="url(#lineFill)"/>
      <polyline points="${poly}" fill="none" stroke="#7257d8" stroke-width="3"/>
      ${points.map((point) => `<circle cx="${point.x}" cy="${point.y}" r="5" fill="#fff" stroke="#7257d8" stroke-width="3"/><text x="${point.x - 16}" y="${point.y - 13}" class="chart-label">${pct(point.value)}</text>`).join("")}
      ${points.map((point) => `<text x="${point.x - 14}" y="210" class="chart-label">${monthName(point.month)}</text>`).join("")}
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
  const grouped = groupBy(deals, "channel");
  document.querySelector("#channelRows").innerHTML = Object.entries(grouped)
    .sort((a, b) => sum(b[1], "revenue") - sum(a[1], "revenue"))
    .map(([channel, rows]) => {
      const revenue = sum(rows, "revenue");
      const marketing = sum(rows, "marketing");
      const value = romi(revenue, marketing);
      return `<tr><td>${channel}</td><td>${formatMoney(marketing)}</td><td>${formatMoney(revenue)}</td><td class="${value < 0 ? "negative" : "positive"}">${pct(value)}</td></tr>`;
    }).join("");
}

function renderEventRows(deals) {
  const grouped = groupBy(deals, "type");
  document.querySelector("#eventRows").innerHTML = Object.entries(grouped)
    .sort((a, b) => sum(b[1], "revenue") - sum(a[1], "revenue"))
    .map(([type, rows]) => {
      const revenue = sum(rows, "revenue");
      const marketing = sum(rows, "marketing");
      return `<tr><td>${type}</td><td>${rows.length}</td><td>${formatMoney(revenue)}</td><td class="positive">${pct(romi(revenue, marketing))}</td></tr>`;
    }).join("");
}

function renderCalendar(deals) {
  const bookedDates = new Set(deals.filter((deal) => deal.status === "event").map((deal) => deal.date));
  const holdDates = new Set(deals.filter((deal) => deal.status === "booked").map((deal) => deal.date));
  const days = Array.from({ length: 31 }, (_, index) => {
    const day = index + 1;
    const iso = `2024-05-${String(day).padStart(2, "0")}`;
    const cls = bookedDates.has(iso) ? "booked" : holdDates.has(iso) ? "hold" : "";
    return `<div class="day ${cls}">${day}</div>`;
  });
  const occupancy = Math.round((bookedDates.size / 31) * 100);
  document.querySelector("#calendarGrid").innerHTML = days.join("");
  document.querySelector("#occupancyLabel").textContent = `Занятость ${occupancy}%`;
}

function renderCac(deals) {
  const stages = [
    ["Лид", sum(deals, "leads") || 1, "marketing"],
    ["Просмотр площадки", deals.filter((deal) => ["hold", "booked", "event"].includes(deal.status)).length || 1, "marketing"],
    ["Бронь", deals.filter((deal) => ["booked", "event"].includes(deal.status)).length || 1, "marketing"],
    ["Мероприятие", deals.filter((deal) => deal.status === "event").length || 1, "marketing"]
  ];
  const marketing = sum(deals, "marketing");
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
  document.querySelector("#managerRows").innerHTML = Object.entries(grouped).map(([manager, rows]) => {
    const bookings = rows.filter((deal) => ["booked", "event"].includes(deal.status)).length;
    return `<tr><td>${manager}</td><td>${sum(rows, "leads")}</td><td>${bookings}</td><td class="positive">${pct(romi(sum(rows, "revenue"), sum(rows, "marketing")))}</td></tr>`;
  }).join("");
}

function renderFinance(deals) {
  const revenue = sum(deals, "revenue");
  const marketing = sum(deals, "marketing");
  const costs = sum(deals, "costs");
  const totalProfit = revenue - marketing - costs;
  const percent = revenue ? Math.max(0, Math.min(100, (totalProfit / revenue) * 100)) : 0;
  document.querySelector("#profitDonut").style.background = `conic-gradient(var(--violet) ${percent}%, #edf0f6 0)`;
  document.querySelector("#profitDonut").innerHTML = `<div class="donut-label">Прибыль<b>${formatMoney(totalProfit)}</b>${pct(percent)}</div>`;
  document.querySelector("#financeRows").innerHTML = [
    ["Выручка", revenue],
    ["Реклама", -marketing],
    ["Комиссии и подрядчики", -Math.round(costs * 0.38)],
    ["Персонал", -Math.round(costs * 0.27)],
    ["Уборка и сервис", -Math.round(costs * 0.18)],
    ["Прочие расходы", -Math.round(costs * 0.17)]
  ].map(([label, value]) => `<div class="finance-row"><span>${label}</span><b>${formatMoney(value)}</b></div>`).join("");
}

function renderRepeatAndForecast(deals) {
  const eventCount = deals.filter((deal) => deal.status === "event").length;
  const revenue = sum(deals, "revenue");
  const repeat = Math.round(eventCount * 0.28);
  document.querySelector("#repeatBox").innerHTML = `
    <div class="repeat-card"><span>Новые клиенты</span><strong>${Math.max(0, eventCount - repeat)}</strong><small>ROMI: ${pct(romi(revenue * 0.72, sum(deals, "marketing") * 0.8))}</small></div>
    <div class="repeat-card"><span>Повторные клиенты</span><strong>${repeat}</strong><small>LTV: ${formatMoney(revenue / Math.max(1, eventCount) * 1.7)}</small></div>
  `;

  const booked = deals.filter((deal) => deal.status === "booked").length;
  const leads = sum(deals, "leads");
  const expectedEvents = Math.round(booked + leads * 0.035);
  const expectedRevenue = expectedEvents * (revenue / Math.max(1, eventCount));
  const rows = [
    ["Подтвержденные мероприятия", eventCount, 70],
    ["Предварительные брони", booked, 48],
    ["Показы площадки", Math.round(leads * 0.5), 62],
    ["Ожидаемая выручка", formatMoney(expectedRevenue), 78]
  ];
  document.querySelector("#forecastBox").innerHTML = rows.map(([label, value, width]) => `
    <div class="forecast-row"><span>${label}</span><div class="bar-track"><div class="bar-fill" style="width:${width}%"></div></div><b>${value}</b></div>
  `).join("") + `<b>До выполнения месячного плана осталось ${Math.max(0, 7 - booked)} мероприятий</b>`;
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
      state.deals = imported.map((deal) => ({ ...deal, id: deal.id || (crypto.randomUUID ? crypto.randomUUID() : String(Math.random())) }));
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
