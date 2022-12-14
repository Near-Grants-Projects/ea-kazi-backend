/** @format */

import { injectable } from 'tsyringe';
import { IRequest, IResponse } from '../common/http.interface';
import { ApplyJobService } from '../services/apply_job.service';

@injectable()
export class ApplyJobController {
  constructor(private applyJobService: ApplyJobService) {}

  createJobApplication = async (req: IRequest, res: IResponse) => {
    try {
      req.body.user_id = req.body.user.userId;
      return res.ok(
        await this.applyJobService.applyForJob(req.body),
        'Job applied successfully'
      );
    } catch (error) {
      return res.serverError(
        error,
        error.message || 'An error occured while applying for job'
      );
    }
  };

}
