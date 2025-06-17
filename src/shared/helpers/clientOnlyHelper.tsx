import { PropsWithChildren, ReactNode } from "react";
import { useIsClient } from "./useClient";

export const ClientOnly = ({ children, fallback }: PropsWithChildren<{fallback: ReactNode }>) =>{
  const isClient = useIsClient();

  if( !isClient ){
    return <>{fallback}</>;
  }

  return <>{children}</>

};