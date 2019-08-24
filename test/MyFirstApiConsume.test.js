const agent = require('superagent');
const statusCode = require('http-status-codes');
const chai = require('chai');

const expect = chai.expect;

describe('First Api Tests', () => {

    // GET: El método GET  solicita una representación de un recurso específico. Las peticiones que usan el método GET sólo deben recuperar datos.

    it('Consume GET Service', async () => {
        const response = await agent.get('https://httpbin.org/ip');
      
        expect(response.status).to.equal(statusCode.OK);
        expect(response.body).to.have.property('origin');
    });
    
    it('Consume GET Service with query parameters', async () => {
        const query = {
          name: 'John',
          age: '31',
          city: 'New York'
        };
      
        const response = await agent.get('https://httpbin.org/get').query(query);
      
        expect(response.status).to.equal(statusCode.OK);
        expect(response.body.args).to.eql(query);
    });

      // HEAD: El método HEAD pide una respuesta idéntica a la de una petición GET, pero sin el cuerpo de la respuesta.

    it('HEAD', async () => {
        
        const response = await agent.get('https://httpbin.org/headers');
      
        expect(response.status).to.equal(statusCode.OK);
        
    });

      // PATCH: El método PATCH  es utilizado para aplicar modificaciones parciales a un recurso.

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

      // PUT: El modo PUT reemplaza todas las representaciones actuales del recurso de destino con la carga útil de la petición.

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