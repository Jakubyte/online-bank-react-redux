export type CardProps = {
    name: string;
    balance: number;
    account_number: string;
};

export interface ICardProps {
    props: CardProps;
};

export interface ICards {
    cards: CardProps[];
};