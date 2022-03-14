import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { Rating } from 'src/rating/entity/rating.entity';

@Entity()
@Unique(['name'])
export class Place extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar' })
  location: string;

  @Column()
  priceRange: number;

  @OneToMany((type) => Rating, (ratings) => ratings.placeRating, {
    eager: true,
  })
  ratings: Rating[];
}
