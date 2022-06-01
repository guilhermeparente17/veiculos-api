import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';
import { Vehicle, VehicleDocument } from './entities/vehicle.entity';

@Injectable()
export class VehiclesService {
  constructor(
    @InjectModel(Vehicle.name) private vehicleModel: Model<VehicleDocument>,
  ) { }

  create(createVehicleDto: CreateVehicleDto) {
    const createVehicle = new this.vehicleModel(createVehicleDto);
    return createVehicle.save();
  }

  findAll() {
    return this.vehicleModel.find().populate('drivers');
  }

  findOne(id: string) {
    return this.vehicleModel.findById(id);
  }

  update(id: string, updateVehicleDto: UpdateVehicleDto) {
    return this.vehicleModel.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        $set: updateVehicleDto,
      },
      {
        new: true,
      },
    );
  }

  remove(id: string) {
    return this.vehicleModel
      .deleteOne({
        _id: id,
      })
      .exec();
  }
}
