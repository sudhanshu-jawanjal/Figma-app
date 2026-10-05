"use client";

import dynamic from "next/dynamic";

const LiveblocksRoom = dynamic(() => import("./LiveblocksRoom"), {
  ssr: false,
});

const Room = ({ children }: { children: React.ReactNode }) => {
  if (!process.env.NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center gap-2 p-6 text-center">
        <h1 className="text-lg font-bold">Liveblocks configuration required</h1>
        <p>
          Add <code>NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY</code> to the project
          root&apos;s <code>.env.local</code> file, then restart the dev server.
        </p>
      </main>
    );
  }

  return <LiveblocksRoom>{children}</LiveblocksRoom>;
};

export default Room;