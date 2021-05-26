import express from "express";
import Seminar from "../models/Seminar";
import LineupSeminar from "../models/LineupSeminar";

import config from "../config";

const router = express.Router();


//메인 이미지 조회 
router.get("/main", async(req,res) => {
    try{

        const seminars = await Seminar.find()
                    .select("main_image")
                    .where('main').equals(true);
        
        if(seminars.length<1){
            return res.status(404).json({
                status: "404",
                message: "필요한 값이 없습니다",
                success: "false",
            });
        }
        
        res.json({
            status: "200",
            success: "true",
            message: "조회 성공",
            data: seminars,
        });

    }catch(error){
        res.status(500).json({
            status: "500",
            message: "서버오류",
            success: "false",
        });
    }
})


//폴인 세미니 조회 
router.get("/follin", async(req,res) => {
    try{
        const seminars = await Seminar.find()
                    .select('title sub_image author job state price sale_price')
                    .where('follin').equals(true);

        if(seminars.length<1){
            return res.status(404).json({
                status: "404",
                message: "필요한 값이 없습니다",
                success: "false",
            });
        }

        res.json({
            status: "200",
            success: "true",
            message: "조회 성공",
            data: seminars,
        });


    }catch(error){
        res.status(500).json({
            status: "500",
            message: "서버오류",
            success: "false",
        });
    }


});

//라인업 조회 
router.get("/lineup", async(req,res) => {
    try{
        const seminars = await LineupSeminar.find().select('-title');
        if(seminars.length<1){
            return res.status(404).json({
                status: "404",
                message: "필요한 값이 없습니다",
                success: "false",
            });
        }

        res.json({
            status: "200",
            success: "true",
            message: "조회 성공",
            data: seminars,
        });


    }catch(error){
        res.status(500).json({
            status: "500",
            message: "서버오류",
            success: "false",
        });
    }
})

module.exports = router;





