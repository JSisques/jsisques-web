import { useEffect } from "react";
import { initMixpanel } from "../../lib/mixpanel";

export default function InitMixpanel() {
  useEffect(() => {
    initMixpanel();
  }, []);
  return null;
}
