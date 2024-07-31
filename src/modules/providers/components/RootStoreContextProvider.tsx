import RootStore from '@/store/root-store';
import { RootStoreContext } from '@/store/root-store-context';
import type { ReactNode } from 'react';

const RootStoreContextProvider = ({ children }: { children: ReactNode }) => {
  return <RootStoreContext.Provider value={new RootStore()}>{children}</RootStoreContext.Provider>;
};

export default RootStoreContextProvider;
