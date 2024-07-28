const {obtenerInfoSistema}=require('../modelo/systemModel');
module.exports={obtenerInfoSistema};

function obtenerInfo(req,res){
  const systemInfo=obtenerInfoSistema();
  res.json(systemInfo);
}

module.exports={obtenerInfo};
