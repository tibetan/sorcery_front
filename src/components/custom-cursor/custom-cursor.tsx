import React, { useState, useEffect, useRef } from 'react';
import './custom-cursor.sass';

export default function CustomCursor() {
    const [pos, setPos] = useState({ x: 0, y: 0 });
    const cursorRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (e:MouseEvent) => {
            setPos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    useEffect(() => {
        if (!cursorRef.current) return;
        // Плавное следование за мышью
        cursorRef.current.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
    }, [pos]);

    return (
        <div className="cursor-wrapper">
            <div ref={cursorRef} className="cursor"></div>
        </div>
    );
}
