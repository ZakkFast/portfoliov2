interface SectionTitleProps {
  title: string;
  className?: string;
}

const SectionTitle = ({ title, className = "mb-16" }: SectionTitleProps) => {
  return (
    <h2 className={`text-4xl font-bold text-center text-black dark:text-white ${className}`}>
      {title}
      <span className="text-cyan-400">.</span>
    </h2>
  );
};

export default SectionTitle;
