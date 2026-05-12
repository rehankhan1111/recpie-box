const express = require("express");
const router = express.Router();

const Recipe = require("../models/Recipe");


// CREATE
router.post("/", async (req, res) => {

    const recipe = new Recipe(req.body);

    await recipe.save();

    res.json(recipe);
});


// READ
router.get("/", async (req, res) => {

    const recipes = await Recipe.find();

    res.json(recipes);
});


// UPDATE
router.put("/:id", async (req, res) => {

    const updatedRecipe = await Recipe.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );

    res.json(updatedRecipe);
});


// DELETE
router.delete("/:id", async (req, res) => {

    await Recipe.findByIdAndDelete(req.params.id);

    res.json({ message: "Recipe Deleted" });
});

module.exports = router;