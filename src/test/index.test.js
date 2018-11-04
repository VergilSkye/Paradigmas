
const mongoose = require("mongoose");
const { ObjectID } = require("mongodb");
const Local = require('../db/models/local');
//Require the dev-dependencies
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../index.js');
var expect = require('chai').expect;
const request = require('supertest');

describe('loading express', ()=>{
    it('respond to /v1',(done)=>{
        request(server)
        .get('/v1')
        .expect(200,(err,res)=>{
            expect(res.body).to.equal('Api page');
            done();
        });
    });
    it('404 everythin else',(done)=>{
        request(server)
        .get('/foo/bar')
        .expect(500,done);
    })
});

/*const locals = [{
    _id: new ObjectID(),
    recinto: 'Primeiro',
    descricao: 'Primeiro Teste',
    imagem_url: 'www.1.com',
    localizacao: {
        type: "Point",
        coordinates: [1, 1]
    }
}, {
    _id: new ObjectID(),
    recinto: 'Segundo',
    descricao: 'Segundo Teste',
    imagem_url: 'www.2.com',
    localizacao: {
        type: "Point",
        coordinates: [2, 2]
    }
}]

//Our parent block
describe('Locals', () => {
    beforeEach((done) => {
        Local.remove({})
            .then(() => {
                return Local.insertMany(locals);
            })
            .then(() => done());
    });
});

/*
* Test the /POST route


describe('/POST local', () => {
    it('it should create a new local', (done) => {
        let local1 = new Local({
            recinto: 'Teste',
            descricao: 'Testando Post',
            imagem_url: 'www',
            localizacao: {
                type: "Point",
                coordinates: [40, 40]
            }
        })
        chai.use(server)
            .post('/locals')
            .send({
                local1
            })
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');                
                done();
            });
    });
});


/*
* Test the /GET route

describe('/GET local', () => {
    it('it should GET all the locals', (done) => {
        chai.use(server)
            .get('/v1')
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    });
});
*/