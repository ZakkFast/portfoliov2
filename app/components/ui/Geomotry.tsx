interface GeomotryShapesProps {
  scrollY: number;
}

const GeomotryShapes: React.FC<GeomotryShapesProps> = ({ scrollY }) => {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden blur-[4px]"
      aria-hidden="true"
    >
      <div
        className="absolute top-20 right-0 h-64 w-64 rounded-full bg-cyan-300 opacity-15 sm:h-80 sm:w-80 dark:bg-cyan-400 dark:opacity-10"
        style={{ transform: `translateX(${scrollY * 0.3}px)` }}
      />
      <div
        className="absolute top-40 left-4 h-0 w-0 rotate-18 border-r-[70px] border-b-[100px] border-l-[70px] border-r-transparent border-b-gray-300 border-l-transparent opacity-25 sm:left-20 sm:border-r-[93px] sm:border-b-[130px] sm:border-l-[93px] dark:border-b-gray-700 dark:opacity-30"
        style={{ transform: `translateY(${scrollY * 0.2}px)` }}
      />
      <div
        className="absolute top-64 left-20 h-32 w-32 rounded-full bg-cyan-200 opacity-20 sm:left-40 sm:h-40 sm:w-40 dark:bg-cyan-300 dark:opacity-10"
        style={{ transform: `translateX(${scrollY * -0.3}px)` }}
      />
      <div
        className="absolute top-72 right-1/3 h-40 w-20 -rotate-64 bg-gray-400 opacity-15 sm:h-48 sm:w-24 dark:bg-gray-700 dark:opacity-25"
        style={{ transform: `translateY(${scrollY * 0.2}px)` }}
      />
      <div
        className="absolute top-56 right-10 h-16 w-16 -rotate-4 bg-cyan-200 opacity-15 sm:h-18 sm:w-18 dark:bg-cyan-300 dark:opacity-10"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      />
    </div>
  );
};

export default GeomotryShapes;
