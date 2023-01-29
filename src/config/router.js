import authRouter from '@/routes/auth';
import indexRouter from '@/routes/index';
import expedition from '@/routes/expedition'
export default function (app) {
  app.use('/', indexRouter);
  app.use('/auth', authRouter);
  app.use('/expedition',expedition)
}
