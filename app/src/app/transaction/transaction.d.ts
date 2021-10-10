import { ICreditCard } from "../creditCard";

export interface ITransaction {
    credit_card: ICreditCard;
    uid: string;
    amount: number;
    comment: string;
    date: number;
    currency: string
}