import { useId } from "react";
import "./Filters.css";
import { useFilters } from "../hooks/useFilters";

export function Filters() {
  const { filters, setFilters } = useFilters()

    const minPriceFilterdId = useId()
    const categoryFilterdId = useId()

    const handleChangeMinPrice = (event) => {
        setFilters(prevState => ({
            ...prevState, 
            minPrice: event.target.value
        }))
    }

    const handleChangeCategory = (event) => {
        setFilters(prevState => ({
            ...prevState, 
            category: event.target.value
        }))
    } 

  return (
    <section className="filters">
      <div>
        <label htmlFor={minPriceFilterdId}>Precio a partir de:</label>
        <input type="range" 
        id={minPriceFilterdId} 
        min="0" 
        max="1500" 
        onChange={handleChangeMinPrice}
        value={filters.minPrice}
        />
        <span>${filters.minPrice}</span>
      </div>

      <div>
        <label htmlFor={categoryFilterdId}>Categoria</label>
        <select id={categoryFilterdId} onChange={handleChangeCategory}>
          <option value="all">Todas</option>
          <option value="laptops">Laptops</option>
          <option value="smartphones">Celulares</option>
        </select>
      </div>
    </section>
  );
}
