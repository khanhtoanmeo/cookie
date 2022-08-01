import Router from 'koa-router';
import * as sampleController from '@functions/controllers/sampleController';
import * as shopController from '@functions/controllers/shopController';
import * as subscriptionController from '@functions/controllers/subscriptionController';
import {verifyRequest} from '@avada/shopify-auth';

export default function apiRouter(isEmbed = false) {
  const router = new Router({prefix: '/api' + (isEmbed ? '' : 'Sa')});

  if (!isEmbed) {
    router.use(verifyRequest());
  }

  router.get('/samples', sampleController.exampleAction);
  router.get('/shops', shopController.getUserShops);
  router.get('/subscription', subscriptionController.getSubscription);

  return router;
}
