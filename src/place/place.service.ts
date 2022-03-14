import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePlaceDto } from './dtos/create-place.dto';
import { Place } from './entity/place.entity';

@Injectable()
export class PlaceService {
  constructor(@InjectRepository(Place) private placeRepo: Repository<Place>) {}

  addPlace(place: CreatePlaceDto) {
    console.log(place);
    const addedPlace = this.placeRepo.create(place);
    return this.placeRepo.save(addedPlace);
  }

  getPlaces() {
    return this.placeRepo.find();
  }

  getPlaceById(id: number) {
    return this.placeRepo.findOne(id);
  }

  async deletePlace(id: number) {
    const selectedPlace = await this.placeRepo.findOne(id);
    if (!selectedPlace)
      throw new BadRequestException('Place does not exist. Cannot be deleted!');
    return this.placeRepo.remove(selectedPlace);
  }

  async updatePlace(id: number, body: Partial<Place>) {
    const selectedPlace = await this.placeRepo.findOne(id);
    if (!selectedPlace) {
      throw new BadRequestException('Place doesnt exist. Cannot update!');
    }
    Object.assign(selectedPlace, body);
    return this.placeRepo.save(selectedPlace);
  }
}
