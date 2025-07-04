import type { AppProps } from "next/app";
import { QueryProvider } from "@/providers/QueryProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryProvider>
      <Component {...pageProps} />
    </QueryProvider>
  );
}
