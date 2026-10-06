import type { Chart } from './types';

export const physicsFirstSolar: Chart = {
  title: 'Solar forecast error after the rebuild',
  note: 'Monthly mean absolute error as a percentage of plant capacity. Lower is better.',
  source: 'Renewcast portfolio nMAE, May to October 2025.',
  x: { kind: 'month', values: ["2025-05", "2025-06", "2025-07", "2025-08", "2025-09", "2025-10"] },
  y: { format: 'percent', min: 0 },
  series: [{ label: 'Portfolio nMAE', tone: 'focus', values: [15.3, 11.1, 10.1, 9.4, 7.4, 6.2] }],
  points: [{ at: 0, label: '15.3%' }, { at: 5, label: '6.2%' }],
};

export const portfolioFramework: Chart = {
  title: 'Forecast and measured energy across a 107-site portfolio',
  note: 'Monthly energy in MWh. Each forecast month is held out of model training.',
  source: 'Meter-head backtest, July 2025 to August 2026, 14 monthly folds.',
  x: { kind: 'month', values: ["2025-07", "2025-08", "2025-09", "2025-10", "2025-11", "2025-12", "2026-01", "2026-02", "2026-03", "2026-04", "2026-05", "2026-06", "2026-07", "2026-08"] },
  y: { format: 'mwh', min: 0 },
  series: [
    { label: 'Metered', tone: 'context', values: [2976, 3064, 2228, 1346, 697, 397, 573, 862, 2527, 2649, 3020, 3335, 3266, 2792] },
    { label: 'Forecast', tone: 'focus', values: [2898, 3287, 2162, 1280, 681, 341, 673, 899, 2415, 2667, 2908, 3197, 3244, 2791] },
  ],
};

export const fleetNowcasting: Chart = {
  title: 'Solar forecast error over the next four hours',
  note: 'The fleet model uses recent production readings to correct the existing forecast. Persistence assumes the recent error continues.',
  source: 'Leave-one-client-out backtest on served forecasts, fresh readings, 231 plant-months.',
  x: { kind: 'number', values: [15, 30, 45, 60, 75, 90, 105, 120, 135, 150, 165, 180, 195, 210, 225, 240], unit: ' min' },
  y: { format: 'percent', min: 0 },
  series: [
    { label: 'Served forecast', tone: 'context', values: [6.07, 6.06, 5.98, 6.06, 6.12, 6.09, 6.03, 6.09, 6.14, 6.13, 6.08, 6.15, 6.21, 6.18, 6.1, 6.22] },
    { label: 'Persistence', tone: 'baseline', values: [2.74, 3.67, 4.31, 4.63, 4.95, 5.16, 5.34, 5.57, 5.53, 5.68, 5.76, 5.85, 5.97, 5.99, 6.04, 6.22] },
    { label: 'Fleet GRU', tone: 'focus', values: [3.06, 3.75, 4.09, 4.39, 4.66, 4.93, 5.08, 5.34, 5.25, 5.46, 5.63, 5.71, 5.68, 5.74, 6.0, 6.22] },
  ],
};


export const providerBackpressure: Chart = {
  title: 'Adaptive throughput under provider errors, simulated',
  note: 'The limiter backs off after provider errors and gradually restores capacity when requests succeed.',
  source: 'Simulation using production limiter constants and scripted errors, not recorded traffic.',
  x: { kind: 'elapsed', values: [0, 5, 10, 15, 20, 25, 30, 31, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150, 155, 160, 165, 170, 175, 180, 185, 190, 195, 200, 205, 210, 215, 220, 225, 230, 235, 240, 245, 250, 255, 260, 265, 270, 275, 280, 285, 290, 295, 300, 305, 310, 315, 320, 325, 330, 335, 340, 345, 350, 355, 360, 365, 370, 375, 380, 385, 390, 395, 400, 405, 410, 415, 420, 425, 430, 435, 440, 445, 450, 455, 460, 465, 470, 475, 480, 485, 490, 495, 500, 505, 510, 515, 520, 525, 530, 535, 540, 545, 550, 555, 560, 565, 570, 575, 580, 585, 590, 595, 600, 605, 610, 615, 620, 625, 630, 635, 640, 645, 650, 655, 660, 665, 670, 675, 680, 685, 690, 695, 700, 705, 710, 715, 720] },
  y: { format: 'count', min: 0 },
  series: [{ label: 'Concurrent requests allowed', tone: 'focus', values: [40, 40, 40, 41, 41, 41, 20, 10, 10, 10, 10, 11, 11, 11, 12, 12, 12, 13, 13, 13, 14, 14, 14, 15, 15, 15, 16, 16, 16, 17, 17, 17, 18, 18, 18, 19, 19, 19, 20, 20, 20, 21, 21, 21, 22, 22, 22, 23, 23, 23, 24, 24, 24, 25, 25, 25, 26, 26, 26, 27, 27, 27, 28, 28, 28, 29, 29, 29, 30, 30, 30, 31, 31, 31, 32, 32, 32, 33, 33, 33, 34, 34, 34, 35, 35, 26, 26, 26, 27, 27, 27, 28, 28, 28, 29, 29, 29, 30, 30, 30, 31, 31, 31, 32, 32, 32, 33, 33, 33, 34, 34, 34, 35, 35, 35, 36, 36, 36, 37, 37, 37, 38, 38, 38, 39, 39, 39, 40, 40, 40, 41, 41, 41, 42, 42, 42, 43, 43, 43, 44, 44, 44, 45, 45, 45, 46], step: true }],
  refs: [{ y: 40, label: 'Starting limit 40' }],
};

export const agentEconomics: Chart = {
  title: 'Prompt caching across a complete agent journey',
  note: '72% of input tokens came from cache in this recorded QA journey, reducing the cost of repeated context.',
  source: 'Release-QA budget ledger, 6 September 2026, 43 calls.',
  x: { kind: 'number', values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43], unit: '', label: 'Model call' },
  y: { format: 'tokens', min: 0 },
  series: [
    { label: 'Input tokens', tone: 'context', values: [12683, 16179, 16281, 18008, 18210, 18685, 18927, 18959, 13151, 16654, 7517, 7574, 22338, 23828, 9673, 24037, 25977, 26183, 27134, 27811, 28343, 29132, 29378, 21946, 22483, 22930, 23319, 23513, 23599, 23880, 23912, 13638, 17139, 7897, 7954, 22460, 10466, 22675, 23736, 25032, 22478, 22744, 22928] },
    { label: 'Read from cache', tone: 'focus', values: [0, 12680, 16176, 16278, 18005, 18207, 18682, 18924, 0, 13148, 0, 7514, 0, 22335, 0, 23825, 24034, 25974, 26180, 27131, 27808, 28340, 29129, 10745, 0, 10745, 10745, 10745, 10745, 10745, 23877, 10841, 13635, 0, 7894, 20648, 1122, 22457, 22672, 23733, 10745, 10745, 10745] },
  ],
};
