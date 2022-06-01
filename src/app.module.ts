import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { VehiclesModule } from './vehicles/vehicles.module';
import { DriversModule } from './drivers/drivers.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://root:root@treinamento.msehaga.mongodb.net/?retryWrites=true&w=majority',
    ),
    VehiclesModule,
    DriversModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
