class Factory {
    createEmployee(type) {
        let employee;
        if (type === 'fulltime') {
            employee = new Fulltime();
        } else if (type === 'parttime') {
            employee = new PartTime();
        } else if (type === 'temporary') {
            employee = new Temporary();
        } else if (type === 'contractor') {
            employee = new Contractor();
        }

        employee.type = type;

        employee.say = () => {
            log.add(`${employee.type}: rate ${employee.hourly}/hour`);
        };

        return employee;

    }
}

class Fulltime {
    constructor() {
        this.hourly = '$12';
    }
}

class PartTime {
    constructor() {
        this.hourly = '$8';
    }
}

class Temporary {
    constructor() {
        this.hourly = '$10';
    }
}

class Contractor {
    constructor() {
        this.hourly = '$15';
    }
}

var log = (() => {
    let log = '';
    return {
        add: msg => { log += msg + '\n' },
        show: () => { console.log(log); log = ''; }
    };
})();

function run() {
    var employees = [];
    var factory = new Factory();
    employees.push(factory.createEmployee('fulltime'));
    employees.push(factory.createEmployee('parttime'));
    employees.push(factory.createEmployee('temporary'));
    employees.push(factory.createEmployee('contractor'));

    for (var i = 0, len = employees.length; i < len; i++) {
        employees[i].say();
    }

    log.show();
}

run();