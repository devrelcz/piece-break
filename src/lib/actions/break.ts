import { createAction } from '@activepieces/pieces-framework';
import { StatusCodes } from 'http-status-codes';

export const breakAction = createAction({
  name: 'break',
  displayName: 'Break',
  description: 'stop the flow',
  props: {},

  async run(context) {
    const response = {
      status: StatusCodes.OK
    };

    context.run.stop({
      response: response,
    });

    return response;
  },
});
