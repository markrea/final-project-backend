const supertest = require('supertest');
const app = require('../app');

const request = supertest(app);

describe('GET /recipes/:ingredients', () => {
  it('Gets the recipes endpoint', async done => {
    const res = await request.get('/moreDetails/524312');
    console.log(res);

    expect(res.status).toEqual(200);
    done();
  });
});
