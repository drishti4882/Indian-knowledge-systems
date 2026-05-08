export default function TypingIndicator() {
  return (
    <div className="flex justify-start animate-fadeInUp">
      <div className="flex gap-3">
        <div className="shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-lg shadow-sm bg-gradient-to-br from-earth-300 to-earth-500">
          🪷
        </div>
        <div className="bg-white border border-earth-200 rounded-2xl rounded-tl-sm px-5 py-4 shadow-sm">
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-saffron-400 animate-bounce" style={{ animationDelay: '0ms' }} />
            <div className="w-2 h-2 rounded-full bg-saffron-400 animate-bounce" style={{ animationDelay: '150ms' }} />
            <div className="w-2 h-2 rounded-full bg-saffron-400 animate-bounce" style={{ animationDelay: '300ms' }} />
          </div>
        </div>
      </div>
    </div>
  );
}
