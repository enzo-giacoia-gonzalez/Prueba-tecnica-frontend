import { SubmitHandler, useForm } from "react-hook-form";
import InputForm from "../../../../components/custom-form/components/custom-input/CustomInput"
import CustomForm from "../../../../components/custom-form/CustomForm"
import { zodResolver } from "@hookform/resolvers/zod";
import { FormValuesLogin, schema } from "../../models/form-model";
import { UseAuthContext } from '../../../../context/Auth/UseAuthContext';




export const LoginForm = () => {
    const { handleSubmit, control, formState: { errors } } = useForm<FormValuesLogin>({
        resolver: zodResolver(schema),
        mode: "onBlur"
    });

    const { loading, error, data, login} = UseAuthContext();

    const onSubmit: SubmitHandler<FormValuesLogin> = async (data: FormValuesLogin) => {

        await login( data.email, data.password );
        
    }
    return (
        
        <CustomForm onSubmit={handleSubmit(onSubmit)} title="Login">
            <InputForm name="email" control={control} label="Email" type="email" error={errors.email} />
            <InputForm name="password" control={control} label="Password" type="password" error={errors.password} />
            <button type="submit" >Logearse</button>
            {loading && <p>Loading...</p>}
            {error && <p className="error">{error}</p>}
            {data && <p>Login successful!</p>}
            <p>¿No tienes cuenta?</p>
            <a href="/auth/register">Registrate</a>
        </CustomForm>
    )
}
