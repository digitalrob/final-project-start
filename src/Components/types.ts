export interface Bulbasaur {
    id: string;
    name: "bulbasaur";
    stage: number;
    color: string;
    top: number;
    left: number;
    src: string;
    height: number;
    width: number;
}
export interface Charizard {
    id: string;
    name: "charizard";
    stage: number;
    color: string;
    src: string;
    top: number;
    left: number;
    height: number;
    width: number;
}
export type Pokemon = Bulbasaur | Charizard;
