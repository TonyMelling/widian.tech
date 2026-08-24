export function LaunchTicker() {
  return (
    <div className="flex min-h-11 items-center justify-center border-b border-navy-hairline bg-navy px-4 py-2 text-center font-mono">
      <p className="text-xs leading-relaxed text-on-navy-secondary sm:text-sm">
        <span className="mr-3 rounded-sm bg-ember px-2 py-1 text-[10px] tracking-wider text-white sm:text-xs">LAUNCHING SOON</span>
        Widian is launching soon. <a href="/book-a-demo" className="font-medium text-white underline decoration-navy-hairline underline-offset-4 hover:decoration-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Book a Demo</a>
      </p>
    </div>
  );
}
