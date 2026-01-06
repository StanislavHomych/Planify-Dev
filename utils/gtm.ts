// Google Tag Manager dataLayer helper functions

declare global {
  interface Window {
    dataLayer: any[];
  }
}

/**
 * Push event to Google Tag Manager dataLayer
 */
export function pushToDataLayer(event: string, data?: Record<string, any>) {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event,
      ...data,
    });
  }
}

/**
 * Track calculator started event
 * Fired when user completes the first step (Team & Rates)
 */
export function trackCalcStarted() {
  pushToDataLayer('calc_started');
}

/**
 * Track calculator finished event
 * Fired when user completes the entire calculator flow
 * @param totalCost - Total project estimation in dollars
 */
export function trackCalcFinished(totalCost: number) {
  pushToDataLayer('calc_finished', {
    value: totalCost,
  });
}


