function BackgroundEffects() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">

      {/* Purple Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-600/10 blur-3xl rounded-full animate-pulse"></div>

      {/* Bottom Glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-fuchsia-500/10 blur-3xl rounded-full animate-pulse"></div>

      {/* Small Floating Circles */}
      <div className="absolute top-20 right-20 w-4 h-4 bg-purple-500 rounded-full animate-bounce"></div>

      <div className="absolute top-60 left-40 w-3 h-3 bg-fuchsia-400 rounded-full animate-ping"></div>

      <div className="absolute bottom-32 left-1/3 w-5 h-5 bg-violet-500 rounded-full animate-pulse"></div>

      <div className="absolute bottom-60 right-1/4 w-3 h-3 bg-purple-300 rounded-full animate-bounce"></div>

    </div>
  );
}

export default BackgroundEffects;