import React, { useState } from "react";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormContext } from "@/contexts/FormContext";
import * as yup from "yup";

interface FormProps {
    children: React.ReactNode;
    onSubmit: SubmitHandler<FieldValues>;
    schema?: yup.ObjectSchema<FieldValues>;
}

const Form = ({ children, onSubmit, schema }: FormProps) => {
    const [isLoading, setIsLoading] = useState(false);
    const loadingHandler = (boolean: boolean) => setIsLoading(boolean);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FieldValues>({
        resolver: schema ? yupResolver(schema) : undefined,
        mode: "onChange",
    });

    const submit: SubmitHandler<FieldValues> = async (data) => {
        setIsLoading(true);
        try {
            await onSubmit(data);
        } catch (error) {
            console.log(error);
            setIsLoading(false);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <FormContext.Provider
            value={{ isLoading, errors, register, loadingHandler }}
        >
            <form onSubmit={handleSubmit(submit)}>{children}</form>
        </FormContext.Provider>
    );
};
