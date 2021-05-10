const Passengers = require("../models/Passengers");
const Baggages = require("../models/Baggages");

async function getAllPassengers(req, res) {
  try {
    const passengers = await Passengers.findAll();
    return res.status(200).json({
      success: true,
      data: passengers,
    });
  } catch (error) {
    console.log(error);
    return res.status(404).json({
      success: true,
      data: error,
    });
  }
}

async function newPassenger(req, res, next) {
  const passenger = req.query;
  const { name, flightNumber, firstItem, secondItem, thirdItem } = passenger;

  try {
    const passengerCreated = await Passengers.create({ name, flightNumber });
    const consults = [];

    if (passengerCreated) {
      if (firstItem) {
        consults.push(
          Baggages.create({
            passengerId: passengerCreated.id,
            inStorage: true,
            type: firstItem,
          })
        );
      }
      if (secondItem) {
        consults.push(
          Baggages.create({
            passengerId: passengerCreated.id,
            inStorage: true,
            type: secondItem,
          })
        );
      }
      if (thirdItem) {
        consults.push(
          Baggages.create({
            passengerId: passengerCreated.id,
            inStorage: true,
            type: thirdItem,
          })
        );
      }
    }
    
    await Promise.all(consults);
    return res.status(200).json({ success: true, data: passengerCreated });
  } catch (error) {
    console.log(error)
    return next(error);
  }
}

async function getPassengerById(req, res, next) {
  const { id } = req.params;
  const passenger = {};
  try {
    const passengerInfo = await Passengers.findOne({
      where: {
        id,
      },
    });

    if (passengerInfo) {
      passenger.passenger = passengerInfo;

      const passengerBaggages = await Baggages.findAll({
        where: { passengerId: passengerInfo.id },
        order: [[`id`, `ASC`]],
      });

      if (passengerBaggages) {
        passenger.baggages = passengerBaggages;
      }
    }

    return res.status(200).json({ success: true, data: passenger });
  } catch (error) {
    console.log(error);
  }
}

async function editPassenger(req, res, next) {
  const { id } = req.params;
  const passenger = req.query;
  const { name, flightNumber, firstItem, secondItem, thirdItem } = passenger;

  try {
    const consults = [];
    const passengerInfo = await Passengers.findOne({ where: { id } });
    const baggages = await Baggages.findAll({
      where: { passengerId: id },
      order: [[`id`, `ASC`]],
    });

    if (!passenger) {
      res.redirect("/passengers");
      return next();
    }

    if (passengerInfo) {
      if (firstItem) {
        baggages[0].type ? (baggages[0].type = Number(firstItem)) : 0;
        consults.push(baggages[0].save());
      }
      if (secondItem) {
        baggages[1].type ? (baggages[1].type = Number(secondItem)) : 0;
        consults.push(baggages[1].save());
      }
      if (thirdItem) {
        baggages[2].type ? (baggages[2].type = Number(thirdItem)) : 0;
        baggages[2].save();
      }
      passengerInfo.name = name;
      passengerInfo.flightNumber = flightNumber;
      consults.push(passengerInfo.save());
    }
    await Promise.all(consults)
    return res.status(200).json({ success: true, data: `Passenger edited!` });
  } catch (error) {
    console.log(error);
  }
}

async function deletePassenger(req, res, next) {
  const { id } = req.params;
  try {
    await Baggages.destroy({ where: { passengerId: id } });
    await Passengers.destroy({ where: { id } });

    return res.status(200).json({ success: true, data: `passenger edited` });
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getAllPassengers,
  newPassenger,
  getPassengerById,
  editPassenger,
  deletePassenger,
};
