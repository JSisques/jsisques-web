import { useEffect } from "react";
import { trackPageView } from "../../lib/mixpanel";

export default function TrackPageView() {
  useEffect(() => {
    trackPageView();
  }, []);
  return null;
}
