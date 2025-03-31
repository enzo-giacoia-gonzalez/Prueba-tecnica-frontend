import { SubmitHandler, useForm } from "react-hook-form";
import InputForm from "../../../../components/custom-form/components/custom-input/CustomInput"
import CustomForm from "../../../../components/custom-form/CustomForm"
import { zodResolver } from "@hookform/resolvers/zod";
import { FormValuesRegister, schema } from "../../models";
import { useRegister } from '../../hooks/useRegister';


export const RegisterForm = () => {
    const { handleSubmit, control, formState: { errors } } = useForm<FormValuesRegister>({
        resolver: zodResolver(schema),
        mode: "onBlur",
        
    });

    const { loading, error, data, register} = useRegister();

    const onSubmit: SubmitHandler<FormValuesRegister> = async (RegisterData) => {
        
        await register (RegisterData);
    }

    return (
        <CustomForm onSubmit={handleSubmit(onSubmit)}>
            <InputForm name="email" control={control} label="Email" type="email" error={errors.email} />
            <InputForm name="password" control={control} label="Password" type="password" error={errors.password} />
            <button type="submit" >Registrarse</button>
            {loading && <p>Loading...</p>}
            {error?.message && <p className="error">{error.message}</p>}
            {data && <p>Register successful!</p>}
            <p>¿Ya tienes una cuenta?</p>
            <a href="/login">Logeate</a>
        </CustomForm>
    )
}
