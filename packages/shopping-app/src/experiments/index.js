import Overlay from './Overlay';
import * as experiments from './runningExperiments';

export default () => {
  let results = {};
  for (let experiment in experiments) {
    const experimentName = experiments[experiment].NAME;
    results[experimentName] = localStorage.getItem(experimentName);
  }
  return results;
};

export { Overlay };
export * from './runningExperiments';
