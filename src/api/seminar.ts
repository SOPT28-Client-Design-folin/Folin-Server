import express from "express";
import Seminar from "../models/Seminar";
import LineupSeminar from "../models/LineupSeminar";

import config from "../config";

const router = express.Router();

router.get('/', async(req,res) => {
    try{
        const main = await Seminar.find()
        .select("main_image")
        .where('main').equals(true);

        const follin = await Seminar.find()
        .select('title sub_image author job state price sale_price')
        .where('follin').equals(true);

        const lineup = await LineupSeminar.find().select('-title -__v');

        const data = {main, follin, lineup};

        return res.status(200).json({
            status: "200",
            message: "조회 성공",
            success: "true",
            data:data,
        })

    }catch(error){
        res.status(500).json({
            status: "500",
            message: "서버오류",
            success: "false",
        });
    }
})

module.exports = router;





