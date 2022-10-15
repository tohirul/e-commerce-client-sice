export const slideImages = (current, setCurrent, images) => {
    const next = (current + 1) % images.length;
    const id = setTimeout(() => setCurrent(next), 4000);
    return () => clearTimeout(id);
};
