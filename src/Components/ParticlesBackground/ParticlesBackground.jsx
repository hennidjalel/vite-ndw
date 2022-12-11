import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import particles from "./particles.json"

const ParticlesBackground = () => {
  const particlesInit = useCallback(async engine => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(() => { }, []);

  return (
    <Particles
      id="tsparticles"
      options={particles}
      init={particlesInit}
      loaded={particlesLoaded}
    />
  );
};

export default ParticlesBackground;