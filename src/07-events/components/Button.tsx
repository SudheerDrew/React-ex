import React, { MouseEvent, ReactNode } from 'react';

type Props = {
    onClick: (event: MouseEvent<HTMLButtonElement>) => void;
    children: ReactNode;
};

const ButtonComponent = ({ onClick, children }: Props) => {
    return (
        <button onClick={onClick}>
            {children}
        </button>
    );
};

export default ButtonComponent;

