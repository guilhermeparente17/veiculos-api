import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Driver } from 'src/drivers/entities/driver.entity';

export type VehicleDocument = Vehicle & Document;

@Schema()
export class Vehicle {
    @Prop({ required: true, type: String })
    brand: string;

    @Prop({ required: true, type: String })
    model: string;

    @Prop({ type: Date, default: Date.now })
    created_at: Date;

    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Driver' }] })
    drivers: Driver[];
}

export const VehicleSchema = SchemaFactory.createForClass(Vehicle);
