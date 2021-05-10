const Baggages = require("../models/Baggages");
const Passengers = require("../models/Passengers");

const getAllBaggages = async (req, res) => {
  try {
    const baggages = await Baggages.findAll();

    return res.status(200).json({
      success: true,
      baggages
    });
    
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
};

module.exports = {
  getAllBaggages,
};
