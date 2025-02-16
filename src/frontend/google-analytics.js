import ReactGA from "react-ga4";

const initializeGA = () => {
  ReactGA.initialize('G-P3XPYXDE9Q');
  console.log("GA INITIALIZED");
};

const trackGAEvent = (category, action, label) => {
  console.log("GA event:", category, ":", action, ":", label);
  ReactGA.event({
    category: category,
    action: action,
    label: label,
  });
};

export default initializeGA;
export { initializeGA, trackGAEvent };
