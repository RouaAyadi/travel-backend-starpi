module.exports = ({ env }) => ({
    // ..
   'transformer': {
      enabled: true,
      config: {
        responseTransforms: {
          removeAttributesKey: true,
          removeDataKey: true,
        },
        requestTransforms : {
          wrapBodyWithDataKey: true
        },
        hooks: {
          preResponseTransform : (ctx) => console.log('hello from the preResponseTransform hook!'),
          postResponseTransform : (ctx) => console.log('hello from the postResponseTransform hook!')
        },
        contentTypeFilter: {
          mode: 'allow',
          uids: {
            'api::trip.trip': true,
            'api::user-profile.user-profile':true,
            'api::post.post': true,
            'api::category.category': {
              'GET':true,
            }
          }
        },
        plugins: {
          ids: {
            'slugify': true,
          }
        }
      }
    },
    // ..
  });