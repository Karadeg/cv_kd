import React, {useEffect} from 'react';

export default function Cursor() {

    useEffect(() => {
        const customCursor1 = document.getElementById('custom-cursor');
        const customCursor2 = document.getElementById('custom-cursor-2');
        if (!customCursor1 || !customCursor2) return;
    
        const handleMouseMove = (event) => {
            const scrollX = window.pageXOffset;
            const scrollY = window.pageYOffset;
            customCursor1.style.left = `${event.clientX + scrollX}px`;
            customCursor1.style.top = `${event.clientY + scrollY}px`;
            setTimeout(function() {
                customCursor2.style.left = `${event.clientX + scrollX}px`;
                customCursor2.style.top = `${event.clientY + scrollY}px`;
            }, 120);
        };
    
        document.addEventListener('mousemove', handleMouseMove);
        document.body.style.cursor = 'none';
    
        return () => {
          document.removeEventListener('mousemove', handleMouseMove);
          document.body.style.cursor = 'auto';
        };
    }, []);

    return (
        <>
            <div id="custom-cursor" class='cursor'></div>
            <div id="custom-cursor-2" class='cursor second-cursor'></div>
        </>
    )
}