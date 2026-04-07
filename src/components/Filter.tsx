function Filter({ filter, setFilter }) {
  return (
    <div>
      <label>Filtrer : </label>
      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="all">Tous</option>
        <option value="income">Revenus</option>
        <option value="expense">Dépenses</option>
      </select>
    </div>
  );
}

export default Filter;