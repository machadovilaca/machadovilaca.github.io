const airports = {
  OPO: { code: "OPO", name: "Porto", position: [41.2481, -8.6814] },
  LIS: { code: "LIS", name: "Lisbon", position: [38.7756, -9.1354] },
  LHR: { code: "LHR", name: "London Heathrow", position: [51.4700, -0.4543] },
  BCN: { code: "BCN", name: "Barcelona El Prat", position: [41.2974, 2.0833] },
  EIN: { code: "EIN", name: "Eindhoven", position: [51.4500, 5.3747] },
  VIE: { code: "VIE", name: "Vienna", position: [48.1103, 16.5697] },
  TLS: { code: "TLS", name: "Toulouse", position: [43.6291, 1.3638] },
  BRU: { code: "BRU", name: "Brussels Zaventem", position: [50.9014, 4.4844] },
  CRL: { code: "CRL", name: "Brussels Charleroi", position: [50.4592, 4.4538] },
  BHX: { code: "BHX", name: "Birmingham", position: [52.4539, -1.7480] },
  AMS: { code: "AMS", name: "Amsterdam", position: [52.3105, 4.7683] },
  LYS: { code: "LYS", name: "Lyon Saint-Exupéry", position: [45.7256, 5.0811] },
  NAP: { code: "NAP", name: "Naples", position: [40.8860, 14.2908] },
  ORY: { code: "ORY", name: "Paris Orly", position: [48.7233, 2.3794] },
  BER: { code: "BER", name: "Berlin Brandenburg", position: [52.3667, 13.5033] },
  MAD: { code: "MAD", name: "Madrid", position: [40.4983, -3.5676] },
  PMO: { code: "PMO", name: "Palermo", position: [38.1760, 13.0910] },
  TPS: { code: "TPS", name: "Trapani", position: [37.9114, 12.4880] },
};

// 2 barcelona
// 2 + 2 amesterdao
// 2 + 3 bruxelas
// 4 berlim
// 2 londres
// 2 birmingham
// 4 napoles
// 2 sicilia
// 2 viena
// 2  + 2 toulouse
export const flightCount = 31;

export const flightData = [
  { from: airports.OPO, to: airports.BCN }, // Barcelona

  { from: airports.OPO, to: airports.EIN }, // Amsterdam via Eindhoven

  { from: airports.OPO, to: airports.VIE }, // Vienna

  { from: airports.OPO, to: airports.TLS }, // Toulouse

  { from: airports.OPO, to: airports.BRU }, // Brussels
  { from: airports.CRL, to: airports.OPO },
  { from: airports.BRU, to: airports.MAD },
  { from: airports.MAD, to: airports.OPO },

  { from: airports.OPO, to: airports.BHX }, // Birmingham

  { from: airports.OPO, to: airports.LYS }, // Naples via Lyon Saint-Exupéry and back via Orly
  { from: airports.LYS, to: airports.NAP },
  { from: airports.NAP, to: airports.ORY },
  { from: airports.ORY, to: airports.OPO },

  { from: airports.OPO, to: airports.AMS }, // Amsterdam
  { from: airports.AMS, to: airports.BER }, // also Berlin Brandenburg via Amsterdam

  { from: airports.OPO, to: airports.LHR }, // London Heathrow

  { from: airports.OPO, to: airports.PMO }, // Palermo
  { from: airports.TPS, to: airports.OPO }, // back via Trapani
];
