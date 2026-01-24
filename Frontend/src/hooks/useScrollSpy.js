import {useState, useEffect} from 'react';

export const useScrollSpy = (sectionIds, offset = 100) => {
    const [activeSection, setActiveSection] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + offset;

            for(let i = sectionIds.length - 1; i >= 0; i--) {
                const section = document.getElementById(sectionIds[i]);
                if(section) {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.offsetHeight;

                    if(scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                        setActiveSection(sectionIds[i]);
                        break;
                    }
                }
            }
        };
         handleScroll(); // Initial check

        window.addEventListener('scroll', handleScroll, {passive: true});
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [sectionIds, offset]);

    return activeSection;
};

// Smooth scroll to a section

export const scrollToSection = (sectionId, offset = 80) => {
    const section = document.getElementById(sectionId);
    if (section) {
        const sectionTop = section.offsetTop - offset; // Adjust for the offset
        window.scrollTo({
            top: sectionTop,
            behavior: 'smooth',
        });
    }
};

export default useScrollSpy;