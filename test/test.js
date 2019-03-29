const assert = require('assert');


const chai = require('chai');
const expect = chai.expect;
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised).should();

const Coffee = require('../models/coffee');

describe('sanity check', function () {
    it('should be 2', function () {
        assert.equal(2, 1 + 1);
        expect(1 + 1).to.equal(2);
    });
});

describe('coffee model', () => {
    it('should give the coffee by id', async () => {
        const coffeeData = await Coffee.getById(1);
        console.log(coffeeData);
        expect(coffeeData).to.be.an.instanceOf(Coffee);
    });
    it('should be able to retrive a coffee size by the id', async () => {
        const coffeeSize = await Coffee.getById(3);
        console.log(coffeeSize.size);
        expect(coffeeSize.size).to.equal('tall');
    });
    it('should be able to retrieve all coffee orders', async () => {
        const allCoffeeOrders = await Coffee.getAll();
        expect(allCoffeeOrders).to.be.an.instanceOf(Array);
    });
});


