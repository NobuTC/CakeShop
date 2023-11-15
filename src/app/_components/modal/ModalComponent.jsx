import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/react";
import CartComponent from "../cart/CartComponent";
import { useOpenContext } from "../../providers";

export default function ModalComponent() {
  const { isOpen, onOpenChange } = useOpenContext();
  const [modalPlacement, setModalPlacement] = React.useState("top");

  return (
    <div className="flex flex-col gap-2">
      <Modal
        isOpen={isOpen}
        placement={modalPlacement}
        onOpenChange={onOpenChange}
        scrollBehavior="outside"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 font-bold"></ModalHeader>
              <ModalBody>
                <CartComponent />
              </ModalBody>
              <ModalFooter></ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
