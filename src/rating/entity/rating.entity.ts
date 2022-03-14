import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  JoinColumn
} from 'typeorm';
import { Place } from 'src/place/entity/place.entity';

@Entity()
export class Rating extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column('simple-json')
  @ManyToOne((type) => Place, (place) => place.ratings)
  @JoinColumn()
  placeRating: { rating: number; review: { type: 'varchar'; length: 50 } };
}
