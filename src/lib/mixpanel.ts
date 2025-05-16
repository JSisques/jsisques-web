import mixpanel from "mixpanel-browser";

const token = import.meta.env.PUBLIC_MIXPANEL_TOKEN; // o hardcodea si prefieres

export const initMixpanel = () => {
  mixpanel.init(token, {
    debug: true, // puedes quitarlo en producción
  });
};

export const trackEvent = (event: string, props?: Record<string, any>) => {
  mixpanel.track(event, props);
};

export const identifyUser = (userId: string) => {
  mixpanel.identify(userId);
};

export const setUserProperties = (props: Record<string, any>) => {
  mixpanel.people.set(props);
};

export const trackPageView = () => {
  mixpanel.track("page_view");
};
