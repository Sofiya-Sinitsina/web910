"use client";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@heroui/react";
import { ReactNode } from "react";

interface IProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: ReactNode;
    size?: "xs" | "sm" | "md" | "lg" | "xl"; 
}

const CustomerModal = ({
    isOpen,
    onClose,
    title,
    children,
    size="xs"
}: IProps) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} size={size}>
            <ModalContent>
                <ModalHeader className="border-b">
                    <h3 className="text-xl font-semibold"> {title} </h3>
                </ModalHeader>
                <ModalBody className="space-y-4 py-6">{children}</ModalBody>
            </ModalContent>
        </Modal>
    );
};

export default CustomerModal;