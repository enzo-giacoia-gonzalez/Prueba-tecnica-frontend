import { z } from "zod";

export const schemaUpdate = z.object({
  email: z.string().email("Correo inválido").min(1, "El correo es obligatorio"),
  role: z.enum(['ADMIN', 'USER'],{
    
  })
})


export type FormValuesEditModel = z.infer<typeof schemaUpdate>;