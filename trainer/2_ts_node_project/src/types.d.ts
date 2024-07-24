// export {} 

// 2_ts_node_project\node_modules\@types\node\process.d.ts
// declare global { // escape from this module 
    namespace NodeJS {
      interface ProcessEnv {
        BANANA?: string; 
        SECRET?: string; 
      }
    }
//   }
  
import { User } from './model/User';


declare global {
  namespace Express {
    interface Request {
      user?: User;
    }
  }
}

declare module 'express-session' {
  interface SessionData {
      views: number;
  }
}