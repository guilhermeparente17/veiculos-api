import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateDriverDto } from './dto/create-driver.dto';
import { UpdateDriverDto } from './dto/update-driver.dto';
import { Driver, DriverDocument } from './entities/driver.entity';

@Injectable()
export class DriversService {
  constructor(
    @InjectModel(Driver.name) private driverModel: Model<DriverDocument>,
  ) { }

  create(createDriverDto: CreateDriverDto) {
    const createDriver = new this.driverModel(createDriverDto);
    return createDriver.save();
  }

  findAll() {
    return this.driverModel.find();
  }

  findOne(id: string) {
    return this.driverModel.findById(id);
  }

  update(id: string, updateDriverDto: UpdateDriverDto) {
    return this.driverModel.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        $set: updateDriverDto,
      },
      {
        new: true,
      },
    );
  }

  remove(id: string) {
    return this.driverModel
      .deleteOne({
        _id: id,
      })
      .exec();
  }
}
