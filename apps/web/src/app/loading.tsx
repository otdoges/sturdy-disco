export default function Loading() {
  return (
    <div className="flex-1 flex items-center justify-center p-12">
      <div className="flex flex-col items-center gap-4">
        <div className="h-16 w-16 relative">
          <div className="absolute inset-0 rounded-full border-t-2 border-primary animate-spin"></div>
          <div className="absolute inset-2 rounded-full border-r-2 border-primary/70 animate-spin animate-reverse"></div>
          <div className="absolute inset-4 rounded-full border-b-2 border-primary/40 animate-spin animate-delay-500"></div>
        </div>
        <p className="text-lg text-muted-foreground animate-pulse">Loading amazing content...</p>
      </div>
    </div>
  );
}
