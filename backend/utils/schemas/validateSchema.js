module.exports = (schema, body) => {
  const { error } = schema.validate(body);
  if (error) throw error;
};
