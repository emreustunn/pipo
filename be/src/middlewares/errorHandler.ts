import { Request, Response, NextFunction } from 'express';

export const errorHandler = (
  err: any,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  console.error('💥 Error:', err.message);
  res.status(err.status || 500).json({
    message: err.message || 'Sunucu hatası',
    ...(process.env.NODE_ENV !== 'production' && { stack: err.stack }),
  });
};
