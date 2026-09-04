export function manageEnergy(solarPower, loadPower, batterySOC) {
  if (solarPower > loadPower) {
    const surplus = solarPower - loadPower;

    if (batterySOC < 100) {
      return {
        source: "SOLAR",
        action: "CHARGE BATTERY",
        surplus: surplus,
      };
    }

    return {
      source: "SOLAR",
      action: "EXPORT TO GRID",
      surplus: surplus,
    };
  }

  if (solarPower < loadPower && batterySOC > 20) {
    const deficit = loadPower - solarPower;

    return {
      source: "BATTERY",
      action: "DISCHARGE BATTERY",
      deficit: deficit,
    };
  }

  const deficit = loadPower - solarPower;

  return {
    source: "GRID",
    action: "GRID SUPPLY",
    deficit: deficit,
  };
}
