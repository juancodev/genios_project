import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

interface ModalContentProps {
  title: string;
  size: string;
  isOpen: boolean;
  onClose: () => void;
  children: JSX.Element | JSX.Element[];
}

export const ModalContentComponent = ({title, size, isOpen, onClose, children}: ModalContentProps) => {
  return (
    <>
      <Modal onClose={onClose} size={size} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader className="text-center [font-size:18px_!important] lg:text-start">{title}</ModalHeader>
          <ModalCloseButton className=""/>
          <ModalBody>
            {children}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
