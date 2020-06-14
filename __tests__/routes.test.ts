import app from "../src/app";
import request from "supertest";

describe('test Endpoints', () => {
  it('should return json', async () => {
    const res = await request(app).get('/');
    expect(res.status).toEqual(200);
    expect(res.body).toHaveProperty('message');
  });

  it('should create a new contact', async () => {
    const res = await request(app)
      .post('/contact')
      .send({
        firstName: "test",
        lastName: 'test is cool',
      });
    expect(res.status).toEqual(201);
    expect(res.body).toHaveProperty('message');
  });

  it('should fetch a single contact', async () => {
    const contactId = 1;
    const res = await request(app).get(`/contact/${contactId}`);
    expect(res.status).toEqual(200);
    expect(res.body).toHaveProperty('message');
  });

 
  it('should fetch all contact', async () => {
    const res = await request(app).get('/contact');
    expect(res.status).toEqual(200);
    expect(res.body).toHaveProperty('message');
    //expect(res.body.contact).toHaveLength(1);
  });

  it('should update a contact', async () => {
    const contactId = 1;
    const res = await request(app)
      .put(`/contact/${contactId}`)
      .send({
        firstName: "test update",
        lastName: 'test is cool',
      });

    expect(res.status).toEqual(200);
    expect(res.body).toHaveProperty('message');
    //expect(res.body.contact).toHaveProperty('title', 'updated title');
  });

  it('should delete a post', async () => {
    const contactId = 1;
    const res = await request(app).delete(`/contact/${contactId}`);
    expect(res.status).toEqual(204);
  });

  /*
  it('should return status code 500 if db constraint is violated', async () => {
    const res = await request(app)
      .post('/contact')
      .send({
        title: 'test is cool',
        content: 'Lorem ipsum',
      });
    expect(res.status).toEqual(500);
    expect(res.body).toHaveProperty('error');
  });

  it('should respond with status code 404 if resource is not found', async () => {
    const contactId = 1;
    const res = await request(app).get(`/contact/${postId}`);
    expect(res.status).toEqual(404);
  });
  */
});
