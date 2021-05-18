const Option = require("../models/option");

module.exports = {
  greeting: (req, res, next) => {
    res.send("Hola!");
  },

  getOptions: async (req, res) => {
    const {
      params: { string },
    } = req;

    const regex = new RegExp(`${string}*`);

    const options = await Option.find(
      { option: { $regex: `^${string}.*`, $options: "i" } },
      { option: 1, _id: 0 }
    ).exec();
    console.log({ string, options });
    res.status(200).json(
      options.map(({ option }) => {
        return option;
      })
    );
  },
};
