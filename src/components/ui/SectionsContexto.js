import React from 'react';

export const datas = {
    collapsado: {
      background: '#eeeeee', 
      h2: "Vivo",
      descricao: "Novo app Vivo Easy empresas"
    },
    expandido: {
      titulo: "Vivo",
      descricao: "Loram ipsum"
    }
  
};
  
  export const Contexto = React.createContext(
    datas.collapsado // default value
  );