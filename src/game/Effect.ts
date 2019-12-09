export interface Effect {
  type: string;
  details?: any;
  immediate?: boolean;
}
