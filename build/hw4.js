var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function logger(...arg) {
    if (arg.length === 1) {
        console.log('Class instance was created');
    }
    else if (arg[2]) {
        const descriptor = arg[2];
        const originalValue = descriptor.value;
        descriptor.value = function (...args) {
            console.log(`${originalValue.name} metod was called`);
            return originalValue.apply(this, args);
        };
        return descriptor;
    }
    else {
        const key = arg[1];
        let val = this[key];
        const getter = function () {
            console.log(`Get: ${key} => ${val}`);
            return val;
        };
        const setter = function (newVal) {
            console.log(`Set: ${key} => ${newVal}`);
            val = newVal;
        };
        if (delete this[key]) {
            Object.defineProperty(arg[0], key, {
                get: getter,
                set: setter,
                enumerable: true,
                configurable: true
            });
        }
    }
}
let Dog = class Dog {
    constructor(name) {
        this.name = name;
    }
    bark() {
        console.log(`${this.name} barks`);
    }
};
__decorate([
    logger,
    __metadata("design:type", String)
], Dog.prototype, "name", void 0);
__decorate([
    logger,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Dog.prototype, "bark", null);
Dog = __decorate([
    logger,
    __metadata("design:paramtypes", [String])
], Dog);
const greeter = new Dog('Alex');
greeter.bark();
greeter.name;
