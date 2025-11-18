"use client";

import CustomerModal from "@/components/common/modals";
import RegistrationForm from "@/forms/registration.form";

interface IProps {
    isOpen: boolean;
    onClose: () => void;
}

const RegistartionModal = ({isOpen, onClose}: IProps) => {
    return (
        <CustomerModal isOpen={isOpen} onClose={onClose} title="Registration" size="md">
            <RegistrationForm onClose={onClose}/>
        </CustomerModal>
    );
};

export default RegistartionModal;