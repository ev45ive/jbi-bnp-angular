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
  