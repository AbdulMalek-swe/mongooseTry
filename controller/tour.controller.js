const {
    createToursService,
    getToursService
} = require("../service/tour.service");

exports.getTour = async (req, res, next) => {
  
    try {
      
        const query = req.query.fields.split(',').join(' ');
      
        const result = await getToursService(query);
        res.status(200).json({
            status: 'successfull',
            message: 'find tour',
            data: result
        });
    }
    catch (error) {
        next({
            status: "failed",
            message: "cant find  tour",
            data: error.message
        });
    }
}
exports.createTour = async (req, res, next) => {
    try {
        const result = await createToursService(req.body);
        res.status(200).json({
            status: 'successfull',
            message: 'update tour',
            data: result
        });
    }
    catch (error) {
        next({
            status: "failed",
            message: "could  not insert tour",
            data: error.message
        });
    }
}