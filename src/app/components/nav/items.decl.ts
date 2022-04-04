export type IItem = {
    name: string;
    onClick?: () => void;
    onClickEvent?: (event: any) => void;
};

export interface ItemProps {
    items: IItem[] | undefined;
};
