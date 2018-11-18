const request = require('supertest');
const expect = require('expect');
const app = require('../index');
const Local = require('../db/models/local');
const { ObjectID } = require('mongodb');

const locals = [{
    _id: new ObjectID(),
    recinto: "Primeiro",
    descricao: "Primeiro Teste",
    imagem_url: "www.1.com",
    localizacao: {
        type: "Point",
        coordinates: [10, 10]
    }
}, {
    _id: new ObjectID(),
    recinto: "Segundo",
    descricao: "Segundo Teste",
    imagem_url: "www.2.com",
    localizacao: {
        type: "Point",
        coordinates: [20, 20]
    }
}];
const localTest = {
    recinto: "Teste",
    descricao: "Teste",
    imagem_url: "www.teste.com",
    localizacao: {
        type: "Point",
        coordinates: [40, 40]
    }
};

describe('Test the root path', () => {
    it('It should response the GET method', () => {
        return request(app)
            .get('/v1')
            .expect(200)

    });
})

describe('Test the local route', () => {

    beforeEach((done) => { //Before each test we empty the database
        Local.deleteMany({})
            .then(() => {
                return Local.insertMany(locals)
            })
            .then(() => done())
    });

    describe('GET/ local', () => {
        it('Should response a list with all locals', (done) => {
            request(app)
                .get('/locals')
                .expect((res) => {
                    expect(res.body.Local[0].recinto).toBe(locals[0].recinto);
                    expect(res.body.Local[1].recinto).toBe(locals[1].recinto);
                })
                .expect(200, done);
        });
    });
    describe('POST/ local', () => {
        it('Should create a new local', (done) => {
            request(app)
                .post('/locals')
                .send(localTest)
                .expect(200)
                .end((err, res) => {
                    if (err) return done(err);
                    Local.find({ descricao: 'Teste' })
                        .then((loc) => {
                            expect(loc.length).toBe(1);
                            expect(loc[0].descricao).toBe(localTest.descricao);
                            done();
                        }).catch((e) => {
                            done(e);
                        });
                });
        });
    });
});