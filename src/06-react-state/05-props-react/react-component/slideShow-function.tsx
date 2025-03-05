import React, { ReactElement, cloneElement, useState } from "react";
//import Slide from "../../../05-props-react/react-component/slide-element";

type SlideProps = {
    heading: string,
    page?: {
        current: number,
        total: number
    },
    children: React.ReactNode
};

type Props = {
    children: ReactElement<SlideProps>[]
};

const Slideshow = ({ children }: Props) => {
    const [ActiveSlide, setActiveSlide] = useState<number>(0);

    const previous = () => {
        setActiveSlide(ActiveSlide => Math.max(ActiveSlide - 1, 0));
    };

    const next = () => {
        setActiveSlide(ActiveSlide => Math.min(ActiveSlide + 1, children.length - 1));
    };

    return (
        <>
            <div style={{ float: 'right' }}>
                <button onClick={previous}>previous</button>
                <button onClick={next}>next</button>
            </div>
            {
                cloneElement(
                    children[ActiveSlide],
                    {
                        page: {
                            current: ActiveSlide + 1,
                            total: children.length
                        }
                    }
                )
            }
        </>
    );
};
export default Slideshow;
