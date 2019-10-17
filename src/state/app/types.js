// @flow
export const APP_READY: "APP_READY" = "APP_READY";
export const APP_INIT: "APP_INIT" = "APP_INIT";
export const TOGGLE_DARKMODE: "TOGGLE_DARKMODE" = "TOGGLE_DARKMODE";

export type AppState = {
  +ready: boolean,
  +apiError: boolean
};
