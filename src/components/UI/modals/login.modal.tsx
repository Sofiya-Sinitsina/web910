"use client";

import CustomerModal from "@/components/common/modals";
import LoginForm from "@/forms/login.form";

interface IProps {
    isOpen: boolean;
    onClose: () => void;
}

const LoginModal = ({isOpen, onClose}: IProps) => {
    return (
        <CustomerModal isOpen={isOpen} onClose={onClose} title="Login">
            <LoginForm onClose={onClose}/>
        </CustomerModal>
    );
};

export default LoginModal;