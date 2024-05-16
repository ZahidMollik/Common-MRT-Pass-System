const { StatusCodes } = require("http-status-codes");
const { journey } = require("../models");
const AppError = require("../utils/errors/app-error");

async function ScanQR(data) {
  try {
    const response = await journey.findOne({
      where: {
        code: data
      }
    });

    if (!response) {
      throw new AppError('Invalid QR Code', StatusCodes.NOT_FOUND);
    }

    if (response.ScanCount > 1) {
      throw new AppError('QR Code scan limit exceeded', StatusCodes.UNAUTHORIZED);
    }

    await response.update({ ScanCount: response.ScanCount + 1 });

    return response;
  } catch (error) {
    if (error.statusCode === StatusCodes.UNAUTHORIZED) {
      throw new AppError(error.message, error.statusCode);
    }
    if (error.statusCode === StatusCodes.NOT_FOUND) {
      throw new AppError(error.message, error.statusCode);
    }
    
    throw new AppError('Something went wrong', StatusCodes.INTERNAL_SERVER_ERROR);
  }
}

module.exports = {
  ScanQR,
};
