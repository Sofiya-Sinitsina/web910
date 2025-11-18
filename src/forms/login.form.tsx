"use client";
import { Form, Input, Button } from "@heroui/react";
import { useState } from "react";

interface IProps {
    onClose: () => void;
}

const LoginForm = ({onClose}: IProps) => {
    const [formData, setFormData] = useState({ 
        email: "", 
        password: "", 
        confirmPassword: "" 
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted: ", formData);
        onClose();
    };

    return (
        <Form className="max-w-md w-full space-y-4" onSubmit={handleSubmit}>
            <Input 
            aria-label="Email"
            isRequired
            name="email"
            placeholder="Put email"
            type="email"
            value={formData.email}
            classNames={{ innerWrapper: "bg-default-100", input: "text-sm focus:outline-none"}}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />

            <Input 
            isRequired
            name="password"
            placeholder="Put password"
            type="password"
            value={formData.password}
            classNames={{ innerWrapper: "bg-default-100", input: "text-sm focus:outline-none"}}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />

            <div className="flex w-full gap-4 justify-end pt-8 items-center">
                <Button variant="ghost" onPress={onClose}>
                    Cancel
                </Button>
                <Button className="bg-[#463F3A] text-[#EDEDE9]" type="submit">
                    Login
                </Button>
            </div>
        </Form>
    );
}
export default LoginForm;