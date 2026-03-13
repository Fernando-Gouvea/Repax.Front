export const Skeleton = () => (
  <div className="flex items-center gap-4 animate-pulse">
    <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
    <div className="flex flex-col gap-2">
      <div className="h-4 w-24 bg-gray-300 rounded"></div>
      <div className="h-3 w-16 bg-gray-200 rounded"></div>
    </div>
  </div>
);
