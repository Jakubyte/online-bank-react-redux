export type IItem = {
    name: string;
    onClick: () => void;
};

export interface ItemProps {
    items: IItem[];
};
