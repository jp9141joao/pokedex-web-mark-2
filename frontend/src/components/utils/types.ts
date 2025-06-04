// Interface defining the structure of a Pokemon object
export interface Pokemon {
    id: string;                 // Unique identifier for the Pokemon
    name: string;               // Name of the Pokemon
    type_1: string;             // Primary type (e.g., Fire, Water)
    type_2: string | null;      // Secondary type (if any), can be null
    height: string;             // Height of the Pokemon
    weight: string;             // Weight of the Pokemon
    hitpoints: string;          // HP stat
    attack: string;             // Attack stat
    defense: string;           // Defense stat
    specialattack: string;     // Special Attack stat
    specialdefense: string;    // Special Defense stat
    speed: string;             // Speed stat
    img: string;               // URL or path to the Pokemon's image
}

// Interface defining navigation state for pagination
export interface Navigate {
    previous: boolean;         // Indicates if previous navigation is possible
    next: boolean;             // Indicates if next navigation is possible
}
