import type { ReactNode } from "react";
import type { FieldValues } from "react-hook-form";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import * as yup from "yup";
import type { Resolver } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

interface FormProps<T extends FieldValues> {
    children: ReactNode;
    validationSchema: yup.ObjectSchema<T>;
}

export const Form = <T extends FieldValues>({
    children,
    validationSchema,
}: FormProps<T>) => {
    const methods = useForm<T>({
        resolver: yupResolver(validationSchema) as unknown as Resolver<T>,
        mode: "onChange",
    });

    return <FormProvider {...methods}>{children}</FormProvider>;
};

interface InputProps<T> {
    name: keyof T;
    placeholder: string;
}

export const Input = <T,>({ name, placeholder }: InputProps<T>) => {
    const { register } = useFormContext();

    return <input {...register(name as string)} placeholder={placeholder} />;
};

interface LoginFormType {
    email: string;
    password: string;
}

const validationSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
});

const LoginForm = () => {
    return (
        <Form validationSchema={validationSchema}>
            <LoginInputs />
        </Form>
    );
};

const LoginInputs = () => {
    const { handleSubmit, formState } = useFormContext<LoginFormType>();

    const onSubmit = (data: LoginFormType) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div style={{ display: "flex", gap: 8 }}>
                <Input<LoginFormType> name="email" placeholder="Email" />
                <ErrorMessage errors={formState.errors} name="email" />
            </div>
            <div style={{ display: "flex", gap: 8 }}>
                <Input<LoginFormType> name="password" placeholder="Password" />
                <ErrorMessage errors={formState.errors} name="password" />
            </div>
        </form>
    );
};

export default LoginForm;

// import { InputHTMLAttributes, forwardRef } from "react";
// import styles from "./index.module.scss";

// interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
//     className?: string;
//     title?: string;
// }

// export const Input = forwardRef<HTMLInputElement, InputProps>(
//     ({ className, title, ...inputProps }, ref) => {
//         return (
//             <label className={styles.container}>
//                 {title && <div className={className}>{title}</div>}
//                 <input
//                     ref={ref}
//                     className={`${styles.element} ${className || ""} m-big`}
//                     {...inputProps}
//                 />
//             </label>
//         );
//     }
// );
