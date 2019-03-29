const db = require('./conn');


class Coffee {
    constructor(id, name, order, size) {
        this.id = id;
        this.name = name;
        this.order = order;
        this.size = size;
    }

    static getById(id) {
        return db.one(`select * from coffee where id=${id}`)
            .then((coffeeData) => {
                const coffeeInstance = new Coffee(coffeeData.id,
                                                  coffeeData.name,
                                                  coffeeData.order,
                                                  coffeeData.size
                                                  );
                return coffeeInstance;
            })
            .catch(() => {
                return null;
            })

    }

    save() {
        return db.result(`
        update coffee set
        name=${this.name},
        order=${this.order},
        size=${this.size},
    where id=${this.id}
        `)
    }
}

module.exports = Coffee;