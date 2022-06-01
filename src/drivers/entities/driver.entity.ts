import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type DriverDocument = Driver & Document;

@Schema()
export class Driver {
    @Prop()
    name: string;

    @Prop()
    age: number;

    @Prop({ type: Date, default: Date.now })
    created_at: Date;
}

export const DriverSchema = SchemaFactory.createForClass(Driver);
