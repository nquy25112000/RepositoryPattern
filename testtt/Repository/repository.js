"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KnexRepository = void 0;
var KnexRepository = /** @class */ (function () {
    function KnexRepository(knex, tableName) {
        this.knex = knex;
        this.tableName = tableName;
    }
    Object.defineProperty(KnexRepository.prototype, "qb", {
        get: function () {
            return this.knex(this.tableName);
        },
        enumerable: false,
        configurable: true
    });
    KnexRepository.prototype.find = function (item) {
        return this.qb
            .where(item)
            .select();
    };
    KnexRepository.prototype.delete = function (id) {
        return this.qb
            .where('id', id)
            .del();
    };
    KnexRepository.prototype.fillAll = function () {
        return this.qb
            .select();
    };
    return KnexRepository;
}());
exports.KnexRepository = KnexRepository;
