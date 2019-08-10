export default {
  Venue: {
    id: venue => venue.id,
    name: venue => venue.name,
    address: venue => venue.address,
    // __isTypeOf: (stuff) => {
    //   // this doesn't work either
    //   console.log(stuff)

    //   // shows this error
    //   // {
    //   //   "errors": [
    //   //     {
    //   //       "message": "Cannot read property 'session' of undefined",
    //   //       "locations": [
    //   //         {
    //   //           "line": 3,
    //   //           "column": 5
    //   //         }
    //   //       ],
    //   //       "path": [
    //   //         "featuredConcert",
    //   //         "organiser"
    //   //       ],
    //   //       "extensions": {
    //   //         "code": "INTERNAL_SERVER_ERROR",
    //   //         "exception": {
    //   //           "stacktrace": [
    //   //             "TypeError: Cannot read property 'session' of undefined",
    //   //             "    at GraphQLObjectType.typeResolvers.<computed> [as isTypeOf] (/mnt/c/Users/Vlady/Documents/Code/gql-unions/node_modules/@graphql-modules/core/src/graphql-module.ts:1080:37)",
    //   //             "    at defaultTypeResolver (/mnt/c/Users/Vlady/Documents/Code/gql-unions/node_modules/graphql/execution/execute.js:798:33)",
    //   //             "    at completeAbstractValue (/mnt/c/Users/Vlady/Documents/Code/gql-unions/node_modules/graphql/execution/execute.js:686:21)",
    //   //             "    at completeValue (/mnt/c/Users/Vlady/Documents/Code/gql-unions/node_modules/graphql/execution/execute.js:621:12)",
    //   //             "    at /mnt/c/Users/Vlady/Documents/Code/gql-unions/node_modules/graphql/execution/execute.js:528:16",
    //   //             "    at processTicksAndRejections (internal/process/task_queues.js:85:5)",
    //   //             "    at async Promise.all (index 0)",
    //   //             "    at async Promise.all (index 0)"
    //   //           ]
    //   //         }
    //   //       }
    //   //     }
    //   //   ],
    //   //   "data": {
    //   //     "featuredConcert": {
    //   //       "organiser": null
    //   //     }
    //   //   }
    //   // }
    // }
  }
}