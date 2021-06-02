import express from "express";
import mongoose from "mongoose";
import Story from "../models/Story";
// import ThemaTitle from "../models/ThemaTitle";
const router = express.Router();

/**
 *  @route Post api/story
 *  @desc Register story
 *  @access Public
 */

router.get('/', async (req, res) => {
  try {
    const main = await Story.findOne();
    const best = await Story.find().limit(4);

    //const themaTitle = await ThemaTitle.find();

    const themaTitle = ["일하는 방식을 실험하는 브랜드, 모베리웍스"];
    const themaStories = await Story.find().limit(6);

    const thema = {themaTitle,themaStories};
    const popular = await Story.find().limit(10);
    const result = { main, best,thema, popular};
  return res.status(200).json({ status: 200, message: "메인화면 조회 성공 ^_^", data: result });
  } catch(error) {
    return res.status(500).json({ status: 500, message: "메인화면 조회 실패 ㅠㅅㅠ" });
  }
}); 

module.exports = router;