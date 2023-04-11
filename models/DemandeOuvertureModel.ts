import { Customer } from "@/types";

export interface DemandeOuvertureModel {
    type: Customer,
    nom: string,
    entreprise: string,
    codePostal: string,
    email: string,
    telephone: string,
    nbEmployes: number,

}
