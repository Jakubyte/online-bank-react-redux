export type Content = {
    name: string;
    content: any;
}

export type CardProps = {
    name: string;
    content: Content[]
    footer: Content[]
};

export interface ICardProps {
    props: CardProps;
};

export interface ICards {
    cards: CardProps[];
};