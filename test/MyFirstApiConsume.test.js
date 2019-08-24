const agent = require('superagent');
const statusCode = require('http-status-codes');
const chai = require('chai');

const { expect } = chai;

describe('First Api Tests', () => {
  it('Consume GET Service', async () => {
    const response = await agent.get('https://httpbin.org/ip');

    expect(response.status).to.equal(statusCode.OK);
    expect(response.body).to.have.property('origin');
  });

  it('Consume GET Service with query parameters', async () => {
    const requestBody = {
      name: 'John',
      age: '31',
      city: 'New York'
    };

    const response = await agent.get('https://httpbin.org/get').query(requestBody);

    expect(response.status).to.equal(statusCode.OK);
    expect(response.body.args).to.eql(requestBody);
  });

  it('HEAD', async () => {
    const response = await agent.head('https://httpbin.org/headers');

    expect(response.status).to.equal(statusCode.OK);
  });

  it('PATCH', async () => {
    const query = {
      name: 'John',
      age: '30',
      city: 'New York'
    };

    const response = await agent.patch('https://httpbin.org/patch').query(query);

    expect(response.status).to.equal(statusCode.OK);
    expect(response.body.args).to.eql(query);
  });

  it('PUT', async () => {
    const query = {
      name: 'Isa',
      age: '21',
      city: 'Montpellier'
    };

    const response = await agent.put('https://httpbin.org/put').query(query);

    expect(response.status).to.equal(statusCode.OK);
    expect(response.body.args).to.eql(query);
  });

  // DELETE:

  it('DELETE', async () => {
    const query = {
      name: 'John',
      age: '31',
      city: 'New York'
    };

    const response = await agent.delete('https://httpbin.org/delete').query(query);

    expect(response.status).to.equal(statusCode.OK);
    expect(response.body.args).to.eql(query);
  });
});
