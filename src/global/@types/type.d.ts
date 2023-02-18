export interface Data {
    id: number,
    name: string,
    sigla: string,
    t_2m: string
}

interface CardProps<T = any> {
    data: T
    onStates?: (prev: string) => void
    setOpen?: React.Dispatch<SetStateAction<boolean>> | undefined;
}

export interface IcontentProps<T = any> {
    large?: boolean;
    medium?: boolean;
    regular?: boolean;
    small?: boolean;
    description?: boolean;
    title: T;
    text?: T;
    primary?: boolean;
}

export interface IPrimaryColorProps {
    primary?: boolean;
}