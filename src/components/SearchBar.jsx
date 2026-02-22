function SearchBar({ value, onChange }) {
  return (
    <div className="input-group">
      <input
        className="form-control"
        placeholder="Search by name or email"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      
    </div>
  );
}

export default SearchBar;