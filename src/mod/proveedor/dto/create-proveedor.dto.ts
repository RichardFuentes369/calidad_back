// import { Transform } from "class-transformer";
import { IsString, IsBoolean, IsNumber, IsEmail, IsEnum } from "class-validator";
import { proveedorStatus } from "../entities/enums/proveedorStatus";

enum Estado {
    Activo = proveedorStatus.Activo,
    Inactivo = proveedorStatus.Inactivo
}

export class CreateProveedorDto {

    @IsString()
    readonly razonSocial;

    @IsString()
    readonly telefono;
    
    @IsEmail()
    readonly email;

    @IsString()
    @IsEnum(Estado)
    readonly estado;

    @IsString()
    readonly nit;
}
