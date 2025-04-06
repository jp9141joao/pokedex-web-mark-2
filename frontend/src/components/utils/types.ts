export interface Pokemon {
    id: string;
    name: string;
    type_1: string;
    type_2: string | null;
    height: string;
    weight: string;
    hitpoints: string;
    attack: string;
    defense: string;
    specialattack: string;
    specialdefense: string;
    speed: string;
    img: string;
}

export interface Navigate {
    previous: boolean, 
    next: boolean
}