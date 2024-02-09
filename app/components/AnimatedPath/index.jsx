import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const AnimatedPath = ({ points, children }) => {
    const targetRef = useRef(null);

    useEffect(() => {
        const animation = gsap.to(targetRef.current, {
            x: points.map(point => point.x),
            y: points.map(point => point.y),
            duration: 5,  // Adjust the duration as needed
            repeat: -1,  // Infinite loop
            ease: 'linear',
        });

        return () => {
            animation.kill();
        };
    }, [points]);

    // Check if children is defined before cloning
    return (
        <div ref={targetRef} style={{ position: 'absolute', left: `${points[0].x}px`, top: `${points[0].y}px` }}>
            {children && React.isValidElement(children) && React.cloneElement(children, { style: { ...children.props.style } })}
        </div>
    );
};

export default AnimatedPath;
