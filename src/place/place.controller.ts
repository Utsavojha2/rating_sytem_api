import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreatePlaceDto } from './dtos/create-place.dto';
import { UpdatePlaceDto } from './dtos/update-place.dto';
import { PlaceService } from './place.service';

@Controller('places')
export class PlaceController {
  constructor(private readonly placeService: PlaceService) {}

  @Post('/add')
  addPlace(@Body() createPlaceBody: CreatePlaceDto) {
    this.placeService.addPlace(createPlaceBody);
  }

  @Patch('/update/:id')
  editPlace(@Param('id') id: string, @Body() editPlaceBody: UpdatePlaceDto) {
    return this.placeService.updatePlace(parseInt(id), editPlaceBody);
  }

  @Delete('/delete/:id')
  deletePlace(@Param('id') id: string) {
    return this.placeService.deletePlace(parseInt(id));
  }

  @Get('/')
  getAllPlaces() {
    return this.placeService.getPlaces();
  }

  @Get('/:id')
  async getPlaceById(@Param('id') id: string) {
    const place = await this.placeService.getPlaceById(parseInt(id));
    if (!place) throw new BadRequestException('Place does not exist');
    return place;
  }
}
