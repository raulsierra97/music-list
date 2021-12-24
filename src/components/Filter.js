const Filter = ({newFilter, handleChangeFilter}) => 
<div> 
Buscador <input value={newFilter} onChange={handleChangeFilter}/>
</div>

export default Filter