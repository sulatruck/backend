import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import User from '../User/UserModel';
import Service from '../Service/ServiceModel';

@Entity('ratings')
class Rating {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  value: boolean;

  @Column()
  comment: string;

  @Column()
  anonymous: boolean;

  @Column()
  user_id: string;

  @Column()
  service_id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Service)
  @JoinColumn({ name: 'service_id' })
  service: Service;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Rating;
