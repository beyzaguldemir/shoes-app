import { useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import { FilterProps } from "./Size"


const Gender = ({selected,setSelected}:FilterProps) => {
  const [params,setParams]=useSearchParams()
  // state her değistiğinde url'deki parametreleri güncelle
  useEffect(()=>{
    if(selected.length>0){
    // seçili eleman varsa aralarına , koyup url ekle
    params.set("gender",selected.join(","))
    
  }else{
    // seçili eleman yoksa url'deki parametreyi kaldır
    params.delete("gender")
    
  }
  setParams(params)
  },[selected])
  // üzerine tıklanan numara state'e yoksa ekle varsa kaldır
  

  const toggle=(gender:string)=>{
    
    const found=selected.includes(gender)
    
    if(!found){
      setSelected([...selected,gender])
    }else{
      setSelected(selected.filter((i)=>i !==gender))
    }
  }
  console.log(selected)
  return (
    <div >
      <h2 className="mb-4">Cinsiyet</h2>

      <div className="flex items-center gap-4">
        <input checked={selected.includes("men")} onChange={()=>toggle("men")} id="men" type="checkbox" />
        <label htmlFor="men" className="select-none">Erkek</label>
      </div>

      <div className="flex items-center gap-4">
        <input checked={selected.includes("women")} onChange={()=>toggle("women")} id="women" type="checkbox" />
        <label htmlFor="women" className="select-none">Kadın</label>
      </div>
    </div>
  )
}

export default Gender