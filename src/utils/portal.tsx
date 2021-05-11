import { useMemo } from 'react';
import ReactDOM from 'react-dom';

type ModalContainerProps = {
  id: string;
  children: React.ReactFragment;
};

const ModalContainer = ({ id, children }: ModalContainerProps) => {
  const container = useMemo(() => document.getElementById(id), [id]);
  if (!container)
    throw new Error("Can't use modal component without root modal container");
  return ReactDOM.createPortal(children, container);
};

export default ModalContainer;
