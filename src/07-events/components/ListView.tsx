import React from "react";

type Props = {
    items: string[];
};

const ListView = ({ items }: Props) => {
    return (
        <ul>
            {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    );
};

export default ListView;
