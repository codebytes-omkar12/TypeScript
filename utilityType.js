"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//creates a type only using name and price field
const product1 = {
    name: "symphony",
    price: 4000
};
//all properties becomes optional
const product2 = {};
const product3 = {
    name: "voltas",
    price: 6000
};
const product4 = {
    name: "voltas",
    price: 6000,
    id: 12,
    description: "Good Cooler"
};
const Product5 = {
    name: "hras",
    price: 8000,
    id: 14,
    description: "Good Cooler"
};
const cats = {
    miffy: { age: 10, breed: "Persian" },
    boris: { age: 5, breed: "Maine Coon" },
    mordred: { age: 16, breed: "British Shorthair" },
};
//awaited type
function fetchData() {
    return __awaiter(this, void 0, void 0, function* () {
        return 42;
    });
}
