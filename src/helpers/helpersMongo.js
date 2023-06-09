// Retiro el idObject si es que existe
const asPOJO = (obj) => JSON.parse(JSON.stringify(obj));

const renameField = (record, from, to) => {
  record[to] = record[from];
  delete record[from];
  return record;
};

const removeField = (record, field) => {
  const value = record[field];
  delete record[field];
  return value;
};
export {
  asPOJO,
  renameField,
  removeField
}