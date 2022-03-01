export default function SearchBar() {
  return (
    <div className="searchbar">
      <form action="/" method="get">
        <label htmlFor="header-search">
          <span className="visually-hidden">Pesquisar produtos</span>
        </label>
        <input
          type="text"
          id="header-search"
          placeholder="Pesquisar"
          name="s"
        />
        <button type="submit" id="header-button">
          <i class="fa fa-search"></i>
        </button>
      </form>
    </div>
  );
}
