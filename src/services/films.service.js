const Films = require("../models/Films.model");


const allMovieAdminPage = async(req,res)=>{
  const films = await Films.find()
                .populate("category")
                .sort({createdAt: -1});

  res.status(200).json({
    success: true,
    data: films
  })
}

const getByCategoryFilms = async (req, res) => {
  const { categoryId } = req.params;
  if (!categoryId) {
    return res.json({ error: "Bunday category topilmadi!" });
  }

  const page = req.query.page || 1;
  const limit = 12;
  const films =  await Films.find({ category: categoryId })
    .populate("category")
    .sort({ createdAt: -1 })
    .skip((page - 1) * limit)
    .limit(limit * 1)

  const count = await Films.find({category: categoryId}).countDocuments();
  res.status(200).json({
    success: true,
    data: films,
    pages: Math.ceil(count / limit),
  });
};

const getByGenreFilms = async (req, res) => {
  const { genre } = req.params;

  const page = req.query.page || 1;
  const limit = 12;
  const filmGenre = await Films.find({genres: genre})
    .sort({ createdAt: -1 })
    .skip((page - 1) * limit)
    .limit(limit * 1)

  const count = await Films.find({genres: genre}).countDocuments();

    res.status(200).json({
      success: true,
      data: filmGenre,
      pages: Math.ceil(count / limit),
    });
};

const getByCountryFilms = async (req, res) => {
  const { country } = req.params;
  const page = req.query.page || 1;
  const limit = 12;
  const films = await Films.find({ country: country })
    .sort({ createdAt: -1 })
    .skip((page - 1) * limit)
    .limit(limit * 1)

  const count = await Films.find({country: country}).countDocuments();
  res.status(200).json({
    success: true,
    data: films,
    pages: Math.ceil(count / limit),
  });
};

const allGetFilms = async (req, res) => {
  const page = req.query.page || 1;
  const limit = 12;

  const films = await Films.find()
    .sort({ createdAt: -1 })
    .skip((page - 1) * limit)
    .limit(limit * 1)

  const count = await Films.countDocuments();
  res.status(200).json({
    success: true,
    data: films,
    pages: Math.ceil(count / limit),
  });
};

const GetByIdFilms = async (req, res) => {
  let viewCountInc = await Films.findByIdAndUpdate(
    { _id: req.params.id },
    { $inc: { viewCount: 1 } }
  );
  viewCountInc.save();
  let films = await Films.findById({ _id: req.params.id });
  try {
    res.status(200).json({
      success: true,
      data: films,
    });
  } catch (error) {
    res.status(500).json({
      success: true,
      data: error.message,
    });
  }
};

const addFilms = async (req, res) => {
  const newFilms = new Films(req.body);
  try {
    const savedFilms = await newFilms.save();

    return res.status(201).json({
      success: true,
      data: savedFilms,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      data: error.message,
    });
  }
};

const filmsLikeAdd = async (req, res) => {
  try {
    const updateLikeFilm = await Films.findByIdAndUpdate(
      { _id: req.params.id },
      {
        $inc: { likes: 1 },
      }
    );
    updateLikeFilm.save();
    res.json({
      success: true,
      data: `${updateLikeFilm.title} like bosildi!`,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      data: error.message,
    });
  }
};

const editFilm = async (req, res) => {
  try {
    const updateFilm = await Films.findByIdAndUpdate(
      { _id: req.params.id },
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );
    res.status(201).json({
      success: true,
      data: updateFilm,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      data: error.messagea,
    });
  }
};

const deleteFilms = async (req, res) => {
  try {
    const GetByIdFilmsTitle = await Films.findById({ _id: req.params.id });
    await Films.findByIdAndDelete({ _id: req.params.id });
    res.status(200).json({
      success: true,
      data: `Delete Films Title: ${GetByIdFilmsTitle}`,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      data: error.message,
    });
  }
};

module.exports = {
  allGetFilms,
  addFilms,
  editFilm,
  deleteFilms,
  GetByIdFilms,
  getByCategoryFilms,
  getByGenreFilms,
  getByCountryFilms,
  filmsLikeAdd,
  allMovieAdminPage
};
