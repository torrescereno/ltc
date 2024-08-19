import { useEffect } from "preact/hooks";
import { scroll, animate } from "motion";

const AnimatedComponent = () => {
  useEffect(() => {
    scroll(animate(".progress-bar", { scaleX: [0, 1] }));
  }, []);

  const progressBarStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    height: "10px",
    background: "#f5f5f5",
    transform: "scaleX(0)",
    transformOrigin: "0%",
  };

  return <div style={progressBarStyle} class="progress-bar"></div>;
};

export default AnimatedComponent;
