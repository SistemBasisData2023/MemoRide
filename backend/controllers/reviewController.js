import { pool } from '../index.js';

export const createReview = async (req, res) => {
  const tourId = req.params.tourId;
  const { username, reviewText, rating } = req.body;

  try {
    const query = {
      text: 'INSERT INTO reviews (product_id, username, review_text, rating) VALUES ($1, $2, $3, $4) RETURNING *',
      values: [tourId, username, reviewText, rating],
    };

    const result = await pool.query(query);
    const savedReview = result.rows[0];

    res.status(200).json({
      success: true,
      message: 'Review submitted',
      data: savedReview,
    });
  } catch (err) {
    console.log(err)
    res.status(500).json({
      success: false,
      message: 'Failed to submit',
    });
  }
};
