module.exports = (req, res, next) => {
  const sales = req.body;

  if (sales.some((p) => p.productId === undefined)) {
    return res.status(400)
      .json({ message: '"productId" is required' });
  }
  if (sales.some((q) => q.quantity === undefined)) {
    return res.status(400)
      .json({ message: '"quantity" is required' });
  }
  if (sales.some((q) => q.quantity <= 0)) {
    return res.status(422)
      .json({ message: '"quantity" must be greater than or equal to 1' });
  }
  next();
};