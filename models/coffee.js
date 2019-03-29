const db = require('./conn');


class Coffee {
    constructor(id, name, orders, size) {
        this.id = id;
        this.name = name;
        this.orders = orders;
        this.size = size;
    }

    static getById(id) {
        return db.one(`select * from coffee where id=${id}`)
            .then((coffeeData) => {
                const coffeeInstance = new Coffee(coffeeData.id,
                                                  coffeeData.name,
                                                  coffeeData.orders,
                                                  coffeeData.size
                                                  );
                return coffeeInstance;
            })
            .catch(() => {
                return null;
            })

    }

    static getAll() {
        return db.any(`select * from coffee`)
            .then((arrayOfCoffeeOrders) => {
                return arrayOfCoffeeOrders.map((coffeeData) => {
                    const aCoffeeOrder = new Coffee(
                        coffeeData.id,
                        coffeeData.name,
                        coffeeData.orders,
                        coffeeData.size
                        );
                        console.log(aCoffeeOrder);
                        return aCoffeeOrder;
                });
            })
    }

    save() {
        return db.result(`
        update coffee set
        name=${this.name},
        order=${this.orders},
        size=${this.size},
    where id=${this.id}
        `)
    }
}

module.exports = Coffee;