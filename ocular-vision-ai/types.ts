
export enum EyeEffectType {
  CYBER_RINGS = 'Cyber Rings',
  NEON_GLOW = 'Neon Glow',
  VOID_EATER = 'Void Eater',
  SHARINGAN = 'Eye of Insight',
  GALAXY = 'Stellar Iris',
  SCANNER = 'Tactical Scanner',
  CHRONOS = 'Temporal Pulse',
  DRAGON = 'Dragon Soul'
}

export interface EyeLandmarks {
  left: { center: { x: number; y: number }; iris: any[] };
  right: { center: { x: number; y: number }; iris: any[] };
}

export interface GeminiAura {
  color: string;
  description: string;
  title: string;
}
