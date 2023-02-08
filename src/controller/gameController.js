const gameModel = require("../Model/gameModel");

exports.getHomePage = (req, res) => {
  res.status(200).render("index");
};

exports.getAudits = async (req, res) => {
  try {
    const user = await gameModel.find();
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.getAudit = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await gameModel.findById(id);
    if (!user) {
      res.status(404).json(`User Doesn't Exist`);
    } else {
      res.status(200).json(user);
    }
  } catch (err) {
    res.status(404).json(err);
  }
};

exports.createAudit = async (req, res) => {
  try {
    const user = new gameModel({
      Player_name: req.body.name,
      status: req.body.active,
      date:req.body.date
    });
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.updateAudit = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await gameModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!user) {
      res.status(400).json(`User Doesn't Exist`);
    } else {
      res.status(200).json(user);
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.deleteAudit = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await gameModel.findByIdAndDelete(id);
    if (!user) {
      res.status(400).json(`User Doen't Exist`);
    } else {
      res.status(200).json(user);
    }
  } catch (err) {
    res.status(500).json(err);
  }
};