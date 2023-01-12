const { Router } = require("express");
const { getAllDiets } = require("../controllers/controllerDiet.js");
const router = Router();

router.get("/", async (req, res) => {
  try {
    const infoApi = await getAllDiets();
    res.status(200).send(infoApi);
  } catch (error) {
    res.status.send(`Error: ${error}`);
  }
});

module.exports = router;
