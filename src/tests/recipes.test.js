const supertest = require('supertest');
const app = require('../app');

const request = supertest(app);

describe('GET /recipes/:ingredients', () => {
  it('Gets the recipes endpoint', async done => {
    const res = await request.get('/recipes/chicken');
    console.log(res);

    expect(res.status).toEqual(200);
    expect(res.text.length).toBe(2);
    done();
  });
});
