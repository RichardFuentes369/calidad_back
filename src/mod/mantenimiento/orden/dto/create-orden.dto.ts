// import { Transform } from "class-transformer";
import { IsString, IsBoolean, IsNumber, IsEmail, IsDate } from "class-validator";

export class CreateOrdenDto {

    @IsString()
    readonly descripcion;

    @IsDate()
    readonly fecha_mantenimiento;

    @IsNumber()
    readonly precio;

}
