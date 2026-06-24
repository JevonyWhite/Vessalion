import useScrollReveal from "../ScrollReveal/ScrollReveal";

const RevealSection = ({ children, delay = "" }) => {
  const [ref, visible] = useScrollReveal();
  return (
    <div ref={ref} className={`reveal ${delay} ${visible ? "reveal--visible" : ""}`}>
      {children}
    </div>
  );
};

export default RevealSection