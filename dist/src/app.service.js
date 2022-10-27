"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let AppService = class AppService {
    constructor(studentModel) {
        this.studentModel = studentModel;
    }
    async getStudents() {
        return await this.studentModel.find().exec();
    }
    async getOneStudent(id) {
        return await this.studentModel.findById(id).exec();
    }
    async updateOneStudent(id, data) {
        return await this.studentModel
            .findByIdAndUpdate({ _id: id }, data, { new: true })
            .exec();
    }
    async createStudent(data) {
        const student = new this.studentModel(data);
        return await student.save();
    }
    async deleteOneStudent(id) {
        return await this.studentModel.findByIdAndDelete({ _id: id }).exec();
    }
};
AppService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('student')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map