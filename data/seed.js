import mongoose from "mongoose";
import data from "./mock.js";
import Task from "../models/Task.js";
// import { DATABASE_URL } from "../env.js";
import * as dotenv from "dotenv";
dotenv.config();

// 데이터베이스를 초기 데이터로 리셋하는 역할
// mongoose.connect(DATABASE_URL);
mongoose.connect(process.env.DATABASE_URL);

// 기존에 있던 Task를 모두 지우고 import해 온 데이터 삽입
// 모델 뒤에 . 찍고 연산 이름 작성
await Task.deleteMany({}); //삭제 조건을 파라미터로
await Task.insertMany(data); //삽입할 데이터를 파라미터로

mongoose.connection.close();
