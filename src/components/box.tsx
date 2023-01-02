import React, {CSSProperties, PropsWithChildren} from 'react';

interface BoxProps extends CSSProperties{
    className?: string;
}
const Box = ({children, className, ...rest}: PropsWithChildren<BoxProps>) => {
    return (
        <div className={className} style={rest}>
            {children}
        </div>
    );
};

export default Box;