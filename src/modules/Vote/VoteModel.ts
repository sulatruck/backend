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

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Vote;
