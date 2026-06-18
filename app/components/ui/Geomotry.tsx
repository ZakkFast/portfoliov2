interface GeomotryShapesProps {
  scrollY: number;
}

// @TODO: Adjust speeds for shapes. Would like to have them vary in speed and direction, with overall direction of shappes expanding out.

const GeomotryShapes: React.FC<GeomotryShapesProps> = ({ scrollY }) => {
  return (
    <div className="relative blur-[4px]">
      {/* Large circle */}
      <div
        className="absolute top-20 right-0 w-80 h-80 bg-cyan-300 rounded-full opacity-15 dark:bg-cyan-400 dark:opacity-10"
        style={{ transform: `translateX(${scrollY * 0.3}px)` }}
      ></div>

      {/* Triangle */}
      <div
        className="absolute top-40 left-20 w-0 h-0 border-l-[93px] border-r-[93px] border-b-[130px] border-l-transparent border-r-transparent border-b-gray-300 rotate-18 opacity-25 dark:border-b-gray-700 dark:opacity-30"
        style={{ transform: `translateY(${scrollY * 0.2}px)` }}
      ></div>

      {/* Small circle */}
      <div
        className="absolute top-64 left-40 w-40 h-40 bg-cyan-200 rounded-full opacity-20 dark:bg-cyan-300 dark:opacity-10"
        style={{ transform: `translateX(${scrollY * -0.3}px)` }}
      ></div>

      {/* Rectangle */}
      <div
        className="absolute top-62 right-120 w-24 h-48 bg-gray-400 -rotate-64 opacity-15 dark:bg-gray-700 dark:opacity-25"
        style={{ transform: `translateY(${scrollY * 0.2}px)` }}
      ></div>

      {/* Square */}
      <div
        className="absolute top-62 right-128 w-18 h-18 bg-cyan-200 -rotate-4 opacity-15 dark:bg-cyan-300 dark:opacity-10"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      ></div>
    </div>
  );
};

export default GeomotryShapes;
