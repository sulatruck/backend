import {
  Entity,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryColumn,
} from 'typeorm';

import Feedback from '../Feedback/FeedbackModel';
import User from '../User/UserModel';
import Rating from '../Rating/RatingModel';

@Entity('votes')
class Vote {
  @PrimaryColumn()
  id: string;

  @Column()
  feedback_id: string;

  @ManyToOne(() => Feedback)
  @JoinColumn({ name: 'feedback_id' })
  feedback: Feedback;

  @Column()
  user_id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column()
  rating_id: string;

  @ManyToOne(() => Rating)
  @JoinColumn({ name: 'rating_id' })
  rating: Rating;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Vote;
