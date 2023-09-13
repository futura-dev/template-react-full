import type { ZodArray, ZodObject, ZodRawShape } from "zod";
import { z } from "zod";

export const zodDatetime = z.string().datetime().pipe(z.coerce.date());
export const zodDate = z.string().pipe(z.coerce.date());

type ValidationResult<SchemaType, Shape extends ZodRawShape> = Promise<
  SchemaType extends ZodObject<Shape>
    ? ZodObject<Shape>["_output"]
    : ZodObject<Shape>["_output"][]
>;

export async function validateObject<Shape extends ZodRawShape>(
  schema: ZodObject<Shape>,
  data: unknown
): ValidationResult<ZodObject<Shape>, Shape> {
  try {
    return await schema.parseAsync(data);
  } catch (exc) {
    console.warn("Response validation failed");
    console.warn(exc);

    return data as ZodObject<Shape>["_output"];
  }
}

export async function validateArray<Shape extends ZodRawShape>(
  schema: ZodArray<ZodObject<Shape>>,
  data: unknown
): ValidationResult<ZodArray<ZodObject<Shape>>, Shape> {
  try {
    return await schema.parseAsync(data);
  } catch (exc) {
    console.warn("Response validation failed");
    console.warn(exc);

    return data as ZodObject<Shape>["_output"][];
  }
}
