export function age(planet: unknown, seconds: unknown): unknown {
  interface PlanetChart {
    name: string;
    time: number;
  }

  const table: PlanetChart[] = [
    { name: "Mercury", time: 0.2408467 },
    { name: "Venus", time: 0.61519726 },
    { name: "Earth", time: 1.0 },
    { name: "Mars", time: 1.8808158 },
    { name: "Jupiter", time: 11.862615 },
    { name: "Saturn", time: 29.447498 },
    { name: "Uranus", time: 84.016846 },
    { name: "Neptune", time: 164.79132 },
  ];

  function calculateAge(orbitalPeriod: number, totalSeconds: number): number {
    return totalSeconds / (31557600 * orbitalPeriod);
  }
  if (typeof planet !== "string") return undefined;
  if (typeof seconds !== "number") return undefined;
  const found = table.find(
    (plant) => plant.name.toLowerCase() === planet.toLowerCase()
  );
   if (found && typeof seconds === "number") {
    return Number(calculateAge(found.time, seconds).toFixed(2));
  }
}
