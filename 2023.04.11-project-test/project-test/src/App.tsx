import "./App.css";
import { useForm, FormProvider, useFormContext } from "react-hook-form";

const ParentForm = () => {
    const methods = useForm();

    return (
        <FormProvider {...methods}>
            <ChildForm />
        </FormProvider>
    );
};

const ChildForm = () => {
    const { register, handleSubmit } = useFormContext();
    const onSubmit = (data) => console.log(data);

    return (
        <form onSubmit={methods.handleSubmit(onSubmit)}>
            <input
                type="text"
                name="firstName"
                {...methods.register("firstName")}
            />
            <input
                type="text"
                name="lastName"
                {...methods.register("lastName")}
            />
            <button type="submit">Submit</button>
        </form>
    );
};

const App = () => {
    return (
        <div>
            <h1>My Form</h1>
            <ParentForm />
        </div>
    );
};

export default App;
