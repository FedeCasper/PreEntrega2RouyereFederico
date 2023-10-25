const Item = ({product, brand, color, image, component}) => {

   return (
      <div className=" bg-slate-300 rounded-md h-min-48 w-48 p-2 cursor-pointer shadow-md">
         <img src={image} alt="" className="h-32 w-full object-cover mb-2"/>
         <h2 className=" font-bold first-letter:uppercase mb-2">{product}</h2>
         <p>{brand}</p>
         <h3>{color}</h3>
         {component}
      </div>
   )
}

export default Item