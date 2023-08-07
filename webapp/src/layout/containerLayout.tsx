import { FC, ReactNode } from 'react';

interface IContainer {
  children: ReactNode;
}
const ContainerLayout: FC<IContainer> = ({ children }) => {
  return <div className='p-5 '>{children}</div>;
};
export default ContainerLayout;
